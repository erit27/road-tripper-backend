const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
PORT = 8080;

app.use(cors())
app.use(express.json())

app.listen(PORT, function () {
	console.log(`server running at http://localhost:${PORT}`);
});