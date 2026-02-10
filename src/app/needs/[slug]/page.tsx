import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { needsData, getAllNeedSlugs } from "@/lib/needs-data";

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

export default function NeedPage({ params }: { params: { slug: string } }) {
  const need = needsData[params.slug];
  if (!need) notFound();

  const relatedNeeds = need.relatedNeeds
    .map((slug) => needsData[slug])
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className={`relative bg-gradient-to-b ${need.gradient} py-20 md:py-32`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 text-sage-700 rounded-full text-sm font-medium mb-8 border border-white/40">
            Browse by Need
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-4 leading-[1.1]">
            {need.headline}
          </h1>
          <p className="text-xl md:text-2xl text-sage-600 font-serif italic">
            {need.subtitle}
          </p>
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
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
            What to expect
          </h2>
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
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
            This is for you if&hellip;
          </h2>
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

      {/* Sample Retreats */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900">
              Featured retreats
            </h2>
            <span className="text-sm text-sage-500">All verified safe & real</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {need.sampleRetreats.map((retreat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-warm-200/60 hover:shadow-lg transition-shadow duration-300">
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
        </div>
      </section>

      {/* Related Needs */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6">
            You might also explore
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedNeeds.map((related) => (
              <Link
                key={related.slug}
                href={`/needs/${related.slug}`}
                className="group block p-5 bg-sage-50/50 rounded-xl border border-sage-100 hover:border-sage-300 transition-all hover:shadow-md"
              >
                <h3 className="font-serif font-semibold text-sage-800 mb-1 group-hover:text-sage-900">
                  {related.title}
                </h3>
                <p className="text-xs text-sage-500 leading-relaxed">{related.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Not sure this is right for you?
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8">
            That&rsquo;s okay. Start with our guide — or just browse by budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-here" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Start Here
            </Link>
            <Link href="/first-time" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              First-Time Guide
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
          }),
        }}
      />
    </>
  );
}
