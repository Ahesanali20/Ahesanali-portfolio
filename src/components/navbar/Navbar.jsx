// TODO: Implement the site navigation bar.
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@base-ui/react/button";

const Navbar = () => {
  const nav = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Skills",
      path: "/skills",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold tracking-tight text-white">
          Ahesanali<span className="text-blue-500"> Kadiwala</span>.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Button
          type="button"
          className="rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white md:hidden"
        >
          <Menu size={22} />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
