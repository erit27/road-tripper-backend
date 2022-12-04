const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
const authController = require('../controllers/authController');

router
  .route('/')
  .post(authController.createUser);

