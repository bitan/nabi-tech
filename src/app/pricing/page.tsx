import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description: "Simple, transparent pricing for NabiTech services. Starter, Growth, and Premium packages for Ethiopian local businesses.",
  slug: "pricing",
});

const packages = [
  {
    name: "Starter",
    tagline: "Best for very small businesses",
    price: "From 15,000 ETB",
    delivery: "1–2 weeks",
    desc: "Everything you need to get online and start receiving customer inquiries.",
    features: ["Simple business website", "Contact form", "WhatsApp button integration", "Mobile responsive design", "Basic SEO setup", "1 round of revisions"],
    highlighted: false,
  },
  {
    name: "Growth",
    tagline: "Best for growing businesses",
    price: "From 35,000 ETB",
    delivery: "2–3 weeks",
    desc: "A full digital system that handles bookings, inquiries, and automation in one place.",
    features: ["Everything in Starter", "Booking or appointment form", "Inquiry tracking dashboard", "WhatsApp automation", "Admin management panel", "Basic reporting", "Staff training", "30-day support"],
    highlighted: true,
  },
  {
    name: "Premium",
    tagline: "Best for larger or complex businesses",
    price: "Custom quote",
    delivery: "3–6 weeks",
    desc: "Full custom software — CRM, inventory, AI tools, or advanced automation built to your exact needs.",
    features: ["Everything in Growth", "Custom software development", "CRM and customer tracking", "Inventory management", "Advanced automation", "Custom AI tools", "Multi-user access", "Ongoing support plan"],
    highlighted: false,
  },
];

const faqs = [
  { q: "How does payment work?", a: "We take 50% upfront to start the project and 50% after delivery. Monthly support plans are billed separately." },
  { q: "What if I don't know which package I need?", a: "Book a free discovery call. We'll ask about your business and suggest the right fit — no pressure." },
  { q: "Can I start with Starter and upgrade later?", a: "Yes. We build everything to be expandable. You can add features as your business grows." },
  { q: "Do you offer monthly support?", a: "Yes. We offer monthly support plans for updates, fixes, and improvements after your project is delivered." },
  { q: "Are these prices fixed?", a: "They are starting prices. The final quote depends on your specific needs. We'll give you a clear number before any work starts." },
];

export default function PricingPage() {
  return (
    <div className="bg-[#080808] min-h-screen">

      {/* Header */}
      <section className="pt-36 pb-20 px-5 sm:px-8 border-b border-white/[0.05]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-4">Transparent pricing</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Pricing</h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
            Simple packages based on your business needs. No hidden fees. No surprises.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border p-7 flex flex-col ${
                  pkg.highlighted
                    ? "bg-white/[0.05] border-white/20"
                    : "bg-white/[0.02] border-white/[0.06]"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <div className="mb-5">
                  <h2 className="text-white font-bold text-xl mb-1">{pkg.name}</h2>
                  <p className="text-white/30 text-xs mb-4">{pkg.tagline}</p>
                  <p className="text-white text-lg font-bold">{pkg.price}</p>
                  <p className="text-white/25 text-xs mt-1">⏱ {pkg.delivery}</p>
                </div>
                <p className="text-white/35 text-xs leading-relaxed mb-5 border-t border-white/[0.07] pt-5">{pkg.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs text-white/50">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${pkg.highlighted ? "text-white/60" : "text-white/25"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl transition-all ${
                    pkg.highlighted
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-white/[0.05] border border-white/[0.10] text-white/70 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  Get started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8"><div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" /></div>

      {/* Payment model */}
      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-8 text-center">Payment model</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: "💳", label: "50% upfront", desc: "Paid before work starts" },
              { icon: "✅", label: "50% on delivery", desc: "Paid when you approve the result" },
              { icon: "🔧", label: "Monthly support", desc: "Optional ongoing maintenance" },
            ].map((item) => (
              <div key={item.label} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
                <div className="text-2xl mb-3 opacity-70">{item.icon}</div>
                <p className="text-white/70 font-semibold text-sm mb-1">{item.label}</p>
                <p className="text-white/30 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8"><div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" /></div>

      {/* FAQ */}
      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8 text-center">Common questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5">
                <h3 className="text-white/70 font-semibold text-sm mb-2">{faq.q}</h3>
                <p className="text-white/35 text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8"><div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" /></div>

      {/* CTA */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Tell us your budget — we&apos;ll suggest the best package.</h2>
          <p className="text-white/30 text-sm mb-8">No commitment required. Just a quick conversation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-all text-sm">
            Book a Free Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
