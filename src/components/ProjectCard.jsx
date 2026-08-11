import { motion } from "motion/react";
import { ExternalLink, Github, Terminal as TerminalIcon } from "lucide-react";

const accentMap = {
  violet: "from-violet/30 via-violet/0",
  blue: "from-blue/30 via-blue/0",
  cyan: "from-cyan/30 via-cyan/0",
};

const dotMap = {
  violet: "bg-violet",
  blue: "bg-blue",
  cyan: "bg-cyan",
};

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors hover:border-violet/40"
    >
      {/* glow on hover */}
      <div
        className={`pointer-events-none absolute -inset-px opacity-0 bg-gradient-to-br ${accentMap[project.accent]} to-transparent transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* preview */}
      <div className="relative flex h-28 items-center justify-between border-b border-border-soft bg-bg-soft px-4 grid-backdrop">
        <span className={`h-1.5 w-1.5 rounded-full ${dotMap[project.accent]}`} />
        <TerminalIcon size={26} className="text-faint transition-colors group-hover:text-muted" strokeWidth={1.5} />
      </div>

      <div className="relative flex flex-1 flex-col p-4 md:p-5">
        <h3 className="font-display text-base font-semibold text-ink">{project.name}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted line-clamp-3">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border-soft bg-bg-soft px-2 py-0.5 font-mono text-[10px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-4 font-mono text-[12px]">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-violet"
          >
            <ExternalLink size={13} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink"
          >
            <Github size={13} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
