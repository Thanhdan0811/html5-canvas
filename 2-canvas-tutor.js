const canvas = document.querySelector("canvas");

// if (!canvas)  return"";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// create a ton of methods.
const context = canvas.getContext("2d");

// context.fillRect(x, y, width, height);

// context.fillStyle = 'rgba(255, 0, 0, 0.6)';
// context.fillRect(100, 100, 100, 100);
// context.fillStyle = 'rgba(111, 19, 0, 0.6)';
// context.fillRect(400, 200, 100, 100);

// LINE
// context.beginPath();
// context.moveTo(50, 300);
// context.lineTo(300, 100);
// context.lineTo(400, 300);
// context.strokeStyle = "red";
// context.stroke();

// Arc / Circle

// context.beginPath();
// 30 là bán kính.
// context.arc(300, 300, 30, 0, Math.PI * 2, false);
// context.strokeStyle = "blue";
// context.stroke();

// for loop

// for (let i = 0; i < 10; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     context.beginPath();
//     context.arc(x, y, 30, 0, Math.PI * 2, false);
//     context.strokeStyle = "blue";
//     context.stroke();
// }

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.strokeStyle = "blue";
    context.stroke();
    context.fill();
    context.fillStyle = "rgba(123,124,11, 0.3)";
  };

  this.update = function () {
    if (this.x + this.radius >= window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (
      this.y + this.radius >= window.innerHeight ||
      this.y - this.radius < 0
    ) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let radius = 30;
// let dx = (Math.random() - 0.5) * 4;
// let dy = (Math.random() - 0.5) * 4;

let circleArrs = [];
for (let i = 0; i < 100; i++) {
  let radius = 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 1;
  let dy = (Math.random() - 0.5) * 1;
  circleArrs.push(new Circle(x, y, dx, dy, radius));
  // let circle = new Circle(200, 200, 3, 3, 30);
}

const animate = () => {
  // let time = performance.now();
  // console.log(time);
  requestAnimationFrame(animate);

  // Xóa các hình đã tạo trước đó, x, y là vị trí bắt đầu, w, h là kích thước cần clear.
  context.clearRect(0, 0, innerWidth, innerHeight);

  circleArrs.forEach((circle) => {
    circle.update();
  });
};

animate();

console.log(context);
