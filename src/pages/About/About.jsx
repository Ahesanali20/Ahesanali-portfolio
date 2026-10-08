// TODO: Implement the about page.
import { motion } from "motion/react";
import {
  ArrowRight,
  Code2,
  Download,
  Rocket,
  Sparkles,
} from "lucide-react/dist/cjs/lucide-react";
import { Link } from "react-router-dom";
import Experience from "./Experience";
import Education from "./Education";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building responsive and scalable interfaces using React, JavaScript, and modern frontend tools.",
    },
    {
      icon: Rocket,
      title: "Modern Web Applications",
      description:
        "Creating real-world applications with clean architecture, reusable components, and efficient state management.",
    },
    {
      icon: Sparkles,
      title: "Continuous Learning",
      description:
        "Constantly improving my skills by exploring modern technologies and building practical projects.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              About Me
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-(--color-text-primary) sm:text-5xl lg:text-6xl">
              Building modern web experiences with{" "}
              <span className="text-(--color-accent)">React.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-(--color-text-secondary) sm:text-lg">
              I'm Ahesanali Kadiwala, a React Developer focused on building
              clean, responsive, and user-friendly web applications. I enjoy
              turning ideas into practical digital experiences using modern
              frontend technologies.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-(--color-button) px-6 py-3.5 text-sm font-semibold text-(--color-button-text) shadow-(--color-accent-shadow) shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-(--color-button-hover)"
              >
                View My Projects
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-xl border border-(--color-border) bg-(--color-surface) px-6 py-3.5 text-sm font-semibold text-(--color-text-primary) transition duration-300 hover:-translate-y-0.5 hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-(--color-border) bg-(--color-surface) px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              What I Do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-text-primary) sm:text-4xl">
              Turning ideas into useful products.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                  className="rounded-2xl border border-(--color-border) bg-(--color-background) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:shadow-(--color-accent-shadow) hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-accent-soft) text-(--color-accent)">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-(--color-text-primary)">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-(--color-text-secondary)">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Experience />
      <Education />
      {/* Resume CTA */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-(--color-border) bg-(--color-accent-soft) px-6 py-12 text-center shadow-(--color-accent-shadow) shadow-lg sm:px-10"
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-48 w-48 rounded-full bg-(--color-accent-glow) blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-(--color-border) bg-(--color-surface) text-(--color-accent) shadow-sm">
                <Download size={24} />
              </div>

              <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
                Resume
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-text-primary) sm:text-4xl">
                Interested in working together?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-(--color-text-secondary)">
                Take a look at my resume to learn more about my skills,
                projects, education, and professional experience.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center gap-2 rounded-xl bg-(--color-button) px-6 py-3.5 text-sm font-semibold text-(--color-button-text) shadow-(--color-accent-shadow) shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-(--color-button-hover)"
                >
                  Download Resume
                  <Download
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-surface) px-6 py-3.5 text-sm font-semibold text-(--color-text-primary) transition duration-300 hover:-translate-y-0.5 hover:border-(--color-accent) hover:text-(--color-accent)"
                >
                  Let's Connect
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
