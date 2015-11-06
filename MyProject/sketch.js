function setup() {

  frameRate(20);

  var cnv = createCanvas(windowWidth,windowHeight);
  cnv.parent("myContainer");

  soundFormats('mp3', 'ogg');
  sound = loadSound('Stories_mixdown.mp3');
                  
          
  noCursor();

}

var fillVal = 'rgba(255,255,255, 0.001)'; //my basic blue
var fillVal2 = 'rgba(255,255,255,0.1)';
var strokeBasic = 'rgba(94,176,183, 0.5)' ;//transparent light blue
var strokeBasic2 = 'rgba(94,176,183, 0.5)';
var strokeBasic3 = 'rgba(94,176,183, 0.5)';
var strokeWeightToChange = '0.001';

function draw() {
                 
  noStroke();
                  
  fill(fillVal);
  rect(0, 0, windowWidth, windowHeight);
  
  fill(fillVal2);
  ellipse(windowWidth/2, windowHeight/2, mouseX, mouseY);
  
                  //blendMode(LIGHTEST);
                  
  strokeWeight(strokeWeightToChange);
  stroke(strokeBasic);
  line(mouseX+100, mouseY+100, windowWidth, windowHeight);
  stroke(strokeBasic2);
  line(mouseX+10, mouseY+10, windowWidth, windowHeight);
  //stroke(100,100,100); // dark gray
  stroke(strokeBasic3);
  line(mouseX+30, mouseY+50, windowWidth, windowHeight);

  //stroke(100,100,100);
  stroke(strokeBasic);
  line(mouseX+100, mouseY+100, 0,0);
  //stroke(178,178,178); //light gray
  stroke(strokeBasic2);
  line(mouseX+300, mouseY+300, 0,0);
  stroke(strokeBasic3);
  //stroke(17,117,126); // gray blue
  line(mouseX+200, mouseY+200, 0,0);

  //stroke(100,100,100);
  stroke(strokeBasic);
  line(mouseX+200, mouseY+200, windowWidth, 0);
  //stroke(100,100,100); //gray
  stroke(strokeBasic2);
  line(mouseX+100, mouseY+100, windowWidth, 0);
  //stroke(11,181,197); //bright blue
  stroke(strokeBasic3);
  line(mouseX+300, mouseY+500, windowWidth, 0);

  //stroke(100,100,100);
  stroke(strokeBasic);
  line(mouseX, mouseY, 0, windowHeight);
  //stroke(113,153,156); //gray green blue
  stroke(strokeBasic2);
  line(mouseX+20, mouseY+20, 0, windowHeight);
  //stroke(162,226,232); //light blue
  stroke(strokeBasic3);
  line(mouseX+20, mouseY+20, 0, windowHeight);
  

}


function windowResized() {

  resizeCanvas(windowWidth,windowHeight);

}

function keyPressed() {

  if (keyCode == "49") {
    //fillVal = 'rgba(94,183,101, 0.05)'; // green
    strokeBasic = 'rgba(255,255,255, 0.02)'; // violet
    strokeBasic2 = 'rgba(50,50,50,0.5)';//gray
    strokeBasic3 = 'rgba(150,150,150, 0.5)'; //basic blue
    strokeWeightToChange = '2';
  } else if (keyCode == "50") { 
    fillVal = 'rgba(94,176,183, 0.02)'; // my basic blue
    strokeBasic = 'rgba(183,101,94, 0.02)'; //orange
    strokeBasic2 = 'rgba(183,94,176, 0.02)'; // violet
    strokeBasic3 = 'rgba(100,100,100, 0.05)';//gray
    strokeWeightToChange = '5';
  } else if (keyCode == "51") {
    fillVal = 'rgba(183,94,176, 0.02)'; // violet
    strokeBasic = 'rgba(100,100,100, 0.05)';//gray
    strokeBasic2 = 'rgba(94,183,101, 0.05)'; // green
    strokeBasic3 = 'rgba(94,176,183, 0.02)';
    strokeWeightToChange = '0';

  } else if (keyCode == "52") {
    fillVal = 'rgba(183,101,94, 0.02)'; //orange
    strokeBasic = 'rgba(141,214,222, 0.05)';
    strokeBasic2 = 'rgba(100,100,100, 0.05)';//gray
    strokeBasic3 = 'rgba(94,176,183, 0.02)';
    strokeWeightToChange = '0.5';
  
  } else if (keyCode == "53") {
    fillVal = 'rgba(255,255,255, 0.01)';
    strokeBasic = 'rgba(141,214,222, 0.05)';
    strokeBasic2 = 'rgba(141,214,222, 0.05)';
    strokeBasic3 = 'rgba(141,214,222, 0.05)';
    strokeWeightToChange = '10';

  }


  else if (keyCode == "57") {
    fillVal = 'rgba(94,176,183, 1)'; //my basic blue
    fillVal2 = 'rgba(255,255,255,0.1)';
    strokeBasic = 'rgba(94,176,183, 0.5)' ;//transparent light blue
    strokeBasic2 = 'rgba(94,176,183, 0.5)';
    strokeBasic3 = 'rgba(94,176,183, 0.5)';
    strokeWeightToChange = '0.001';
  }

  return false; // prevent default
}

function touchMoved() {

  noFill();
  ellipse(touchX, touchY, touchX/5, touchY/5);
  stroke(5);
  line(touchX, touchY, windowWidth/2, windowHeight/2);
  // prevent default
  return false;
}

//function touchStarted() {
  //ellipse(touchX, touchY, 10, 10);
  // prevent default
  //return false;
//}