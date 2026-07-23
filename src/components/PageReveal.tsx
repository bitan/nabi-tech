"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

const STORAGE_KEY  = "nabitech_intro_seen";
const INTRO_HOLD_MS = (0.70 + 1.4) * 1000;  // must match ShutterIntro
const INTRO_EXIT_MS = 900;
const REVEAL_DELAY  = (INTRO_HOLD_MS + INTRO_EXIT_MS * 0.4) / 1000; // seconds

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function PageReveal({ children }: { children: React.ReactNode }) {
  // Default TRUE = show immediately (safe for SSR and return visits)
  const [animate, setAnimate] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Only animate-in if this is a first visit and motion is allowed
    if (!reduced && !sessionStorage.getItem(STORAGE_KEY)) {
      setAnimate(true);
    }
  }, []);

  // Never hide content — only optionally animate it in
  if (!animate) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
      animate={{ y: 0,  opacity: 1, filter: "blur(0px)" }}
      transition={{
        delay: REVEAL_DELAY,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
