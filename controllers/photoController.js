require('dotenv').config()
const cloudinary = require('cloudinary').v2;
const axios = require('axios')
CLOUD_NAME = process.env.CLOUDINARY_NAME
CLOUD_KEY = process.env.CLOUDINARY_KEY;
CLOUD_SECRET = process.env.CLOUDINARY_SECRET;

// https://stackoverflow.com/questions/36718734/how-to-list-all-the-images-videos-within-a-folder-from-cloudinary-in-node-js
cloudinary.config({
	secure: true
})

exports.getPhotos = (req, res) => {
  cloudinary.api.resources({type:"upload"}, function(error, result){console.log(error, result)})
  .then((result) => {
    res.status(200).json(result.resources)
    console.log(result.resources)
  })
}