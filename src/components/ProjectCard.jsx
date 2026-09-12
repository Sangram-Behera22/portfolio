import { motion } from "motion/react";
import { ArrowUpRight, Github, Terminal as TerminalIcon } from "lucide-react";

const accentMap = {
  violet: "from-violet/35 via-violet/15 to-transparent",
  blue: "from-blue/35 via-blue/15 to-transparent",
  cyan: "from-cyan/35 via-cyan/15 to-transparent",
};

const dotMap = {
  violet: "bg-violet",
  blue: "bg-blue",
  cyan: "bg-cyan",
};

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-card/70 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-violet/40"
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${accentMap[project.accent]} opacity-90`}
      />

      <div className="relative flex h-28 items-center justify-between border-b border-border-soft bg-bg-soft/80 px-4 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${dotMap[project.accent]}`} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Project</span>
        </div>
        <TerminalIcon size={24} className="text-faint transition-colors group-hover:text-muted" strokeWidth={1.5} />
      </div>

      <div className="relative flex flex-1 flex-col p-4 md:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <h3 className="min-w-0 font-display text-lg font-semibold text-ink">{project.name}</h3>
          <span className="rounded-full border border-border-soft bg-bg-soft px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
            {project.type || "web app"}
          </span>
        </div>

        <p className="text-[13px] leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border-soft bg-bg-soft px-2.5 py-1 font-mono text-[10px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          {/* <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[12px] text-ink transition-colors hover:text-violet"
          >
            Live demo <ArrowUpRight size={13} />
          </a> */}
          {/* <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted transition-colors hover:text-ink"
          >
            <Github size={13} /> GitHub
          </a> */}
        </div>
      </div>
    </motion.article>
  );
}
