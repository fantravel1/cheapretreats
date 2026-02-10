import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose the Right Retreat — A Decision Framework",
  description:
    "A practical framework for choosing the right healing retreat. Assess your needs, set your budget, decide on duration and structure, solo vs. group, and avoid common mistakes.",
  alternates: { canonical: "https://cheapretreats.com/guides/how-to-choose" },
};

const needAssessment = [
  {
    question: "What am I running from?",
    explanation:
      "Be honest. Are you exhausted? Grieving? Lonely? Burned out? Overwhelmed? The answer does not need to be clean or singular. Most people have several things layered on top of each other. But naming the dominant one helps narrow your search. A grief retreat and a burnout retreat serve different needs, even if both involve rest.",
    links: [
      { href: "/needs/burnout", label: "Burnout retreats" },
      { href: "/needs/grief", label: "Grief retreats" },
      { href: "/needs/depression", label: "Depression-friendly retreats" },
      { href: "/needs/quiet", label: "Silent retreats" },
    ],
  },
  {
    question: "What would help me most right now: rest, structure, or connection?",
    explanation:
      "Some people need to stop completely -- no schedule, no expectations, just silence and sleep. Others need structure to hold them because they cannot hold themselves right now. And some need to be around other humans who understand, without having to explain themselves. These three needs point toward very different retreats.",
    links: [
      { href: "/needs/stop", label: "Just need to stop" },
      { href: "/needs/caregivers", label: "Caregiver retreats" },
      { href: "/needs/loneliness", label: "Connection retreats" },
    ],
  },
  {
    question: "Is there something specific I need to process?",
    explanation:
      "If you are carrying a specific loss, trauma, or transition, a themed retreat with trained facilitators may serve you better than a general wellness retreat. If you just need to breathe and do not want to process anything at all, that is equally valid. Not every retreat needs to be therapeutic work. Sometimes rest is the therapy.",
    links: [
      { href: "/needs/trauma-sensitive", label: "Trauma-sensitive retreats" },
    ],
  },
];

const budgetTiers = [
  {
    range: "Under $500",
    duration: "2-3 nights",
    includes:
      "Shared rooms, simple meals, minimal or no programming. Monastery guesthouses, rural meditation centers, donation-based spaces.",
    bestFor:
      "A weekend reset when you need to step away but cannot take a full week. Quick decompression. Testing whether retreat life is for you.",
    href: "/under-500",
  },
  {
    range: "Under $750",
    duration: "3-5 nights",
    includes:
      "Semi-private or private rooms, all meals, some facilitated sessions. Nature settings, small retreat centers.",
    bestFor:
      "When you need enough time to actually decompress, not just catch your breath. Mid-length stays with more support.",
    href: "/under-750",
  },
  {
    range: "Under $1,000",
    duration: "5-7 nights",
    includes:
      "Private rooms, full meal plans, daily facilitated sessions, often one-on-one time with practitioners. Dedicated programming.",
    bestFor:
      "When you need real, sustained support and enough time for something to shift. Specific therapeutic focus.",
    href: "/under-1000",
  },
  {
    range: "Free or nearly free",
    duration: "Varies",
    includes:
      "Work exchange (4-5 hours daily work for free stay), donation-based (pay what you can), scholarships, sliding scale.",
    bestFor:
      "When money is the barrier but the need is real. These options exist and are not charity -- they are community.",
    href: "/scholarships",
  },
];

const durationFactors = [
  {
    length: "2-3 nights (weekend)",
    pros: "Less time off work. Lower cost. Good for a first experience. Less intimidating commitment.",
    cons: "You may just be starting to settle when it is time to leave. The first day is usually adjustment. That leaves one real day of retreat.",
    verdict:
      "Best for: people who cannot take a full week, first-timers testing the waters, or those who need a quick reset rather than deep work.",
  },
  {
    length: "4-5 nights (mid-week)",
    pros: "Enough time to actually decompress. Day 3 is often when the shift happens. You get that shift plus a day or two to integrate.",
    cons: "More time off work. Slightly higher cost. Can feel long if you are restless by nature.",
    verdict:
      "Best for: most people, most of the time. This is the sweet spot between meaningful experience and practical constraints.",
  },
  {
    length: "6-7 nights (full week)",
    pros: "Deep immersion. Enough time for sustained work on specific issues. Room for bad days without losing the entire experience.",
    cons: "Significant time commitment. Higher cost. Can feel isolating toward the end. Re-entry is harder after a full week.",
    verdict:
      "Best for: people working through something specific (grief, trauma, major life transition), experienced retreat-goers who know they need sustained time.",
  },
  {
    length: "10+ nights (extended)",
    pros: "The deepest experience. True nervous system reset. Time for multiple cycles of resistance and breakthrough.",
    cons: "Major life disruption. Not practical for many people. Can become escapism if used as avoidance. Re-entry is significantly harder.",
    verdict:
      "Best for: experienced practitioners, people in life transitions, long-term burnout recovery. Not recommended for first-timers.",
  },
];

