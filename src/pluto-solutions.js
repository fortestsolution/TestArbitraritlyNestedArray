var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('plutosoltionsquiver', ['plutosoltionsquiver']);
var serverPort = 9001;

app.use(express.static(__dirname + "/pluto-solutions-quiver"));

app.listen(serverPort);
console.log("Pluto solutions server running on port : " + serverPort);