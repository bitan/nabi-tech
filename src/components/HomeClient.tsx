"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PixelHero } from "@/components/ui/pixel-perfect-hero";
import { BlurFade } from "@/components/ui/blur-fade";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { CountUp } from "@/components/ui/count-up";
import { LoopingWords } from "@/components/ui/looping-words";

const services = [
  { num: "01", title: "Business Websites",       desc: "Clean, mobile-friendly websites that help customers find you and contact you." },
  { num: "02", title: "WhatsApp Automation",     desc: "Quick replies, inquiry handling, and customer communication flows." },
  { num: "03", title: "Booking Systems",          desc: "Simple forms and dashboards for hotels, clinics, salons, and schools." },
  { num: "04", title: "CRM & Customer Tracking", desc: "Track leads, inquiries, and follow-ups in one place." },
  { num: "05", title: "Inventory Systems",        desc: "Basic stock tracking for pharmacies, shops, and trading businesses." },
  { num: "06", title: "Business Software",        desc: "Purpose-built tools designed around your specific workflow." },
  { num: "07", title: "Custom AI Tools",          desc: "Practical automation tools that save time on repetitive tasks." },
];

const whyUs = [
  "Built for local business needs",
  "Affordable for growing companies",
  "Fast to launch",
  "Clear communication",
  "Simple solutions that work",
];

const stats = [
  { value: 5,   suffix: "+",  label: "Industries" },
  { value: 50,  suffix: "%",  label: "Time saved" },
  { value: 4,   suffix: " wk", label: "Avg. delivery" },
  { value: 100, suffix: "%",  label: "Ethiopia-built" },
];

const demos = [
  { num: "01", tag: "Hospitality", title: "Hotel Booking",       desc: "Booking and guest inquiry system for small hotels." },
  { num: "02", tag: "Healthcare",  title: "Clinic Appointment",  desc: "Appointment and patient inquiry for private clinics." },
  { num: "03", tag: "Pharmacy",    title: "Pharmacy Orders",      desc: "Product inquiry and order system for pharmacies." },
  { num: "04", tag: "Education",   title: "School Admissions",    desc: "Admissions and parent communication for schools." },
  { num: "05", tag: "Trading",     title: "Import/Export CRM",    desc: "Lead tracking for trading businesses." },
];

