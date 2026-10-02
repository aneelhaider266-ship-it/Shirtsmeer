import React from "react";

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
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
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
    author: {
      "@type": "Organization",
      name: "ShirtsMeer Editorial Team",
      url: "https://shirtsmeer.com/about",
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
