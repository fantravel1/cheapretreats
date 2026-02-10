import type { Metadata } from "next";
import Link from "next/link";
import { retreats } from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";

export const metadata: Metadata = {
  title: "Retreats Under $1,000 — Full-Week Healing Programs",
  description:
    "Verified healing retreats under $1,000. Full-week programs with comprehensive support, remote locations, and all-inclusive pricing.",
  alternates: { canonical: "https://cheapretreats.com/under-1000" },
};

export default function Under1000Page() {
  const filtered = retreats.filter((r) => r.price > 0 && r.price <= 1000).sort((a, b) => a.price - b.price);

  return (
    <>
      <section className="bg-gradient-to-b from-clay-100/30 to-warm-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-clay-100/70 text-clay-700 rounded-full text-sm font-medium mb-8">
            {filtered.length}+ verified retreats
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-4 leading-[1.1]">
            Under $1,000
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            Full-week programs, comprehensive healing, remote locations. Everything
            included in the price.
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

          <div className="mt-12 bg-gradient-to-br from-sage-700 to-sage-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">
              Want our curated picks?
            </h2>
            <p className="text-sage-200 text-base md:text-lg mb-6 max-w-lg mx-auto">
              Our signature guide picks the best options if you have $1,000 and
              need to reset your nervous system.
            </p>
            <Link href="/the-1000-reset" className="inline-flex items-center px-7 py-3.5 bg-white text-sage-800 font-medium rounded-full hover:bg-sage-100 transition-colors">
              Read The $1,000 Reset
            </Link>
          </div>

          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/under-500" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
                Under $500
              </Link>
              <Link href="/under-750" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
                Under $750
              </Link>
              <Link href="/work-exchange" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
                Work Exchange (Free)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
