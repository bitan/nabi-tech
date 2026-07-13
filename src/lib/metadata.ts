import type { Metadata } from "next";

const BASE_URL = "https://nabitech.et";

export const siteConfig = {
  name: "NabiTech",
  tagline: "Digital Tools for Local Businesses in Ethiopia",
  description:
    "NabiTech builds websites, WhatsApp automation, booking systems, CRM tools, and custom business software for local businesses in Dire Dawa, Ethiopia.",
  url: BASE_URL,
  locale: "en_ET",
  twitter: "@nabitech_et",
};

export function buildMetadata(override: Partial<Metadata> & { slug?: string } = {}): Metadata {
  const { slug, ...rest } = override;
  const url = slug ? `${BASE_URL}/${slug}` : BASE_URL;
  const title = rest.title ?? siteConfig.name;
  const description = (rest.description as string) ?? siteConfig.description;

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords: [
      "NabiTech",
      "Ethiopia business software",
      "Dire Dawa technology",
      "website design Ethiopia",
      "WhatsApp automation Ethiopia",
      "booking system Ethiopia",
      "CRM Ethiopia",
      "local business digital tools",
    ],
    authors: [{ name: "NabiTech", url: BASE_URL }],
    creator: "NabiTech",
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: typeof title === "string" ? title : siteConfig.name,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "NabiTech — Digital Tools for Local Businesses in Ethiopia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: typeof title === "string" ? title : siteConfig.name,
      description,
      creator: siteConfig.twitter,
      images: ["/og-image.png"],
    },
    ...rest,
  };
}
