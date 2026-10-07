// TODO: Implement a skill category.
import { motion } from "motion/react";
import { Check } from "lucide-react";

const SkillCategory = ({ category, skills, icon: Icon, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:shadow-(--color-accent-shadow) hover:shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--color-accent-soft) text-(--color-accent)">
          {Icon && <Icon size={21} />}
        </div>

        <h2 className="text-lg font-semibold text-(--color-text-primary)">
          {category}
        </h2>
      </div>

      {/* Skills */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-2 rounded-lg border border-(--color-border) bg-(--color-background) px-3 py-2 text-sm text-(--color-text-secondary) transition duration-200 hover:border-(--color-accent) hover:text-(--color-accent)"
          >
            <Check size={14} className="text-(--color-accent)" />
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
