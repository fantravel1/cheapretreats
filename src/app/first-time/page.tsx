import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First-Time Retreat Guide — What to Expect, What to Bring, How to Prepare",
  description:
    "Never been on a healing retreat? This guide covers everything — what to expect, what won't happen, your boundaries, how to leave early, and how to know if you're ready.",
  alternates: { canonical: "https://cheapretreats.com/first-time" },
};

const sections = [
  {
    title: "What actually happens at a retreat",
    items: [
      "You arrive. Someone shows you your room. You unpack.",
      "Meals are at set times — usually communal, sometimes silent.",
      "There may be a schedule of optional activities: meditation, walks, workshops, art, rest.",
      "Or there may be no schedule at all — just space.",
      "You sleep. You eat. You breathe. You might cry. You might feel nothing. Both are fine.",
      "Then you go home.",
    ],
  },
  {
    title: "What won't happen",
    items: [
      "Nobody will force you to share your life story in a circle.",
      "Nobody will touch you without asking.",
      "Nobody will diagnose you or tell you what's wrong with you.",
      "Nobody will pressure you to sign up for more programs.",
      "Nobody will make you feel bad for being quiet, emotional, or disengaged.",
      "Nobody will judge you for leaving early.",
    ],
  },
  {
    title: "Your boundaries are yours",
    items: [
      "You can skip any activity. All of them.",
      "You can eat alone if you need to.",
      "You can go to bed early. Or stay up late.",
      "You can say 'no' to any invitation — group share, partner exercise, anything.",
      "You can leave. At any time. For any reason.",
      "A good retreat will explicitly tell you all of this on day one.",
    ],
  },
  {
    title: "How to know if you're ready",
    items: [
      "You don't need to be ready. That's the whole point.",
      "You don't need to have a 'goal' or an 'intention.'",
      "You don't need to understand what kind of healing you need.",
      "You just need to be able to get yourself there and have basic self-care abilities.",
      "If you're in active crisis, a retreat may not be the right first step — consider a therapist or crisis line first.",
      "For everyone else: if you're here reading this, you're probably ready enough.",
    ],
  },
];

const whatToBring = [
  "Comfortable clothes — layers, nothing fancy",
  "A journal and pen — optional but many people find it helpful",
  "Any medications you take regularly",
  "A water bottle",
  "Earplugs and an eye mask — shared rooms can be noisy",
  "A book — for downtime",
  "Cash for donations if it's a donation-based retreat",
  "Your phone charger — but consider leaving your phone off",
  "Nothing else. Retreats are designed so you need very little.",
];

export default function FirstTimePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-100/40 to-warm-50 py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/70 text-sky-700 rounded-full text-sm font-medium mb-8">
            For first-timers
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Never been on<br className="hidden sm:block" /> a retreat?
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            That&rsquo;s okay. Most people haven&rsquo;t. And the idea can be
            genuinely scary. This guide is for you.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-4 bg-sage-50/50 rounded-xl border border-sage-100/80">
                      <span className="text-sage-400 font-medium flex-shrink-0">&mdash;</span>
                      <span className="text-sage-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to bring */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            What to bring
          </h2>
          <div className="space-y-3">
            {whatToBring.map((item, i) => (
              <div key={i} className="flex gap-3 items-center p-3 bg-white rounded-lg border border-warm-200/60">
                <svg className="w-4 h-4 text-sage-400 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M13.4 4.3a.75.75 0 010 1.06l-6 6a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06L6.9 9.8l5.44-5.44a.75.75 0 011.06 0z" />
                </svg>
                <span className="text-sage-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional safety */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            A note on emotional safety
          </h2>
          <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100/60 space-y-4 text-sage-600 leading-relaxed">
            <p>
              Retreats can bring up unexpected emotions. That&rsquo;s normal.
              Slowing down often reveals feelings you&rsquo;ve been outrunning.
            </p>
            <p>
              A good retreat will have someone available to talk to if things get
              intense. A great retreat will tell you this upfront.
            </p>
            <p>
              If at any point you feel unsafe — emotionally or physically — you
              have every right to leave. No retreat is worth your safety.
            </p>
            <p className="font-serif text-sage-800 italic pt-2">
              Trust your gut. Always.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Ready? (You don&rsquo;t need to be.)
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/start-here" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Find Your Retreat
            </Link>
            <Link href="/faq" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              More Questions
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
            name: "How to Prepare for Your First Healing Retreat",
            description: "A complete guide for first-time retreat goers covering what to expect, boundaries, what to bring, and emotional safety.",
            step: [
              { "@type": "HowToStep", name: "Understand what happens", text: "Learn about the typical retreat structure: arrival, meals, optional activities, rest, and departure." },
              { "@type": "HowToStep", name: "Know your boundaries", text: "You can skip any activity, eat alone, leave early, and say no to any invitation." },
              { "@type": "HowToStep", name: "Pack light", text: "Bring comfortable clothes, medications, a journal, water bottle, and earplugs. You need very little." },
              { "@type": "HowToStep", name: "Trust your gut", text: "If at any point you feel unsafe, you have every right to leave." },
            ],
          }),
        }}
      />
    </>
  );
}
