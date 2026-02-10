import type { Metadata } from "next";
import Link from "next/link";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Start Here — Find Your Affordable Healing Retreat",
  description:
    "Not sure where to begin? Start here. We'll help you find the right affordable retreat based on what you need, what you can spend, and how you want to feel.",
  alternates: { canonical: "https://cheapretreats.com/start-here" },
};

const needs = [
  { slug: "burnout", title: "I'm burned out", desc: "You've given everything and have nothing left. You need rest that actually restores." },
  { slug: "grief", title: "I'm grieving", desc: "You need space to feel what you feel. No timelines. No fixing." },
  { slug: "depression", title: "I'm depressed", desc: "Everything feels heavy. You need gentle spaces with no pressure to perform." },
  { slug: "trauma-sensitive", title: "I need trauma-sensitive care", desc: "Trained facilitators, consent-based programs, opt-out always available." },
  { slug: "quiet", title: "I need quiet", desc: "No talking required. Sometimes silence is the loudest healing." },
  { slug: "loneliness", title: "I'm lonely", desc: "You need connection without performance. People, without having to be 'on.'" },
  { slug: "caregivers", title: "I'm a caregiver who needs a break", desc: "You carry everyone else. It's your turn now." },
  { slug: "stop", title: "I just need to stop", desc: "No agenda. No program. Just stop moving for a few days. That's enough." },
];

const budgets = [
  {
    price: "Under $500",
    href: "/under-500",
    desc: "Weekend resets, silent stays, donation-based retreats",
    details: "Typically 2-3 nights. Shared rooms, simple meals, minimal programming. Think monastery guesthouses, rural meditation centers, and community-run spaces. Often includes meals. Best for: a quick reset when you need to step away but can't take a full week.",
  },
  {
    price: "Under $750",
    href: "/under-750",
    desc: "3-5 night retreats with meals and nature immersion",
    details: "Mid-length stays with more structure. Usually includes all meals, a private or semi-private room, and access to facilitated sessions (yoga, meditation, group walks). Often in nature settings — forest, coast, mountains. Best for: when you need enough time to actually decompress, not just catch your breath.",
  },
  {
    price: "Under $1,000",
    href: "/under-1000",
    desc: "Full-week programs with comprehensive support",
    details: "5-7 nights with dedicated programming. Expect private rooms, full meal plans, daily facilitated sessions, and often one-on-one time with a practitioner. These retreats tend to focus on specific needs — grief, trauma recovery, burnout — with trained staff. Best for: when you need real, sustained support and enough time for something to shift.",
  },
  {
    price: "I can't afford any of these",
    href: "/scholarships",
    desc: "Scholarships, work exchange, sliding scale, donation-based",
    details: "Many retreats offer sliding-scale pricing, work-exchange programs (4-5 hours of help per day in exchange for free stay), full scholarships, or donation-based models where you pay what you can. We list all of these. Money should not be the thing that stops you.",
  },
];

const selfAssessment = [
  {
    question: "Are you exhausted from giving too much?",
    subtext: "You take care of everyone else. You can't remember the last time someone took care of you.",
    link: "/needs/burnout",
    label: "Burnout retreats",
  },
  {
    question: "Are you carrying a loss you haven't processed?",
    subtext: "A death, a relationship, a version of your life that's over. It sits in your chest and you don't know what to do with it.",
    link: "/needs/grief",
    label: "Grief retreats",
  },
  {
    question: "Does everything feel flat or heavy?",
    subtext: "Not dramatic sadness. Just a weight. A grayness. Getting through the day takes everything you have.",
    link: "/needs/depression",
    label: "Depression-friendly retreats",
  },
  {
    question: "Do you flinch at loud noises, crowds, or being touched?",
    subtext: "Your nervous system is on high alert. You need somewhere that understands that and won't push you.",
    link: "/needs/trauma-sensitive",
    label: "Trauma-sensitive retreats",
  },
  {
    question: "Do you just want everyone to stop talking?",
    subtext: "Not in a mean way. You're just overstimulated. You need silence like you need water.",
    link: "/needs/quiet",
    label: "Silent retreats",
  },
  {
    question: "Are you lonely in a way that socializing doesn't fix?",
    subtext: "You can be in a room full of people and still feel alone. You need a different kind of connection.",
    link: "/needs/loneliness",
    label: "Connection retreats",
  },
];

