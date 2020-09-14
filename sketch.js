//variables to store the time in degrees
var hrAngle, minAngle, secAngle;

function setup() {
  //creating the canvas as the size of the display screen
  createCanvas(displayWidth, displayHeight);
  
}

function draw() {
  //changing background color to black
  background(0);  

  //changing angle mode to degrees
  angleMode(DEGREES);

  //calculating the time in degrees
  hrAngle = map(hour(),0,23,0,360);
  minAngle = map(minute(),0,60,0,360);
  secAngle = map(second(),0,60,0,360);
  
  //drawing the lines
  push();
  translate();
  stroke("green");
  strokeWeight(7);
  hrLine = line(displayWidth/2,displayHeight/2,displayWidth/20,0);
  console.log(displayWidth/20)
  pop();
  
  stroke("orange");
  minLine = line(0,0,100,0);

  stroke("blue");
  secLine = line(0,0,100,0);
  
}