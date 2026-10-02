import Link from "next/link";
import { POSTS } from "@/lib/posts";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-900 text-sm text-slate-400">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            Shirts<span className="text-blue-400">Meer</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            Practical color matching guides for men's shirts, trousers and leather footwear.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Pillar Guides</h3>
          <ul className="space-y-2 text-xs">
            {POSTS.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="hover:text-white">{p.shortLabel}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Info</h3>
          <ul className="space-y-2 text-xs">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ShirtsMeer.com. All rights reserved.
      </div>
    </footer>
  );
}
