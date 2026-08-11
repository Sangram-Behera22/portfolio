import { motion } from "motion/react";

export default function StatCard({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-border bg-card/60 p-4 md:p-5 transition-colors hover:border-violet/40"
    >
      <div className="font-display text-2xl md:text-3xl font-semibold text-gradient">
        {value}
      </div>
      <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
        {label}
      </div>
    </motion.div>
  );
}
