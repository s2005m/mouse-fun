function setup(){
  createCanvas(600,400);
  background(255,255,0);
}

function draw(){
  noStroke();

  fill(mouseX,mouseY,mouseX+mouseY);
  ellipse(mouseX,mouseY,20,20);
}

function mousePressed(){
  background(255,255,0);
 ellipse(mouseX,mouseY,30,30);

}
