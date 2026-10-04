import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how ShirtsMeer uses technical, analytical, and advertising cookies to ensure fast performance and compliance.",
  alternates: { canonical: "https://shirtsmeer.com/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Cookie Policy</h1>
      <p className="text-xs text-slate-500 mb-8 font-mono">GDPR & ePrivacy Directive Compliance • Updated October 2026</p>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>This Cookie Policy explains how ShirtsMeer (accessible via <Link href="/" className="text-blue-600 font-medium hover:underline">shirtsmeer.com</Link>) utilizes cookies, tracking tags, and local browser storage technologies when you browse our menswear color coordination matrices, technical shirt fabric breakdowns, and clothing brand reviews.</p>

        <h2 className="text-xl font-bold text-slate-900 mt-6">1. What Are Cookies and Web Beacons?</h2>
        <p>Cookies are small alphanumeric text files downloaded to your computer or mobile device when you access digital publications. They allow web servers to recognize your browser session, remember layout preferences, maintain security standards, and accelerate page rendering speeds across mobile and desktop devices. Web beacons or tracking pixels are electronic image fragments used in conjunction with cookies to analyze traffic movement without identifying individual users personally.</p>

        <h2 className="text-xl font-bold text-slate-900 mt-6">2. Categories of Cookies We Deploy</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Strictly Necessary Technical Cookies:</strong> Essential for foundational Next.js routing, Core Web Vitals caching, and Content Delivery Network (CDN) security. These cannot be disabled without breaking website navigation.</li>
          <li><strong>Performance & Analytics Cookies:</strong> We utilize Google Analytics 4 (GA4) cookies to capture aggregate, anonymized interaction metrics—such as session duration, bounce rates, and popular clothing guide paths—enabling us to optimize our server performance.</li>
          <li><strong>Affiliate Tracking & Referral Cookies:</strong> When you click outward links to retail partners such as Amazon Associates or menswear brands, a secure cookie is placed to record referral commissions. These cookies typically expire within 24 hours to 30 days and do not collect sensitive personal records.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mt-6">3. Managing and Disabling Cookie Preferences</h2>
        <p>Most modern web browsers (including Google Chrome, Apple Safari, Mozilla Firefox, and Microsoft Edge) permit users to block or delete cookies through browser preference controls. Please note that disabling technical cookies may impact the visual responsiveness of our color swatches and interactive outfit matrices.</p>

        <p>For additional details regarding how we safeguard your personal data, review our full <Link href="/privacy-policy" className="text-blue-600 font-medium hover:underline">Privacy Policy</Link> or send inquiries to our desk via our <Link href="/contact" className="text-blue-600 font-medium hover:underline">Contact Desk</Link>.</p>
      </div>
    </div>
  );
}
