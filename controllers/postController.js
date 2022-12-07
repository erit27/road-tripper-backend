const knex = require("knex")(require("../knexfile"));

exports.getPosts = (req, res) => {
  knex("posts")
    .then((data) => {
        const postData = data.map( post => {
          return {
            id: post.id,
            title: post.title,
            userId: post.user_id,
            heroUrl: post.hero_photo_url,
            timestamp: post.created_at
          }
        }
          )
        res.json(postData)
      })
    .catch((err) => {
      res.status(400).json({
        'message': 'There was an error getting post data',
        'error': err
      })
    })
}


exports.postInfo = (req, res) => {
  knex("posts")
    .join('users', {'users.id': 'posts.user_id'})
    .select('posts.title', 'users.first_name', 'posts.created_at', 'users.last_name', 'posts.hero_photo_url', 'posts.id')
    .then((data) => {
      res.status(200).json(data)
      })
    .catch((err) => {
      res.status(400).json({
        'message': 'There was an error getting post data',
        'error': err
      })
    })
}

exports.getSinglePublicPost = (req, res) => {
  knex('posts')
    .where( {id: req.params.postID })
    .then((data) => {
      const publicPostData = data.map (post => {
        return {
          id: post.id,
          userId: post.user_id,
          title: post.title,
          heroPhotoUrl: post.hero_photo_url,
          content: post.content,
          timestamp: post.created_at
        }
      })
      res.status(200).json(publicPostData);
    })
    .catch((err) => {
      res.status(500).json({
        'message': `error retrieving post ${req.params.id}`,
        'error': err
      })
    })
}

exports.getSinglePrivatePost = (req, res) => {
  knex('posts')
    .where( {id: req.params.postID })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        'message': `error retrieving post ${req.params.id}`,
        'error': err
      })
    })
}