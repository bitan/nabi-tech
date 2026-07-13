import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Demo Projects",
  description: "See sample systems built by NabiTech — hotel booking, clinic appointments, pharmacy orders, school admissions, and import/export CRM demos.",
  slug: "demos",
});

const demos = [
  {
    icon: "🏨", tag: "Hospitality", title: "Hotel Booking Demo",
    desc: "A booking and guest inquiry system for small hotels. Customers check availability and send booking requests directly.",
    problem: "Managing reservations through WhatsApp and phone leads to double-bookings and missed guests.",
    features: ["Room availability calendar", "Booking request form", "Guest inquiry system", "Admin booking dashboard", "WhatsApp confirmation"],
  },
  {
    icon: "🏥", tag: "Healthcare", title: "Clinic Appointment Demo",
    desc: "An appointment and patient inquiry system for private clinics. Patients book online and staff manage the schedule in one place.",
    problem: "Phone-only booking creates queues, missed appointments, and stressed reception staff.",
    features: ["Doctor availability calendar", "Patient appointment form", "Admin schedule view", "Appointment reminders", "Patient inquiry tracking"],
  },
  {
    icon: "💊", tag: "Pharmacy", title: "Pharmacy Order Demo",
    desc: "A product inquiry and order system for pharmacies. Customers ask about availability and place orders without calling.",
    problem: "Staff answering repetitive availability questions on WhatsApp instead of serving in-store customers.",
    features: ["Product availability lookup", "Order request form", "Stock status display", "Admin order management", "WhatsApp order alerts"],
  },
  {
    icon: "🎓", tag: "Education", title: "School Admissions Demo",
    desc: "An admissions and parent communication system for private schools. Parents apply online, staff track progress in one dashboard.",
    problem: "Paper-based admissions create delays, lost forms, and poor communication with parents.",
    features: ["Online admissions form", "Application status tracker", "Parent portal", "Admin review dashboard", "Automated status emails"],
  },
  {
    icon: "🚢", tag: "Trading", title: "Import/Export CRM Demo",
    desc: "A lead tracking and client management system for trading businesses. Track every inquiry, follow up on time, close more deals.",
    problem: "Leads tracked in notebooks and group chats — resulting in lost opportunities.",
    features: ["Lead capture and tracking", "Deal pipeline view", "Client history and notes", "Follow-up reminders", "Team collaboration"],
  },
];

const qualities = ["Clean, professional design", "Mobile-friendly layout", "Simple workflow", "Practical business use case", "Easy admin management"];

export default function DemosPage() {
  return (
    <div className="bg-[#080808] min-h-screen">
      <section className="pt-36 pb-20 px-5 sm:px-8 border-b border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <BlurFade delay={0.05}>
            <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-4">See the work</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">Demo Projects</h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
              Sample systems built to show what Nabi Tech can do. Each demo is a working prototype for a real business type.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="py-8 px-5 sm:px-8 border-b border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/20 text-xs uppercase tracking-widest font-medium mb-4">Every demo includes</p>
          <div className="flex flex-wrap gap-2">
            {qualities.map((q, i) => (
              <BlurFade key={q} delay={0.05 + i * 0.06}>
                <span className="border border-white/[0.07] text-white/35 text-xs px-3 py-1.5 rounded-full">✓ {q}</span>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-5">
          {demos.map((d, i) => (
            <BlurFade key={d.title} delay={0.08 + i * 0.1}>
              <SpotlightCard className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.10] transition-colors group">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-[260px] shrink-0 bg-[#0a0a0a] flex flex-col items-center justify-center gap-4 min-h-[200px] border-b lg:border-b-0 lg:border-r border-white/[0.05] p-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center">
                      <span className="text-3xl opacity-60">{d.icon}</span>
                    </div>
                    <div className="text-center">
                      <p className="text-white/30 text-xs font-medium uppercase tracking-widest">{d.tag}</p>
                      <p className="text-white/15 text-xs mt-1">Demo {String(i + 1).padStart(2, "0")}</p>
                    </div>
                    <div className="w-28 space-y-1.5">
                      <div className="h-1 rounded-full bg-white/[0.07] w-full" />
                      <div className="h-1 rounded-full bg-white/[0.04] w-4/5" />
                      <div className="h-1 rounded-full bg-white/[0.03] w-3/5" />
                    </div>
                  </div>
                  <div className="flex-1 p-7 sm:p-8">
                    <h2 className="text-white/80 font-bold text-xl mb-2 group-hover:text-white transition-colors">{d.title}</h2>
                    <p className="text-white/40 text-sm leading-relaxed mb-5">{d.desc}</p>
                    <div className="bg-black/30 border border-white/[0.05] rounded-xl p-4 mb-5">
                      <p className="text-white/20 text-xs uppercase tracking-wider font-medium mb-1">Problem solved</p>
                      <p className="text-white/35 text-sm">{d.problem}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-white/20 text-xs uppercase tracking-wider font-medium mb-3">Key features</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {d.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-white/40">
                            <span className="w-1 h-1 rounded-full bg-white/25 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] text-white/60 text-xs font-medium px-4 py-2.5 rounded-xl hover:bg-white/[0.08] hover:text-white transition-all">
                      <ExternalLink className="w-3.5 h-3.5" /> Request this for my business
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8"><div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" /></div>

      <section className="py-20 px-5 sm:px-8">
        <BlurFade delay={0.05}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Want one of these for your business?</h2>
            <p className="text-white/30 text-sm mb-8">We can build a custom version in days. Let&apos;s talk about your needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-all text-sm">
              Book a Free Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
