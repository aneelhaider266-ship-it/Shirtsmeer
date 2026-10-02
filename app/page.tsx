import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { POSTS } from "@/lib/posts";
import ColorSwatch from "@/components/ColorSwatch";

export const metadata: Metadata = {
  title: { absolute: "Men's Shirt & Pants Color Matching Guide | ShirtsMeer" },
  description:
    "Master men's color combinations with clear shirt and pants guides. Explore contrast rules, color swatches and shoe pairing charts for every outfit.",
  alternates: { canonical: "https://shirtsmeer.com" },
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
      <section className="mx-auto mb-16 max-w-3xl text-center">
        <span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
          Menswear Color Matching
        </span>
        <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          The Practical Guide to Matching Men's Shirts and Pants
        </h1>
        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
          Stop guessing what to wear. ShirtsMeer gives you clear, easy color matching charts so you can
          pair dress shirts, chinos, trousers and leather shoes with confidence.
        </p>
      </section>

      <section className="mb-14 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="mb-2 text-lg font-bold text-slate-900">Five Core Trouser Colors</h2>
        <p className="mb-4 text-sm text-slate-600">
          Most wardrobes are built on these five trouser shades. Pick one below to see which shirts work
          best with it.
        </p>
        <div className="flex flex-wrap gap-2">
          <ColorSwatch colorName="Charcoal & Mid Grey" hex="#4B5563" role="Neutral Anchor" />
          <ColorSwatch colorName="Espresso Brown" hex="#3E2723" role="Rich Earth" />
          <ColorSwatch colorName="Midnight Navy" hex="#1B2A47" role="Formal Anchor" />
          <ColorSwatch colorName="Classic Khaki" hex="#C3B091" role="Casual Foundation" />
          <ColorSwatch colorName="Military Olive" hex="#556B2F" role="Modern Utility" />
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Our Styling Guides</h2>
          <Link href="/blog" className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
            Browse all guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-400 hover:shadow-md"
            >
              <div>
                <p className="mb-3 text-xs text-slate-500">{post.readTime}</p>
                <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-blue-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Read the guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Why Color Matching Matters</h2>
        <div className="space-y-4 leading-relaxed text-slate-700">
          <p>
            Most men do not struggle with style because their clothes are poor. They struggle because they
            put outfits together without thinking about contrast and color temperature. A well-cut pair of
            trousers loses its impact when the shirt has the same visual weight, or when its undertone
            fights the pants instead of supporting them.
          </p>
          <p>
            At ShirtsMeer we treat color matching as a simple system rather than a matter of taste. Our
            guides explain how to pair the trousers every man owns, such as{" "}
            <Link href="/blog/what-color-shirt-goes-with-grey-pants" className="font-medium text-blue-600 hover:underline">
              versatile grey pants
            </Link>
            ,{" "}
            <Link href="/blog/what-color-shirt-goes-with-navy-pants" className="font-medium text-blue-600 hover:underline">
              deep navy trousers
            </Link>{" "}
            and{" "}
            <Link href="/blog/what-color-shirt-goes-with-khaki-pants" className="font-medium text-blue-600 hover:underline">
              classic khaki chinos
            </Link>
            , with shirts that make them look their best.
          </p>
          <p>
            Whether you are dressing for a meeting, a summer wedding or a relaxed dinner, every guide covers
            the details that change how an outfit looks: shirt fabric such as Oxford, poplin or linen, the
            weight of the season, and how shoes and belts should match. The goal is that you can open your
            wardrobe, pick a combination in under a minute, and know it works.
          </p>
          <p>
            Each guide follows the same layout so it is easy to scan on a phone: a short answer at the top,
            swatches of the best shirt colors, a comparison table with formality and shoe suggestions, and
            answers to the questions readers ask most often. You do not need to read every word to get the
            outfit right, but the detail is there when you want to understand why a pairing works.
          </p>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-3 border-t border-slate-200 pt-4 text-sm text-slate-700 sm:grid-cols-3">
          {["Clear contrast rules", "Shoe and belt matching", "Simple, actionable advice"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
