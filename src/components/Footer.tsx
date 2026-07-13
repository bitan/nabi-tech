import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4 select-none">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
                <span className="text-black font-black text-xs">N</span>
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                Nabi<span className="text-white/40">Tech</span>
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Simple digital tools for local businesses in Ethiopia. Save time, respond faster, manage work better.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="https://wa.me/your-number" className="text-xs text-white/40 hover:text-white transition-colors">
                WhatsApp
              </a>
              <span className="text-white/10">·</span>
              <a href="mailto:hello@nabitech.et" className="text-xs text-white/40 hover:text-white transition-colors">
                hello@nabitech.et
              </a>
              <span className="text-white/10">·</span>
              <span className="text-xs text-white/40">Dire Dawa, Ethiopia</span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Pages</h4>
            <ul className="space-y-2.5">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Demos", "/demos"],
                ["Pricing", "/pricing"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/30 text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                "Business Websites",
                "WhatsApp Automation",
                "Booking Systems",
                "CRM & Tracking",
                "Inventory Systems",
                "Custom AI Tools",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/30 text-sm hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} NabiTech. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Built in Dire Dawa, Ethiopia <span aria-hidden="true">🇪🇹</span></p>
        </div>
      </div>
    </footer>
  );
}
