import { motion } from "motion/react";

const NODES = [
  {
    id: "client",
    label: "Client",
    sub: "Web · Mobile",
    x: 350,
    y: 78,
    w: 200,
    h: 64,
    tone: "violet",
  },
  {
    id: "nginx",
    label: "Nginx",
    sub: "Reverse proxy · TLS",
    x: 350,
    y: 190,
    w: 200,
    h: 64,
    tone: "blue",
  },
  {
    id: "api",
    label: "Node.js API",
    sub: "Express / Fastify",
    x: 325,
    y: 302,
    w: 250,
    h: 72,
    tone: "cyan",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    sub: "Source of truth",
    x: 70,
    y: 500,
    w: 220,
    h: 70,
    tone: "violet",
  },
  {
    id: "redis",
    label: "Redis",
    sub: "Cache · sessions",
    x: 340,
    y: 500,
    w: 220,
    h: 70,
    tone: "emerald",
  },
  {
    id: "services",
    label: "Services",
    sub: "Queues · workers",
    x: 610,
    y: 500,
    w: 220,
    h: 70,
    tone: "orange",
  },
];

const toneMap = {
  violet: {
    stroke: "var(--color-violet)",
    text: "var(--color-violet)",
  },
  blue: {
    stroke: "var(--color-blue)",
    text: "var(--color-blue)",
  },
  cyan: {
    stroke: "var(--color-cyan)",
    text: "var(--color-cyan)",
  },
  emerald: {
    stroke: "var(--color-emerald-400, #34d399)",
    text: "var(--color-emerald-400, #34d399)",
  },
  orange: {
    stroke: "var(--color-orange-400, #fb923c)",
    text: "var(--color-orange-400, #fb923c)",
  },
};

function Node({ n }) {
  const tone = toneMap[n.tone];

  return (
    <g>
      <rect
        x={n.x}
        y={n.y}
        width={n.w}
        height={n.h}
        rx="16"
        fill="var(--color-card)"
        fillOpacity="0.55"
        stroke={tone.stroke}
        strokeOpacity="0.7"
        strokeWidth="1.2"
      />

      <rect
        x={n.x + 1}
        y={n.y + 1}
        width={n.w - 2}
        height={n.h - 2}
        rx="15"
        fill="none"
        stroke="var(--color-border)"
        strokeOpacity="0.35"
      />

      <circle
        cx={n.x + 27}
        cy={n.y + 27}
        r="5"
        fill={tone.stroke}
        opacity="0.95"
      />

      <text
        x={n.x + 44}
        y={n.y + 30}
        fontFamily="var(--font-display)"
        fontSize="16"
        fontWeight="600"
        fill="var(--color-ink)"
      >
        {n.label}
      </text>

      <text
        x={n.x + 44}
        y={n.y + 50}
        fontFamily="var(--font-mono)"
        fontSize="10.5"
        fill="var(--color-muted)"
      >
        {n.sub}
      </text>
    </g>
  );
}

function FlowDot({ x, path, color, delay = 0, duration = 1.5 }) {
  return (
    <motion.circle
      r="4"
      fill={color}
      filter="url(#glow)"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 0.45,
        ease: "easeInOut",
      }}
    >
      <animateMotion
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        path={path}
      />
    </motion.circle>
  );
}

export default function ArchitectureDiagram() {
  return (
    <div className="h-full w-full">
      <svg
        viewBox="0 0 900 620"
        className="block h-auto min-h-[520px] w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Backend system architecture showing request flow from client through Nginx and Node.js API to PostgreSQL, Redis and services"
      >
        <defs>
          <filter id="glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="diagramGlow" cx="50%" cy="42%" r="65%">
            <stop offset="0%" stopColor="var(--color-violet)" stopOpacity="0.08" />
            <stop offset="55%" stopColor="var(--color-blue)" stopOpacity="0.025" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle
              cx="1"
              cy="1"
              r="0.8"
              fill="var(--color-border)"
              opacity="0.35"
            />
          </pattern>
        </defs>

        <rect width="900" height="620" fill="url(#diagramGlow)" />
        <rect width="900" height="620" fill="url(#dots)" opacity="0.55" />

        {/* Diagram header */}
        {/* <g>
          <rect
            x="32"
            y="24"
            width="13"
            height="13"
            rx="3"
            fill="var(--color-violet)"
          />
          <text
            x="57"
            y="36"
            fontFamily="var(--font-display)"
            fontSize="15"
            fontWeight="600"
            fill="var(--color-ink)"
          >
            Request Flow
          </text>

          <circle cx="815" cy="31" r="4" fill="var(--color-violet)" filter="url(#glow)" />
          <text
            x="829"
            y="36"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--color-muted)"
          >
            Live request flow
          </text>
        </g> */}

        {/* Static connections */}
        <g
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M450 142 V190" />
          <path d="M450 254 V302" />
          <path d="M450 374 V430 H180 V500" />
          <path d="M450 374 V500" />
          <path d="M450 430 H720 V500" />
        </g>

        {/* Connection highlights */}
        <g
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
          strokeOpacity="0.25"
        >
          <path d="M450 142 V190" />
          <path d="M450 254 V302" />
          <path d="M450 374 V430 H180 V500" />
          <path d="M450 374 V500" />
          <path d="M450 430 H720 V500" />
        </g>

        {/* Animated request particles */}
        <FlowDot
          color="var(--color-violet)"
          path="M450 142 L450 190"
          delay={0}
        />
        <FlowDot
          color="var(--color-blue)"
          path="M450 254 L450 302"
          delay={0.35}
        />
        <FlowDot
          color="var(--color-cyan)"
          path="M450 374 L450 430 L180 430 L180 500"
          delay={0.7}
          duration={1.8}
        />
        <FlowDot
          color="var(--color-cyan)"
          path="M450 374 L450 500"
          delay={0.95}
          duration={1.45}
        />
        <FlowDot
          color="var(--color-cyan)"
          path="M450 374 L450 430 L720 430 L720 500"
          delay={1.2}
          duration={1.8}
        />

        {/* Branch junctions */}
        <g fill="var(--color-cyan)" filter="url(#glow)">
          <circle cx="180" cy="430" r="3.5" />
          <circle cx="450" cy="430" r="3.5" />
          <circle cx="720" cy="430" r="3.5" />
        </g>

        {NODES.map((n) => (
          <Node key={n.id} n={n} />
        ))}
      </svg>
    </div>
  );
}
