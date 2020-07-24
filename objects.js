class slider{
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.wid=10;
    this.heigh = 150;
    this.velocity = 5;
    this.moment=0;
  }

  display(){
    fill(255);
    noStroke();
    rect(this.x,this.y,this.wid, this.heigh);
  }

  move(){
    if (this.moment==1){
      if(this.y+this.heigh>height){
        return ;
      }
      else{
        this.y+=this.velocity;
      }
    }
    else if(this.moment==-1){
      if(this.y<0){
        return ;
      }
      else{
        this.y-= this.velocity;
      }
    }
  }
}


class Ball{
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.diameter=20;
    this.veloX = 6;
    this.veloY = 0;
  }

  display() {
    fill(255);
    stroke(255);
    circle(this.x, this.y,this.diameter);
  }

  move(){
    let first=slider1.wid>=this.x-this.diameter/2 && slider1.y<=this.y+this.diameter/2 && slider1.y+slider1.heigh>=this.y-this.diameter/2;
    let second = slider2.x<=this.x+this.diameter/2 && slider2.y<=this.y+this.diameter/2&& slider2.y+slider2.heigh>=this.y-this.diameter/2;
    if(this.x-this.diameter/2===0 || this.x+this.diameter/2===width || second || first){
      this.veloX*=-1.01;
      if(first && this.y>=slider1.y+slider1.heigh*5/6 || second && this.y>=slider2.y+slider2.heigh*5/6){
        this.veloY = random(7,10);
      }
      else if(first && this.y>=slider1.y+slider1.heigh*4/6 || second && this.y>=slider2.y+slider2.heigh*4/6){
        this.veloY= random(3,5);
      }
      else if(first && this.y>=slider1.y+slider1.heigh*2/6 || second && this.y>=slider2.y+slider2.heigh*2/6){
        this.veloY= random(-3,3);
      }
      else if(first && this.y>=slider1.y+slider1.heigh*1/6 || second && this.y>=slider2.y+slider2.heigh*1/6){
        this.veloY= random(-5,-3);
      }
      else if(first && this.y+this.diameter/2>=slider1.y || second && this.y+this.diameter/2>=slider2.y){
        this.veloY= random(-10,-7);
      }

    }
    this.x+=this.veloX;
    if(this.y- this.diameter/2<=0 || this.y+ this.diameter/2>=height){
      this.veloY*=-1;
    }
    this.y+=this.veloY;
  }

  replace(){
    this.x = width/2;
    this.y = height/2;
    this.veloY = 0;
  }
}