const popularCombinations = [
  {
    need: "Burnout",
    budget: "Under $500",
    result: "Weekend digital detox",
    desc: "2-3 nights, no WiFi, nature immersion. Hand in your phone and breathe.",
    link: "/under-500",
  },
  {
    need: "Grief",
    budget: "Under $750",
    result: "5-night grief circle",
    desc: "Small-group facilitated grief work. Shared meals, quiet mornings, held space.",
    link: "/needs/grief",
  },
  {
    need: "Caregiver burnout",
    budget: "Under $500",
    result: "Solo silent stay",
    desc: "A private room in a monastery or guesthouse. No one needs anything from you.",
    link: "/needs/caregivers",
  },
  {
    need: "Depression",
    budget: "Under $1,000",
    result: "Week-long gentle program",
    desc: "Daily yoga, nature walks, optional counseling. No pressure to be cheerful.",
    link: "/needs/depression",
  },
  {
    need: "Loneliness",
    budget: "Under $750",
    result: "Community retreat",
    desc: "Shared meals, group walks, fireside evenings. Low-pressure togetherness.",
    link: "/needs/loneliness",
  },
  {
    need: "Just need to stop",
    budget: "Scholarship",
    result: "Work-exchange farm stay",
    desc: "Help with chores 4 hours a day, rest the rest. Free bed, free meals, free time.",
    link: "/scholarships",
  },
];

