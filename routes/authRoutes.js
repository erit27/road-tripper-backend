const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const postController = require('../controllers/postController')

router
  .route('/createaccount')
  .post(authController.createAccount);

router
  .route('/login')
  .post(authController.login)

router
  .route('/locations')
  .get(postController.getLocations)

  module.exports = router;