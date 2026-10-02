import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | ShirtsMeer" },
  description:
    "Read the ShirtsMeer privacy policy to learn what data we collect, how we use cookies and analytics, and how to contact us about your privacy.",
  alternates: { canonical: "https://shirtsmeer.com/privacy-policy" },
};

const link = "font-semibold text-blue-600 hover:underline";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mb-8 font-mono text-xs text-slate-500">Last updated: October 2026</p>

      <div className="space-y-6 leading-relaxed text-slate-700">
        <p>
          This policy explains what information ShirtsMeer (
          <Link href="/" className={link}>shirtsmeer.com</Link>) collects when you visit our men's clothing and
          color matching guides, and how that information is used. We try to collect as little as possible.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
        <p>
          Like most websites, our hosting provider may automatically record standard log information when you
          visit. This can include your IP address, browser type, device type, referring page, the pages you
          open and the date and time of your visit. We use this information in aggregate to understand how
          the site is used and to keep it fast and secure. We do not ask visitors to create accounts, and we
          do not sell personal information.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">2. Cookies and Analytics</h2>
        <p>
          ShirtsMeer may use cookies or similar technologies, including those from analytics or advertising
          partners we add in the future, to measure traffic and improve the site. If we add services of this
          kind, we will update this page and, where the law requires it, ask for your consent. You can block
          or delete cookies in your browser settings, and the guides will continue to work normally.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">3. Third-Party Links</h2>
        <p>
          Our guides, such as those about styling{" "}
          <Link href="/blog/what-color-shirt-goes-with-grey-pants" className={link}>grey trousers</Link>,{" "}
          <Link href="/blog/what-color-shirt-goes-with-khaki-pants" className={link}>khaki pants</Link> or{" "}
          <Link href="/blog/what-color-shirt-goes-with-olive-green-pants" className={link}>olive green chinos</Link>, may
          link to other websites. We do not control those sites and are not responsible for their privacy
          practices, so please read their policies before sharing personal information.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">4. Emails You Send Us</h2>
        <p>
          If you email us, we use your address and message only to reply and to improve our guides. We do not
          share it with third parties for marketing.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">5. Your Rights and Contact</h2>
        <p>
          Depending on where you live, laws such as the GDPR or the CCPA may give you rights to access,
          correct or delete personal information we hold about you. To make a request or ask a question about
          this policy, use our{" "}
          <Link href="/contact" className={link}>contact page</Link> or email contact@shirtsmeer.com.
        </p>
      </div>
    </div>
  );
}
