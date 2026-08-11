import { useEffect, useState } from "react";
import { motion } from "motion/react";

const LINES = [
  { cmd: "whoami", out: "sangram-behera · full-stack developer" },
  { cmd: "node -v", out: "v22.23.2" },
  {
    cmd: "cat stack.json",
    out: '{ "backend": ["Node.js","TypeScript","Fastify"], "db": ["PostgreSQL","Redis"] }',
  },
  { cmd: "git log --oneline -1", out: "8f3a21c refactor: scale API gateway to 10k rps" },
];

const TYPE_SPEED = 28;
const LINE_PAUSE = 650;
const CYCLE_PAUSE = 2200;

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [cmdText, setCmdText] = useState("");
  const [outText, setOutText] = useState("");
  const [phase, setPhase] = useState("cmd"); // cmd -> out -> pause

  useEffect(() => {
    const current = LINES[lineIndex];
    let timeout;

    if (phase === "cmd") {
      if (cmdText.length < current.cmd.length) {
        timeout = setTimeout(
          () => setCmdText(current.cmd.slice(0, cmdText.length + 1)),
          TYPE_SPEED
        );
      } else {
        timeout = setTimeout(() => setPhase("out"), LINE_PAUSE);
      }
    } else if (phase === "out") {
      if (outText.length < current.out.length) {
        timeout = setTimeout(
          () => setOutText(current.out.slice(0, outText.length + 1)),
          TYPE_SPEED / 1.6
        );
      } else {
        timeout = setTimeout(() => setPhase("next"), CYCLE_PAUSE);
      }
    } else {
      timeout = setTimeout(() => {
        setCmdText("");
        setOutText("");
        setPhase("cmd");
        setLineIndex((i) => (i + 1) % LINES.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [cmdText, outText, phase, lineIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-md rounded-2xl border border-border bg-card/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center gap-1.5 border-b border-border-soft px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-faint">sangram@dev — zsh</span>
      </div>
      <div className="min-h-[168px] p-4 font-mono text-[12.5px] leading-relaxed md:text-[13px]">
        {LINES.slice(0, lineIndex).map((l, i) => (
          <div key={i} className="mb-2 opacity-60">
            <div>
              <span className="text-violet">➜</span>{" "}
              <span className="text-cyan">~</span>{" "}
              <span className="text-ink">{l.cmd}</span>
            </div>
            <div className="text-muted">{l.out}</div>
          </div>
        ))}
        <div>
          <span className="text-violet">➜</span> <span className="text-cyan">~</span>{" "}
          <span className="text-ink">
            {cmdText}
            {phase === "cmd" && <span className="animate-pulse text-ink">▍</span>}
          </span>
        </div>
        {(phase === "out" || phase === "next") && (
          <div className="text-muted">
            {outText}
            {phase === "out" && <span className="animate-pulse text-muted">▍</span>}
          </div>
        )}
      </div>
    </motion.div>
  );
}
