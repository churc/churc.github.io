///////////THIS WORKS FOR WAVE TO FOLLOW MOUSE DRAW AGAIN TO GET IT TO SHOW

var my2p5 = new p5(s2,'myContainerdraw');

var s2 = function(p) {
	
var SIZE = 0.9
//var sizeGrowth = 0.6
var blueness = 0
var changeBlue = 1

p.setup = function(){
  var canv = p.createCanvas(1360, 300)
  canv.parent('myContainerdraw');
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


p.mouseDragged = function(){
	
  //map is a cool function that maps a number in one range to one in another. So in the example below, we're mapping mouseX, a number between 0 and the pixel width of the screen, to a number between 0 and 255. So when the mouse is half way across the screen, mouseColorX will return 127. This is a handy way to pass input from one place into another place that has constaints (0 to 255 for color).
  var mouseColorX = map(mouseX, 0, width, 50, 120)
  var mouseColorY = map(mouseY, 0 , height, 245, 90)
  //fill(red, green, blue)
  //The red is based on the x position of the mouse, the color is based on the y position of the mouse, and the blue changes over time as the program runs.
  p.fill(mouseColorX, mouseColorY, blueness)
  //draws an ellipse where our mouse is, and makes it bigger based on how long we've been holding down the mouse
//  p.ellipse(mouseX,mouseY, 12+SIZE, 12+SIZE)
   p.ellipse(mouseX,mouseY, 15+SIZE, 15+SIZE)
//  SIZE += sizeGrowth
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
	drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -15;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "purple";
	
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

};

///////PLAY SONG
//
//var my3p5 = new p5(s3,'Song');
//
//var s3 = function(d) {
//var songB;
//
//d.reload = function() {
//  soundFormats('mp3', 'ogg');
//  songB = loadSound('assets/Beyonce.mp3');
//}
//
//d.setup = function(){
//
//}
//
// d.draw = function() {
//  background(255,255,0);
//  var str = 'Click here to play!';
//  str += ' Current Play Mode: ' + playMode+'.';
//  text(str, 10, height/2);
//}
//d.mouseClicked = function(){
//songB.play;
//}
//};	 
//var my3p5 = new p5(s3);
//
//
//
////});

