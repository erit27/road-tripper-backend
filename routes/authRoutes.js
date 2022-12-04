const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

router
  .route('/createaccount')
  .post(authController.createAccount);

  module.exports = router;