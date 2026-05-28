export const STACK = [
  { label: "Languages", items: ["Java", "TypeScript", "JavaScript", "Node.js", "Python", "SQL", "Bash", "C++"] },
  { label: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "MobX", "REST", "GraphQL"] },
  { label: "Backend & APIs", items: ["Spring", "Express", "RESTful design", "JWT", "OAuth 2.0", "MongoDB", "PostgreSQL", "MySQL"] },
  { label: "Testing", items: ["JUnit", "Playwright", "End-to-end pipelines", "TDD"] },
  { label: "Infrastructure", items: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Jenkins", "CI/CD", "Linux"] },
  { label: "Other", items: ["LLM tool-calling", "Structured outputs", "Agile", "Design patterns"] },
];

export const EXPERIENCE = [
  {
    year: "2025",
    period: "May — Dec",
    role: "Associate Software Engineer",
    org: "OpenPolicy",
    orgSub: "Full-stack engineering",
    bullets: [
      "Built and maintained full-stack features with TypeScript / Node backend services and RESTful APIs — the whole lifecycle, from design through deployment and monitoring.",
      "Integrated third-party services end-to-end, enforced JWT-based security, and maintained well-documented API contracts; deployed containerized services to cloud infrastructure with Docker.",
    ],
  },
  {
    year: "2024 — 2025",
    period: "Sept — Apr",
    role: "QA Automation Tester",
    org: "Ministry of Education, Govt. of Ontario",
    orgSub: "Critical software",
    bullets: [
      "Built and maintained automated end-to-end test pipelines in Playwright, integrated into CI/CD for critical government software — reducing defect escape rate and improving release confidence.",
      "Designed test cases covering REST API edge cases; collaborated with developers on debugging, logging, and resolving integration failures in production-equivalent environments.",
    ],
  },
  {
    year: "2024 — Present",
    period: "Jun → Now",
    role: "Writer, Editor & Organizer",
    org: "Media Bober (NGO)",
    orgSub: "Student Union Priama Diia",
    bullets: [
      "Authored technical guides on Linux, open-source tooling, and security practices.",
      "Organized digital-literacy workshops for students and community members.",
    ],
  },
];

export const PROJECTS = [
  {
    num: "01 /",
    title: "Job Hunter Agent",
    href: "https://github.com/maksymsyr/job-hunter-agent",
    desc: "LLM-powered career intelligence pipeline that turns a folder of job-posting PDFs and a resume into actionable market analysis, a triaged skill-gap report, and tailored application packages — all from the command line. Runs in three phases: market extraction (PDFs → structured JSON + company research via autonomous tool-calling), resume gap analysis (vs. aggregated market data), and application advisor (fit score, resume rewrite, three cover-letter variants, visual HTML report with Chart.js gauges). Built with Pydantic schema validation, idempotent SHA-1 caching, and a structured debug-logging layer across 13 source files.",
    stack: ["Python", "OpenRouter API", "LLM Tool-Calling", "Pydantic", "Tavily", "pdfplumber", "Chart.js", "CLI"],
  },
  {
    num: "02 /",
    title: "Scriptorium",
    href: "https://github.com/Nerdy-Babushkas/scriptorium-frontend",
    desc: "Decoupled full-stack system with separate frontend and backend services. RESTful APIs for authentication, media tracking, and gamification with JWT security. Integrated the OpenRouter API for AI-driven content recommendations using structured JSON outputs and tool calling. Maintained via GitHub Actions CI on an Agile branch-based workflow.",
    stack: ["Java", "Node.js", "Express", "React", "MongoDB", "OpenRouter API", "Docker", "GitHub Actions"],
  },
  {
    num: "03 /",
    title: "Art Explorer",
    href: "https://github.com/maksymsyr/art-explorer",
    desc: "Full-stack application with a React frontend and a REST API backend. Implemented JWT auth and deployed via Vercel with environment-based configuration for staging and production.",
    stack: ["React", "Next.js", "Node.js", "MongoDB", "JWT", "Vercel"],
  },
  {
    num: "04 /",
    title: "Hotel Reservation System",
    href: "https://github.com/maksymsyr/hotel-reservation-app",
    desc: "Full-stack desktop hotel reservation system using JavaFX and a 3-tier MVC architecture (Presentation, Business, Data), with JPA / Hibernate ORM and MySQL. Implemented five design patterns — Strategy, Observer, Factory, Decorator, Singleton — in a production context. Includes a role-based admin module with BCrypt authentication, a self-service booking kiosk with dynamic pricing, a payment subsystem (cash / card / loyalty), and a waitlist using the Observer pattern for real-time availability notifications.",
    stack: ["Java", "JavaFX", "JPA / Hibernate", "MySQL", "3-tier MVC", "Design Patterns"],
  },
  {
    num: "05 /",
    title: "DangerAlert",
    href: "https://github.com/maksymsyr/DangerAlertDatabase",
    desc: "Led a team of three to design a normalized relational database schema for large-scale dataset processing; produced operational query reports.",
    stack: ["MySQL", "Relational schema design", "Team lead"],
  },
];
