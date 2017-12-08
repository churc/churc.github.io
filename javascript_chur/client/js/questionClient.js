///use jQuery on the client side to process the users data entered in the input field
///and append answer to html

var socket = io();

//here use socket not io as using to one specifc connection so don't use io
//functionality listen for click function ///send data w/ socket.io to server

// $('submit').on('click', function(e){e.preventDefault(); sendMsg()})  

	$('#submit').click(function() { 					//listen for click on submit button
			sendMsg();
		});
		$('#submit').keyup(function(e){ 				//listen for key up on submit button
			if(e.key == 'Enter'){
				sendMsg();
		    }
		});

		function sendMsg(){
			// console.log('does this');
			var msg = $('input').val();
			
			if(msg.length > 0){
					socket.emit('newMsg', msg);   ////sending query to server
					
				// console.log(msg, 'sending message');  ///check that this is it sending the query
				}
			$('input').val('');
		}


///listen for new message back from server query to nyt & add to webpage
			
	socket.on('newMsg', function(data){ 											///listening for info from server
                        
                        		// console.log(typeof data);
                            	var articles = data;
                            	
								$('#searchResult').empty();							///empty searchResult then load new data
    					
	                        for(var i = 0; i < articles.length; i ++ ) {
			                    var artist = articles[i];
			                    
			                    var artDate = new Date(artist.pub_date);												
			                    artDate = (artDate.getMonth() + 1)+"/"+artDate.getDay()+"/"+artDate.getFullYear();    ///return month,day,year
			                    
			                    var artistHTML = '<li>';
			                        
			                        artistHTML += '<p>'+ artDate +'</p>';
			                        artistHTML += '<a href = "' + artist.web_url + '">';
			            
			                        artistHTML += '<p>' + artist.headline.main + '</p>';
			                        artistHTML += '</a>';
			                        artistHTML += '</li>';
			            
			           	$('#searchResult').append('<h6>'+artistHTML+'</h6>');   			////put the article info into the web page with jquery  
					}
			});