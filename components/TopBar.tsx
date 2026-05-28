"use client";

import { useEffect, useState } from "react";

export default function TopBar() {
  const [clock, setClock] = useState("—");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/Toronto",
      };
      setClock("TOR · " + new Intl.DateTimeFormat("en-CA", opts).format(now));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bar" role="banner">
      <div className="bar-inner">
        <div className="left">
          <span className="dot" aria-hidden="true" />
          Available for work
        </div>
        <div className="center">Maksym Syromolot — Full-Stack Developer</div>
        <div className="right" aria-live="off">
          {clock}
        </div>
      </div>
    </div>
  );
}
