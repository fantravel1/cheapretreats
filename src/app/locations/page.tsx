import type { Metadata } from "next";
import Link from "next/link";
import { locationData, retreats, slugify } from "@/lib/retreats-data";

export const metadata: Metadata = {
  title: "Retreat Locations Worldwide — Find Healing Retreats by Country",
  description:
    "Explore affordable, verified healing retreats across 16+ countries. Browse by region — North America, Europe, Central America, South America, Asia, and Africa.",
  alternates: { canonical: "https://cheapretreats.com/locations" },
};

const regionOrder = [
  "North America",
  "Europe",
  "Central America",
  "South America",
  "Asia",
  "Africa",
];

const regionGradients: Record<string, string> = {
  "North America": "from-sage-100/50 to-sky-50/40",
  "Europe": "from-warm-100/40 to-rose-50/30",
  "Central America": "from-clay-100/30 to-warm-50/40",
  "South America": "from-sage-50/40 to-clay-50/30",
  "Asia": "from-sky-100/30 to-sage-50/40",
  "Africa": "from-warm-100/30 to-sage-50/30",
};

const regionDescriptions: Record<string, string> = {
  "North America": "Wide variety, strong sliding-scale culture, every landscape from desert to forest.",
  "Europe": "Centuries of contemplative tradition, historic retreat houses, pilgrimage routes.",
  "Central America": "Warm climates, deeply affordable, indigenous healing traditions.",
  "South America": "Sacred valleys, ancient wisdom, extended stay options at gentle prices.",
  "Asia": "Birthplace of meditation traditions, ultra-affordable extended stays.",
  "Africa": "Nature-based healing, Buddhist retreats, wildlife encounters.",
};

function getRetreatCountForCountry(code: string): number {
  return retreats.filter((r) => r.country === code).length;
}

export default function LocationsIndexPage() {
  const grouped = regionOrder.reduce<
    Record<string, typeof locationData>
  >((acc, region) => {
    acc[region] = locationData.filter((l) => l.region === region);
    return acc;
  }, {});

  const totalLocations = locationData.length;
  const totalRetreats = retreats.filter((r) => r.country !== "Global").length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-100/60 via-sky-50/30 to-warm-50 py-20 md:py-32">
        {/* Decorative world map feel with CSS gradients */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-12 left-[10%] w-40 h-40 bg-sage-200/20 rounded-full blur-3xl" />
          <div className="absolute top-20 right-[15%] w-56 h-56 bg-sky-200/15 rounded-full blur-3xl" />
          <div className="absolute bottom-16 left-[30%] w-48 h-48 bg-warm-200/15 rounded-full blur-3xl" />
          <div className="absolute top-32 left-[50%] w-32 h-32 bg-rose-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-[25%] w-36 h-36 bg-clay-200/10 rounded-full blur-3xl" />
          <div className="absolute top-8 left-[40%] w-24 h-24 bg-sage-300/10 rounded-full blur-2xl" />
          <div className="absolute bottom-8 left-[60%] w-28 h-28 bg-sky-300/10 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 text-sage-700 rounded-full text-sm font-medium mb-8 border border-white/40">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 1.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13zM7.25 3v5.25H11a.75.75 0 010 1.5H6.5V3a.75.75 0 011.5 0z" />
            </svg>
            {totalLocations} countries, {totalRetreats} retreats
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Healing retreats,<br className="hidden sm:block" /> wherever you are
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            Affordable, verified retreats across six continents. Find a place
            that feels right &mdash; close to home or far from everything.
          </p>
        </div>
      </section>

      {/* Regions */}
      {regionOrder.map((region) => {
        const locations = grouped[region];
        if (!locations || locations.length === 0) return null;

        return (
          <section key={region} className="py-14 md:py-20 odd:bg-white even:bg-warm-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-2">
                  {region}
                </h2>
                <p className="text-sage-600 text-sm leading-relaxed max-w-xl">
                  {regionDescriptions[region]}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {locations.map((loc) => {
                  const count = getRetreatCountForCountry(loc.code);
                  const slug = slugify(loc.name);

                  return (
                    <Link
                      key={loc.code}
                      href={`/locations/${slug}`}
                      className={`group block p-6 rounded-2xl bg-gradient-to-br ${regionGradients[region] || "from-warm-50 to-sage-50/30"} border border-warm-200/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-serif text-lg md:text-xl font-semibold text-sage-900">
                          {loc.name}
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-1 bg-white/60 text-sage-600 text-xs font-medium rounded-full border border-white/40 flex-shrink-0 ml-2">
                          {count} {count === 1 ? "retreat" : "retreats"}
                        </span>
                      </div>
                      <span className="inline-block px-2 py-0.5 bg-white/50 text-sage-500 text-xs rounded-full mb-3 border border-sage-200/30">
                        {loc.region}
                      </span>
                      <p className="text-sm text-sage-600 leading-relaxed mb-4 line-clamp-2">
                        {loc.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-sage-500 group-hover:text-sage-700 transition-colors">
                        Explore retreats
                        <svg className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 7h10M8 3l4 4-4 4" />
                        </svg>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Not sure where to go?
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8">
            Location matters less than you think. Start with what you need,
            and let the right place find you.
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
            <Link
              href="/under-500"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              Under $500
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Retreat Locations Worldwide",
            description:
              "Explore affordable, verified healing retreats across 16+ countries worldwide.",
            url: "https://cheapretreats.com/locations",
            isPartOf: {
              "@type": "WebSite",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: locationData.map((loc, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: loc.name,
                url: `https://cheapretreats.com/locations/${slugify(loc.name)}`,
              })),
            },
          }),
        }}
      />
    </>
  );
}
