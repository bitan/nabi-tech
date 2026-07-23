import Link from "next/link";
import Image from "next/image";

const pages = [
  ["Home",     "/"],
  ["About",    "/about"],
  ["Services", "/services"],
  ["Demos",    "/demos"],
  ["Pricing",  "/pricing"],
  ["Contact",  "/contact"],
];

const services = [
  "Business Websites",
  "WhatsApp Automation",
  "Booking Systems",
  "CRM & Tracking",
  "Inventory Systems",
  "Custom AI Tools",
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.07] relative overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top bar — large editorial statement */}
        <div className="py-16 sm:py-20 border-b border-white/[0.07]">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-medium mb-6">
            Based in Dire Dawa, Ethiopia
          </p>
          <h2
            className="text-white font-bold leading-none"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", letterSpacing: "-0.04em", lineHeight: "0.92" }}
          >
            Let&apos;s build<br />
            <span className="text-white/20">something</span> real.
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black text-[11px] font-semibold uppercase tracking-[0.14em] px-6 py-3.5 hover:bg-white/90 transition-all active:scale-[0.98]"
            >
              Start a project
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a
              href="mailto:hello@nabitech.et"
              className="text-[11px] uppercase tracking-[0.14em] text-white/40 hover:text-white transition-colors font-medium border-b border-white/20 hover:border-white pb-0.5"
            >
              hello@nabitech.et
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group" aria-label="NabiTech home">
              <Image
                src="/logo.svg"
                alt="NabiTech"
                width={24}
                height={24}
                className="w-6 h-6 object-contain invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.15em]">
                NabiTech
              </span>
            </Link>
            <p className="text-white/25 text-xs leading-relaxed max-w-[180px]">
              Digital tools for local businesses in Ethiopia.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="label-sm text-white/30 mb-5">Pages</h4>
            <ul className="space-y-3">
              {pages.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[11px] text-white/35 hover:text-white transition-colors uppercase tracking-[0.1em]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="label-sm text-white/30 mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-[11px] text-white/35 hover:text-white transition-colors uppercase tracking-[0.1em]"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-sm text-white/30 mb-5">Contact</h4>
            <ul className="space-y-3 text-[11px] uppercase tracking-[0.1em]">
              <li>
                <a href="https://wa.me/your-number" className="text-white/35 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@nabitech.et" className="text-white/35 hover:text-white transition-colors">
                  Email
                </a>
              </li>
              <li className="text-white/20">Dire Dawa, ET</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="label-sm text-white/15" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} NabiTech
          </p>
          <p className="label-sm text-white/15">Dire Dawa, Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}
