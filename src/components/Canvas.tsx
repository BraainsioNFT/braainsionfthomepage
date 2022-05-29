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
  });

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
        NFT Characters.
      </canvas>
      <div ref={animatedBackgroundCharacterImagesRef}>
        <img src="/nfts/no-background/30.png" alt="" className="hidden" />
        <img src="/nfts/no-background/45.png" alt="" className="hidden" />
        <img src="/nfts/no-background/64.png" alt="" className="hidden" />
        <img src="/nfts/no-background/111.png" alt="" className="hidden" />
        <img src="/nfts/no-background/126.png" alt="" className="hidden" />
        <img src="/nfts/no-background/143.png" alt="" className="hidden" />
        <img src="/nfts/no-background/184.png" alt="" className="hidden" />
        <img src="/nfts/no-background/189.png" alt="" className="hidden" />
        <img src="/nfts/no-background/taro10.png" alt="" className="hidden" />
        <img src="/nfts/no-background/taro24.png" alt="" className="hidden" />
        <img src="/nfts/no-background/taro39.png" alt="" className="hidden" />
        <img src="/nfts/no-background/taro154.png" alt="" className="hidden" />
        <img src="/nfts/no-background/taro192.png" alt="" className="hidden" />
      </div>
    </div>
  );
}

export default Canvas;
