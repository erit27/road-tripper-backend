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
  .delete(postController.deletePost)

  router
  .route('/new')
  .post(postController.createPost)

  module.exports = router;

  