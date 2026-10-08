import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

import ContactForm from "./ContactForm";
import { siteConfig } from "../../config/siteConfig";
import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "@/components/ui/linkedin";

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              Contact
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-(--color-text-primary) sm:text-5xl lg:text-6xl">
              Let's build something{" "}
              <span className="text-(--color-accent)">great together.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-(--color-text-secondary) sm:text-lg">
              Have a project idea, internship opportunity, or just want to
              connect? I'd be happy to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-y border-(--color-border) bg-(--color-surface) px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              Get in touch
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-text-primary)">
              I'd love to hear from you.
            </h2>

            <p className="mt-5 leading-7 text-(--color-text-secondary)">
              Whether you're looking for a frontend developer, discussing a
              project, or exploring an opportunity, feel free to reach out.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-(--color-border) bg-(--color-background) p-4 transition duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:shadow-(--color-accent-shadow) hover:shadow-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--color-accent-soft) text-(--color-accent)">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium text-(--color-text-secondary)">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-medium text-(--color-text-primary) group-hover:text-(--color-accent)">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="group flex items-center gap-4 rounded-2xl border border-(--color-border) bg-(--color-background) p-4 transition duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:shadow-(--color-accent-shadow) hover:shadow-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--color-accent-soft) text-(--color-accent)">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium text-(--color-text-secondary)">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-medium text-(--color-text-primary) group-hover:text-(--color-accent)">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-(--color-border) bg-(--color-background) p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--color-accent-soft) text-(--color-accent)">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium text-(--color-text-secondary)">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-medium text-(--color-text-primary)">
                    {siteConfig.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-(--color-text-primary)">
                Connect with me
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--color-border) bg-(--color-background) text-(--color-text-secondary) transition hover:-translate-y-1 hover:border-(--color-accent) hover:text-(--color-accent)"
                  aria-label="GitHub"
                >
                  <GithubIcon size={19} />
                </a>

                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--color-border) bg-(--color-background) text-(--color-text-secondary) transition hover:-translate-y-1 hover:border-(--color-accent) hover:text-(--color-accent)"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={19} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-(--color-border) bg-(--color-background) p-6 shadow-sm sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-(--color-text-primary)">
                Send me a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-(--color-text-secondary)">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
