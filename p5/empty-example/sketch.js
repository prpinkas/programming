var diamBlue = 0;
var r = 0;
var g = 50;
var b = 200;

function setup() {
  // put setup code here
    createCanvas(500,500);
    background(r,g,b);
}

function draw() {
  // put drawing code here
//ellipse with big stroke that follows that mouse
fill(255,220,180);
stroke(220,160,30);
strokeWeight(10);
ellipse(mouseX,mouseY,20,20);
//2 blue ellipses
fill(0,40,255,20);
noStroke();
ellipse(250,250,diamBlue,diamBlue);
ellipse(260,260,diamBlue,diamBlue);
fill(255,220,180);
rect(400,400,20,50);
triangle(250,250,280,350,220,350);
stroke(220,160,30,80);
strokeWeight(4);
line(0,0,500,500);
point(10,400);
noStroke();
textSize(20);    
textFont("Georgia");
textStyle(ITALIC);
text("hello",50,450);
}
function mousePressed(){
    //increase the diameter of the blue ellipses
    if (diamBlue >=200){
        diamBlue = 0;
    }else{
    diamBlue = diamBlue + 10;
    }
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
}
function keyTyped(){
    if (key == 'a'){
        fill(255);
        ellipse(250,250,400,400);
    }
}
