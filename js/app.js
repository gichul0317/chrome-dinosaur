const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let timer = 0;
const cactusArr = [];

canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;

const dino = {
  x: 10,
  y: 100,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 100;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const frameDraw = function () {
  requestAnimationFrame(frameDraw);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 120 === 0) {
    const cactus = new Cactus();
    cactusArr.push(cactus);
  }

  cactusArr.forEach((item) => {
    item.x--;
    item.draw();
  });

  // dino.x++;
  dino.draw();
};
frameDraw();

console.log('connected');
