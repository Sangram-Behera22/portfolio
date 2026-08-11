import { motion } from "motion/react";
import { Server, Network, Database, Cloud, Layers } from "lucide-react";
import StatCard from "../components/StatCard.jsx";

const SPECIALIZATIONS = [
  { label: "Backend Engineering", icon: Server },
  { label: "API Development", icon: Network },
  { label: "Database Design", icon: Database },
  { label: "Cloud & DevOps", icon: Cloud },
  { label: "Full Stack Development", icon: Layers },
];

export default function About() {
  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-center gap-10 px-5 py-10 md:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-16 lg:py-10">
        {/* Left column */}
        <div className="w-full lg:w-1/2">
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
              Software Developer focused on building reliable, scalable and
              maintainable applications — from backend systems that hold up
              under load to APIs that are a pleasure to integrate with.
            </p>

            <p>
              I started my career working with PHP and gradually moved into
              Node.js and TypeScript development, picking up system design
              and cloud infrastructure along the way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3"
          >
            {SPECIALIZATIONS.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl border border-border bg-card/50 px-3 py-2.5 transition-colors hover:border-violet/40"
              >
                <Icon size={15} className="shrink-0 text-violet" />

                <span className="font-mono text-[11.5px] text-muted">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column: stats */}
        <div className="grid w-full grid-cols-2 gap-3 lg:w-1/2 lg:gap-4">
          <StatCard value="3.8+" label="Years Experience" delay={0.1} />
          <StatCard value="10+" label="Technologies" delay={0.18} />
          <StatCard value="20+" label="Projects Shipped" delay={0.26} />
          <StatCard value="Backend" label="Specialization" delay={0.34} />
        </div>
      </div>
    </div>
  );
}