"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type LineClass = "out" | "ember" | "signal" | "";

interface TermLine {
  text: string;
  cls: LineClass;
}

const COMMANDS: Record<string, TermLine[] | null | "EASTER_EGG"> = {
  help: [
    { text: "available commands:", cls: "signal" },
    { text: "  whoami     — who is Maksym?", cls: "out" },
    { text: "  stack      — tech stack summary", cls: "out" },
    { text: "  hire       — why hire Maksym", cls: "out" },
    { text: "  projects   — featured projects", cls: "out" },
    { text: "  email      — copy email to clipboard", cls: "out" },
    { text: "  clear      — clear terminal", cls: "out" },
    { text: "  help       — show this list", cls: "out" },
    { text: "  // try something dangerous…", cls: "out" },
  ],
  whoami: [
    { text: "Maksym Syromolot — full-stack developer.", cls: "out" },
    { text: "Java · TypeScript · React · Node · Docker · AWS", cls: "out" },
    { text: "4.0 GPA · Seneca Polytechnic · May 2026", cls: "out" },
  ],
  stack: [
    { text: "Languages  → Java, TypeScript, JS, Python, SQL, Bash, C++", cls: "out" },
    { text: "Frontend   → React, Next.js, HTML, CSS, MobX, GraphQL", cls: "out" },
    { text: "Backend    → Spring, Express, JWT, OAuth 2.0, Mongo, PG", cls: "out" },
    { text: "Infra      → Docker, K8s, AWS, GitHub Actions, Jenkins", cls: "out" },
    { text: "Testing    → JUnit, Playwright, TDD, E2E pipelines", cls: "out" },
  ],
  hire: [
    { text: "→ 4.0 GPA, shipped production code at OpenPolicy &", cls: "ember" },
    { text: "  the Ministry of Education, Govt of Ontario.", cls: "ember" },
    { text: "→ End-to-end ownership: design → deploy → monitor.", cls: "out" },
    { text: "→ Fast, typed, tested, documented. Available now.", cls: "out" },
    { text: "→ mailto:maksymsyromolot@gmail.com", cls: "signal" },
  ],
  projects: [
    { text: "01 / Job Hunter Agent  — LLM pipeline: PDF→market report,", cls: "out" },
    { text: "                         gap analysis, fit score, cover letters", cls: "out" },
    { text: "02 / Scriptorium       — full-stack media tracker + AI recs", cls: "out" },
    { text: "03 / Art Explorer      — React/Next.js + JWT + Vercel", cls: "out" },
    { text: "04 / Hotel Reservation — JavaFX, 5 design patterns", cls: "out" },
    { text: "05 / DangerAlert DB    — team-led relational schema design", cls: "out" },
    { text: "→ github.com/maksymsyr", cls: "signal" },
  ],
  email: [{ text: "copying to clipboard...", cls: "out" }],
  clear: null,
  "rm -rf": "EASTER_EGG",
};

const DEMO_SEQUENCE = ["whoami", "stack", "projects", "hire", "help"];

const FILES = [
  "/home/maksym/portfolio/app/page.tsx",
  "/home/maksym/portfolio/components/Hero.tsx",
  "/home/maksym/portfolio/components/Terminal.tsx",
  "/home/maksym/portfolio/public/myphotogif.gif",
  "/home/maksym/portfolio/.next/static/chunks/",
  "/home/maksym/portfolio/node_modules/ (8 412 packages)",
  "/home/maksym/portfolio/.git/",
  "/var/www/html/",
  "/etc/nginx/sites-enabled/portfolio.conf",
  "/srv/data/db.sqlite",
];

