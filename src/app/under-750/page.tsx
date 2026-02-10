import type { Metadata } from "next";
import Link from "next/link";
import { retreats } from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";

export const metadata: Metadata = {
  title: "Retreats Under $750 — Multi-Night Healing Stays",
  description:
    "Verified healing retreats under $750. Multi-night stays with meals, nature immersion, and workshops. Complete cost transparency.",
  alternates: { canonical: "https://cheapretreats.com/under-750" },
};

export default function Under750Page() {
  const filtered = retreats.filter((r) => r.price > 0 && r.price < 750).sort((a, b) => a.price - b.price);

  return (
    <>
      <section className="bg-gradient-to-b from-warm-100/50 to-warm-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 text-warm-700 rounded-full text-sm font-medium mb-8">
            {filtered.length}+ verified retreats
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-4 leading-[1.1]">
            Under $750
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            3&ndash;7 night retreats with meals, nature immersion, and optional workshops.
            All-inclusive pricing.
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
        </div>
      </section>
    </>
  );
}
