import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export const metadata = {
  title: "Page Not Found | ShirtsMeer Men's Style Guides",
  description:
    "The page you requested could not be found. Explore our men's shirt and pant styling guides, color matching matrices, and outfit combination rules.",
};

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <Compass className="w-16 h-16 text-blue-600 mx-auto mb-4 stroke-1" />
      <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
        Error 404 • Missing Resource
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
        Sartorial Direction Not Found
      </h1>
      <p className="text-slate-600 text-base max-w-lg mx-auto mb-6 leading-relaxed">
        The styling page, brand review, or color coordination guide you are looking for has been relocated, renamed, or updated. ShirtsMeer regularly updates outfit matrices and sartorial guidelines to reflect timeless menswear standards.
      </p>

      <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl text-left max-w-lg mx-auto mb-8">
        <h2 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">
          Popular Style Destinations & Guides:
        </h2>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>
            <Link href="/blog/what-color-shirt-goes-with-grey-pants" className="text-blue-600 font-medium hover:underline">
              • Grey Pants & Shirt Combinations (Executive Boardroom & Casual)
            </Link>
          </li>
          <li>
            <Link href="/blog/what-color-shirt-goes-with-navy-pants" className="text-blue-600 font-medium hover:underline">
              • Navy Blue Trousers Styling Guide (Classic Corporate Standards)
            </Link>
          </li>
          <li>
            <Link href="/blog/what-color-shirt-goes-with-olive-green-pants" className="text-blue-600 font-medium hover:underline">
              • Olive Green Chinos & Trousers (Modern Utility & Streetwear)
            </Link>
          </li>
          <li>
            <Link href="/blog/charles-tyrwhitt-vs-kamakura-dress-shirts" className="text-blue-600 font-medium hover:underline">
              • Charles Tyrwhitt vs Kamakura (The Ultimate Dress Shirt Comparison)
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors text-sm"
        >
          Browse All 14 Guides
        </Link>
      </div>
    </div>
  );
}
