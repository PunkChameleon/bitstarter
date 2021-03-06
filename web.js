var express = require('express');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/assets'));

app.get('/', function (request, response) {
	var fs = require('fs');
	var outfile = "index.html";
	var buf = fs.readFileSync(outfile);
	//  response.send('Hello World 2!');
	response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
	console.log("Listening on " + port);
});