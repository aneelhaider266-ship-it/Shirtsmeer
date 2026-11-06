
import Link from "next/link";
import type { Metadata } from "next";
import { POSTS } from "@/lib/posts";
import ColorSwatch from "@/components/ColorSwatch";
import HeroSlider from "@/components/HeroSlider";
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Shirt,
  Palette,
  Footprints,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Men's Shirt & Pants Color Matching Guide | ShirtsMeer",
  description:
    "Discover men's shirt and pants color combinations, outfit ideas, clothing guides and practical styling advice at ShirtsMeer.",
  alternates: {
    canonical: "https://shirtsmeer.com",
  },
};

const allPosts = POSTS as any[];

const colorGuides = allPosts
  .filter((post) =>
    post.slug?.startsWith("what-color-shirt-goes-with-")
  )
  .slice(0, 6);

const featuredSlugs = new Set(colorGuides.map((post) => post.slug));

const editorialPosts = allPosts
  .filter((post) => !featuredSlugs.has(post.slug))
  .slice(0, 6);

function getCategory(slug: string) {
  if (slug.includes("what-color-shirt-goes-with")) {
    return "Color Matching";
  }

  if (slug.includes("collar") || slug.includes("fabric") || slug.includes("fit")) {
    return "Shirt Guides";
  }

  if (
    slug.includes("review") ||
    slug.includes("vs-") ||
    slug.includes("charles-tyrwhitt") ||
    slug.includes("untuckit")
  ) {
    return "Brand & Product Guides";
  }

  return "Men's Style";
}

