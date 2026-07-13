"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const schema = z.object({
  name:         z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().min(1, "Business name is required"),
  phone:        z.string().min(7, "Enter a valid phone number"),
  email:        z.string().email("Enter a valid email address").optional().or(z.literal("")),
  businessType: z.string().min(1, "Select a business type"),
  problem:      z.string().min(10, "Please describe your problem (at least 10 characters)"),
  budget:       z.string().optional(),
  startDate:    z.string().optional(),
  honeypot:     z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

const businessTypes = [
  "Hotel / Guest House",
  "Clinic / Hospital",
  "Pharmacy",
  "School / College",
  "Import / Export",
  "Retail Shop",
  "Restaurant / Cafe",
  "Other",
];

const budgetRanges = [
  "Under 15,000 ETB",
  "15,000 - 35,000 ETB",
  "35,000 - 80,000 ETB",
  "80,000+ ETB",
  "Not sure yet",
];

const inputCls = (error?: boolean) =>
  `w-full bg-black/40 border ${error ? "border-red-500/50 focus:border-red-500/70" : "border-white/[0.08] focus:border-white/20"} text-white text-sm rounded-xl px-4 py-3 placeholder:text-white/20 focus:outline-none focus:ring-1 ${error ? "focus:ring-red-500/20" : "focus:ring-white/10"} transition-all`;

const labelCls = "block text-white/30 text-xs font-medium mb-1.5 uppercase tracking-wide";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="flex items-center gap-1.5 mt-1.5 text-red-400 text-xs">
      <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setServerError(body.error ?? "Something went wrong. Please try again.");
        return;
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    }
  }

  if (isSubmitSuccessful && !serverError) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[400px]"
      >
        <CheckCircle2 className="w-12 h-12 text-green-400 mb-5" aria-hidden="true" />
        <h3 className="text-white font-bold text-lg mb-2">Message received!</h3>
        <p className="text-white/30 text-sm max-w-xs leading-relaxed">
          We&apos;ll review your message and get back to you within a few hours.
          If it&apos;s urgent, WhatsApp us directly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-7 sm:p-8">
      <h2 className="text-white/80 font-bold text-base mb-6">Send us a message</h2>

      {serverError && (
        <div role="alert" className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl mb-5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-label="Contact form">
        {/* Honeypot — hidden from real users, visible to bots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="honeypot">Leave this field empty</label>
          <input id="honeypot" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={labelCls}>Your name *</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Full name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={inputCls(!!errors.name)}
              {...register("name")}
            />
            <div id="name-error"><FieldError message={errors.name?.message} /></div>
          </div>
          <div>
            <label htmlFor="businessName" className={labelCls}>Business name *</label>
            <input
              id="businessName"
              type="text"
              autoComplete="organization"
              placeholder="Your business"
              aria-invalid={!!errors.businessName}
              aria-describedby={errors.businessName ? "businessName-error" : undefined}
              className={inputCls(!!errors.businessName)}
              {...register("businessName")}
            />
            <div id="businessName-error"><FieldError message={errors.businessName?.message} /></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className={labelCls}>Phone number *</label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+251..."
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={inputCls(!!errors.phone)}
              {...register("phone")}
            />
            <div id="phone-error"><FieldError message={errors.phone?.message} /></div>
          </div>
          <div>
            <label htmlFor="email" className={labelCls}>Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputCls(!!errors.email)}
              {...register("email")}
            />
            <div id="email-error"><FieldError message={errors.email?.message} /></div>
          </div>
        </div>

        <div>
          <label htmlFor="businessType" className={labelCls}>Business type *</label>
          <select
            id="businessType"
            aria-invalid={!!errors.businessType}
            aria-describedby={errors.businessType ? "businessType-error" : undefined}
            className={inputCls(!!errors.businessType) + " cursor-pointer"}
            {...register("businessType")}
            defaultValue=""
          >
            <option value="" disabled>Select your business type</option>
            {businessTypes.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
          <div id="businessType-error"><FieldError message={errors.businessType?.message} /></div>
        </div>

        <div>
          <label htmlFor="problem" className={labelCls}>What problem do you want to solve? *</label>
          <textarea
            id="problem"
            rows={4}
            placeholder="Describe your main challenge or what you need help with..."
            aria-invalid={!!errors.problem}
            aria-describedby={errors.problem ? "problem-error" : undefined}
            className={inputCls(!!errors.problem) + " resize-none"}
            {...register("problem")}
          />
          <div id="problem-error"><FieldError message={errors.problem?.message} /></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="budget" className={labelCls}>Budget range</label>
            <select
              id="budget"
              className={inputCls() + " cursor-pointer"}
              defaultValue=""
              {...register("budget")}
            >
              <option value="" disabled>Select budget range</option>
              {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="startDate" className={labelCls}>Preferred start date</label>
            <input
              id="startDate"
              type="date"
              className={inputCls() + " cursor-pointer"}
              {...register("startDate")}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-3.5 rounded-xl hover:bg-white/90 active:scale-[0.98] transition-all text-sm mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send Message <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
