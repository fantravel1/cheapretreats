import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { needsData, getAllNeedSlugs } from "@/lib/needs-data";
import { needImages } from "@/lib/images";

export function generateStaticParams() {
  return getAllNeedSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const need = needsData[params.slug];
  if (!need) return {};
  return {
    title: `${need.title} — Affordable & Verified`,
    description: need.description,
    alternates: { canonical: `https://cheapretreats.com/needs/${need.slug}` },
  };
}

const spiritualTags = [
  "Secular",
  "Spiritual-optional",
  "Religious",
  "Buddhist-inspired",
  "Trauma-informed",
  "Neurodivergent-friendly",
];

export default function NeedPage({ params }: { params: { slug: string } }) {
  const need = needsData[params.slug];
  if (!need) notFound();

  const relatedNeeds = need.relatedNeeds
    .map((slug) => needsData[slug])
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-b ${need.gradient} py-20 md:py-32`}>
        <img src={needImages[params.slug] || needImages.burnout} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 text-sage-700 rounded-full text-sm font-medium mb-8 border border-white/40">
            Browse by Need
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-4 leading-[1.1]">
            {need.headline}
          </h1>
          <p className="text-xl md:text-2xl text-sage-600 font-serif italic">
            {need.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-sage-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-sage-400" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.3 5.7a.75.75 0 00-1.1-1l-3 3.2-1.4-1.4a.75.75 0 00-1.1 1l2 2a.75.75 0 001.1 0l3.5-3.8z" /></svg>
              All verified safe
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-sage-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM7.25 5a.75.75 0 011.5 0v3.25H11a.75.75 0 010 1.5H7.25V5z" /></svg>
              From $200
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-sage-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.4 3.1 15l.9-5.3-4-3.9L5.5 5z" /></svg>
              Honest reviews
            </span>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-14 md:py-20 bg-white border-b border-warm-200/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-sage-600 leading-relaxed">
            {need.longDescription}
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            What to expect
          </h2>
          <p className="text-sage-600 mb-8">
            Every retreat is different, but here&rsquo;s what&rsquo;s common across
            verified {need.title.toLowerCase()}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {need.whatToExpect.map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-white rounded-xl border border-warm-200/60">
                <svg className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                </svg>
                <span className="text-sage-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            This is for you if&hellip;
          </h2>
          <p className="text-sage-600 mb-8">
            You don&rsquo;t need to check every box. One is enough.
          </p>
          <div className="space-y-3">
            {need.whoItsFor.map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-sage-50/50 rounded-xl border border-sage-100/80">
                <span className="text-sage-400 font-medium">&mdash;</span>
                <span className="text-sage-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Orientation Tags */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            Healing without pressure
          </h2>
          <p className="text-sage-600 mb-6">
            Every retreat is clearly tagged so you know exactly what to expect
            spiritually. No surprises.
          </p>
          <div className="flex flex-wrap gap-3">
            {spiritualTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white text-sage-700 text-sm rounded-full border border-sage-200/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Retreats */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900">
                Featured retreats
              </h2>
              <p className="text-sage-500 text-sm mt-1">
                {need.sampleRetreats.length} curated options, all verified safe & real
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {need.sampleRetreats.map((retreat, i) => (
              <div key={i} className="bg-warm-50/50 rounded-2xl p-6 border border-warm-200/60 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-sage-100 text-sage-700 text-xs font-medium rounded-full">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                      <path fillRule="evenodd" d="M6 0.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM8.7 4.8a.5.5 0 00-.7-.6L5.5 6.6 4 5.2a.5.5 0 00-.7.6l2 2a.5.5 0 00.7 0l3-2.7-.3-.3z" />
                    </svg>
                    Verified
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-sage-900 mb-1">{retreat.name}</h3>
                <p className="text-sage-500 text-sm mb-3">{retreat.location}</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-2xl font-semibold text-sage-800">{retreat.price}</span>
                  <span className="text-sage-500 text-sm">{retreat.nights}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {retreat.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-warm-100 text-warm-700 text-xs rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/start-here"
              className="inline-flex items-center text-sm font-medium text-sage-500 hover:text-sage-700 transition-colors"
            >
              See all retreats for this need
              <svg className="ml-1.5 w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What makes a good retreat for this need */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            What makes a good {need.title.toLowerCase().replace(" retreats", "").replace(" retreat", "")} retreat?
          </h2>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-warm-200/60 space-y-4 text-sage-600 leading-relaxed">
            <p>
              Not all retreats that claim to address {need.title.toLowerCase().replace(" retreats", "").replace(" retreat", "")} actually do it well.
              Here&rsquo;s what we look for when verifying retreats in this category:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                </svg>
                <span>Facilitators with relevant training and experience — not just certification, but demonstrated competence</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                </svg>
                <span>Small group sizes that allow for individual attention and genuine care</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                </svg>
                <span>Clear opt-out policies for every activity — no exceptions</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                </svg>
                <span>Follow-up resources or referrals for continued support after the retreat</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                </svg>
                <span>Honest marketing — no promises of transformation, cure, or breakthrough</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing overview */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            What does it cost?
          </h2>
          <p className="text-sage-600 mb-8">
            Total cost, upfront. No hidden fees. Here&rsquo;s what to expect.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Link href="/under-500" className="group block p-6 bg-sage-50/50 rounded-xl border border-sage-100 hover:border-sage-300 transition-all hover:shadow-md text-center">
              <div className="font-display text-2xl font-semibold text-sage-800 mb-1">Under $500</div>
              <div className="text-sm text-sage-500">Weekend resets, 3-night stays</div>
            </Link>
            <Link href="/under-750" className="group block p-6 bg-sage-50/50 rounded-xl border border-sage-100 hover:border-sage-300 transition-all hover:shadow-md text-center">
              <div className="font-display text-2xl font-semibold text-sage-800 mb-1">Under $750</div>
              <div className="text-sm text-sage-500">5-night stays with meals</div>
            </Link>
            <Link href="/under-1000" className="group block p-6 bg-sage-50/50 rounded-xl border border-sage-100 hover:border-sage-300 transition-all hover:shadow-md text-center">
              <div className="font-display text-2xl font-semibold text-sage-800 mb-1">Under $1,000</div>
              <div className="text-sm text-sage-500">Full-week programs</div>
            </Link>
          </div>
          <p className="text-center text-sage-500 text-sm mt-6">
            Many retreats also offer <Link href="/scholarships" className="underline hover:text-sage-700">scholarships</Link>,{" "}
            <Link href="/work-exchange" className="underline hover:text-sage-700">work exchange</Link>, and sliding-scale pricing.
          </p>
        </div>
      </section>

      {/* Related Needs */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-3">
            You might also explore
          </h2>
          <p className="text-sage-600 text-sm mb-6">
            Needs often overlap. That&rsquo;s okay — you don&rsquo;t need to pick just one.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedNeeds.map((related) => (
              <Link
                key={related.slug}
                href={`/needs/${related.slug}`}
                className="group block p-5 bg-white rounded-xl border border-warm-200/60 hover:border-sage-300 transition-all hover:shadow-md"
              >
                <h3 className="font-serif font-semibold text-sage-800 mb-1 group-hover:text-sage-900">
                  {related.title}
                </h3>
                <p className="text-xs text-sage-500 leading-relaxed">{related.subtitle}</p>
                <span className="inline-flex items-center mt-3 text-xs font-medium text-sage-400 group-hover:text-sage-600 transition-colors">
                  Browse retreats
                  <svg className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 6h8M7 3l3 3-3 3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Not sure this is right for you?
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8">
            That&rsquo;s okay. You don&rsquo;t need to know exactly what you need.
            Start with our guided path, read our first-time guide, or just
            browse by budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-here" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Start Here
            </Link>
            <Link href="/first-time" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              First-Time Guide
            </Link>
            <Link href="/the-1000-reset" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              The $1,000 Reset
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: need.title,
            description: need.description,
            url: `https://cheapretreats.com/needs/${need.slug}`,
            isPartOf: { "@type": "WebSite", name: "CheapRetreats", url: "https://cheapretreats.com" },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: need.sampleRetreats.map((retreat, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: retreat.name,
                description: `${retreat.name} in ${retreat.location} — ${retreat.price} for ${retreat.nights}`,
              })),
            },
          }),
        }}
      />
    </>
  );
}
