// $(document).ready(function(){

////////// DRAWING TOOL
//
////$(document).ready(function(){
//	
////var my2p5 = new p5(s2, myContainer2);
////var myp5 = new p5(s,'myContainer');
////var my2p5 = new p5(s2,'myContainer2');
//
////var s2 = function() {
//
////new p5();
//
//var SIZE = 0
//var sizeGrowth = -0.01
//var blueness = 0
//var changeBlue = 1
////var selectorLeft = document.getElementById("selectorLeft")
//
// function setup(){
// var canv = createCanvas(960, 740);
// canv.parent('myContainerdraw');
//}
//	
//
//function draw() {
//	//remove stroke from circles
//	 noStroke()
//	  //change the blue in our function over time
//  	blueness += changeBlue;
//	   if(blueness == 150 || blueness == 210){
//    changeBlue *= -1;
//  }
//	
////$('selectorLeft').on('mouseenter', function(){
////		
////})
//}
//
//
//  function mouseDragged(){
//  //map is a cool function that maps a number in one range to one in another. So in the example below, we're mapping mouseX, a number between 0 and the pixel width of the screen, to a number between 0 and 255. So when the mouse is half way across the screen, mouseColorX will return 127. This is a handy way to pass input from one place into another place that has constaints (0 to 255 for color).
//  var mouseColorX = map(mouseX, 0, width, 50, 120)
//  var mouseColorY = map(mouseY, 0 , height, 245, 90)
//  //fill(red, green, blue)
//  //The red is based on the x position of the mouse, the color is based on the y position of the mouse, and the blue changes over time as the program runs.
//  fill(mouseColorX, mouseColorY, blueness)
//  //draws an ellipse where our mouse is, and makes it bigger based on how long we've been holding down the mouse
//  ellipse(mouseX,mouseY, 5+SIZE, 5+SIZE)
//  SIZE += sizeGrowth
//}
//
//  function mouseReleased(){
//  SIZE = 0;
//}

//
//var my2p5 = new p5(s2)
//};
//});	


///////////TRY DRAW AGAIN TO GET IT TO SHOW

var my2p5 = new p5(s2,'myContainerdraw');

var s2 = function(p) {
	
var SIZE = 0
var sizeGrowth = 0.8
var blueness = 0
var changeBlue = 1
//var div-left = $('#div-left')
//var selectorLeft = document.getElementById("selectorLeft")

p.setup = function(){
  var canv = p.createCanvas(1360, 300)
  canv.parent('myContainerdraw');
	drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -15;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "purple";
}
	

p.draw = function() {
	//remove stroke from circles
	 p.noStroke()
	  //change the blue in our function over time
  	blueness += changeBlue;
	   if(blueness == 150 || blueness == 210){
    changeBlue *= -1;
  }
	
//$('selectorLeft').on('mouseenter', function(){
//		
//})
//}


p.mouseDragged = function(){
  //map is a cool function that maps a number in one range to one in another. So in the example below, we're mapping mouseX, a number between 0 and the pixel width of the screen, to a number between 0 and 255. So when the mouse is half way across the screen, mouseColorX will return 127. This is a handy way to pass input from one place into another place that has constaints (0 to 255 for color).
  var mouseColorX = map(mouseX, 0, width, 50, 120)
  var mouseColorY = map(mouseY, 0 , height, 245, 90)
  //fill(red, green, blue)
  //The red is based on the x position of the mouse, the color is based on the y position of the mouse, and the blue changes over time as the program runs.
  p.fill(mouseColorX, mouseColorY, blueness)
  //draws an ellipse where our mouse is, and makes it bigger based on how long we've been holding down the mouse
  p.ellipse(mouseX,mouseY, 5+SIZE, 5+SIZE)
  SIZE += sizeGrowth
}

p.mouseReleased = function(){
  SIZE = 0;
}
};
};
var my2p5 = new p5(s2);


//////////////////////////////
////Filter BandPass
//new p5();
////var s = function() {
//
var noise;
var fft;
var filter, filterFreq, filterWidth;

  function setup() {
  var canvas = createCanvas(1360, 300);
	canvas.parent('myContainersound');
	
  fill(255, 40, 255);

  filter = new p5.BandPass();

  noise = new p5.Noise();

  noise.disconnect(); // Disconnect soundfile from master output...
  filter.process(noise); // ...and connect to filter so we'll only hear BandPass.
  noise.start();

  fft = new p5.FFT();
}

	

  function draw() {
  background(230);

  // Map mouseX to a bandpass freq from the FFT spectrum range: 10Hz - 22050Hz
  filterFreq = map (mouseX, 0, width, 10, 22050);
  // Map mouseY to resonance/width
  filterWidth = map(mouseY, 0, height, 0, 90);
  // set filter parameters
  filter.set(filterFreq, filterWidth);

  // Draw every value in the FFT spectrum analysis where
  // x = lowest (10Hz) to highest (22050Hz) frequencies,
  // h = energy / amplitude at that frequency
  var spectrum = fft.analyze();
  noStroke();
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width/spectrum.length, h) ;
  }
//}

};
//
////var myp5 = new p5(s);
//////
////};	 
	 
	 



//////////WORkS SOME

