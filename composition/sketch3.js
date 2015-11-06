function setup() {
  createCanvas(windowWidth, windowHeight);
}

var myPosition = 0;

function draw(){
  var mousePercent = (mouseX/width)*255;
  
  background(mousePercent);
  line(mouseX,mouseY,100,myPosition);
  myPosition++;
}