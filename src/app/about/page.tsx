import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About CheapRetreats — Healing Should Not Be a Luxury Good",
  description:
    "CheapRetreats is a global retreat discovery platform built on one belief: healing should not be a luxury good. Learn about our mission, values, and team.",
  alternates: { canonical: "https://cheapretreats.com/about" },
};

const values = [
  {
    title: "Accessibility",
    description:
      "Healing spaces should be available to everyone, regardless of income, location, or background. We prioritize retreats that offer sliding scales, work-exchange, scholarships, and genuinely affordable pricing.",
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no manipulative pricing, no secret affiliate deals. We disclose how we make money, how retreats are scored, and why certain retreats are listed. If we cannot be honest about it, we do not do it.",
  },
  {
    title: "Anti-extraction",
    description:
      "The wellness industry too often extracts money from vulnerable people in exchange for promises it cannot keep. We refuse to participate in that cycle. We do not sell transformation. We help people find rest.",
  },
  {
    title: "Safety-first",
    description:
      "Every retreat we list has been vetted for safety, consent practices, and trauma awareness. We would rather have a smaller directory of genuinely safe places than a large one full of unknowns.",
  },
  {
    title: "Honesty",
    description:
      "We do not oversell what a retreat can do. A week of silence will not fix your life. But it might give you enough space to breathe. We believe people deserve honest descriptions of what to expect.",
  },
  {
    title: "Community",
    description:
      "Healing does not happen in isolation. We support community-run retreat models, peer-led programs, and spaces where people take care of each other — not just spaces where services are delivered to consumers.",
  },
];

