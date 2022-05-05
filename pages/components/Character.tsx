import React, { Component } from 'react'
import Canvas2 from './Canvas2';

type CharacterProps = { canvasRef: React.RefObject<HTMLCanvasElement>, animatedBackgroundContainerRef: React.RefObject<HTMLDivElement>, animatedBackgroundCharacterImagesRefs: React.RefObject<Element>[], canvasContext: CanvasRenderingContext2D, characters: Character[], numCharacters?: number, characterRadius?: number, characterMaxSpeed?: number, characterAcceleration?: number };

export class Character extends Component<CharacterProps> {
	r: number;
	image: HTMLImageElement
	x: number;
	y: number;
	canvasLastWidth: number;
	canvasLastHeight: number;
	imageAspectRatio: number = 1;
	imageWidth: number = 64;
	imageHeight: number = 64;

	canvasRef: React.RefObject<HTMLCanvasElement>;
	canvasContext: CanvasRenderingContext2D;
	characters: Character[];
	numCharacters: number;
	characterMaxSpeed: number;
	characterAcceleration: number;
	constructor(props: CharacterProps) {
		super(props);

		this.r = (props.characterRadius ?? 0.05) * this.smallestCanvasDimension();
		this.image = (this.randomCharacterImage() as unknown as HTMLImageElement);
		this.canvasLastHeight = (props.canvasRef.current as HTMLCanvasElement).height
		this.canvasLastWidth = (props.canvasRef.current as HTMLCanvasElement).width

		this.canvasRef = props.canvasRef;
		this.canvasContext = props.canvasContext;
		this.characters = props.characters;
		this.numCharacters = props.numCharacters ?? 20;
		this.characterMaxSpeed = props.characterMaxSpeed ?? 0.005;
		this.characterAcceleration = props.characterAcceleration ?? 0.002;
	}

	get direction() {
		return this.radToDeg(Math.atan2(this.yVel, this.xVel));
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
		this.characters.forEach((character) => {
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
			(this.canvasRef.current as HTMLCanvasElement).width == this.canvasLastWidth &&
			(this.canvasRef.current as HTMLCanvasElement).height == this.canvasLastHeight
		) {
			return;
		}
		this.sizeImage();
		this.x = this.valueFromRangeToRange(
			this.x,
			0,
			this.canvasLastWidth,
			0,
			(this.canvasRef.current as HTMLCanvasElement).width
		);
		this.y = this.valueFromRangeToRange(
			this.y,
			0,
			this.canvasLastHeight,
			0,
			(this.canvasRef.current as HTMLCanvasElement).height
		);
		this.r = this.r * this.smallestCanvasDimension();
		this.canvasLastWidth = (this.canvasRef.current as HTMLCanvasElement).width;
		this.canvasLastHeight = (this.canvasRef.current as HTMLCanvasElement).height;
	}
	wallBounce() {
		if (
			this.x + this.imageWidth / 2 + this.xVel >
			(this.canvasRef.current as HTMLCanvasElement).width
		) {
			this.xVel = -Math.abs(this.xVel);
		}
		if (this.x - this.imageWidth / 2 + this.xVel < 0) {
			this.xVel = Math.abs(this.xVel);
		}
		if (
			this.y + this.imageHeight / 2 + this.yVel >
			(this.canvasRef.current as HTMLCanvasElement).height
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

	render() {
		return (
			<div>Character</div>
		)
	}

	//helper functions
	getVelocityComponents(magnitude: number, direction: number) {
		return [
			magnitude * Math.cos(this.degToRad(direction)),
			magnitude * Math.sin(this.degToRad(direction)),
		];
	}
	radToDeg(rad: number) {
		return (rad * 180) / Math.PI;
	}
	degToRad(deg: number) {
		return (deg * Math.PI) / 180;
	}
	randomBetween(min: number, max: number) {
		return min + Math.random() * (max - min);
	}
	randomCharacterImage() {
		return this.props.animatedBackgroundCharacterImagesRefs[
			Math.floor(Math.random() * this.props.animatedBackgroundCharacterImagesRefs.length)
		];
	}
	spawnCharacters(numCharacters: number) {
		[...new Array(numCharacters)].map(() => this.characters.push(new Character(this.props)));
	}
	valueFromRangeToRange(
		value: number,
		oldMin: number,
		oldMax: number,
		newMin: number,
		newMax: number
	) {
		return (value / (oldMax - oldMin)) * (newMax - newMin) + newMin;
	}
	smallestCanvasDimension() {
		return Math.min(
			(this.props.canvasRef.current as HTMLCanvasElement).width,
			(this.props.canvasRef.current as HTMLCanvasElement).height
		);
	}
}

export default Character