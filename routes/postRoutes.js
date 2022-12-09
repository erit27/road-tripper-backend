const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')

// router
//   .route('/')
//   .get(postController.getPosts);

  router
  .route('/postinfo')
  .get(postController.postInfo)

router
  .route('/:postId')
  .get(postController.getSinglePost)



// router
//   .route('/:postID/private')
//   .get(postController.getSinglePrivatePost)

  module.exports = router;

  