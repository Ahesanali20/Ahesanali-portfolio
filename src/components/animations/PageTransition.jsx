import { useContext, useLayoutEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ScrollRestorationContext } from "../common/ScrollToTop";

const PageTransition = ({ children, className = "", locationKey }) => {
  const restoreScrollPosition = useContext(ScrollRestorationContext);
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    restoreScrollPosition(locationKey);
  }, [locationKey, restoreScrollPosition]);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
