"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoopingWordsProps {
  words: string[];
  className?: string;
  /** how long each word is held (seconds) */
  hold?: number;
}

export function LoopingWords({ words, className = "", hold = 2.2 }: LoopingWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const total = (hold + 0.5) * 1000; // hold + transition time
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, total);
    return () => clearInterval(id);
  }, [words.length, hold]);

  return (
    <span
      className={`relative inline-flex items-center justify-start overflow-hidden ${className}`}
      style={{ minWidth: "max-content" }}
      aria-label={words[index]}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="inline-block will-change-transform"
          initial={{ y: "60%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-60%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
