require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
	secure: true
})

exports.getPhotos = (req, res) => {
  cloudinary.api.resources({type:"upload"}, function(error, result){})
  .then((result) => {
    res.status(200).json(result.resources)
  })
}
