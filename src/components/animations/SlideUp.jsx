// Reusable slide-up animation component.
import { motion } from "motion/react";

const SlideUp = ({
  children,
  delay = 0,
  distance = 24,
  duration = 0.5,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
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

export default SlideUp;
