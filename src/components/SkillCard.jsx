import { motion } from "motion/react";

export default function SkillCard({ category, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-2xl border border-border bg-card/50 p-4 md:p-5 transition-colors hover:border-violet/40 hover:bg-card"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-ink">{category.label}</h3>
        <span className="font-mono text-[10px] text-faint">{category.note}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-border-soft bg-bg-soft px-2.5 py-1 font-mono text-[11px] text-muted transition-colors group-hover:text-ink/90"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
