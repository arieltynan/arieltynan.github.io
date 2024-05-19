const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
let xspeed = 2;
let yspeed = 2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FFF';
    ctx.fillRect(x, y, 20, 20);

    x += xspeed;
    y += yspeed;

    if (x < 0 || x > canvas.width - 20) {
        xspeed = -xspeed;
    }
    if (y < 0 || y > canvas.height - 20) {
        yspeed = -yspeed;
    }

    requestAnimationFrame(draw);
}

draw(); 