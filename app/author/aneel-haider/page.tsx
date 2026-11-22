import type { Metadata } from "next";
import Link from "next/link";
import { PersonJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Aneel Haider, Founder & Editor of ShirtsMeer",
  description:
    "Meet Aneel Haider, founder and editor of ShirtsMeer, covering men's clothing guides, color combinations and practical outfit advice.",
  alternates: {
    canonical: "https://shirtsmeer.com/author/aneel-haider",
  },
  openGraph: {
    type: "profile",
    url: "https://shirtsmeer.com/author/aneel-haider",
    title: "Aneel Haider, Founder & Editor of ShirtsMeer",
    description:
      "Meet Aneel Haider, founder and editor of ShirtsMeer, a men's style publication.",
  },
};

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/aneelhaider2/" },
  { label: "Facebook", href: "https://www.facebook.com/share/1KbYNNF1sQ/" },
  { label: "X", href: "https://x.com/Aneel7157791" },
  { label: "TikTok", href: "https://www.tiktok.com/@aneelhaider014" },
];

export default function AneelHaiderAuthorPage() {
  return (
    <>
      <PersonJsonLd />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Author</span>
        </nav>

        <header className="border-b border-slate-200 pb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
            ShirtsMeer Editorial
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Aneel Haider
          </h1>
          <p className="mt-3 text-lg font-semibold text-slate-700">
            Founder &amp; Editor of ShirtsMeer
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Aneel Haider is the founder and editor of ShirtsMeer, an independent
            men's style publication focused on practical clothing guidance,
            shirt-and-trouser color combinations, and everyday outfit decisions.
          </p>
        </header>

        <section className="py-8">
          <h2 className="text-xl font-bold text-slate-900">Editorial focus</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            ShirtsMeer aims to make men's style easier to apply. Its guides explain
            color coordination, wardrobe basics, shirt fabrics, fit, and useful
            clothing choices in clear, practical language.
          </p>
          <p className="mt-3 leading-relaxed text-slate-700">
            The editorial approach prioritizes understandable explanations and
            useful outfit examples over trend-driven language.
          </p>
          <Link
            href="/blog"
            className="mt-5 inline-flex font-semibold text-blue-700 hover:underline"
          >
            Browse ShirtsMeer guides
          </Link>
        </section>

        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-xl font-bold text-slate-900">Connect with Aneel</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((profile) => (
              <li key={profile.label}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-700"
                >
                  {profile.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
