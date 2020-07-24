let font;
fontSize=32;
let player1_score=0;
let player2_score=0;


function preload(){
  font = loadFont('assets/SourceSansPro-SemiBold.ttf');
}

function setup() {
  createCanvas(800,600);
  slider1= new slider(0,225);
  slider2 = new slider(790,225);
  ball = new Ball();
  console.log(ball);
  textFont(font);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(2);
  line(width/2,0,width/2,height);
  if( ball.x+ ball.diameter/2>=width){
    ball.replace();
    ball.veloX=-6;
    player1_score++;
  }
  else if (ball.x-ball.diameter/2<=0){
    ball.replace();
    ball.veloX=6;
    player2_score++;
  }
  slider1.move();
  slider2.move();
  slider1.display();
  slider2.display();
  ball.display();
  ball.move();
  fill(255,255,0);
  text("PONG",width/2,10);
  text(player1_score,width/4,10);
  text(player2_score,width*3/4,10);
  noFill();
  strokeWeight(3);
  stroke(0);
  rect(0,0,width,height);
}


function keyPressed(){
  if(key==='s') {
    slider1.moment=1;
  }
  else if(key=='w'){
    slider1.moment = -1;
  }
  if(key=='k'){
    slider2.moment=1;
  }
  else if (key=='o'){
    slider2.moment = -1;
  }
}


function keyReleased(){
  if(key==='s') {
    slider1.moment = 0;
  }
  else if(key=='w'){
    slider1.moment = 0;
  }
  if(key=='k'){
    slider2.moment = 0;
  }
  else if (key=='o'){
    slider2.moment = 0;
  }
}
