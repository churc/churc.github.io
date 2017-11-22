
// Socket.IO, Express
// var fs = require('fs');
// var request = require('request');
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var socket = require('socket.io');
var io = socket.listen(server);
var NYT = require("nyt");
var $ ="";

require('dotenv').config();

var config= require('./config');
console.log(config);

var apiKey = config.MY_KEY;

server = app.listen(process.env.PORT || 8000);
console.log('connected');

///link to static files in client folder
app.use(express.static("client"));
app.use(express.static(path.resolve(__dirname, 'client')));
app.use(express.static(__dirname + '/node_modules'));

app.use('/', function(req, res,next) {  
    res.send(__dirname + '/client/index.html');
});

app.get('/', function(req, res,next) {  
    res.send(__dirname + '/client/index.html');
});

////nyt // //////using npm nyt module
var keys = {
            "article-search": apiKey,
            };     
var nyt = new NYT(keys);

io.on('connection', newConnection);
    
///receive message from client        
 function newConnection(socket){ 
        socket.broadcast.emit('newUser', socket.id);
        console.log('new connection: '+ socket.id);
      
           app.get("/", function(req,res){
              res.send('newMsg: ' + req.query['username']);
            }); 
        }

/////query nyt api

// //             var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// //             url += '?' + $.param({
// //             'api-key': "b86baf3cfd7d4f32a4285b22aa4c327b",
// //             'q': query,
// //             'fq': "new york times",
// //             'sort': "newest",
// //             'fl': "web_url, pub_date, headline",
// //             'hl': "TRUE",
// //             count:10
// //     });

var loadData = function (){
    var query = $('#searchField').value();
    
    var $artistResults = $('#searchResults');
    //clear data for each search
    $artistResults.text("");

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ query + '?sort=newest&api-key=b86baf3cfd7d4f32a4285b22aa4c327b';
            
     $.getJSON(url, function(data){       
              var articles = data.response.docs;
    
                for(var i = 0; i < 10; i ++ ) {
                    var artist = articles[i];
                    var artistHTML = '<li>';
                        artistHTML += '<a href = "' + artist.web_url + '">';
                        artistHTML += '</a>';
                        artistHTML += '<p>'+ artist.pub_date +'</p>';
                        artistHTML += '<p>' + artist.headline.main + '</p>';
                        artistHTML += '</li>';
             
                $artistResults.append(artistHTML);
            }
    })
            
    ('#submit').addEventListener('submit', loadData);
 
};


//send from server to client
     function newConnection(socket){ 
                socket.on('addMsg', function(data){
                    console.log(data);
                    socket.broadcast.emit('addMsg', data);
                    socket.broadcast.emit('#searchResults').val();
                });
        }
        
            app.post("/", function(req,res){
              res.send('addMsg: ' +req.body.username);
            });



//     server.listen(process.env.PORT || 8000, process.env.IP || "0.0.0.0", function(){
//           var addr = server.address();
//           console.log("Chat server listening at", addr.address + ":" + addr.port);
// });


/////////key alt

////enter apiKey in terminal env////
// churc:~/workspace $ export NEW_VAR="Content of NEW_VAR variable"
// churc:~/workspace $ printenv | grep NEW_VAR
// returns: NEW_VAR=Content of NEW_VAR variable
// churc:~/workspace $ export GMAKEY='putinyourapikeynumberhere'
//printenv | grep GMAKEY

// var apiKey = process.env.GMAKEY;
///////////
      
////////NYT code article search
////NYT api code
// request.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//     'api-key': "b86baf3cfd7d4f32a4285b22aa4c327b",
//     'q': "Gego",
//     'sort': "newest",
//     'fl': "web_url, headline, pub_date"
//   },
// }, function(err, response, body) {
//   body = JSON.parse(body);
//   console.log(body);
// })



      
      ///////
// io.sockets.on('connection', newConnection);
// io.on('connection', newConnection);

// function newConnection(socket){
// 	console.log('new connection: ' + socket.id);

