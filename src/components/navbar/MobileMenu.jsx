import { AnimatePresence, motion } from "motion/react";
import { Download } from "lucide-react";
import { NavLink } from "react-router-dom";
import { GithubIcon } from "../ui/github";
import { LinkedinIcon } from "../ui/linkedin";
import ThemeToggle from "../common/ThemeToggle";

const MobileMenu = ({ isOpen, items, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        id="mobile-navigation"
        className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) p-3 shadow-lg shadow-slate-900/10 lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="space-y-1">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 text-sm transition ${
                  isActive
                    ? "bg-(--color-accent-soft) font-medium text-(--color-accent)"
                    : "text-(--color-text-secondary) hover:bg-(--color-accent-soft) hover:text-(--color-text-primary)"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="my-3 h-px bg-(--color-border)" />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/Ahesanali20"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-(--color-border) px-4 py-3 text-sm text-(--color-text-secondary) transition hover:bg-(--color-accent-soft) hover:text-(--color-accent)"
          >
            <GithubIcon size={17} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ahesanalikadiwala"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-(--color-border) px-4 py-3 text-sm text-(--color-text-secondary) transition hover:bg-(--color-accent-soft) hover:text-(--color-accent)"
          >
            <LinkedinIcon size={17} />
            LinkedIn
          </a>
        </div>

        <a
          href="/Ahesanali_Kadiwala_Resume.pdf"
          download
          onClick={onClose}
          className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-(--color-button) px-4 py-3 text-sm font-semibold text-(--color-button-text) transition hover:bg-(--color-button-hover)"
        >
          <Download size={17} />
          Download CV
        </a>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;
