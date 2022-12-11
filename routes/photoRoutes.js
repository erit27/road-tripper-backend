const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController')

router
  .route('/')
  .get(photoController.getPhotos);

  module.exports = router;