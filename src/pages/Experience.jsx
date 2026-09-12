import { motion } from "motion/react";
import { experience } from "../data/experience.js";

const timeline = [...experience].reverse();

export default function Experience() {
  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-10 md:px-10 lg:px-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-violet"
          >
            // experience
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Career progression
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted"
          >
            Building production-ready software across the full lifecycle — from API design and database modeling to deployment, integration, and operational stability.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-2 hidden h-px bg-gradient-to-r from-violet/30 via-border to-transparent md:block" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="relative z-10 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-violet bg-bg shadow-[0_0_0_4px_rgba(124,111,242,0.12)]" />
                  <span className="font-mono text-[11px] text-muted">{item.period}</span>
                </div>

                <div className="rounded-[24px] border border-border bg-card/70 p-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 md:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-[15px] font-semibold text-ink md:text-[17px]">
                        {item.role}
                      </h3>
                      <p className="mt-1 font-mono text-[11px] text-violet">{item.company}</p>
                    </div>
                    <span className="max-w-full rounded-full border border-border-soft bg-bg-soft px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                      {item.focus}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-[12.5px] leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
