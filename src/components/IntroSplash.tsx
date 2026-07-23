"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "nabitech_intro_seen";

export default function IntroSplash() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible]   = useState(false);
  const [opacity, setOpacity]   = useState(1);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Skip entirely if reduced motion or already seen
    if (
      reducedMotion.current ||
      sessionStorage.getItem(STORAGE_KEY)
    ) {
      return;
    }

    setVisible(true);
  }, []);

  function dismiss() {
    // Fade out over 600 ms, then unmount
    setOpacity(0);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 650);
  }

  function handleEnded() {
    dismiss();
  }

  // When splash mounts, play the video
  useEffect(() => {
    if (visible && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked — just dismiss immediately
        dismiss();
      });
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-splash"
          initial={{ opacity: 1 }}
          animate={{ opacity }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          aria-label="NabiTech intro video"
        >
          {/* Video */}
          <video
            ref={videoRef}
            src="/nabitech.mp4"
            muted
            playsInline
            onEnded={handleEnded}
            className="w-full h-full object-cover"
            aria-hidden="true"
          />

          {/* Dark gradient overlay — top and bottom so skip button reads */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

          {/* NabiTech wordmark top-left */}
          <div className="absolute top-6 left-6 flex items-center gap-2 select-none">
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
              <span className="text-black font-black text-xs leading-none">N</span>
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              Nabi<span className="text-white/40">Tech</span>
            </span>
          </div>

          {/* Skip button — always accessible */}
          <button
            onClick={dismiss}
            className="absolute bottom-8 right-8 group flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:rounded-lg px-3 py-2"
            aria-label="Skip intro"
          >
            Skip
            <span className="inline-block w-5 h-5 rounded-full border border-white/30 group-hover:border-white/70 flex items-center justify-center transition-colors">
              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 fill-current" aria-hidden="true">
                <polygon points="2,1 8,5 2,9" />
              </svg>
            </span>
          </button>

          {/* Progress bar — animates over video duration */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
            <motion.div
              className="h-full bg-white/50"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: videoRef.current?.duration ?? 8, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
