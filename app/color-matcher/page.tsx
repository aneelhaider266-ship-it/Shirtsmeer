import type { Metadata } from "next";
import Link from "next/link";
import ColorMatcherTool from "@/components/ColorMatcherTool";
import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Color Wheel for Clothes: Outfit Color Matcher",
  description:
    "Use our interactive color wheel for clothes to find matching shirt and pant combinations. Select your trouser shade for instant outfits and shoe rules.",
  alternates: {
    canonical: "https://shirtsmeer.com/color-matcher",
  },
};

const TOOL_FAQS: FAQItem[] = [
  {
    question: "How does the color wheel for clothes matching work?",
    answer:
      "The menswear color wheel pairs garments based on three classical relationships: complementary contrast (colors opposite on the wheel like blue and brown), analogous harmony (adjacent colors like green and khaki), and neutral anchoring (pairing achromatic neutrals like grey, white, and navy with any hue).",
  },
  {
    question: "What is the safest shirt and pants color combination for men?",
    answer:
      "A crisp white button-down shirt paired with tailored midnight navy blue or charcoal grey trousers is the most universally flattering and professional combination in menswear.",
  },
  {
    question: "Can you wear a black shirt with khaki pants?",
    answer:
      "Yes. A matte black shirt paired with classic light khaki pants creates sharp, modern minimalist contrast for evening dinners. Complete the outfit with clean black leather Chelsea boots.",
  },
  {
    question: "How do I match shoe leather with my shirt and pants combo?",
    answer:
      "Always match your shoes to the formality and temperature of your trousers. Dark navy and charcoal pants pair best with black oxfords or dark brown leather. Khaki and brown chinos pair naturally with cognac, walnut loafers, or clean white sneakers.",
  },
  {
    question: "Why should you avoid matching your shirt to your exact pant color?",
    answer:
      "Unless wearing a formal matching suit cut from the exact same cloth, wearing a shirt that is nearly identical to your trousers creates a flat, uniform look that makes you appear shorter.",
  },
];

export default function ColorMatcherPage() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ShirtsMeer Clothes Color Matcher",
    url: "https://shirtsmeer.com/color-matcher",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    description:
      "Free interactive color wheel for clothes tool to find matching shirt and pant combinations, footwear pairings, and color clash alerts for men.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {/* JSON-LD WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* Header */}
      <header className="text-center max-w-3xl mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Menswear Color Theory Generator
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-3 mb-4">
          Color Wheel for Clothes: Interactive Shirt & Pant Color Matcher
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Take the guesswork out of dressing. Use our free clothes color wheel generator to find balanced shirt and pants color combinations, leather footwear pairing rules, and color clashes to avoid.
        </p>
      </header>

      {/* Interactive Tool Component */}
      <ColorMatcherTool />

      {/* In-Depth Informational Guide (High Text Depth to Prevent Thin Content) */}
      <article className="prose prose-slate max-w-none text-slate-800 leading-relaxed mt-14 bg-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          How to Use the Clothes Color Wheel for Men's Outfits
        </h2>
        <p>
          Most men struggle with daily style choices not because they lack quality garments, but because they assemble outfits without understanding value contrast and color temperature. A tailored pair of trousers instantly loses its sophistication when paired with a shirt that shares an identical visual weight or clashes in chromatic warmth.
        </p>
        <p>
          Our interactive <strong>color wheel for clothes</strong> applies classical color harmony formulas specifically adapted for masculine tailoring:
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          1. Neutral Anchoring (The 80/20 Rule)
        </h3>
        <p>
          Foundational trousers—such as{" "}
          <Link href="/blog/what-color-shirt-goes-with-grey-pants" className="text-blue-600 font-medium hover:underline">
            tailored grey pants
          </Link>{" "}
          and{" "}
          <Link href="/blog/what-color-shirt-goes-with-navy-pants" className="text-blue-600 font-medium hover:underline">
            midnight navy trousers
          </Link>
          —serve as achromatic or near-neutral anchors. Because they carry low chromatic competition, they safely accommodate high-contrast white shirts, cool pastels, and textured weaves without clashing.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          2. Complementary Contrast (Opposites on the Wheel)
        </h3>
        <p>
          Colors that sit opposite each other on the color wheel create maximum visual energy. The classic menswear example is pairing a sky blue chambray shirt with{" "}
          <Link href="/blog/what-color-shirt-goes-with-brown-pants" className="text-blue-600 font-medium hover:underline">
            rich chocolate brown pants
          </Link>
          . Blue's cool undertones neutralize the warm orange-red base of the brown cotton, creating an eye-catching, sophisticated balance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          3. Value Contrast (Dark vs. Light)
        </h3>
        <p>
          When styling lighter bottoms like{" "}
          <Link href="/blog/what-color-shirt-goes-with-khaki-pants" className="text-blue-600 font-medium hover:underline">
            classic tan khaki chinos
          </Link>
          , you must provide grounding contrast up top. A deep navy button-up shirt visually broadens the chest and shoulders while slimming the waistline, preventing the washed-out appearance caused by pale tone-on-tone dressing.
        </p>
      </article>

      {/* Tool FAQs with FAQPage Schema */}
      <FAQAccordion items={TOOL_FAQS} />
    </div>
  );
}
