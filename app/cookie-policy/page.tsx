import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | ShirtsMeer",
  description:
    "See how Google Analytics, Microsoft Clarity, Google AdSense and affiliate partners may use cookies and similar technologies on ShirtsMeer.",
  alternates: { canonical: "https://shirtsmeer.com/cookie-policy" },
};

const link = "font-semibold text-blue-600 hover:underline";

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Cookie Policy
      </h1>
      <p className="mb-8 text-xs text-slate-500">Last updated: November 16, 2026</p>

      <div className="space-y-6 leading-relaxed text-slate-700">
        <p>
          This policy explains how ShirtsMeer uses cookies and similar technologies.
          These technologies may be set by ShirtsMeer or by third-party services used
          for analytics, advertising and affiliate referrals. For broader information
          about personal information, read our{" "}
          <Link href="/privacy-policy" className={link}>Privacy Policy</Link>.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">1. What cookies do</h2>
        <p>
          Cookies are small files stored by a browser. Similar technologies, such as
          tags, pixels and browser identifiers, can also help services recognize a
          browser, measure visits, remember settings, attribute referrals or support
          advertising.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">2. Services used on ShirtsMeer</h2>
        <h3 className="text-lg font-bold text-slate-900">Google Analytics 4</h3>
        <p>
          We use Google Analytics 4 to measure site usage, such as page views, sessions,
          interactions, approximate location, and browser or device information. Google
          Analytics may use first-party cookies, including _ga, to distinguish browsers
          and sessions. See Google's{" "}
          <a href="https://support.google.com/analytics/answer/11397207" className={link} target="_blank" rel="noopener noreferrer">
            GA4 cookie documentation
          </a>.
        </p>

        <h3 className="text-lg font-bold text-slate-900">Microsoft Clarity</h3>
        <p>
          We use Microsoft Clarity to understand page interactions. Depending on
          settings and consent signals, Clarity may use cookies such as _clck and _clsk
          to associate interaction data and sessions. Its tools can provide heatmaps
          and reconstructed session recordings showing page content and actions such
          as clicks and scrolling. See Microsoft's{" "}
          <a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies" className={link} target="_blank" rel="noopener noreferrer">
            Clarity cookie documentation
          </a>.
        </p>

        <h3 className="text-lg font-bold text-slate-900">Google AdSense</h3>
        <p>
          Google AdSense code is integrated into the site. When ad tags make requests
          to Google's services, Google may use cookies or similar identifiers for
          advertising relevance, frequency capping, reporting and invalid-activity
          prevention. Personalized advertising depends on the settings and choices
          available to Google and the visitor. See{" "}
          <a href="https://support.google.com/adsense/answer/7549925" className={link} target="_blank" rel="noopener noreferrer">
            How AdSense uses cookies
          </a>.
        </p>

        <h3 className="text-lg font-bold text-slate-900">Affiliate retailers</h3>
        <p>
          When you click an affiliate link, the retailer or affiliate programme may
          store or read cookies or similar identifiers to attribute a referral or
          qualifying purchase. These technologies are controlled by the relevant
          third party, not by ShirtsMeer.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">3. Managing cookies</h2>
        <p>
          You can block, restrict or delete cookies through your browser settings.
          Google also provides{" "}
          <a href="https://adssettings.google.com/" className={link} target="_blank" rel="noopener noreferrer">
            Ads Settings
          </a>{" "}
          for advertising preferences. Blocking cookies may limit some analytics,
          session-analysis or advertising functions, but the site's editorial content
          remains available.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">4. Consent and regional requirements</h2>
        <p>
          Cookie and tracking requirements vary by country and region. Where applicable
          law requires consent before non-essential cookies or similar technologies are
          used, the site operator must obtain and respect the required consent signals.
          This policy explains the technologies; it is not itself a consent control.
          We are responsible for configuring the site's consent settings to meet the
          requirements that apply to its visitors and advertising services.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">5. Changes and contact</h2>
        <p>
          We may update this policy when our services or practices change. If you have
          questions, contact info@shirtsmeer.com or use our{" "}
          <Link href="/contact" className={link}>Contact page</Link>.
        </p>
      </div>
    </div>
  );
}
