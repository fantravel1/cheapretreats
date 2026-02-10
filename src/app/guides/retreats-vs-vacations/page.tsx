import type { Metadata } from "next";
import Link from "next/link";
import { guideImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Retreats vs. Vacations — Understanding the Difference",
  description:
    "Why healing retreats are not luxury spa vacations, what healing actually means in practice, how to manage expectations, and how to know which one you need right now.",
  alternates: {
    canonical: "https://cheapretreats.com/guides/retreats-vs-vacations",
  },
};

const keyDifferences = [
  {
    aspect: "Purpose",
    vacation:
      "To relax, enjoy, escape, and have pleasant experiences. The goal is pleasure and distraction from daily life.",
    retreat:
      "To rest, process, and return to yourself. The goal is restoration, which sometimes involves discomfort before it involves relief.",
  },
  {
    aspect: "Pace",
    vacation:
      "Often busy -- sightseeing, activities, restaurants, social plans. You come home tired from your trip.",
    retreat:
      "Slow and deliberate. Large stretches of unstructured time. You may feel bored before you feel rested.",
  },
  {
    aspect: "Comfort",
    vacation:
      "Designed to be comfortable. The bed, the food, the amenities are all meant to please you.",
    retreat:
      "Functional comfort. The bed is fine, the food is nourishing, but nobody is trying to pamper you. Simplicity is the point.",
  },
  {
    aspect: "Stimulation",
    vacation:
      "More stimulation -- new sights, sounds, flavors, experiences. Your senses are fed.",
    retreat:
      "Less stimulation -- fewer choices, quieter environments, sometimes no phone or internet. Your nervous system gets to calm down.",
  },
  {
    aspect: "Social expectation",
    vacation:
      "Usually shared with others. Conversation, planning, and social energy are part of the experience.",
    retreat:
      "Often solo, even when others are present. Silence or minimal conversation is common and valued.",
  },
  {
    aspect: "What you come home with",
    vacation:
      "Photos, souvenirs, stories, and often the need for another few days to recover from your vacation.",
    retreat:
      "Quiet shifts in perspective, a calmer nervous system, and usually the desire for more stillness, not more activity.",
  },
];

const whatHealingActuallyMeans = [
  {
    myth: "Healing means having a breakthrough",
    reality:
      "Most people do not have dramatic breakthroughs at retreats. What they have is a gradual softening -- the volume on their anxiety turns down, their sleep improves, their body unclenches. The changes are often subtle enough that you only notice them in retrospect. A lack of fireworks does not mean nothing happened.",
  },
  {
    myth: "Healing means feeling good the whole time",
    reality:
      "Retreats can bring up difficult emotions. Removing the distractions that keep feelings at bay means those feelings may surface. Grief, anger, restlessness, sadness -- these are not signs that the retreat is failing. They are signs that you are finally in a safe enough space for your body to process what it has been holding. Feeling bad at a retreat is not the same as having a bad retreat.",
  },
  {
    myth: "Healing means being fixed",
    reality:
      "A retreat is not a repair shop. You will not arrive broken and leave whole. What you may find is a little more space -- between stimulus and response, between thought and reaction, between the noise of your life and your actual feelings. That space is not a cure. It is a beginning. And it is enough.",
  },
  {
    myth: "Healing requires a specific practice",
    reality:
      "You do not need to meditate, do yoga, or follow any spiritual tradition to benefit from a retreat. Rest itself is healing. Sleeping in a quiet room, eating simple food, walking in nature, and being released from your usual obligations -- these are not lesser forms of healing. They are the foundation of it.",
  },
  {
    myth: "Healing is permanent after one retreat",
    reality:
      "It is not. The calm and clarity you feel during and immediately after a retreat will fade as you re-enter your regular life. This is not failure. It is the nature of any restorative experience. The question is not whether the retreat effect lasts forever but whether it gives you enough distance from your patterns to see them more clearly. Sometimes that clarity lasts even after the calm does not.",
  },
];

const managingExpectations = [
  {
    expectation: "It will be like a spa",
    adjustment:
      "Affordable retreats are not luxury experiences. Rooms are simple. Food is wholesome but not gourmet. There may be shared bathrooms, early wake-ups, and communal chores. If you are looking for pampering, book a spa vacation. If you are looking for genuine rest, a retreat offers something no spa can: the absence of stimulation, expectation, and performance.",
  },
  {
    expectation: "Every moment will be peaceful",
    adjustment:
      "Some moments will be boring. Some will be uncomfortable. Some will be frustrating. Day two of most retreats is notoriously difficult -- your body has stopped moving but your mind has not. The peace usually comes after the restlessness, not instead of it.",
  },
  {
    expectation: "You will 'find yourself'",
    adjustment:
      "This is a cliche that sets people up for disappointment. What you might find is a few hours of genuine quiet, a night of deep sleep, a meal eaten without distraction, or a moment of clarity about something you have been avoiding. These are not small things. But they are not the mystical revelation that retreat marketing sometimes implies.",
  },
  {
    expectation: "You will come home changed",
    adjustment:
      "You might. But 'changed' often looks like subtle shifts in behavior, not a personality overhaul. Maybe you are a little more patient. Maybe you sleep better for a few weeks. Maybe you start taking a morning walk. These small changes are the real return on your investment. Grand transformations are the exception, not the rule.",
  },
  {
    expectation: "It will be worth the money",
    adjustment:
      "Value is subjective and hard to measure with healing. Some people say their retreat was the best money they ever spent. Others feel it was overpriced for what they experienced. Being realistic about what you are buying -- a few days of quiet, structured rest in a supportive environment -- helps you evaluate whether the cost makes sense for your situation.",
  },
];

