export default function getToken(req) {
	return req.headers.authorization.split(" ")[1];
}

export default function checkToken(req, _res, next) {
	const token = getToken(req);
	if (token && jwt.verify(token, JWT_SECRET)) {
		req.user = jwt.decode(token); //attach decoded token to req object
		next();
	} else {
		res.status(401).send('No valid token sent')
		next();
	}
}