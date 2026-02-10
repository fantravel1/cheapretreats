import type { Metadata } from "next";
import Link from "next/link";
import { retreats } from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";
import { priceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Retreats Under $1,000 — Full-Week Healing Programs",
  description:
    "Verified healing retreats under $1,000. Full-week programs with comprehensive support, remote locations, all-inclusive pricing, and real transformation. No hidden fees.",
  alternates: { canonical: "https://cheapretreats.com/under-1000" },
};

const whatYouGet = [
  { label: "7-10 nights", desc: "Full-week to extended stays — enough time for your nervous system to actually shift" },
  { label: "All-inclusive", desc: "Private room, all meals, workshops, and activities included in one transparent price" },
  { label: "Remote locations", desc: "Forest cabins, island retreats, mountain monasteries, tropical sanctuaries" },
  { label: "Comprehensive programs", desc: "Teacher-led meditation, somatic work, facilitated circles, nature therapy, creative workshops" },
];

const testimonials = [
  {
    quote: "I spent $850 on 10 nights in Bali. Private room, three meals a day, optional yoga every morning. I came home a different person. My therapist noticed the shift before I even told her where I'd been.",
    attribution: "Former attendee, extended rest retreat",
  },
  {
    quote: "I almost booked a $3,000 wellness resort. Then I found a 7-night community retreat in Scotland for $780. It was more transformative than anything I could have bought at a spa. The community made the difference.",
    attribution: "First-time retreat-goer",
  },
  {
    quote: "After my dad died, I needed more than a weekend. The 10-night sliding scale retreat gave me time I didn't know I needed. I paid $900 and would have paid ten times that for what it gave me.",
    attribution: "Grief retreat participant",
  },
];

const compareOptions = [
  { type: "Wellness spa", duration: "2-3 nights", includes: "Room, some meals, spa access", extras: "Treatments, classes, meals extra", feel: "Pampered but unchanged" },
  { type: "Yoga resort", duration: "4-5 nights", includes: "Room, meals, daily yoga", extras: "Workshops, excursions extra", feel: "Relaxed but surface-level" },
  { type: "Healing retreat", duration: "7-10 nights", includes: "Room, all meals, full program, community", extras: "Nothing — it's all included", feel: "Actually different when you leave" },
];

