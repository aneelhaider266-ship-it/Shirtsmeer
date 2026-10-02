import Link from "next/link";
import type { Metadata } from "next";
import { Clock, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Contact ShirtsMeer | Editorial & Style Questions" },
  description:
    "Get in touch with the ShirtsMeer team. Send styling questions, feedback or suggestions for new men's shirt and pants color guides.",
  alternates: { canonical: "https://shirtsmeer.com/contact" },
};

const link = "font-semibold text-blue-600 hover:underline";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Contact the ShirtsMeer Team
      </h1>
      <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600">
        Have a question about a tricky color pairing, an idea for a new guide, or feedback on something we
        published? We would like to hear from you.
      </p>

      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <Mail className="mb-2 h-6 w-6 text-blue-600" />
          <h2 className="mb-1 text-base font-bold text-slate-900">Email</h2>
          <p className="mb-2 text-xs text-slate-600">For all questions and feedback:</p>
          <a href="mailto:contact@shirtsmeer.com" className="text-sm font-semibold text-blue-600 hover:underline">
            contact@shirtsmeer.com
          </a>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <Clock className="mb-2 h-6 w-6 text-blue-600" />
          <h2 className="mb-1 text-base font-bold text-slate-900">Response Time</h2>
          <p className="text-xs text-slate-600">
            We aim to reply to reader emails within a few business days.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <MessageSquare className="mb-2 h-6 w-6 text-blue-600" />
          <h2 className="mb-1 text-base font-bold text-slate-900">Style Requests</h2>
          <p className="text-xs text-slate-600">
            Asking about a specific outfit? Mention the exact shirt and trouser colors and the occasion.
          </p>
        </div>
      </div>

      <div className="space-y-4 border-t border-slate-200 pt-8 leading-relaxed text-slate-700">
        <h2 className="text-2xl font-bold text-slate-900">Before You Write to Us</h2>
        <p>
          ShirtsMeer is built on simple, long-lasting color rules instead of fast-moving trends. If you are
          trying to pair a patterned shirt with{" "}
          <Link href="/blog/what-color-shirt-goes-with-brown-pants" className={link}>dark brown trousers</Link>, or you
          are working out what suits{" "}
          <Link href="/blog/what-color-shirt-goes-with-grey-pants" className={link}>charcoal grey dress pants</Link>, the
          answer may already be in one of our guides. Reader questions also help us decide what to write next.
        </p>
        <p>
          We have published detailed comparison tables for{" "}
          <Link href="/blog/what-color-shirt-goes-with-navy-pants" className={link}>navy blue trousers</Link> and four
          other core trouser colors, and you can see every guide on the{" "}
          <Link href="/blog" className={link}>guides page</Link>. Checking there first is often the fastest way to
          get an answer.
        </p>
        <p>
          Please note that ShirtsMeer is an editorial site. We do not sell clothing, we do not offer personal
          shopping, and we cannot review photos of individual outfits, but we are glad to explain a color
          rule, clarify something in a guide, or point you to the article that covers your question best.
        </p>
        <p>
          We also welcome corrections. If you spot a mistake in a guide, a broken link or a color
          suggestion that does not match your experience, tell us which page you were reading and what you
          noticed, and we will review it and update the guide where needed.
        </p>
        <p>
          When you do write, a short message with the garments, the colors and the dress code gives us what
          we need to help. For details about how we handle the information you send us, read our{" "}
          <Link href="/privacy-policy" className={link}>privacy policy</Link>. We look forward to helping you build a
          sharper, more cohesive wardrobe.
        </p>
      </div>
    </div>
  );
}
