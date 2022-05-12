import Character from "../structures/Character";
import { spawnCharacters } from "../util";

export function draw() {
  const { canvas, characters } = Character;
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;

  context.clearRect(0, 0, canvas.width, canvas.height);
  characters.forEach((character) => {
    character.update();
    character.draw(context);
  });
}

export function resize() {
  const { canvas, animatedBackgroundContainer } = Character;

  canvas.width = animatedBackgroundContainer.clientWidth;
  canvas.height = animatedBackgroundContainer.clientHeight;
}

export function load() {
	Character.characters = [];

	resize();
  spawnCharacters(20);
  draw();
} 
