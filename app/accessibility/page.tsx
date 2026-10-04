import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "ShirtsMeer's commitment to digital accessibility, WCAG 2.1 AA standards, and screen reader optimization.",
  alternates: { canonical: "https://shirtsmeer.com/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Accessibility Statement</h1>
      <p className="text-xs text-slate-500 mb-8 font-mono">WCAG 2.1 Level AA Commitment • Updated October 2026</p>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>ShirtsMeer believes that digital style education, color coordination matrices, and menswear reviews should be fully accessible to every individual, regardless of physical ability, visual impairment, or technological constraints. We actively design, engineer, and audit our platform in alignment with the Web Content Accessibility Guidelines (WCAG 2.1 Level AA standards).</p>

        <h2 className="text-xl font-bold text-slate-900">1. Concrete Technical Accessibility Measures</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>High Contrast Visual Hierarchy:</strong> Our editorial body typography and color swatches maintain a strict contrast ratio exceeding 4.5:1 against light backdrops, ensuring legibility for individuals with low vision or color blindness.</li>
          <li><strong>Full Screen Reader Optimization:</strong> All informational clothing photographs and interactive CSS swatches feature descriptive alternative text attributes (`alt`) and ARIA labels.</li>
          <li><strong>Keyboard Navigation Architecture:</strong> Every navigational link, dropdown menu, and FAQ accordion component can be fully navigated using standard keyboard tabs and enter keys without getting trapped.</li>
          <li><strong>Fluid Typography and Responsive Scaling:</strong> Our layouts support up to 200% browser zoom scaling without text overlapping, horizontal breakage, or loss of critical content.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900">2. Continual Assessment and Monitoring</h2>
        <p>We routinely run automated accessibility audits using Lighthouse and Semrush diagnostic crawlers to detect and eliminate markup errors, missing labels, or broken navigational pathways across desktop and mobile browsers.</p>

        <h2 className="text-xl font-bold text-slate-900">3. Contacting Our Accessibility Coordinator</h2>
        <p>If you encounter difficulty accessing any styling matrix or require content in an alternative format, please notify our accessibility coordinator through our <Link href="/contact" className="text-blue-600 font-medium hover:underline">Contact Desk</Link>. We treat accessibility feedback with highest priority.</p>
      </div>
    </div>
  );
}
