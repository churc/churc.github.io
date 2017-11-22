//client js

// socket = socket.io.connect('https://localhost:8000');
var io;
var socket;
socket=io.connect();
var $ ="";

	//can send things from server to client
// 	socket.emit('confirmConnection', 'hey ' +socket.id);
	//specific connection message inside this connection function
	//here use socket not io as using to one specifc connection so don't use io

//then add to go w/ socket.emit=======
socket.on('confirmConnection',function(data){
	console.log('server: ' + data);
});


socket.on('newUser', function(data){
	console.log(data);
});

socket.on('newMsg',function(data){
	$('#searchField').append('<p><strong>'+data.username+'</p></strong>'+data.text +'</p>');
});

////// receive msg
socket.on('addMsg', function(data){	
	$('#searchResults').append('<p><strong>'+username+':</strong>'+data+'</p>')
});
    
//functionality
function func(){
$('#submit').click(sendMsg);
$(document).keyup(function(e){
	if(e.key == 'Enter'){
		sendMsg();
    }
});
}

function sendMsg(){
	var artq = $('#searchField').value();
	if(artq.length > 0){
		$('#messages').append('<p><strong>'+username+':</strong>'+artq+'</p>');
		$('#searchField').value('');
		socket.emit('newMsg', {username:username, text:artq});
	}
}

        
//         setTimeout(callback, 1000);
        

