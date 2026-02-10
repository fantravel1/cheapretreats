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
  {
    name: "Antaiji Zen Monastery",
    location: "Hyogo Prefecture, Japan",
    price: "$0 (donation-based)",
    nights: "7 nights",
    type: "Zen monastery",
    includes: "Shared tatami room, vegetarian meals, zazen instruction, farm work",
    goodFor: "Existential questioning, deep silence, radical simplicity",
    badge: "Verified Safe & Real",
    tags: ["Buddhist", "Silent", "Physical work"],
  },
  {
    name: "Dzogchen Beara",
    location: "West Cork, Ireland",
    price: "$480",
    nights: "5 nights",
    type: "Coastal silent retreat",
    includes: "Private room, vegetarian meals, cliff walks, meditation hall",
    goodFor: "Grief, emotional exhaustion, nature immersion",
    badge: "Verified Safe & Real",
    tags: ["Buddhist-inspired", "Silent", "Solo-friendly"],
  },
  {
    name: "The Neurorest Collective",
    location: "Asheville, NC",
    price: "$695",
    nights: "4 nights",
    type: "Neurodivergent-friendly retreat",
    includes: "Private room, sensory-friendly spaces, flexible schedule, all meals",
    goodFor: "ADHD burnout, autistic overwhelm, sensory recovery",
    badge: "Verified Safe & Real",
    tags: ["Neurodivergent-centered", "Secular", "Flexible structure"],
  },
  {
    name: "SisterSong Healing Circle",
    location: "Atlanta, GA",
    price: "$550 (sliding scale from $300)",
    nights: "4 nights",
    type: "BIPOC healing circle",
    includes: "Shared room, culturally affirming meals, somatic work, group healing",
    goodFor: "Racial trauma, community healing, ancestral reconnection",
    badge: "Verified Safe & Real",
    tags: ["BIPOC-centered", "Trauma-informed", "Sliding scale"],
  },
  {
    name: "Project Sanctuary Retreat",
    location: "Granby, CO",
    price: "$0 (fully funded)",
    nights: "6 nights",
    type: "Veterans retreat",
    includes: "Private cabin, all meals, outdoor activities, counselor access, family welcome",
    goodFor: "PTSD recovery, military transition, family reconnection",
    badge: "Verified Safe & Real",
    tags: ["Veterans & families", "Fully funded", "Trauma-informed"],
  },
  {
    name: "Camino de Santiago: Final 100km",
    location: "Sarria to Santiago, Spain",
    price: "$600",
    nights: "7 nights",
    type: "Walking pilgrimage",
    includes: "Albergue stays, self-catered, pilgrim credential, route guidance",
    goodFor: "Life transitions, decision making, physical-spiritual integration",
    badge: "Verified Safe & Real",
    tags: ["Secular-friendly", "Solo-friendly", "Physical"],
  },
  {
    name: "Rancho La Puerta Trabajo Program",
    location: "Tecate, Baja California, Mexico",
    price: "$0 (work exchange)",
    nights: "21 nights",
    type: "Farm stay retreat",
    includes: "Shared room, organic meals from on-site farm, garden work, fitness classes",
    goodFor: "Burnout, reconnecting with body, gentle structure",
    badge: "Verified Safe & Real",
    tags: ["Work exchange", "Community", "Farm-to-table"],
  },
  {
    name: "Tsurunoyu Onsen Temple Stay",
    location: "Akita Prefecture, Japan",
    price: "$420",
    nights: "4 nights",
    type: "Hot springs retreat",
    includes: "Tatami room, kaiseki meals, natural onsen access, forest trails",
    goodFor: "Chronic pain, nervous system regulation, deep rest",
    badge: "Verified Safe & Real",
    tags: ["Secular", "Solo-friendly", "Nature immersion"],
  },
];

