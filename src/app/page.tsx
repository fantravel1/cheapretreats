import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CheapRetreats — Affordable Healing Retreats for Real People",
  description:
    "Healing should not be a luxury good. Discover affordable, safe, verified retreats organized by what you actually need — burnout recovery, grief, quiet rest, and more. From $200.",
  alternates: { canonical: "https://cheapretreats.com" },
};

const needs = [
  {
    slug: "burnout",
    title: "Burnout Recovery",
    description: "When you've given everything and have nothing left. Rest that actually restores.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20" className="stroke-rose-300" />
        <path d="M16 28c0-4 3.5-6 8-6s8 2 8 6" className="stroke-rose-400" />
        <path d="M18 20v-2M30 20v-2" className="stroke-rose-400" />
      </svg>
    ),
    color: "bg-rose-50 hover:bg-rose-100/70 border-rose-200/60",
    textColor: "text-rose-800",
  },
  {
    slug: "grief",
    title: "Grief Retreats",
    description: "Space to feel what you feel. No timelines. No fixing. Just witness.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 42s-16-9.5-16-21C8 13 14 8 24 16c10-8 16-3 16 5 0 11.5-16 21-16 21z" className="stroke-sky-400" />
      </svg>
    ),
    color: "bg-sky-50 hover:bg-sky-100/70 border-sky-200/60",
    textColor: "text-sky-800",
  },
  {
    slug: "depression",
    title: "Depression Recovery",
    description: "Gentle spaces for when everything feels heavy. No pressure to perform.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 36c2-8 6-14 12-14s10 6 12 14" className="stroke-sage-400" />
        <circle cx="24" cy="14" r="6" className="stroke-sage-400" />
      </svg>
    ),
    color: "bg-sage-50 hover:bg-sage-100/70 border-sage-200/60",
    textColor: "text-sage-800",
  },
  {
    slug: "trauma-sensitive",
    title: "Trauma-Sensitive",
    description: "Trained facilitators. Consent-based. Opt-out always available.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8" className="stroke-warm-400" />
        <circle cx="24" cy="24" r="10" className="stroke-warm-500" />
      </svg>
    ),
    color: "bg-warm-50 hover:bg-warm-100/70 border-warm-200/60",
    textColor: "text-warm-800",
  },
  {
    slug: "quiet",
    title: "Quiet Retreats",
    description: "No talking required. Sometimes silence is the loudest healing.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="12" width="32" height="24" rx="4" className="stroke-sage-400" />
        <path d="M16 24h16M16 30h8" className="stroke-sage-300" />
      </svg>
    ),
    color: "bg-sage-50 hover:bg-sage-100/70 border-sage-200/60",
    textColor: "text-sage-800",
  },
  {
    slug: "loneliness",
    title: "Loneliness",
    description: "Connection without performance. Be around people without having to be 'on.'",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="20" r="6" className="stroke-sky-400" />
        <circle cx="30" cy="20" r="6" className="stroke-sky-300" />
        <path d="M10 38c2-6 5-10 8-10h12c3 0 6 4 8 10" className="stroke-sky-400" />
      </svg>
    ),
    color: "bg-sky-50 hover:bg-sky-100/70 border-sky-200/60",
    textColor: "text-sky-800",
  },
  {
    slug: "caregivers",
    title: "Caregiver Recovery",
    description: "For those who carry everyone else. It's your turn now.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16c-4 0-8 4-8 8s4 8 8 8" className="stroke-clay-400" />
        <path d="M28 16c4 0 8 4 8 8s-4 8-8 8" className="stroke-clay-400" />
        <path d="M20 24h8" className="stroke-clay-500" />
      </svg>
    ),
    color: "bg-clay-50 hover:bg-clay-100/70 border-clay-200/60",
    textColor: "text-clay-800",
  },
  {
    slug: "stop",
    title: "I Just Need to Stop",
    description: "No agenda. No program. Just stop. That's enough.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" className="stroke-warm-400" />
        <path d="M24 16v8l5 5" className="stroke-warm-500" />
      </svg>
    ),
    color: "bg-warm-50 hover:bg-warm-100/70 border-warm-200/60",
    textColor: "text-warm-800",
  },
];

