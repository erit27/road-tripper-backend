const express = require('express');
const app = express();
require('dotenv').config()
PORT = process.env.PORT || 5050;
jsonSecretKey = process.env.JSONSECRETKEY;
const jwt = require('jsonwebtoken');
const cors = require('cors');

app.use(cors())
app.use(express.json())

// set up access to pages based on logged in status
app.use((req, res, next) => {
	//allow access to any pages not req login token
	if (req.url === '/' || 
			req.url === '/aboutus' || 
			req.url === '/gallery'||
			req.url === '/login'||
			req.url === '/createaccount') {
		next();
	} else {
		const token = getToken(req);
		if (token) {
			console.log('Auth Token: ', token);
			if(jwt.verify(token, jsonSecretKey)) {
				//decode token to pass along data to end-points that may require data from token
				req.decode = jwt.decode(token);
				next();
			} else {
				res.status(403).json({error: "Not Authorized"});
			}
		} else {
			res.status(403).json({error: "No token. Unauthorized"});
		}
	}
}) ;

function getToken(req) {
	return req.headers.authorization.split(" ")[1];
}

const users = {};

app.post('/createaccount', (req, res) => {
	const { username, firstName, lastName, password } = req.body;
	users[username] = {
		name,
		password,
		firstName,
		lastName
	};
	console.log('users object:', users);
	res.json({ success: 'true' });
});

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	const user = users[username];

	if(user && user.password === password) {
		console.log('Found User: ', user);
		res.json( { token: jwt.sign({name: user.name}, jsonSecretKey)})
	} else {
		res.status(403).json({
			token: '',
			error: {
				message: 'Error logging in. Invalid username/password combination'
			}
		})
	}
})

app.get('/profile', (req, res) => {
	res.json(req.decode);
})


app.listen(PORT, function () {
	console.log(`🚀 💻 server running at http://localhost:${PORT} 📡 🚀`);
});