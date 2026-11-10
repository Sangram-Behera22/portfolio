import { motion } from "motion/react";
import {
  Server,
  Network,
  Database,
  Cloud,
  Layers,
  ShieldCheck,
  Code2,
} from "lucide-react";
import StatCard from "../components/StatCard.jsx";

const SPECIALIZATIONS = [
  { label: "Node.js & TypeScript", icon: Code2 },
  { label: "REST API Development", icon: Network },
  { label: "Database Design", icon: Database },
  { label: "AWS & DevOps", icon: Cloud },
  { label: "Authentication & Security", icon: ShieldCheck },
  { label: "Angular Frontend", icon: Server },
];

const TECH_STACK = [
  "Node.js",
  "Express.js",
  "Fastify",
  "TypeScript",
  "JavaScript (ES6+)",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Apache Kafka",
  "Angular",
  "RxJS",
  "NgRx",
  "JWT",
  "OAuth",
  "AWS",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Jenkins",
  "CI/CD",
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
              I am a{" "}
              <span className="font-medium text-ink">
                Software Engineer with 4+ years of professional experience
              </span>{" "}
              in building and maintaining web applications, backend systems,
              REST APIs, cloud services, and data-intensive business workflows.
            </p>

            <p>
              My core strengths are in{" "}
              <span className="font-medium text-ink">
                Node.js, Express.js, TypeScript, REST APIs, PostgreSQL, and
                Redis
              </span>
              . I design APIs, manage backend architecture, optimize database
              queries, and implement secure access patterns for production-grade
              applications.
            </p>

            <p>
              I also work across the deployment lifecycle with{" "}
              <span className="font-medium text-ink">
                AWS, Docker, Kubernetes, Linux, GitHub Actions, and CI/CD
              </span>
              , helping teams ship and maintain services reliably in real-world
              environments.
            </p>

            <p>
              On the frontend, I use{" "}
              <span className="font-medium text-ink">
                Angular, RxJS, NgRx, HTML5, and CSS3
              </span>
              , combining responsive interfaces with strong API integration and a
              clean user experience.
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
                <span className="font-mono text-[11.5px] text-muted">
                  {label}
                </span>
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
              <StatCard value="4+ yrs" label="Experience" delay={0.1} />
              <StatCard value="AWS" label="Cloud" delay={0.18} />
              <StatCard value="12+" label="Projects" delay={0.26} />
              <StatCard value="Full Stack" label="Focus" delay={0.34} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
