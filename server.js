const express = require('express');
const app = express();
require('dotenv').config()
PORT = process.env.PORT || 5050;
JWT_SECRET = process.env.JSONSECRETKEY;
const jwt = require('jsonwebtoken');
const {uuid} = require('uuidv4');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { default: knex } = require('knex');
const { response } = require('express');
const authRoutes = require('./routes/authRoutes')

app.use(cors())
app.use(express.json())
// app.use(( req, res, next )=>{
// 	next() 
// })

app.use(( req, res, next )=>{
	next() 
})

function getToken(req) {
	return req.headers.authorization.split(" ")[1];
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

// app.post('/login', async (req, res) => {
// 	const foundUser = users.find( user => user.username === req.body.username)
// 	if (foundUser == null ) {
// 		return res.status(400).send('cannot find user')
// 	}
// 	try {
// 		if (await bcrypt.compare(req.body.password, foundUser.password)) {
// 			const user = {
// 				id: foundUser.id, 
// 				username: foundUser.username, 
// 				firstName: foundUser.firstName,
// 				lastName: foundUser.lastName
// 			}
// 			console.log('login success!')
// 			const jwtToken = jwt.sign(user ,JWT_SECRET);
// 			res.json({
// 				message: 'login success',
// 				token: jwtToken,
// 			});
// 		} else {
// 			res.status(401).send('This is not a valid user/password')
// 		}
// 	} catch {
// 		res.status(500).send();
// 	}
// })

app.get('/posts', checkToken, (req, res) => {
	res.json(posts.filter(post => post.username === req.user.username))
})

app.get('/profile', checkToken, (req, res) => {
	if (req.user) {
		res.json({
			user: req.user
		})
	}
})


app.use('/', authRoutes)

app.listen(PORT, function () {
	console.log(`🚀 💻 server running at http://localhost:${PORT} 📡 🚀`);
});

// const users = [
// 	{
// 		username: 'eilidh',
// 		password: 'test',
// 		id: 1,
// 		firstName: 'Eilidh',
// 		lastName: 'Ritchie'
// 	},
// 	{
// 		username: 'jim',
// 		password: 'jim2',
// 		id: 2,
// 		firstName: 'Jim',
// 		lastName: 'Bennet'
// 	}
// ];

// const posts = [
// 	{
// 		username: 'eilidh',
// 		title: 'post 1'
// 	},
// 	{
// 		username: 'jim',
// 		title: 'post 2'
// 	},
// 	{
// 		username: 'eilidh',
// 		title: 'post 3'
// 	}
// ]
