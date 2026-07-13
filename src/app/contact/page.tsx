import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact NabiTech",
  description: "Get in touch with NabiTech. Book a free discovery call or send a message about your business needs in Ethiopia.",
  slug: "contact",
});

export default function ContactPage() {
  return (
    <div className="bg-[#080808] min-h-screen">

      {/* Header */}
      <section className="pt-36 pb-16 px-5 sm:px-8 border-b border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-4">Get in touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">Let&apos;s talk</h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl">
            Have a business problem you want to solve? Contact Nabi Tech.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left */}
          <div className="lg:col-span-2 space-y-7">
            <div>
              <h2 className="text-white/60 font-semibold text-sm mb-5 uppercase tracking-widest">Contact details</h2>
              <ul className="space-y-4">
                {[
                  { icon: "📍", label: "Location", value: "Dire Dawa, Ethiopia" },
                  { icon: "📱", label: "WhatsApp", value: "Chat with us", href: "https://wa.me/your-number" },
                  { icon: "✉️", label: "Email", value: "hello@nabitech.et", href: "mailto:hello@nabitech.et" },
                ].map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0 text-lg opacity-70">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-white/25 text-xs mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-white/60 text-sm hover:text-white transition-colors">{c.value}</a>
                      ) : (
                        <p className="text-white/60 text-sm">{c.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-5">
              <p className="text-white/60 font-semibold text-sm mb-2">Prefer WhatsApp?</p>
              <p className="text-white/30 text-xs mb-4 leading-relaxed">Send us a message directly. We respond the same day.</p>
              <a
                href="https://wa.me/your-number"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#20bd5a] transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/60 animate-pulse" />
              Typically respond within 2–4 hours
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
