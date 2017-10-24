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


//////This works to ADD lyrics show when button is pressed

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



///////MIC works to record and play back sound but doesn't can't see myContainersound anymore

var mic, recorder, soundFile;

var state = 0; // mousePress will increment from Record, to Stop, to Play

function setup() {
  myCanvas2 = createCanvas(1200,300);
	myCanvas2.parent('myContainerdraw');
  background(200);
  fill(0);
  text('Enable mic and click the mouse to begin recording', 20, 20);

  // create an audio in
  mic = new p5.AudioIn();

  // users must manually enable their browser microphone for recording to work properly!
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // create an empty sound file that we will use to playback the recording
  soundFile = new p5.SoundFile();
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  console.log(vol)
  fill(0,255,255);
  noStroke();

  // Draw an ellipse with height based on volume
  var h = map(vol, 0, 1, 0, 150);
  ellipse(width/2, height/2, 50 + h, 50 + h);
}

function mousePressed() {
//getWave();
  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
  if (state === 0 && mic.enabled) {

    // Tell recorder to record to a p5.SoundFile which we will use for playback
    recorder.record(soundFile);

    background(255,0,0);
    text('Recording now! Click to stop.', 20, 20);
    state++;
  }

  else if (state === 1) {
    recorder.stop(); // stop recorder, and send the result to soundFile

    background(0,255,0);
    text('Recording stopped. Click to play & save', 20, 20);
    state++;
  }

  else if (state === 2) {
    soundFile.play(); // play the result!
    saveSound(soundFile, 'mySound.wav'); // save file
    state++;
  }
}


///////////NOT USING: PARK
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