/////
// io.sockets.on('connection', function (socket) {
//     console.log('A new user connected!');
//     socket.emit('info', { msg: 'The world is round, there is no up or down.' });
// });
////	
  //   socket.on('newUser', newUser);
  //   function newUser(data){
		// socket.broadcast.emit('newUser', data);
  //   		//the line below will send to everyone including the client
  //   		//takes 2 parameters, first is name of event, 2nd is the message
  //   		// io.sockets.emit('mouse', data);
		// console.log(data);
  //   }
    




// app.get("/", function(req,res){
//       res.send('Username: ' + req.query['artist']);
//       console.log('got');
// });

// app.get("result", function(req,res){
//       console.log('Username: ' + req.query);
//       nyt.article.get({"query":req.query});
// });


// io.sockets.on('connection', newConnection);
// function newConnection(socket){
// 	console.log('new connection: ' + socketio.id);
// 	function qnty(req,res){
// 		socket.listen('req', res);

// 		console.log(qnyt);
// 	}
// }


// sending to sender-client only
 // socket.emit('message', "this is a test");

 // sending to all clients, include sender
 // io.emit('message', "this is a test");

 // sending to all clients except sender
 // socket.broadcast.emit('message', "this is a test");

/////////
      
    //   function newConnection(socket) {
    // messages.forEach(function (data) {
    //   socket.emit('message', data);
    // });

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
//   // });

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



///////





//============================
// //run node init
// //npm install --save express
// var express = require('express');
// var app = express();
// var path = require('path');
// // var get = require('get');

// app.use(express.static('client'));
// // var socket = require('socket.io');
// // var io = socket(server);

// var $ = require('jquery');

// var NYT = require('nyt');


// ////enter api key in terminal env
// // churc:~/workspace $ export NEW_VAR="Content of NEW_VAR variable"
// // churc:~/workspace $ printenv | grep NEW_VAR
// // returns: NEW_VAR=Content of NEW_VAR variable
// // churc:~/workspace $ export GMAKEY='putinyourapikeynumberhere'
// //printenv | grep GMAKEY

// var apiKey = process.env.GMAKEY;
// var api = 'https://api.nytimes.com/svc/search/v2/articlesearch.json=';
// // var q = 'Gego';
// var fq= source='The New York Times';
// var fl = 'web_url'&'headline'&'abstract';

// var input;
// var select;
// var source;
// var searchField;
// var button;

// app.get("/", function(req,res){
//       res.sendFile(path.join(__dirname+'/index.html'));
// });

//     // button = select('#submit');
//     // button.mousePressed(askNYT);
//     // input = select('#searchField');
    
//     function askNYT(){
//         var apiRequest = api+input.value()+fq+fl+apiKey;
//         var keys = {'article-search':apiRequest};
                
//         var nyt = new NYT(keys);
//             $('#searchForm').submit(function(err, searchField){
//                 if (err) 
//                     console.log(err);
//                 else
//                     {
//                     var text = $(searchField).value();
                
//                     var searchResult = nyt.article.get({'query':text}); 
        
        
//                     $('#searchResult').text(searchResult);
//                     // $('#searchForm').css('display','none');
                    
                   
        
//         //this means itll happen at 1 sec
//             setTimeout(searchResult, 1000);
//         }
//         $(button).mousePressed(askNYT);
//     });
// }
// // });

// // app.listen(process.env.PORT || 3000);
// app.listen(3000);


// server.listen(process.env.PORT);

// =============
// //pull info from nyt
// //https://www.npmjs.com/package/nyt

// //run node init
// //npm install --save express
// var express = require('express');
// var app = express();
// var path = require('path');

// app.listen(process.env.PORT || 8000);

// app.use(express.static('public'));
// // var socket = require('socket.io');
// // var io = socket(server);

// // var st = require('st');

// // app.use(express.static(__dirname + '/public')); //__dir and not _dir
// // var port = 8000; // you can use any port
// // app.listen(port);
// // console.log('server on' + port);


// //  var jsdom = require('jsdom');
// //  var $ = require('jquery')(jsdom.jsdom().parentWindow);
// // var $ = require('jquery')('jsdom'.jsdom().defaultView);
// // var $ = require('jquery')(require('jsdom').jsdom().parentWindow);

