import { useEffect, useRef } from "react";

import { draw } from "../pages/scripts/character";

type CanvasProps = {};

export function Canvas() {
  // Use a ref to access the Canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Use a ref to keep access to the Canvas Context
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  // Only try to initialize the context once the Canvas DOM is ready
  // hence the useEffect hook
  useEffect(() => {
    // At this point the canvas should be accessible through the ref
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    canvasCtxRef.current = canvas.getContext("2d");
    const ctx = canvasCtxRef.current;

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
    <div>
      <canvas
        ref={canvasRef}
        id="canvas"
        width={640}
        height={480}
        tabIndex={0}
        aria-label="Second Brain"
      >
        Alternative content describing what the canvas displays.
      </canvas>
    </div>
  );
}

export default Canvas;
