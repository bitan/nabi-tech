"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/demos", label: "Demos" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* Skip to main content — for keyboard / screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.05]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group select-none">
          <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
            <span className="text-black font-black text-xs leading-none">N</span>
          </div>
          <span className="font-bold text-white text-base tracking-tight">
            Nabi<span className="text-white/40">Tech</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "px-3.5 py-2 rounded-lg text-sm transition-colors",
                pathname === l.href
                  ? "text-white font-medium"
                  : "text-white/40 hover:text-white/80 font-normal"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-4 py-2 rounded-xl hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/50 hover:text-white p-1.5 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#080808]/98 backdrop-blur-xl border-t border-white/[0.06] px-5 pt-3 pb-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "px-3 py-3 rounded-xl text-sm transition-colors",
                pathname === l.href
                  ? "text-white font-medium bg-white/[0.06]"
                  : "text-white/50 hover:text-white hover:bg-white/[0.04]"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 text-center bg-white text-black text-sm font-semibold px-4 py-3 rounded-xl hover:bg-white/90 transition-colors"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      )}
    </header>
    </>
  );
}
