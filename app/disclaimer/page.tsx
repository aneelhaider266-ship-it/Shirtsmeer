import Link from "next/link";
import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate & Editorial Disclaimer | ShirtsMeer",
  description: "Read the ShirtsMeer affiliate disclosure, FTC compliance notice, and editorial transparency standards for clothing reviews.",
  alternates: { canonical: "https://shirtsmeer.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Affiliate & Editorial Disclosure</h1>
      <p className="text-xs text-slate-500 mb-8 font-mono">FTC Compliance Disclosure • Updated March 2026</p>

      <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg mb-8 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-900 leading-relaxed font-medium">
          Full Transparency: ShirtsMeer believes in radical editorial independence. When you purchase clothing through links on our site, we may earn an affiliate commission at zero additional cost to you.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <h2 className="text-xl font-bold text-slate-900">1. Federal Trade Commission (FTC) Compliance</h2>
        <p>In compliance with the FTC guides concerning the use of endorsements and testimonials in advertising, please assume that any links leading to retail platforms (such as Amazon, Charles Tyrwhitt, Untuckit, or specialized menswear brands) are affiliate links.</p>

        <h2 className="text-xl font-bold text-slate-900">2. Amazon Associates Disclosure</h2>
        <p>ShirtsMeer is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated global stores.</p>

        <h2 className="text-xl font-bold text-slate-900">3. Editorial Integrity Standards</h2>
        <p>Our evaluations, color matrices (such as our <Link href="/blog/what-color-shirt-goes-with-grey-pants" className="text-blue-600 font-medium hover:underline">Grey Pants Styling Guide</Link>), and brand comparisons are never dictated by advertisers. We only recommend garments, fabrics, and collar designs that meet our rigorous standards for masculine proportion and quality craftsmanship.</p>

        <p>Have questions about a specific brand partnership? Please reach out via our <Link href="/contact" className="text-blue-600 font-medium hover:underline">Contact Page</Link>.</p>
      </div>
    </div>
  );
}