export default function Terminal() {
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const statusLabelRef = useRef<HTMLSpanElement>(null);

  const demoActiveRef = useRef(true);
  const demoIdxRef = useRef(0);
  const demoTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typingAbortRef = useRef(false);

  // easter egg overlay state
  const [eggActive, setEggActive] = useState(false);
  const [eggLines, setEggLines] = useState<{ text: string; cls: string }[]>([]);
  const [eggDone, setEggDone] = useState(false);
  const eggLogRef = useRef<HTMLDivElement>(null);

  const scrollBottom = useCallback(() => {
    if (outputRef.current)
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, []);

  const addLine = useCallback(
    (text: string, cls: LineClass = "") => {
      const out = outputRef.current;
      if (!out) return;
      const div = document.createElement("div");
      div.className = "term-line" + (cls ? " " + cls : "");
      div.textContent = text;
      out.appendChild(div);
      scrollBottom();
    },
    [scrollBottom]
  );

  const addStaticCmdLine = useCallback(
    (cmd: string) => {
      const out = outputRef.current;
      if (!out) return;
      const div = document.createElement("div");
      div.className = "term-line";
      div.innerHTML = '<span class="t-prompt">$</span> <span class="t-cmd"></span>';
      (div.querySelector(".t-cmd") as HTMLElement).textContent = cmd;
      out.appendChild(div);
      scrollBottom();
    },
    [scrollBottom]
  );

  const setActiveChip = useCallback((cmd: string) => {
    document.querySelectorAll<HTMLButtonElement>(".term-chip").forEach((b) => {
      b.classList.toggle("active", b.dataset.cmd === cmd);
    });
  }, []);

  const clearActiveChip = useCallback(() => {
    document.querySelectorAll(".term-chip").forEach((b) => b.classList.remove("active"));
  }, []);

  const stopDemo = useCallback(() => {
    if (!demoActiveRef.current) return;
    demoActiveRef.current = false;
    typingAbortRef.current = true;
    if (demoTimeoutRef.current) {
      clearTimeout(demoTimeoutRef.current);
      demoTimeoutRef.current = null;
    }
    clearActiveChip();
    if (statusRef.current) {
      statusRef.current.classList.add("paused");
      if (statusLabelRef.current) statusLabelRef.current.textContent = "interactive";
    }
  }, [clearActiveChip]);

  const triggerRmRf = useCallback(() => {
    document.body.classList.add("glitch-shake");
    setTimeout(() => document.body.classList.remove("glitch-shake"), 1100);
    setEggActive(true);
    setEggLines([]);
    setEggDone(false);

    const lines: { text: string; cls: string }[] = [
      { text: "$ rm -rf / --no-preserve-root\n\nremoving...", cls: "err" },
    ];
    setEggLines([...lines]);

    let i = 0;
    function addEntry() {
      if (i >= FILES.length) {
        setEggLines((prev) => [
          ...prev,
          {
            text: "\nremoved 13 048 files in 0.31s\n\n█ SYSTEM DESTROYED █\n\n// you found the easter egg",
            cls: "err final",
          },
        ]);
        setEggDone(true);
        return;
      }
      setEggLines((prev) => [
        ...prev,
        { text: "removed  " + FILES[i], cls: i % 7 === 0 ? "err" : "ok" },
      ]);
      i++;
      setTimeout(addEntry, 80 + Math.random() * 60);
    }
    setTimeout(addEntry, 300);
  }, []);

  const runResponse = useCallback(
    (cmd: string, silentClipboard = false) => {
      if (cmd === "clear") {
        if (outputRef.current) outputRef.current.innerHTML = "";
        return;
      }
      if (cmd === "rm -rf" || cmd === "rm -rf /") {
        addLine("initiating recursive deletion...", "out");
        setTimeout(triggerRmRf, 600);
        return;
      }
      const resp = COMMANDS[cmd];
      if (resp && resp !== "EASTER_EGG") {
        resp.forEach((l) => addLine(l.text, l.cls));
        if (cmd === "email") {
          if (!silentClipboard) {
            try {
              navigator.clipboard.writeText("maksymsyromolot@gmail.com").catch(() => {});
            } catch (_) {}
          }
          addLine("✓ maksymsyromolot@gmail.com", "signal");
        }
      } else if (!resp && resp !== null) {
        addLine("command not found: " + cmd + ". type 'help'", "out");
      }
      scrollBottom();
    },
    [addLine, scrollBottom, triggerRmRf]
  );

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const typeCommand = useCallback(
    async (cmd: string): Promise<boolean> => {
      const out = outputRef.current;
      if (!out) return false;
      const line = document.createElement("div");
      line.className = "term-line";
      line.innerHTML =
        '<span class="t-prompt">$</span> <span class="t-cmd"></span><span class="t-caret" aria-hidden="true"></span>';
      out.appendChild(line);
      const cmdSpan = line.querySelector(".t-cmd") as HTMLElement;
      const caret = line.querySelector(".t-caret") as HTMLElement;
      scrollBottom();
      for (let i = 0; i < cmd.length; i++) {
        if (typingAbortRef.current) {
          caret?.remove();
          return false;
        }
        cmdSpan.textContent += cmd[i];
        scrollBottom();
        const base = 55 + Math.random() * 70;
        await sleep(cmd[i] === " " ? base + 60 : base);
      }
      await sleep(280);
      caret?.remove();
      return true;
    },
    [scrollBottom]
  );

  const demoLoop = useCallback(async () => {
    if (!demoActiveRef.current) return;
    const cmd = DEMO_SEQUENCE[demoIdxRef.current % DEMO_SEQUENCE.length];
    setActiveChip(cmd);
    const ok = await typeCommand(cmd);
    if (!ok || !demoActiveRef.current) return;
    runResponse(cmd, true);
    demoIdxRef.current++;
    demoTimeoutRef.current = setTimeout(() => {
      if (!demoActiveRef.current) return;
      if (outputRef.current) outputRef.current.innerHTML = "";
      demoTimeoutRef.current = setTimeout(() => {
        if (!demoActiveRef.current) return;
        demoLoop();
      }, 380);
    }, 3400);
  }, [setActiveChip, typeCommand, runResponse]);

  useEffect(() => {
    demoLoop();
    return () => {
      if (demoTimeoutRef.current) clearTimeout(demoTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // scroll egg log to bottom when lines grow
  useEffect(() => {
    if (eggLogRef.current)
      eggLogRef.current.scrollTop = eggLogRef.current.scrollHeight;
  }, [eggLines]);

  const handleChipClick = useCallback(
    (cmd: string) => {
      const wasDemo = demoActiveRef.current;
      stopDemo();
      if (wasDemo && outputRef.current) outputRef.current.innerHTML = "";
      addStaticCmdLine(cmd);
      runResponse(cmd);
      clearActiveChip();
      document
        .querySelectorAll<HTMLButtonElement>(`[data-cmd="${cmd}"]`)
        .forEach((b) => {
          b.classList.add("active");
          setTimeout(() => b.classList.remove("active"), 700);
        });
    },
    [stopDemo, addStaticCmdLine, runResponse, clearActiveChip]
  );

  const handleFocus = useCallback(() => {
    if (demoActiveRef.current) {
      stopDemo();
      if (outputRef.current) outputRef.current.innerHTML = "";
      addLine("type 'help' for the command list", "out");
    }
  }, [stopDemo, addLine]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;
      stopDemo();
      let cmd = (e.currentTarget.value ?? "").trim().toLowerCase();
      e.currentTarget.value = "";
      if (!cmd) return;
      if (/^rm\s+-rf(\s+.*)?$/.test(cmd)) cmd = "rm -rf";
      addStaticCmdLine(cmd);
      runResponse(cmd);
    },
    [stopDemo, addStaticCmdLine, runResponse]
  );

  const chips = ["whoami", "stack", "hire", "projects", "email", "help", "clear"];

  return (
    <>
      {/* rm -rf overlay */}
      <div id="rmrf-overlay" className={eggActive ? "active" : ""} role="dialog">
        <div id="rmrf-log" ref={eggLogRef}>
          {eggLines.map((l, i) => (
            <div key={i} className={l.cls}>
              {l.text.includes("█ SYSTEM DESTROYED █") ? (
                <>
                  {"\nremoved 13 048 files in 0.31s\n\n"}
                  <span style={{ color: "#ff5722", fontSize: 16 }}>█ SYSTEM DESTROYED █</span>
                  {"\n\n"}
                  <span style={{ color: "#555" }}>// you found the easter egg</span>
                </>
              ) : (
                l.text
              )}
            </div>
          ))}
        </div>
        {eggDone && (
          <button
            id="rmrf-restore"
            style={{ display: "inline-block" }}
            onClick={() => {
              setEggActive(false);
              setEggLines([]);
              setEggDone(false);
            }}
          >
            $ restore --force
          </button>
        )}
      </div>

      {/* actual terminal */}
      <div className="terminal terminal-hero" id="terminal">
        <div className="terminal-bar">
          <span className="t-dot" style={{ background: "#ff5f57" }} />
          <span className="t-dot" style={{ background: "#ffbd2e" }} />
          <span className="t-dot" style={{ background: "#28c840" }} />
          <span className="terminal-title">maksym@portfolio: ~</span>
          <span className="term-status" id="term-status" ref={statusRef}>
            <span className="term-status-dot" aria-hidden="true" />
            <span className="term-status-label" ref={statusLabelRef}>
              live demo
            </span>
          </span>
        </div>

        <div className="term-cmds" aria-label="Available commands">
          <span className="term-cmds-label">try</span>
          {chips.map((cmd) => (
            <button
              key={cmd}
              className="term-chip"
              type="button"
              data-cmd={cmd}
              onClick={() => handleChipClick(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>

        <div
          className="terminal-body"
          id="term-output"
          ref={outputRef}
          aria-live="polite"
          aria-atomic="false"
        />

        <div className="term-input-row">
          <span className="t-prompt">$</span>
          <input
            className="term-input"
            id="term-input"
            ref={inputRef}
            type="text"
            autoComplete="off"
            spellCheck={false}
            placeholder="or type a command here…"
            aria-label="Terminal input"
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className="terminal-caption" aria-hidden="true">
        <span className="id">FIG. 02</span>
        <span className="rule" />
        <span>Interactive · 7 commands + 1 secret</span>
      </div>
    </>
  );
}
