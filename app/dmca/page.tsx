import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Copyright Notice | ShirtsMeer",
  description: "ShirtsMeer DMCA copyright notification process, takedown procedures, and intellectual property compliance.",
  alternates: { canonical: "https://shirtsmeer.com/dmca" },
};

export default function DmcaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">DMCA Copyright Policy</h1>
      <p className="text-xs text-slate-500 mb-8 font-mono">Digital Millennium Copyright Act Compliance • March 2026</p>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>ShirtsMeer respects the intellectual property rights of creators, photographers, and writers. We adhere strictly to the Digital Millennium Copyright Act (Title 17, U.S.C. Section 512).</p>

        <h2 className="text-xl font-bold text-slate-900">1. Notice of Claimed Infringement</h2>
        <p>If you believe in good faith that any photograph, article text, or graphic published on ShirtsMeer infringes upon your copyright, please submit a written notification including:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Identification of the copyrighted work claimed to have been infringed.</li>
          <li>The exact URL on ShirtsMeer containing the disputed material.</li>
          <li>Your legal contact information (full name, email address, and physical address).</li>
          <li>A statement affirming that you have a good faith belief that the disputed use is unauthorized.</li>
          <li>A statement made under penalty of perjury that the information provided in the notice is accurate.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900">2. Designated Agent Contact</h2>
        <p>Submit all DMCA notices directly to our designated copyright desk: <span className="font-mono text-slate-900 font-semibold">dmca@shirtsmeer.com</span> or via our <Link href="/contact" className="text-blue-600 font-medium hover:underline">Contact Desk</Link>.</p>
      </div>
    </div>
  );
}
