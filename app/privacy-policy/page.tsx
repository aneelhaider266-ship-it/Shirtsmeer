import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | ShirtsMeer" },
  description:
    "Learn how ShirtsMeer handles server logs, Google Analytics, Microsoft Clarity, advertising technologies, affiliate links and privacy requests.",
  alternates: { canonical: "https://shirtsmeer.com/privacy-policy" },
};

const link = "font-semibold text-blue-600 hover:underline";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mb-8 text-xs text-slate-500">Last updated: November 16, 2026</p>

      <div className="space-y-6 leading-relaxed text-slate-700">
        <p>
          This policy explains how ShirtsMeer (shirtsmeer.com) handles information when
          you visit our men's clothing guides, color-matching tool and other pages.
          For questions or privacy requests, contact info@shirtsmeer.com.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">1. Information collected</h2>
        <p>
          Our hosting and security services may process standard request and server-log
          information, such as your IP address, browser and device details, referring
          page, requested URL, and the date and time of a visit. We use this information
          to operate, secure and troubleshoot the website.
        </p>
        <p>
          We do not require visitors to create an account and our website does not
          provide a visitor account profile. If you email us, we receive the email
          address and message you choose to send.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">2. Google Analytics</h2>
        <p>
          ShirtsMeer uses Google Analytics 4 to understand how visitors use the site.
          Depending on the available settings and consent signals, Google Analytics may
          process information such as page views, interaction events, session
          statistics, approximate location, browser and device information. On websites,
          Google Analytics can use first-party cookies, including the _ga cookie, to
          distinguish browsers and sessions.
        </p>
        <p>
          Learn more in Google's{" "}
          <a href="https://policies.google.com/privacy" className={link} target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{" "}
          and its{" "}
          <a href="https://support.google.com/analytics/answer/11593727" className={link} target="_blank" rel="noopener noreferrer">
            explanation of Analytics data collection
          </a>.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">3. Microsoft Clarity</h2>
        <p>
          We use Microsoft Clarity to understand how visitors interact with pages.
          Clarity may collect usage and interaction information such as page navigation,
          clicks, scrolling and browser or device details, and may create session
          recordings or heatmaps using page content and user actions. Clarity uses
          cookies and related technologies when enabled and permitted by the applicable
          settings and consent signals.
        </p>
        <p>
          See Microsoft's{" "}
          <a href="https://privacy.microsoft.com/privacystatement" className={link} target="_blank" rel="noopener noreferrer">
            Privacy Statement
          </a>{" "}
          and{" "}
          <a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies" className={link} target="_blank" rel="noopener noreferrer">
            Clarity cookie documentation
          </a>.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">4. Advertising and Google AdSense</h2>
        <p>
          ShirtsMeer has integrated Google AdSense advertising code. If Google ads are
          served on our pages, Google and its advertising partners may use cookies,
          web beacons, IP addresses or similar identifiers to deliver and measure ads,
          limit repeated impressions, detect invalid activity and, where enabled and
          permitted, personalize advertising based on visits to this or other websites.
          The technologies used depend on Google's settings, the user's choices and
          applicable law.
        </p>
        <p>
          You can manage Google's ad-personalization choices through{" "}
          <a href="https://adssettings.google.com/" className={link} target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>. Google's{" "}
          <a href="https://support.google.com/adsense/answer/7549925" className={link} target="_blank" rel="noopener noreferrer">
            explanation of how AdSense uses cookies
          </a>{" "}
          provides further details.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">5. Affiliate links</h2>
        <p>
          Some articles contain affiliate links, including links to Amazon and other
          retailers. If you follow an affiliate link, the retailer or affiliate
          programme may use cookies or similar technologies to attribute a qualifying
          purchase or referral. Those third-party services operate under their own
          privacy policies. ShirtsMeer does not control their tracking or data
          practices.
        </p>
        <p>
          Read our{" "}
          <Link href="/disclaimer" className={link}>Affiliate &amp; Editorial Disclosure</Link>{" "}
          for information about our commercial relationships.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">6. Cookies and privacy choices</h2>
        <p>
          Analytics, advertising and affiliate technologies may use cookies or similar
          identifiers. You can manage or delete cookies through your browser settings.
          Where applicable, Google and Microsoft provide additional privacy and
          advertising controls through their own services. Browser-level blocking may
          affect some analytics or advertising functions but should not prevent access
          to the editorial guides.
        </p>
        <p>
          For more detail, see our{" "}
          <Link href="/cookie-policy" className={link}>Cookie Policy</Link>.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">7. Sharing and retention</h2>
        <p>
          Information may be processed by our hosting provider and the third-party
          services described above to provide their respective services. We do not sell
          personal information. Retention periods are determined by the relevant
          service, account settings, security needs and applicable requirements. Emails
          are retained as needed to respond and maintain relevant correspondence.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">8. Your rights and contact</h2>
        <p>
          Depending on where you live, privacy laws may give you rights to request
          access to, correction of or deletion of personal information, or to object to
          certain processing. To submit a request or ask a question, email
          info@shirtsmeer.com. We may need to verify a request before responding.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">9. Changes to this policy</h2>
        <p>
          We may update this policy when our services or practices change. The date at
          the top of this page indicates when the policy was most recently revised.
        </p>
      </div>
    </div>
  );
}
