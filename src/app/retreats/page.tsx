import type { Metadata } from "next";
import Link from "next/link";
import { retreats, getRetreatSlug, retreatTypes } from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";

export const metadata: Metadata = {
  title: "All Verified Retreats — Browse 65+ Affordable Healing Retreats",
  description:
    "Browse every verified, affordable healing retreat in our directory. Sort by price, filter by type, and find the right retreat for your budget and needs. From free work-exchange to under $1,000.",
  alternates: { canonical: "https://cheapretreats.com/retreats" },
  openGraph: {
    title: "All Verified Retreats — Browse 65+ Affordable Healing Retreats",
    description:
      "Browse every verified, affordable healing retreat in our directory. From free work-exchange to under $1,000.",
    url: "https://cheapretreats.com/retreats",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Verified Retreats — 65+ Affordable Healing Retreats",
    description:
      "Browse every verified retreat. From free work-exchange to under $1,000.",
  },
};

const priceTiers = [
  {
    label: "Free / Work Exchange",
    href: "/work-exchange",
    desc: "Trade a few hours of work for room and board",
  },
  {
    label: "Under $500",
    href: "/under-500",
    desc: "Weekend resets, monastery stays, silent retreats",
  },
  {
    label: "Under $750",
    href: "/under-750",
    desc: "Extended stays, nature immersion, facilitated programs",
  },
  {
    label: "Under $1,000",
    href: "/under-1000",
    desc: "Week-long healing, learning retreats, community programs",
  },
];

export default function RetreatsIndexPage() {
  const sorted = [...retreats].sort((a, b) => a.price - b.price);
  const freeCount = sorted.filter((r) => r.price === 0).length;
  const under500 = sorted.filter((r) => r.price > 0 && r.price < 500).length;
  const under750 = sorted.filter((r) => r.price >= 500 && r.price < 750).length;
  const under1000 = sorted.filter((r) => r.price >= 750 && r.price <= 1000).length;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-100/40 to-warm-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium mb-8">
            {sorted.length} verified retreats
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-4 leading-[1.1]">
            All Retreats
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            Every verified, affordable healing retreat in our directory.
            Sorted by price, with transparent costs including meals and accommodation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-sage-500">
            <span>{freeCount} free / work exchange</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span>{under500} under $500</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span>{under750} $500&ndash;$749</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span>{under1000} $750&ndash;$1,000</span>
          </div>
        </div>
      </section>

      {/* Price tier navigation */}
      <section className="py-10 md:py-14 bg-white border-b border-warm-200/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6 text-center">
            Browse by budget
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {priceTiers.map((tier) => (
              <Link
                key={tier.href}
                href={tier.href}
                className="group block p-5 rounded-xl bg-sage-50/50 border border-sage-100/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="font-serif font-semibold text-sage-800 mb-1 group-hover:text-sage-900 transition-colors">
                  {tier.label}
                </div>
                <div className="text-xs text-sage-500">{tier.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Retreat type quick links */}
      <section className="py-10 md:py-14 bg-warm-50 border-b border-warm-200/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-lg font-semibold text-sage-900 mb-4">
            Browse by type
          </h2>
          <div className="flex flex-wrap gap-2">
            {retreatTypes.slice(0, 12).map((type) => (
              <span
                key={type.slug}
                className="px-4 py-2 bg-white text-sage-700 text-sm rounded-full border border-sage-200/60"
              >
                {type.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* All retreat listings */}
      <section className="py-12 md:py-16 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900">
              All {sorted.length} retreats
            </h2>
            <span className="text-sm text-sage-500">Sorted by price: low to high</span>
          </div>
          <div className="space-y-5">
            {sorted.map((retreat) => (
              <Link
                key={getRetreatSlug(retreat)}
                href={`/retreats/${getRetreatSlug(retreat)}`}
                className="block hover:-translate-y-0.5 transition-transform duration-200"
              >
                <RetreatCard retreat={retreat} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Not sure where to start?
          </h2>
          <p className="text-sage-600 text-lg mb-8">
            Browse by what you actually need, or take our guided path to find
            the right retreat for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/needs"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              Browse by Need
            </Link>
            <Link
              href="/start-here"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              Start Here
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
            name: "All Verified Retreats",
            description:
              "Browse 65+ verified, affordable healing retreats with transparent pricing. From free work-exchange programs to under $1,000.",
            url: "https://cheapretreats.com/retreats",
            numberOfItems: sorted.length,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: sorted.length,
              itemListOrder: "https://schema.org/ItemListOrderAscending",
              itemListElement: sorted.slice(0, 20).map((r, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `https://cheapretreats.com/retreats/${getRetreatSlug(r)}`,
                name: r.name,
              })),
            },
          }),
        }}
      />
    </>
  );
}
