import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";
import ShutterIntro from "@/components/ShutterIntro";
import PageReveal from "@/components/PageReveal";
import { DotPattern } from "@/components/ui/dot-pattern";
import { buildMetadata } from "@/lib/metadata";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair  = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], style: ["normal", "italic"] });

export const metadata: Metadata = buildMetadata({
  title: {
    default: "NabiTech — Digital Tools for Local Businesses in Ethiopia",
    template: "%s | NabiTech",
  },
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#080808]">
        {/* Global dot pattern — sits behind everything */}
        <DotPattern className="fixed text-white/[0.12] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,white_40%,transparent_100%)]" cr={1.5} width={24} height={24} />
        <ShutterIntro />
        <Navbar />
        <PageReveal>
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </PageReveal>
        <Analytics />
      </body>
    </html>
  );
}
