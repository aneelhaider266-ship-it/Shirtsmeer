import React from "react";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import FAQAccordion from "@/components/FAQAccordion";
import ColorSwatch from "@/components/ColorSwatch";
import { type PostContent, type Section, type PostMeta } from "@/lib/posts";

// Turns [link text](https://...) inside a string into a real link.
// External links get rel="sponsored nofollow" (needed for Amazon affiliate links).
function renderText(text: any): React.ReactNode {
  if (typeof text !== "string") return text;
  const parts = text.split(/(\[[^\]]+\]\(https?:\/\/[^)\s]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
    if (!m) return part;
    return (
      <a
        key={i}
        href={m[2]}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
      >
        {m[1]}
      </a>
    );
  });
}

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
            {renderText(p)}
          </p>
        ))}
      {Array.isArray(section.bullets) && section.bullets.length > 0 && (
        <ul className="my-4 space-y-3 text-slate-700 list-disc list-inside">
          {section.bullets.map((b: any, idx: number) => (
            <li key={idx} className="leading-relaxed">
              {typeof b === "string" ? (
                renderText(b)
              ) : (
                <>
                  {b.label && <strong className="text-slate-900 font-semibold">{b.label}: </strong>}
                  <span>{renderText(b.text || "")}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Simple pairing table. Columns come from the keys of the first row,
// so it works with whatever fields the JSON file uses.
function PairingTable({ caption, rows }: { caption?: string; rows: any[] }) {
  const columns = Object.keys(rows[0] || {});
  if (columns.length === 0) return null;
  const label = (key: string) =>
    key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

  return (
    <div className="my-8 not-prose">
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="min-w-full text-left text-sm">
          {caption && (
            <caption className="px-4 py-3 text-left text-base font-semibold text-slate-900">
              {caption}
            </caption>
          )}
          <thead className="bg-slate-50 text-slate-900">
            <tr>
              {columns.map((col) => (
                <th key={col} scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                  {label(col)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {rows.map((row: any, i: number) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td key={col} className="px-4 py-3 align-top">
                    {renderText(row[col])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
  const tableRows = Array.isArray(content.tableRows) ? content.tableRows : [];
  const afterTable = Array.isArray(content.afterTable) ? content.afterTable : [];

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

      {/* 4b. Pairing table */}
      {tableRows.length > 0 && (
        <PairingTable caption={content.tableCaption} rows={tableRows} />
      )}

      {/* 4c. Sections after the table */}
      {afterTable.map((section: any, idx: number) => (
        <SectionBlock key={`after-${idx}`} section={section} />
      ))}

      {/* 5. FAQs */}
      {faqs && faqs.length > 0 && <FAQAccordion items={faqs} />}
    </div>
  );
}
