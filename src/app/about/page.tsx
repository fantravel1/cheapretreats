import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About CheapRetreats — Healing Should Not Be a Luxury Good",
  description:
    "CheapRetreats is a global retreat discovery platform built on one belief: healing should not be a luxury good. Learn about our mission, values, and team.",
  alternates: { canonical: "https://cheapretreats.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sage-100/40 to-warm-50 py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            About CheapRetreats
          </h1>
          <p className="text-xl md:text-2xl text-sage-600 font-serif italic">
            Healing should not be a luxury good.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-sage-600 leading-relaxed text-lg">
            <p>
              CheapRetreats started with a question:
            </p>
            <blockquote className="font-serif text-2xl text-sage-800 italic border-l-4 border-sage-300 pl-6 py-2">
              &ldquo;Why does getting rest feel like something only rich people
              can afford?&rdquo;
            </blockquote>
            <p>
              The wellness industry is a $1.8 trillion market. Most of it caters
              to people who already have money, time, and access. The rest of
              us — the burned out, the grieving, the broke, the exhausted — are
              left with articles that say &ldquo;take a bath&rdquo; and
              &ldquo;practice gratitude.&rdquo;
            </p>
            <p>
              That&rsquo;s not enough.
            </p>
            <p>
              CheapRetreats exists to connect real people with real places where
              they can rest, heal, and stop — without needing $5,000 and a linen
              wardrobe.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              What we do
            </h2>
            <div className="space-y-4">
              {[
                { title: "Find", desc: "We research and catalog affordable retreats worldwide — monasteries, ashrams, co-ops, nonprofit centers, and more." },
                { title: "Verify", desc: "Every retreat goes through our No Bullshit Healing Index — scored on safety, consent, trauma awareness, and price transparency." },
                { title: "Organize", desc: "We sort retreats by what you actually need — burnout recovery, grief, quiet, stopping — not by marketing category." },
                { title: "Connect", desc: "We help you find the right retreat for your need, budget, and preferences. No affiliate-driven recommendations." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
                  <span className="font-serif font-semibold text-sage-800 whitespace-nowrap">{item.title}</span>
                  <span className="text-sage-600 text-sm leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              What we don&rsquo;t do
            </h2>
            <div className="space-y-3">
              {[
                "We don't accept payment for listings or reviews",
                "We don't use manipulative funnels, countdown timers, or fear-based sales",
                "We don't promote guru-led programs or cult-adjacent wellness",
                "We don't pretend healing is a 3-day product you can buy",
                "We don't monetize your vulnerability",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-3 bg-rose-50/50 rounded-lg border border-rose-100/60">
                  <svg className="w-4 h-4 text-rose-400 flex-shrink-0 mt-1" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M3.4 3.4a.8.8 0 011.1 0L8 6.9l3.4-3.4a.8.8 0 111.1 1.1L9.1 8l3.4 3.4a.8.8 0 11-1.1 1.1L8 9.1l-3.4 3.4a.8.8 0 11-1.1-1.1L6.9 8 3.4 4.6a.8.8 0 010-1.1z" />
                  </svg>
                  <span className="text-sage-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              How we sustain ourselves
            </h2>
            <div className="space-y-4 text-sage-600 leading-relaxed">
              <p>
                We believe in transparent monetization that aligns with our values:
              </p>
              <ul className="space-y-2">
                {[
                  "Commission on retreat bookings made through our platform",
                  "Affiliate partnerships with aligned travel insurance providers",
                  "Minimal, non-manipulative gear guides",
                  "Sponsorships from values-aligned nonprofits",
                  "Scholarship fund partnerships",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-sage-400">&mdash;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              Get in touch
            </h2>
            <p className="text-sage-600 leading-relaxed mb-6">
              Have a question, suggestion, or a retreat you think we should know about?
            </p>
            <p className="text-sage-700 font-medium">
              hello@cheapretreats.com
            </p>
          </div>

          <div className="mt-16 text-center py-12 border-t border-warm-200/60">
            <p className="font-display text-2xl font-semibold text-sage-900 mb-6">
              You deserve rest — even if you&rsquo;re broke.
            </p>
            <Link href="/start-here" className="inline-flex items-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Find Your Retreat
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
