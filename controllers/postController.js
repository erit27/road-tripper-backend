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

exports.getLocations = (req, res) => {
  knex("location")
    .then(async (data) => {
      const token = getToken(req); 
      const decoded = jwt.decode(token)
      if((token && decoded.access === 'family') && jwt.verify(token, JWT_SECRET)) {
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
    .where({id: req.params.postId})
    .then(async (data) => {
      const token = getToken(req); 
      const decoded = jwt.decode(token)
      if((token && decoded.access === 'read') && jwt.verify(token, JWT_SECRET)) {
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
