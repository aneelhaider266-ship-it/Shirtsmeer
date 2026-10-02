import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About ShirtsMeer | Practical Men's Color Rules" },
  description:
    "ShirtsMeer publishes clear color pairing rules to help men style dress shirts, chinos and trousers without second-guessing every outfit.",
  alternates: { canonical: "https://shirtsmeer.com/about" },
};

const link = "font-semibold text-blue-600 hover:underline";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        About ShirtsMeer: Simple Color Rules for Men's Outfits
      </h1>

      <div className="space-y-6 leading-relaxed text-slate-700">
        <p className="text-lg font-medium text-slate-800">
          ShirtsMeer exists to solve a small but constant problem: standing in front of a closet full of
          good shirts and trousers without knowing which ones actually look right together.
        </p>

        <p>
          Many fashion websites rely on trend language that is hard to apply on a normal Tuesday morning.
          Most men do not need to know what appeared on a runway last season. They need to know whether a
          chambray shirt works with{" "}
          <Link href="/blog/what-color-shirt-goes-with-olive-green-pants" className={link}>olive green chinos</Link>, or
          whether dark brown shoes look right with{" "}
          <Link href="/blog/what-color-shirt-goes-with-navy-pants" className={link}>navy blue trousers</Link>. That is
          the kind of question we answer.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-slate-900">Our Approach</h2>
        <p>
          We use basic color theory, an understanding of fabric and common sense about how people dress.
          Every combination in our guides is checked against three questions:
        </p>

        <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="mb-1 font-bold text-slate-900">1. Contrast</h3>
            <p className="text-xs text-slate-600">
              Is the shirt clearly lighter or darker than the pants, so the outfit looks balanced and not flat?
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="mb-1 font-bold text-slate-900">2. Fabric</h3>
            <p className="text-xs text-slate-600">
              Do the textures suit each other, such as Oxford cotton with twill chinos or poplin with wool?
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="mb-1 font-bold text-slate-900">3. Finishing</h3>
            <p className="text-xs text-slate-600">
              Do the shoes and belt complete the outfit, so that no single piece looks out of place?
            </p>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-bold text-slate-900">Who We Write For</h2>
        <p>
          Our readers are men who want to look put together without spending hours on fashion. Some are
          starting a first office job, some are dressing for a wedding, and some simply want to get more use
          out of the clothes they already own. We write in plain language, explain the reason behind each
          rule, and avoid assuming that you know tailoring terms already.
        </p>

        <p>
          We focus on wardrobe staples that stay useful for years, such as{" "}
          <Link href="/blog/what-color-shirt-goes-with-grey-pants" className={link}>grey trousers</Link> and{" "}
          <Link href="/blog/what-color-shirt-goes-with-khaki-pants" className={link}>khaki pants</Link>, instead of
          pushing seasonal pieces. The rules in our guides should be just as helpful ten years from now as
          they are today.
        </p>

        <p>
          Browse the full collection on the{" "}
          <Link href="/blog" className={link}>guides page</Link>, or go back to the{" "}
          <Link href="/" className={link}>home page</Link>. If you have a wardrobe question that our guides do not
          answer yet, send it through the{" "}
          <Link href="/contact" className={link}>contact page</Link> and we may cover it in a future article.
        </p>
      </div>
    </div>
  );
}
