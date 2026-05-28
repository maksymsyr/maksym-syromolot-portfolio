"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const CHARS = "01アイウエオカキクケコJAVATSREACT{}[];()=>/*+|";
    let cols: number;
    let drops: number[];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols = Math.floor(canvas.width / 18);
      drops = Array.from({ length: cols }, () => Math.random() * -40);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(10,9,8,0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "13px 'JetBrains Mono', monospace";
      drops.forEach((y, i) => {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillStyle = y < 2 ? "#ff7043" : "#d4e36b";
        ctx.globalAlpha = y < 2 ? 0.9 : 0.4;
        ctx.fillText(ch, i * 18 + 2, y * 18);
        ctx.globalAlpha = 1;
        if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        else drops[i] += 0.6;
      });
    };
    const id = setInterval(draw, 55);
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="rain" ref={canvasRef} aria-hidden="true" />;
}
