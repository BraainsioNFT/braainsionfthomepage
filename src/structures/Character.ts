import { CharacterProps, CollidingCharactersData } from '../types';
import { getVelocityComponents, radToDeg, degToRad, randomBetween, randomCharacterImage, smallestCanvasDimension, valueFromRangeToRange,  } from '../util';

export default class Character {
	static characters: Character[] = [];
	static canvas: HTMLCanvasElement;
	static animatedBackgroundContainer: HTMLDivElement;
	static animatedBackgroundCharacterImages: HTMLImageElement[];

  characterRadius = 0.025;
	characterMaxSpeed = 0.001;
	characterAcceleration = 0.002;

	context: CanvasRenderingContext2D | null;
	r: number;
	image: HTMLImageElement;
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
			this.context = Character.canvas.getContext('2d');
			this.r = this.characterRadius * smallestCanvasDimension(this)
			this.image = randomCharacterImage()
			this.sizeImage()
			this.x = randomBetween(0, Character.canvas.width)
			this.y = randomBetween(0, Character.canvas.height)
			let [xVel, yVel] = getVelocityComponents(this.characterMaxSpeed * smallestCanvasDimension(this), randomBetween(0, 360))
			this.xVel = xVel
			this.yVel = yVel
			this.canvasLastWidth = Character.canvas.width
			this.canvasLastHeight = Character.canvas.height
	}
	get direction() {
			return radToDeg(Math.atan2(this.yVel, this.xVel))
	}
	sizeImage() {
			this.imageAspectRatio = this.image.naturalWidth / this.image.naturalHeight
			if (this.imageAspectRatio > 1) {
					this.imageWidth = this.r * 2
					this.imageHeight = this.imageWidth / this.imageAspectRatio
			} else {
					this.imageHeight = this.r * 2
					this.imageWidth = this.imageHeight * this.imageAspectRatio
			}
	}
	update() {
			this.resize()
			this.wallBounce()
			let collidingCharacters: CollidingCharactersData[] = []
			Character.characters.forEach(character => {
					if (this === character) {
							return
					}
					if (this.isCollidingWith(character)) {
							collidingCharacters.push({ character1: this, character2: character })
					}
			})
			collidingCharacters.forEach(pair => {
					pair.character1.resolveCollision(pair.character2)
			})
			this.move()
	}
	resize() {
			if (Character.canvas.width == this.canvasLastWidth && Character.canvas.height == this.canvasLastHeight) {
					return
			}
			this.sizeImage()
			this.x = valueFromRangeToRange(this.x, 0, this.canvasLastWidth, 0, Character.canvas.width)
			this.y = valueFromRangeToRange(this.y, 0, this.canvasLastHeight, 0, Character.canvas.height)
			this.r = this.characterRadius * smallestCanvasDimension(this)
			this.canvasLastWidth = Character.canvas.width
			this.canvasLastHeight = Character.canvas.height
	}
	wallBounce() {
			if (this.x + this.imageWidth / 2 + this.xVel > Character.canvas.width) { this.xVel = -Math.abs(this.xVel) }
			if (this.x - this.imageWidth / 2 + this.xVel < 0) { this.xVel = Math.abs(this.xVel) }
			if (this.y + this.imageHeight / 2 + this.yVel > Character.canvas.height) { this.yVel = -Math.abs(this.yVel) }
			if (this.y - this.imageHeight / 2 + this.yVel < 0) { this.yVel = Math.abs(this.yVel) }
	}
	isCollidingWith(body: Character) {
			let sumOfRadiuses = (this.r + body.r)
			let distanceBetween = Math.sqrt(Math.pow(this.x - body.x, 2) + Math.pow(this.y - body.y, 2))
			if (distanceBetween <= sumOfRadiuses) {
					let overLapDisplacement = (distanceBetween - sumOfRadiuses) / 2
					this.x -= overLapDisplacement * (this.x - body.x) / distanceBetween
					this.y -= overLapDisplacement * (this.y - body.y) / distanceBetween
					body.x += overLapDisplacement * (this.x - body.x) / distanceBetween
					body.y += overLapDisplacement * (this.y - body.y) / distanceBetween
					return true
			}
			return false
	}
	resolveCollision(body: Character) {
			let distanceBetween = Math.sqrt(Math.pow(this.x - body.x, 2) + Math.pow(this.y - body.y, 2))
			let normalX = (body.x - this.x) / distanceBetween
			let normalY = (body.y - this.y) / distanceBetween
			let kx = this.xVel - body.xVel
			let ky = this.yVel - body.yVel
			let p = normalX * kx + normalY * ky
			this.xVel = this.xVel - p * normalX
			this.yVel = this.yVel - p * normalY
			body.xVel = body.xVel + p * normalX
			body.yVel = body.yVel + p * normalY
	}
	move() {
			if (this.xVel > this.characterMaxSpeed * smallestCanvasDimension(this)) { this.xVel = this.characterMaxSpeed * smallestCanvasDimension(this) }
			if (this.yVel > this.characterMaxSpeed * smallestCanvasDimension(this)) { this.yVel = this.characterMaxSpeed * smallestCanvasDimension(this) }
			if (this.xVel < -this.characterMaxSpeed * smallestCanvasDimension(this)) { this.xVel = -this.characterMaxSpeed * smallestCanvasDimension(this) }
			if (this.yVel < -this.characterMaxSpeed * smallestCanvasDimension(this)) { this.yVel = -this.characterMaxSpeed * smallestCanvasDimension(this) }
			this.x += this.xVel + (this.xVel > 0 ? this.characterAcceleration : -this.characterAcceleration) * smallestCanvasDimension(this)
			this.y += this.yVel + (this.yVel > 0 ? this.characterAcceleration : -this.characterAcceleration) * smallestCanvasDimension(this)
	}
	draw(context: CanvasRenderingContext2D) {
			context.save()
			context.translate(this.x, this.y)
			context.rotate(degToRad(this.direction + 90))
			context.drawImage(this.image, -this.imageWidth / 2, -this.imageHeight / 2, this.imageWidth, this.imageHeight)
			context.restore()
			context.resetTransform()
	}
}