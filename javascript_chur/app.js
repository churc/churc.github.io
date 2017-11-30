
// Socket.IO
var fs = require('fs');
var request = require('request');
var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 8000);
app.use(express.static("client"));

var socket = require('socket.io');
var io = socket.listen(server);
var NYT = require("nyt");
// var jquery = require("jquery");


app.use('/', function(req, res,next) {  
    res.send(__dirname + '/client/index.html');
});



io.sockets.on('connection', newConnection);

///////from article search at NYT api https://developer.nytimes.com/ 
    
request.get({
  url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  qs: {
    'api-key': "b86baf3cfd7d4f32a4285b22aa4c327b",
    // 'q': "' '",
    'q': "Gego",
    'sort': "newest",
    'fl': "web_url,pub_date,headline.main",
    'hl': "TRUE",
    
  },
}, function(err, response, data) {
  data = JSON.parse(data);
  console.log(data);
  
});
    
    

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

//send articles from server to client
     function newConnection(socket){ 
                console.log('new connection: ' + socket.id)
                socket.on('newMsg', newMsg);
                
                function newMsg(data){
                    
                    socket.broadcast.emit('newMsg', data);
                    socket.broadcast.emit('#searchResult').val();
                }
        
            // app.post("/", function(req,res){
            //   res.send('addMsg: ' +req.body.data);
            // });
     }
