import { motion } from "motion/react";
import Button from "../components/Button.jsx";
import Terminal from "../components/Terminal.jsx";

const FLOATING_BADGES = [
  { label: "Node.js", className: "left-[-8%] top-[10%]", delay: 0 },
  { label: "TypeScript", className: "right-[-6%] top-[22%]", delay: 0.4 },
  { label: "PostgreSQL", className: "left-[-4%] bottom-[16%]", delay: 0.8 },
  { label: "Laravel", className: "right-[25%] bottom-[-30%]", delay: 1.2 },
  { label: "PHP", className: "left-[25%] bottom-[-30%]", delay: 1.4 },
  { label: "MySQL", className: "right-[-2%] bottom-[4%]", delay: 1.8 },
];

export default function Home() {
  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto">
      <div className="mx-auto flex flex-col justify-center gap-10 px-5 py-10 md:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-16 lg:py-10">
        {/* Left: intro */}
        <div className="flex w-full max-w-xl flex-col md:w-1/2">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-violet"
          >
            Hello, I'm
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Sangram Behera
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 font-display text-xl font-medium text-gradient sm:text-2xl"
          >
            Full Stack Software Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 max-w-md text-[15px] leading-relaxed text-muted"
          >
            I build scalable backend systems, REST APIs and modern web
            applications — with 3.8+ years turning complex requirements into
            reliable software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button to="/projects">View Projects</Button>
            <Button to="/contact" variant="ghost" icon={false}>
              Let's Connect
            </Button>
          </motion.div>
        </div>

        {/* Right: technical visual */}
        <div className="relative flex w-full items-center justify-center md:w-1/2">
          {FLOATING_BADGES.map((b) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.6 + b.delay * 0.15 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: b.delay },
              }}
              className={`absolute hidden lg:block rounded-lg border border-border bg-card/80 px-3 py-1.5 font-mono text-[11px] text-muted shadow-lg ${b.className}`}
            >
              {b.label}
            </motion.div>
          ))}
          <Terminal />
        </div>
      </div>
    </div>
  );
}
