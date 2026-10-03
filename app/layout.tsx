import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const GA_MEASUREMENT_ID = "G-5S01248LB4";

export const metadata: Metadata = {
  metadataBase: new URL("https://shirtsmeer.com"),
  title: {
    default: "ShirtsMeer | Men's Shirt & Pants Color Matching",
    template: "%s | ShirtsMeer",
  },
  description:
    "Master men's color combinations with expert shirt and pants styling guides. Explore verified contrast rules, color swatches, and shoe pairing charts.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shirtsmeer.com",
    siteName: "ShirtsMeer",
    title: "ShirtsMeer | Men's Shirt & Pants Color Matching",
    description:
      "Master men's color combinations with expert shirt and pants styling guides. Explore verified contrast rules, color swatches, and shoe pairing charts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShirtsMeer | Men's Shirt & Pants Color Matching",
    description:
      "Master men's color combinations with expert shirt and pants styling guides. Explore verified contrast rules, color swatches, and shoe pairing charts.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <OrganizationJsonLd
          name="ShirtsMeer"
          url="https://shirtsmeer.com"
          logo="https://shirtsmeer.com/images/shirtsmeer-logo.webp"
          description="A technical, research-backed men's style and shirt-pants color coordination publication."
        />
        {/* Google Analytics 4 (GA4) Tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
