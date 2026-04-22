"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fs = 14;
    const mazeChars = "┃━┏┓┗┛┣┫┳┻╋│─┌┐└┘├┤┬┴┼";

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    let drops = Array(Math.floor(canvas.width / fs)).fill(1);

    // Pre-generate a static maze grid pattern
    const mazeCols = Math.floor(canvas.width / fs) + 1;
    const mazeRows = Math.floor(canvas.height / fs) + 1;
    const mazeGrid: string[][] = [];
    for (let r = 0; r < mazeRows; r++) {
      mazeGrid[r] = [];
      for (let c = 0; c < mazeCols; c++) {
        mazeGrid[r][c] = mazeChars[Math.floor(Math.random() * mazeChars.length)];
      }
    }

    let frame = 0;

    const interval = setInterval(() => {
      frame++;

      ctx.fillStyle = "rgba(5,5,5,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle maze structure in dark orange
      if (frame % 3 === 0) {
        ctx.font = `${fs}px JetBrains Mono, monospace`;
        const mazeRow = Math.floor(Math.random() * mazeRows);
        for (let c = 0; c < mazeCols; c++) {
          if (Math.random() > 0.92) {
            ctx.globalAlpha = Math.random() * 0.06 + 0.01;
            ctx.fillStyle = "#ff6b00";
            ctx.fillText(mazeGrid[mazeRow][c], c * fs, mazeRow * fs);
          }
        }
      }

      // Binary rain columns (1s and 0s)
      ctx.font = `${fs}px JetBrains Mono, monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = Math.random() > 0.5 ? "1" : "0";
        const brightness = Math.random();

        if (brightness > 0.7) {
          // Bright orange leading characters
          ctx.fillStyle = "#ff6b00";
          ctx.globalAlpha = Math.random() * 0.5 + 0.3;
        } else if (brightness > 0.3) {
          // Dim purple trail
          ctx.fillStyle = "#a855f7";
          ctx.globalAlpha = Math.random() * 0.25 + 0.05;
        } else {
          // Faint orange
          ctx.fillStyle = "#ff6b00";
          ctx.globalAlpha = Math.random() * 0.15 + 0.02;
        }

        ctx.fillText(char, i * fs, drops[i] * fs);

        if (drops[i] * fs > canvas.height && Math.random() > 0.975)
          drops[i] = 0;
        drops[i]++;
      }
      ctx.globalAlpha = 1;
    }, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full opacity-[0.06] pointer-events-none z-0"
    />
  );
}
