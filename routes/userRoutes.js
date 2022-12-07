const express = require('express');
const router = express.Router();
const authController = require('../controllers/userController')

router
  .route('/')
  .get(authController.getUsers);


  module.exports = router;