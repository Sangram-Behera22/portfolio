import { motion } from "motion/react";
import {
  ArrowUpRight,
  Box,
  Cloud,
  Database,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import ArchitectureDiagram from "../components/ArchitectureDiagram.jsx";

const CAPABILITIES = [
  { label: "API Architecture", icon: Network, tone: "violet" },
  { label: "Caching Strategy", icon: Database, tone: "blue" },
  { label: "Database Design", icon: Database, tone: "cyan" },
  { label: "Authentication", icon: LockKeyhole, tone: "emerald" },
  { label: "Service Architecture", icon: Box, tone: "orange" },
  { label: "Scalability", icon: TrendingUp, tone: "amber" },
  { label: "Docker", icon: Server, tone: "blue" },
  { label: "Cloud Infrastructure", icon: Cloud, tone: "violet" },
];

const TONE_CLASSES = {
  violet: {
    icon: "text-violet",
    bg: "bg-violet/10",
    border: "group-hover:border-violet/30",
  },
  blue: {
    icon: "text-blue",
    bg: "bg-blue/10",
    border: "group-hover:border-blue/30",
  },
  cyan: {
    icon: "text-cyan",
    bg: "bg-cyan/10",
    border: "group-hover:border-cyan/30",
  },
  emerald: {
    icon: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "group-hover:border-emerald-400/30",
  },
  orange: {
    icon: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "group-hover:border-orange-400/30",
  },
  amber: {
    icon: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "group-hover:border-amber-400/30",
  },
};

const SCALE_POINTS = [
  {
    title: "Fast",
    text: "Low latency responses",
    icon: Zap,
    tone: "violet",
  },
  {
    title: "Reliable",
    text: "Fault tolerant by design",
    icon: ShieldCheck,
    tone: "emerald",
  },
  {
    title: "Scalable",
    text: "Built to grow with demand",
    icon: TrendingUp,
    tone: "orange",
  },
];

export default function Architecture() {
  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto">
      <div className="mx-auto w-full max-w-[1400px] px-5 pb-24 pt-8 sm:px-7 sm:pt-10 lg:px-10 lg:pb-16 lg:pt-12 xl:px-12">
        <div className="grid items-start gap-8 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[390px_minmax(0,1fr)] xl:gap-12">
          {/* Intro */}
          <motion.section
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-8"
          >
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-violet sm:text-xs">
              
              // Architecture
            </span>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              System Design
            </h1>

            <div className="mt-5 h-px w-14 bg-gradient-to-r from-violet to-blue" />

            <p className="mt-6 text-sm leading-7 text-muted sm:text-[15px]">
              A typical request path through the backend systems I build —
              reverse-proxied, rate-aware, and backed by a caching layer that
              keeps the database honest.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {CAPABILITIES.map(({ label, icon: Icon, tone }) => {
                const styles = TONE_CLASSES[tone];

                return (
                  <div
                    key={label}
                    className={`group flex items-center gap-3 rounded-xl border border-border/50 bg-card/25 p-3 transition-all hover:-translate-y-0.5 hover:bg-card/50 ${styles.border}`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${styles.bg}`}
                    >
                      <Icon size={16} className={styles.icon} />
                    </span>

                    <span className="font-mono text-[10px] text-ink sm:text-[11px]">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-faint lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_currentColor]" />
              Architecture designed for production
            </div>
          </motion.section>

          {/* Diagram */}
          <motion.section
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-w-0"
          >
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card/45 via-card/20 to-bg shadow-2xl shadow-black/10">
              <ArchitectureDiagram />
            </div>
          </motion.section>
        </div>

        {/* Designed for scale */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 rounded-3xl border border-border/50 bg-card/20 p-5 sm:p-6 lg:mt-6 lg:p-7"
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_2fr]">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet/10">
                <Sparkles size={19} className="text-violet" />
              </div>

              <div>
                <p className="font-display text-base font-semibold text-ink">
                  Designed for scale
                </p>
                <p className="mt-1.5 max-w-xl text-xs leading-5 text-muted">
                  Every layer has a purpose. Caching reduces load, queues
                  handle heavy lifting, and the database remains the single
                  source of truth.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {SCALE_POINTS.map(({ title, text, icon: Icon, tone }) => {
                const styles = TONE_CLASSES[tone];

                return (
                  <div
                    key={title}
                    className="flex items-center gap-3 border-border/50 sm:border-l sm:pl-4 lg:pl-5"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${styles.bg}`}
                    >
                      <Icon size={16} className={styles.icon} />
                    </span>

                    <div>
                      <p className="text-xs font-semibold text-ink">{title}</p>
                      <p className="mt-0.5 text-[10px] leading-4 text-muted">
                        {text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <div className="mt-4 flex items-center justify-end gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
          View architecture
          <ArrowUpRight size={11} />
        </div>
      </div>
    </div>
  );
}
