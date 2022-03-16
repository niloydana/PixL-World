console.log("Visited space-aspect.html");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
  constructor(x, y, radius, colour) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.colour = colour;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.colour;
    ctx.fill();
  }
}

class Enemy {
  constructor(x, y, radius, colour, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.colour = colour;
    this.velocity = velocity;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.colour;
    ctx.fill();
  }
}

const x = canvas.width / 2;
const y = canvas.height / 2;

const player = new Player(x, y, 30, "#16BAC5");
player.draw();

console.log(player);

addEventListener("click", (event) => {
  var myColours = ["#595F72", "#575D90", "#84A07C", "##F7F7FF", "#E6F14A"];
  var myRadius = [1, 8, 6, 15, 5];

  var randomColour = myColours[Math.floor(Math.random() * myColours.length)];
  var randomRadius = myRadius[Math.floor(Math.random() * myRadius.length)];
  const enemy = new Enemy(
    event.clientX,
    event.clientY,
    randomRadius,
    randomColour
  );

  enemy.draw();
});