//// $(document).ready(function(){
//
//var myp5 = new p5(s,'myContainer');
//var my2p5 = new p5(s2,'myContainerdraw');
//
//var s2 = function(p) {
//	
//var SIZE = 0
//var sizeGrowth = -0.01
//var blueness = 0
//var changeBlue = 1
////var div-left = $('#div-left')
////var selectorLeft = document.getElementById("selectorLeft")
//
//p.setup = function(){
//  p.createCanvas(960, 740)
//  myCanvas.parent('myContainerdraw');
//}
//	
//
//p.draw = function() {
//	//remove stroke from circles
//	 p.noStroke()
//	  //change the blue in our function over time
//  	blueness += changeBlue;
//	   if(blueness == 150 || blueness == 210){
//    changeBlue *= -1;
//  }
//	
//$('selectorLeft').on('mouseenter', function(){
//		
//})
//}
//
//
//p.mouseDragged = function(){
//  //map is a cool function that maps a number in one range to one in another. So in the example below, we're mapping mouseX, a number between 0 and the pixel width of the screen, to a number between 0 and 255. So when the mouse is half way across the screen, mouseColorX will return 127. This is a handy way to pass input from one place into another place that has constaints (0 to 255 for color).
//  var mouseColorX = map(mouseX, 0, width, 50, 120)
//  var mouseColorY = map(mouseY, 0 , height, 245, 90)
//  //fill(red, green, blue)
//  //The red is based on the x position of the mouse, the color is based on the y position of the mouse, and the blue changes over time as the program runs.
//  p.fill(mouseColorX, mouseColorY, blueness)
//  //draws an ellipse where our mouse is, and makes it bigger based on how long we've been holding down the mouse
//  p.ellipse(mouseX,mouseY, 5+SIZE, 5+SIZE)
//  SIZE += sizeGrowth
//}
//
//p.mouseReleased = function(){
//  SIZE = 0;
//}
//};
//
//var my2p5 = new p5(s2);

////////////////////////////////
////Filter BandPass
//
//var s = function(b) {
//
//var noise;
//var fft;
//var filter, filterFreq, filterWidth;
//
//b.setup = function() {
//  b.createCanvas(960,740);
////	check
////	myCanvas.parent('myContainer');
//	
//  b.fill(255, 40, 255);
//
//  filter = new p5.BandPass();
//
//  noise = new p5.Noise();
//
//  noise.disconnect(); // Disconnect soundfile from master output...
//  filter.process(noise); // ...and connect to filter so we'll only hear BandPass.
//  noise.start();
//
//  fft = new p5.FFT();
//}
//
//	
//
//b.draw = function() {
//  b.background(30);
//
//  // Map mouseX to a bandpass freq from the FFT spectrum range: 10Hz - 22050Hz
//  filterFreq = map (mouseX, 0, width, 10, 22050);
//  // Map mouseY to resonance/width
//  filterWidth = map(mouseY, 0, height, 0, 90);
//  // set filter parameters
//  filter.set(filterFreq, filterWidth);
//
//  // Draw every value in the FFT spectrum analysis where
//  // x = lowest (10Hz) to highest (22050Hz) frequencies,
//  // h = energy / amplitude at that frequency
//  var spectrum = fft.analyze();
//  b.noStroke();
//  for (var i = 0; i< spectrum.length; i++){
//    var x = map(i, 0, spectrum.length, 0, width);
//    var h = -height + map(spectrum[i], 0, 255, height, 0);
//    rect(x, height, width/spectrum.length, h) ;
//  }
//}
//
//};
//
//var myp5 = new p5(s);









	

	/*
function draw(){
//	$('selectorLeft').on('mouseenter', function(){
//		console.log('test');
$('selectorLeft').mouseenter(function(){
		console.log('test');
//		$(this).draw() 
  //remove stroke from circles
  noStroke()
  //change the blue in our function over time
  //try adding lightness
//  value = lightness(c); 
  // Sets 'value' to 50
//	fill(value);
  blueness += changeBlue;
  if(blueness == 80 || blueness == 130){
    changeBlue *= -1;
  			}
	})
}

/////probably don't need div-left and also do divLeft

//function draw(){
//	$('#div-left').on('mouseenter', function(){
//		$(this).draw() 
  //remove stroke from circles
//  noStroke()
  //change the blue in our function over time
  //try adding lightness
//  value = lightness(c);  // Sets 'value' to 50
//	fill(value);
//  blueness += changeBlue;
//  if(blueness == 80 || blueness == 130){
//    changeBlue *= -1;
//  			}
//		
//	})
//})
//}


//	$('#div-left').on('mouseenter', 'div', function(){
function mouseDragged(){
  //map is a cool function that maps a number in one range to one in another. So in the example below, we're mapping mouseX, a number between 0 and the pixel width of the screen, to a number between 0 and 255. So when the mouse is half way across the screen, mouseColorX will return 127. This is a handy way to pass input from one place into another place that has constaints (0 to 255 for color).
  var mouseColorX = map(mouseX, 0, width, 0, 255)
  var mouseColorY = map(mouseY, 0 , height, 0, 255)
  //fill(red, green, blue)
  //The red is based on the x position of the mouse, the color is based on the y position of the mouse, and the blue changes over time as the program runs.
  fill(mouseColorX, mouseColorY, blueness)
  //draws an ellipse where our mouse is, and makes it bigger based on how long we've been holding down the mouse
  ellipse(mouseX,mouseY, 3+SIZE, 3+SIZE)
  SIZE += sizeGrowth
		}
//	})
//})

function mouseReleased(){
  SIZE = 0;
}
*/
	

//});

