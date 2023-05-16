import utils, { randomColor, randomIntFromRange } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']
var gravity = 1;
var friction = 0.85;
// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

addEventListener('click', () => {
  init();
})

// Objects
class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.dx = dx;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  }

  update() {
    if (this.y + this.radius + this.dy >= canvas.height) {
      this.dy = -this.dy * friction;
      // this.dy = -this.dy;
    } else {
      this.dy += gravity * friction;
    }

    if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    } else if(canvas.height - this.y - this.radius <= 1) {
      // this.dx -= this.dx * 0.021;
    }

    this.x += this.dx;
    // console.log(this.y + this.radius, canvas.height);
    this.y += this.dy;
    this.draw()
  }
}

// Implementation
var ball;
var ballArray = [];
function init() {
  ballArray = [];
  for (let i = 0; i < 800; i++) {
    // ball = new Ball(canvas.width / 2, canvas.height / 2, 2, 30, 'lightblue');
    let radius = randomIntFromRange(20, 50);
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(0, canvas.height / 2 - radius);
    let dx = randomIntFromRange(-2, 2);
    let dy = randomIntFromRange(-2, 2);
    let color = randomColor(colors);
    ballArray.push(new Ball(x, y, dx, dy, radius, color));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  for (let i = 0; i < ballArray.length; i++) { 
    ballArray[i].update();
  }
}
init()
animate()
