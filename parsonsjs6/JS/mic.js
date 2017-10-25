

var mic, recorder, soundFile;

var state = 0; // mousePress will increment from Record, to Stop, to Play

function setup() {
  createCanvas(1200,600);
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

//function draw() {
////  background(200);
//
//  // Get the overall volume (between 0 and 1.0)
//  var vol = mic.getLevel();
//  console.log(vol)
//  fill(0,255,0);
//  noStroke();
//
//  // Draw an ellipse with height based on volume
//  var h = map(vol, 0, 1, 0, 150);
//  ellipse(width/2, height/2, 50 + h, 50 + h);
//}

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

//function draw() {
////  background(200);
//
//  // Get the overall volume (between 0 and 1.0)
//  var vol = mic.getLevel();
//  console.log(vol)
//  fill(0,20,50);
//  noStroke();
//
//  // Draw an ellipse with height based on volume
//  var h = map(vol, 0, 1, 0, 150);
//  ellipse(width/2, height/2, 50 + h, 50 + h);
//}


//var mic;
//
//function setup() {
//  createCanvas(710, 200);
//
//  // Create an Audio input
//  mic = new p5.AudioIn();
//
//  // start the Audio Input.
//  // By default, it does not .connect() (to the computer speakers)
//  mic.start();
//}
//
//function draw() {
//  background(200);
//
//  // Get the overall volume (between 0 and 1.0)
//  var vol = mic.getLevel();
//  console.log(vol)
//  fill(255,0,0);
//  noStroke();
//
//  // Draw an ellipse with height based on volume
//  var h = map(vol, 0, 1, 0, 150);
//  ellipse(width/2, height/2, 50 + h, 50 + h);
//}