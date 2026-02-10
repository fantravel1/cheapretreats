import type { Metadata } from "next";
import Link from "next/link";

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
  { price: "Under $500", href: "/under-500", desc: "Weekend resets, silent stays, donation-based retreats" },
  { price: "Under $750", href: "/under-750", desc: "3-5 night retreats with meals and nature immersion" },
  { price: "Under $1,000", href: "/under-1000", desc: "Full-week programs with comprehensive support" },
  { price: "I can't afford any of these", href: "/scholarships", desc: "Scholarships, work exchange, sliding scale, donation-based" },
];

export default function StartHerePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-100/40 to-warm-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Start here.
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            You don&rsquo;t need to know what kind of retreat you want. You just
            need to know what hurts.
          </p>
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
                <p className="text-sm text-sage-600 leading-relaxed">
                  {budget.desc}
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

      {/* Not sure? */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Still not sure?
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            That&rsquo;s completely normal. If you&rsquo;ve never been on a retreat
            before, we have a guide that covers everything — what to expect, what to
            bring, and how to know if you&rsquo;re ready.
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
            ],
          }),
        }}
      />
    </>
  );
}
