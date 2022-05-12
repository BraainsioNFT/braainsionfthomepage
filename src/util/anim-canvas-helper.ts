import Character from "../structures/Character";
import { CharacterProps } from "../types";

export function getVelocityComponents(magnitude: number, direction: number) {
  return [
    magnitude * Math.cos(degToRad(direction)),
    magnitude * Math.sin(degToRad(direction)),
  ];
}
export function radToDeg(rad: number) {
  return (rad * 180) / Math.PI;
}
export function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}
export function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}
export function randomCharacterImage() {
  return Character.animatedBackgroundCharacterImages[
    Math.floor(
      Math.random() * Character.animatedBackgroundCharacterImages.length
    )
  ];
}
export function spawnCharacters(
  numCharacters: number): Character[] {
		console.count('spawned ');
  [...new Array(numCharacters)].map(() =>
    Character.characters.push(new Character())
  );
  return Character.characters;
}
export function valueFromRangeToRange(
  value: number,
  oldMin: number,
  oldMax: number,
  newMin: number,
  newMax: number
) {
  return (value / (oldMax - oldMin)) * (newMax - newMin) + newMin;
}
export function smallestCanvasDimension(curr: Character) {
  return Math.min(Character.canvas.width, Character.canvas.height);
}
