import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, easing } from "../lib/animations";

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{ duration: 0.7, ease: easing, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}