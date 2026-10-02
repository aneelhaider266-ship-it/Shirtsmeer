import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ShirtsMeer",
  description: "Read the ShirtsMeer terms of service governing access to our menswear color matching matrices, editorial reviews, and style guides.",
  alternates: { canonical: "https://shirtsmeer.com/terms-of-service" },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Terms of Service</h1>
      <p className="text-xs text-slate-500 mb-8 font-mono">Last Updated: March 2026 • Effective Immediately</p>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>Welcome to ShirtsMeer (accessible at <Link href="/" className="text-blue-600 font-medium hover:underline">shirtsmeer.com</Link>). By browsing, viewing, or utilizing the styling matrices, brand comparisons, and color pairing guides published on this platform, you agree to comply with and be bound by the following Terms of Service.</p>

        <h2 className="text-xl font-bold text-slate-900 mt-6">1. Intellectual Property Rights</h2>
        <p>All editorial content, original photography concepts, layout designs, CSS color swatches, algorithms, and comparative matrices on ShirtsMeer are the intellectual property of ShirtsMeer, unless otherwise cited. You may not republish, reproduce, or syndicate entire guides without prior written authorization.</p>

        <h2 className="text-xl font-bold text-slate-900 mt-6">2. Editorial & Style Disclaimer</h2>
        <p>The advice provided on ShirtsMeer represents editorial opinions grounded in classical menswear theory. Personal styling preferences and garment fits vary. ShirtsMeer cannot guarantee that specific garment combinations or third-party sizing choices will fit every individual identically.</p>

        <h2 className="text-xl font-bold text-slate-900 mt-6">3. External Links & Affiliate Relationships</h2>
        <p>Our website contains links to external retail platforms. We encourage you to review our dedicated <Link href="/disclaimer" className="text-blue-600 font-medium hover:underline">Affiliate Disclaimer</Link> regarding sponsored placements and commercial relationships.</p>

        <h2 className="text-xl font-bold text-slate-900 mt-6">4. Governing Law</h2>
        <p>These terms shall be governed and interpreted in accordance with applicable consumer protection and digital publishing laws. Inquiries regarding our terms may be submitted through our <Link href="/contact" className="text-blue-600 font-medium hover:underline">Contact Desk</Link>.</p>
      </div>
    </div>
  );
}
