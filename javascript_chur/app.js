
// Socket.IO
// var fs = require('fs');
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
var parameters = {                          ///do i need to put + to join the parts
                //   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
                  url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?",

                  qs: {
                    'api-key': "b86baf3cfd7d4f32a4285b22aa4c327b",
                    'q': " ",     ////refer to query entered in searchField - this is a string 
                    'sort': "newest",
                    'fl': "web_url,pub_date,headline.main",
                    'hl': "TRUE",
             },
        };   

      console.log('what', parameters);
      
//listen for query from client, query api, send articles from server to client

     function newConnection(socket){ 
                console.log('new connection: ' + socket.id);   ///listen for message from client
                
                    socket.on('newMsg', newMsg);  ///takes in 'newMsg' from the client and after comma put the name of the next function (here newMsg)
	                function newMsg(data){         /////passes info from newMsg to data
                            console.log('received', data);
                            
                            parameters.qs.q = data;  ///attach data to q within the parameters search
                            
                            request.get(parameters, function(err, response, data) {    ///put request within the received message function
                                     if (err) {
                                         return err;
                                     }
                                    ///gives an array of events
                                    // var answer = JSON.parse(data);
                                        answer = JSON.parse(data);
                                        for (var i in answer.response.docs) {
        	                                    console.log(JSON.stringify(answer.response.docs[i]));
        	                                     socket.emit(JSON.stringify(newMsg, answer.response.docs[i]));
                                        }
                                    // socket.emit(newMsg, answer.response.docs[0]);    ///send answer from nyt api to client again within function
                            
                            }); 
                    }

            }    

///////former jquery nyt request\\\\\\\\\\\\\\\\\\\\

// var loadData = function (e){
//      e.preventDefault();

//     var query = $('input').val();
//     var query = $('#searchField').val();
    
//     var $artistResults = $('#searchResult');
    
//         //clear data for each search
//         $artistResults.text("");

// var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ query + '?sort=newest&api-key=b86baf3cfd7d4f32a4285b22aa4c327b';
            
//      $.getJSON(url, function(data){       
//               var articles = data.response.docs;
    
//                  for(var i = 0; i < articles.length; i ++ ) {
//                 // for(var i = 0; i < 10; i ++ ) {
//                     var artist = articles[i];
//                     var artistHTML = '<li>';
//                         artistHTML += '<a href = "' + artist.web_url + '">';
//                         artistHTML += '</a>';
//                         artistHTML += '<p>'+ artist.pub_date +'</p>';
//                         artistHTML += '<p>' + artist.headline.main + '</p>';
//                         artistHTML += '</li>';
             
//                 $artistResults.append(artistHTML);
//             }
//     })
            
//     ('#searchField').addEventListener('submit', loadData);
    
//     ('#searchResult').submit(loadData);

// };
////////////////////


