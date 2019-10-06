function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  var x = random(width);
  var y = random(height); 
  for (var x = random(width); x < width; x=x+random(50))
    for (var y = random(height); y < height; y=y+random(50)) {

  stroke(x, y, 100);
  point(x, y);
    }
}
