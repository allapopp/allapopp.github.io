function setup(){
  createCanvas(500, 500, WEBGL);
}

function draw(){
  background(255,255,255)
  rotateX(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  cylinder(300, 300);
}