const howToKnow = [
  {
    need: "You need a vacation if...",
    signs: [
      "You are tired but fundamentally okay -- you just need a break from your routine.",
      "You want pleasure, novelty, and fun.",
      "You want to share the experience with friends or family.",
      "You have energy for activity and adventure but not for your daily grind.",
      "You want to come home with stories, photos, and memories.",
      "You need distraction, not introspection.",
    ],
  },
  {
    need: "You need a retreat if...",
    signs: [
      "You are exhausted in a way that a week at the beach would not fix.",
      "You want to stop, not go somewhere exciting.",
      "You crave silence more than stimulation.",
      "You are carrying something -- grief, burnout, depression, overwhelm -- that distraction will not help.",
      "You want to come home quieter, not more energized.",
      "You need someone to take away your choices for a few days so your brain can rest.",
      "You keep saying 'I just need to stop' but you never do.",
    ],
  },
];

export default function RetreatsVsVacationsPage() {
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
              Retreats vs. Vacations
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <img src={guideImages["retreats-vs-vacations"]} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900/80 via-warm-800/60 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            Understanding Retreats
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 leading-[1.1]">
            Retreats vs. Vacations
          </h1>
          <p className="text-lg md:text-xl text-warm-100 leading-relaxed max-w-xl mx-auto">
            They are not the same thing. Understanding the difference before you
            book prevents disappointment and helps you choose what you actually
            need.
          </p>
        </div>
      </section>

      {/* Key differences */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            The key differences
          </h2>
          <div className="space-y-1">
            {keyDifferences.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0"
              >
                <div className="p-5 bg-sky-50/40 border border-sky-100/40 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                  <div className="text-xs font-medium text-sky-500 uppercase tracking-wide mb-1">
                    Vacation: {item.aspect}
                  </div>
                  <p className="text-sm text-sage-600 leading-relaxed">
                    {item.vacation}
                  </p>
                </div>
                <div className="p-5 bg-sage-50/60 border border-sage-100/60 rounded-b-xl md:rounded-r-xl md:rounded-bl-none mb-4 md:mb-0">
                  <div className="text-xs font-medium text-sage-500 uppercase tracking-wide mb-1">
                    Retreat: {item.aspect}
                  </div>
                  <p className="text-sm text-sage-700 leading-relaxed">
                    {item.retreat}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What healing actually means */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            What &ldquo;healing&rdquo; actually means
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            The retreat industry uses &ldquo;healing&rdquo; loosely. Here is
            what it looks like in practice, stripped of marketing language.
          </p>
          <div className="space-y-6">
            {whatHealingActuallyMeans.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-warm-200/60"
              >
                <h3 className="font-serif text-lg font-semibold text-rose-700/80 mb-2 line-through decoration-rose-300/60">
                  {item.myth}
                </h3>
                <p className="text-sage-600 leading-relaxed">{item.reality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managing expectations */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Managing expectations
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            The gap between expectation and reality is where disappointment
            lives. Here are the most common mismatches and how to adjust.
          </p>
          <div className="space-y-4">
            {managingExpectations.map((item, i) => (
              <div
                key={i}
                className="bg-sage-50/50 rounded-2xl p-6 border border-sage-100/80"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2 italic">
                  &ldquo;{item.expectation}&rdquo;
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.adjustment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to know which you need */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            How to know which one you need
          </h2>
          <div className="space-y-6">
            {howToKnow.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-warm-200/60"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                  {item.need}
                </h3>
                <div className="space-y-2">
                  {item.signs.map((sign, j) => (
                    <div
                      key={j}
                      className="flex gap-3 items-start text-sm text-sage-600"
                    >
                      <span className="text-sage-400 flex-shrink-0">
                        &mdash;
                      </span>
                      <span className="leading-relaxed">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Both are valid */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100/60">
            <h2 className="font-serif text-xl font-semibold text-sage-900 mb-4">
              Both are valid
            </h2>
            <div className="space-y-4 text-sage-600 leading-relaxed">
              <p>
                This is not a hierarchy. Vacations are not shallow and retreats
                are not superior. They serve different needs. Sometimes you need
                a week on a beach with a cocktail. Sometimes you need a week in a
                quiet room with no phone. Neither is better. The question is
                which one matches what you are actually carrying right now.
              </p>
              <p>
                If you are here reading this, though -- on a site called
                CheapRetreats -- you probably already know the answer.
              </p>
              <p className="font-serif text-sage-800 italic">
                You do not need more fun. You need more rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Ready to choose rest over entertainment?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/start-here"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              Find Your Retreat
            </Link>
            <Link
              href="/guides/how-to-choose"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              How to Choose
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
            headline: "Retreats vs. Vacations -- Understanding the Difference",
            description:
              "Why healing retreats are not luxury spa vacations, what healing actually means, managing expectations, and knowing which one you need.",
            url: "https://cheapretreats.com/guides/retreats-vs-vacations",
            publisher: {
              "@type": "Organization",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://cheapretreats.com/guides/retreats-vs-vacations",
            },
          }),
        }}
      />
    </>
  );
}
