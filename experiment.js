function setup() {
  createCanvas(400, 400);
   background(255);
    colorMode(HSB);
}

function draw() {
  
  
 
  for (var x = 10; x < width-10; x = x + 10) {
    fill(HSB);
    line(x, height/2, mouseX, mouseY);
  }
}
