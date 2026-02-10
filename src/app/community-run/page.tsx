import type { Metadata } from "next";
import Link from "next/link";
import { retreats } from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Community-Run Retreats — Monasteries, Ashrams, Co-ops & More",
  description:
    "The most powerful healing spaces are often the least marketed. Discover community-run, nonprofit, and worker-owned retreat spaces worldwide.",
  alternates: { canonical: "https://cheapretreats.com/community-run" },
};

const spaceTypes = [
  { name: "Monasteries", description: "Centuries of hospitality. Rooms, meals, and silence — often on a donation basis. Many welcome guests of all faiths or none.", icon: "M6 40V20l18-14 18 14v20H30v-12h-12v12H6z" },
  { name: "Convents", description: "Guesthouses within religious communities offering peaceful, structured rest. Often quieter and more intimate than monasteries.", icon: "M24 4l-20 18h8v18h24V22h8L24 4zM24 34v-8h-4v8" },
  { name: "Ashrams", description: "Spiritual communities offering immersive stays with meditation, service, and community. Many operate on donation or sliding scale.", icon: "M24 6c-6 0-10 4-10 10v4c0 6 4 10 10 10s10-4 10-10v-4c0-6-4-10-10-10z" },
  { name: "Rural Co-ops", description: "Worker-owned farms and land trusts hosting healing stays in nature. Decisions are made collectively, not by a board or owner.", icon: "M8 40V24l8-8 8 8v16M24 40V24l8-8 8 8v16" },
  { name: "Nonprofit Retreat Houses", description: "Mission-driven retreat centers that reinvest in community, not shareholders. Often offer scholarships and sliding-scale rates.", icon: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" },
  { name: "Silent Guesthouses", description: "Small, independent homes offering quiet stays — no program, just peace. Some are run by a single host who simply keeps the space open.", icon: "M6 40V22L24 6l18 16v18H6zM20 28h8v12H20z" },
  { name: "Walking Pilgrimages", description: "Ancient routes like the Camino de Santiago where the journey is the retreat. Albergues along the way offer beds and meals for a few euros.", icon: "M20 6l-2 14-6-4v24h6l4-12 4 12h6V16l-6 4L20 6z" },
  { name: "Art Residencies for Non-Artists", description: "Creative spaces that welcome everyone, not just professionals. Paint, write, or make music without the pressure of producing anything.", icon: "M8 40l6-16L28 10l10 10-14 14L8 40zm24-22l-6-6 3-3 6 6-3 3z" },
  { name: "Farm Stays with Rest", description: "Agricultural communities where healing comes from soil, animals, and seasonal rhythms. Help if you want — or simply be present.", icon: "M4 24h40M12 24V12l12-8 12 8v12M18 24v-6h12v6" },
  { name: "Indigenous Healing Centers", description: "Indigenous-led spaces offering traditional healing practices with cultural respect. Always approach as a guest, with humility and openness.", icon: "M24 4v8m-14 2l6 6m22-6l-6 6M10 24H4m40 0h-6M24 44v-8m-14-2l6-6m22 6l-6-6M24 18a6 6 0 100 12 6 6 0 000-12z" },
];

const testimonials = [
  {
    quote: "I stayed at a Benedictine monastery in New Mexico for nine days. Nobody asked me what I did for a living. Nobody tried to sell me anything. I ate simple food, walked in the desert, and sat in silence. It was the first time in years I felt like a human being instead of a productivity machine.",
    attribution: "Sarah, 41 — stayed at a monastery after burnout",
  },
  {
    quote: "The ashram in southern India changed something fundamental in me. I woke at 4:30am, meditated, helped cook breakfast for 200 people, and spent afternoons in the garden. I went expecting spiritual fireworks and got something better — ordinary peace. The whole stay was donation-based.",
    attribution: "David, 33 — three weeks at a south Indian ashram",
  },
  {
    quote: "Our rural co-op in Vermont hosts guests from May through October. People come thinking they need a program or a teacher. What they actually need is to sit on a porch, watch the light change, and eat dinner with people who aren't trying to impress each other. That's what community provides.",
    attribution: "Maria, 56 — founding member of a worker-owned retreat co-op",
  },
];

const featuredCommunity = {
  name: "Still Mountain Monastery",
  location: "Southern Appalachia, North Carolina",
  type: "Ecumenical contemplative community",
  founded: "1987",
  description:
    "Still Mountain is a small ecumenical monastery nestled in 120 acres of hardwood forest in the southern Appalachian mountains. Founded by a group of contemplatives from various traditions, it operates as a nonprofit land trust. The community of 12 resident members follows a daily rhythm of prayer, work, and silence — and welcomes guests year-round.",
  whatToExpect:
    "Guests stay in simple private rooms in the guesthouse, a converted farmhouse about 200 yards from the main chapel. Three vegetarian meals are served daily in the communal dining hall. Silence is observed from evening prayer until after breakfast. During the day, guests are free to join the community's work periods (gardening, woodworking, kitchen help), walk the forest trails, use the library, or simply rest. There is no structured program — the rhythm of the community is the program.",
  pricing:
    "Suggested donation of $45/night, but no one is turned away for inability to pay. The community asks only that guests contribute what they can honestly afford. Extended stays of 2-4 weeks are available for those going through major life transitions, with the suggested donation dropping to $30/night for stays longer than 10 days.",
  whatMakesItSpecial:
    "Still Mountain is not trying to be a retreat center. It is a monastery that happens to keep its doors open. The monks and sisters are not performing hospitality — they are simply living their lives and allowing others to witness and share in that rhythm. There are no workshops, no branding, no social media presence. Guests often describe the experience as 'remembering how to breathe.'",
};

export default function CommunityRunPage() {
  const communityRetreats = retreats.filter((r) => r.communityRun).sort((a, b) => a.price - b.price);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-100/50 to-warm-50 py-20 md:py-32">
        <img src={heroImages.communityRun} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-50/90 via-sage-50/75 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            Types of community-run spaces
          </h2>
          <p className="text-sage-600 leading-relaxed mb-8 max-w-3xl">
            Community-run healing spaces take many forms across cultures and traditions.
            What they share is a commitment to hospitality over commerce, and to the
            belief that rest and reflection should be available to everyone.
          </p>
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

      {/* Why Community-Run Matters */}
      <section className="py-14 md:py-20 bg-sage-50/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
            Why community-run matters
          </h2>
          <div className="space-y-6 text-sage-700 leading-relaxed">
            <p>
              When a retreat center is run as a business, there is an inherent tension between
              what serves the guest and what serves the bottom line. The room needs to be filled,
              the schedule needs to feel &ldquo;worth it,&rdquo; and the experience needs to
              generate reviews and repeat bookings. None of that is evil — but it shapes
              the space in subtle ways. You can feel it in the marketing language, the upsells,
              the carefully curated atmosphere that sometimes feels more like a hotel than a
              place of genuine rest.
            </p>
            <p>
              Community-run spaces operate from a fundamentally different logic. A monastery
              that has been welcoming guests for 400 years is not optimizing for conversion
              rates. An ashram sustained by collective labor and voluntary donations is not
              worried about its TripAdvisor ranking. A worker-owned cooperative that grows its
              own food and makes decisions by consensus is not trying to scale. These places
              exist because a group of people decided that creating a space for healing was
              worth their lives — not just their business plan.
            </p>
            <p>
              This difference matters because real healing requires something that commerce
              struggles to provide: genuine non-transactional relationship. When you stay at a
              community-run space, you are not a customer. You are a guest. The people serving
              you dinner are not employees performing a role — they are members of a community
              sharing what they have. That shift, from transaction to gift, changes everything
              about how the stay feels and what it makes possible.
            </p>
            <p>
              This is not to say that every community-run space is perfect, or that every
              commercial retreat is shallow. There are beautifully run for-profit centers
              and dysfunctional communes. But if you are looking for a place where the
              container itself is part of the medicine — where the way people live together
              and share resources is as healing as any program or technique — community-run
              spaces are where to look.
            </p>
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

      {/* Voices from Community Spaces */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
            Voices from community spaces
          </h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="p-6 md:p-8 bg-sage-50/40 rounded-2xl border border-sage-100/60">
                <blockquote className="text-sage-700 leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <p className="text-sm text-sage-500 font-medium">
                  &mdash; {testimonial.attribution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Economics of Community Healing */}
      <section className="py-14 md:py-20 bg-sage-50/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
            The economics of community healing
          </h2>
          <div className="space-y-6 text-sage-700 leading-relaxed">
            <p>
              People often wonder how community-run spaces can charge so little — or nothing
              at all. The answer is simpler than you might expect: they have removed most of
              what makes retreats expensive. There are no shareholders expecting returns, no
              marketing budgets, no executive salaries, and no luxury finishes designed to
              justify premium pricing. What remains is the actual cost of hosting a human
              being: a room, food, heat, and the labor of care.
            </p>
            <p>
              Different models sustain themselves in different ways. <strong>Monasteries
              and ashrams</strong> often rely on a combination of guest donations, the
              productive labor of their members (farming, crafts, publishing), and
              occasionally grants or endowments built over decades or centuries.
              <strong> Worker-owned cooperatives</strong> share labor and costs among
              members, keeping overhead low by doing much of the work themselves — cooking,
              cleaning, maintenance, gardening. <strong>Nonprofit retreat houses</strong> may
              receive grants from foundations, run fundraising campaigns, or cross-subsidize
              scholarship stays with full-price bookings.
            </p>
            <p>
              Many of these spaces also practice <strong>work exchange</strong> — offering
              free or reduced stays to guests willing to contribute a few hours of daily
              labor. This is not exploitation; it is an ancient model of reciprocity. You
              help cook breakfast, and you eat for free. You weed the garden, and you sleep
              under the stars. The work itself often becomes part of the healing, grounding
              people in their bodies and connecting them to the community.
            </p>
            <p>
              The result is that a week at a community-run space might cost $0 to $300 —
              compared to $1,500 to $5,000 at a commercial wellness retreat. The beds are
              simpler. The food is plainer. There is no spa. But the healing is often deeper,
              because it comes not from consumption but from belonging.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Community Spotlight */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium">
              Featured community
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-2">
            {featuredCommunity.name}
          </h2>
          <p className="text-sage-500 mb-8">
            {featuredCommunity.location} &middot; {featuredCommunity.type} &middot; Est. {featuredCommunity.founded}
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">About the community</h3>
              <p className="text-sage-700 leading-relaxed">{featuredCommunity.description}</p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">What to expect</h3>
              <p className="text-sage-700 leading-relaxed">{featuredCommunity.whatToExpect}</p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">Pricing</h3>
              <p className="text-sage-700 leading-relaxed">{featuredCommunity.pricing}</p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">What makes it special</h3>
              <p className="text-sage-700 leading-relaxed">{featuredCommunity.whatMakesItSpecial}</p>
            </div>
          </div>
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
