import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

const LINES = [
  {
    cmd: "whoami",
    out: "sangram-behera · full-stack developer",
  },
  {
    cmd: "node -v",
    out: "v22.23.2",
  },
  {
    cmd: "php -v",
    out: "v8.3.9",
  },
  {
    cmd: "cat stack.json",
    out: '{ "backend": ["Node.js","TypeScript","Fastify","PHP","Laravel"], "db": ["PostgreSQL","Redis","MySQL","MongoDB"] }',
  },
  {
    cmd: "git log --oneline -1",
    out: "8f3a21c refactor: scale API gateway to 10k rps",
  },
];

const TYPE_SPEED = 28;
const OUTPUT_SPEED = 16;
const LINE_PAUSE = 500;
const CYCLE_PAUSE = 2200;

const MAX_HISTORY = 3;

function Prompt({ children, active = false }) {
  return (
    <div className="flex min-w-0 items-start gap-2">
      <span className="shrink-0 text-violet">➜</span>
      <span className="shrink-0 text-cyan">~</span>

      <span
        className={`min-w-0 break-words ${
          active ? "text-ink" : "text-muted"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [cmdText, setCmdText] = useState("");
  const [outText, setOutText] = useState("");
  const [phase, setPhase] = useState("cmd");

  const currentLine = LINES[lineIndex];

  /*
   * Keep the terminal history intentionally small.
   * This prevents the terminal from becoming taller as commands accumulate.
   */
  const history = useMemo(() => {
    return Array.from({ length: MAX_HISTORY }, (_, index) => {
      const offset = MAX_HISTORY - index;

      return {
        ...LINES[(lineIndex - offset + LINES.length) % LINES.length],
        key: `${lineIndex}-${offset}`,
      };
    });
  }, [lineIndex]);

  useEffect(() => {
    let timeout;

    if (phase === "cmd") {
      if (cmdText.length < currentLine.cmd.length) {
        timeout = setTimeout(() => {
          setCmdText(currentLine.cmd.slice(0, cmdText.length + 1));
        }, TYPE_SPEED);
      } else {
        timeout = setTimeout(() => {
          setPhase("out");
        }, LINE_PAUSE);
      }
    }

    if (phase === "out") {
      if (outText.length < currentLine.out.length) {
        timeout = setTimeout(() => {
          setOutText(currentLine.out.slice(0, outText.length + 1));
        }, OUTPUT_SPEED);
      } else {
        timeout = setTimeout(() => {
          setPhase("pause");
        }, CYCLE_PAUSE);
      }
    }

    if (phase === "pause") {
      timeout = setTimeout(() => {
        setCmdText("");
        setOutText("");
        setPhase("cmd");
        setLineIndex((index) => (index + 1) % LINES.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [cmdText, outText, phase, currentLine]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.65,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full overflow-hidden rounded-2xl border border-border/70 bg-card/95 text-ink shadow-[0_20px_45px_rgba(15,23,42,0.1)] backdrop-blur-xl"
    >
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-violet/60 to-transparent" />

      {/* =========================================================
          TERMINAL HEADER
      ========================================================= */}
      <div className="flex h-11 items-center border-b border-border/60 bg-bg-soft/80 px-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="font-mono text-[10px] text-faint sm:text-[11px]">
            sangram@dev — zsh
          </span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

          <span className="hidden font-mono text-[9px] text-faint sm:inline">
            online
          </span>
        </div>
      </div>

      {/* =========================================================
          TERMINAL BODY
      ========================================================= */}
      <div className="relative h-[310px] overflow-hidden p-4 sm:h-[330px] sm:p-5">
        {/* Background glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-violet/5 blur-3xl" />

        {/* Subtle terminal grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 h-full overflow-hidden font-mono text-[11px] leading-6 sm:text-[12px]">
          {/* History */}
          <div className="space-y-3 opacity-95">
            {history.map((line) => (
              <div key={line.key} className="min-w-0">
                <Prompt>{line.cmd}</Prompt>

                <div className="mt-0.5 truncate pl-[26px] text-ink/75">
                  {line.out}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
            <span className="h-px flex-1 bg-border/40" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">
              current
            </span>

            <span className="h-px flex-1 bg-border/40" />
          </div>

          {/* Current command */}
          <div>
            <Prompt active>
              {cmdText}

              {phase === "cmd" && (
                <span className="ml-0.5 animate-pulse text-violet">
                  ▍
                </span>
              )}
            </Prompt>

            {/* Current output */}
            {(phase === "out" || phase === "pause") && (
              <div className="mt-1 flex min-w-0 items-start gap-2 pl-[26px]">
                <span className="text-emerald-400">✓</span>

                <span className="min-w-0 break-words text-ink/80">
                  {outText}

                  {phase === "out" && (
                    <span className="ml-0.5 animate-pulse text-ink/70">
                      ▍
                    </span>
                  )}
                </span>
              </div>
            )}
          </div>

          {/* Bottom prompt */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="flex items-center gap-2 border-t border-border/30 pt-3">
              <span className="text-violet">➜</span>
              <span className="text-cyan">~</span>

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <div className="flex items-center justify-between border-t border-border/50 bg-bg-soft/80 px-4 py-2.5 sm:px-5">
        <span className="font-mono text-[9px] text-faint">
          ~/projects/backend
        </span>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] text-faint">
            UTF-8
          </span>

          <span className="font-mono text-[9px] text-faint">
            zsh
          </span>
        </div>
      </div>
    </motion.div>
  );
}