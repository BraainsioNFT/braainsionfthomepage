import Character from "./structures/Character";

export type CollidingCharactersData = { character1: Character, character2: Character };
export type CharacterProps = [canvasRef: React.RefObject<HTMLCanvasElement>, animatedBackgroundContainerRef: React.RefObject<HTMLDivElement>, animatedBackgroundCharacterImages: HTMLImageElement[], characters: Character[]];