"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const glow = document.createElement("div");
    glow.style.cssText =
      "position:fixed;width:300px;height:300px;pointer-events:none;z-index:200;" +
      "border-radius:50%;background:radial-gradient(circle,rgba(255,87,34,0.07) 0%,transparent 70%);" +
      "transform:translate(-50%,-50%);transition:left 0.12s ease,top 0.12s ease;";
    document.body.appendChild(glow);
    const move = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", move);
    return () => {
      document.removeEventListener("mousemove", move);
      glow.remove();
    };
  }, []);
  return null;
}
