import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: { absolute: "Men's Shirt & Pants Pairing Guides | ShirtsMeer" },
  description:
    "Browse styling guides on what color shirts to wear with grey, brown, navy, khaki and olive green pants for work, weekends and special events.",
  alternates: { canonical: "https://shirtsmeer.com/blog" },
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
      <div className="mb-10 border-b border-slate-200 pb-8">
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Men's Trouser and Shirt Coordination Guides
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-600">
          Clear outfit guides for the five most common trouser colors, each with shirt matches, a quick
          comparison table and shoe advice.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {POSTS.map((post, index) => (
          <article
            key={post.slug}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-slate-400 hover:shadow-md"
          >
            <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-slate-100" aria-label={`Read ${post.title}`}>
              <Image
                src={post.image || "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80"}
                alt={post.imageAlt || post.title}
                priority={index === 0}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                className="object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
            </Link>
            <div className="p-5 sm:p-6">
            <div className="mb-2 flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> {post.publishedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.readTime}
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900 transition-colors hover:text-blue-600">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-600 md:text-base">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Read the full guide <ArrowRight className="h-4 w-4" />
            </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
        <h2 className="mb-2 font-bold text-slate-900">More from ShirtsMeer</h2>
        <p>
          Return to the{" "}
          <Link href="/" className="font-semibold text-blue-600 hover:underline">home page</Link>, read how we
          work on the{" "}
          <Link href="/about" className="font-semibold text-blue-600 hover:underline">About page</Link>, or send a
          question through the{" "}
          <Link href="/contact" className="font-semibold text-blue-600 hover:underline">Contact page</Link>.
        </p>
      </div>
    </div>
  );
}
