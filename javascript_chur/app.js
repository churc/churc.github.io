// Socket.IO
var request = require('request');
var express = require('express');
var app = express();
var path = require('path');

var server = app.listen(process.env.PORT || 8000);
app.use(express.static("client"));
app.use(express.static(path.resolve(__dirname, 'client')));
var socket = require('socket.io');
var io = socket.listen(server);
var NYT = require("nyt");


app.use('/', function(req, res,next) {  
    res.send(__dirname + '/client/index.html');
});

io.sockets.on('connection', newConnection);


///////what want returned from article search at NYT api https://developer.nytimes.com/ 

var parameters = {                          
                  url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?",
                      qs: {
                        'api-key': "b86baf3cfd7d4f32a4285b22aa4c327b",
                        'q': " ",                ////refer to query entered in searchField - this is a string 
                        'sort': "newest",
                        'fl': "web_url,pub_date,headline",
                        'hl': "TRUE",
                 },
            };   

//listen for query from client, query api, send articles from server to client

     function newConnection(socket){ 
                console.log('new connection: ' + socket.id);    ///listen for message from client
                
                    socket.on('newMsg', newMsg);                ///takes in 'newMsg' from the client and after comma put the name of the next function (here newMsg)
	                function newMsg(data){                      /////passes info from newMsg to data
                            console.log('received', data);
                            
                            parameters.qs.q = data;             ///attach data to q within the parameters search
                            
                            request.get(parameters, function(err, response, data) {    ///put request within the received message function
                                     if (err) {
                                         return err;
                                     }
                                                                ///gives an array of events
                                       answer = JSON.parse(data);
                                        
        	                           console.log(JSON.stringify(answer.response.docs));  
        	                                    
        	                           socket.emit('newMsg', answer.response.docs) ///send answer from nyt api to client again within function
                                              
                                    }); 
                                }
                        }    