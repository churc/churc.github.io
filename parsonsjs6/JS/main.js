$(document).ready(function(){
///THIS WORKS TO PLAY SONG AND SHOW WAVEFORM
var s = function(p){
var soundFile;
var fft;
var fftBands = 1024;

// Array of amplitude values (0-255) over time.
var waveform = [];

p.preload = function(){
  p.soundFormats('mp3', 'ogg');
  soundFile = p.loadSound('Assets/BackToBlack.mp3');
}

p.setup = function(){
//  var myCanvas =
	p.createCanvas(fftBands, 280);
  p.noFill();
//	sites the container on the page
//myCanvas.parent('myContainersound');

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

p.draw = function(){
	p.background(153, 255, 255);
  /** 
   * Analyze the sound as a waveform (amplitude over time)
   */
  waveform = fft.waveform();

  // Draw snapshot of the waveform
  p.beginShape();
  for (var i = 0; i< waveform.length; i++){
    p.stroke(3);
    p.strokeWeight(1);
	p.stroke('red');
    p.vertex(i*2, p.map(waveform[i], -1, 1, p.height, 0) );
  }
  p.endShape();
}

p.keyPressed = function(){
  if (soundFile.isPlaying()) {
    soundFile.pause();
  } else {
    soundFile.play();
  }
}
};
var myp5 = new p5(s, 'myContainersound');

////// ADD scrambled lyrics when button is pressed
	//	markov works Amy Winehouse lyrics  Mark Ronson, Amy Winehouse Back To Black
	
//	this has stopped working - add eventlistener and event.stopImmediatePropagation()

//ADDING function greyed out just below does not help
/*
	//var m = function(p){ 
//var markov = new RiMarkov(2);
////var buttonMrk = document.getElementById("headerMark");
//var buttonMrk = document.getElementById("#buttonMrk")
//
//p.genPnP = function(numSentences){
// $('#headerMark').text(markov.generateSentences(numSentences).join(" "))
//}
*/

 
var markov = new RiMarkov(2);
	
var buttonMrk = document.getElementById("#buttonMrk")

function genPnP(numSentences){
 $('#headerMark').text(markov.generateSentences(numSentences).join(" "))
}


var lyrics = 'He left no time to regret, Kept his dick wet, With his same old safe bet. Me and my head high, And my tears dry, Get on without my guy. You went back to what you knew, So far removed from all that we went through. And I tread a troubled track, My odds are stacked, Ill go back to black. We only said goodbye with words, I died a hundred times. You go back to her, And I go back to, I go back to us. I loved you much. Its not enough, You love blow and I love puff, And life is like a pipe. And Im a tiny penny rolling up the walls inside. We only said goodbye with words. I died a hundred times. You go back to her, And I go back to. We only said goodbye with words, I died a hundred times. You go back to her, And I go back to. Black, black, black, black, black, black, black. I go back to, I go back to. We only said goodbye with words, I died a hundred times. You go back to her, And I go back to. We only said goodbye with words, I died a hundred times. You go back to her, And I go back to black.'

markov.loadText(lyrics)
$('#headerMark').text(genPnP)

//};
//var myp5 = new p5(m,'headerMark');
	
//var buttonMrk = document.getElementById("#buttonMrk")

$(document).ready(function(){
$('#buttonMrk').click(function(event){
  genPnP();
})
});
	
function stopEvent(ev) {
  buttonMrk = document.getElementById("buttonMrk");
//  buttonMrk.innerHTML = "hello";


  ev.stopPropagation();
//  alert("event propagation halted.");
}
//
function load() {
  elem = document.getElementById("t");
  elem.addEventListener("click", stopEvent, false);
}	
	
//$("#myContainerdraw").click(function(){
//        p();
//       event.stopImmediatePropagation();
//    });    
//});



///////MIC works to record and play back sound but doesn't can't see myContainersound anymore

var t = function( p ) { 
var mic, recorder, soundFile;

var state = 0; // mousePress will increment from Record, to Stop, to Play

p.setup = function() {
//  myCanvas2 =
p.createCanvas(1025,280);
// myCanvas2.parent('myContainerdraw');
p.background(200);
  p.fill(0);
	p.textSize(18);
  p.text('Enable mic and click the mouse to begin recording...', 40, 40);

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

p.draw = function() {
  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  console.log(vol)
  p.fill(0,255,255);
  p.noStroke();

  // Draw an ellipse with height based on volume
  var h = p.map(vol, 0, 1, 0, 150);
  p.ellipse(p.width/2, p.height/2, 20 + h, 20 + h);
}

p.mousePressed = function() {
//getWave();
  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
  if (state === 0 && mic.enabled) {

    // Tell recorder to record to a p5.SoundFile which we will use for playback
    recorder.record(soundFile);

    p.background(255,0,0);
    p.text('Recording now! Click to stop.', 40, 40);
    state++;
  }

  else if (state === 1) {
    recorder.stop(); // stop recorder, and send the result to soundFile

    p.background(0,255,0);
	p.fill(0);
    p.text('Recording stopped. Click to play & save. Reload page to reset.', 40, 40);
    state++;
  }

  else if (state === 2) {
    soundFile.play(); // play the result!
    p.saveSound(soundFile, 'mySound.wav'); // save file
    state++;
  }
	return false;
}
};
var myp5 = new p5(t, 'myContainerdraw');
})

