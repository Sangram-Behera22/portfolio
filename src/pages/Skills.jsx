import { motion } from "motion/react";
import SkillCard from "../components/SkillCard.jsx";
import { skillCategories } from "../data/skills.js";

export default function Skills() {
  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-5 py-10 md:px-10 lg:px-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-violet"
          >
            // skills
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Technical Toolkit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 max-w-xl text-[14px] text-muted"
          >
            Organized by domain rather than arbitrary percentages — depth
            shown through what I've actually built with.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.id}
              category={cat}
              delay={0.05 * i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}