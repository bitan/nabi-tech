import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = buildMetadata({
  title: "NabiTech — Digital Tools for Local Businesses in Ethiopia",
  description:
    "NabiTech helps hotels, clinics, pharmacies, schools, and trading businesses in Ethiopia save time and manage work better with websites, automation, booking systems, and customer tools.",
});

export default function HomePage() {
  return <HomeClient />;
}
