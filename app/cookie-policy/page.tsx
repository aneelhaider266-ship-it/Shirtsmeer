import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | ShirtsMeer",
  description: "Learn how ShirtsMeer uses technical, analytical, and advertising cookies to ensure fast performance and compliance.",
  alternates: { canonical: "https://shirtsmeer.com/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Cookie Policy</h1>
      <p className="text-xs text-slate-500 mb-8 font-mono">GDPR & ePrivacy Directive Compliance • March 2026</p>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>This Cookie Policy explains how ShirtsMeer uses cookies, tracking pixels, and browser local storage when you access our style guides and comparative matrices.</p>

        <h2 className="text-xl font-bold text-slate-900">1. What Are Cookies?</h2>
        <p>Cookies are small text fragments stored on your device that allow web applications to remember user preferences, maintain session state, and deliver tailored typography and layout scaling across mobile and desktop devices.</p>

        <h2 className="text-xl font-bold text-slate-900">2. Types of Cookies We Utilize</h2>
        <ul>
          <li><strong>Strictly Necessary:</strong> Essential for fast Next.js page routing, Core Web Vitals caching, and security enforcement.</li>
          <li><strong>Performance & Analytics:</strong> Aggregate, anonymized metrics (e.g. Google Analytics / Vercel Speed Insights) that help us measure reading time and popular article topics.</li>
          <li><strong>Advertising & Affiliate Cookies:</strong> Used by Google AdSense and affiliate networks to record referral conversions when you click an external link to purchase a shirt or trousers.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900">3. Managing Your Preferences</h2>
        <p>You can adjust or disable cookie tracking at any time through your browser settings. To learn how we protect your information, review our full <Link href="/privacy-policy" className="text-blue-600 font-medium hover:underline">Privacy Policy</Link>.</p>
      </div>
    </div>
  );
}
