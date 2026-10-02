import Link from "next/link";
import type { Metadata } from "next";
import { POSTS } from "@/lib/posts";
import ColorSwatch from "@/components/ColorSwatch";
import HeroSlider from "@/components/HeroSlider";
import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Men's Shirt & Pants Color Matching Guide | ShirtsMeer",
  description:
    "Master men's color combinations with expert shirt and pants styling guides. Explore verified contrast rules, color swatches, and shoe pairing charts.",
  alternates: {
    canonical: "https://shirtsmeer.com",
  },
};

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* 1. UPSCALE AUTO-CHANGING HERO SLIDER */}
      <HeroSlider />

      {/* 2. Primary Heading */}
      <section className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
          Menswear Color Theory & Coordination
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          The Practical Guide to Matching Men's Shirts and Pants
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Stop guessing what to wear. ShirtsMeer gives you clear, high-contrast
          color matching matrices so you can pair dress shirts, chinos,
          trousers, and leather shoes with surgical precision.
        </p>
      </section>

      {/* 3. Five Core Base Swatches */}
      <section className="mb-14 p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-2">
          Five Core Trouser Base Colors
        </h2>
        <p className="text-sm text-slate-600 mb-4">
          Most masculine wardrobes are anchored on these five shades. Click any
          color below to explore optimal shirt pairings and contrast rules.
        </p>
        <div className="flex flex-wrap gap-2">
          <ColorSwatch colorName="Charcoal & Mid Grey" hex="#4B5563" role="Neutral Anchor" />
          <ColorSwatch colorName="Espresso Brown" hex="#3E2723" role="Rich Earth" />
          <ColorSwatch colorName="Midnight Navy" hex="#1B2A47" role="Formal Anchor" />
          <ColorSwatch colorName="Classic British Khaki" hex="#C3B091" role="Casual Foundation" />
          <ColorSwatch colorName="Military Olive" hex="#556B2F" role="Modern Utility" />
        </div>
      </section>

      {/* 4. Pillar Post Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Verified Pillar Styling Guides
          </h2>
          <Link
            href="/blog"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            Browse all guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold uppercase tracking-wider text-blue-600">
                    Primary: {post.primaryKeyword}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {post.leadExcerpt}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  US Searches: {post.searchVolume.toLocaleString()} /mo
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1"
                >
                  Read Matrix <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Editorial Authority Section */}
      <section className="prose prose-slate max-w-none bg-white p-8 rounded-xl border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Why Color Coordination Dictates Masculine Style
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Most men struggle with daily style choices not because they lack quality
          garments, but because they assemble outfits without understanding value
          contrast and color temperature. A tailored pair of trousers instantly
          loses its sophistication when paired with a shirt that shares an
          identical visual weight or clashes in chromatic warmth.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          At ShirtsMeer, we treat men's style as a systematic formula rather than
          subjective guesswork. Our color coordination frameworks break down the
          exact science behind pairing foundational bottoms—such as{" "}
          <Link
            href="/blog/what-color-shirt-goes-with-grey-pants"
            className="text-blue-600 font-medium hover:underline"
          >
            versatile grey pants
          </Link>
          , formal{" "}
          <Link
            href="/blog/what-color-shirt-goes-with-navy-pants"
            className="text-blue-600 font-medium hover:underline"
          >
            deep navy trousers
          </Link>
          , and casual{" "}
          <Link
            href="/blog/what-color-shirt-goes-with-khaki-pants"
            className="text-blue-600 font-medium hover:underline"
          >
            classic khaki chinos
          </Link>
          —with optimal shirt textiles.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Whether you are dressing for a high-stakes board meeting, a summer
          outdoor wedding, or a smart casual dinner, our matrices account for
          essential styling variables. We evaluate fabric sheen (Oxford cloth
          versus broadcloth and poplin), seasonal weights (linen versus twill),
          and strict leather matching rules across shoes and belts to ensure you
          walk out the door looking cohesive and commanding.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>Scientifically Tested Contrasts</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>Complete Footwear Alignment</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span>Zero Fluff, 100% Actionable</span>
          </div>
        </div>
      </section>
    </div>
  );
}
