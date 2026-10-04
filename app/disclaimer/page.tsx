import Link from "next/link";
import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate & Editorial Disclaimer",
  description: "Read the ShirtsMeer affiliate disclosure, FTC compliance notice, and editorial transparency standards for clothing reviews.",
  alternates: { canonical: "https://shirtsmeer.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Affiliate & Editorial Disclosure</h1>
      <p className="text-xs text-slate-500 mb-8 font-mono">FTC Compliance Disclosure (16 CFR Part 255) • Updated October 2026</p>

      <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg mb-8 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-900 leading-relaxed font-medium">
          Radical Transparency: ShirtsMeer maintains total editorial independence. When you purchase clothing, footwear, or accessories through links published on our website, we may earn an affiliate commission at zero additional cost to you.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <h2 className="text-xl font-bold text-slate-900">1. Federal Trade Commission (FTC) Compliance</h2>
        <p>In accordance with the Federal Trade Commission Guides Concerning the Use of Endorsements and Testimonials in Advertising, ShirtsMeer informs all readers that commercial relationships exist between this publication and various apparel retailers, textile brands, and affiliate networks. We include commercial hyperlinks to clothing items that help support our continuous hosting, technical development, and editorial research.</p>

        <h2 className="text-xl font-bold text-slate-900">2. Amazon Associates Program Notice</h2>
        <p>ShirtsMeer is an approved participant in the Amazon Services LLC Associates Program, an international affiliate advertising network engineered to enable digital content creators and niche publications to earn referral advertising fees by promoting and hyperlinking to Amazon.com and affiliated global properties. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.</p>

        <h2 className="text-xl font-bold text-slate-900">3. Independent Editorial Integrity</h2>
        <p>Our comprehensive styling guides—including our foundational <Link href="/blog/what-color-shirt-goes-with-grey-pants" className="text-blue-600 font-medium hover:underline">Grey Pants Color Matrix</Link> and detailed <Link href="/blog/what-color-shirt-goes-with-navy-pants" className="text-blue-600 font-medium hover:underline">Navy Trousers Guide</Link>—are conceived and written entirely by our editorial desk based on objective color theory and textile quality. Retailers cannot purchase favorable review scores or alter our factual assessments.</p>

        <h2 className="text-xl font-bold text-slate-900">4. Pricing and Stock Availability Notice</h2>
        <p>Apparel pricing, promotional bundle discounts (such as multi-buy shirt promotions), and garment stock levels change dynamically on merchant platforms. While we routinely audit our external references, ShirtsMeer cannot guarantee that listed prices or sizes remain available at the exact moment of reading.</p>

        <p>Have questions regarding commercial partnerships? Submit your inquiry through our <Link href="/contact" className="text-blue-600 font-medium hover:underline">Contact Page</Link>.</p>
      </div>
    </div>
  );
}
