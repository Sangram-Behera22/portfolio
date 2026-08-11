import { motion } from "motion/react";
import { experience } from "../data/experience.js";

const timeline = [...experience].reverse();

export default function Experience() {
  return (
    <div className="no-scrollbar overflow-y-auto">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-5 py-10 md:px-10 lg:px-16">
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
            Career Progression
          </motion.h1>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-border md:block" />
          <div className="flex flex-col gap-5 md:flex-row md:gap-5">
            {timeline.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-1"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="relative z-10 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-violet bg-bg" />
                  <span className="font-mono text-[11px] text-muted">{item.period}</span>
                </div>
                <div className="rounded-2xl border border-border bg-card/50 p-4 transition-colors hover:border-violet/40">
                  <h3 className="font-display text-[15px] font-semibold text-ink">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 font-mono text-[11px] text-violet">{item.company}</p>
                  <p className="mt-0.5 font-mono text-[11px] text-violet">{item.focus}</p>
                  <ul className="mt-3 space-y-1.5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-[12.5px] leading-snug text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
                        {point}
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
