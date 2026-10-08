import { motion } from "motion/react";
import { Code2, Database, GitBranch, Palette, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { skills } from "../../../data/skills";

const categoryIcons = {
  "Programming Languages": Code2,
  "Frameworks & Libraries": Palette,
  Databases: Database,
  "Tools & Platforms": GitBranch,
  "Familiar With": Code2,
};

const SkillsPreview = () => {
  return (
    <section className="border-y border-(--color-border) bg-(--color-surface) px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-text-primary) sm:text-4xl">
              Technologies I work with.
            </h2>

            <p className="mt-4 leading-7 text-(--color-text-secondary)">
              A selection of technologies and tools I use to build modern,
              responsive web applications.
            </p>
          </div>

          <Link
            to="/skills"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-(--color-accent) transition hover:gap-3"
          >
            View all skills
            <ArrowRight size={17} />
          </Link>
        </motion.div>

        {/* Skills */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.slice(0, 5).map((item, index) => {
            const Icon = categoryIcons[item.category];

            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-(--color-border) bg-(--color-background) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:shadow-(--color-accent-shadow) hover:shadow-lg"
              >
                {/* Category */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--color-accent-soft) text-(--color-accent)">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-semibold text-(--color-text-primary)">
                    {item.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-(--color-border) bg-(--color-surface) px-3 py-1.5 text-xs font-medium text-(--color-text-secondary) transition hover:border-(--color-accent) hover:text-(--color-accent)"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;
