import { motion } from "motion/react";
import {
  ArrowUpRight,
  Briefcase,
  Cloud,
  Database,
  Layers3,
  Sparkles,
} from "lucide-react";
import Button from "../components/Button.jsx";
import Terminal from "../components/Terminal.jsx";

const FLOATING_BADGES = [
  {
    label: "Node.js",
    className: "left-0 top-[8%]",
    delay: 0,
  },
  {
    label: "TypeScript",
    className: "right-0 top-[18%]",
    delay: 0.4,
  },
  {
    label: "PostgreSQL",
    className: "left-[4%] bottom-[20%]",
    delay: 0.8,
  },
  {
    label: "Laravel",
    className: "right-[8%] bottom-[10%]",
    delay: 1.2,
  },
  {
    label: "PHP",
    className: "left-[22%] bottom-[4%]",
    delay: 1.4,
  },
  {
    label: "MySQL",
    className: "right-[24%] top-[5%]",
    delay: 1.8,
  },
];

const HIGHLIGHTS = [
  {
    label: "Backend-first",
    icon: Layers3,
  },
  {
    label: "4+ years",
    icon: Briefcase,
  },
  {
    label: "AWS + DevOps",
    icon: Cloud,
  },
  {
    label: "Database design",
    icon: Database,
  },
];

export default function Home() {
  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto">
      <main className="mx-auto flex min-h-full w-full max-w-[1400px] items-center px-5 py-10 sm:px-7 md:px-10 lg:px-12 xl:px-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(480px,1.05fr)] xl:gap-16">
          {/* =========================================================
              LEFT — HERO CONTENT
          ========================================================= */}
          <section className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-violet" />

                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet sm:text-xs">
                  Full Stack Developer
                </span>
              </div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mt-5 font-display text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] text-ink sm:text-5xl md:text-6xl xl:text-[68px]"
              >
                Sangram
                <br />
                <span className="bg-gradient-to-r from-violet via-blue to-cyan bg-clip-text text-transparent">
                  Behera
                </span>
              </motion.h1>

              {/* Main statement */}
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-6 max-w-xl font-display text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl md:text-[27px]"
              >
                Building scalable web applications, APIs, and cloud systems.
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="mt-5 max-w-xl text-[14px] leading-7 text-muted sm:text-[15px]"
              >
                I&apos;m a backend-oriented full stack developer with around
                4 years of experience building web applications, REST APIs,
                databases, authentication systems, and cloud deployments
                across the full product lifecycle.
              </motion.p>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Button to="/projects">
                  View Projects
                  <ArrowUpRight size={15} />
                </Button>

                <Button to="/contact" variant="ghost" icon={false}>
                  Let&apos;s Connect
                </Button>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-9 grid grid-cols-2 gap-2.5 sm:grid-cols-4"
              >
                {HIGHLIGHTS.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="group flex min-h-[68px] flex-col justify-between rounded-2xl border border-border/60 bg-card/30 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/30 hover:bg-card/60"
                  >
                    <Icon
                      size={16}
                      className="text-violet transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="mt-3 font-mono text-[10px] leading-4 text-muted sm:text-[11px]">
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* =========================================================
              RIGHT — TERMINAL / VISUAL
          ========================================================= */}
          <motion.section
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[390px] items-center justify-center sm:min-h-[460px] lg:min-h-[540px]"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-[90px]" />

            <div className="pointer-events-none absolute left-[15%] top-[15%] h-32 w-32 rounded-full bg-blue/10 blur-3xl" />

            <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-32 w-32 rounded-full bg-cyan/10 blur-3xl" />

            {/* Decorative grid */}
            <div
              className="pointer-events-none absolute inset-[8%] rounded-[32px] opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                color: "var(--color-border)",
              }}
            />

            {/* Floating badges */}
            {/* {FLOATING_BADGES.map((badge) => (
              <motion.div
                key={badge.label}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -7, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.45,
                    delay: 0.45 + badge.delay * 0.12,
                  },
                  scale: {
                    duration: 0.45,
                    delay: 0.45 + badge.delay * 0.12,
                  },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: badge.delay,
                  },
                }}
                className={`absolute z-20 hidden rounded-xl border border-border/70 bg-card/80 px-3 py-2 font-mono text-[10px] text-muted shadow-xl backdrop-blur-md lg:block ${badge.className}`}
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-violet align-middle" />
                {badge.label}
              </motion.div>
            ))} */}

            {/* Terminal wrapper */}
            <div className="relative z-10 w-full max-w-[590px]">
              {/* Terminal glow */}
              <div className="absolute -inset-5 rounded-[34px] bg-gradient-to-br from-violet/15 via-blue/10 to-cyan/10 blur-2xl" />

              {/* Outer frame */}
              <div className="relative rounded-[28px] border border-border/70 bg-card/30 p-2 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-3">
                {/* Top decorative line */}
                <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-violet/50 to-transparent" />

                <Terminal />
              </div>
            </div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.8 }}
              className="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border/70 bg-card/85 px-3 py-2 font-mono text-[9px] text-muted shadow-xl backdrop-blur-md sm:text-[10px]"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Available for interesting work
            </motion.div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}