import type { Metadata } from "next";
import Link from "next/link";
import { retreats } from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";

export const metadata: Metadata = {
  title: "Retreat Scholarships — Free & Funded Healing Opportunities",
  description:
    "Can't afford a retreat? Many centers offer full or partial scholarships, sliding-scale pricing, and donation-based stays. Healing is not just for people with money.",
  alternates: { canonical: "https://cheapretreats.com/scholarships" },
};

const fundingTypes = [
  {
    title: "Full Scholarships",
    description: "Complete funding for your retreat stay — room, meals, and program fees covered by the center or sponsors.",
    availability: "Limited — apply 2-3 months ahead",
  },
  {
    title: "Partial Scholarships",
    description: "50-80% of costs covered. You pay a small portion. Many centers reserve these for BIPOC, LGBTQ+, disabled, and low-income applicants.",
    availability: "More widely available",
  },
  {
    title: "Sliding Scale",
    description: "Pay what you can honestly afford. No proof of income needed at most centers. Based on the honor system.",
    availability: "Common at nonprofit centers",
  },
  {
    title: "Donation-Based",
    description: "Pay whatever feels right after your stay. Some centers run entirely on donations — no minimum, no judgment.",
    availability: "Available year-round",
  },
];

export default function ScholarshipsPage() {
  const scholarshipRetreats = retreats.filter((r) => r.scholarship || r.slidingScale).sort((a, b) => a.price - b.price);

  return (
    <>
      <section className="bg-gradient-to-b from-rose-50/40 to-warm-50 py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Healing is not just for<br className="hidden sm:block" /> people with money.
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-2xl mx-auto">
            Many retreat centers offer scholarships, sliding-scale pricing, and
            donation-based stays. You don&rsquo;t need to prove you&rsquo;re
            &ldquo;poor enough.&rdquo; You just need to ask.
          </p>
        </div>
      </section>

      {/* Funding Types */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
            Types of financial support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {fundingTypes.map((type) => (
              <div key={type.title} className="p-6 bg-sage-50/50 rounded-2xl border border-sage-100/80">
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">{type.title}</h3>
                <p className="text-sm text-sage-600 leading-relaxed mb-3">{type.description}</p>
                <span className="text-xs text-sage-500 italic">{type.availability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            How to apply for a scholarship
          </h2>
          <div className="space-y-4 text-sage-600 leading-relaxed">
            <p>
              Most retreat scholarships involve a simple application — a few paragraphs about
              why you want to attend and your financial situation. Here are tips:
            </p>
            <ul className="space-y-3">
              {[
                "Be honest and brief — you don't need a sob story, just the truth",
                "Apply early — most scholarship deadlines are 2-3 months before the retreat",
                "Check the center's website first — many have a scholarship page with their own process",
                "It's okay to apply to multiple places — most centers expect this",
                "Don't feel shame — these programs exist because the centers believe in access",
                "If you don't hear back, follow up gently — applications sometimes fall through the cracks",
              ].map((tip, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-sage-400 font-medium">&mdash;</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900">
              Retreats with financial support
            </h2>
            <span className="text-sm text-sage-500">{scholarshipRetreats.length} listings</span>
          </div>
          <div className="space-y-5">
            {scholarshipRetreats.map((retreat, i) => (
              <RetreatCard key={i} retreat={retreat} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            You deserve rest regardless of your bank account.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/work-exchange" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Work Exchange
            </Link>
            <Link href="/under-500" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              Under $500
            </Link>
            <Link href="/start-here" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              Start Here
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
