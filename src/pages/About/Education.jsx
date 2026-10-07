// TODO: Implement the education section.
import { motion } from "motion/react";
import {
  Calendar,
  CheckCircle2,
  GraduationCap,
} from "lucide-react/dist/cjs/lucide-react";
import { education } from "../../data/education";

const Education = () => {
  return (
    <section className="border-y border-(--color-border) bg-(--color-surface) px-4 py-20 sm:px-6">
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
            Education
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-text-primary) sm:text-4xl">
            My academic background.
          </h2>

          <p className="mt-4 leading-7 text-(--color-text-secondary)">
            My academic journey has given me a strong foundation in programming,
            web development, databases, and software development.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="mt-12 space-y-6">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-(--color-border) bg-(--color-background) p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:shadow-(--color-accent-shadow) hover:shadow-lg sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--color-accent-soft) text-(--color-accent)">
                  <GraduationCap size={26} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-(--color-text-primary)">
                        {item.degree}
                      </h3>

                      <p className="mt-1 font-medium text-(--color-accent)">
                        {item.field}
                      </p>

                      <p className="mt-1 text-sm text-(--color-text-secondary)">
                        {item.institution}
                      </p>

                      {/* Status */}
                      <span className="mt-3 inline-flex rounded-lg bg-(--color-accent-soft) px-3 py-1 text-xs font-medium text-(--color-accent)">
                        {item.status}
                      </span>
                    </div>

                    {/* Period */}
                    <div className="flex h-fit w-fit shrink-0 items-center gap-2 rounded-lg border border-(--color-border) bg-(--color-surface) px-3 py-1.5 text-xs font-medium text-(--color-text-secondary)">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-(--color-text-secondary)">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-(--color-text-secondary)"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-(--color-accent)"
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
