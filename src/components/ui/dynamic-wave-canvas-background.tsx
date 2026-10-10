"use client";

import React, { useEffect, useRef } from "react";

interface HeroWaveProps {
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
}

const HeroWave: React.FC<HeroWaveProps> = ({
  className = "absolute inset-0 w-full h-full",
  style,
  opacity = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number, height: number, imageData: ImageData, data: Uint8ClampedArray;
    let animationFrameId: number;
    const SCALE = 2;

    const resizeCanvas = () => {
      if (!canvas || !ctx) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = Math.floor(canvas.width / SCALE);
      height = Math.floor(canvas.height / SCALE);
      if (width <= 0 || height <= 0) return;
      imageData = ctx.createImageData(width, height);
      data = imageData.data;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const startTime = Date.now();

    // Precalculated Sine & Cosine tables for fast rendering
    const SIN_TABLE = new Float32Array(1024);
    const COS_TABLE = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) {
      const angle = (i / 1024) * Math.PI * 2;
      SIN_TABLE[i] = Math.sin(angle);
      COS_TABLE[i] = Math.cos(angle);
    }

    const fastSin = (x: number) => {
      const index = (Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024) + 1024) & 1023;
      return SIN_TABLE[index];
    };

    const fastCos = (x: number) => {
      const index = (Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024) + 1024) & 1023;
      return COS_TABLE[index];
    };

    // Precomputed 256-step Color LUT using exact requested colors:
    // #000000 -> #830000 -> #BC0202 -> #FF0000
    const LUT_R = new Uint8Array(256);
    const LUT_G = new Uint8Array(256);
    const LUT_B = new Uint8Array(256);

    for (let i = 0; i < 256; i++) {
      const t = i / 255;
      if (t <= 0.33) {
        // Transition: #000000 (0, 0, 0) to #830000 (131, 0, 0)
        const localT = t / 0.33;
        LUT_R[i] = Math.round(localT * 131);
        LUT_G[i] = 0;
        LUT_B[i] = 0;
      } else if (t <= 0.66) {
        // Transition: #830000 (131, 0, 0) to #BC0202 (188, 2, 2)
        const localT = (t - 0.33) / 0.33;
        LUT_R[i] = Math.round(131 + localT * (188 - 131));
        LUT_G[i] = Math.round(localT * 2);
        LUT_B[i] = 0;
      } else {
        // Transition: #BC0202 (188, 2, 2) to #FF0000 (255, 0, 0)
        const localT = (t - 0.66) / 0.34;
        LUT_R[i] = Math.round(188 + localT * (255 - 188));
        LUT_G[i] = Math.round(2 * (1 - localT));
        LUT_B[i] = 0;
      }
    }

    const render = () => {
      if (!ctx || !data || width <= 0 || height <= 0) return;
      const time = (Date.now() - startTime) * 0.001;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const u_x = (2 * x - width) / height;
          const u_y = (2 * y - height) / height;

          let a = 0;
          let d = 0;

          for (let i = 0; i < 4; i++) {
            a += fastCos(i - d + time * 0.5 - a * u_x);
            d += fastSin(i * u_y + a);
          }

          const wave = (fastSin(a) + fastCos(d)) * 0.5;
          const intensity = 0.3 + 0.4 * wave;
          const baseVal = 0.1 + 0.15 * fastCos(u_x + u_y + time * 0.3);
          const accent = 0.2 * fastSin(a * 1.5 + time * 0.2) + 0.15 * fastCos(d * 2 + time * 0.1);

          // Map composite wave signal to normalized [0, 1] range for color LUT
          const factor = Math.max(0, Math.min(1, (baseVal + accent * 0.8 + 0.35) * intensity * 1.4));
          const lutIndex = Math.min(255, Math.floor(factor * 255));

          const index = (y * width + x) * 4;
          data[index] = LUT_R[lutIndex];
          data[index + 1] = LUT_G[lutIndex];
          data[index + 2] = LUT_B[lutIndex];
          data[index + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      if (SCALE > 1) {
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        opacity,
        ...style,
      }}
    />
  );
};

export default HeroWave;
export { HeroWave };
