function setup() {
  createCanvas(windowWidth, windowHeight);
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
    
  
    
    rect(10,10,100,100,20);
    stroke("black");
    point(300,300);
    stroke(255, 102, 0);
curve(5, 26, 5, 26, 73, 24, 73, 61);
stroke(0);
curve(5, 26, 73, 24, 73, 61, 15, 65);
stroke(255, 102, 0);
curve(73, 24, 73, 61, 15, 65, 15, 65);
}

