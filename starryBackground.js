const numStars = 200;
const stars = document.getElementById("stars");

class Star {
  constructor() {
    this.starElement = document.createElement("div");
    this.starElement.className = "star";
    this.x = Math.floor(Math.random() * window.innerWidth);
    this.y = Math.floor(Math.random() * window.innerHeight);
    this.duration = Math.random() * 3 + 2;
    this.delay = Math.random() * 2;
    this.starElement.style.left = this.x + "px";
    this.starElement.style.top = this.y + "px";
    this.starElement.style.animationDuration = this.duration + "s";
    this.starElement.style.animationDelay = this.delay + "s";
    stars.appendChild(this.starElement);
  }

  updatePosition() {
    this.x = Math.floor(Math.random() * window.innerWidth);
    this.y = Math.floor(Math.random() * window.innerHeight);
    this.starElement.style.left = this.x + "px";
    this.starElement.style.top = this.y + "px";
  }
}

const starArray = [];

for (let i = 0; i < numStars; i++) {
  starArray.push(new Star());
}

function updateStarPositions() {
  starArray.forEach((star) => {
    star.updatePosition();
  });
}

setInterval(updateStarPositions, 5000);