export default function Under1000Page() {
  const filtered = retreats.filter((r) => r.price > 0 && r.price <= 1000).sort((a, b) => a.price - b.price);
  const withSlidingScale = filtered.filter((r) => r.slidingScale);
  const withScholarship = filtered.filter((r) => r.scholarship);
  const withWorkExchange = filtered.filter((r) => r.workExchange);
  const countries = new Set(filtered.map((r) => r.country));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-clay-100/30 to-warm-50 py-16 md:py-24">
        <img src={priceImages.under1000} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-clay-50/90 via-clay-50/75 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-sage-500">
            <span>{filtered.length} listings</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span>{withSlidingScale.length} with sliding scale</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span>{countries.size} countries</span>
          </div>
        </div>
      </section>

      {/* The Premium Tier — Without the Premium Price */}
      <section className="py-10 md:py-14 bg-white border-b border-warm-200/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-4 text-center">
            The premium tier &mdash; without the premium price
          </h2>
          <div className="space-y-4 text-sage-600 leading-relaxed text-sm md:text-base">
            <p>
              Luxury wellness retreats charge $3,000&ndash;$10,000 for a week. They&rsquo;re beautiful,
              but most of that money goes to marble bathrooms and Instagram-worthy infinity pools.
              The actual healing &mdash; the teacher, the community, the time, the quiet &mdash; doesn&rsquo;t
              cost that much.
            </p>
            <p>
              Under $1,000, you get the substance without the staging. Real teachers. Real food.
              Real community. Enough time (7&ndash;10 nights) for your body to stop running on
              cortisol and start running on something else. These aren&rsquo;t budget retreats
              &mdash; they&rsquo;re retreats that choose to spend money on what matters.
            </p>
          </div>
        </div>
      </section>

      {/* What Under $1,000 Gets You */}
      <section className="py-10 md:py-14 bg-warm-50 border-b border-warm-200/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6 text-center">
            What under $1,000 gets you
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whatYouGet.map((item) => (
              <div key={item.label} className="text-center p-4 bg-white rounded-xl border border-warm-200/60">
                <div className="font-serif font-semibold text-clay-800 mb-1">{item.label}</div>
                <div className="text-xs text-sage-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why $1,000 Is the Sweet Spot */}
      <section className="py-10 md:py-14 bg-white border-b border-warm-200/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6 text-center">
            Why $1,000 is the sweet spot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-clay-50/40 rounded-xl border border-clay-200/40">
              <div className="font-serif font-semibold text-clay-800 mb-2">Long enough to matter</div>
              <p className="text-sage-600 text-sm">
                Research on retreat outcomes suggests 5+ days for lasting benefit. At this
                tier, most programs run 7&ndash;10 nights &mdash; past the point where real
                nervous system recalibration begins.
              </p>
            </div>
            <div className="p-5 bg-clay-50/40 rounded-xl border border-clay-200/40">
              <div className="font-serif font-semibold text-clay-800 mb-2">Comprehensive support</div>
              <p className="text-sage-600 text-sm">
                This price point unlocks retreats with trained facilitators, individual
                check-ins, somatic practitioners, and structured programs designed for
                specific needs &mdash; not just generic relaxation.
              </p>
            </div>
            <div className="p-5 bg-clay-50/40 rounded-xl border border-clay-200/40">
              <div className="font-serif font-semibold text-clay-800 mb-2">Accessible to most</div>
              <p className="text-sage-600 text-sm">
                $1,000 is a real investment, but it&rsquo;s within reach for many people
                with some planning. It&rsquo;s less than a month of therapy in many cities,
                and the effects compound differently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat listings */}
      <section className="py-12 md:py-16 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {filtered.map((retreat, i) => (
              <RetreatCard key={i} retreat={retreat} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-8 bg-clay-100/40 border-y border-warm-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="font-display text-2xl md:text-3xl font-semibold text-clay-800">
                {filtered.length}+
              </div>
              <div className="text-xs text-clay-600 mt-1">Verified retreats</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-semibold text-clay-800">
                {withSlidingScale.length}
              </div>
              <div className="text-xs text-clay-600 mt-1">Sliding scale</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-semibold text-clay-800">
                {countries.size}
              </div>
              <div className="text-xs text-clay-600 mt-1">Countries</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-semibold text-clay-800">
                {withScholarship.length}
              </div>
              <div className="text-xs text-clay-600 mt-1">With scholarships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8 text-center">
            What people say
          </h2>
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="p-6 bg-warm-50 rounded-xl border border-warm-200/60">
                <p className="text-sage-700 text-sm md:text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-3 text-xs text-sage-500">
                  &mdash; {t.attribution}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Compare your options */}
      <section className="py-12 md:py-16 bg-warm-50 border-b border-warm-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6 text-center">
            Compare your options: $1,000 at different retreats
          </h2>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-w-[320px]">
              {compareOptions.map((opt) => (
                <div
                  key={opt.type}
                  className={`p-5 rounded-xl border ${
                    opt.type === "Healing retreat"
                      ? "bg-clay-50/60 border-clay-300 ring-1 ring-clay-200"
                      : "bg-white border-warm-200/60"
                  }`}
                >
                  <div className="font-serif font-semibold text-sage-800 mb-3 text-sm uppercase tracking-wider">
                    {opt.type}
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-sage-400 text-xs uppercase tracking-wider">Duration</span>
                      <p className="text-sage-700">{opt.duration}</p>
                    </div>
                    <div>
                      <span className="text-sage-400 text-xs uppercase tracking-wider">Includes</span>
                      <p className="text-sage-700">{opt.includes}</p>
                    </div>
                    <div>
                      <span className="text-sage-400 text-xs uppercase tracking-wider">Extras</span>
                      <p className="text-sage-700">{opt.extras}</p>
                    </div>
                  </div>
                  <div className={`mt-4 text-xs font-medium px-3 py-1.5 rounded-full text-center ${
                    opt.type === "Healing retreat"
                      ? "bg-clay-200/60 text-clay-800"
                      : "bg-sage-100 text-sage-600"
                  }`}>
                    {opt.feel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced $1,000 Reset promo */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sage-700 to-sage-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-sage-200 rounded-full text-xs font-medium mb-6">
              Our signature guide
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">
              The $1,000 Reset
            </h2>
            <p className="text-sage-200 text-base md:text-lg mb-4 max-w-lg mx-auto">
              If you have $1,000 and need to reset your nervous system, this guide
              picks the best options &mdash; curated by need, not by marketing budget.
            </p>
            <ul className="text-sage-300 text-sm space-y-1.5 mb-6 max-w-md mx-auto text-left">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                <span>Handpicked retreats for burnout, grief, trauma, and more</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                <span>Complete cost breakdowns — no surprises</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                <span>Tips on when to go, what to pack, how to prepare</span>
              </li>
            </ul>
            <Link href="/the-1000-reset" className="inline-flex items-center px-7 py-3.5 bg-white text-sage-800 font-medium rounded-full hover:bg-sage-100 transition-colors">
              Read The $1,000 Reset
            </Link>
          </div>
        </div>
      </section>

      {/* Financial aid callout */}
      <section className="py-10 md:py-14 bg-warm-50 border-b border-warm-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-2 text-center">
            $1,000 is too much? You still have options.
          </h2>
          <p className="text-sage-500 text-sm text-center mb-8 max-w-lg mx-auto">
            Many of these retreats offer financial assistance. Healing shouldn&rsquo;t be
            a luxury.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/scholarships"
              className="flex flex-col items-center p-5 bg-white rounded-xl border border-warm-200/60 hover:shadow-md transition-shadow text-center group"
            >
              <div className="font-display text-2xl font-semibold text-clay-700 mb-1">
                {withScholarship.length}
              </div>
              <div className="font-serif font-semibold text-sage-800 mb-1">Scholarships</div>
              <p className="text-xs text-sage-500">
                Partial or full funding for people who need it. Many centers don&rsquo;t
                advertise this &mdash; you just have to ask.
              </p>
              <span className="mt-3 text-xs text-clay-600 font-medium group-hover:underline">
                Browse scholarships
              </span>
            </Link>
            <Link
              href="/community-run"
              className="flex flex-col items-center p-5 bg-white rounded-xl border border-warm-200/60 hover:shadow-md transition-shadow text-center group"
            >
              <div className="font-display text-2xl font-semibold text-clay-700 mb-1">
                {withSlidingScale.length}
              </div>
              <div className="font-serif font-semibold text-sage-800 mb-1">Sliding scale</div>
              <p className="text-xs text-sage-500">
                Pay what you can. Community-run centers often offer flexible
                pricing because they genuinely want you there.
              </p>
              <span className="mt-3 text-xs text-clay-600 font-medium group-hover:underline">
                Community-run retreats
              </span>
            </Link>
            <Link
              href="/work-exchange"
              className="flex flex-col items-center p-5 bg-white rounded-xl border border-warm-200/60 hover:shadow-md transition-shadow text-center group"
            >
              <div className="font-display text-2xl font-semibold text-clay-700 mb-1">
                {withWorkExchange.length}
              </div>
              <div className="font-serif font-semibold text-sage-800 mb-1">Work exchange</div>
              <p className="text-xs text-sage-500">
                Trade a few hours of daily work for free room and board. Stay
                longer, spend nothing.
              </p>
              <span className="mt-3 text-xs text-clay-600 font-medium group-hover:underline">
                Work exchange programs
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* More price ranges CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-warm-50 to-clay-50/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Explore other price ranges
          </h2>
          <p className="text-sage-600 mb-8 max-w-lg mx-auto">
            Whether you have $200 or need a free option, there&rsquo;s a retreat that fits.
          </p>
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
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Retreats Under $1,000",
            description: "Verified healing retreats under $1,000 with transparent all-inclusive pricing. Full-week programs with comprehensive support and remote locations.",
            url: "https://cheapretreats.com/under-1000",
            numberOfItems: filtered.length,
            isPartOf: {
              "@type": "WebSite",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
          }),
        }}
      />
    </>
  );
}
