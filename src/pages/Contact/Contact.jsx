// TODO: Implement the contact page.
import { motion } from "motion/react";

import ContactForm from "./ContactForm";
import { Mail, MapPin } from "lucide-react/dist/cjs/lucide-react";
import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "@/components/ui/linkedin";

const Contact = () => {
  return (
    <section className="min-h-screen bg-(--color-background) px-6 pt-32 pb-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
            Contact
          </span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-(--color-text-primary) sm:text-5xl lg:text-6xl">
            Let's build something{" "}
            <span className="text-(--color-accent)">great together.</span>
          </h1>

          <p className="mt-6 text-base leading-8 text-(--color-text-secondary) sm:text-lg">
            Have a project, opportunity or idea? Send me a message and I'll get
            back to you.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="rounded-3xl border border-(--color-border) bg-(--color-surface) p-8"
          >
            <h2 className="text-2xl font-semibold text-(--color-text-primary)">
              Get in touch
            </h2>

            <p className="mt-4 leading-7 text-(--color-text-secondary)">
              I'm always open to discussing frontend opportunities, interesting
              projects and new ideas.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-4 text-(--color-text-secondary) transition hover:text-(--color-accent)"
              >
                <Mail size={20} />
                <span>kadiwalaahesanali20@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 text-(--color-text-secondary)">
                <MapPin size={20} />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            <div className="mt-10 flex gap-3">
              <a
                href="https://github.com/Ahesanali20"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-(--color-border) p-3 text-(--color-text-secondary) transition hover:border-(--color-accent) hover:bg-(--color-accent-soft) hover:text-(--color-accent)"
              >
                <GithubIcon size={19} />
              </a>

              <a
                href="https://linkedin.com/in/ahesanalikadiwala"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-(--color-border) p-3 text-(--color-text-secondary) transition hover:border-(--color-accent) hover:bg-(--color-accent-soft) hover:text-(--color-accent)"
              >
                <LinkedinIcon size={19} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
