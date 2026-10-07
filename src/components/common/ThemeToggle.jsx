// TODO: Implement the theme toggle component.
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../features/theme/themeSlice";
import { selectIsDark } from "../../features/theme/themeSelectors";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDark = useSelector(selectIsDark);

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-(--color-border) bg-(--color-accent-soft) text-(--color-text-secondary) transition hover:bg-(--color-accent-tint) hover:text-(--color-accent)"
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{
          opacity: 0,
          rotate: -90,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
