"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [uptime, setUptime] = useState("");
  const year = new Date().getFullYear();

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const s = Math.floor((Date.now() - start) / 1000);
      setUptime(s < 60 ? `${s}s on page` : `${Math.floor(s / 60)}m ${s % 60}s on page`);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer>
      <div className="prompt">
        <b>~/maksym</b> $ thanks for reading
        <span
          style={{
            color: "var(--ember)",
            animation: "blink 1.05s steps(2,end) infinite",
          }}
        >
          _
        </span>
      </div>
      <div className="right">
        © {year} · Built with care ·{" "}
        <span style={{ color: "var(--paper-mute)" }}>{uptime}</span>
      </div>
    </footer>
  );
}
