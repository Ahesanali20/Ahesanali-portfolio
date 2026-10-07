// TODO: Implement the about preview section.
import { motion } from "motion/react";
import { ArrowUpRight, Code2, Layers3, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Readable, maintainable and reusable React code.",
  },
  {
    icon: Layers3,
    title: "Modern Stack",
    description: "React, Redux Toolkit, TanStack Query and modern UI tools.",
  },
  {
    icon: Rocket,
    title: "Real Projects",
    description: "Building practical projects with real-world architecture.",
  },
];

const AboutPreview = () => {
  return (
    <section className="relative overflow-hidden border-t border-(--color-border) bg-(--color-background) px-6 py-24 sm:py-28">
      <div className="pointer-events-none absolute top-20 -left-32 h-72 w-72 rounded-full bg-(--color-accent-glow) opacity-20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
            About Me
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-(--color-text-primary) sm:text-4xl lg:text-5xl">
            Building interfaces with{" "}
            <span className="text-(--color-accent)">
              purpose and precision.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-(--color-text-secondary) sm:text-lg">
            I'm a React Developer focused on building modern, responsive and
            interactive web applications. I enjoy turning ideas into clean user
            experiences with scalable frontend architecture.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-(--color-border) bg-(--color-surface) p-8 shadow-(--color-accent-shadow) shadow-lg"
          >
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-(--color-accent-glow) opacity-10 blur-[80px]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-(--color-border) bg-(--color-accent-soft) text-xl font-bold text-(--color-accent)">
                AK
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-(--color-text-primary)">
                React Developer
              </h3>

              <p className="mt-4 leading-7 text-(--color-text-secondary)">
                I focus on creating frontend applications that are visually
                polished, performant and easy to maintain. My approach combines
                modern React patterns with thoughtful UI/UX.
              </p>

              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-(--color-accent)"
              >
                More about me
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right Highlights */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-3xl border border-(--color-border) bg-(--color-surface) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:shadow-(--color-accent-shadow) hover:shadow-lg"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-(--color-accent-soft) text-(--color-accent) transition duration-300 group-hover:bg-(--color-accent-tint)">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-(--color-text-primary)">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-(--color-text-secondary)">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
