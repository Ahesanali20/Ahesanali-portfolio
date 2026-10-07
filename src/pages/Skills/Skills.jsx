// TODO: Implement the skills page.
import { motion } from "motion/react";
import { Code2, Database, GitBranch, Palette, Wrench } from "lucide-react";

import SkillCategory from "./SkillCategory";
import { skills } from "../../data/skills";

const categoryIcons = {
  "Programming Languages": Code2,
  "Frameworks & Libraries": Palette,
  Databases: Database,
  "Tools & Platforms": GitBranch,
  "Familiar With": Wrench,
};

const Skills = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              Skills
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-(--color-text-primary) sm:text-5xl lg:text-6xl">
              Technologies I{" "}
              <span className="text-(--color-accent)">work with.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-(--color-text-secondary) sm:text-lg">
              A collection of technologies and tools I use while building web
              applications, along with technologies I am currently exploring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="border-y border-(--color-border) bg-(--color-surface) px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((item, index) => (
              <SkillCategory
                key={item.category}
                category={item.category}
                skills={item.skills}
                icon={categoryIcons[item.category]}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Learning CTA */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-(--color-border) bg-(--color-accent-soft) px-6 py-12 text-center shadow-(--color-accent-shadow) shadow-lg sm:px-10"
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              Always Learning
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-text-primary) sm:text-4xl">
              Improving one project at a time.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-(--color-text-secondary)">
              I'm continuously learning modern frontend technologies and
              applying them to real-world projects to improve my development
              skills.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
