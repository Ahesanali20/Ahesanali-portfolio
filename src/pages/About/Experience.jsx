// TODO: Implement the experience section.
import { motion } from "motion/react";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-text-primary) sm:text-4xl">
            My development journey.
          </h2>

          <p className="mt-4 leading-7 text-(--color-text-secondary)">
            A look at the experience and practical work that has shaped my
            frontend development journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute top-0 left-5 hidden h-full w-px bg-(--color-border) sm:block" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative sm:pl-14"
              >
                {/* Timeline Icon */}
                <div className="absolute top-0 left-0 hidden h-10 w-10 items-center justify-center rounded-xl border border-(--color-border) bg-(--color-surface) text-(--color-accent) shadow-sm sm:flex">
                  <Briefcase size={18} />
                </div>

                <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:shadow-(--color-accent-shadow) hover:shadow-lg">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-(--color-text-primary)">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-(--color-accent)">
                        {item.company}
                      </p>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 rounded-lg bg-(--color-accent-soft) px-3 py-1.5 text-xs font-medium text-(--color-text-secondary)">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-(--color-text-secondary)">
                    {item.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-(--color-text-primary)">
                      Key Work
                    </h4>

                    <ul className="mt-4 space-y-3">
                      {item.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-3 text-sm leading-6 text-(--color-text-secondary)"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-(--color-accent)"
                          />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-(--color-border) bg-(--color-accent-soft) px-3 py-1.5 text-xs font-medium text-(--color-text-secondary)"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
