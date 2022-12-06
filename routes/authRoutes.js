const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

router
  .route('/createaccount')
  .post(authController.createAccount);

router
  .route('/login')
  .post(authController.login)

  module.exports = router;