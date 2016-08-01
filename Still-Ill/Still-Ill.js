
var word = "STILL ILL";
var yPosition = 100;
var xPosition = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(300);
  stroke(0,0,0,10);
  strokeWeight(2);
  textSize(displayWidth/10);
  fill(255, 255, 255, 0);
    for (i = 0; i < 2000; i++){
  //    yPosition = 0.5*sin(random(10) + PI/yPosition) + yPosition;
  //    xPosition = 0.333*(PI/sin(random(10))) + xPosition;
      yPosition = sin(random(10) + PI/yPosition) + yPosition; //v3
      xPosition = 0.333*(PI/sin(random(10))) + xPosition; //v3
  //    yPosition = sin(random(10) + PI/yPosition) + yPosition; //v2
  //    xPosition = 0.5*(PI/sin(random(10))) + xPosition; //v2
  //    yPosition = sin(random(10) - PI/yPosition) + yPosition; //v1
  //    xPosition = 0.5*(PI/sin(random(10))) + xPosition; //v1
      //sin(t – π/3):
      //sin(t) + 3:
      //sin(2t):
      //3sin(t):
      text(word, xPosition, yPosition);
      fill(random(255), random(255), random(255), 80);

    }
}

function draw() {

}
