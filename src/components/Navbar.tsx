"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const links = [
  { href: "/",         label: "Home"     },
  { href: "/about",    label: "About"    },
  { href: "/services", label: "Services" },
  { href: "/demos",    label: "Demos"    },
  { href: "/pricing",  label: "Pricing"  },
  { href: "/contact",  label: "Contact"  },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname               = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:text-xs focus:font-medium focus:uppercase focus:tracking-widest"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-black/85 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[60px]"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group select-none shrink-0"
            aria-label="NabiTech home"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image
                src="/logo.svg.png"
                alt="NabiTech logo mark"
                width={32}
                height={32}
                className="w-8 h-8 object-contain invert"
                priority
              />
            </div>
            <span
              className="font-bold text-white text-[15px] tracking-tight leading-none"
              style={{ letterSpacing: "-0.02em" }}
            >
              NABITECH
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1" role="list">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                role="listitem"
                className={cn(
                  "relative px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-200",
                  pathname === l.href
                    ? "text-white"
                    : "text-white/35 hover:text-white/80"
                )}
              >
                {l.label}
                {/* Active indicator dot */}
                {pathname === l.href && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black text-[11px] font-semibold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="block w-5 h-[1.5px] bg-white origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="block w-5 h-[1.5px] bg-white origin-center"
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col"
          >
            {/* Grid texture */}
            <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden="true" />

            {/* Glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
              aria-hidden="true"
            />

            <div className="flex flex-col justify-end h-full px-7 pb-12 pt-24">
              {/* Links */}
              <nav className="space-y-1 mb-12" aria-label="Mobile navigation">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={l.href}
                      className={cn(
                        "block py-3 border-b border-white/[0.07]",
                        pathname === l.href
                          ? "text-white"
                          : "text-white/40 hover:text-white"
                      )}
                    >
                      <span className="text-[11px] uppercase tracking-[0.15em] font-medium mr-4 text-white/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-2xl font-bold tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                        {l.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="block w-full text-center bg-white text-black text-[11px] font-semibold uppercase tracking-[0.15em] px-6 py-4 hover:bg-white/90 transition-colors"
                >
                  Book a Free Discovery Call
                </Link>
                <div className="mt-6 flex items-center gap-4">
                  <a href="https://wa.me/your-number" className="text-[10px] text-white/30 uppercase tracking-widest hover:text-white transition-colors">
                    WhatsApp
                  </a>
                  <span className="text-white/10">·</span>
                  <a href="mailto:hello@nabitech.et" className="text-[10px] text-white/30 uppercase tracking-widest hover:text-white transition-colors">
                    Email
                  </a>
                  <span className="text-white/10">·</span>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest">
                    Dire Dawa, ET
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

