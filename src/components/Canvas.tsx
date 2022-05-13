/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from "react";
import Character from "../structures/Character";
import { draw, load } from "../util";
import useWindowSize from "../util/useWindowSize";

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);
  const animatedBackgroundContainerRef = useRef<HTMLDivElement>(null);
  const animatedBackgroundCharacterImagesRef = useRef<HTMLDivElement>(null);

  const size = useWindowSize();

  useEffect(() => {
    const canvas = canvasRef.current;
    const animatedBackgroundContainer = animatedBackgroundContainerRef.current;
    let animatedBackgroundCharacterImages: HTMLImageElement[] = [];
    animatedBackgroundCharacterImagesRef.current?.childNodes.forEach(
      (child) => {
        animatedBackgroundCharacterImages.push(child as HTMLImageElement);
      }
    );

    if (
      !canvas ||
      !animatedBackgroundContainer ||
      !animatedBackgroundCharacterImages
    )
      return;

    Character.canvas = canvas;
    Character.animatedBackgroundContainer = animatedBackgroundContainer;
    Character.animatedBackgroundCharacterImages =
      animatedBackgroundCharacterImages;

    load();
  }, [size]);

  useEffect(() => {
    // At this point the canvas should be accessible through the ref
    const canvas = canvasRef.current;
    const animatedBackgroundContainer = animatedBackgroundContainerRef.current;
    if (!canvas || !animatedBackgroundContainer) {
      return;
    }

    canvasContextRef.current = canvas.getContext("2d");
    const ctx = canvasContextRef.current;

    if (!ctx) {
      return;
    }

    let frameCount = 0;
    let animationFrameId = 0;

    //Our draw came here
    const render = () => {
      frameCount++;
      draw();
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <div
      ref={animatedBackgroundContainerRef}
      className="absolute z-10 h-full w-full"
    >
      <canvas
        ref={canvasRef}
        id="canvas"
        tabIndex={0}
        aria-label="Second Brain"
        className="w-full h-full"
      >
        Alternative content describing what the canvas displays.
      </canvas>
      <div ref={animatedBackgroundCharacterImagesRef}>
        <img src="22.png" className="hidden"></img>
        <img src="30.png" className="hidden"></img>
        <img src="45.png" className="hidden"></img>
        <img src="64.png" className="hidden"></img>
        <img src="111.png" className="hidden"></img>
        <img src="126.png" className="hidden"></img>
        <img src="143.png" className="hidden"></img>
        <img src="184.png" className="hidden"></img>
        <img src="189.png" className="hidden"></img>
        <img src="taro10.png" className="hidden"></img>
        <img src="taro24.png" className="hidden"></img>
        <img src="taro39.png" className="hidden"></img>
        <img src="taro102.png" className="hidden"></img>
        <img src="taro154.png" className="hidden"></img>
        <img src="taro192.png" className="hidden"></img>
      </div>
    </div>
  );
}

export default Canvas;