function ArticleCard({ post }: { post: any }) {
  const slug = post.slug || "";
  const title = post.title || "Men's Style Guide";
  const image = post.image;
  const description =
    post.leadExcerpt ||
    post.description ||
    post.metaDescription ||
    "";

  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/blog/${slug}`} className="block overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={post.imageAlt || title}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center bg-stone-100">
            <Shirt className="h-12 w-12 text-stone-400" />
          </div>
        )}
      </Link>

      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-800">
            {getCategory(slug)}
          </span>
          <span className="shrink-0 text-xs text-stone-500">
            {post.readTime || "7 min read"}
          </span>
        </div>

        <h3 className="mb-3 text-lg font-bold leading-snug text-stone-900 transition-colors group-hover:text-amber-800 sm:text-xl">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>

        <p className="mb-5 line-clamp-3 text-sm leading-7 text-stone-600">
          {description}
        </p>

        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-stone-900 transition-colors hover:text-amber-800"
        >
          Read the guide
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* 01. Hero */}
        <section className="mb-16">
          <HeroSlider />

          <div className="mx-auto mt-12 max-w-3xl text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.22em] text-amber-800">
              The Men's Style Journal
            </span>

            <h1 className="mb-5 font-serif text-4xl font-bold leading-tight tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Better Outfits.
              <span className="block italic text-amber-800">
                Smarter Color Choices.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              Discover how to match men's shirts, pants, shoes and accessories
              with practical styling guides and thoughtful outfit inspiration.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-800"
              >
                Explore Style Guides
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/color-matcher"
                className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 transition hover:border-stone-900"
              >
                Try Color Matcher
              </Link>
            </div>
          </div>
        </section>

        {/* 02. Explore trouser colors */}
        <section className="mb-20">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
                01 / Find Your Combination
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
                Start with your pants.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-stone-600">
                Explore the shirt colors and outfit combinations that work
                with the trousers already in your wardrobe.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-stone-900 hover:text-amber-800"
            >
              All style guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {colorGuides.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* 03. Color swatches */}
        <section className="mb-20 rounded-3xl border border-stone-200 bg-[#f1eee7] p-6 sm:p-9">
          <div className="mb-7 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
              02 / The Color Edit
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
              Your wardrobe's essential colors.
            </h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Start with five versatile trouser shades and discover how
              different shirt colors create balanced outfits.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ColorSwatch
              colorName="Charcoal & Mid Grey"
              hex="#4B5563"
              role="Neutral Anchor"
            />
            <ColorSwatch
              colorName="Espresso Brown"
              hex="#3E2723"
              role="Rich Earth"
            />
            <ColorSwatch
              colorName="Midnight Navy"
              hex="#1B2A47"
              role="Formal Anchor"
            />
            <ColorSwatch
              colorName="Classic British Khaki"
              hex="#C3B091"
              role="Casual Foundation"
            />
            <ColorSwatch
              colorName="Military Olive"
              hex="#556B2F"
              role="Modern Utility"
            />
          </div>
        </section>

        {/* 04. Editorial articles */}
        {editorialPosts.length > 0 && (
          <section className="mb-20">
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
                  03 / The Editorial Cut
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
                  Stories worth your scroll.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-stone-600">
                  Practical shirt guides, fabric explainers, fit advice and
                  thoughtful clothing reviews.
                </p>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-stone-900 hover:text-amber-800"
              >
                Browse all articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {editorialPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* 05. Explore categories */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
              04 / Explore by Category
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
              More than just color matching.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-stone-600">
              Explore the details that make everyday outfits look more
              considered, comfortable and complete.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/blog/mens-shirt-collar-types-guide"
              className="group rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-amber-700 hover:shadow-lg"
            >
              <Shirt className="mb-5 h-7 w-7 text-amber-800" />
              <h3 className="font-bold">Shirt Collars</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Discover collar shapes, styles and occasions.
              </p>
              <ArrowRight className="mt-5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/blog/poplin-vs-twill-vs-oxford-shirt-fabrics"
              className="group rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-amber-700 hover:shadow-lg"
            >
              <BookOpen className="mb-5 h-7 w-7 text-amber-800" />
              <h3 className="font-bold">Shirt Fabrics</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Understand Oxford, poplin, twill and more.
              </p>
              <ArrowRight className="mt-5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/blog/interview-outfit-guide"
              className="group rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-amber-700 hover:shadow-lg"
            >
              <Footprints className="mb-5 h-7 w-7 text-amber-800" />
              <h3 className="font-bold">Outfit Ideas</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Find outfits for work, events and everyday life.
              </p>
              <ArrowRight className="mt-5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/blog"
              className="group rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-amber-700 hover:shadow-lg"
            >
              <Palette className="mb-5 h-7 w-7 text-amber-800" />
              <h3 className="font-bold">Brand Reviews</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Explore clothing reviews and buying guides.
              </p>
              <ArrowRight className="mt-5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* 06. Why ShirtsMeer */}
        <section className="mb-20 rounded-3xl bg-stone-900 px-6 py-12 text-white sm:px-10 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              05 / The ShirtsMeer Way
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
              Good style. Less guesswork.
            </h2>

            <p className="mt-5 text-sm leading-8 text-stone-300 sm:text-base">
              ShirtsMeer makes men's style easier to understand with
              practical color combinations, clear clothing guides and
              useful outfit advice. Our goal is to help you make better
              wardrobe decisions without unnecessary complexity.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-3">
            <div className="text-center">
              <CheckCircle className="mx-auto mb-3 h-7 w-7 text-amber-300" />
              <h3 className="font-bold">Practical Advice</h3>
              <p className="mt-2 text-sm leading-6 text-stone-400">
                Styling guidance you can use in real outfits.
              </p>
            </div>

            <div className="text-center">
              <Palette className="mx-auto mb-3 h-7 w-7 text-amber-300" />
              <h3 className="font-bold">Clear Color Pairings</h3>
              <p className="mt-2 text-sm leading-6 text-stone-400">
                Understand contrast, balance and coordination.
              </p>
            </div>

            <div className="text-center">
              <ShieldCheck className="mx-auto mb-3 h-7 w-7 text-amber-300" />
              <h3 className="font-bold">Transparent Guides</h3>
              <p className="mt-2 text-sm leading-6 text-stone-400">
                Useful recommendations and clear affiliate disclosures.
              </p>
            </div>
          </div>
        </section>

        {/* 07. Final CTA */}
        <section className="mb-12 rounded-3xl border border-stone-200 bg-white px-6 py-12 text-center sm:px-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
            06 / Start Somewhere Good
          </span>

          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-bold sm:text-4xl">
            Build a wardrobe that works together.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-600">
            Explore men's outfit combinations, shirt guides and practical
            styling ideas to make everyday dressing easier.
          </p>

          <Link
            href="/blog"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-stone-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            Browse All Style Guides
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

      </div>
    </main>
  );
}
