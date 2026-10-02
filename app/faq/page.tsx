import Link from "next/link";
import type { Metadata } from "next";
import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | ShirtsMeer",
  description: "Answers to the most common questions regarding men's shirt styling, pant color coordination, and fabric choices.",
  alternates: { canonical: "https://shirtsmeer.com/faq" },
};

const SITE_FAQS: FAQItem[] = [
  {
    question: "What is the most versatile shirt color a man can own?",
    answer: "Crisp white and light powder blue are the two most versatile shirt colors. A white shirt creates high contrast for formal events and matches all five core trouser colors (grey, navy, brown, khaki, olive), while light blue provides natural cool harmony for everyday business casual."
  },
  {
    question: "Should your belt match your shoes or your trousers?",
    answer: "Your leather belt should always match your shoes in both color family and leather sheen (e.g. dark brown calfskin with dark brown shoes). Never attempt to match your belt to the color of your pants, as this creates a muddy waistline."
  },
  {
    question: "What is the difference between Oxford cloth and Poplin?",
    answer: "Poplin is a lightweight, smooth plain weave that feels silky and formal. Oxford cloth uses a heavier basketweave technique that creates a visible cross-hatch texture, making it durable and ideal for casual and smart casual button-downs."
  },
  {
    question: "Can you wear black shoes with navy pants?",
    answer: "Yes, black leather dress shoes paired with dark navy pants is a traditional British business formal standard. However, for a softer modern aesthetic, dark brown, burgundy, or oxblood shoes provide warmer, more appealing contrast."
  },
  {
    question: "How do I choose the right shirt collar for my face shape?",
    answer: "If you have a round or wide face, select a Classic Point collar with narrow downward points to visually lengthen your profile. If you have a narrow or angular face, choose an English Spread or Cutaway collar to add horizontal balance."
  }
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Frequently Asked Questions</h1>
      <p className="text-slate-600 text-base mb-8 max-w-2xl leading-relaxed">
        Common questions regarding masculine color theory, shirt fabrics, and trouser coordination answered by our editorial team.
      </p>

      <FAQAccordion items={SITE_FAQS} />

      <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-xl">
        <h2 className="text-base font-bold text-slate-900 mb-2">Need a specific outfit formula?</h2>
        <p className="text-sm text-slate-600 mb-4">
          Browse our foundational color matching matrices: explore our <Link href="/blog/what-color-shirt-goes-with-grey-pants" className="text-blue-600 font-semibold hover:underline">Grey Pants Guide</Link> or discover tailored rules for <Link href="/blog/what-color-shirt-goes-with-navy-pants" className="text-blue-600 font-semibold hover:underline">Navy Trousers</Link>.
        </p>
      </div>
    </div>
  );
}
