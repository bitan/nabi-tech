import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About NabiTech",
  description: "NabiTech is a small technology company based in Dire Dawa, Ethiopia, helping local businesses with practical, affordable digital tools.",
  slug: "about",
});

const values = [
  { icon: "🎯", title: "Focus on real problems", desc: "We only build what solves something specific. No bloat, no complexity for its own sake." },
  { icon: "🤝", title: "Clear communication", desc: "You always know what we are building, how long it takes, and what it costs." },
  { icon: "⚡", title: "Fast delivery", desc: "Most projects go live in days or weeks, not months." },
  { icon: "🌍", title: "Built for Ethiopia", desc: "We understand the local context — the languages, the business types, the constraints." },
];

const team = [
  { role: "Technical Lead", desc: "Builds the systems and handles delivery — from websites to custom automation and software." },
  { role: "Client Communication Lead", desc: "Speaks with clients, gathers requirements, and follows up to ensure everything runs smoothly." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#080808] min-h-screen">

      {/* Header */}
      <section className="pt-36 pb-20 px-5 sm:px-8 border-b border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-4">About us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">About Nabi Tech</h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
            A small technology service company based in Dire Dawa, Ethiopia. We help local businesses
            use simple digital tools to improve speed, organization, and customer experience.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14">
          <div className="lg:col-span-3 space-y-5">
            <h2 className="text-2xl font-bold text-white">Our story</h2>
            {[
              "We started Nabi Tech because many businesses still do important work manually. That means missed messages, slow bookings, weak follow-up, and extra stress for staff.",
              "Our goal is to make business easier with practical, affordable technology — tools that are actually used, not just installed and forgotten.",
              "We work with hotels, clinics, pharmacies, schools, and trading companies across Dire Dawa and Ethiopia, building systems that fit the way they actually work.",
            ].map((p, i) => (
              <p key={i} className="text-white/40 text-sm leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 space-y-4">
              <h3 className="text-white/70 font-semibold text-sm">NabiTech at a glance</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["📍", "Location", "Dire Dawa, Ethiopia"],
                  ["🎯", "Focus", "Local businesses"],
                  ["⚡", "Typical delivery", "1–4 weeks"],
                  ["💬", "Primary contact", "WhatsApp + Email"],
                ].map(([icon, label, value]) => (
                  <li key={String(label)} className="flex items-start gap-3">
                    <span className="opacity-60">{icon}</span>
                    <span>
                      <span className="text-white/25">{label}: </span>
                      <span className="text-white/60">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8"><div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" /></div>

      {/* Approach */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-3">How we think</p>
          <h2 className="text-2xl font-bold text-white mb-4">Our approach</h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-xl mb-12">
            We do not build complicated systems for the sake of it. We focus on tools that solve real
            problems, are easy to use, and make a visible difference from day one.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {values.map((v) => (
              <div key={v.title} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.04] transition-all">
                <div className="text-2xl mb-4 opacity-70">{v.icon}</div>
                <h3 className="text-white/80 font-semibold text-sm mb-2">{v.title}</h3>
                <p className="text-white/30 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8"><div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" /></div>

      {/* Team */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-3">The team</p>
          <h2 className="text-2xl font-bold text-white mb-10">Who we are</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map((t) => (
              <div key={t.role} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-4">
                  <span className="text-white/50 text-lg">👤</span>
                </div>
                <h3 className="text-white/80 font-semibold text-sm mb-2">{t.role}</h3>
                <p className="text-white/30 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8"><div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" /></div>

      {/* CTA */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-white/30 text-sm mb-8">Tell us about your business and we&apos;ll suggest the best approach.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-all text-sm">
            Book a Free Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
