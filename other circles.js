function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX);
  y.push(mouseY);

  for (var i = 0; i < width; i = i + 10) {
    ellipse(x[i], y[i], 1 + (x.length - i));
  }
for (var i = 4; i < width; i = i + 10) {
  rectMode(CENTER);
  square(x[i], y[i], 1 + (x.length - i));
  }
  for (var i = 8; i < width; i = i + 10) {
  rectMode(CENTER);
  line(x[i], y[i], 1 + (x.length - i),80);
  }
