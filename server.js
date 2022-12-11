const express = require('express');
const app = express();
require('dotenv').config()
PORT = process.env.PORT || 5050;
JWT_SECRET = process.env.JSONSECRETKEY;
const jwt = require('jsonwebtoken');
// const {uuid} = require('uuidv4');
const cors = require('cors');
// const bcrypt = require('bcrypt');
// const { default: knex } = require('knex');
// const { response } = require('express');
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes')
const photoRoutes = require('./routes/photoRoutes')

app.use(cors())
app.use(express.json())
app.use(express.static('public'));

app.use(( req, res, next )=>{
	next() 
})

function getToken(req) {
  if (req.headers.authorization) {
    return req.headers.authorization.split(" ")[1];
  } else {
    return 
  }
}

// set up access to pages based on logged in status
function checkToken(req, _res, next) {
	const token = getToken(req);
	if (token && jwt.verify(token, JWT_SECRET)) {
		req.user = jwt.decode(token); //attach decoded token to req object
		next();
	} else {
		res.status(401).send('No valid token sent')
		next();
	}
}

app.get('/profile', checkToken, (req, res) => {
	if (req.user) {
		res.json({
			user: req.user
		})
	}
})

app.use('/', authRoutes)
app.use('/posts', postRoutes)
app.use('/users', userRoutes)
app.use('/photos', photoRoutes)

app.listen(PORT, function () {
	console.log(`🚀 💻 server running at http://localhost:${PORT} 📡 🚀`);
});


