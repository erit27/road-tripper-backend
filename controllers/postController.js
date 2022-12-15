const knex = require("knex")(require("../knexfile"));
require('dotenv').config()
JWT_SECRET = process.env.JSONSECRETKEY;
const jwt = require('jsonwebtoken');
const { uuid } = require("uuidv4");

function getToken(req) {
  if (req.headers.authorization) {
    return req.headers.authorization.split(" ")[1];
  } else {
    return 
  }
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

exports.createPost =  (req, res) => {
  if (
    !req.body.user_id ||
    !req.body.title ||
    !req.body.content ||
    !req.body.private_content
  ) {
    res.status(400).json({
      message: 'Error: Your request is missing data field/s'
    })
  } else {
    const newId = uuid();
    const newPost = {
      id: newId,
      user_id: req.body.user_id,
      title: req.body.title,
      hero_photo_url: req.body.hero_photo_url,
      content: req.body.content,
      private_content: req.body.private_content
    };
    knex("posts")
      .insert(newPost)
      .then((response) => {
        res.status(201).json({
          message: 'New post added successfully'
        })
      }) 
      .catch(() => {
        res.status(400).json({ 
          message: 'Error adding new post'
        })
      })
  }
};

exports.getLocations = (req, res) => {
  knex("location")
    .then(async (data) => {
      const token = getToken(req); 
      const decoded = jwt.decode(token)
      // console.log(jwt.decode(token))
      if(token && decoded && (decoded.access === 'family' || decoded.access === 'admin') && jwt.verify(token, JWT_SECRET)) {
        const privateLocations = data.map(loc => {
          return {
            lat: loc.private_lat,
            long: loc.private_long
          }
        })
        res.status(200).json(privateLocations)
      } else {
        const publicLocations = data.map(loc => {
          return {
          lat: loc.latitude,
          long: loc.longitude
          }
        })
        res.status(200).json(publicLocations)
      }
    })
}

exports.getSinglePost = (req, res) => {
  knex("posts")
    .join('users', {'users.id': 'posts.user_id'})
    .select('posts.title', 'users.first_name', 'users.last_name', 'posts.created_at', 'posts.hero_photo_url', 'posts.content', 'posts.private_content', 'posts.id')
    .where({'posts.id': req.params.postId})
    .then(async (data) => {
      const token = getToken(req); 
      // console.log('token', token);
      const decoded = jwt.decode(token)
      // console.log('decoded', decoded);
      if((token && decoded && decoded.access === 'family') && jwt.verify(token, JWT_SECRET)) {
        const privateData = data[0];
        res.status(200).json(privateData)
      } else {
        const publicData = data.map(post => {
          return {
          id: post.id,
          title: post.title,
          first_name: post.first_name,
          last_name: post.last_name,
          hero_photo_url: post.hero_photo_url,
          content: post.content,
          created_at: post.created_at
          }
        })
        res.status(200).json(publicData[0])
      }
    })
}
