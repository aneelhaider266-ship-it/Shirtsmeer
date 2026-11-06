
import React from "react";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import FAQAccordion from "@/components/FAQAccordion";
import ColorSwatch from "@/components/ColorSwatch";

// Turns [link text](https://...) inside a string into a real link.
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
        rel="noopener noreferrer"
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
          <p
            key={idx}
            className="my-4 text-slate-700 leading-relaxed text-base"
          >
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
                  {b.label && (
                    <strong className="text-slate-900 font-semibold">
                      {b.label}:{" "}
                    </strong>
                  )}
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

// Responsive shirt and outfit pairing table.
function PairingTable({
  caption,
  rows,
}: {
  caption?: string;
  rows: any[];
}) {
  const columns = Object.keys(rows[0] || {});

  if (columns.length === 0) return null;

  const label = (key: string) =>
    key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

  return (
    <div className="my-8 not-prose">
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="min-w-full text-left text-sm">
          {caption && (
            <caption className="px-4 py-3 text-left text-base font-semibold text-slate-900">
              {caption}
            </caption>
          )}

          <thead className="bg-slate-50 text-slate-900">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-4 py-3 font-semibold whitespace-nowrap"
                >
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

// Amazon affiliate product recommendations.
function ProductRecommendations({
  products,
  heading,
  intro,
}: {
  products: any[];
  heading?: string;
  intro?: string;
}) {
  const validProducts = products.filter(
    (product) =>
      product &&
      typeof product.name === "string" &&
      typeof product.url === "string" &&
      /^https?:\/\//i.test(product.url)
  );

  if (validProducts.length === 0) return null;

  return (
    <section className="my-12 not-prose" aria-label="Product recommendations">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {heading || "Recommended Men's Outfit Essentials"}
        </h2>

        {intro && (
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {intro}
          </p>
        )}
      </div>

      <p className="mb-4 text-xs leading-relaxed text-slate-500">
        As an Amazon Associate I earn from qualifying purchases.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {validProducts.map((product, idx) => (
          <article
            key={`${product.url}-${idx}`}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            {product.category && (
              <span className="mb-3 inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {product.category}
              </span>
            )}

            <h3 className="text-lg font-bold leading-snug text-slate-900">
              {product.name}
            </h3>

            {product.description && (
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {product.description}
              </p>
            )}

            <a
              href={product.url}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              aria-label={`View ${product.name} on Amazon`}
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              View on Amazon
            </a>
          </article>
        ))}
      </div>
    </section>
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

  const sections = Array.isArray(content.sections)
    ? content.sections
    : [];

  const faqs = Array.isArray(content.faqs)
    ? content.faqs
    : post?.faqs || [];

  const swatches = Array.isArray(content.swatches)
    ? content.swatches
    : [];

  const tableRows = Array.isArray(content.tableRows)
    ? content.tableRows
    : [];

  const afterTable = Array.isArray(content.afterTable)
    ? content.afterTable
    : [];

  const products = Array.isArray(content.products)
    ? content.products
    : [];

  return (
    <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed">
      {/* 1. Quick Answer */}
      {content.quickAnswer && (
        <QuickAnswerBox title={content.quickAnswerTitle || "Quick Answer"}>
          {content.quickAnswer}
        </QuickAnswerBox>
      )}

      {/* 2. Introduction */}
      {content.intro && (
        <p className="my-6 text-lg font-normal leading-relaxed text-slate-700">
          {content.intro}
        </p>
      )}

      {/* 3. Color Swatches */}
      {swatches.length > 0 && (
        <div className="my-6 not-prose">
          <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-500">
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

      {/* 4. Article Sections */}
      {sections.map((section: any, idx: number) => (
        <SectionBlock key={idx} section={section} />
      ))}

      {/* 5. Pairing Table */}
      {tableRows.length > 0 && (
        <PairingTable
          caption={content.tableCaption}
          rows={tableRows}
        />
      )}

      {/* 6. Additional Sections */}
      {afterTable.map((section: any, idx: number) => (
        <SectionBlock key={`after-${idx}`} section={section} />
      ))}

      {/* 7. Amazon Product Recommendations */}
      {products.length > 0 && (
        <ProductRecommendations
          products={products}
          heading={content.productsHeading}
          intro={content.productsIntro}
        />
      )}

      {/* 8. FAQs */}
      {faqs.length > 0 && <FAQAccordion items={faqs} />}
    </div>
  );
}
