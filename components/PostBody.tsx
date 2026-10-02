import React from "react";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import FAQAccordion from "@/components/FAQAccordion";
import ColorSwatch from "@/components/ColorSwatch";
import { type PostContent, type Section, type PostMeta } from "@/lib/posts";

function SectionBlock({ section }: { section: any }) {
  if (!section) return null;

  return (
    <div className="my-8">
      {section.heading && (
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">
          {section.heading}
        </h2>
      )}
      {Array.isArray(section.paragraphs) &&
        section.paragraphs.map((p: any, idx: number) => (
          <p key={idx} className="my-4 text-slate-700 leading-relaxed text-base">
            {p}
          </p>
        ))}
      {Array.isArray(section.bullets) && section.bullets.length > 0 && (
        <ul className="my-4 space-y-3 text-slate-700 list-disc list-inside">
          {section.bullets.map((b: any, idx: number) => (
            <li key={idx} className="leading-relaxed">
              {typeof b === "string" ? (
                b
              ) : (
                <>
                  {b.label && <strong className="text-slate-900 font-semibold">{b.label}: </strong>}
                  <span>{b.text || ""}</span>
                </>
              )}
            </li>
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
  content?: any;
  post?: any;
}) {
  if (!content) {
    return (
      <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed">
        <p className="text-lg text-slate-700 leading-relaxed">
          {post?.leadExcerpt || post?.description}
        </p>
      </div>
    );
  }

  const sections = Array.isArray(content.sections) ? content.sections : [];
  const faqs = Array.isArray(content.faqs) ? content.faqs : (post?.faqs || []);
  const swatches = Array.isArray(content.swatches) ? content.swatches : [];

  return (
    <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed">
      {/* 1. Quick Answer Box */}
      {content.quickAnswer && (
        <QuickAnswerBox title={content.quickAnswerTitle || "Quick Answer"}>
          {content.quickAnswer}
        </QuickAnswerBox>
      )}

      {/* 2. Intro Paragraph */}
      {content.intro && (
        <p className="text-lg text-slate-700 leading-relaxed font-normal my-6">
          {content.intro}
        </p>
      )}

      {/* 3. Color Swatches */}
      {swatches.length > 0 && (
        <div className="my-6 not-prose">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
            {content.swatchHeading || "Recommended Color Swatches"}
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

      {/* 4. Complete Body Sections */}
      {sections.map((section: any, idx: number) => (
        <SectionBlock key={idx} section={section} />
      ))}

      {/* 5. FAQs */}
      {faqs && faqs.length > 0 && <FAQAccordion items={faqs} />}
    </div>
  );
}
