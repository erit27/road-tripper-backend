const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')

router
  .route('/')
  .get(postController.getPosts);

router
  .route('/:postID')
  .get(postController.getSinglePublicPost)

router
  .route('/:postID/private')
  .get(postController.getSinglePrivatePost)

  module.exports = router;