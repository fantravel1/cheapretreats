import type { Metadata } from "next";
import Link from "next/link";
import { retreatTypes, getRetreatsByTypeSlug } from "@/lib/retreats-data";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Browse Retreats by Type — 20 Categories of Affordable Healing",
  description:
    "Explore 20 retreat types from meditation and silent retreats to grief support and farm stays. Every retreat verified, honest, and under $1,000.",
  alternates: { canonical: "https://cheapretreats.com/types" },
};

const bodyTypeSlugs = [
  "somatic",
  "walking-retreat",
  "hot-springs",
  "sound-healing",
  "wellness",
];

const mindTypeSlugs = [
  "meditation",
  "silent-retreat",
  "rest-retreat",
  "creative-retreat",
  "digital-detox",
  "learning-retreat",
];

const communityTypeSlugs = [
  "community-retreat",
  "spiritual-community",
  "monastery",
  "work-exchange",
  "farm-stay",
  "caregiver-retreat",
  "grief-retreat",
  "trauma-sensitive",
  "nature-retreat",
];

function TypeCard({ slug }: { slug: string }) {
  const type = retreatTypes.find((t) => t.slug === slug);
  if (!type) return null;
  const count = getRetreatsByTypeSlug(slug).length;

  return (
    <Link
      href={`/types/${type.slug}`}
      className="group block p-6 md:p-7 bg-white rounded-2xl border border-warm-200/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-2xl" role="img" aria-hidden="true">
          {type.icon}
        </span>
        <span className="inline-flex items-center px-2.5 py-1 bg-sage-50 text-sage-600 text-xs font-medium rounded-full">
          {count} {count === 1 ? "retreat" : "retreats"}
        </span>
      </div>
      <h3 className="font-serif text-lg font-semibold text-sage-900 mb-2 group-hover:text-sage-700 transition-colors">
        {type.name}
      </h3>
      <p className="text-sm text-sage-600 leading-relaxed mb-4">
        {type.description}
      </p>
      <span className="inline-flex items-center text-sm font-medium text-sage-400 group-hover:text-sage-600 transition-colors">
        Browse retreats
        <svg
          className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2 7h10M8 3l4 4-4 4" />
        </svg>
      </span>
    </Link>
  );
}

export default function TypesIndexPage() {
  const bodyTypes = retreatTypes.filter((t) => bodyTypeSlugs.includes(t.slug));
  const mindTypes = retreatTypes.filter((t) => mindTypeSlugs.includes(t.slug));
  const communityTypes = retreatTypes.filter((t) =>
    communityTypeSlugs.includes(t.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <img src={heroImages.retreatsIndex} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900/80 via-warm-800/60 to-sage-50/90" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 leading-[1.1]">
            Find your kind
            <br className="hidden sm:block" /> of retreat
          </h1>
          <p className="text-lg md:text-xl text-warm-100 leading-relaxed max-w-xl mx-auto">
            Twenty categories of healing, each one different. Meditation,
            silence, grief, farm work, walking, sound, rest. Not every retreat
            works for every person. Start with what resonates.
          </p>
        </div>
      </section>

      {/* Mind-Based Types */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-2">
              Stillness and contemplation
            </h2>
            <p className="text-sage-600">
              Retreats centered on quieting the mind, creative renewal, and
              stepping away from the noise.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mindTypes.map((t) => (
              <TypeCard key={t.slug} slug={t.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Body-Based Types */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-warm-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-2">
              Body-based healing
            </h2>
            <p className="text-sage-600">
              Sometimes the mind needs a break from leading. These retreats work
              through movement, water, sound, and touch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bodyTypes.map((t) => (
              <TypeCard key={t.slug} slug={t.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Community-Based Types */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-2">
              Community and connection
            </h2>
            <p className="text-sage-600">
              Healing alongside others. Whether through service, shared grief,
              or simply eating meals together, these retreats remind you that you
              are not alone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {communityTypes.map((t) => (
              <TypeCard key={t.slug} slug={t.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Not sure which type fits?
          </h2>
          <p className="text-sage-600 text-lg mb-8">
            That&rsquo;s normal. Try browsing by what you need instead, or start
            with our guided path.
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

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Browse Retreats by Type",
            description:
              "Explore 20 retreat types from meditation and silent retreats to grief support and farm stays. Every retreat verified, honest, and under $1,000.",
            url: "https://cheapretreats.com/types",
            isPartOf: {
              "@type": "WebSite",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: retreatTypes.map((type, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: type.name,
                description: type.description,
                url: `https://cheapretreats.com/types/${type.slug}`,
              })),
            },
          }),
        }}
      />
    </>
  );
}