export default function HomeClient() {
  return (
    <>
      {/* HERO */}
      <PixelHero
        word1="Nabi"
        word2="Tech."
        description="Simple digital tools for local businesses in Ethiopia. We help hotels, clinics, pharmacies, schools, and trading businesses save time, respond faster, and manage work better."
        primaryCta="View Demo Projects"
        primaryCtaMobile="Demos"
        secondaryCta="Book a Free Discovery Call"
        secondaryCtaMobile="Book a Call"
        githubUrl="/contact"
      />

      {/* MARQUEE TRUST STRIP */}
      <section aria-label="Industries served" className="relative border-y border-white/[0.07] py-4 overflow-hidden bg-black">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative flex w-max gap-16 animate-marquee items-center">
          {["Hotels", "Clinics", "Pharmacies", "Schools", "Import & Export", "Retail", "Restaurants", "Trading"].concat(
            ["Hotels", "Clinics", "Pharmacies", "Schools", "Import & Export", "Retail", "Restaurants", "Trading"]
          ).map((item, i) => (
            <span key={i} className="label-sm text-white/25 whitespace-nowrap flex items-center gap-4">
              {item}
              <span className="w-1 h-1 rounded-full bg-white/20 inline-block" aria-hidden="true" />
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}} .animate-marquee{animation:marquee 30s linear infinite;}`}</style>
      </section>

      {/* STATS */}
      <section aria-label="Key statistics" className="relative bg-black border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.07]">
          {stats.map((s, i) => (
            <BlurFade key={s.label} delay={0.05 + i * 0.08}>
              <div className="p-8 sm:p-10 text-center">
                <p className="text-white font-bold tabular-nums mb-1.5" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.04em", lineHeight: 1 }} aria-live="polite">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="label-sm text-white/25">{s.label}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section aria-labelledby="services-heading" className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <BlurFade delay={0.05}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.07]">
              <div>
                <p className="label-sm text-white/25 mb-4">What we build</p>
                <h2 id="services-heading" className="text-white font-bold flex flex-wrap items-baseline gap-x-4" style={{ fontSize: "clamp(2.2rem,5vw,4.5rem)", letterSpacing: "-0.03em", lineHeight: "0.95" }}>
                  We build
                  <span className="text-white/25">
                    <LoopingWords
                      words={["Websites.", "Automation.", "Booking.", "CRM.", "AI Tools."]}
                      hold={2}
                      className="text-white"
                    />
                  </span>
                </h2>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 label-sm text-white/40 hover:text-white transition-colors shrink-0 border-b border-white/20 hover:border-white pb-0.5">
                All services <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/[0.06]">
            {services.map((s, i) => (
              <BlurFade key={s.title} delay={0.06 + i * 0.05}>
                <SpotlightCard className="bg-black p-7 h-full flex flex-col gap-4 group hover:bg-[#0a0a0a] transition-colors">
                  <span className="label-sm text-white/20">{s.num}</span>
                  <h3 className="text-white/85 font-semibold text-sm leading-tight group-hover:text-white transition-colors" style={{ letterSpacing: "-0.01em" }}>
                    {s.title}
                  </h3>
                  <p className="text-white/30 text-xs leading-relaxed flex-1">{s.desc}</p>
                </SpotlightCard>
              </BlurFade>
            ))}
            {/* Extra CTA tile */}
            <BlurFade delay={0.06 + services.length * 0.05}>
              <SpotlightCard className="bg-black p-7 h-full flex flex-col justify-between gap-6 border-l border-t border-white/[0.06] sm:border-l-0">
                <p className="text-white/25 text-xs leading-relaxed">Not sure which service fits?</p>
                <Link href="/contact" className="inline-flex items-center gap-2 label-sm text-white hover:gap-4 transition-all duration-200 border-b border-white/20 hover:border-white pb-0.5 w-fit">
                  Talk to us <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </SpotlightCard>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* WHY NABI TECH */}
      <section aria-labelledby="why-heading" className="relative bg-black border-t border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden="true" />
        {/* Glow orb */}
        <div className="glow-orb w-[500px] h-[500px] right-[-100px] top-[-100px] opacity-60" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <BlurFade delay={0.05}>
              <div>
                <p className="label-sm text-white/25 mb-6">Why choose us</p>
                <h2 id="why-heading" className="text-white font-bold leading-none mb-8" style={{ fontSize: "clamp(2.2rem,5vw,4.5rem)", letterSpacing: "-0.03em", lineHeight: "0.95" }}>
                  We know<br />local business.
                </h2>
                <p className="text-white/35 text-sm leading-relaxed max-w-xs">
                  We speak the language, understand the challenges, and build systems that actually get used — not just delivered and forgotten.
                </p>
              </div>
            </BlurFade>
            <ul className="space-y-0 divide-y divide-white/[0.07]">
              {whyUs.map((item, i) => (
                <BlurFade key={item} delay={0.08 + i * 0.07}>
                  <li className="flex items-center gap-6 py-5 group">
                    <span className="label-sm text-white/15 w-6 shrink-0" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-white/50 text-sm font-medium group-hover:text-white transition-colors" style={{ letterSpacing: "-0.01em" }}>
                      {item}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/10 ml-auto group-hover:text-white/40 transition-colors" aria-hidden="true" />
                  </li>
                </BlurFade>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DEMO PROJECTS */}
      <section aria-labelledby="demos-heading" className="relative bg-black border-t border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <BlurFade delay={0.05}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.07]">
              <div>
                <p className="label-sm text-white/25 mb-4">See it in action</p>
                <h2 id="demos-heading" className="text-white font-bold" style={{ fontSize: "clamp(2.2rem,5vw,4.5rem)", letterSpacing: "-0.03em", lineHeight: "0.95" }}>
                  Demo Projects
                </h2>
              </div>
              <Link href="/demos" className="inline-flex items-center gap-2 label-sm text-white/40 hover:text-white transition-colors shrink-0 border-b border-white/20 hover:border-white pb-0.5">
                View all <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
            {demos.map((d, i) => (
              <BlurFade key={d.title} delay={0.08 + i * 0.07}>
                <SpotlightCard className="bg-black p-7 flex flex-col gap-4 group hover:bg-[#0a0a0a] transition-colors h-full">
                  {/* Mockup lines */}
                  <div className="h-28 border border-white/[0.07] flex flex-col justify-end p-4 gap-1.5" aria-hidden="true">
                    <div className="h-[2px] bg-white/[0.12] w-full rounded-full" />
                    <div className="h-[2px] bg-white/[0.07] w-4/5 rounded-full" />
                    <div className="h-[2px] bg-white/[0.04] w-3/5 rounded-full" />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="label-sm text-white/20 mb-1.5">{d.tag}</p>
                      <h3 className="text-white/80 font-semibold text-sm group-hover:text-white transition-colors" style={{ letterSpacing: "-0.01em" }}>
                        {d.title}
                      </h3>
                    </div>
                    <span className="label-sm text-white/15 shrink-0">{d.num}</span>
                  </div>
                  <p className="text-white/25 text-xs leading-relaxed">{d.desc}</p>
                </SpotlightCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta-heading" className="relative bg-black border-t border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="glow-orb w-[700px] h-[700px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-36 text-center">
          <BlurFade delay={0.05}>
            <p className="label-sm text-white/25 mb-8">Ready to start?</p>
            <h2
              id="cta-heading"
              className="text-white font-bold mb-10 mx-auto"
              style={{ fontSize: "clamp(3rem,8vw,7rem)", letterSpacing: "-0.04em", lineHeight: "0.92", maxWidth: "14ch" }}
            >
              Need a digital system for your business?
            </h2>
            <p className="text-white/30 text-sm mb-12 uppercase tracking-[0.1em]">Let&apos;s talk.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black text-[11px] font-semibold uppercase tracking-[0.14em] px-8 py-4 hover:bg-white/90 active:scale-[0.98] transition-all"
              >
                Book a Free Discovery Call
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <Link
                href="/demos"
                className="inline-flex items-center gap-2 label-sm text-white/35 hover:text-white transition-colors border-b border-white/15 hover:border-white pb-0.5"
              >
                View demo projects
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
