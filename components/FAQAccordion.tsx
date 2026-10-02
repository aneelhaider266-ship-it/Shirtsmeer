import JsonLd from "@/components/JsonLd";

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="not-prose my-10">
      <JsonLd data={faqSchema} />
      <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-slate-200 bg-white p-4 open:bg-slate-50"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900 group-open:text-blue-700">
              <span>{item.question}</span>
              <span aria-hidden="true" className="ml-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>
            <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-relaxed text-slate-700 md:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
