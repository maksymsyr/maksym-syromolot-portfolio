"use client";

export default function ResumeDownload() {
  return (
    <a
      href="/Resume_Maksym_Syromolot.pdf"
      download="Resume_Maksym_Syromolot.pdf"
      aria-label="Download résumé as PDF"
      className="resume-dl"
    >
      <span className="resume-dl-arrow">↓</span>
      <span>Download Résumé</span>
      <style>{`
        .resume-dl {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 18px 44px;
          border: 2px solid var(--ember);
          border-radius: 6px;
          color: var(--ember);
          font-family: var(--mono, monospace);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-decoration: none;
          text-transform: uppercase;
          transition: background 0.15s, color 0.15s, box-shadow 0.15s;
          position: relative;
          box-shadow: 0 0 18px rgba(255,87,34,0.18), inset 0 0 18px rgba(255,87,34,0.04);
        }
        .resume-dl::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--ember);
          opacity: 0;
          transition: opacity 0.15s;
        }
        .resume-dl:hover::before { opacity: 1; }
        .resume-dl:hover {
          color: var(--bg, #0a0a0a);
          box-shadow: 0 0 32px rgba(255,87,34,0.45);
        }
        .resume-dl:hover .resume-dl-arrow { transform: translateY(3px); }
        .resume-dl span { position: relative; }
        .resume-dl-arrow {
          font-size: 20px;
          transition: transform 0.15s;
          display: inline-block;
        }
      `}</style>
    </a>
  );
}
