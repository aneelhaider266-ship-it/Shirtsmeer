import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | ShirtsMeer",
  description: "ShirtsMeer's commitment to digital accessibility, WCAG 2.1 AA standards, and screen reader optimization.",
  alternates: { canonical: "https://shirtsmeer.com/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Accessibility Statement</h1>
      <p className="text-xs text-slate-500 mb-8 font-mono">WCAG 2.1 Level AA Commitment • March 2026</p>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>ShirtsMeer is dedicated to ensuring digital accessibility for all users, including individuals with disabilities. We continually optimize our user experience by implementing the relevant Web Content Accessibility Guidelines (WCAG 2.1 Level AA).</p>

        <h2 className="text-xl font-bold text-slate-900">1. Key Accessibility Features Implemented</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Semantic HTML5 Structure:</strong> Clear heading hierarchies (`h1` through `h3`) and dedicated landmark tags (`header`, `main`, `footer`, `aside`).</li>
          <li><strong>High Contrast Color Ratios:</strong> Text and background colors meet or exceed the minimum 4.5:1 contrast ratio for readability.</li>
          <li><strong>Screen Reader Optimization:</strong> Color swatches and descriptive outfit images include comprehensive `alt` text and ARIA labels.</li>
          <li><strong>Keyboard Navigability:</strong> All links, forms, and interactive accordions can be operated smoothly using standard keyboard controls.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900">2. Feedback & Assistance</h2>
        <p>If you encounter any accessibility barriers while browsing ShirtsMeer, please notify our team via our <Link href="/contact" className="text-blue-600 font-medium hover:underline">Contact Page</Link>. We actively review and resolve accessibility feedback promptly.</p>
      </div>
    </div>
  );
}
