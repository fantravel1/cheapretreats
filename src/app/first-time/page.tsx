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
      "Some retreats have a brief orientation on the first evening — logistics, boundaries, where things are.",
      "There's usually more free time than you expect. Most people don't know what to do with it at first. That's the point.",
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
      "Nobody will ask you to do anything that involves nudity, substances, or physical risk without clear, upfront informed consent.",
      "Nobody will tell you that you need to come back. A good retreat is a complete experience, not a sales funnel.",
      "Nobody will claim they can cure you. If they do, leave.",
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
      "You can ask questions about any practice before you participate. You should.",
      "You can tell a facilitator privately if something is bothering you. Good ones will listen without defensiveness.",
      "You can change your mind. About anything. At any point. There's no commitment once you arrive beyond basic respect for others' quiet.",
      "A good retreat will explicitly tell you all of this on day one.",
    ],
  },
  {
    title: "How to know if you're ready",
    items: [
      "You don't need to be ready. That's the whole point.",
      "You don't need to have a 'goal' or an 'intention.'",
      "You don't need to understand what kind of healing you need.",
      "You don't need to meditate, practice yoga, or have any spiritual beliefs.",
      "You don't need to be able to sit still for hours. Most retreat activities are much more varied than people imagine.",
      "You just need to be able to get yourself there and have basic self-care abilities.",
      "If you're in active crisis, a retreat may not be the right first step — consider a therapist or crisis line first.",
      "If you're nervous, that's actually a good sign. It means you're taking it seriously.",
      "For everyone else: if you're here reading this, you're probably ready enough.",
    ],
  },
];

const commonFears = [
  {
    fear: "What if I cry in front of strangers?",
    truth:
      "You probably will. And so will other people. Retreats are one of the few places where crying is genuinely normal and nobody will try to fix it or make you stop. Most people say the tears they were afraid of turned out to be the most relieving part.",
  },
  {
    fear: "What if it's a cult?",
    truth:
      "A fair concern. Here's the difference: cults isolate you, demand loyalty, and have a charismatic leader with unchecked authority. Healthy retreats let you leave anytime, don't ask for ongoing financial commitment, and have clear organizational structures. We've included a red flags section below — read it before you book.",
  },
  {
    fear: "What if I'm the only one who's never done this?",
    truth:
      "At most retreats, 30-50% of participants are first-timers. You won't be the only one. And experienced retreat-goers were all beginners once — most are kind about it, not gatekeepy.",
  },
  {
    fear: "What if I can't sit still?",
    truth:
      "Most retreats aren't just sitting. There's walking, eating, resting, journaling, being outside. Even meditation-focused retreats break up sitting with movement. And if sitting is genuinely hard for you, many places offer chairs, cushion alternatives, or the option to lie down.",
  },
  {
    fear: "What if I hate it and want to leave?",
    truth:
      "Then you leave. Seriously. You are never trapped at a retreat. Have your own transportation plan or know the local taxi/bus options. A good retreat will not guilt you for going early. If they do, that's a red flag about them, not you.",
  },
  {
    fear: "What if I'm not spiritual enough?",
    truth:
      "Many retreats are entirely secular. Even the ones rooted in a tradition usually welcome people of all backgrounds and don't require belief. You don't need to chant, pray, or believe anything. If a retreat demands spiritual conformity, it's not on our list.",
  },
  {
    fear: "What if I have dietary needs or allergies?",
    truth:
      "Most retreat centers are very used to dietary restrictions — vegetarian, vegan, gluten-free, and allergy-aware menus are common. Contact them beforehand. If a center can't accommodate basic dietary needs, consider that a sign of poor infrastructure.",
  },
  {
    fear: "What if nothing happens and I wasted my money?",
    truth:
      "Sometimes the impact isn't obvious until weeks later. Sometimes a retreat is just a few days of rest and that's enough. Not every experience needs to be a breakthrough. Getting distance from your life and sleeping well for four nights is not nothing — even if it doesn't feel dramatic.",
  },
];

