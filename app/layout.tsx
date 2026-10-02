import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://shirtsmeer.com"),
  title: { absolute: "ShirtsMeer | Men's Shirt & Pants Color Matching" },
  description:
    "Men's styling guides and color matching charts for pairing dress shirts with grey, brown, navy, khaki and olive green pants and shoes.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ShirtsMeer",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ShirtsMeer",
      url: "https://shirtsmeer.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ShirtsMeer",
      url: "https://shirtsmeer.com",
    },
  ];

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white font-sans text-slate-900 antialiased">
        <JsonLd data={{ "@context": "https://schema.org", "@graph": siteSchema }} />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
