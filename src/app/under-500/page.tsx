import type { Metadata } from "next";
import Link from "next/link";
import { retreats } from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";
import { priceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Retreats Under $500 — Affordable Healing Stays",
  description:
    "Discover verified healing retreats under $500. Weekend resets, silent stays, donation-based programs, monastery stays, and more. Total cost including meals and accommodation, no surprises.",
  alternates: { canonical: "https://cheapretreats.com/under-500" },
};

const whatYouGet = [
  { label: "2-5 nights", desc: "Weekend resets to midweek stays" },
  { label: "Meals included", desc: "Most include all meals — simple, nourishing, communal" },
  { label: "Private or shared rooms", desc: "Monastery cells, farm cabins, or shared retreat rooms" },
  { label: "No hidden fees", desc: "The price you see is the total cost" },
];

const popularTypes = [
  { label: "Silent retreats", count: "8+" },
  { label: "Monastery stays", count: "5+" },
  { label: "Nature retreats", count: "10+" },
  { label: "Grief retreats", count: "4+" },
  { label: "Farm stays", count: "3+" },
  { label: "Donation-based", count: "6+" },
];

export default function Under500Page() {
  const filtered = retreats.filter((r) => r.price > 0 && r.price < 500).sort((a, b) => a.price - b.price);
  const withSlidingScale = filtered.filter((r) => r.slidingScale);
  const communityRun = filtered.filter((r) => r.communityRun);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-100/40 to-warm-50 py-16 md:py-24">
        <img src={priceImages.under500} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-50/90 via-sage-50/75 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium mb-8">
            {filtered.length}+ verified retreats
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-4 leading-[1.1]">
            Under $500
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            Weekend resets, silent stays, monastery visits, and donation-based retreats.
            Total cost — meals and accommodation included. No surprises.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-sage-500">
            <span>{filtered.length} listings</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span>{withSlidingScale.length} with sliding scale</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span>{communityRun.length} community-run</span>
          </div>
        </div>
      </section>

      {/* What $500 gets you */}
      <section className="py-10 md:py-14 bg-white border-b border-warm-200/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6 text-center">
            What under $500 gets you
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whatYouGet.map((item) => (
              <div key={item.label} className="text-center p-4 bg-sage-50/50 rounded-xl border border-sage-100/80">
                <div className="font-serif font-semibold text-sage-800 mb-1">{item.label}</div>
                <div className="text-xs text-sage-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular types at this price */}
      <section className="py-10 md:py-14 bg-warm-50 border-b border-warm-200/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-lg font-semibold text-sage-900 mb-4">
            Popular types at this price
          </h2>
          <div className="flex flex-wrap gap-2">
            {popularTypes.map((type) => (
              <span key={type.label} className="px-4 py-2 bg-white text-sage-700 text-sm rounded-full border border-sage-200/60">
                {type.label} <span className="text-sage-400 ml-1">{type.count}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Retreat listings */}
      <section className="py-12 md:py-16 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {filtered.map((retreat, i) => (
              <RetreatCard key={i} retreat={retreat} />
            ))}
          </div>
        </div>
      </section>

      {/* Budget tips */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Tips for retreats under $500
          </h2>
          <div className="space-y-4 text-sage-600 leading-relaxed">
            {[
              "Monastery stays and donation-based centers are often the best value — centuries of hospitality, no marketing overhead",
              "Shared rooms are significantly cheaper than private rooms at most centers. If you're comfortable with it, this can save $100-200",
              "Shoulder season (spring and fall) often has lower prices and smaller groups — both advantages",
              "Look for retreats that include all meals — cooking or eating out adds $30-50/day to your total cost",
              "Many centers offer sliding scale pricing. If $400 is too much, ask about $300. The worst they can say is no",
              "Don't forget travel costs — a $300 retreat nearby may be cheaper total than a $200 retreat that requires a $400 flight",
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-sage-50/50 rounded-xl border border-sage-100/80">
                <svg className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                </svg>
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More options */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Need something even more affordable?
          </h2>
          <p className="text-sage-600 mb-8">
            Many retreats offer free or donation-based options. Work exchange
            programs let you stay for free in exchange for a few hours of daily work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/work-exchange" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Work Exchange (Free)
            </Link>
            <Link href="/scholarships" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              Scholarships
            </Link>
            <Link href="/under-750" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              Under $750
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
            name: "Retreats Under $500",
            description: "Verified affordable healing retreats under $500 with transparent pricing including meals and accommodation.",
            url: "https://cheapretreats.com/under-500",
            numberOfItems: filtered.length,
          }),
        }}
      />
    </>
  );
}
