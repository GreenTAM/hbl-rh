var express = require('express');
var app = express();
require('dotenv').config()
var child_process = require('child_process');

app.get('/', function(req, res) {
    const variable = process.env.DB_CLIENT;
    const message = {}
    var erreur = false
child_process.exec(
    'npm run start',
    {},
    function(error, stdout, stderr) {
        process.stdout.write(stdout + '\n');
        process.stderr.write(stderr + '\n');
        if (error !== null) {
            message.error = 'erreur \nmessage: ' + stderr
            console.log(`Erreur: ${erreur}`);

        }
        else {
            message.success =  'commande runned on port ' + process.env.PORT + '\nmessage: ' + stdout

            console.log(`Reussi: ${erreur}`);

        }
    });

    const status = message.error ? 500 : 200
	res.status(status).send(message);
});

app.listen(3000);