export default function StartHerePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <img src={heroImages.startHere} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50/95 via-warm-50/80 to-warm-50/60" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Start here.
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            You don&rsquo;t need to know what kind of retreat you want. You just
            need to know what hurts.
          </p>
        </div>
      </section>

      {/* Not sure what you need? Self-Assessment */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-3">
              Not sure what you need?
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed max-w-2xl">
              Read through these questions. You don&rsquo;t have to answer them
              out loud or write anything down. Just notice which one makes your
              chest tighten, or your eyes sting, or your breath catch. That&rsquo;s
              your starting point.
            </p>
          </div>

          <div className="space-y-4">
            {selfAssessment.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="group block p-6 rounded-2xl bg-white border border-warm-200/60 hover:border-sage-300 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2 group-hover:text-sage-900">
                  {item.question}
                </h3>
                <p className="text-sm text-sage-500 leading-relaxed mb-3">
                  {item.subtext}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-sage-500 group-hover:text-sage-700 transition-colors">
                  {item.label}
                  <svg className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Step 1: What do you need? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium mb-4">
              Step 1
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-3">
              What do you need right now?
            </h2>
            <p className="text-sage-600 text-lg">
              Pick the one that resonates most. There are no wrong answers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {needs.map((need) => (
              <Link
                key={need.slug}
                href={`/needs/${need.slug}`}
                className="group block p-6 rounded-2xl bg-warm-50 border border-warm-200/60 hover:border-sage-300 hover:bg-sage-50/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2 group-hover:text-sage-900">
                  {need.title}
                </h3>
                <p className="text-sm text-sage-600 leading-relaxed">
                  {need.desc}
                </p>
                <span className="inline-flex items-center mt-3 text-sm font-medium text-sage-500 group-hover:text-sage-700 transition-colors">
                  See retreats
                  <svg className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Step 2: Budget */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 text-warm-700 rounded-full text-sm font-medium mb-4">
              Step 2
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-3">
              What can you spend?
            </h2>
            <p className="text-sage-600 text-lg">
              Total cost. Nights included. Food included. No surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {budgets.map((budget) => (
              <Link
                key={budget.href}
                href={budget.href}
                className="group block p-6 rounded-2xl bg-white border border-warm-200/60 hover:border-sage-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <h3 className="font-display text-2xl font-semibold text-sage-800 mb-2">
                  {budget.price}
                </h3>
                <p className="text-sm text-sage-600 leading-relaxed font-medium mb-2">
                  {budget.desc}
                </p>
                <p className="text-xs text-sage-500 leading-relaxed">
                  {budget.details}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Step 3: Preferences */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/70 text-sky-700 rounded-full text-sm font-medium mb-4">
              Step 3
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-3">
              Any preferences?
            </h2>
            <p className="text-sage-600 text-lg">
              These help us match you better. All optional.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "Secular", "Spiritual-optional", "Religious", "Trauma-informed",
              "Neurodivergent-friendly", "LGBTQ+ welcoming", "Solo-friendly", "Women-only",
              "Community-run", "Nature-based", "Near water", "Mountain setting",
              "Silent option", "No group sharing", "Meals included", "Private room available",
              "Pet-friendly", "Accessible rooms", "Near airport", "Child-friendly",
              "Couples welcome", "Vegan meals", "No alcohol", "Winter-friendly",
            ].map((tag) => (
              <div
                key={tag}
                className="px-4 py-3 bg-sage-50/50 text-sage-700 text-sm rounded-xl border border-sage-100 text-center hover:bg-sage-100/60 transition-colors cursor-default"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Combinations */}
      <section className="py-16 md:py-24 bg-sage-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-3">
              Popular combinations
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed max-w-2xl">
              Not sure how to put it all together? Here are some of the most
              common need-plus-budget pairings that people search for, and what
              they typically look like in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularCombinations.map((combo) => (
              <Link
                key={combo.result}
                href={combo.link}
                className="group block p-6 rounded-2xl bg-white border border-warm-200/60 hover:border-sage-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-sage-100/70 text-sage-700 text-xs font-medium rounded-full">
                    {combo.need}
                  </span>
                  <span className="text-sage-300 text-xs">+</span>
                  <span className="px-2.5 py-1 bg-warm-100 text-warm-700 text-xs font-medium rounded-full">
                    {combo.budget}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2 group-hover:text-sage-900">
                  {combo.result}
                </h3>
                <p className="text-sm text-sage-600 leading-relaxed">
                  {combo.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-3">
              What makes us different
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed max-w-2xl">
              There are other retreat directories. Here is why we built another one.
            </p>
          </div>

          <div className="space-y-1">
            {[
              {
                them: "Most retreat sites organize by activity (yoga, meditation, ayahuasca).",
                us: "We organize by what you're going through. Because you shouldn't need to know the solution before you've named the problem.",
              },
              {
                them: "Most retreat sites show you the most expensive options first.",
                us: "We cap every listing at $1,000 and prominently feature free, donation-based, and scholarship options.",
              },
              {
                them: "Most retreat sites let anyone list anything with no vetting.",
                us: "We have hard bans. No cult dynamics, no unqualified trauma work, no luxury shame, no financial predation. We investigate complaints and remove listings.",
              },
              {
                them: "Most retreat sites use aspirational marketing — 'transform your life in 5 days.'",
                us: "We tell you what the retreat actually is, what it costs, and what to expect. No promises we can't back up.",
              },
              {
                them: "Most retreat sites treat affordability as a filter you can toggle.",
                us: "Affordability is our entire reason for existing. Every retreat on this site is under $1,000 all-in, or free.",
              },
            ].map((point, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
                <div className="p-5 bg-rose-50/40 border border-rose-100/40 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                  <div className="text-xs font-medium text-rose-400 uppercase tracking-wide mb-2">Typical retreat sites</div>
                  <p className="text-sm text-sage-600 leading-relaxed">{point.them}</p>
                </div>
                <div className="p-5 bg-sage-50/60 border border-sage-100/60 rounded-b-xl md:rounded-r-xl md:rounded-bl-none mb-4 md:mb-0">
                  <div className="text-xs font-medium text-sage-500 uppercase tracking-wide mb-2">CheapRetreats</div>
                  <p className="text-sm text-sage-700 leading-relaxed">{point.us}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure? */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Still not sure?
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            That&rsquo;s completely normal. If you&rsquo;ve never been on a retreat
            before, we have a guide that covers everything &mdash; what to expect,
            what to bring, and how to know if you&rsquo;re ready (hint: you
            don&rsquo;t need to be ready).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/first-time"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sky-600 text-white font-medium rounded-full hover:bg-sky-700 transition-colors"
            >
              First-Time Guide
            </Link>
            <Link
              href="/the-1000-reset"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              The $1,000 Reset
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Find Your Affordable Healing Retreat",
            description: "A step-by-step guide to finding the right affordable retreat based on your needs and budget.",
            step: [
              { "@type": "HowToStep", name: "Identify your need", text: "Choose what you need most: burnout recovery, grief space, quiet time, depression support, or simply stopping." },
              { "@type": "HowToStep", name: "Set your budget", text: "Pick a price range: under $500, under $750, under $1,000, or explore scholarships and work-exchange options." },
              { "@type": "HowToStep", name: "Set preferences", text: "Optionally filter by spiritual orientation, accessibility, location type, and amenities." },
              { "@type": "HowToStep", name: "Explore combinations", text: "Browse popular need-plus-budget pairings to see what retreat types match your situation." },
            ],
          }),
        }}
      />
    </>
  );
}
