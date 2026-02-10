import type { Metadata } from "next";
import Link from "next/link";
import { retreats } from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";

export const metadata: Metadata = {
  title: "Community-Run Retreats — Monasteries, Ashrams, Co-ops & More",
  description:
    "The most powerful healing spaces are often the least marketed. Discover community-run, nonprofit, and worker-owned retreat spaces worldwide.",
  alternates: { canonical: "https://cheapretreats.com/community-run" },
};

const spaceTypes = [
  { name: "Monasteries", description: "Centuries of hospitality. Rooms, meals, and silence — often on a donation basis.", icon: "M6 40V20l18-14 18 14v20H30v-12h-12v12H6z" },
  { name: "Convents", description: "Guesthouses within religious communities offering peaceful, structured rest.", icon: "M24 4l-20 18h8v18h24V22h8L24 4zM24 34v-8h-4v8" },
  { name: "Ashrams", description: "Spiritual communities offering immersive stays with meditation, service, and community.", icon: "M24 6c-6 0-10 4-10 10v4c0 6 4 10 10 10s10-4 10-10v-4c0-6-4-10-10-10z" },
  { name: "Rural Co-ops", description: "Worker-owned farms and land trusts hosting healing stays in nature.", icon: "M8 40V24l8-8 8 8v16M24 40V24l8-8 8 8v16" },
  { name: "Nonprofit Retreat Houses", description: "Mission-driven retreat centers that reinvest in community, not shareholders.", icon: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" },
  { name: "Silent Guesthouses", description: "Small, independent homes offering quiet stays — no program, just peace.", icon: "M6 40V22L24 6l18 16v18H6zM20 28h8v12H20z" },
];

export default function CommunityRunPage() {
  const communityRetreats = retreats.filter((r) => r.communityRun).sort((a, b) => a.price - b.price);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-100/50 to-warm-50 py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            The spaces that<br className="hidden sm:block" /> actually heal
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-2xl mx-auto">
            The most powerful healing often happens in the least marketed places.
            These are community-run, nonprofit, and worker-owned spaces that put
            people before profit.
          </p>
        </div>
      </section>

      {/* Space Types */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
            Types of community-run spaces
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {spaceTypes.map((space) => (
              <div key={space.name} className="p-6 bg-sage-50/50 rounded-2xl border border-sage-100/80">
                <div className="w-12 h-12 rounded-xl bg-sage-200/50 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sage-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={space.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">{space.name}</h3>
                <p className="text-sm text-sage-600 leading-relaxed">{space.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-sage-800 italic leading-relaxed">
            &ldquo;These places have been healing people for centuries.
            They just don&rsquo;t have a marketing budget.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Retreat Listings */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900">
              Community-run retreats
            </h2>
            <span className="text-sm text-sage-500">{communityRetreats.length} listings</span>
          </div>
          <div className="space-y-5">
            {communityRetreats.map((retreat, i) => (
              <RetreatCard key={i} retreat={retreat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Know a community-run space we should list?
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8">
            We&rsquo;re always looking for monasteries, cooperatives, nonprofits,
            and community spaces that offer genuine healing at fair prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Get in Touch
            </Link>
            <Link href="/start-here" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              Browse All Retreats
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
