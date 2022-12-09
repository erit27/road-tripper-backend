const express = require('express');
const router = express.Router();
const authController = require('../controllers/userController')

router
  .route('/')
  .get(authController.getUsers);

router
  .route('/updatepermissions')
  .put(authController.updateUser);

  module.exports = router;