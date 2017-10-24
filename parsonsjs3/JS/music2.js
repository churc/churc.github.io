///THIS WORKS TO PLAY SONG AND SHOW WAVEFORM

var soundFile;
var fft;
var fftBands = 1024;

// Array of amplitude values (0-255) over time.
var waveform = [];

function preload() {
  soundFormats('mp3', 'ogg');
  soundFile = loadSound('assets/BackToBlack');
}

function setup() {
  var myCanvas = createCanvas(fftBands, 256);
  noFill();
//	sites the container on the page
myCanvas.parent('myContainersound');

  soundFile.loop();

  /**
   *  Create an FFT object.
   *  Accepts optional parameters for
   *    - Smoothing 
   *    - Length of the FFT's analyze/waveform array. Must be a power of two between 16 and 1024 (default).
   */
  fft = new p5.FFT(.99, fftBands);

//  p = createP('Press any key to play or to pause song');
}

function draw() {
//  background(51, 173, 255);
	background(153, 255, 255);

  /** 
   * Analyze the sound as a waveform (amplitude over time)
   */
  waveform = fft.waveform();

  // Draw snapshot of the waveform
  beginShape();
  for (var i = 0; i< waveform.length; i++){
    stroke(3);
    strokeWeight(1);
	stroke('red');
    vertex(i*2, map(waveform[i], -1, 1, height, 0) );
  }
  endShape();
}

function keyPressed() {
  if (soundFile.isPlaying()) {
    soundFile.pause();
  } else {
    soundFile.play();
  }
}


//////ADD lyrics show when key is pressed

//markov works Amy Winehouse lyrics  Mark Ronson, Amy Winehouse Back To Black

var markov = new RiMarkov(2);
//var mrk = document.getElementById("headerMark");
function genPnP(numSentences){
 $('#headerMark').text(markov.generateSentences(numSentences).join(" "))
}
var lyrics = 'He left no time to regret, Kept his dick wet, With his same old safe bet. Me and my head high, And my tears dry, Get on without my guy. You went back to what you knew, So far removed from all that we went through. And I tread a troubled track, My odds are stacked, Ill go back to black. We only said goodbye with words, I died a hundred times. You go back to her, And I go back to, I go back to us. I loved you much. Its not enough, You love blow and I love puff, And life is like a pipe. And Im a tiny penny rolling up the walls inside. We only said goodbye with words. I died a hundred times. You go back to her, And I go back to. We only said goodbye with words, I died a hundred times. You go back to her, And I go back to. Black, black, black, black, black, black, black. I go back to, I go back to. We only said goodbye with words, I died a hundred times. You go back to her, And I go back to. We only said goodbye with words, I died a hundred times. You go back to her, And I go back to black.'

markov.loadText(lyrics)
$('#headerMark').text(genPnP)

//function buttonMrk(){
// document.getElementById("mrk").innerHTML=genPnP();
//}

//function keyTyped(){
//  if(key == ' '){
//    lyrics.stop()
//    lyrics.play()
//  }
//}


////this works to play song
////FILTER LOWPASS
/*
var soundFile;
var fft;
var filter, filterFreq, filterRes;
function preload() {
  soundFormats('mp3', 'ogg');
  soundFile = loadSound('assets/Beyonce');
}
function setup() {
  createCanvas(710, 256);
  fill(255, 40, 255);
  // loop the sound file
  soundFile.loop();
  filter = new p5.LowPass();
  // Disconnect soundfile from master output.
  // Then, connect it to the filter, so that we only hear the filtered sound
  soundFile.disconnect();
  soundFile.connect(filter);
  fft = new p5.FFT();
}
function draw() {
  background(30);
  // Map mouseX to a the cutoff frequency from the lowest
  // frequency (10Hz) to the highest (22050Hz) that humans can hear
  filterFreq = map (mouseX, 0, width, 10, 22050);
  // Map mouseY to resonance (volume boost) at the cutoff frequency
  filterRes = map(mouseY, 0, height, 15, 5);
  // set filter parameters
  filter.set(filterFreq, filterRes);
  // Draw every value in the FFT spectrum analysis where
  // x = lowest (10Hz) to highest (22050Hz) frequencies,
  // h = energy (amplitude / volume) at that frequency
  var spectrum = fft.analyze();
  noStroke();
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width/spectrum.length, h) ;
  }
} 
*/