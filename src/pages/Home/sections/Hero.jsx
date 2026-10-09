import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { siteConfig } from "../../../config/siteConfig";
import FadeIn from "../../../components/animations/FadeIn";

const Hero = () => {
  return (
    <section className="relative flex min-h-[min(100svh,72rem)] items-center overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:pt-[clamp(6rem,12svh,9rem)] lg:pb-[clamp(4rem,8svh,6rem)]">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-(--color-accent-soft) blur-3xl sm:h-96 sm:w-96"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* Content */}
        <div>
          <FadeIn duration={0.4} delay={0}>
            {/* Availability */}
            <div className="inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-(--color-surface) px-3.5 py-2 text-xs font-medium text-(--color-text-secondary) shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--color-accent) opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-(--color-accent)" />
              </span>
              Available for opportunities
            </div>
          </FadeIn>

          <FadeIn duration={0.5} delay={0.1} y={12}>
            {/* Heading */}
            <h1 className="mt-7 max-w-4xl text-5xl font-bold tracking-tight text-(--color-text-primary) sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="text-(--color-accent)">
                {siteConfig.name.split(" ")[0]}
              </span>
              .
              <br />I build modern{" "}
              <span className="relative inline-block">
                web experiences.
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-(--color-accent) opacity-30" />
              </span>
            </h1>
          </FadeIn>

          <FadeIn duration={0.5} delay={0.2} y={12}>
            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-(--color-text-secondary) sm:text-lg">
              I'm a{" "}
              <span className="font-semibold text-(--color-text-primary)">
                {siteConfig.role}
              </span>{" "}
              focused on building responsive, accessible and user-friendly
              applications with React and modern frontend technologies.
            </p>
          </FadeIn>

          <FadeIn duration={0.4} delay={0.3} y={8}>
            {/* Location */}
            <div className="mt-5 flex items-center gap-2 text-sm text-(--color-text-secondary)">
              <MapPin size={16} className="text-(--color-accent)" />
              {siteConfig.location}
            </div>
          </FadeIn>

          <FadeIn duration={0.5} delay={0.4} y={10}>
            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--color-button) px-6 py-3.5 text-sm font-semibold text-(--color-button-text) shadow-(--color-accent-shadow) shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-(--color-button-hover)"
              >
                View My Work
                <ArrowRight size={17} />
              </Link>

              <a
                href={siteConfig.resume}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-(--color-border) bg-(--color-surface) px-6 py-3.5 text-sm font-semibold text-(--color-text-primary) transition duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                Download Resume
                <Download size={17} />
              </a>
            </div>
          </FadeIn>

          <FadeIn duration={0.4} delay={0.5} y={8}>
            {/* Scroll */}
            <a
              href="#about-preview"
              className="mt-12 inline-flex items-center gap-2 text-xs font-medium text-(--color-text-secondary) transition hover:text-(--color-accent)"
            >
              Explore more
              <ArrowDown size={14} />
            </a>
          </FadeIn>
        </div>

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl border border-(--color-border) bg-(--color-surface) p-6 shadow-(--color-accent-shadow) shadow-2xl sm:p-8">
            {/* Decorative Grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--color-accent-soft) text-(--color-accent)">
                <Sparkles size={26} />
              </div>

              <p className="mt-8 text-sm font-medium text-(--color-text-secondary)">
                Currently focused on
              </p>

              <h2 className="mt-2 text-2xl font-bold text-(--color-text-primary)">
                React & Modern Frontend Development
              </h2>

              <p className="mt-4 text-sm leading-7 text-(--color-text-secondary)">
                Building scalable interfaces with reusable components, clean
                architecture, state management and modern UI patterns.
              </p>

              {/* Tech Stack */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "Redux Toolkit",
                  "TanStack Query",
                  "Motion",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-(--color-border) bg-(--color-background) px-3 py-1.5 text-xs font-medium text-(--color-text-secondary)"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-6 -left-4 rounded-2xl border border-(--color-border) bg-(--color-surface) px-4 py-3 shadow-xl sm:-left-8"
          >
            <p className="text-xs text-(--color-text-secondary)">
              Learning & Building
            </p>

            <p className="mt-1 text-sm font-semibold text-(--color-text-primary)">
              One project at a time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
