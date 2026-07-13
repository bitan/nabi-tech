import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Our Services",
  description: "Websites, WhatsApp automation, booking systems, CRM, inventory, and custom software for local businesses in Ethiopia.",
  slug: "services",
});

const services = [
  {
    icon: "🌐", title: "Business Websites",
    who: "Hotels, clinics, schools, any business without an online presence",
    problem: "Customers can't find you or contact you online",
    desc: "Clean, mobile-friendly websites that help customers find you, learn about your services, and reach you directly.",
    features: ["Mobile responsive design", "WhatsApp / phone call button", "Services and contact page", "Google Maps integration", "Fast loading"],
  },
  {
    icon: "💬", title: "WhatsApp Automation",
    who: "Any business that gets inquiries on WhatsApp",
    problem: "Staff spending hours on repetitive messages",
    desc: "Automated responses for common inquiries, booking confirmations, and follow-ups — so your team can focus on real conversations.",
    features: ["Auto-reply to common questions", "Inquiry capture and routing", "Booking confirmations", "Reminder messages", "Business hours responses"],
  },
  {
    icon: "📅", title: "Booking & Appointment Systems",
    who: "Hotels, clinics, salons, schools",
    problem: "Managing bookings manually leads to double-bookings and missed reservations",
    desc: "Simple online forms and admin dashboards that let customers book and let you manage everything in one place.",
    features: ["Online booking form", "Admin dashboard", "Availability management", "Confirmation messages", "Cancellation handling"],
  },
  {
    icon: "👥", title: "CRM & Customer Tracking",
    who: "Trading businesses, import/export, service companies",
    problem: "Leads and follow-ups tracked in notebooks or group chats",
    desc: "A simple system to track every customer, lead, and inquiry — so nothing falls through the cracks.",
    features: ["Lead and contact database", "Follow-up reminders", "Status tracking", "Notes and history", "Team access"],
  },
  {
    icon: "📦", title: "Inventory Systems",
    who: "Pharmacies, shops, small trading businesses",
    problem: "Stock managed manually leads to shortages and over-ordering",
    desc: "Basic stock tracking that shows you what you have, what's running low, and what needs reordering.",
    features: ["Product catalog", "Stock level tracking", "Low-stock alerts", "Basic reporting", "Simple data entry"],
  },
  {
    icon: "⚙️", title: "Simple Business Software",
    who: "Any business with a unique process",
    problem: "Off-the-shelf software doesn't match how you work",
    desc: "Purpose-built tools designed around your specific workflow — from admissions management to invoice tracking.",
    features: ["Custom fields and forms", "Role-based access", "Process automation", "Reports and exports", "Training included"],
  },
  {
    icon: "🤖", title: "Custom AI Tools",
    who: "Forward-thinking businesses ready to automate",
    problem: "Repetitive tasks eating up staff time",
    desc: "Practical AI-powered tools that save time on document processing, customer responses, and data analysis.",
    features: ["Document analysis", "Smart auto-replies", "Data summarization", "Process automation", "Custom integrations"],
  },
];

const process = [
  { step: "01", title: "Discovery call", desc: "We learn about your business and what problems you want to solve." },
  { step: "02", title: "Planning and scope", desc: "We define exactly what gets built, the timeline, and the cost." },
  { step: "03", title: "Design and build", desc: "We build your system and share progress along the way." },
  { step: "04", title: "Testing and delivery", desc: "We test everything thoroughly before handing it over." },
  { step: "05", title: "Support and improvements", desc: "We are available for fixes, updates, and new features." },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#080808] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema("Business Digital Services", "Websites, WhatsApp automation, booking systems, CRM, inventory, and custom software for Ethiopian businesses.")
          ),
        }}
      />

      {/* Header */}
      <section className="pt-36 pb-20 px-5 sm:px-8 border-b border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-4">What we offer</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">Our Services</h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
            Practical digital tools built for the real challenges of local businesses in Ethiopia.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-4">
          {services.map((s, i) => (
            <div key={s.title} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-7 sm:p-8 hover:border-white/[0.10] transition-all group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="lg:w-2/5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl opacity-70">{s.icon}</span>
                    <div>
                      <p className="text-white/20 text-xs font-mono">0{i + 1}</p>
                      <h2 className="text-white/80 font-bold text-lg group-hover:text-white transition-colors">{s.title}</h2>
                    </div>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="space-y-1 text-xs text-white/25">
                    <p><span className="text-white/15">Best for: </span>{s.who}</p>
                    <p><span className="text-white/15">Solves: </span>{s.problem}</p>
                  </div>
                </div>
                <div className="lg:w-3/5 lg:pl-8 lg:border-l lg:border-white/[0.06]">
                  <p className="text-white/25 text-xs uppercase tracking-wider mb-3 font-medium">Includes</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/40">
                        <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8"><div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" /></div>

      {/* How we work */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-3">Our process</p>
          <h2 className="text-2xl font-bold text-white mb-12">How we work</h2>
          <div className="space-y-3">
            {process.map((p) => (
              <div key={p.step} className="flex items-start gap-5 bg-white/[0.02] border border-white/[0.06] rounded-xl px-5 py-4">
                <span className="text-white/20 font-mono text-sm shrink-0 w-8">{p.step}</span>
                <div>
                  <h3 className="text-white/70 font-semibold text-sm mb-0.5">{p.title}</h3>
                  <p className="text-white/30 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8"><div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" /></div>

      {/* CTA */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Want to know which service fits your business?</h2>
          <p className="text-white/30 text-sm mb-8">Book a discovery call — it&apos;s free and takes 20 minutes.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-all text-sm">
            Book a Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
