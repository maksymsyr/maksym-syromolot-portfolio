import TopBar from "@/components/TopBar";
import MatrixRain from "@/components/MatrixRain";
import Terminal from "@/components/Terminal";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollReveal from "@/components/ScrollReveal";
import { STACK, EXPERIENCE, PROJECTS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollReveal />
      <TopBar />

      {/* HERO */}
      <header className="hero">
        <MatrixRain />
        <div className="hero-grid">
          <div>
            <div className="kicker reveal">
              <span className="bracket">[</span>
              <span>Portfolio · v2026.01</span>
              <span className="bracket">]</span>
            </div>
            <h1 className="hero-name reveal">
              <span className="lo">maksym</span>
              <span className="lo">syromolot.</span>
            </h1>
            <p className="hero-tag reveal">
              Full-stack developer shipping <em>Java</em>, <em>TypeScript</em> &amp; <em>React</em> — from REST APIs and containerized services to interfaces that hold up in production.
            </p>
            <dl className="hero-meta reveal">
              <div>
                <dt>Based in</dt>
                <dd>Toronto, ON · CA</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:maksymsyromolot@gmail.com">maksymsyromolot@gmail.com</a></dd>
              </div>
              <div>
                <dt>Profiles</dt>
                <dd>
                  <a href="https://github.com/maksymsyr" target="_blank" rel="noopener">GitHub</a>
                  <span style={{ color: "var(--paper-mute)", margin: "0 8px" }}>·</span>
                  <a href="https://www.linkedin.com/in/maksym-syromolot-b11552290/" target="_blank" rel="noopener">LinkedIn</a>
                </dd>
              </div>
            </dl>
          </div>

          <aside className="ascii-panel reveal" aria-label="ASCII portrait">
            <div className="ascii-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/myphotogif.gif" alt="Animated ASCII self-portrait." />
              <div className="ascii-fallback" style={{ display: "none" }}>
                ASCII portrait<br /><span>drop myphotogif.gif in /public</span>
              </div>
              <div className="ascii-scan" aria-hidden="true" />
            </div>
            <div className="ascii-caption">
              <span className="id">FIG. 01</span>
              <span className="rule" aria-hidden="true" />
              <span>Self · Dark → Bright</span>
            </div>
          </aside>

          <aside className="terminal-feature reveal" aria-label="Interactive terminal demo">
            <Terminal />
          </aside>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" aria-labelledby="about-title">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="section-num">
              <span className="sn-bracket">┌─</span>
              <span className="sn-id">§01</span>
              <span>·</span>
              <span className="sn-name">About</span>
              <span className="sn-rule" aria-hidden="true" />
              <span className="sn-meta">Profile · Summary</span>
              <span className="sn-bracket">─┐</span>
            </div>
            <h2 className="section-title" id="about-title">A short read.</h2>
          </div>
          <div className="about-grid">
            <div className="about-aside reveal">
              <dl style={{ margin: 0 }}>
                <dt>Program</dt><dd>Computer Programming &amp; Analysis</dd>
                <dt>School</dt><dd>Seneca Polytechnic · 2023–2026</dd>
                <dt>GPA</dt><dd><span className="em">4.0</span> / 4.0</dd>
                <dt>Focus</dt><dd>Backend services · APIs · Frontend</dd>
              </dl>
            </div>
            <div className="about-body reveal">
              <p>I&rsquo;m a full-stack developer based in <span className="hl">Toronto</span> with hands-on experience building and shipping Java and TypeScript / Node services, RESTful APIs, and React frontends. I work comfortably in containerized cloud environments and CI/CD pipelines, and have a background in <em>automated testing and production QA</em> at the Government of Ontario.</p>
              <p>I like systems that are well-typed, well-tested, and well-documented — and interfaces that stay calm under load. Recently I&rsquo;ve been integrating <span className="hl">LLM tool-calling</span> into product workflows, designing schemas for structured outputs, and treating models as dependable building blocks rather than novelty.</p>
              <p>Graduated <em>May 2026</em> with a 4.0 GPA from Seneca Polytechnic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" aria-labelledby="stack-title">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="section-num">
              <span className="sn-bracket">┌─</span>
              <span className="sn-id">§02</span>
              <span>·</span>
              <span className="sn-name">Stack</span>
              <span className="sn-rule" aria-hidden="true" />
              <span className="sn-meta">Languages · Frameworks · Infra</span>
              <span className="sn-bracket">─┐</span>
            </div>
            <h2 className="section-title" id="stack-title">Tools of the trade.</h2>
          </div>
          <div className="stack reveal">
            {STACK.map((row) => (
              <div key={row.label} className="stack-row">
                <div className="stack-label">{row.label}</div>
                <div className="stack-items">
                  {row.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" aria-labelledby="xp-title">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="section-num">
              <span className="sn-bracket">┌─</span>
              <span className="sn-id">§03</span>
              <span>·</span>
              <span className="sn-name">Experience</span>
              <span className="sn-rule" aria-hidden="true" />
              <span className="sn-meta">2024 → Present</span>
              <span className="sn-bracket">─┐</span>
            </div>
            <h2 className="section-title" id="xp-title">Where I&rsquo;ve built things.</h2>
          </div>
          <ol className="xp" start={1}>
            {EXPERIENCE.map((job) => (
              <li key={job.role} className="xp-row reveal">
                <div className="xp-date"><b>{job.year}</b>{job.period}</div>
                <div>
                  <h3 className="xp-role">{job.role}</h3>
                  <div className="xp-org"><b>{job.org}</b> · {job.orgSub}</div>
                  <ul className="xp-bullets">
                    {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WORK */}
      <section id="work" aria-labelledby="work-title">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="section-num">
              <span className="sn-bracket">┌─</span>
              <span className="sn-id">§04</span>
              <span>·</span>
              <span className="sn-name">Selected Work</span>
              <span className="sn-rule" aria-hidden="true" />
              <span className="sn-meta">05 projects · ↗ links</span>
              <span className="sn-bracket">─┐</span>
            </div>
            <h2 className="section-title" id="work-title">Things I&rsquo;ve shipped.</h2>
          </div>
          <div className="work" role="list">
            {PROJECTS.map((p) => (
              <a key={p.title} className="work-row reveal" role="listitem" href={p.href} target="_blank" rel="noopener">
                <div className="work-num">{p.num}</div>
                <div>
                  <h3 className="work-title">{p.title}</h3>
                  <p className="work-desc">{p.desc}</p>
                  <div className="work-stack" aria-label="Tech stack">
                    {p.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
                <div className="work-arrow" aria-hidden="true">↗</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact" aria-labelledby="contact-title">
        <div className="wrap">
          <div className="contact-eyebrow reveal">§05 · Contact</div>
          <h2 className="contact-headline reveal" id="contact-title">
            Let&rsquo;s <em>build</em><br />something good.
          </h2>
          <p className="contact-subline reveal">Open to full-time roles. Drop a line, reply within 24&nbsp;h.</p>
          <div className="contact-grid reveal">
            <a className="contact-cell" href="mailto:maksymsyromolot@gmail.com">
              <span className="contact-cell-icon">✉</span>
              <span className="label">Email</span>
              <span className="value">maksymsyromolot@gmail.com</span>
              <span className="arrow">↗</span>
            </a>
            <a className="contact-cell" href="tel:+16477664179">
              <span className="contact-cell-icon">☎</span>
              <span className="label">Phone</span>
              <span className="value">+1 (647) 766–4179</span>
              <span className="arrow">↗</span>
            </a>
            <a className="contact-cell" href="https://github.com/maksymsyr" target="_blank" rel="noopener">
              <span className="contact-cell-icon">&lt;/&gt;</span>
              <span className="label">GitHub</span>
              <span className="value">github.com/maksymsyr</span>
              <span className="arrow">↗</span>
            </a>
            <a className="contact-cell" href="https://www.linkedin.com/in/maksym-syromolot-b11552290/" target="_blank" rel="noopener">
              <span className="contact-cell-icon">in</span>
              <span className="label">LinkedIn</span>
              <span className="value">maksym-syromolot</span>
              <span className="arrow">↗</span>
            </a>
          </div>
          <pre className="ms-mark reveal" aria-hidden="true">{`███╗   ███╗   ███████╗
████╗ ████║   ██╔════╝
██╔████╔██║   ███████╗
██║╚██╔╝██║   ╚════██║
██║ ╚═╝ ██║██╗███████║
╚═╝     ╚═╝╚═╝╚══════╝`}</pre>
        </div>
      </section>

      <Footer />
    </>
  );
}
