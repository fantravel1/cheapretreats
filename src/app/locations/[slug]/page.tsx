import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  locationData,
  retreats,
  slugify,
  getRetreatSlug,
  getCountryName,
} from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";
import { locationImages } from "@/lib/images";

export function generateStaticParams() {
  return locationData.map((l) => ({ slug: slugify(l.name) }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const location = locationData.find((l) => slugify(l.name) === slug);
  if (!location) return {};

  return {
    title: `Healing Retreats in ${location.name} — Affordable & Verified`,
    description: location.description,
    alternates: {
      canonical: `https://cheapretreats.com/locations/${slug}`,
    },
  };
}

const regionGradients: Record<string, string> = {
  "North America": "from-sage-100/50 via-sky-50/30 to-warm-50",
  "Europe": "from-warm-100/40 via-rose-50/20 to-sage-50/30",
  "Central America": "from-clay-100/30 via-warm-50/40 to-sage-50/20",
  "South America": "from-sage-100/30 via-clay-50/20 to-warm-50",
  "Asia": "from-sky-100/30 via-sage-50/20 to-warm-50",
  "Africa": "from-warm-100/30 via-sage-50/20 to-sky-50/20",
};

export default async function LocationPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const location = locationData.find((l) => slugify(l.name) === slug);
  if (!location) notFound();

  const countryRetreats = retreats.filter(
    (r) => r.country === location.code
  );
  const retreatCount = countryRetreats.length;

  // Price stats
  const paidRetreats = countryRetreats.filter((r) => r.price > 0);
  const minPrice =
    paidRetreats.length > 0
      ? Math.min(...paidRetreats.map((r) => r.price))
      : 0;
  const avgPrice =
    paidRetreats.length > 0
      ? Math.round(
          paidRetreats.reduce((sum, r) => sum + r.price, 0) /
            paidRetreats.length
        )
      : 0;
  const hasFreeRetreats = countryRetreats.some((r) => r.price === 0);

  // Related locations in same region
  const relatedLocations = locationData.filter(
    (l) => l.region === location.region && l.code !== location.code
  );

  const gradient =
    regionGradients[location.region] || "from-sage-100/40 to-warm-50";

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 md:py-32"
      >
        <img src={locationImages[location.code] || locationImages.Global} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-900/80 via-sage-800/60 to-warm-50" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6 border border-white/20 backdrop-blur-sm">
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 14 14"
              fill="currentColor"
            >
              <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm0 1.3a5.7 5.7 0 110 11.4A5.7 5.7 0 017 1.3z" />
            </svg>
            {location.region}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4 leading-[1.1]">
            Healing retreats in<br className="hidden sm:block" />{" "}
            {location.name}
          </h1>
          <p className="text-lg md:text-xl text-sage-100 leading-relaxed max-w-xl mx-auto mb-8">
            {location.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-sage-200">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-sage-300"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.3 5.7a.75.75 0 00-1.1-1l-3 3.2-1.4-1.4a.75.75 0 00-1.1 1l2 2a.75.75 0 001.1 0l3.5-3.8z"
                />
              </svg>
              {retreatCount} verified{" "}
              {retreatCount === 1 ? "retreat" : "retreats"}
            </span>
            {hasFreeRetreats && (
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-sage-300"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM7.25 5a.75.75 0 011.5 0v3.25H11a.75.75 0 010 1.5H7.25V5z" />
                </svg>
                Free options available
              </span>
            )}
            {minPrice > 0 && (
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-sage-300"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM7.25 5a.75.75 0 011.5 0v3.25H11a.75.75 0 010 1.5H7.25V5z" />
                </svg>
                From ${minPrice}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 md:py-20 bg-white border-b border-warm-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            Why {location.name}?
          </h2>
          <p className="text-sage-600 mb-8">
            What makes this destination special for healing and retreat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {location.highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex gap-3 items-start p-4 bg-sage-50/50 rounded-xl border border-sage-100/80"
              >
                <svg
                  className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                  />
                </svg>
                <span className="text-sage-700 text-sm leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Stats */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            What does it cost?
          </h2>
          <p className="text-sage-600 mb-8">
            Total cost, upfront. No hidden fees, no surprise add-ons.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {hasFreeRetreats && (
              <div className="p-6 bg-white rounded-xl border border-sage-100 text-center">
                <div className="font-display text-2xl md:text-3xl font-semibold text-sage-800 mb-1">
                  $0
                </div>
                <div className="text-sm text-sage-500">
                  Free / work exchange options
                </div>
              </div>
            )}
            {minPrice > 0 && (
              <div className="p-6 bg-white rounded-xl border border-sage-100 text-center">
                <div className="font-display text-2xl md:text-3xl font-semibold text-sage-800 mb-1">
                  ${minPrice}
                </div>
                <div className="text-sm text-sage-500">Lowest paid retreat</div>
              </div>
            )}
            {avgPrice > 0 && (
              <div className="p-6 bg-white rounded-xl border border-sage-100 text-center">
                <div className="font-display text-2xl md:text-3xl font-semibold text-sage-800 mb-1">
                  ${avgPrice}
                </div>
                <div className="text-sm text-sage-500">Average price</div>
              </div>
            )}
            <div className="p-6 bg-white rounded-xl border border-sage-100 text-center">
              <div className="font-display text-2xl md:text-3xl font-semibold text-sage-800 mb-1">
                {retreatCount}
              </div>
              <div className="text-sm text-sage-500">
                Verified {retreatCount === 1 ? "retreat" : "retreats"}
              </div>
            </div>
          </div>
          <p className="text-center text-sage-500 text-sm mt-6">
            Many retreats also offer{" "}
            <Link
              href="/scholarships"
              className="underline hover:text-sage-700"
            >
              scholarships
            </Link>
            ,{" "}
            <Link
              href="/work-exchange"
              className="underline hover:text-sage-700"
            >
              work exchange
            </Link>
            , and sliding-scale pricing.
          </p>
        </div>
      </section>

      {/* Retreats Grid */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900">
                Retreats in {location.name}
              </h2>
              <p className="text-sage-500 text-sm mt-1">
                {retreatCount} verified{" "}
                {retreatCount === 1 ? "option" : "options"}, all safe &amp; real
              </p>
            </div>
          </div>

          {retreatCount > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {countryRetreats.map((retreat) => (
                <RetreatCard key={getRetreatSlug(retreat)} retreat={retreat} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-warm-50/50 rounded-2xl border border-warm-200/40">
              <p className="text-sage-600">
                No retreats listed for {location.name} yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related Locations */}
      {relatedLocations.length > 0 && (
        <section className="py-14 md:py-20 bg-warm-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-3">
              More in {location.region}
            </h2>
            <p className="text-sage-600 text-sm mb-6">
              Other destinations in the same region worth exploring.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedLocations.map((related) => {
                const relatedCount = retreats.filter(
                  (r) => r.country === related.code
                ).length;

                return (
                  <Link
                    key={related.code}
                    href={`/locations/${slugify(related.name)}`}
                    className="group block p-5 bg-white rounded-xl border border-warm-200/60 hover:border-sage-300 transition-all hover:shadow-md"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-serif font-semibold text-sage-800 group-hover:text-sage-900">
                        {related.name}
                      </h3>
                      <span className="text-xs text-sage-500 flex-shrink-0 ml-2">
                        {relatedCount}{" "}
                        {relatedCount === 1 ? "retreat" : "retreats"}
                      </span>
                    </div>
                    <p className="text-xs text-sage-500 leading-relaxed line-clamp-2 mb-3">
                      {related.description}
                    </p>
                    <span className="inline-flex items-center text-xs font-medium text-sage-400 group-hover:text-sage-600 transition-colors">
                      Explore retreats
                      <svg
                        className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2 6h8M7 3l3 3-3 3" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Explore other destinations
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8">
            Not sure {location.name} is right? Browse all locations, or start
            with what you need instead of where.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/locations"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              All Locations
            </Link>
            <Link
              href="/needs"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
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

      {/* Schema.org Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `Healing Retreats in ${location.name} — Affordable & Verified`,
            description: location.description,
            url: `https://cheapretreats.com/locations/${slug}`,
            publisher: {
              "@type": "Organization",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://cheapretreats.com/locations/${slug}`,
            },
            about: {
              "@type": "Place",
              name: location.name,
              description: location.description,
            },
          }),
        }}
      />
    </>
  );
}
