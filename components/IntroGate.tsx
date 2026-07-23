"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/projects";
import { useLenis } from "./SmoothScroll";

export default function IntroGate() {
  const [open, setOpen] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, lenis]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="intro-gate"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          onClick={() => setOpen(false)}
        >
          <span className="intro-eyebrow">// {siteConfig.tagline}</span>
          <h1 className="intro-title">{siteConfig.name}</h1>
          <div className="intro-enter">
            <span className="intro-dot" />
            klik untuk masuk
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
