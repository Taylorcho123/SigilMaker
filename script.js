const canvas = document.getElementById('universeCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.1;

    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
    }
  }

  draw() {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}

const stars = [];
for (let i = 0; i < 100; i++) {
  stars.push(new Star());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    star.update();
    star.draw();
  }

  requestAnimationFrame(animate);
}

animate();
