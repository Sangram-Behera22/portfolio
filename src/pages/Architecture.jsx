import { motion } from "motion/react";
import ArchitectureDiagram from "../components/ArchitectureDiagram.jsx";

const CAPABILITIES = [
  "API Architecture",
  "Caching Strategy",
  "Database Design",
  "Authentication",
  "Service Architecture",
  "Scalability",
  "Docker",
  "Cloud Infrastructure",
];

export default function Architecture() {
  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:gap-10 md:px-10 lg:px-16">
        {/* Left: intro + capabilities */}
        <div className="w-full shrink-0 md:w-[300px] lg:w-[340px]">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-violet"
          >
            // architecture
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            System Design
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-[14px] leading-relaxed text-muted"
          >
            A typical request path through the backend systems I build —
            reverse-proxied, rate-aware, and backed by a caching layer that
            keeps the database honest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 flex flex-wrap gap-1.5"
          >
            {CAPABILITIES.map((c) => (
              <span
                key={c}
                className="rounded-md border border-border-soft bg-card/50 px-2.5 py-1.5 font-mono text-[11px] text-muted"
              >
                {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="min-h-[320px] w-full min-w-0 flex-1 rounded-2xl border border-border bg-card/30 p-2 md:min-h-[500px] md:py-6"
        >
          <ArchitectureDiagram />
        </motion.div>
      </div>
    </div>
  );
}