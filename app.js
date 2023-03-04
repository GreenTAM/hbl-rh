var express = require('express');
var app = express();
require('dotenv').config()

app.get('/', function(req, res) {
    const variable = process.env.DB_CLIENT;
	res.send("Hello World! -- " + variable);
});

app.listen(3000);