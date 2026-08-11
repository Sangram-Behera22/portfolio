import { motion } from "motion/react";

const NODES = [
  { id: "client", label: "Client", sub: "Web · Mobile", x: 310, y: 16, w: 180, h: 52 },
  { id: "nginx", label: "Nginx", sub: "Reverse proxy · TLS", x: 310, y: 108, w: 180, h: 52 },
  { id: "api", label: "Node.js API", sub: "Express / Fastify", x: 280, y: 200, w: 240, h: 60 },
  { id: "postgres", label: "PostgreSQL", sub: "Source of truth", x: 60, y: 340, w: 180, h: 56 },
  { id: "redis", label: "Redis", sub: "Cache · sessions", x: 310, y: 340, w: 180, h: 56 },
  { id: "services", label: "Services", sub: "Queues · workers", x: 560, y: 340, w: 180, h: 56 },
];

const branchTargets = [
  { x: 150, delay: 0 },
  { x: 400, delay: 0.6 },
  { x: 650, delay: 1.2 },
];

function Node({ n }) {
  return (
    <g>
      <rect
        x={n.x}
        y={n.y}
        width={n.w}
        height={n.h}
        rx={12}
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x={n.x + n.w / 2}
        y={n.y + n.h / 2 - (n.sub ? 6 : -4)}
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="15"
        fontWeight="600"
        fill="var(--color-ink)"
      >
        {n.label}
      </text>
      {n.sub && (
        <text
          x={n.x + n.w / 2}
          y={n.y + n.h / 2 + 14}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="10.5"
          fill="var(--color-muted)"
        >
          {n.sub}
        </text>
      )}
    </g>
  );
}

export default function ArchitectureDiagram() {
  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 800 420"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* static connecting lines */}
        <g stroke="var(--color-border)" strokeWidth="1.5" fill="none">
          <line x1="400" y1="68" x2="400" y2="108" />
          <line x1="400" y1="160" x2="400" y2="200" />
          <line x1="400" y1="260" x2="400" y2="300" />
          <line x1="150" y1="300" x2="650" y2="300" />
          <line x1="150" y1="300" x2="150" y2="340" />
          <line x1="400" y1="300" x2="400" y2="340" />
          <line x1="650" y1="300" x2="650" y2="340" />
        </g>

        {/* client -> nginx */}
        <motion.circle
          r="4"
          fill="var(--color-violet)"
          filter="url(#glow)"
          animate={{ cy: [68, 108] }}
          transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
          cx={400}
        />
        {/* nginx -> api */}
        <motion.circle
          r="4"
          fill="var(--color-blue)"
          filter="url(#glow)"
          animate={{ cy: [160, 200] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            repeatDelay: 0.8,
            ease: "easeInOut",
            delay: 0.35,
          }}
          cx={400}
        />
        {/* api -> branches */}
        {branchTargets.map((b) => (
          <motion.circle
            key={b.x}
            r="4"
            fill="var(--color-cyan)"
            filter="url(#glow)"
            animate={{
              cx: [400, 400, b.x, b.x],
              cy: [260, 300, 300, 340],
            }}
            transition={{
              duration: 1.8,
              times: [0, 0.32, 0.66, 1],
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: "easeInOut",
              delay: b.delay,
            }}
          />
        ))}

        {NODES.map((n) => (
          <Node key={n.id} n={n} />
        ))}
      </svg>
    </div>
  );
}
