import React from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="my-10" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <details
            key={idx}
            className="group rounded-lg border border-slate-200 bg-white p-4 transition-colors open:bg-slate-50 open:border-slate-300"
          >
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 group-open:text-blue-600 list-none">
              <span className="text-base md:text-lg">{item.question}</span>
              <span
                className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 text-xs text-slate-500 transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ▼
              </span>
            </summary>
            <div className="mt-3 border-t border-slate-200 pt-3 text-sm md:text-base leading-relaxed text-slate-700">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
