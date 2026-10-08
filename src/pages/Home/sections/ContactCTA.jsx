// TODO: Implement the contact call-to-action section.
import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-(--color-border) bg-(--color-accent-soft) px-6 py-14 text-center shadow-(--color-accent-shadow) shadow-xl sm:px-10"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-(--color-accent-glow) blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-(--color-border) bg-(--color-surface) text-(--color-accent) shadow-sm">
              <Mail size={24} />
            </div>

            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              Let's Connect
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-(--color-text-primary) sm:text-4xl lg:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-(--color-text-secondary) sm:text-lg">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to build something meaningful together.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-(--color-button) px-6 py-3.5 text-sm font-semibold text-(--color-button-text) shadow-(--color-accent-shadow) shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-(--color-button-hover)"
              >
                Get In Touch
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-surface) px-6 py-3.5 text-sm font-semibold text-(--color-text-primary) transition duration-300 hover:-translate-y-0.5 hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                View My Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
