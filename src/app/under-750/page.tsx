import type { Metadata } from "next";
import Link from "next/link";
import { retreats } from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";
import { priceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Retreats Under $750 — Multi-Night Healing Stays",
  description:
    "Verified healing retreats under $750. Multi-night stays with private rooms, meals, nature immersion, and workshops. Complete cost transparency — no hidden fees.",
  alternates: { canonical: "https://cheapretreats.com/under-750" },
};

const whatYouGet = [
  { label: "4-7 nights", desc: "Midweek to full-week stays — enough time to actually settle in" },
  { label: "Private rooms", desc: "Most retreats at this tier offer private rooms, not just shared dorms" },
  { label: "More activities", desc: "Guided meditation, somatic sessions, nature therapy, creative workshops" },
  { label: "Better food", desc: "Farm-to-table meals, dietary accommodations, sometimes cooking together" },
];

const popularTypes = [
  { label: "Silent retreats", count: "6+" },
  { label: "Trauma-sensitive", count: "4+" },
  { label: "Creative retreats", count: "5+" },
  { label: "Caregiver retreats", count: "4+" },
  { label: "Nature immersion", count: "7+" },
  { label: "Grief retreats", count: "5+" },
  { label: "Digital detox", count: "3+" },
  { label: "Community retreats", count: "4+" },
  { label: "Meditation retreats", count: "5+" },
  { label: "Somatic & bodywork", count: "3+" },
];

const budgetComparison = [
  {
    category: "Boutique resort",
    gets: "2 nights, room only, spa extra, meals extra",
    total: "$750+",
    verdict: "Just a nice hotel stay",
  },
  {
    category: "Healing retreat",
    gets: "5-7 nights, private room, all meals, workshops, nature access, community",
    total: "Under $750",
    verdict: "An actual reset",
  },
];

