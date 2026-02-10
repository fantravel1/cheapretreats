import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The $1,000 Reset — Best Affordable Retreats to Reset Your Nervous System",
  description:
    "If you had $1,000 and needed to reset your nervous system — here are your best options. Curated, verified, honest retreat recommendations for real healing.",
  alternates: { canonical: "https://cheapretreats.com/the-1000-reset" },
};

const retreatPicks = [
  {
    name: "Mountain Silence Retreat Center",
    location: "Blue Ridge Mountains, NC",
    price: "$450",
    nights: "4 nights",
    type: "Silent retreat",
    includes: "Private room, 3 meals/day, guided meditation optional",
    goodFor: "Burnout, overwhelm, sensory overload",
    badge: "Verified Safe & Real",
    tags: ["Secular", "Silent", "Solo-friendly"],
  },
  {
    name: "Plum Village Practice Center",
    location: "Dordogne, France",
    price: "$680",
    nights: "7 nights",
    type: "Mindfulness community",
    includes: "Shared room, all meals, daily practice",
    goodFor: "Grief, loneliness, spiritual exploration",
    badge: "Verified Safe & Real",
    tags: ["Buddhist-inspired", "Community", "Work practice"],
  },
  {
    name: "Holy Cross Monastery",
    location: "West Park, NY",
    price: "$385",
    nights: "5 nights",
    type: "Monastery stay",
    includes: "Private room, 3 meals/day, chapel access",
    goodFor: "Quiet, reflection, grief, stopping",
    badge: "Verified Safe & Real",
    tags: ["Religious-optional", "Silent", "Solo-friendly"],
  },
  {
    name: "Esalen Work-Scholar Program",
    location: "Big Sur, CA",
    price: "$0 (work exchange)",
    nights: "28 nights",
    type: "Work exchange",
    includes: "Shared room, all meals, hot springs, 1 workshop/week",
    goodFor: "Deep reset, career transition, burnout",
    badge: "Verified Safe & Real",
    tags: ["Secular", "Community", "Physical work"],
  },
  {
    name: "Kripalu Center for Yoga",
    location: "Stockbridge, MA",
    price: "$750",
    nights: "5 nights",
    type: "Wellness center",
    includes: "Shared room, 3 buffet meals/day, all classes",
    goodFor: "Depression recovery, caregiver burnout, first-timers",
    badge: "Verified Safe & Real",
    tags: ["Spiritual-optional", "Neurodivergent-aware", "LGBTQ+ welcoming"],
  },
  {
    name: "Gaia House",
    location: "Devon, England",
    price: "$340 (donation suggested)",
    nights: "5 nights",
    type: "Meditation retreat",
    includes: "Shared room, vegetarian meals, teacher-led sits",
    goodFor: "Anxiety, burnout, quiet seeking",
    badge: "Verified Safe & Real",
    tags: ["Secular", "Donation-based", "Silent"],
  },
  {
    name: "Spirit Rock Meditation Center",
    location: "Woodacre, CA",
    price: "$650",
    nights: "5 nights",
    type: "Insight meditation",
    includes: "Shared room, all meals, daily teacher meetings",
    goodFor: "Trauma-sensitive healing, grief, deep quiet",
    badge: "Verified Safe & Real",
    tags: ["Secular", "Trauma-informed", "Sliding scale"],
  },
  {
    name: "Cortijo Romero",
    location: "Andalusia, Spain",
    price: "$520",
    nights: "7 nights",
    type: "Creative retreat",
    includes: "Shared room, all meals, pool, gardens",
    goodFor: "Creative block, loneliness, gentle reset",
    badge: "Verified Safe & Real",
    tags: ["Secular", "Community", "Art-optional"],
  },
];

