import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About ShirtsMeer | Practical Men's Color Rules" },
  description:
    "Learn how ShirtsMeer researches men's clothing, shirt-and-trouser color combinations, fabric guides and product comparisons.",
  alternates: { canonical: "https://shirtsmeer.com/about" },
};

const link = "font-semibold text-blue-600 hover:underline";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        About ShirtsMeer: Practical Men's Style Guidance
      </h1>

      <div className="space-y-6 leading-relaxed text-slate-700">
        <p className="text-lg font-medium text-slate-800">
          ShirtsMeer helps men make clearer everyday clothing decisions, especially
          when choosing shirt colors for trousers, selecting shirt fabrics and
          understanding how fit changes the way an outfit looks.
        </p>

        <p>
          Instead of relying on trend language, we answer practical questions:
          whether a chambray shirt works with{" "}
          <Link href="/blog/what-color-shirt-goes-with-olive-green-pants" className={link}>
            olive green chinos
          </Link>, how to choose a shirt for{" "}
          <Link href="/blog/what-color-shirt-goes-with-grey-pants" className={link}>
            grey trousers
          </Link>, and when Oxford cloth is a better choice than poplin or twill.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-slate-900">How We Build Our Guides</h2>
        <p>
          Our styling guides use practical color relationships and garment context.
          We consider the lightness and depth of each color, warm or cool undertones,
          fabric texture, fit, footwear and the formality of the occasion. A pairing
          that works for relaxed chinos may not be appropriate for a formal office or
          an evening event, so we explain the context rather than treating every
          combination as universal.
        </p>

        <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="mb-1 font-bold text-slate-900">Color and contrast</h3>
            <p className="text-sm text-slate-600">
              We explain how light, dark, warm and cool shades work together and
              where a stronger contrast helps.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="mb-1 font-bold text-slate-900">Fabric and fit</h3>
            <p className="text-sm text-slate-600">
              We consider weave, texture, garment shape and the way a piece is
              intended to be worn.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="mb-1 font-bold text-slate-900">Occasion and finish</h3>
            <p className="text-sm text-slate-600">
              We explain how shoes, belts and dress codes affect whether an outfit
              feels casual, smart-casual or formal.
            </p>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-bold text-slate-900">Product Research and Reviews</h2>
        <p>
          Brand and product articles are based on the information identified in each
          guide, such as manufacturers' product descriptions, published fabric
          specifications, size charts, care instructions and stated return policies.
          We link to relevant brand information where it supports a buying detail.
          Product specifications, prices, stock and policies can change, so readers
          should confirm the current details on the retailer's page before ordering.
        </p>
        <p>
          A research-based comparison is not the same as a hands-on test. Unless an
          article explicitly says that a product was personally tested, we do not
          claim first-hand wear, wash, fit or durability results. Where we have not
          tested a product, we explain the limits of the available information and
          focus on helping readers compare the options.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-slate-900">Corrections and Updates</h2>
        <p>
          We review guides when important product information changes or a reader
          identifies a possible error. If you spot an inaccurate detail, broken
          source or unclear recommendation, please send the page URL and a short
          explanation through our{" "}
          <Link href="/contact" className={link}>contact page</Link>. We assess
          corrections and update content when the evidence supports a change.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-slate-900">Who We Write For</h2>
        <p>
          Our readers include men building a work wardrobe, choosing an outfit for an
          event or getting more use from clothes they already own. We aim to explain
          the reason behind a recommendation in plain language, without assuming
          specialist tailoring knowledge.
        </p>
        <p>
          Explore the full collection on the{" "}
          <Link href="/blog" className={link}>guides page</Link>, or try the{" "}
          <Link href="/color-matcher" className={link}>interactive Color Matcher</Link>{" "}
          to compare shirt and trouser combinations.
        </p>

        <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Founder &amp; Editor</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Aneel Haider</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            ShirtsMeer is founded and edited by Aneel Haider. He oversees the
            publication's men's clothing guides, with a focus on shirt-and-trouser
            color combinations, wardrobe basics and everyday styling decisions.
          </p>
          <Link href="/author/aneel-haider" className="mt-4 inline-flex font-semibold text-blue-700 hover:underline">
            Meet the founder and editor
          </Link>
        </section>
      </div>
    </div>
  );
}
