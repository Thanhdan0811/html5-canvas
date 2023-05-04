const canvas = document.querySelector('canvas');

// if (!canvas)  return"";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// create a ton of methods.
const context = canvas.getContext('2d');

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


let x = 200;
let y = 200;
let radius = 30;
let dx = 4;
let dy = 4

const animate = () => {
    // let time = performance.now();
    // console.log(time);
    requestAnimationFrame(animate);

    // Xóa các hình đã tạo trước đó, x, y là vị trí bắt đầu, w, h là kích thước cần clear.
    context.clearRect(0,0, innerWidth, innerHeight);

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.strokeStyle = "blue";
    context.stroke();

    if (x + radius >= window.innerWidth || x - radius < 0) {
        dx = -dx;
    }

    if (y + radius >= window.innerHeight || y - radius < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;

}

animate();

console.log(context);