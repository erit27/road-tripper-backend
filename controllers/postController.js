const knex = require("knex")(require("../knexfile"));
require('dotenv').config()
JWT_SECRET = process.env.JSONSECRETKEY;
const jwt = require('jsonwebtoken');

function getToken(req) {
  if (req.headers.authorization) {
    return req.headers.authorization.split(" ")[1];
  } else {
    return 
  }
}

// set up access to pages based on logged in status
function checkToken(req, _res, next) {
	const token = getToken(req);
	if (token && jwt.verify(token, JWT_SECRET)) {
		req.user = jwt.decode(token); //attach decoded token to req object
		next();
	} else {
		res.status(401).send('No valid token sent')
		next();
	}
}

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

exports.getSinglePost = (req, res) => {
  knex("posts")
    .where({id: req.params.postId})
    .then(async (data) => {
      const token = getToken(req); 
      const decoded = jwt.decode(token)
      if(decoded.access === 'read' && jwt.verify(token, JWT_SECRET)) {
        const privateData = data;
        res.status(200).json(privateData)
      } else {
        const publicData = data.map(post => {
          return {
          id: post.id,
          userId: post.user_id,
          title: post.title,
          heroPhotoUrl: post.hero_photo_url,
          content: post.content,
          timestamp: post.created_at
          }
        })
        res.status(200).json(publicData)
      }
    })
}

// app.get(`posts/:postId`, checkToken, (req, res) => {
// 	if(req.user) {
// 		res.send('you get private data')
// 	} else {
// 		res.status(400).send('you get the public data')
// 	}
// })

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