export default function The1000ResetPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-sage-800 via-sage-900 to-sage-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-8 text-sage-200">
            Signature Guide
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 leading-[1.1]">
            The $1,000 Reset
          </h1>
          <p className="text-xl md:text-2xl text-sage-200 leading-relaxed max-w-2xl mx-auto font-serif italic">
            If you had $1,000 and needed to reset your nervous system — here are
            your best options.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-sage-300">
            <span>8 curated picks</span>
            <span className="w-1 h-1 rounded-full bg-sage-500" />
            <span>All verified</span>
            <span className="w-1 h-1 rounded-full bg-sage-500" />
            <span>$0 — $750 range</span>
            <span className="w-1 h-1 rounded-full bg-sage-500" />
            <span>Updated quarterly</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-20 bg-white border-b border-warm-200/60">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-sage-600 leading-relaxed text-lg">
            <p>
              This isn&rsquo;t a listicle. It&rsquo;s a genuine answer to a
              question we hear constantly:
            </p>
            <blockquote className="font-serif text-2xl text-sage-800 italic border-l-4 border-sage-300 pl-6 py-2">
              &ldquo;I&rsquo;m exhausted. I have some money. Where should I go?&rdquo;
            </blockquote>
            <p>
              Every retreat here has been verified through our No Bullshit Healing
              Index. Real safety scores. Real pricing. No affiliate-driven
              recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Retreat Cards */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {retreatPicks.map((retreat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 md:p-8 border border-warm-200/60 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-sage-100 text-sage-700 text-xs font-medium rounded-full">
                        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                          <path fillRule="evenodd" d="M6 0.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM8.7 4.8a.5.5 0 00-.7-.6L5.5 6.6 4 5.2a.5.5 0 00-.7.6l2 2a.5.5 0 00.7 0l3-2.7-.3-.3z" />
                        </svg>
                        {retreat.badge}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-sage-900">
                      {retreat.name}
                    </h3>
                    <p className="text-sage-500 text-sm mt-1">{retreat.location}</p>
                  </div>
                  <div className="text-left md:text-right flex-shrink-0">
                    <div className="font-display text-3xl font-semibold text-sage-800">{retreat.price}</div>
                    <div className="text-sm text-sage-500">{retreat.nights}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-sage-400 text-xs uppercase tracking-wider font-medium">Type</span>
                    <p className="text-sage-700 mt-0.5">{retreat.type}</p>
                  </div>
                  <div>
                    <span className="text-sage-400 text-xs uppercase tracking-wider font-medium">Includes</span>
                    <p className="text-sage-700 mt-0.5">{retreat.includes}</p>
                  </div>
                  <div>
                    <span className="text-sage-400 text-xs uppercase tracking-wider font-medium">Best for</span>
                    <p className="text-sage-700 mt-0.5">{retreat.goodFor}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {retreat.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-warm-100 text-warm-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            How we chose these
          </h2>
          <div className="space-y-4 text-sage-600 leading-relaxed">
            <p>Every retreat on this list was evaluated on:</p>
            <ul className="space-y-3">
              {[
                "Safety & consent culture — trained facilitators, clear boundaries, opt-out policies",
                "Price transparency — total cost listed upfront, no hidden fees",
                "Accessibility — sliding scale, scholarships, or work-exchange options available",
                "Honest reviews — from people who actually went, including what was hard",
                "Trauma awareness — staff trained in trauma-informed practices",
                "No guru energy — no charismatic leaders with unchecked power",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-4">
              This list is updated quarterly. If a retreat no longer meets our
              standards, it gets removed. No exceptions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Don&rsquo;t have $1,000?
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Many of these offer sliding scale or work exchange. And we have
            hundreds more under $500.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/under-500" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Under $500 Retreats
            </Link>
            <Link href="/work-exchange" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              Work Exchange
            </Link>
            <Link href="/scholarships" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              Scholarships
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The $1,000 Reset — Best Affordable Retreats to Reset Your Nervous System",
            description: "Curated guide to the best affordable healing retreats under $1,000, verified for safety and transparency.",
            author: { "@type": "Organization", name: "CheapRetreats" },
            publisher: { "@type": "Organization", name: "CheapRetreats" },
            mainEntityOfPage: "https://cheapretreats.com/the-1000-reset",
          }),
        }}
      />
    </>
  );
}
