import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | ShirtsMeer Men's Style Guides" },
  description:
    "The page you requested could not be found. Explore our men's shirt and pants guides, color matching charts and outfit combination rules.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <Compass className="mx-auto mb-4 h-16 w-16 stroke-1 text-blue-600" />
      <p className="font-mono text-xs uppercase tracking-widest text-slate-400">Error 404</p>
      <h1 className="mb-4 mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Page Not Found</h1>
      <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-slate-600">
        The page you are looking for may have moved or no longer exists. Try one of our most popular
        guides instead.
      </p>

      <div className="mx-auto mb-8 max-w-md rounded-xl border border-slate-200 bg-slate-50 p-6 text-left">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-900">Popular Guides</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/blog/what-color-shirt-goes-with-grey-pants" className="font-medium text-blue-600 hover:underline">
              What color shirt goes with grey pants
            </Link>
          </li>
          <li>
            <Link href="/blog/what-color-shirt-goes-with-navy-pants" className="font-medium text-blue-600 hover:underline">
              What color shirt goes with navy blue pants
            </Link>
          </li>
          <li>
            <Link href="/blog/what-color-shirt-goes-with-olive-green-pants" className="font-medium text-blue-600 hover:underline">
              What color shirt goes with olive green pants
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
        >
          Browse All Guides
        </Link>
      </div>
    </div>
  );
}
