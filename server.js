"use strict";

var express = require("express");
var app = express();
var http = require("http");
var Sequelize = require('Sequelize');

app.use(express.static('public'));

var sequelize = new Sequelize('litupcandle', 'dblitupcandleadmin', 'l1tupc@ndle', {
	host: 'dblitupcandle.database.windows.net',
	dialect: 'mssql'
});

sequelize
	.authenticate()
	.then(function(err) {
		console.log('Connection has been established successfully.');
	})
	.catch(function (err) {
		console.log('Unable to connect to the database:', err);
	});

var server = http.createServer(app);

server.listen((process.env.PORT || 3000), function(){
	console.log("express server runs on address http://localhost:"+(process.env.PORT || 3000));
}); 
