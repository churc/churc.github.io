// var http = require('http');
var request = require('request');
// var async = require('async');
var socketio = require('socket.io');
var express = require('express');
// var php = require("node-php");
var app = express();
var path = require('path');
var $ = require('jquery');
// var pixelate = require('pixelate');
// var jimp = require ('jimp');

var server = app.listen(process.env.PORT || 3000);

app.use(express.static("client"));
app.use(express.static(path.resolve(__dirname, "client")));
app.use(express.static(path.resolve(__dirname, "node_modules")));

var socket = require('socket.io');
var io = socket.listen(server);


///connect node and php files
// app.use('/', php.cgi(__dirname + '/php'));

//php-cgi - you need to have the interpreter installed


app.use('/', function(req, res,next) {  
    res.send(__dirname + "/client/index.html");
});

app.use('/news', function(req, res,next) {  
    res.send(__dirname + "/client/index2.html");   ///to open to second page and link to second html file
});


// io.sockets.on('connection', newConnection);

////////turn socket.io off at present

// router.use(express.static(path.resolve(__dirname, 'client')));
// var messages = [];
// var sockets = [];

// io.on('connection', function (socket) {
//     messages.forEach(function (data) {
//       socket.emit('message', data);
//     });

//     sockets.push(socket);

//     socket.on('disconnect', function () {
//       sockets.splice(sockets.indexOf(socket), 1);
//       updateRoster();
//     });

//     socket.on('message', function (msg) {
//       var text = String(msg || '');

//       if (!text)
//         return;

//       socket.get('name', function (err, name) {
//         var data = {
//           name: name,
//           text: text
//         };

//         broadcast('message', data);
//         messages.push(data);
//       });
//     });

//     socket.on('identify', function (name) {
//       socket.set('name', String(name || 'Anonymous'), function (err) {
//         updateRoster();
//       });
//     });
//   });

// function updateRoster() {
//   async.map(
//     sockets,
//     function (socket, callback) {
//       socket.get('name', callback);
//     },
//     function (err, names) {
//       broadcast('roster', names);
//     }
//   );
// }

// function broadcast(event, data) {
//   sockets.forEach(function (socket) {
//     socket.emit(event, data);
//   });
// }

// server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
//   var addr = server.address();
//   console.log("Chat server listening at", addr.address + ":" + addr.port);
// });