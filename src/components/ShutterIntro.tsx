"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "nabitech_intro_seen";

// The lines that shutter in one by one
const LINES = [
  { text: "Simple.",     delay: 0.0 },
  { text: "Digital.",    delay: 0.35 },
  { text: "Ethiopia.",   delay: 0.70 },
];

export default function ShutterIntro() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Skip if reduced motion or already seen this session
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(STORAGE_KEY)) return;
    setVisible(true);
  }, []);

  function dismiss() {
    setLeaving(true);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 800);
  }

  // Auto-dismiss after all lines + hold time
  useEffect(() => {
    if (!visible) return;
    const lastDelay = LINES[LINES.length - 1].delay;
    const timer = setTimeout(dismiss, (lastDelay + 1.4 + 0.8) * 1000);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="shutter-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: leaving ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#080808] flex flex-col items-center justify-center overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="NabiTech intro"
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
            aria-hidden="true"
          />

          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Logo mark */}
          <motion.div
            className="absolute top-8 left-8 flex items-center gap-2.5 select-none"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            aria-hidden="true"
          >
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
              <span className="text-black font-black text-xs leading-none">N</span>
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              Nabi<span className="text-white/40">Tech</span>
            </span>
          </motion.div>

          {/* Main shutter lines */}
          <div className="relative z-10 text-center px-6" aria-live="polite">
            {LINES.map(({ text, delay }) => (
              <div key={text} className="overflow-hidden leading-none mb-2 sm:mb-3">
                <motion.p
                  className="text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] font-extrabold tracking-tighter text-white leading-none"
                  initial={{ y: "105%", opacity: 0 }}
                  animate={leaving
                    ? { y: "-105%", opacity: 0 }
                    : { y: "0%", opacity: 1 }
                  }
                  transition={leaving
                    ? { duration: 0.5, ease: [0.55, 0, 1, 0.45], delay: delay * 0.3 }
                    : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 + delay }
                  }
                >
                  {text}
                </motion.p>
              </div>
            ))}

            {/* Tagline fades in after lines */}
            <motion.p
              className="text-white/35 text-sm sm:text-base font-light tracking-[0.2em] uppercase mt-6"
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={leaving
                ? { opacity: 0, filter: "blur(6px)" }
                : { opacity: 1, filter: "blur(0px)" }
              }
              transition={{ delay: leaving ? 0 : 1.4, duration: 0.7 }}
            >
              Digital tools for local businesses
            </motion.p>
          </div>

          {/* Skip button */}
          <motion.button
            onClick={dismiss}
            className="absolute bottom-8 right-8 text-white/30 hover:text-white/70 text-xs font-medium tracking-widest uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded px-2 py-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            aria-label="Skip intro"
          >
            Skip
          </motion.button>

          {/* Thin progress line at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 h-[1.5px] bg-white/20"
            initial={{ width: "0%" }}
            animate={{ width: leaving ? "100%" : "100%" }}
            transition={{ duration: LINES[LINES.length - 1].delay + 1.4 + 0.8, ease: "linear" }}
            aria-hidden="true"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
