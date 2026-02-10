import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal — Terms of Use & Privacy Policy",
  description: "CheapRetreats terms of use, privacy policy, and legal information.",
  alternates: { canonical: "https://cheapretreats.com/legal" },
};

export default function LegalPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-warm-100/30 to-warm-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-sage-900 mb-4">
            Legal
          </h1>
          <p className="text-sage-600 text-lg">
            Transparency in everything — including the fine print.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-16">
            <h2 className="font-serif text-2xl font-semibold text-sage-900 mb-6">Terms of Use</h2>
            <div className="space-y-4 text-sage-600 leading-relaxed text-sm">
              <p>
                By using CheapRetreats.com (&ldquo;the Site&rdquo;), you agree to these terms.
              </p>
              <h3 className="font-semibold text-sage-800 text-base pt-2">What We Provide</h3>
              <p>
                CheapRetreats provides information about healing retreats, including
                pricing, descriptions, safety scores, and reviews. We are a discovery
                and recommendation platform — not a retreat provider. We do not operate
                retreats, employ facilitators, or provide therapeutic services.
              </p>
              <h3 className="font-semibold text-sage-800 text-base pt-2">Accuracy</h3>
              <p>
                We strive to keep all information accurate and up to date. However,
                retreat pricing, availability, and policies can change. Always verify
                details directly with the retreat center before booking.
              </p>
              <h3 className="font-semibold text-sage-800 text-base pt-2">Not Medical Advice</h3>
              <p>
                Nothing on this site constitutes medical, therapeutic, or psychological
                advice. If you are in crisis, please contact a mental health professional
                or crisis line. Retreats can be a helpful complement to professional
                care but are not a substitute for it.
              </p>
              <h3 className="font-semibold text-sage-800 text-base pt-2">User Conduct</h3>
              <p>
                Reviews submitted to CheapRetreats must be honest and based on personal
                experience. We reserve the right to remove reviews that are fraudulent,
                defamatory, or submitted by retreat operators about their own properties.
              </p>
              <h3 className="font-semibold text-sage-800 text-base pt-2">Affiliate Relationships</h3>
              <p>
                Some links on our site may generate commissions. This never affects our
                editorial independence, safety scoring, or which retreats we recommend.
                We disclose affiliate relationships transparently.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-2xl font-semibold text-sage-900 mb-6">Privacy Policy</h2>
            <div className="space-y-4 text-sage-600 leading-relaxed text-sm">
              <h3 className="font-semibold text-sage-800 text-base">What We Collect</h3>
              <p>
                If you subscribe to our newsletter, we collect your email address.
                We use standard analytics to understand how people use the site.
                We do not sell, share, or rent your personal information to third
                parties.
              </p>
              <h3 className="font-semibold text-sage-800 text-base pt-2">Cookies</h3>
              <p>
                We use minimal cookies for site functionality and anonymous analytics.
                We do not use tracking cookies for advertising.
              </p>
              <h3 className="font-semibold text-sage-800 text-base pt-2">Your Rights</h3>
              <p>
                You can request deletion of your data at any time by emailing
                hello@cheapretreats.com. We will respond within 30 days.
              </p>
              <h3 className="font-semibold text-sage-800 text-base pt-2">Third-Party Links</h3>
              <p>
                Our site contains links to retreat centers and other third-party
                websites. We are not responsible for their privacy practices.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-2xl font-semibold text-sage-900 mb-6">Copyright</h2>
            <div className="space-y-4 text-sage-600 leading-relaxed text-sm">
              <p>
                &copy; {new Date().getFullYear()} CheapRetreats.com. All rights reserved.
              </p>
              <p>
                All content on this site — including text, design, images, data,
                the No Bullshit Healing Index, and the CheapRetreats Verified badge —
                is the intellectual property of CheapRetreats.com and may not be
                reproduced without permission.
              </p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-warm-200/60">
            <p className="text-sage-500 text-sm mb-4">
              Questions about our legal policies?
            </p>
            <p className="text-sage-700 font-medium">
              hello@cheapretreats.com
            </p>
            <div className="mt-8">
              <Link href="/" className="text-sage-500 hover:text-sage-700 text-sm transition-colors">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