const structureVsUnstructured = [
  {
    type: "Structured retreats",
    description:
      "Daily schedule of activities: meditation, yoga, group sessions, workshops, meals at set times. Someone else decides what happens and when.",
    goodFor:
      "People who feel paralyzed by open time. Those who are not sure what they need and want guidance. Anyone who might spend unstructured time worrying or ruminating. First-timers who want to feel held.",
    watchFor:
      "Over-scheduled retreats that do not leave enough rest time. Programs that feel more like summer camp than healing. Make sure there are genuine rest periods, not just activity after activity.",
  },
  {
    type: "Unstructured retreats",
    description:
      "Minimal schedule. Maybe communal meals and one optional session per day, otherwise your time is your own. You decide how to spend it.",
    goodFor:
      "People who are exhausted by demands on their time. Introverts who need to set their own pace. Anyone who knows what they need and wants space to do it. Experienced retreat-goers.",
    watchFor:
      "The first day or two can feel aimless or even uncomfortable. If you struggle with unstructured time in general, this format may amplify anxiety rather than relieve it.",
  },
  {
    type: "Semi-structured",
    description:
      "A few anchoring activities (morning meditation, communal meals, one afternoon session) with large blocks of free time between them.",
    goodFor:
      "Most people. This format provides enough rhythm to feel held without enough rigidity to feel constrained. The anchoring activities create a sense of community without demanding constant participation.",
    watchFor:
      "Make sure the optional activities are genuinely optional. If there is social pressure to attend everything, it is structured in disguise.",
  },
];

const soloVsGroup = [
  {
    type: "Going alone",
    benefits: [
      "You are fully present to your own experience without filtering it through someone else's reactions.",
      "You cannot default to familiar social dynamics -- this is where the real growth often happens.",
      "You can be completely selfish with your time and energy.",
      "Most retreat-goers go alone. You will not be the only solo person there.",
    ],
    considerations:
      "If going alone makes you anxious, that anxiety is worth sitting with. It often points to exactly the thing the retreat will help you address. But if it feels genuinely unsafe (not just uncomfortable), bring someone.",
  },
  {
    type: "Going with a partner or friend",
    benefits: [
      "Less anxiety about the unknown -- you have a built-in safety net.",
      "Shared experience can deepen your relationship.",
      "Practical logistics (travel, cost sharing) are easier.",
      "Having someone to debrief with afterward can aid integration.",
    ],
    considerations:
      "You will likely spend much of the retreat gravitating toward each other, which can limit your individual experience. Some retreats intentionally separate people who arrive together. If you go with someone, consider agreeing in advance to spend significant time apart during the retreat.",
  },
];

const commonMistakes = [
  {
    mistake: "Choosing based on aesthetics",
    reality:
      "The most Instagram-worthy retreat is rarely the most healing one. Beautiful grounds are nice, but facilitator quality, safety practices, and program design matter far more than the view from your window.",
  },
  {
    mistake: "Choosing the cheapest option without considering fit",
    reality:
      "Affordable is important -- it is literally why this site exists. But the cheapest retreat that does not match your need is not a good deal. A $400 retreat that addresses your specific situation is worth more than a $200 one that does not.",
  },
  {
    mistake: "Waiting until you feel ready",
    reality:
      "Readiness is not a feeling. It is a decision. If you wait until you feel ready, you will wait forever. The nervous resistance you feel is normal and does not mean the timing is wrong.",
  },
  {
    mistake: "Expecting a specific outcome",
    reality:
      "Going in with 'I want to have a breakthrough' or 'I want to cry and release everything' sets you up for disappointment. The most powerful experiences at retreats are usually the ones you did not plan for.",
  },
  {
    mistake: "Not reading the cancellation policy",
    reality:
      "Life happens. Illness, family emergencies, cold feet. Know what you are agreeing to financially before you book. Some centers are flexible; others are not. Check before you pay.",
  },
  {
    mistake: "Ignoring your gut feeling about a place",
    reality:
      "If something feels off during your research -- pushy sales tactics, vague answers to direct questions, no clear refund policy, grandiose promises -- trust that feeling. There are enough good retreats that you do not need to settle for one that raises flags.",
  },
];

