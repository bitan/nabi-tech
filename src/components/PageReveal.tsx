"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

const STORAGE_KEY = "nabitech_intro_seen";
// Must match EXIT_MS in ShutterIntro
const INTRO_HOLD_MS = (0.70 + 1.4) * 1000;      // ~2100 ms
const INTRO_EXIT_MS = 900;
const REVEAL_DELAY  = INTRO_HOLD_MS + INTRO_EXIT_MS * 0.4; // start rising mid-exit

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function PageReveal({ children }: { children: React.ReactNode }) {
  // If intro won't show, reveal immediately
  const [skipReveal, setSkipReveal] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(STORAGE_KEY)) {
      setSkipReveal(true);
    }
  }, []);

  if (skipReveal) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
      animate={{ y: 0,  opacity: 1, filter: "blur(0px)" }}
      transition={{
        delay: REVEAL_DELAY / 1000,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
