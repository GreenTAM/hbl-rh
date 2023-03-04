var express = require('express');
var app = express();

app.get('/', function(req, res) {
    const variable = process.env.PORT;
	res.send("Hello World! -- " + variable);
});

app.listen(3000);