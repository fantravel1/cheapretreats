import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retreats for Couples — Healing Together (or Separately)",
  description:
    "A guide for couples considering a healing retreat. When to go together, when to go separately, shared vs solo experiences, communication tips, and finding the right retreat for your relationship.",
  alternates: {
    canonical: "https://cheapretreats.com/guides/retreats-for-couples",
  },
};

const goTogetherReasons = [
  {
    reason: "You are both burned out",
    detail:
      "When both partners are depleted, a shared retreat can provide the reset you both need without one person carrying the other. You rest side by side, each doing your own healing, with the comfort of knowing your person is nearby. The shared reference point afterward -- the food, the quiet, the rhythm -- becomes a bonding memory.",
  },
  {
    reason: "You want to reconnect without daily life in the way",
    detail:
      "At home, you are logistics partners: who picks up the kids, what is for dinner, did you pay the bill. A retreat strips all of that away. What remains is just the two of you, in a quiet space, with nothing to manage. For many couples, this is the first time in years they have actually been present with each other without a task list between them.",
  },
  {
    reason: "You have been through something together and need to process it",
    detail:
      "A shared loss, a health crisis, a major life change. Processing together in a held space -- with a facilitator who understands couples dynamics -- can be more powerful than processing individually. The key is choosing a retreat that is specifically designed for couples work, not just a retreat that happens to allow couples.",
  },
  {
    reason: "One of you is nervous and needs the other's support",
    detail:
      "If one partner has never been to a retreat and the idea feels daunting, going together can lower the barrier. Having someone familiar makes the unfamiliar less intimidating. This is especially true for first-timers who would not go alone but would go with a partner.",
  },
];

const goAloneReasons = [
  {
    reason: "You need to focus entirely on yourself",
    detail:
      "When your partner is present, part of your attention is always on them -- are they comfortable, are they enjoying it, do they need something. If what you need is total self-focus, going alone removes that secondary awareness. You can cry without worrying about their reaction. You can be silent without it meaning something about your relationship.",
  },
  {
    reason: "The thing you need to heal is related to the relationship",
    detail:
      "If you are processing feelings about the relationship itself -- resentment, loss of self, codependency, considering whether to stay -- you need space away from your partner to think clearly. A retreat with your partner present makes it impossible to have the internal conversation you need to have.",
  },
  {
    reason: "Your partner does not want to go",
    detail:
      "Do not force it. A reluctant partner on a retreat is worse than going alone. They will be uncomfortable, and their discomfort will become your burden. If you need a retreat and they do not, go alone. It is not a betrayal to take care of yourself without your partner.",
  },
  {
    reason: "You tend to take care of them instead of yourself",
    detail:
      "If your pattern is caregiving -- monitoring their experience, checking if they are okay, adjusting your behavior to their mood -- then going with your partner will replicate the exact dynamic you need a break from. A solo retreat forces you to turn that caregiving energy toward yourself. That is the whole point.",
  },
  {
    reason: "You need to rediscover who you are outside the relationship",
    detail:
      "Long relationships can blur individual identity. If you have lost touch with who you are when you are not someone's partner, a solo retreat is one of the most direct ways to find out. It is not selfish. It is necessary maintenance for a healthy relationship.",
  },
];

const sharedRetreatTypes = [
  {
    type: "Couples-specific retreats",
    description:
      "Programs designed specifically for couples, often with a therapist or relationship facilitator. Typically include shared sessions, communication exercises, and time alone. These directly address relationship dynamics and provide tools for connection.",
    considerations:
      "Make sure both partners are willing participants. These retreats work best when both people want to be there. Check the facilitator's credentials -- relationship work requires specific training.",
    priceNote: "Usually in the $800-1,000 range for both partners combined.",
  },
  {
    type: "General retreats attended together",
    description:
      "A regular meditation, wellness, or nature retreat where you both attend as individual participants. You share a room but participate in the program independently. The retreat is not about your relationship -- it is about individual healing that happens to be shared.",
    considerations:
      "This works well if you are both independently drawn to the same type of retreat. It works poorly if one person is going along to please the other.",
    priceNote: "Standard per-person pricing, sometimes with a couples room discount.",
  },
  {
    type: "Parallel but separate retreats",
    description:
      "Both partners attend a retreat at the same time, but at different locations. You each get your own experience, and you reconnect afterward with fresh perspectives and shared understanding of the retreat process.",
    considerations:
      "Logistics are more complex, but the independence can be powerful. You return to each other changed in complementary ways.",
    priceNote: "Two separate retreat costs, but potentially at different price points.",
  },
];

const communicationTips = [
  {
    tip: "Have the 'why' conversation before booking",
    detail:
      "Talk openly about why each of you wants to go (or does not). What are you each hoping for? What are you afraid of? Misaligned expectations are the biggest source of retreat tension for couples. If one person expects a romantic getaway and the other expects therapeutic work, you are heading for conflict.",
  },
  {
    tip: "Agree on togetherness vs. separateness in advance",
    detail:
      "Before you arrive, discuss how much time you want to spend together versus apart during the retreat. Some couples attend every session together. Others spend most of the retreat separately and come together for meals. Neither is right or wrong, but agreeing beforehand prevents hurt feelings and unspoken disappointment.",
  },
  {
    tip: "Establish a check-in system",
    detail:
      "Decide how and when you will check in with each other. A brief nightly conversation? A morning walk together? A look across the dining hall? The check-in does not need to be elaborate -- it just needs to be agreed upon so neither person feels abandoned or smothered.",
  },
  {
    tip: "Respect each other's pace",
    detail:
      "One partner may have a powerful emotional experience on day two while the other feels nothing until day four. One may love the meditation while the other finds it unbearable. Resist the urge to synchronize your experiences. Your retreat is yours. Theirs is theirs. You can share afterward.",
  },
  {
    tip: "Do not process the relationship during the retreat",
    detail:
      "Unless you are at a couples-specific retreat with a facilitator, do not use retreat time to have The Big Conversation about your relationship. The heightened emotional state of a retreat can make everything feel more urgent and dramatic than it is. Process individually during the retreat. Talk about the relationship when you are both home and grounded.",
  },
  {
    tip: "Plan the homecoming conversation",
    detail:
      "Agree before you go that you will have a longer, unhurried conversation about your experiences once you are home and settled. Not on the drive back. Not while unpacking. Give each other a day or two, then sit down together and share what came up. Listen more than you respond.",
  },
];

