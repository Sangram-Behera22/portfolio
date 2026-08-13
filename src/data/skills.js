// Skills are grouped by domain, not scored — expertise is communicated
// through category and context, not arbitrary percentages.

export const skillCategories = [
  {
    id: "backend",
    label: "Backend",
    note: "Primary specialization",
    skills: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "Fastify",
      "PHP",
      "Laravel",
      "CodeIgniter",
      "REST APIs",
    ],
  },
  {
    id: "database",
    label: "Database",
    note: "Storage & caching",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
  },
  {
    id: "frontend",
    label: "Frontend",
    note: "Interfaces & tooling",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "devops",
    label: "DevOps / Infrastructure",
    note: "Ship & operate",
    skills: ["Linux", "Docker", "CI/CD", "AWS", "Git", "GitHub", "Nginx"],
  },
  {
    id: "architecture",
    label: "Architecture",
    note: "Systems thinking",
    skills: [
      "REST API Architecture",
      "Authentication",
      "Authorization",
      "Database Design",
      "Caching",
      "Scalable Backend Systems",
      "System Design",
    ],
  },
];