// var $ = require('jquery');

// var NYT = require('nyt');


// // var get = require('get');


// ////enter api key in terminal env
// // churc:~/workspace $ export NEW_VAR="Content of NEW_VAR variable"
// // churc:~/workspace $ printenv | grep NEW_VAR
// // returns: NEW_VAR=Content of NEW_VAR variable
// // churc:~/workspace $ export GMAKEY='putinyourapikeynumberhere'
// //printenv | grep GMAKEY

// var apiKey = process.env.GMAKEY;
// var api = 'https://api.nytimes.com/svc/search/v2/articlesearch.json=';
// // var q = 'Gego';
// var fq= source='The New York Times';
// var fl = 'web_url'&'headline'&'abstract';

// var input;
// var select;
// var source;
// var searchField;

// // var server = http.createServer(st(process.cwd()(function() {
// app.get("/", function(){
//     var button = select('#submit');
//     button.mousePressed(askNYT);
    
//     input = select('#searchField');
//     searchField.sendFile(path.resolve(__dirname+'/../index.html'));
    
//     function askNYT(){
//         var apiRequest = api+input.value()+fq+fl+apiKey;
//         var keys = {'article-search':apiRequest};
                
//         var nyt = new NYT(keys);
//             $('#searchForm').submit(function(err, searchField){
//                 if (err) 
//                     console.log(err);
//                 else
//                     {
//                     var text = $(searchField).value();
    
//                     var searchResult = nyt.article.get({'query':text}); 
        
        
//                     $('#searchResult').text(searchResult);
//                     // $('#searchForm').css('display','none');
        
//         //this means itll happen at 1 sec
//             setTimeout(searchResult, 1000);
//         }
//     });
// }
//================

// app.server.listen(8000);
// });
// // server.listen(process.env.PORT);




///=======AA
// var server = http.createServer(function(req, res) {
// ////npm nyt
// var keys = {
//             'article-search':''
//             };
// var nyt = new NYT(keys);
// $('#search-form').submit(function(callback){
//     var text = $('#search-field').value();

//     var searchResult = nyt.article.get({'query':text}); 
    
//     $('#searchResult').text(searchResult);
//     $('#search-form').css('display','none');
    
//     // setTimeout(callback, 2000);
    
//     setTimeout(function(){
//         $('#search-form').css('display','none');
//     },1000);
// });

// });

// server.listen(process.env.PORT);
//================



// request.get({
//  url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//  qs: {
//     // 'api-key': "",
//     'q': "gego",
//     'sort': "newest",
//     'fl': "web_url, headline, abstract, pub_date, document_type, news_desk",
//     'hl': "TRUE"
//   },
// }, function(err, response, body) {
//   if (err) {
//             return console.error(err);
//         }
//  body = JSON.parse(body);
//  console.log(body);
// });


// var server = http.createServer(function(req, res) { })
// require('require/server').mount(server)
// server.listen(8080, 'localhost')


//=============
//var guardian = require('guardian-js');
//var nyt = require('nyt-js')

// var info = [];

// ////new attempt using express

// var express = require('express');
// var app = express();
// var server = app.listen(process.env.PORT || 8080);

// app.use(express.static('public'));
// console.log('server running')

//--------------------

////////////////////////////
// //
// // # SimpleServer
// //
// // A simple chat server using Socket.IO, Express, and Async.
// //
// var http = require('http');
// var path = require('path');

// var async = require('async');
// var socketio = require('socket.io');
// var express = require('express');

// //
// // ## SimpleServer `SimpleServer(obj)`
// //
// // Creates a new instance of SimpleServer with the following options:
// //  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
// //
// var router = express();
// var server = http.createServer(router);

// var io = socketio.listen(server);

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

// server.listen(process.env.PORT || 8000, process.env.IP || "0.0.0.0", function(){
//   var addr = server.address();
//   console.log("Chat server listening at", addr.address + ":" + addr.port);
// });