const honestWarnings = [
  {
    warning: "A retreat will not fix your relationship",
    detail:
      "If your relationship is in crisis, a retreat may provide temporary relief but will not resolve underlying issues. Retreats are not couples therapy. If you need therapy, get therapy. A retreat can support a relationship that is fundamentally sound but strained. It cannot resurrect one that is broken.",
  },
  {
    warning: "Retreats can surface buried issues",
    detail:
      "The quiet and introspection of a retreat may bring up feelings about the relationship that you have been avoiding. This can be unsettling. Some couples come home closer. Others come home with hard truths they were not expecting. Be prepared for either outcome.",
  },
  {
    warning: "Power dynamics follow you",
    detail:
      "If one partner typically makes decisions and the other defers, this pattern will likely show up at the retreat. Who chose the retreat? Who set the budget? Who decides what activities to attend? Notice these patterns. A retreat can be an opportunity to experiment with different dynamics, but only if both partners are aware.",
  },
  {
    warning: "Shared rooms have tradeoffs",
    detail:
      "Sharing a room means less privacy for individual processing. If one partner cries at night or needs alone time, the room does not provide it. Consider whether adjacent single rooms might serve you better than a shared double, especially at retreats focused on deep emotional work.",
  },
];

export default function RetreatsForCouplesPage() {
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
            <span className="text-sage-800 font-medium">
              Retreats for Couples
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-rose-50/40 to-warm-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100/60 text-rose-700 rounded-full text-sm font-medium mb-8">
            Couples Guide
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Retreats for Couples
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            Healing together, healing separately, or some combination of both.
            The right approach depends on your relationship, your needs, and
            your honesty about what each of you actually wants.
          </p>
        </div>
      </section>

      {/* The core question */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            The first question: together or apart?
          </h2>
          <div className="space-y-4 text-sage-600 leading-relaxed mb-10">
            <p>
              This is the question couples rarely ask honestly enough. The
              default assumption is that doing things together is better. In
              retreat context, that is not always true. Sometimes the most loving
              thing you can do for your relationship is to heal separately and
              bring a more whole version of yourself back.
            </p>
            <p>
              Neither option is more virtuous. What matters is that the choice is
              made consciously, not out of obligation, guilt, or fear of what it
              means to go alone.
            </p>
          </div>
        </div>
      </section>

      {/* When to go together */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            When to go together
          </h2>
          <div className="space-y-4">
            {goTogetherReasons.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-warm-200/60"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.reason}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to go alone */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            When to go separately
          </h2>
          <div className="space-y-4">
            {goAloneReasons.map((item, i) => (
              <div
                key={i}
                className="bg-sage-50/50 rounded-2xl p-6 border border-sage-100/80"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.reason}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreat types for couples */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Types of shared retreat experiences
          </h2>
          <div className="space-y-6">
            {sharedRetreatTypes.map((item, i) => (
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
                  <span className="font-medium text-sage-700">
                    Considerations:
                  </span>{" "}
                  {item.considerations}
                </p>
                <p className="text-sage-500 text-xs">{item.priceNote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication tips */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Communication tips for couples retreats
          </h2>
          <div className="space-y-4">
            {communicationTips.map((item, i) => (
              <div
                key={i}
                className="bg-warm-50 rounded-2xl p-6 border border-warm-200/60"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.tip}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest warnings */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Honest warnings
          </h2>
          <div className="space-y-4">
            {honestWarnings.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-5 bg-rose-50/40 rounded-xl border border-rose-100/60"
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
                    {item.warning}
                  </h3>
                  <p className="text-sage-600 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100/60">
            <h2 className="font-serif text-xl font-semibold text-sage-900 mb-4">
              The healthiest thing you can do for your relationship
            </h2>
            <div className="space-y-4 text-sage-600 leading-relaxed">
              <p>
                ...is take care of yourself. Whether that means a retreat
                together, a retreat alone, or supporting your partner while they
                go without you, the underlying principle is the same: two rested,
                grounded people make a better couple than two burned-out people
                who never take a break.
              </p>
              <p>
                Healing is not always a shared activity. Sometimes the most
                intimate thing you can do is give each other space. And
                sometimes, sitting in silence next to the person you love, with
                nothing to say and nothing to fix, is exactly enough.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Find retreats for two (or for one)
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/start-here"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              Find Your Retreat
            </Link>
            <Link
              href="/needs/burnout"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              Burnout Retreats
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
            headline:
              "Retreats for Couples -- Healing Together (or Separately)",
            description:
              "A guide for couples considering a healing retreat, covering when to go together, when to go separately, shared vs solo experiences, and communication tips.",
            url: "https://cheapretreats.com/guides/retreats-for-couples",
            publisher: {
              "@type": "Organization",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://cheapretreats.com/guides/retreats-for-couples",
            },
          }),
        }}
      />
    </>
  );
}
