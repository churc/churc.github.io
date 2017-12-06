///use jQuery on the client side to process the users data entered in the input field
///and append answer to html

var socket = io();

//here use socket not io as using to one specifc connection so don't use io

//functionality listen for click function
///send data w/ socket.io to server

// $('submit').on('click', function(e){e.preventDefault(); sendMsg()})

	$('#submit').click(function() {   //listen for click on submit button
			sendMsg();
		});
	// $(document).keyup(function(e){  
		$('#submit').keyup(function(e){   //listen for key up on submit button
			if(e.key == 'Enter'){
				sendMsg();
		    }
		});

		function sendMsg(){
			console.log('does this');
			var msg = $('input').val();
			if(msg.length > 0){
				socket.emit('newMsg', {msg:msg});
				console.log('sending message');
				// $('input').val('');
				}
		}

///listen for message back from server query to nyt & add to webpage
socket.on('newMsg',function(data){
		function addMsg(data){
                        console.log(data);
                        
                        var articles = data.parameters.qs.fl[0,9];
	                        for(var i = 0; i < articles.length; i ++ ) {
			                    var artist = articles[i];
			                    var artistHTML = '<li>';
			                        artistHTML += '<a href = "' + artist.web_url + '">';
			                        artistHTML += '</a>';
			                        artistHTML += '<p>'+ artist.pub_date +'</p>';
			                        artistHTML += '<p>' + artist.headline.main + '</p>';
			                        artistHTML += '</li>';
			             
			           	$('#searchResult').append('<h3>'+artistHTML+'</h3>');   ////put the article info into the web page with jquery  

					}
				}
			});



    

// function addMsg(msg){
// 	$('#messages').append("<p>"+msg+"</p>");
// }


///listen and receive the message from the server with the socket.on() handler
//and load into the web page 
	// socket.on('addMsg', function(data){	
	// 		$('#searchResult').append('<p>'+data+'</p>');
	// 		console.log("nyt", data);
	// });
	    
 
////put the article info into the web page with jquery  

// function addMsg(msg, data){
// 	$('#searchResult').append("<p>"+data+"</p>");

// } 


//     function addMsg(user, msg){
// 	$('#messages').append("<p><strong>"+user+": </strong>"+msg+"</p>");

// }    
// function addMsg(msg, data){
// 	$('#searchResult').append("<p><strong>"+msg+": </strong>"+data+"</p>");

// }    



//  setTimeout(callback, 1000);
        

