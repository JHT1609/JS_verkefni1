// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

canvas.style.background = "Black"

//constructar boltann

class Ball {
  constructor(xpos,ypos,radius,colour,speed){
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.colour = colour;
    this.speed = speed;

    this.dx = 1 * this.speed
    this.dy = 1 * this.speed
  }

  draw(ctx){
    ctx.beginPath();
    ctx.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.closePath();
  }

  update(){    
    this.draw(ctx);

    if ( (this.xpos + this.radius) > width) { 
      this.dx = -this.dx;
    }
    if ( (this.xpos - this.radius) < 0) { 
      this.dx = -this.dx;
    }
    if ( (this.ypos + this.radius) > height) { 
      this.dy = -this.dy;
    }
    if ( (this.ypos - this.radius) < 0) { 
      this.dy = -this.dy;
    }

    this.xpos += this.dx;
    this.ypos += this.dy;
  }
}



let all_balls = [];

for (var i = 0; i < 25; i++){
  let ranColour = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
  let ranRadius = random(30,80);
  let random_x = random(ranRadius,width-ranRadius);
  let random_y = random(ranRadius,height-ranRadius);

  let my_ball = new Ball(random_x,random_y,ranRadius,ranColour,1.5);
  all_balls.push(my_ball);
}

let updateBall = function(){ 
  requestAnimationFrame(updateBall);
  ctx.clearRect(0,0,width,height);
  
  all_balls.forEach(element =>{
    element.update();
  })
}

updateBall();

/*
let createBall = function(Ball){
  Ball.draw(ctx);
}*/


/*
for (var numbers = 0; numbers < 25; numbers++) {
  let ranColour = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
  let ranRadius = random(20,60);
  let random_x = Math.random() * width;
  let random_y = Math.random() * height;

  let my_ball = new Ball(random_x,random_y,ranRadius,ranColour,1)
  all_balls.push(my_ball);
  createBall(all_balls[numbers]);  
}*/