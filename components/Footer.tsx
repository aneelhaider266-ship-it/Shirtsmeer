import Link from "next/link";
import { POSTS } from "@/lib/posts";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-900 text-sm text-slate-400">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        {/* Brand Overview */}
        <div className="md:col-span-1">
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            Shirts<span className="text-blue-400">Meer</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Precision color matching matrices, shirt brand reviews, and sartorial guides for men.
          </p>
        </div>

        {/* Trouser Guides */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Trouser Guides</h3>
          <ul className="space-y-2 text-xs">
            {POSTS.slice(0, 5).map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="hover:text-white transition-colors">
                  {p.shortLabel || p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand Reviews & Technical Guides (All 9 remaining posts) */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Reviews & Guides</h3>
          <ul className="space-y-2 text-xs">
            {POSTS.slice(5).map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="hover:text-white transition-colors">
                  {p.shortLabel || p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Compliance */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Legal & Info</h3>
          <ul className="space-y-2 text-xs">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white transition-colors">Affiliate Disclaimer</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            <li><Link href="/dmca" className="hover:text-white transition-colors">DMCA Notice</Link></li>
            <li><Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ShirtsMeer.com. All rights reserved.
      </div>
    </footer>
  );
}
