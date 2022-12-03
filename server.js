const express = require('express');
const app = express();
require('dotenv').config()
PORT = process.env.PORT || 5050;
JWT_SECRET = process.env.JSONSECRETKEY;
REFRESH_TOKEN = process.env.REFRESH_TOKEN_SECRET;
const jwt = require('jsonwebtoken');
const {uuid} = require('uuidv4');
const cors = require('cors');

app.use(cors())
app.use(express.json())



const users = [
	{
		username: 'eilidh',
		password: 'test',
		id: 1,
		firstName: 'Eilidh',
		lastName: 'Ritchie'
	},
	{
		username: 'jim',
		password: 'jim2',
		id: 2,
		firstName: 'Jim',
		lastName: 'Bennet'
	}
];

const posts = [
	{
		username: 'eilidh',
		title: 'post 1'
	},
	{
		username: 'jim',
		title: 'post 2'
	},
	{
		username: 'eilidh',
		title: 'post 3'
	}
]

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

app.post('/login', (req, res) => {
	if (req.body.username && req.body.password) {
		const foundUser = users.find(
			(user) =>
			user.username === req.body.username && user.password === req.body.password 
		);
		if (foundUser) {
			const user = {
				id: foundUser.id, 
				username: foundUser.username, 
				firstName: foundUser.firstName,
				lastName: foundUser.lastName
			}
			const jwtToken = jwt.sign(user ,JWT_SECRET);
			res.json({
				message: 'login success',
				token: jwtToken,
			});
		} else {
			res.status(401).send('This is not a valid user/password')
		}
	} else {
		res.status(400).send('Please provide a username and password')
	}
})

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


// app.use((req, res, next) => {
// 	//allow access to any pages not req login token
// 	if (req.url === '/' || 
// 			req.url === '/aboutus' || 
// 			req.url === '/gallery'||
// 			req.url === '/login'||
// 			req.url === '/createaccount') {
// 		next();
// 	} else {
// 		const token = getToken(req);
// 		if (token) {
// 			console.log('Auth Token: ', token);
// 			if(jwt.verify(token, JWT_SECRET)) {
// 				//decode token to pass along data to end-points that may require data from token
// 				req.decode = jwt.decode(token);
// 				next();
// 			} else {
// 				res.status(403).json({error: "Not Authorized"});
// 			}
// 		} else {
// 			res.status(403).json({error: "No token. Unauthorized"});
// 		}
// 	}
// }) ;

app.post('/createaccount', (req, res) => {
	const { username, firstName, lastName, password } = req.body;
	const id = uuid();
	users[username] = {
		username,
		password,
		id,
		firstName,
		lastName
	};
	console.log('users object:', users);
	res.json({ success: 'true' });
});


app.listen(PORT, function () {
	console.log(`🚀 💻 server running at http://localhost:${PORT} 📡 🚀`);
});