//pull info from nyt
//https://www.npmjs.com/package/nyt
//npm install -s nyt
//run node init
//npm install --save express
//npm install -g jsdom
// npm install window-or-global

var express = require('express');
var app = express();
var path = require('path');
// var get = require('get');

app.use(express.static('client'));
// var socket = require('socket.io');
// var io = socket(server);

var $ = require('jquery');

var NYT = require('nyt');

////enter apiKey in terminal env
// churc:~/workspace $ export NEW_VAR="Content of NEW_VAR variable"
// churc:~/workspace $ printenv | grep NEW_VAR
// returns: NEW_VAR=Content of NEW_VAR variable
// churc:~/workspace $ export GMAKEY='putinyourapikeynumberhere'
//printenv | grep GMAKEY

var apiKey = process.env.GMAKEY;

// var api = 'https://api.nytimes.com/svc/search/v2/articlesearch.json=';
// // var q = 'Gego';
// var fq= source='The New York Times';
// var fl = 'web_url'&'headline'&'abstract';

var input;
var select;
var source;
var searchField;
var button;


//to connect the app.js and index.html to view in browser
app.get("/", function(req,res){
      res.sendFile(path.join(__dirname+'/index.html'));
});

var keys = {
            'article-search':apiKey,
            };
            
var nyt = new NYT(keys);

$('#searchForm').submit(function(err, callback){
    if (err)
        console.log(err);
    else{
        var text = $('#searchField').value();

        var searchResult = nyt.article.get({'query':text});
        
        $('#searchResult').text(searchResult);
        $('#searchForm').css('display','none');
        
        setTimeout(callback, 1000);

    // button = select('#submit');
    // button.mousePressed(askNYT);
    // input = select('#searchField');
    
    // function askNYT(){
    //     var apiRequest = api+input.value()+fq+fl+apiKey;


    //         setTimeout(searchResult, 1000);
        }
        // $(button).mousePressed(askNYT);
    });

app.listen(3000);



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
// NYT example js code
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "",
//   'q': "Gego",
//   'sort': "newest",
//   'fl': "web_url, headline, abstract"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });
//===============
// NYT example node code
// request.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//     'api-key': "",
//     'q': "Gego",
//     'sort': "newest",
//     'fl': "web_url, headline, abstract"
//   },
// }, function(err, response, body) {
//   body = JSON.parse(body);
//   console.log(body);
// })

//===============

// var searchResult = nyt.article.get({'query':'Gego'}); 

// var artsearch = select('#searchResult');
//   var button = select('.submit');
//   button.mousePressed(search);
// }


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


//////////

//var nyt = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//var apikey = "";
//var url = nyt+apikey;
//
//function setup() {
//	noCanvas();
//	loadJSON(url, gotData);
//}
//
//function gotData(data){
//  var articles = data.response.docs;
//	
//	for (var i = 0; i < articles.length; i++) {
//		createElement('h1', headline.main);
//		createP(articles[i].snippet);	
//	} 
//}

///////////
////setTimeOut

//var nyt = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//var apikey = "";
//var url = nyt+apikey;
//var apiRequest = (url + q);

// request({
// 	var site = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//     // var apikey = "";
//     var q = "Gego";
// 	var api = url+apikey+q;
//   },
// } , function(err, response, data) {
// 	if (!error && response.statusCode == 200) {
//   	data = JSON.parse(data);
//   	console.log(data);
// 	list = data.response.list;
// 	}
// 	for (var i = 0; i <list.length; i++) {
// 		var headline = createElement('h1', '');
// 		var link = createHead(list[i].web_url,list[i].headline.main);
// 		link.parent(headline);
// 		headline.parent('info');

// 		var par = createPara(list[i].lead_paragraph);
// 		par.parent('info');
//   }		
// })

// var artsearch();

// function setup() {
//   noCanvas();

//   artsearch = select('#search');
//   var button = select('.submit');
//   button.mousePressed(search);
// }

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
