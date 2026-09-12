import { motion } from "motion/react";
import { Server, Network, Database, Cloud, Layers, ShieldCheck, Code2 } from "lucide-react";
import StatCard from "../components/StatCard.jsx";

const SPECIALIZATIONS = [
  { label: "Backend Engineering", icon: Server },
  { label: "API Design", icon: Network },
  { label: "Database Design", icon: Database },
  { label: "Cloud & DevOps", icon: Cloud },
  { label: "Full Stack Delivery", icon: Layers },
  { label: "Secure Systems", icon: ShieldCheck },
];

const TECH_STACK = [
  "JavaScript",
  "TypeScript",
  "PHP",
  "SQL",
  "HTML",
  "CSS",
  "React",
  "Angular",
  "Node.js",
  "Express.js",
  "Laravel",
  "MySQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Docker",
  "GitHub Actions",
  "JWT",
  "OAuth 2.0",
];

export default function About() {
  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-center gap-8 px-5 py-10 md:px-10 lg:flex-row lg:items-center lg:gap-12 lg:px-16 lg:py-10">
        <div className="w-full lg:w-[58%]">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-violet"
          >
            // about
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            About Me
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted"
          >
            <p>
              I am a <span className="font-medium text-ink">Full Stack Developer with around 4 years of professional experience</span>, with a strong focus on building web applications, backend systems, APIs, databases, and cloud-based applications.
            </p>

            <p>
              My experience spans both frontend and backend development, though my strongest work is on the <span className="font-medium text-ink">backend side</span>. On the backend, I have worked extensively with <span className="font-medium text-ink">PHP and Laravel</span>, as well as <span className="font-medium text-ink">JavaScript-based backend development using Node.js and Express.js</span>. I’ve designed and developed REST APIs, handled authentication and authorization, integrated third-party services, worked with databases, processed files and forms, and implemented business logic.
            </p>

            <p>
              My frontend experience includes <span className="font-medium text-ink">JavaScript, React, Angular, HTML, CSS, Tailwind CSS, jQuery, and AJAX</span>. I’ve worked with component-based frontend development, routing, state management, API integration, responsive UI development, and frontend deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3"
          >
            {SPECIALIZATIONS.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-2xl border border-border bg-card/60 px-3 py-2.5 transition-colors hover:border-violet/40"
              >
                <Icon size={15} className="shrink-0 text-violet" />
                <span className="font-mono text-[11.5px] text-muted">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="w-full lg:w-[42%]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="rounded-[28px] border border-border bg-card/70 p-5 shadow-[var(--shadow-card)] md:p-6"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-violet">
              <Code2 size={14} />
              Core stack
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {TECH_STACK.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border-soft bg-bg-soft px-2.5 py-1 font-mono text-[10.5px] text-muted"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <StatCard value="4 yrs" label="Experience" delay={0.1} />
              <StatCard value="AWS" label="Cloud" delay={0.18} />
              <StatCard value="20+" label="Projects" delay={0.26} />
              <StatCard value="Backend" label="Focus" delay={0.34} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}