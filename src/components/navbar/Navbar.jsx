import { Download, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { GithubIcon } from "../ui/github";
import { LinkedinIcon } from "../ui/linkedin";
import ThemeToggle from "../common/ThemeToggle";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

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
      <nav className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between rounded-2xl border border-(--color-border) bg-(--color-surface)/90 px-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl sm:px-6">
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

        <NavLinks items={navItems} />

        <div className="hidden items-center gap-2 lg:flex">
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
          className="rounded-xl border border-(--color-border) bg-(--color-surface) p-2.5 text-(--color-text-secondary) transition hover:bg-(--color-accent-soft) hover:text-(--color-accent) lg:hidden"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        items={navItems}
        onClose={closeMobileMenu}
      />
    </header>
  );
};

export default Navbar;