const stats = [
  { number: "500+", label: "Retreats cataloged" },
  { number: "27", label: "Countries represented" },
  { number: "8", label: "Need categories" },
  { number: "65+", label: "Verified listings" },
  { number: "$35", label: "Lowest nightly rate" },
  { number: "12", label: "Safety criteria scored" },
];

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

      {/* Intro */}
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
        </div>
      </section>

      {/* Our Story */}
      <section className="py-14 md:py-20 bg-sage-50/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
            Our story
          </h2>
          <div className="space-y-6 text-sage-600 leading-relaxed text-lg">
            <p>
              In 2022, the person who started CheapRetreats was working 60-hour
              weeks, sleeping badly, and running on caffeine and adrenaline. The
              kind of burned out where you forget what your own hobbies are. A
              therapist suggested a retreat — a week somewhere quiet to just stop.
              The first search returned luxury wellness resorts starting at $4,800
              for five nights. Bali villas with infinity pools and personal chefs.
              Beautiful, sure. But completely out of reach on a normal salary with
              student loans and rent.
            </p>
            <p>
              After weeks of digging — past the sponsored ads, past the Instagram
              influencer recommendations, past the SEO-optimized listicles — a
              different world appeared. A Buddhist monastery in Thailand offering
              10-day silent retreats for a $200 donation. A community-run center
              in Portugal where you could do work-exchange in the garden in
              exchange for room, board, and yoga classes. A Quaker retreat house
              in England that charged $45 a night and asked nothing of you except
              that you be quiet. These places existed. They had existed for decades.
              They just were not showing up in anyone&rsquo;s search results because
              they did not have marketing budgets.
            </p>
            <p>
              That realization — that affordable, genuine, safe healing spaces
              exist all over the world but are nearly invisible online — became
              the founding premise of CheapRetreats. If this information had been
              easy to find, that burned-out person would have gone to a retreat
              six months earlier. How many other people were in the same position?
              How many people assumed healing retreats were only for the wealthy
              because that is all the internet showed them?
            </p>
            <p>
              CheapRetreats is the answer to those questions. It is a catalog,
              a safety guide, and a quiet protest against an industry that has
              turned rest into a premium product. We do not run retreats. We do
              not sell transformation. We just make it easier to find the places
              that were there all along.
            </p>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-10 text-center">
            By the numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-sage-50/40 rounded-2xl border border-sage-100/60"
              >
                <span className="font-display text-3xl md:text-4xl font-semibold text-sage-800">
                  {stat.number}
                </span>
                <p className="text-sage-600 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-10 text-center">
            Our values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-white rounded-2xl border border-warm-200/50"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            What we do
          </h2>
          <div className="space-y-4">
            {[
              { title: "Find", desc: "We research and catalog affordable retreats worldwide — monasteries, ashrams, co-ops, nonprofit centers, and more. We look in the places most directories ignore." },
              { title: "Verify", desc: "Every retreat goes through our No Bullshit Healing Index — scored on safety, consent, trauma awareness, and price transparency. We visit or virtually evaluate each one." },
              { title: "Organize", desc: "We sort retreats by what you actually need — burnout recovery, grief, quiet, stopping — not by marketing category. Because nobody searches for healing by price tier." },
              { title: "Connect", desc: "We help you find the right retreat for your need, budget, and preferences. No affiliate-driven recommendations. No promoted listings. Just honest matching." },
              { title: "Protect", desc: "We score every retreat on 12 safety criteria and watch for red flags that put vulnerable people at risk. If a retreat does not meet our standards, it does not get listed — regardless of how popular or well-marketed it is." },
              { title: "Advocate", desc: "We push for industry transparency by publishing our verification methodology, sharing red flag guides, and calling attention to predatory practices in the wellness space. The more people know what to look for, the harder it is for bad actors to operate." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
                <span className="font-serif font-semibold text-sage-800 whitespace-nowrap">{item.title}</span>
                <span className="text-sage-600 text-sm leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-14 md:py-20 bg-sage-50/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={i} className="flex gap-3 items-start p-3 bg-white rounded-lg border border-rose-100/60">
                <svg className="w-4 h-4 text-rose-400 flex-shrink-0 mt-1" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M3.4 3.4a.8.8 0 011.1 0L8 6.9l3.4-3.4a.8.8 0 111.1 1.1L9.1 8l3.4 3.4a.8.8 0 11-1.1 1.1L8 9.1l-3.4 3.4a.8.8 0 11-1.1-1.1L6.9 8 3.4 4.6a.8.8 0 010-1.1z" />
                </svg>
                <span className="text-sage-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Sustain Ourselves */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            How we sustain ourselves
          </h2>
          <div className="space-y-6 text-sage-600 leading-relaxed">
            <p>
              We believe in transparent monetization that aligns with our values.
              Here is exactly how CheapRetreats makes money — and why our revenue
              model does not compromise the independence of our recommendations.
            </p>
            <div className="p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
              <h3 className="font-serif font-semibold text-sage-800 mb-2">
                Commission on bookings
              </h3>
              <p className="text-sm">
                When you book a retreat through our platform, we receive a small
                commission from the retreat operator (typically 8&ndash;12%). This
                is our primary revenue source. Importantly, this commission is the
                same rate regardless of the retreat&rsquo;s price — we have no
                financial incentive to push you toward more expensive options. A
                retreat that costs $40/night earns us the same percentage as one
                that costs $140/night. We also never rank retreats based on
                commission rates, and retreats cannot pay for higher placement.
              </p>
            </div>
            <div className="p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
              <h3 className="font-serif font-semibold text-sage-800 mb-2">
                Affiliate partnerships
              </h3>
              <p className="text-sm">
                We partner with a small number of values-aligned companies —
                primarily travel insurance providers and ethical gear brands. We
                only partner with companies we have vetted and would personally
                use. Every affiliate relationship is disclosed. We will never
                recommend a product we do not believe in just because it pays well.
              </p>
            </div>
            <div className="p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
              <h3 className="font-serif font-semibold text-sage-800 mb-2">
                Sponsorships and grants
              </h3>
              <p className="text-sm">
                We accept sponsorships from nonprofits and foundations whose
                missions align with ours — mental health organizations, access
                to-nature initiatives, and scholarship funds. We do not accept
                sponsorships from wellness brands, supplement companies, or
                anyone selling a healing product. Sponsors do not influence our
                content or listings.
              </p>
            </div>
            <div className="p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
              <h3 className="font-serif font-semibold text-sage-800 mb-2">
                Why this model works
              </h3>
              <p className="text-sm">
                The most common question we get is: &ldquo;If retreats pay you a
                commission, how can you be objective?&rdquo; Fair question. Our
                answer: our commission structure is flat-rate and non-negotiable.
                No retreat can pay more for better placement, reviews, or scores.
                Our verification process is conducted independently from our
                business team. And if a retreat fails our safety criteria, no
                amount of potential revenue will get it listed. We have turned
                down retreats that would have been highly profitable because they
                did not meet our standards. Our credibility is the product — if
                we compromise that, we have nothing.
              </p>
            </div>
            <ul className="space-y-2 mt-4">
              {[
                "Commission on retreat bookings made through our platform (8-12%, flat rate)",
                "Affiliate partnerships with aligned travel insurance providers",
                "Minimal, non-manipulative gear guides",
                "Sponsorships from values-aligned nonprofits and foundations",
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
      </section>

      {/* Press & Mentions */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Press &amp; mentions
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10 max-w-xl mx-auto">
            We are a small team doing quiet work. But occasionally people notice.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                outlet: "Coming soon",
                description: "We are currently in conversation with several publications about our mission and methodology.",
              },
              {
                outlet: "Podcast features",
                description: "Interested in having us on your show to talk about affordable healing and retreat safety? Get in touch.",
              },
              {
                outlet: "Media kit",
                description: "Need our logo, founder bio, or background information? Email us and we will send everything you need.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl border border-warm-200/50 text-left"
              >
                <h3 className="font-serif font-semibold text-sage-800 mb-2">
                  {item.outlet}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sage-500 text-sm mt-8">
            For press inquiries: press@cheapretreats.com
          </p>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-sage-50/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 border-t border-warm-200/60">
          <p className="font-display text-2xl font-semibold text-sage-900 mb-6">
            You deserve rest — even if you&rsquo;re broke.
          </p>
          <Link href="/start-here" className="inline-flex items-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
            Find Your Retreat
          </Link>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CheapRetreats",
            url: "https://cheapretreats.com",
            description:
              "A global retreat discovery platform connecting people with affordable, verified healing retreats worldwide.",
            foundingDate: "2022",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              email: "hello@cheapretreats.com",
              contactType: "customer service",
            },
          }),
        }}
      />
    </>
  );
}