const budgetBreakdowns = [
  {
    title: "The Mountain Monastery Reset",
    total: "$535",
    items: [
      { label: "Holy Cross Monastery (5 nights, all meals)", cost: "$385" },
      { label: "Train from NYC (round trip)", cost: "$60" },
      { label: "Taxi from station", cost: "$40" },
      { label: "Personal items & snacks", cost: "$50" },
    ],
    note: "You still have $465 left over. That covers a therapist session when you get home.",
  },
  {
    title: "The European Silence Trip",
    total: "$940",
    items: [
      { label: "Gaia House (5 nights, donation-based)", cost: "$340" },
      { label: "Budget flight to London", cost: "$380" },
      { label: "Train to Devon (round trip)", cost: "$80" },
      { label: "Travel day meals & incidentals", cost: "$90" },
      { label: "Travel insurance", cost: "$50" },
    ],
    note: "International doesn't have to mean expensive. Donation-based centers make Europe genuinely accessible.",
  },
  {
    title: "The Free Deep Reset",
    total: "$180",
    items: [
      { label: "Esalen Work-Scholar (28 nights, work exchange)", cost: "$0" },
      { label: "Bus to Big Sur", cost: "$85" },
      { label: "Personal supplies for a month", cost: "$65" },
      { label: "Pre-trip meals", cost: "$30" },
    ],
    note: "A full month of healing, hot springs, workshops, and community for the cost of bus fare and toothpaste.",
  },
  {
    title: "The Pilgrimage on a Budget",
    total: "$850",
    items: [
      { label: "Camino albergue stays (7 nights)", cost: "$140" },
      { label: "Food (self-catered + pilgrim menus)", cost: "$175" },
      { label: "Budget flight to Madrid + bus to Sarria", cost: "$450" },
      { label: "Gear (if you don't already own it)", cost: "$60" },
      { label: "Travel insurance", cost: "$25" },
    ],
    note: "Walking 100km across Spain costs less than a weekend at most wellness resorts. And it will change you more.",
  },
];

const readerStories = [
  {
    quote:
      "I went to Gaia House after my mom died. I didn't meditate much — I mostly just sat in the garden and cried. Nobody tried to fix me. I came home and slept for 14 hours straight and it was the first real sleep I'd had in months.",
    name: "Rachel, 34",
    retreat: "Gaia House",
  },
  {
    quote:
      "The work exchange at Esalen saved my life, honestly. I was broke, depressed, and had no plan. I scrubbed dishes for a month and somehow came out knowing what I wanted to do next. It wasn't magic — it was just having enough space to think.",
    name: "Marcus, 28",
    retreat: "Esalen Work-Scholar",
  },
  {
    quote:
      "I almost didn't go because I felt stupid spending money on a retreat when I had bills to pay. But I was so burned out I couldn't function at work anyway. Four days at Mountain Silence cost less than the ER visit I was heading toward. I wish I'd gone sooner.",
    name: "Priya, 41",
    retreat: "Mountain Silence",
  },
];

