
let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');


let arrC = [];

for (let i = 0; i < 10; i++) { 
    let dx = Math.random() * 8;
    let dy = Math.random() * 8;
    let radius = 50;
    let x = Math.random() * (innerWidth - 2 * radius) + radius;
    let y = Math.random() * (innerHeight - 2 * radius) + radius;
    arrC.push({
        
    });
}

const animate = () => {

    requestAnimationFrame(animate);
    c.clearRect(0, 0 , innerWidth, innerHeight);
    
    
    for (let i = 0; i < 10; i++) {
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI * 2, false);
        c.strokeStyle ="blue";
        c.stroke();
        c.fillStyle = "lightblue";
        c.fill();
    }
    
    if ((x + radius) >= innerWidth || (x - radius) < 0 ) {
        dx = -dx;
    }
    if ((y + radius) >= innerHeight || (y - radius) < 0 ) {
        dy = -dy;
    }
    
    x += dx; 
    y += dy; 
}


animate();
