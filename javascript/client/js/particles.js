
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

var ps;

function setup() {
  createCanvas(200,200);
  // cnv.position(window.width) / 2;
  setFrameRate(60);
  // ps = new ParticleSystem(createVector(width/2, 50));
  ps = new ParticleSystem(createVector(width/2, 80));
}

function draw() {
  background(231,242,116);
  // Apply gravity force to all Particles
  // var gravity = createVector(0, 0.1);
  var gravity = createVector(0, 0.05);
  ps.applyForce(gravity);

  ps.addParticle();
  ps.run();
}



///

var Particle = function(position) {
    this.acceleration = createVector(0, 0.0);
    this.velocity = createVector(random(-1, 1), random(-2, 0));

    this.position = position.copy();
    this.lifespan = 255.0;
  // this.mass = 1; 
    this.mass = 1.2;

    this.run = function() {
    this.update();
    this.display();
  };

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  };

  // Method to update position
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.lifespan -= 2.0;
  };

  // Method to display
  this.display = function() {
    stroke(200, this.lifespan);
    strokeWeight(1);
    fill(188, 51, 177, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  };

   // Is the particle still useful?
  this.isDead = function() {
    if (this.lifespan < 0.0) {
        return true;
    } else {
        return false;
    }
  };
};



///

var ParticleSystem = function(position) {
	this.origin = position.copy();
	this.particles = [];

  this.addParticle = function() {
  	this.particles.push(new Particle(this.origin));
  };

  this.run = function(){
  	for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };

  // A function to apply a force to all Particles
  this.applyForce = function(f){
    for(var i = 0; i < this.particles.length; i++){
      this.particles[i].applyForce(f);
    }
  };
};



///

// ParticleSystem ps;
// Repeller repeller;
 
// void setup() {
//   size(640,360);
//   ps = new ParticleSystem(new PVector(width/2,50));
//   repeller = new Repeller(width/2-20,height/2);
// }

// //draw and applying a universal gravity & the repeller
// void draw() {
//   background(100);
//   ps.addParticle();
//   PVector gravity = new PVector(0,0.1);
//   ps.applyForce(gravity);
//   ps.applyRepeller(repeller);
//   ps.run();
//   repeller.display();
// }
 
 
// // The ParticleSystem manages all the Particles.
// class ParticleSystem {
//   ArrayList<Particle> particles;
//   PVector origin;
//   ParticleSystem(PVector location) {
//     origin = location.get();
//     particles = new ArrayList<Particle>();
//   }
 
//   void addParticle() {
//     particles.add(new Particle(origin));
//   }
 
// // Applying a force as a PVector
//   void applyForce(PVector f) {
//     for (Particle p: particles) {
//       p.applyForce(f);
//     }
//   }

// // Calculating a force for each Particle based on a Repeller 
//   void applyRepeller(Repeller r) {
//     for (Particle p: particles) {
//       PVector force = r.repel(p);
//       p.applyForce(force);
//     }
//   }
 
//   void run() {
//     Iterator<Particle> it = particles.iterator();
//     while (it.hasNext()) {
//       Particle p = (Particle) it.next();
//       p.run();
//       if (p.isDead()) {
//         it.remove();
//       }
//     }
//   }
// }

// // repeller strength 
// class Repeller {
//   float strength = 100;
//   PVector location;
//   float r = 10;
//   Repeller(float x, float y)  {
//     location = new PVector(x,y);
//   }
 
//   void display() {
//     stroke(255);
//     fill(255);
//     ellipse(location.x,location.y,r*2,r*2);
//   }
 
//   PVector repel(Particle p) {
//     PVector dir = PVector.sub(location,p.location);
//     float d = dir.mag();
//     dir.normalize();
//     d = constrain(d,5,100);
//     float force = -1 * strength / (d * d);
//     dir.mult(force);
//     return dir;
//   }
// }
