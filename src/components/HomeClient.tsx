"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { PixelHero } from "@/components/ui/pixel-perfect-hero";
import { BlurFade } from "@/components/ui/blur-fade";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { CountUp } from "@/components/ui/count-up";
import { DotPattern } from "@/components/ui/dot-pattern";
import { LoopingWords } from "@/components/ui/looping-words";

const services = [
  { icon: "🌐", title: "Business Websites",        desc: "Clean, mobile-friendly websites that help customers find you and contact you easily." },
  { icon: "💬", title: "WhatsApp Automation",      desc: "Quick replies, inquiry handling, and customer communication flows." },
  { icon: "📅", title: "Booking Systems",           desc: "Simple forms and dashboards for hotels, clinics, salons, and schools." },
  { icon: "👥", title: "CRM & Customer Tracking",  desc: "Track leads, inquiries, and follow-ups in one place." },
  { icon: "📦", title: "Inventory Systems",         desc: "Basic stock tracking for pharmacies, shops, and trading businesses." },
  { icon: "⚙️", title: "Simple Business Software", desc: "Purpose-built tools designed around your specific workflow." },
  { icon: "🤖", title: "Custom AI Tools",           desc: "Practical automation and AI tools that save time on repetitive tasks." },
];

const whyUs = [
  "Built for local business needs",
  "Affordable for growing companies",
  "Fast to launch",
  "Clear communication",
  "Simple solutions that work",
];

const stats = [
  { value: 5,   suffix: "+",       label: "Industries served" },
  { value: 50,  suffix: "%",       label: "Time saved on average" },
  { value: 1,   suffix: "-4 wks",  label: "Typical delivery" },
  { value: 100, suffix: "%",       label: "Built for Ethiopia" },
];

const demos = [
  { icon: "🏨", tag: "Hospitality", title: "Hotel Booking Demo",      desc: "A booking and guest inquiry system for small hotels." },
  { icon: "🏥", tag: "Healthcare",  title: "Clinic Appointment Demo", desc: "An appointment and patient inquiry system for private clinics." },
  { icon: "💊", tag: "Pharmacy",    title: "Pharmacy Order Demo",      desc: "A product inquiry and order system for pharmacies." },
  { icon: "🎓", tag: "Education",   title: "School Admissions Demo",   desc: "An admissions and parent communication system for schools." },
  { icon: "🚢", tag: "Trading",     title: "Import/Export CRM Demo",   desc: "A lead tracking and client management system for trading businesses." },
];

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8" aria-hidden="true">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
    </div>
  );
}

