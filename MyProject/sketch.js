function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(windowWidth,500);
  //noCanvas();
  background(94,176,183);
  noCursor();

}

function draw() {
  //stroke(10)
  //noFill();
  //triangle(100, 300, 600, 80, 1000, 450);
	
  if (keyIsPressed) {
    fill(255);
  } else {
    fill(94,176,183);
  }
  noStroke();
  //ellipse(mouseX+100, mouseY+100, 80, 80);
  //rect(mouseX-100, mouseY-100, 250, 250);
  fill('rgba(255,255,255, 0.25)');
  ellipse(windowWidth/2, windowHeight/2, mouseX/1.5, mouseY/1.5);
  //blendMode(LIGHTEST);
  strokeWeight(2);
  line(mouseX, mouseY, windowWidth, windowHeight);
  stroke(141,214,222);
  line(mouseX+10, mouseY+10, windowWidth, windowHeight);
  stroke(95,95,91);
  line(mouseX+30, mouseY+50, windowWidth, windowHeight);

  line(mouseX+100, mouseY+100, 0,0);
  stroke(178,178,178);
  line(mouseX+300, mouseY+300, 0,0);
  stroke(17,117,126);
  line(mouseX+200, mouseY+200, 0,0);

  line(mouseX+200, mouseY+200, windowWidth, 0);
  stroke(100,100,100);
  line(mouseX+100, mouseY+100, windowWidth, 0);
  stroke(11,181,197);
  line(mouseX+300, mouseY+500, windowWidth, 0);

  line(mouseX, mouseY, 0, windowHeight);
  stroke(113,153,156);
  line(mouseX+20, mouseY+20, 0, windowHeight);
  stroke(162,226,232);
  line(mouseX+20, mouseY+20, 0, windowHeight);



  

}