"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export default function RevealSection({ children, delay = 0 }: RevealSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
