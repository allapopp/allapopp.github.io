var ex1 = function( s ) {
  s.setup = function() {
}
  s.draw = function() {
    s.ellipse(50,50,80,80);
  }
function setup() {
  createCanvas();
}

function draw() {
	// place your drawing code here
	//var myArray = ["jan","Stephan"]
    
    stroke("orange");
    strokeWeight(5);
    triangle(200,200,220,20,100,80);
    stroke("red");
    strokeWeight(10);

    fill(26,146,46); //or "green", or #1a922e
    ellipse(width/2,height/2,50,100);
    line(width/2,height/2,50,400);
    stroke("blue");
    strokeWeight(15);
    line(100,50,50,50);
    
    curve(5, 26, 5, 26, 73, 24, 73, 61);
    stroke(0);
    curve(5, 26, 73, 24, 73, 61, 15, 65);
    stroke(255, 102, 0);
    curve(73, 24, 73, 61, 15, 65, 15, 65);
    
    
    stroke("black");
    point(300,300);
    stroke(255, 102, 0);
    
    noFill();
    noStroke();
    rotateX(frameCount * 0.02);
    rotateZ(frameCount * 0.02);
    cylinder(300, 300);


}

