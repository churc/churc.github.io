var request = require('request');
var socketio = require('socket.io');
var express = require('express');
var app = express();
var path = require('path');

var server = app.listen(process.env.PORT || 3000);

app.use(express.static("client"));
app.use(express.static(path.resolve(__dirname, "client")));
app.use(express.static(path.resolve(__dirname, "node_modules")));

var socket = require('socket.io');
var io = socket.listen(server);


app.use('/', function(req, res,next) {  
    res.send(__dirname + "/client/index.html");
});

app.use('/news', function(req, res,next) {  
    res.send(__dirname + "/client/index2.html");   ///to open to second page and link to second html file
});

