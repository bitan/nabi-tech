import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name:         z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().min(1, "Business name is required"),
  phone:        z.string().min(7, "Enter a valid phone number"),
  email:        z.string().email("Enter a valid email address").optional().or(z.literal("")),
  businessType: z.string().min(1, "Select a business type"),
  problem:      z.string().min(10, "Please describe your problem in at least 10 characters"),
  budget:       z.string().optional(),
  startDate:    z.string().optional(),
  honeypot:     z.string().max(0, "Bot detected").optional(),
});

// Simple in-memory rate limiting (per IP, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;       // max submissions
const WINDOW_MS  = 60_000;  // per 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: result.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { honeypot, ...data } = result.data;
  if (honeypot) {
    // Silently succeed for bots
    return NextResponse.json({ success: true });
  }

  // -----------------------------------------------------------------
  // In production: send an email via Resend / Nodemailer, or save to DB
  // Example (Resend):
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "no-reply@nabitech.et",
  //     to: "hello@nabitech.et",
  //     subject: `New inquiry from ${data.name} — ${data.businessName}`,
  //     html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
  //   });
  //
  // For now we log to server console (visible in `npm run dev` terminal)
  // -----------------------------------------------------------------
  console.log("[NabiTech Contact]", new Date().toISOString(), data);

  return NextResponse.json({ success: true });
}
