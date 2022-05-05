const animatedBackgroundContainer = document.querySelector(".anim-bg");
const animatedBackgroundCharacterImages = [
  ...(document.querySelectorAll(".animatedBackgroundCharacterImage") as any),
].map((element) => element.children[0]);
const canvas = document.getElementById("animatedBackground");
const context = (canvas as HTMLCanvasElement).getContext("2d");
const characters: Character[] = [];
const numCharacters = 20;
const characterRadius = 0.05;
const characterMaxSpeed = 0.005;
const characterAcceleration = 0.002;

export class Character {
  r: number;
  image: any;
  x: number;
  y: number;
  xVel: number;
  yVel: number;
  canvasLastWidth: number;
  canvasLastHeight: number;
  imageAspectRatio: number = 1;
  imageWidth: number = 64;
  imageHeight: number = 64;
  constructor() {
    this.r = characterRadius * smallestCanvasDimension();
    this.image = randomCharacterImage();
    this.sizeImage();
    this.x = randomBetween(0, (canvas as HTMLCanvasElement).width);
    this.y = randomBetween(0, (canvas as HTMLCanvasElement).height);
    let [xVel, yVel] = getVelocityComponents(
      characterMaxSpeed * smallestCanvasDimension(),
      randomBetween(0, 360)
    );
    this.xVel = xVel;
    this.yVel = yVel;
    this.canvasLastWidth = (canvas as HTMLCanvasElement).width;
    this.canvasLastHeight = (canvas as HTMLCanvasElement).height;
  }
  get direction() {
    return radToDeg(Math.atan2(this.yVel, this.xVel));
  }
  sizeImage() {
    this.imageAspectRatio = this.image.naturalWidth / this.image.naturalHeight;
    if (this.imageAspectRatio > 1) {
      this.imageWidth = this.r * 2;
      this.imageHeight = this.imageWidth / this.imageAspectRatio;
    } else {
      this.imageHeight = this.r * 2;
      this.imageWidth = this.imageHeight * this.imageAspectRatio;
    }
  }
  update() {
    this.resize();
    this.wallBounce();
    let collidingCharacters: {
      character1: Character;
      character2: Character;
    }[] = [];
    characters.forEach((character) => {
      if (this === character) {
        return;
      }
      if (this.isCollidingWith(character)) {
        collidingCharacters.push({ character1: this, character2: character });
      }
    });
    collidingCharacters.forEach((pair) => {
      pair.character1.resolveCollision(pair.character2);
    });
    this.move();
  }
  resize() {
    if (
      (canvas as HTMLCanvasElement).width == this.canvasLastWidth &&
      (canvas as HTMLCanvasElement).height == this.canvasLastHeight
    ) {
      return;
    }
    this.sizeImage();
    this.x = valueFromRangeToRange(
      this.x,
      0,
      this.canvasLastWidth,
      0,
      (canvas as HTMLCanvasElement).width
    );
    this.y = valueFromRangeToRange(
      this.y,
      0,
      this.canvasLastHeight,
      0,
      (canvas as HTMLCanvasElement).height
    );
    this.r = characterRadius * smallestCanvasDimension();
    this.canvasLastWidth = (canvas as HTMLCanvasElement).width;
    this.canvasLastHeight = (canvas as HTMLCanvasElement).height;
  }
  wallBounce() {
    if (
      this.x + this.imageWidth / 2 + this.xVel >
      (canvas as HTMLCanvasElement).width
    ) {
      this.xVel = -Math.abs(this.xVel);
    }
    if (this.x - this.imageWidth / 2 + this.xVel < 0) {
      this.xVel = Math.abs(this.xVel);
    }
    if (
      this.y + this.imageHeight / 2 + this.yVel >
      (canvas as HTMLCanvasElement).height
    ) {
      this.yVel = -Math.abs(this.yVel);
    }
    if (this.y - this.imageHeight / 2 + this.yVel < 0) {
      this.yVel = Math.abs(this.yVel);
    }
  }
  isCollidingWith(body: Character) {
    let sumOfRadiuses = this.r + body.r;
    let distanceBetween = Math.sqrt(
      Math.pow(this.x - body.x, 2) + Math.pow(this.y - body.y, 2)
    );
    if (distanceBetween <= sumOfRadiuses) {
      let overLapDisplacement = (distanceBetween - sumOfRadiuses) / 2;
      this.x -= (overLapDisplacement * (this.x - body.x)) / distanceBetween;
      this.y -= (overLapDisplacement * (this.y - body.y)) / distanceBetween;
      body.x += (overLapDisplacement * (this.x - body.x)) / distanceBetween;
      body.y += (overLapDisplacement * (this.y - body.y)) / distanceBetween;
      return true;
    }
    return false;
  }
  resolveCollision(body: Character) {
    let distanceBetween = Math.sqrt(
      Math.pow(this.x - body.x, 2) + Math.pow(this.y - body.y, 2)
    );
    let normalX = (body.x - this.x) / distanceBetween;
    let normalY = (body.y - this.y) / distanceBetween;
    let kx = this.xVel - body.xVel;
    let ky = this.yVel - body.yVel;
    let p = normalX * kx + normalY * ky;
    this.xVel = this.xVel - p * normalX;
    this.yVel = this.yVel - p * normalY;
    body.xVel = body.xVel + p * normalX;
    body.yVel = body.yVel + p * normalY;
  }
  move() {
    if (this.xVel > characterMaxSpeed * smallestCanvasDimension()) {
      this.xVel = characterMaxSpeed * smallestCanvasDimension();
    }
    if (this.yVel > characterMaxSpeed * smallestCanvasDimension()) {
      this.yVel = characterMaxSpeed * smallestCanvasDimension();
    }
    if (this.xVel < -characterMaxSpeed * smallestCanvasDimension()) {
      this.xVel = -characterMaxSpeed * smallestCanvasDimension();
    }
    if (this.yVel < -characterMaxSpeed * smallestCanvasDimension()) {
      this.yVel = -characterMaxSpeed * smallestCanvasDimension();
    }
    this.x +=
      this.xVel +
      (this.xVel > 0 ? characterAcceleration : -characterAcceleration) *
        smallestCanvasDimension();
    this.y +=
      this.yVel +
      (this.yVel > 0 ? characterAcceleration : -characterAcceleration) *
        smallestCanvasDimension();
  }
  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(degToRad(this.direction + 90));
    context.drawImage(
      this.image,
      -this.imageWidth / 2,
      -this.imageHeight / 2,
      this.imageWidth,
      this.imageHeight
    );
    context.restore();
    context.resetTransform();
  }
}