export default function Under750Page() {
  const filtered = retreats.filter((r) => r.price > 0 && r.price < 750).sort((a, b) => a.price - b.price);
  const withSlidingScale = filtered.filter((r) => r.slidingScale);
  const countries = new Set(filtered.map((r) => r.country));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-warm-100/50 to-warm-50 py-16 md:py-24">
        <img src={priceImages.under750} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50/90 via-warm-50/75 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 text-warm-700 rounded-full text-sm font-medium mb-8">
            {filtered.length}+ verified retreats
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-4 leading-[1.1]">
            Under $750
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            3&ndash;7 night retreats with meals, nature immersion, and optional workshops.
            All-inclusive pricing &mdash; no surprise fees.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-sage-500">
            <span>{filtered.length} listings</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span>{withSlidingScale.length} with sliding scale</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span>{countries.size} countries</span>
          </div>
        </div>
      </section>

      {/* What $500-$750 gets you */}
      <section className="py-10 md:py-14 bg-white border-b border-warm-200/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-2 text-center">
            What $500&ndash;$750 gets you
          </h2>
          <p className="text-sage-500 text-sm text-center mb-6 max-w-lg mx-auto">
            This is the sweet spot where retreats shift from &ldquo;weekend reset&rdquo; to
            &ldquo;actual transformation.&rdquo; More nights, more privacy, more depth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whatYouGet.map((item) => (
              <div key={item.label} className="text-center p-4 bg-warm-50 rounded-xl border border-warm-200/60">
                <div className="font-serif font-semibold text-warm-800 mb-1">{item.label}</div>
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
              <span key={type.label} className="px-4 py-2 bg-white text-sage-700 text-sm rounded-full border border-warm-200/60">
                {type.label} <span className="text-sage-400 ml-1">{type.count}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Budget comparison */}
      <section className="py-10 md:py-14 bg-white border-b border-warm-200/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6 text-center">
            $750 at a resort vs. $750 at a retreat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {budgetComparison.map((item) => (
              <div
                key={item.category}
                className={`p-6 rounded-xl border ${
                  item.category === "Healing retreat"
                    ? "bg-warm-50 border-warm-300"
                    : "bg-sage-50/30 border-sage-200/60"
                }`}
              >
                <div className="font-serif font-semibold text-sage-800 mb-2 text-sm uppercase tracking-wider">
                  {item.category}
                </div>
                <p className="text-sage-600 text-sm mb-3">{item.gets}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-sage-800">{item.total}</span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    item.category === "Healing retreat"
                      ? "bg-warm-200/60 text-warm-800"
                      : "bg-sage-100 text-sage-600"
                  }`}>
                    {item.verdict}
                  </span>
                </div>
              </div>
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

      {/* Stats bar */}
      <section className="py-8 bg-warm-100/60 border-y border-warm-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-display text-2xl md:text-3xl font-semibold text-warm-800">
                {filtered.length}+
              </div>
              <div className="text-xs text-warm-600 mt-1">Verified retreats</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-semibold text-warm-800">
                {withSlidingScale.length}
              </div>
              <div className="text-xs text-warm-600 mt-1">With sliding scale</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-semibold text-warm-800">
                {countries.size}
              </div>
              <div className="text-xs text-warm-600 mt-1">Countries represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for this tier */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Tips for the $500&ndash;$750 tier
          </h2>
          <div className="space-y-4 text-sage-600 leading-relaxed">
            {[
              "Book off-season (January-March, September-November) for the best availability and sometimes lower rates. Many retreats offer early-bird pricing for shoulder seasons.",
              "Share a room if it's an option. Upgrading from shared to private often adds $150-200. If you're comfortable with a roommate, put that savings toward a longer stay instead.",
              "Look for community-run centers. They have lower overhead than boutique retreats, which means more of your money goes to the actual experience — better food, better programming, better teachers.",
              "Ask about work exchange add-ons. Some retreats in this range let you extend your stay by a few days in exchange for light work — garden help, kitchen prep, setup. It's a way to deepen the experience.",
              "International retreats stretch your dollar. A $650 retreat in Mexico, Bali, or Portugal often includes more than a $650 retreat in California or New York. Factor in flight costs, but don't rule it out.",
              "Combine with sliding scale. If a retreat is listed at $700 with sliding scale, ask about the lower end. Many centers genuinely want you there and will work with your budget.",
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-warm-50 rounded-xl border border-warm-200/60">
                <svg className="w-5 h-5 text-warm-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                </svg>
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-warm-50 to-warm-100/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Explore by what you need
          </h2>
          <p className="text-sage-600 mb-8 max-w-lg mx-auto">
            Not sure which retreat is right? Browse by what you&rsquo;re going through,
            or explore other price ranges.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Link href="/needs/burnout" className="px-5 py-2.5 bg-white text-sage-700 text-sm font-medium rounded-full border border-warm-200/60 hover:bg-warm-50 transition-colors">
              Burnout
            </Link>
            <Link href="/needs/grief" className="px-5 py-2.5 bg-white text-sage-700 text-sm font-medium rounded-full border border-warm-200/60 hover:bg-warm-50 transition-colors">
              Grief
            </Link>
            <Link href="/needs/trauma" className="px-5 py-2.5 bg-white text-sage-700 text-sm font-medium rounded-full border border-warm-200/60 hover:bg-warm-50 transition-colors">
              Trauma
            </Link>
            <Link href="/needs/loneliness" className="px-5 py-2.5 bg-white text-sage-700 text-sm font-medium rounded-full border border-warm-200/60 hover:bg-warm-50 transition-colors">
              Loneliness
            </Link>
            <Link href="/needs/depression" className="px-5 py-2.5 bg-white text-sage-700 text-sm font-medium rounded-full border border-warm-200/60 hover:bg-warm-50 transition-colors">
              Depression
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/under-500" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              Under $500
            </Link>
            <Link href="/under-1000" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Under $1,000
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
            name: "Retreats Under $750",
            description: "Verified healing retreats under $750 with transparent all-inclusive pricing. Multi-night stays with private rooms, meals, and workshops.",
            url: "https://cheapretreats.com/under-750",
            numberOfItems: filtered.length,
            isPartOf: {
              "@type": "WebSite",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
          }),
        }}
      />
    </>
  );
}
