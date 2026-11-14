import React from "react";

export const FOUNDER_SOCIAL_PROFILES = [
  "https://www.instagram.com/aneelhaider2/",
  "https://x.com/Aneel7157791",
  "https://www.tiktok.com/@aneelhaider014",
];

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aneel Haider",
    url: "https://shirtsmeer.com/author/aneel-haider",
    jobTitle: "Founder & Editor",
    worksFor: {
      "@type": "Organization",
      name: "ShirtsMeer",
      url: "https://shirtsmeer.com",
    },
    sameAs: FOUNDER_SOCIAL_PROFILES,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd({
  name = "ShirtsMeer",
  url = "https://shirtsmeer.com",
  logo = "https://shirtsmeer.com/images/shirtsmeer-logo.webp",
  description = "A technical, research-backed men's style and shirt-pants color coordination publication.",
}: {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    // Add the official Pinterest profile here once its direct profile URL is available.
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: "Aneel Haider",
      url: "https://shirtsmeer.com/author/aneel-haider",
      sameAs: FOUNDER_SOCIAL_PROFILES,
    },
    publisher: {
      "@type": "Organization",
      name: "ShirtsMeer",
      logo: {
        "@type": "ImageObject",
        url: "https://shirtsmeer.com/images/shirtsmeer-logo.webp",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Default export jo layout.tsx ke <JsonLd data={...} /> ko 100% support karega
export default function JsonLd({ data }: { data?: any } = {}) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
