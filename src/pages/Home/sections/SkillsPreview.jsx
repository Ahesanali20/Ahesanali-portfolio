// TODO: Implement the skills preview section.
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Database,
  GitBranch,
  Palette,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

import { skills } from "../../../data/skills";

const categoryIcons = {
  Frontend: Code2,
  "State & Data": Database,
  "UI & Styling": Palette,
  "Forms & Validation": Wrench,
  Tools: GitBranch,
};

const SkillsPreview = () => {
  return (
    <section className="relative overflow-hidden border-t border-(--color-border) bg-(--color-surface) px-6 py-24 sm:py-28">
      <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-(--color-accent-glow) opacity-10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              Skills & Technologies
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-(--color-text-primary) sm:text-4xl lg:text-5xl">
              Tools I use to build{" "}
              <span className="text-(--color-accent)">modern web apps.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-(--color-text-secondary) sm:text-lg">
              A modern frontend toolkit focused on building scalable, responsive
              and maintainable applications.
            </p>
          </div>

          <Link
            to="/skills"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-(--color-accent)"
          >
            View all skills
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => {
            const Icon = categoryIcons[category.category] ?? Code2;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-(--color-border) bg-(--color-background) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:shadow-(--color-accent-shadow) hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-accent-soft) text-(--color-accent) transition duration-300 group-hover:bg-(--color-accent-tint)">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold text-(--color-text-primary)">
                    {category.category}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-(--color-border) bg-(--color-surface) px-3 py-1.5 text-xs font-medium text-(--color-text-secondary) transition hover:border-(--color-accent) hover:text-(--color-accent)"
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
