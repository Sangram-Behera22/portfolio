import { motion } from "motion/react";

export default function SkillCard({ category, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col rounded-3xl border border-border bg-card/70 p-5 shadow-[0_20px_45px_rgba(10,10,20,0.08)] transition-all duration-300 hover:border-violet/45 hover:bg-card"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <span className={`inline-flex rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${category.accent}`}>
          {category.label}
        </span>
        <span className="font-mono text-[10px] text-faint sm:text-right">{category.note}</span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-ink">{category.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{category.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border-soft bg-bg-soft px-2.5 py-1 font-mono text-[11px] text-muted transition-colors group-hover:text-ink"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