const priceLadders = [
  { price: "Under $500", href: "/under-500", description: "Weekend resets, silent stays, donation-based retreats", count: "120+" },
  { price: "Under $750", href: "/under-750", description: "3-5 night retreats with meals, nature immersion, workshops", count: "200+" },
  { price: "Under $1,000", href: "/under-1000", description: "Full-week programs, comprehensive healing, remote locations", count: "350+" },
];

const trustFeatures = [
  { title: "Safety Scored", description: "Every retreat rated on consent culture, facilitator training, trauma awareness, and accessibility." },
  { title: "No Guru Energy", description: "We ban pseudo-guru cult vibes, manipulative upsells, and 'transform in 3 days' lies." },
  { title: "Real Reviews", description: "Reviews that include what was hard, who it's not for, and what surprised people." },
  { title: "Price Transparent", description: "Total cost upfront — nights, food, travel realism. No surprise pricing ever." },
];

const communitySpaces = [
  "Monasteries", "Convents", "Ashrams", "Rural Co-ops",
  "Nonprofit Retreat Houses", "Worker-Owned Spaces", "Indigenous Centers", "Silent Guesthouses",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sage-100/40 via-warm-50 to-warm-50" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a5640' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium mb-8 border border-sage-200/60">
              <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
              500+ verified retreats from $200
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-sage-900 mb-6 leading-[1.1] tracking-tight">
              You deserve rest
              <span className="block text-sage-500 mt-2 italic font-normal text-[0.85em]">
                even if you&rsquo;re broke.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-sage-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Healing should not be a luxury good. We find affordable, honest,
              verified retreats — organized by what you actually need, not what
              sounds marketable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start-here"
                className="inline-flex items-center justify-center px-8 py-4 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-all shadow-lg shadow-sage-600/20 hover:shadow-xl hover:shadow-sage-600/30 text-base"
              >
                Find Your Retreat
                <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href="/the-1000-reset"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200 text-base"
              >
                The $1,000 Reset
              </Link>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-sage-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-sage-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.4 3.1 15l.9-5.3-4-3.9L5.5 5z" /></svg>
              Verified Safe & Real
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-sage-400" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.3 5.7a.75.75 0 00-1.1-1l-3 3.2-1.4-1.4a.75.75 0 00-1.1 1l2 2a.75.75 0 001.1 0l3.5-3.8z" /></svg>
              No Guru Energy
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-sage-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM7.25 5a.75.75 0 011.5 0v3.25H11a.75.75 0 010 1.5H7.25V5z" /></svg>
              From $200/retreat
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-sage-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12.5c-3 0-5.5-2.5-5.5-5.5S5 2.5 8 2.5s5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5z" /><path d="M10.5 7.5L7 11l-1.5-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
              Honest Reviews Only
            </span>
          </div>
        </div>
      </section>

      {/* Need-Based Browsing Section */}
      <section className="py-20 md:py-28 bg-white" id="needs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
              What do you need right now?
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed">
              We don&rsquo;t organize by modality. We organize by what&rsquo;s
              actually going on. Because &ldquo;yoga retreat&rdquo; doesn&rsquo;t
              describe what hurts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {needs.map((need) => (
              <Link
                key={need.slug}
                href={`/needs/${need.slug}`}
                className={`group block p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${need.color}`}
              >
                <div className="mb-4">{need.icon}</div>
                <h3 className={`font-serif text-lg font-semibold mb-2 ${need.textColor}`}>
                  {need.title}
                </h3>
                <p className="text-sm text-sage-600 leading-relaxed">
                  {need.description}
                </p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-sage-500 group-hover:text-sage-700 transition-colors">
                  Browse retreats
                  <svg className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Price Ladder Section */}
      <section className="py-20 md:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
              Radical price transparency
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed">
              No bait-and-switch. No surprise fees. You see the total cost — nights,
              food, everything — before you even click.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {priceLadders.map((ladder) => (
              <Link
                key={ladder.href}
                href={ladder.href}
                className="group block bg-white rounded-2xl p-8 border border-warm-200/60 hover:border-sage-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-sm font-medium text-sage-500 mb-1">{ladder.count} retreats</div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold text-sage-800 mb-3">
                  {ladder.price}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed mb-6">
                  {ladder.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-sage-500 group-hover:text-sage-700 transition-colors">
                  Browse options
                  <svg className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* $1000 Reset Feature */}
          <div className="mt-12 max-w-5xl mx-auto">
            <Link
              href="/the-1000-reset"
              className="group block bg-gradient-to-br from-sage-700 via-sage-800 to-sage-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm text-sage-200 mb-4">
                  Signature Guide
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-semibold mb-3">
                  The $1,000 Reset
                </h3>
                <p className="text-sage-200 text-base md:text-lg max-w-xl leading-relaxed mb-6">
                  If you had $1,000 and needed to reset your nervous system —
                  here are your best options. Curated. Verified. Honest.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-sage-300 group-hover:text-white transition-colors">
                  Read the guide
                  <svg className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / No Bullshit Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium mb-6">
              The No Bullshit Healing Index&trade;
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
              Every retreat scored on what actually matters
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed">
              Not vibes. Not aesthetics. Real safety metrics that protect vulnerable
              people seeking healing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trustFeatures.map((feature, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-sage-50/60 border border-sage-100"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-200/60 flex items-center justify-center mt-0.5">
                  <svg className="w-5 h-5 text-sage-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-sage-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/verified"
              className="inline-flex items-center px-6 py-3 bg-sage-100 text-sage-700 font-medium rounded-full hover:bg-sage-200 transition-colors text-sm"
            >
              Learn about our verification process
              <svg className="ml-1.5 w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Community-Run Section */}
      <section className="py-20 md:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
                The spaces that actually heal
              </h2>
              <p className="text-sage-600 text-lg leading-relaxed mb-6">
                The most powerful healing often happens in the least marketed
                places. We highlight community-run, nonprofit, and
                worker-owned spaces that put people before profit.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {communitySpaces.map((space) => (
                  <span
                    key={space}
                    className="px-3 py-1.5 bg-warm-100 text-warm-700 text-sm rounded-full border border-warm-200/60"
                  >
                    {space}
                  </span>
                ))}
              </div>
              <Link
                href="/community-run"
                className="inline-flex items-center px-6 py-3 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors text-sm"
              >
                Browse community-run retreats
                <svg className="ml-1.5 w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </Link>
            </div>

            {/* Decorative visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sage-100 via-warm-100 to-clay-100 border border-warm-200/60 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-sage-200/60 mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-10 h-10 text-sage-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 40V20l18-14 18 14v20H30v-12h-12v12H6z" />
                      </svg>
                    </div>
                    <p className="font-serif text-xl text-sage-700 italic leading-relaxed">
                      &ldquo;These places have been healing people for centuries. <br className="hidden md:block" />
                      They just don&rsquo;t have a marketing budget.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First-Time Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-sky-50 to-warm-50 rounded-3xl p-8 md:p-14 border border-sky-100/60">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/70 text-sky-700 rounded-full text-sm font-medium mb-6">
                  For first-timers
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
                  Never been on a retreat?
                </h2>
                <p className="text-sage-600 text-lg leading-relaxed mb-4">
                  That&rsquo;s okay. Most people haven&rsquo;t. And the idea can be
                  genuinely scary.
                </p>
                <p className="text-sage-600 leading-relaxed mb-8">
                  We built a guide that covers what to expect, what won&rsquo;t
                  happen, your boundaries, how to leave early if you need to, and
                  how to know if you&rsquo;re ready (spoiler: you don&rsquo;t need
                  to be).
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/first-time"
                    className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white font-medium rounded-full hover:bg-sky-700 transition-colors text-sm"
                  >
                    Read the First-Time Guide
                    <svg className="ml-1.5 w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 7h10M8 3l4 4-4 4" />
                    </svg>
                  </Link>
                  <Link
                    href="/start-here"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200 text-sm"
                  >
                    Start Here Instead
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Cult Wellness / Imperfect Healing */}
      <section className="py-20 md:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-sage-900 mb-8 leading-tight">
              You don&rsquo;t need to be ready.
            </h2>
            <div className="space-y-6 text-sage-600 text-lg md:text-xl leading-relaxed">
              <p>You don&rsquo;t need to believe anything.</p>
              <p>You don&rsquo;t need to &ldquo;open your heart&rdquo; on schedule.</p>
              <p>You don&rsquo;t need a linen wardrobe or a gratitude practice.</p>
              <p className="text-sage-500 text-base italic pt-2">
                You just need a safe place to land for a few days.
              </p>
            </div>
            <div className="mt-12">
              <Link
                href="/manifesto"
                className="inline-flex items-center px-8 py-4 bg-sage-800 text-white font-medium rounded-full hover:bg-sage-900 transition-colors"
              >
                Read Our Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility / Financial Aid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
              Can&rsquo;t afford a retreat?
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed">
              We&rsquo;re a bridge, not a gatekeeper. Many retreats offer ways to
              attend for less — or free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { title: "Sliding Scale", description: "Pay what you can. Many retreats adjust pricing based on your situation.", href: "/under-500" },
              { title: "Scholarships", description: "Full or partial funding from retreat centers and community sponsors.", href: "/scholarships" },
              { title: "Work Exchange", description: "Help with meals, cleaning, or gardening in exchange for your stay.", href: "/work-exchange" },
              { title: "Donation-Based", description: "Pay what feels right. No minimum. No judgment.", href: "/under-500" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group block p-6 bg-sage-50/50 rounded-2xl border border-sage-100 hover:border-sage-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-sage-600 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-sage-50 to-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-sage-900 mb-6 leading-tight">
              Healing should not be <br className="hidden sm:block" />a luxury good.
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed mb-10">
              You don&rsquo;t need $5,000 and a linen wardrobe to rest. You just need
              to know where to go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start-here"
                className="inline-flex items-center justify-center px-8 py-4 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-all shadow-lg shadow-sage-600/20 text-base"
              >
                Find Your Retreat
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200 text-base"
              >
                Common Questions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is CheapRetreats?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CheapRetreats is a global retreat discovery platform that helps people find affordable, safe, verified healing retreats organized by human need — like burnout recovery, grief, quiet rest, and more — rather than by modality. Retreats start from $200.",
                },
              },
              {
                "@type": "Question",
                name: "Are cheap retreats safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every retreat on CheapRetreats is scored using our No Bullshit Healing Index, which rates safety, consent culture, facilitator training, trauma awareness, accessibility, and refund policies. We verify retreats so you don't have to worry.",
                },
              },
              {
                "@type": "Question",
                name: "How much does an affordable retreat cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Retreats on CheapRetreats range from $200 to under $1,000 for the total stay including accommodation and often meals. We also list donation-based, sliding-scale, work-exchange, and scholarship-funded retreats for those who need additional financial support.",
                },
              },
              {
                "@type": "Question",
                name: "What types of retreats does CheapRetreats offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CheapRetreats organizes retreats by human need: burnout recovery, grief retreats, depression recovery, trauma-sensitive retreats, quiet retreats (no talking required), loneliness retreats, caregiver recovery, and 'I just need to stop' retreats. We also feature monasteries, ashrams, rural co-ops, and other community-run healing spaces.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
