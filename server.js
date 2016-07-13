"use strict";

var express = require("express");
var app = express();
var http = require("http");

app.use(express.static('public'));

var server = http.createServer(app);

server.listen((process.env.PORT || 3000), function(){
	console.log("express server runs on address http://localhost:"+(process.env.PORT || 3000));
});
