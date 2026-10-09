// Reusable fade-in animation component.
import { motion } from "motion/react";

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  y = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
