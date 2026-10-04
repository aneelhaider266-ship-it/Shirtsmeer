import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Copyright Notice",
  description: "ShirtsMeer DMCA copyright notification process, takedown procedures, and intellectual property compliance.",
  alternates: { canonical: "https://shirtsmeer.com/dmca" },
};

export default function DmcaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">DMCA Copyright Policy</h1>
      <p className="text-xs text-slate-500 mb-8 font-mono">Digital Millennium Copyright Act Compliance (17 U.S.C. § 512) • October 2026</p>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>ShirtsMeer respects the intellectual property rights of apparel designers, digital artists, fashion photographers, and content creators. We comply fully with the statutory requirements of the Digital Millennium Copyright Act (Title 17, United States Code, Section 512).</p>

        <h2 className="text-xl font-bold text-slate-900">1. Notice and Takedown Procedure</h2>
        <p>If you are a copyright owner or an authorized agent representing one, and you believe that any image, graphic swatch, or editorial excerpt hosted on ShirtsMeer infringes upon your copyright, you may submit a formal notification containing the following statutory details:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>A physical or verified electronic signature of a person authorized to act on behalf of the copyright owner.</li>
          <li>Detailed identification of the copyrighted work claimed to have been infringed upon.</li>
          <li>Identification of the material that is claimed to be infringing, including the specific URL on <Link href="/" className="text-blue-600 font-medium hover:underline">shirtsmeer.com</Link> where the material is located.</li>
          <li>Reasonably sufficient contact information, including your full legal name, physical mailing address, telephone number, and active email address.</li>
          <li>A statement that you have a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
          <li>A formal statement, made under penalty of perjury, that the information in your notification is accurate and that you are authorized to act on behalf of the owner.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900">2. Designated Agent Submissions</h2>
        <p>Please deliver all formal copyright notices and counter-notifications directly to our designated compliance desk: <span className="font-mono text-slate-900 font-semibold">dmca@shirtsmeer.com</span> or submit via our online <Link href="/contact" className="text-blue-600 font-medium hover:underline">Contact Desk</Link>. Upon receipt of a valid notice, we act expeditiously to investigate and remove or disable access to the infringing material.</p>
      </div>
    </div>
  );
}
