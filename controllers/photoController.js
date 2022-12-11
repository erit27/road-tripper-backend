require('dotenv').config()
const cloudinary = require('cloudinary').v2;
const axios = require('axios')
CLOUD_NAME = process.env.CLOUDINARY_NAME
CLOUD_KEY = process.env.CLOUDINARY_KEY;
CLOUD_SECRET = process.env.CLOUDINARY_SECRET;


cloudinary.config({
	secure: true
})

exports.getPhotos = (req, res) => {
  cloudinary.api.resources({type:"upload"}, function(error, result){console.log(error, result)})
  .then((result) => {
    res.status(200).json(result.resources)
    console.log(result.resources)
  })
  // await axios
  //   .post(`https://${CLOUD_KEY}:${CLOUD_SECRET}@api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`, {
  //     auth: {
  //       username: process.env.CLOUD_KEY,
  //       password: process.env.CLOUD_SECRET
  //     }
  //   })
  //   .then((response) => {
  //     console.log(response.data.resources)
  //     // res.status(200).json(data.data.resouces)
  //     })
  //   .catch(err => console.log(err))
}