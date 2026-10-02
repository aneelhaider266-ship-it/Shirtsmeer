import React from "react";
import FAQAccordion from "@/components/FAQAccordion";
import ColorSwatch from "@/components/ColorSwatch";
import { POSTS, type PostContent, type Section, type PostMeta } from "@/lib/posts";

function SectionBlock({ section }: { section: Section }) {
  return (
    <div className="my-8">
      {section.heading && (
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">
          {section.heading}
        </h2>
      )}
      {Array.isArray(section.paragraphs) &&
        section.paragraphs.map((p: any, idx: number) => (
          <p key={idx} className="my-4 text-slate-700 leading-relaxed">
            {p}
          </p>
        ))}
      {Array.isArray(section.bullets) && section.bullets.length > 0 && (
        <ul className="my-4 list-disc list-inside space-y-2 text-slate-700">
          {section.bullets.map((b: any, idx: number) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function PostBody({
  content,
  post,
}: {
  content?: PostContent;
  post?: PostMeta;
}) {
  const sections = content?.sections || post?.sections || [];
  const faqs = content?.faqs || post?.faqs || [];
  const swatches = content?.swatches || (post as any)?.swatches || [];

  return (
    <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed">
      {swatches.length > 0 && (
        <div className="my-6 not-prose">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
            Recommended Color Swatches
          </h3>
          <div className="flex flex-wrap gap-2">
            {swatches.map((s: any, idx: number) => (
              <ColorSwatch
                key={idx}
                colorName={s.name || s.colorName}
                hex={s.hex}
                role={s.role}
              />
            ))}
          </div>
        </div>
      )}

      {sections.map((section: any, idx: number) => (
        <SectionBlock key={idx} section={section} />
      ))}

      {faqs && faqs.length > 0 && <FAQAccordion items={faqs} />}
    </div>
  );
}