export default function HomeClient() {
  return (
    <>
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

      {/* Trust strip */}
      <section aria-label="What we help with" className="relative bg-[#080808] py-14 px-5 sm:px-8 overflow-hidden">
        <DotPattern className="absolute text-white/[0.035] [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_75%)]" />
        <BlurFade delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/25 text-xs uppercase tracking-[0.2em] font-medium mb-5">
              We build practical systems for businesses that want
            </p>
            <div className="flex flex-wrap justify-center gap-3" role="list">
              {["Better communication", "Smoother operations", "More customers"].map((t, i) => (
                <BlurFade key={t} delay={0.15 + i * 0.08}>
                  <span role="listitem" className="border border-white/[0.08] text-white/50 text-sm px-4 py-2 rounded-full bg-white/[0.02]">
                    {t}
                  </span>
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      <Divider />

      {/* Stats */}
      <section aria-label="Key statistics" className="relative bg-[#080808] py-16 px-5 sm:px-8 overflow-hidden">
        <DotPattern className="absolute text-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_80%)]" />
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <BlurFade key={s.label} delay={0.1 + i * 0.1}>
              <SpotlightCard className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center">
                <p className="text-white text-3xl font-bold mb-1 tabular-nums" aria-live="polite">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="text-white/30 text-xs leading-snug">{s.label}</p>
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>
      </section>

      <Divider />

      {/* Services */}
      <section aria-labelledby="services-heading" className="relative bg-[#080808] py-24 px-5 sm:px-8 overflow-hidden">
        <DotPattern className="absolute text-white/[0.025] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white_40%,transparent_100%)]" />
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.05}>
            <div className="mb-14">
              <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-3">What we build</p>
              <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-white leading-tight flex flex-wrap items-baseline gap-x-3 gap-y-1">
                We build{" "}
                <span className="text-white/50 inline-block min-w-[260px] sm:min-w-[320px]">
                  <LoopingWords
                    words={["Websites.", "Automation.", "Booking Systems.", "CRM Tools.", "AI Tools."]}
                    hold={2}
                    className="text-white"
                  />
                </span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {services.map((s, i) => (
              <BlurFade key={s.title} delay={0.08 + i * 0.07}>
                <SpotlightCard className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-colors duration-300 h-full">
                  <div className="text-2xl mb-4 opacity-80" aria-hidden="true">{s.icon}</div>
                  <h3 className="text-white/90 font-semibold text-sm mb-2 group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-white/30 text-xs leading-relaxed">{s.desc}</p>
                </SpotlightCard>
              </BlurFade>
            ))}
            <BlurFade delay={0.08 + services.length * 0.07}>
              <SpotlightCard className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between h-full">
                <p className="text-white/40 text-xs leading-relaxed mb-6">Not sure which service fits your business?</p>
                <Link href="/services" className="inline-flex items-center gap-1.5 text-white text-xs font-medium hover:gap-3 transition-all duration-200">
                  See all services <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </SpotlightCard>
            </BlurFade>
          </div>
        </div>
      </section>

      <Divider />

      {/* Why Nabi Tech */}
      <section aria-labelledby="why-heading" className="relative bg-[#080808] py-24 px-5 sm:px-8 overflow-hidden">
        <DotPattern className="absolute text-white/[0.025] [mask-image:radial-gradient(ellipse_at_right,white_20%,transparent_70%)]" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <BlurFade delay={0.05}>
            <div>
              <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-3">Why choose us</p>
              <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">Why Nabi Tech</h2>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                We know local business. We speak the language, understand the challenges, and build systems that actually get used.
              </p>
            </div>
          </BlurFade>
          <ul className="space-y-3">
            {whyUs.map((item, i) => (
              <BlurFade key={item} delay={0.1 + i * 0.09}>
                <SpotlightCard className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.06] rounded-xl px-5 py-4 hover:border-white/[0.10] transition-colors">
                  <span className="text-white/20 font-mono text-xs w-5 shrink-0" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <CheckCircle2 className="w-4 h-4 text-white/30 shrink-0" aria-hidden="true" />
                  <span className="text-white/70 text-sm">{item}</span>
                </SpotlightCard>
              </BlurFade>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* Demo Previews */}
      <section aria-labelledby="demos-heading" className="relative bg-[#080808] py-24 px-5 sm:px-8 overflow-hidden">
        <DotPattern className="absolute text-white/[0.025] [mask-image:radial-gradient(ellipse_at_left,white_20%,transparent_70%)]" />
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.05}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-3">See it in action</p>
                <h2 id="demos-heading" className="text-3xl sm:text-4xl font-bold text-white leading-tight">Demo Projects</h2>
              </div>
              <Link href="/demos" className="inline-flex items-center gap-1.5 text-white/40 text-sm hover:text-white transition-colors shrink-0">
                View all demos <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {demos.slice(0, 3).map((d, i) => (
              <BlurFade key={d.title} delay={0.1 + i * 0.1}>
                <SpotlightCard className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-colors duration-300 h-full flex flex-col">
                  <div className="h-36 bg-[#0d0d0d] flex flex-col items-center justify-center gap-3 border-b border-white/[0.05]" aria-hidden="true">
                    <div className="text-3xl opacity-50">{d.icon}</div>
                    <div className="w-24 space-y-1.5">
                      <div className="h-1 rounded-full bg-white/[0.08] w-full" />
                      <div className="h-1 rounded-full bg-white/[0.05] w-3/4" />
                      <div className="h-1 rounded-full bg-white/[0.04] w-1/2" />
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <p className="text-white/25 text-[10px] uppercase tracking-widest font-medium mb-1">{d.tag}</p>
                    <h3 className="text-white/80 font-semibold text-sm mb-1.5 group-hover:text-white transition-colors">{d.title}</h3>
                    <p className="text-white/30 text-xs leading-relaxed">{d.desc}</p>
                  </div>
                </SpotlightCard>
              </BlurFade>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {demos.slice(3).map((d, i) => (
              <BlurFade key={d.title} delay={0.3 + i * 0.1}>
                <SpotlightCard className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl px-5 py-4 hover:border-white/[0.10] transition-colors group">
                  <span className="text-2xl opacity-50" aria-hidden="true">{d.icon}</span>
                  <div>
                    <p className="text-white/25 text-[10px] uppercase tracking-widest font-medium">{d.tag}</p>
                    <p className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{d.title}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/15 ml-auto group-hover:text-white/40 transition-colors" aria-hidden="true" />
                </SpotlightCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA Banner */}
      <section aria-labelledby="cta-heading" className="relative bg-[#080808] py-24 px-5 sm:px-8 overflow-hidden">
        <DotPattern className="absolute text-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_70%)]" />
        <div className="max-w-4xl mx-auto">
          <BlurFade delay={0.05}>
            <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden px-8 sm:px-16 py-16 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />
              <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-4 relative z-10">Ready to start?</p>
              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3 relative z-10 leading-tight">
                Need a digital system<br className="hidden sm:block" /> for your business?
              </h2>
              <p className="text-white/40 text-base mb-10 relative z-10">Let&apos;s talk.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Book a Free Discovery Call <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link href="/demos" className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" aria-hidden="true" /> View demo projects
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}


