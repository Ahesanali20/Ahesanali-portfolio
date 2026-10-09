import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ items }) => (
  <div className="hidden items-center gap-1 lg:flex">
    {items.map((item) => (
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
);

export default NavLinks;