export function draw() {
  (context as CanvasRenderingContext2D).clearRect(
    0,
    0,
    (canvas as HTMLCanvasElement).width,
    (canvas as HTMLCanvasElement).height
  );
  characters.forEach((character) => {
    character.update();
    character.draw(context as CanvasRenderingContext2D);
  });
  window.requestAnimationFrame(draw);
}

export function resize() {
  (canvas as HTMLCanvasElement).width = (
    animatedBackgroundContainer as Element
  ).clientWidth;
  (canvas as HTMLCanvasElement).height = (
    animatedBackgroundContainer as Element
  ).clientHeight;
}

export function load() {
  resize();
  spawnCharacters(numCharacters);
  draw();
}

//helper functions
function getVelocityComponents(magnitude: number, direction: number) {
  return [
    magnitude * Math.cos(degToRad(direction)),
    magnitude * Math.sin(degToRad(direction)),
  ];
}
function radToDeg(rad: number) {
  return (rad * 180) / Math.PI;
}
function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}
function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}
function randomCharacterImage() {
  return animatedBackgroundCharacterImages[
    Math.floor(Math.random() * animatedBackgroundCharacterImages.length)
  ];
}
function spawnCharacters(numCharacters: number) {
  [...new Array(numCharacters)].map(() => characters.push(new Character()));
}
function valueFromRangeToRange(
  value: number,
  oldMin: number,
  oldMax: number,
  newMin: number,
  newMax: number
) {
  return (value / (oldMax - oldMin)) * (newMax - newMin) + newMin;
}
function smallestCanvasDimension() {
  return Math.min(
    (canvas as HTMLCanvasElement).width,
    (canvas as HTMLCanvasElement).height
  );
}