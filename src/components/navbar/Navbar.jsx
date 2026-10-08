import { AnimatePresence, motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { GithubIcon } from "../ui/github";
import { LinkedinIcon } from "../ui/linkedin";
import ThemeToggle from "../common/ThemeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-(--color-border) bg-(--color-surface)/90 px-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl sm:px-6">
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-(--color-border) bg-(--color-accent-soft) text-sm font-bold text-(--color-accent) transition duration-300 group-hover:border-(--color-accent) group-hover:bg-(--color-accent-tint)">
            AK
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-tight text-(--color-text-primary)">
              Ahesanali Kadiwala
            </p>
            <p className="text-[11px] text-(--color-text-secondary)">
              React Developer
            </p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative rounded-xl px-4 py-2 text-sm transition duration-300 ${
                  isActive
                    ? "text-(--color-accent)"
                    : "text-(--color-text-secondary) hover:bg-(--color-accent-soft) hover:text-(--color-text-primary)"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-linear-to-r from-transparent via-(--color-accent) to-transparent"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />

          <a
            href="https://github.com/Ahesanali20"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-xl p-2.5 text-(--color-text-secondary) transition hover:bg-(--color-accent-soft) hover:text-(--color-accent)"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href="https://linkedin.com/in/ahesanalikadiwala"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-xl p-2.5 text-(--color-text-secondary) transition hover:bg-(--color-accent-soft) hover:text-(--color-accent)"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href="/Ahesanali_Kadiwala_Resume.pdf"
            download
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-(--color-button) px-4 py-2.5 text-sm font-semibold text-(--color-button-text) transition duration-300 hover:-translate-y-0.5 hover:bg-(--color-button-hover)"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          className="rounded-xl border border-(--color-border) bg-(--color-surface) p-2.5 text-(--color-text-secondary) transition hover:bg-(--color-accent-soft) hover:text-(--color-accent) md:hidden"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            id="mobile-navigation"
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) p-3 shadow-lg shadow-slate-900/10 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-(--color-border) px-4 py-3 text-sm text-(--color-text-secondary) transition hover:bg-(--color-accent-soft) hover:text-(--color-accent)"
              >
                <LinkedinIcon size={17} />
                LinkedIn
              </a>
            </div>

            <a
              href="/Ahesanali_Kadiwala_Resume.pdf"
              download
              onClick={closeMobileMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-(--color-button) px-4 py-3 text-sm font-semibold text-(--color-button-text) transition hover:bg-(--color-button-hover)"
            >
              <Download size={17} />
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
