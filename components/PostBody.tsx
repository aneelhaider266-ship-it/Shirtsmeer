import Link from "next/link";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import OutfitTable from "@/components/OutfitTable";
import FAQAccordion from "@/components/FAQAccordion";
import ColorSwatch from "@/components/ColorSwatch";
import { POSTS, type PostContent, type Section } from "@/lib/posts";

type Bullet = { label: string; text: string };

// Accepts either {label, text} objects or plain "Label: text" strings.
function toBullet(item: unknown): Bullet {
  if (typeof item === "string") {
    const i = item.indexOf(":");
    return i > 0
      ? { label: item.slice(0, i).trim(), text: item.slice(i + 1).trim() }
      : { label: item.slice(0, 30), text: item };
  }
  const b = item as Partial<Bullet>;
  return { label: String(b.label ?? ""), text: String(b.text ?? "") };
}

function SectionBlock({ section }: { section: Section }) {
  const bullets = ((section.bullets ?? []) as unknown[]).map(toBullet);

  return (
    <>
      <h2>{section.heading}</h2>
      {(section.paragraphs ?? []).map((p: string) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
      {bullets.length > 0 && (
        <ul>
          {bullets.map((b) => (
            <li key={b.label}>
              <strong>{b.label}:</strong> {b.text}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function PostBody({ slug, content }: { slug: string; content: PostContent }) {
  const related = POSTS.filter((p) => p.slug !== slug);

  return (
    <div>
      <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:mt-10 prose-a:text-blue-600">
        <QuickAnswerBox title={content.quickAnswerTitle ?? ""}>{content.quickAnswer ?? ""}</QuickAnswerBox>

        <p className="text-lg">{content.intro}</p>

        <div className="not-prose my-6">
          <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-500">
  {content.swatchHeading ?? "Color Palette"}
</h3>
          <div className="flex flex-wrap gap-2">
            {(content.swatches ?? []).map((s) => (
              <ColorSwatch key={s.name} colorName={s.name} hex={s.hex} role={s.role} />
            ))}
          </div>
        </div>

        {content.sections.map((s) => (
          <SectionBlock key={s.heading} section={s} />
        ))}

        <OutfitTable caption={content.tableCaption ?? ""} rows={content.tableRows ?? []} />

        {(content.afterTable ?? []).map((s) => (
          <SectionBlock key={s.heading} section={s} />
        ))}

        <div className="not-prose my-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-900">
            Related Trouser Color Guides
          </h3>
          <ul className="space-y-1 text-sm">
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="font-medium text-blue-600 hover:underline">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <FAQAccordion items={content.faqs ?? []} />
    </div>
  );
}
