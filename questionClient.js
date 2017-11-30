
///use jQuery on the client side to process the users data entered in the input field

var socket = io();

	//can send things from server to client
// 	socket.emit('confirmConnection', 'hey ' +socket.id);
//specific connection message inside this connection function	//here use socket not io as using to one specifc connection so don't use io

/////jQuery to process the users data entered in the input field

socket.on('newMsg',function(data){
	// addMsg(data.text, data.msg);
	addMsg(data.msg);
	// $('input').append('</p><strong>'+data.text+': </strong>'+data.msg +'</p>');
	$('input').append('</p>'+data.msg +'</p>');

	$('#searchField').append('</p>'+data.msg +'</p>');
	// $('#searchField').append('</p><strong>'+data.text+': </strong>'+data.msg +'</p>');
});


$('input').focus();
$('#searchField').focus();


    
//functionality
///send data w/ socket.io to server


$('submit').click(sendMsg);
$(document).keyup(function(e){
	if(e.key == 'Enter'){
		sendMsg();
    }
});



function sendMsg(){
	var msg = $('input').val();
	if(msg.length > 0){
		// $('#messages').append('<p>'+artq+'</p>');
		// $('#searchField').value('');
		// socket.emit('newMsg', {text:text, msg:msg});
		socket.emit('newMsg', {msg:msg});
		// addMsg(text, msg);
		addMsg(msg);
		$('input').val('');
	}
}

// function addMsg(msg){
// 	$('#messages').append("<p>"+msg+"</p>");
// }

////// receive msg
///receive the data on the client with a socket.on() handler
//and load into the web page 
socket.on('addMsg', function(data){	
	$('#searchResult').append('<p>'+data+'</p>');
	console.log("nyt", data.text);
});
    
 
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
        

