import { Mail, ArrowUp, Heart } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { LinkedinIcon } from "../ui/linkedin";
import { GithubIcon } from "../ui/github";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-(--color-border) bg-(--color-surface)">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-(--color-text-primary)"
            >
              <span className="text-(--color-accent)">A</span>
              {siteConfig.name}
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-(--color-text-secondary)">
              {siteConfig.role} focused on building modern, responsive and
              user-friendly web applications with React.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--color-border) bg-(--color-background) text-(--color-text-secondary) transition duration-200 hover:-translate-y-1 hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--color-border) bg-(--color-background) text-(--color-text-secondary) transition duration-200 hover:-translate-y-1 hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--color-border) bg-(--color-background) text-(--color-text-secondary) transition duration-200 hover:-translate-y-1 hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-(--color-text-primary)">
              Quick Links
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="/"
                className="text-sm text-(--color-text-secondary) transition hover:text-(--color-accent)"
              >
                Home
              </a>

              <a
                href="/about"
                className="text-sm text-(--color-text-secondary) transition hover:text-(--color-accent)"
              >
                About
              </a>

              <a
                href="/projects"
                className="text-sm text-(--color-text-secondary) transition hover:text-(--color-accent)"
              >
                Projects
              </a>

              <a
                href="/skills"
                className="text-sm text-(--color-text-secondary) transition hover:text-(--color-accent)"
              >
                Skills
              </a>

              <a
                href="/contact"
                className="text-sm text-(--color-text-secondary) transition hover:text-(--color-accent)"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="max-w-xs">
            <h3 className="text-sm font-semibold text-(--color-text-primary)">
              Let's Connect
            </h3>

            <p className="mt-4 text-sm leading-6 text-(--color-text-secondary)">
              Have a project, opportunity or idea? Feel free to get in touch.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-(--color-accent) transition hover:gap-3"
            >
              <Mail size={16} />
              Get in touch
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-(--color-border) pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-(--color-text-secondary)">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-xs text-(--color-text-secondary)">
            <span>Built with</span>

            <Heart size={13} className="fill-current text-(--color-accent)" />

            <span>using React</span>
          </div>

          <a
            href="#"
            aria-label="Back to top"
            className="inline-flex items-center gap-2 text-xs font-medium text-(--color-text-secondary) transition hover:text-(--color-accent)"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