const dayByDay = [
  {
    day: "Day 1",
    title: "Arrival and settling",
    description:
      "You get there, probably feeling awkward. You find your room, unpack, look around. There might be an orientation session in the evening — introductions, logistics, where the tea is. Dinner is quiet. You go to bed early because you don't know what else to do. You might not sleep well. The bed is different, the sounds are different, your brain is still running at city speed. This is normal.",
  },
  {
    day: "Day 2",
    title: "The hard middle",
    description:
      "This is usually the hardest day. The novelty has worn off but you haven't settled in yet. You might feel restless, bored, emotional, or irritated. You might wonder why you came. Your body is adjusting to not being constantly stimulated. Some people cry on day two. Some people nap for three hours. Some people take a very long walk. All of this is the retreat working, even though it doesn't feel like it.",
  },
  {
    day: "Day 3",
    title: "Something shifts",
    description:
      "For most people, something loosens around day three. Not always something dramatic — maybe you just notice you're breathing more slowly. Maybe food tastes different. Maybe you sit outside for an hour and don't check the time. The mental noise gets quieter. Not silent, but quieter. You start to feel like yourself, or at least a version of yourself that has more space. Departure often feels too soon. Most people wish they had one more day.",
  },
];

const afterRetreat = [
  {
    title: "Post-retreat blues are real",
    description:
      "Coming home can feel jarring. The noise, the screens, the pace — everything you left behind is still there. Many people feel a dip in mood 2-5 days after returning. This is common enough that it has a name. It doesn't mean the retreat failed. It means you experienced something genuinely different from your daily life, and the contrast is uncomfortable.",
  },
  {
    title: "Re-entry takes intention",
    description:
      "If possible, don't go straight from a retreat back to a packed schedule. Give yourself a buffer day. Keep your phone off a little longer. Eat simply. Go to bed early. The habits and pace of the retreat will fade quickly if you don't protect a little space for them.",
  },
  {
    title: "You don't need to explain it",
    description:
      "People will ask how it was. You might not have words yet. 'It was good, I'm glad I went' is a complete answer. You don't owe anyone a spiritual narrative. Some of the most important experiences are the ones that resist easy description.",
  },
  {
    title: "Integration matters more than the experience",
    description:
      "A retreat is a seed, not a harvest. What you do in the weeks after matters as much as what happened during. Keep one small practice — a morning walk, five minutes of quiet, journaling before bed. It doesn't need to be elaborate. Consistency matters more than intensity.",
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
  "A small flashlight or headlamp — helpful for early mornings and late-night bathroom trips",
  "Shower sandals — especially for shared bathrooms",
  "A warm shawl or blanket — meditation halls and common areas can be cold",
  "Basic toiletries — many retreat centers provide the essentials but bring what you need for comfort",
  "Snacks you trust — in case the food doesn't agree with you or you get hungry between meals",
  "Nothing else. Retreats are designed so you need very little.",
];

const redFlags = [
  {
    flag: "They discourage you from leaving early",
    detail:
      "Any retreat that makes you feel trapped — through guilt, financial penalty, or social pressure — is not prioritizing your wellbeing. You should always feel free to leave.",
  },
  {
    flag: "One charismatic leader with no oversight",
    detail:
      "A single person who holds all authority, receives special treatment, and is never questioned is a classic warning sign. Healthy organizations have accountability structures.",
  },
  {
    flag: "They promise specific outcomes or cures",
    detail:
      "No ethical retreat will guarantee you'll be healed, transformed, or fixed. Anyone making those promises is either deluded or manipulative. Healing is not a product with a warranty.",
  },
  {
    flag: "Hidden costs that appear after you arrive",
    detail:
      "If the real price only becomes clear once you're there — extra fees for essential activities, pressure to buy supplements, upsells for 'advanced' sessions — that's deceptive.",
  },
  {
    flag: "No clear consent or opt-out policies",
    detail:
      "If there's no orientation about boundaries, no mention of consent, and activities are presented as mandatory, the retreat lacks basic safety infrastructure.",
  },
  {
    flag: "Physical contact without explicit permission",
    detail:
      "Any bodywork, energy healing, or physical adjustment should only happen with clear verbal consent, every time. 'Implied consent' is not consent.",
  },
  {
    flag: "They isolate you from communication",
    detail:
      "Encouraging you to put your phone away is fine. Confiscating your phone or preventing you from contacting the outside world is not. You should always be able to reach someone if you need to.",
  },
  {
    flag: "Negative reviews are aggressively suppressed or attacked",
    detail:
      "Check how the organization responds to criticism. If they threaten, discredit, or silence people who share negative experiences, the culture is not safe for vulnerability.",
  },
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

      {/* Core Sections */}
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

      {/* Common Fears */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Common fears (and the truth)
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Every single one of these is something we&rsquo;ve heard from real people
            considering their first retreat. None of them are silly.
          </p>
          <div className="space-y-5">
            {commonFears.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-warm-200/60"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3 italic">
                  &ldquo;{item.fear}&rdquo;
                </h3>
                <p className="text-sage-600 leading-relaxed">{item.truth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day by Day */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Day-by-day: what a typical retreat looks like
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Every retreat is different, but if you&rsquo;re going to a 3-4 day
            silent or wellness retreat, the emotional arc usually follows a
            similar pattern.
          </p>
          <div className="space-y-8">
            {dayByDay.map((day, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-sky-200">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-sky-300 border-2 border-white" />
                <div className="mb-2">
                  <span className="text-sky-600 font-medium text-sm uppercase tracking-wider">
                    {day.day}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-sage-900 mt-1">
                    {day.title}
                  </h3>
                </div>
                <p className="text-sage-600 leading-relaxed">{day.description}</p>
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

      {/* Red Flags */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Red flags to watch for
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Most retreats are safe. But not all of them. Before you book — and
            after you arrive — watch for these warning signs.
          </p>
          <div className="space-y-4">
            {redFlags.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-5 bg-rose-50/50 rounded-xl border border-rose-100/80"
              >
                <svg className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-medium text-sage-800 mb-1">{item.flag}</h3>
                  <p className="text-sage-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional safety */}
      <section className="py-14 md:py-20 bg-warm-50">
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

      {/* After the Retreat */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            After the retreat
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Nobody talks about this part enough. Coming home can be harder than
            going. Here&rsquo;s what to expect.
          </p>
          <div className="space-y-6">
            {afterRetreat.map((item, i) => (
              <div
                key={i}
                className="bg-sage-50/50 rounded-xl p-6 border border-sage-100/80"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
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
              { "@type": "HowToStep", name: "Address your fears", text: "Common fears like crying in front of strangers, cult concerns, and not being spiritual enough are all normal and addressable." },
              { "@type": "HowToStep", name: "Know your boundaries", text: "You can skip any activity, eat alone, leave early, and say no to any invitation." },
              { "@type": "HowToStep", name: "Know what to expect day by day", text: "Day 1 is settling in, Day 2 is often the hardest, and Day 3 is when something usually shifts." },
              { "@type": "HowToStep", name: "Pack light", text: "Bring comfortable clothes, medications, a journal, water bottle, earplugs, and snacks. You need very little." },
              { "@type": "HowToStep", name: "Watch for red flags", text: "Be aware of warning signs like charismatic leaders with no oversight, promises of cures, hidden costs, and isolation from communication." },
              { "@type": "HowToStep", name: "Trust your gut", text: "If at any point you feel unsafe, you have every right to leave." },
              { "@type": "HowToStep", name: "Plan for re-entry", text: "Give yourself a buffer day after returning. Post-retreat blues are normal. Keep one small practice going." },
            ],
          }),
        }}
      />
    </>
  );
}
