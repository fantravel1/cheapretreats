import type { Metadata } from "next";
import Link from "next/link";
import { retreats } from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";

export const metadata: Metadata = {
  title: "Retreats Under $500 — Affordable Healing Stays",
  description:
    "Discover verified healing retreats under $500. Weekend resets, silent stays, donation-based programs, and more. Total cost, no surprises.",
  alternates: { canonical: "https://cheapretreats.com/under-500" },
};

export default function Under500Page() {
  const filtered = retreats.filter((r) => r.price > 0 && r.price < 500).sort((a, b) => a.price - b.price);

  return (
    <>
      <section className="bg-gradient-to-b from-sage-100/40 to-warm-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium mb-8">
            {filtered.length}+ verified retreats
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-4 leading-[1.1]">
            Under $500
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            Weekend resets, silent stays, donation-based retreats. Total cost — no surprises.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {filtered.map((retreat, i) => (
              <RetreatCard key={i} retreat={retreat} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sage-600 mb-6">
              Need something even more affordable? Many retreats offer free or
              donation-based options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work-exchange" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
                Work Exchange (Free)
              </Link>
              <Link href="/scholarships" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
                Scholarships
              </Link>
            </div>
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
            description: "Verified affordable healing retreats under $500 with transparent pricing.",
            url: "https://cheapretreats.com/under-500",
          }),
        }}
      />
    </>
  );
}
