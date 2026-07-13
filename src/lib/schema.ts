// JSON-LD structured data helpers

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NabiTech",
  url: "https://nabitech.et",
  logo: "https://nabitech.et/logo.png",
  description:
    "NabiTech builds websites, WhatsApp automation, booking systems, and custom business software for local businesses in Ethiopia.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dire Dawa",
    addressCountry: "ET",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Amharic"],
    email: "hello@nabitech.et",
  },
  areaServed: {
    "@type": "Country",
    name: "Ethiopia",
  },
  sameAs: [],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NabiTech",
  image: "https://nabitech.et/og-image.png",
  url: "https://nabitech.et",
  telephone: "+251-your-number",
  email: "hello@nabitech.et",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dire Dawa",
    addressLocality: "Dire Dawa",
    addressCountry: "ET",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.5931,
    longitude: 41.8661,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "ETB 15,000 – Custom",
};

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "NabiTech",
      url: "https://nabitech.et",
    },
    areaServed: { "@type": "Country", name: "Ethiopia" },
  };
}