export default function HowToChoosePage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-warm-50 border-b border-warm-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-sage-500">
            <Link href="/" className="hover:text-sage-700 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/guides"
              className="hover:text-sage-700 transition-colors"
            >
              Guides
            </Link>
            <span>/</span>
            <span className="text-sage-800 font-medium">How to Choose</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-100/40 to-warm-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium mb-8">
            Decision Framework
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            How to Choose the<br className="hidden sm:block" /> Right Retreat
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            There is no perfect retreat. But there is a right one for where you
            are right now. This framework helps you find it without overthinking.
          </p>
        </div>
      </section>

      {/* Step 1: Need Assessment */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium mb-6">
            Step 1
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Name what you need
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Before you look at a single retreat listing, sit with these
            questions. You do not need to answer them out loud or write anything
            down. Just notice what comes up.
          </p>
          <div className="space-y-8">
            {needAssessment.map((item, i) => (
              <div
                key={i}
                className="bg-sage-50/50 rounded-2xl p-6 border border-sage-100/80"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3 italic">
                  &ldquo;{item.question}&rdquo;
                </h3>
                <p className="text-sage-600 leading-relaxed mb-4">
                  {item.explanation}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center px-3 py-1.5 bg-white text-sage-600 text-xs font-medium rounded-full border border-sage-200 hover:border-sage-300 hover:text-sage-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 2: Budget */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 text-warm-700 rounded-full text-sm font-medium mb-6">
            Step 2
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Set your budget honestly
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Total cost. Including travel, meals, and the retreat itself. No
            surprises. Here is what each tier typically looks like.
          </p>
          <div className="space-y-4">
            {budgetTiers.map((tier, i) => (
              <Link
                key={i}
                href={tier.href}
                className="group block bg-white rounded-2xl p-6 border border-warm-200/60 hover:border-sage-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display text-xl font-semibold text-sage-800">
                    {tier.range}
                  </h3>
                  <span className="text-sm text-sage-500">
                    {tier.duration}
                  </span>
                </div>
                <p className="text-sage-600 text-sm leading-relaxed mb-2">
                  <span className="font-medium">Includes:</span>{" "}
                  {tier.includes}
                </p>
                <p className="text-sage-600 text-sm leading-relaxed">
                  <span className="font-medium">Best for:</span> {tier.bestFor}
                </p>
              </Link>
            ))}
          </div>
          <p className="text-sage-500 text-sm mt-6 leading-relaxed">
            Money should not be the thing that stops you. See our{" "}
            <Link
              href="/guides/sliding-scale-explained"
              className="text-sage-700 underline hover:text-sage-900"
            >
              sliding scale guide
            </Link>{" "}
            and{" "}
            <Link
              href="/work-exchange"
              className="text-sage-700 underline hover:text-sage-900"
            >
              work exchange options
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Step 3: Duration */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/70 text-sky-700 rounded-full text-sm font-medium mb-6">
            Step 3
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            How long do you need?
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Longer is not always better. The right duration depends on what you
            are working with and what your life allows.
          </p>
          <div className="space-y-6">
            {durationFactors.map((item, i) => (
              <div
                key={i}
                className="bg-sage-50/50 rounded-2xl p-6 border border-sage-100/80"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                  {item.length}
                </h3>
                <div className="space-y-2 text-sm text-sage-600 leading-relaxed">
                  <p>
                    <span className="font-medium text-sage-700">Pros:</span>{" "}
                    {item.pros}
                  </p>
                  <p>
                    <span className="font-medium text-sage-700">Cons:</span>{" "}
                    {item.cons}
                  </p>
                  <p className="text-sage-700 font-medium pt-1">
                    {item.verdict}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 4: Structure */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 text-warm-700 rounded-full text-sm font-medium mb-6">
            Step 4
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Structured or unstructured?
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            This is one of the most important decisions and one people rarely
            think about. How your time is organized matters as much as where you
            go.
          </p>
          <div className="space-y-6">
            {structureVsUnstructured.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-warm-200/60"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.type}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-sage-600 text-sm leading-relaxed mb-2">
                  <span className="font-medium text-sage-700">Good for:</span>{" "}
                  {item.goodFor}
                </p>
                <p className="text-sage-600 text-sm leading-relaxed">
                  <span className="font-medium text-sage-700">Watch for:</span>{" "}
                  {item.watchFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 5: Solo vs Group */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium mb-6">
            Step 5
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Solo or with someone?
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Most people go alone. But there are good reasons to bring someone,
            and good reasons not to. Here is how to think about it.
          </p>
          <div className="space-y-6">
            {soloVsGroup.map((item, i) => (
              <div
                key={i}
                className="bg-sage-50/50 rounded-2xl p-6 border border-sage-100/80"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                  {item.type}
                </h3>
                <div className="space-y-2 mb-4">
                  {item.benefits.map((benefit, j) => (
                    <div
                      key={j}
                      className="flex gap-3 items-start text-sm text-sage-600"
                    >
                      <span className="text-sage-400 flex-shrink-0">
                        &mdash;
                      </span>
                      <span className="leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sage-700 text-sm leading-relaxed font-medium">
                  {item.considerations}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sage-500 text-sm mt-6 leading-relaxed">
            Going with a partner? Read our{" "}
            <Link
              href="/guides/retreats-for-couples"
              className="text-sage-700 underline hover:text-sage-900"
            >
              couples retreat guide
            </Link>{" "}
            for specific advice. Introverted? Our{" "}
            <Link
              href="/guides/retreats-for-introverts"
              className="text-sage-700 underline hover:text-sage-900"
            >
              introverts guide
            </Link>{" "}
            has recommendations.
          </p>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Common mistakes to avoid
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            We see these patterns repeatedly. Learning from other people&rsquo;s
            missteps is free.
          </p>
          <div className="space-y-4">
            {commonMistakes.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-5 bg-white rounded-xl border border-warm-200/60"
              >
                <svg
                  className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="font-medium text-sage-800 mb-1">
                    {item.mistake}
                  </h3>
                  <p className="text-sage-600 text-sm leading-relaxed">
                    {item.reality}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sage-50/60 rounded-2xl p-8 border border-sage-100/80">
            <h2 className="font-serif text-xl font-semibold text-sage-900 mb-4">
              The quick version
            </h2>
            <ol className="space-y-3 text-sage-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="font-display text-sage-400 font-semibold">
                  1.
                </span>
                <span>
                  Name what hurts. Browse retreats by need, not by activity.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-sage-400 font-semibold">
                  2.
                </span>
                <span>
                  Set a real budget. Include travel. Do not stretch beyond what
                  is comfortable.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-sage-400 font-semibold">
                  3.
                </span>
                <span>
                  Choose a duration that matches your life, not your ambition.
                  Four nights is enough.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-sage-400 font-semibold">
                  4.
                </span>
                <span>
                  Pick the structure level that matches your energy. If you are
                  depleted, more structure is usually better.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-sage-400 font-semibold">
                  5.
                </span>
                <span>
                  Go alone unless you have a strong reason not to. Trust
                  yourself.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Ready to start looking?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/start-here"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              Find Your Retreat
            </Link>
            <Link
              href="/the-1000-reset"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              The $1,000 Reset
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              All Guides
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
            headline: "How to Choose the Right Healing Retreat",
            description:
              "A practical decision framework for choosing the right retreat based on your needs, budget, preferred duration, structure, and whether to go solo or with someone.",
            url: "https://cheapretreats.com/guides/how-to-choose",
            publisher: {
              "@type": "Organization",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://cheapretreats.com/guides/how-to-choose",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Choose the Right Healing Retreat",
            description:
              "A step-by-step framework for choosing a healing retreat that matches your needs and budget.",
            step: [
              {
                "@type": "HowToStep",
                name: "Name what you need",
                text: "Identify whether you need rest, structure, or connection. Name the dominant need: burnout, grief, depression, quiet, loneliness, or trauma processing.",
              },
              {
                "@type": "HowToStep",
                name: "Set your budget",
                text: "Determine your total budget including travel. Options range from free (work exchange) to under $1,000 for full-week programs.",
              },
              {
                "@type": "HowToStep",
                name: "Choose your duration",
                text: "2-3 nights for a quick reset, 4-5 nights for meaningful decompression, 6-7 nights for deep work, 10+ for experienced practitioners.",
              },
              {
                "@type": "HowToStep",
                name: "Decide on structure",
                text: "Choose structured (daily schedule), unstructured (your own pace), or semi-structured (anchoring activities with free time).",
              },
              {
                "@type": "HowToStep",
                name: "Solo or with someone",
                text: "Most people go alone for the deepest experience. Bringing someone provides comfort but can limit individual growth.",
              },
            ],
          }),
        }}
      />
    </>
  );
}