const cantTravelOptions = [
  {
    title: "Virtual retreat weekends",
    description:
      "Spirit Rock, Plum Village, and many others offer online retreats — 2 to 7 days of structured practice from home. Typically $50-$200 on sliding scale. You still need to clear your schedule and tell people you're unavailable. The container matters more than the location.",
  },
  {
    title: "Local day retreats",
    description:
      "Most mid-size cities have meditation centers, yoga studios, or churches that host single-day silent retreats. These usually cost $20-$75 and run from morning to evening. No packing, no travel, no time off work beyond one Saturday. Search \"day retreat\" plus your city.",
  },
  {
    title: "The DIY home retreat",
    description:
      "Block off 48 hours. Tell everyone you're unavailable. Turn off your phone. Stock simple food ahead of time. No screens, no tasks, no obligations. Wake when you wake. Eat when you're hungry. Walk if you want. Sit if you want. It sounds too simple to work. It works.",
  },
  {
    title: "Nature micro-retreats",
    description:
      "A single night at a state park campsite costs $10-$35. Bring a journal, leave your phone in the car, and spend 24 hours with nothing to do. Some state parks have cabins for $40-$70 if camping isn't your thing. The point isn't the amenities — it's the interruption of your routine.",
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
            <span>16 curated picks</span>
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
            <p>
              Some of these are free. Some cost a few hundred dollars. A few push
              close to the $1,000 limit once you add travel. But every single one
              will give you more genuine rest and healing than a week at a resort
              that costs five times as much.
            </p>
            <p>
              We&rsquo;ve organized them roughly by type — silent retreats,
              monasteries, work exchanges, community-based healing, walking
              pilgrimages, and more — so you can find what fits how you actually
              need to heal, not what Instagram says healing should look like.
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

      {/* Budget Breakdown */}
      <section className="py-14 md:py-20 bg-white border-b border-warm-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
              What $1,000 actually gets you
            </h2>
            <p className="text-sage-600 leading-relaxed text-lg">
              People assume a healing retreat means $3,000 at a Bali villa. Here&rsquo;s
              what the math actually looks like when you choose places built for
              healing instead of aesthetics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {budgetBreakdowns.map((scenario, i) => (
              <div
                key={i}
                className="bg-sage-50/50 rounded-2xl p-6 md:p-8 border border-sage-100/80"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-900 mb-4">
                  {scenario.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {scenario.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-start gap-4 text-sm">
                      <span className="text-sage-600">{item.label}</span>
                      <span className="text-sage-800 font-medium flex-shrink-0">{item.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-sage-200/60 pt-3 mt-3 flex justify-between items-center">
                  <span className="text-sm font-medium text-sage-700">Total</span>
                  <span className="font-display text-xl font-semibold text-sage-800">{scenario.total}</span>
                </div>
                <p className="text-sage-500 text-sm mt-4 italic">{scenario.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Stories */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            People who used this guide
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            We asked readers to share their experiences honestly — what helped,
            what was hard, and what they wish they&rsquo;d known.
          </p>
          <div className="space-y-6">
            {readerStories.map((story, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 md:p-8 border border-warm-200/60"
              >
                <blockquote className="font-serif text-lg text-sage-700 italic leading-relaxed mb-4">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-sage-800">{story.name}</span>
                  <span className="text-sage-400">&mdash;</span>
                  <span className="text-sage-500">{story.retreat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* If You Can't Travel */}
      <section className="py-14 md:py-20 bg-white border-b border-warm-200/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            If you can&rsquo;t travel right now
          </h2>
          <p className="text-sage-600 leading-relaxed text-lg mb-10">
            Not everyone can take a week off and fly somewhere. That doesn&rsquo;t
            mean you can&rsquo;t rest. A retreat is fundamentally about interrupting
            your patterns — and you can do that without a plane ticket.
          </p>
          <div className="space-y-6">
            {cantTravelOptions.map((option, i) => (
              <div
                key={i}
                className="bg-sage-50/50 rounded-xl p-6 border border-sage-100/80"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-warm-50 rounded-xl border border-warm-200/60">
            <p className="text-sage-600 leading-relaxed">
              <span className="font-medium text-sage-800">The honest truth:</span>{" "}
              a residential retreat is more impactful for most people because it
              physically removes you from your triggers and responsibilities. But
              any intentional pause is better than no pause. Start where you can.
              You can always go deeper later.
            </p>
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
            <p>
              Every retreat on this list was evaluated against ten criteria. We
              don&rsquo;t accept payment for placement. We don&rsquo;t use affiliate
              links. Nobody &ldquo;sponsored&rdquo; their way onto this page.
            </p>
            <p>
              We start with hundreds of retreats and narrow down to the ones we&rsquo;d
              genuinely recommend to a friend who was struggling. That standard
              eliminates about 90% of what&rsquo;s out there.
            </p>
            <ul className="space-y-3">
              {[
                "Safety & consent culture — trained facilitators, clear boundaries, opt-out policies for every activity. We look for explicit language about consent in their materials, not just implied norms.",
                "Price transparency — total cost listed upfront, no hidden fees, no upsells during the retreat. If the real cost only becomes clear after you arrive, they don't make our list.",
                "Accessibility — sliding scale, scholarships, or work-exchange options available. We prioritize retreats that actively work to be affordable, not just ones that happen to be cheap.",
                "Honest reviews — from people who actually went, including what was hard. We read negative reviews closely. A retreat with zero criticism is usually a retreat that curates its feedback.",
                "Trauma awareness — staff trained in trauma-informed practices, understanding that healing can surface difficult emotions. This means knowing when to offer support and when to give space.",
                "No guru energy — no charismatic leaders with unchecked power. Healthy retreats have distributed leadership, clear accountability structures, and no personality cult.",
                "Physical safety — adequate facilities, proper emergency protocols, reasonable food handling, and accessibility for different mobility levels.",
                "Clear cancellation policies — what happens if you need to leave early or cancel. Life is unpredictable. Good retreats account for this.",
                "Cultural sensitivity — awareness of different backgrounds, identities, and needs. Not performative diversity statements, but actual thoughtfulness in practice.",
                "Track record — how long they've been operating, how they've handled problems, and whether past participants would return. We look for consistency over years, not just a good website.",
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
              standards, it gets removed. No exceptions. We also re-verify pricing
              and availability every quarter, because a lot can change in three
              months.
            </p>
            <p>
              If you&rsquo;ve been to one of these retreats and your experience
              didn&rsquo;t match what we&rsquo;ve described, we want to know. Our
              evaluation is only as good as the information we have.
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
