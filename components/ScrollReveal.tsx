"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // stagger hero entrance
    let i = 0;
    document.querySelectorAll<HTMLElement>(".hero .reveal, .bar .reveal").forEach((el) => {
      el.style.animationDelay = i * 80 + "ms";
      i++;
    });

    // pause off-screen reveals, play on intersection
    const items = document.querySelectorAll<HTMLElement>("section .reveal, footer .reveal");
    if (!items.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.animationPlayState = "running";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => {
      el.style.animationPlayState = "paused";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
