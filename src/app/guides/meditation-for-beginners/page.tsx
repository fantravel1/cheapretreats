import type { Metadata } from "next";
import Link from "next/link";
import { guideImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Your First Meditation Retreat — A Beginner's Guide",
  description:
    "Everything you need to know before your first meditation or silent retreat. What to expect, how to handle restlessness, common fears, and why you do not need to be good at sitting still.",
  alternates: {
    canonical: "https://cheapretreats.com/guides/meditation-for-beginners",
  },
};

const whatToExpect = [
  {
    title: "The schedule",
    content:
      "Most meditation retreats follow a consistent daily rhythm. Wake up early (5:00 - 6:00 AM is common). Alternate between sitting meditation, walking meditation, meals, and rest. Lights out by 9:00 - 10:00 PM. The predictability is intentional -- it removes decision-making so your mind can settle. Each sitting period is usually 30-45 minutes, not hours. Walking meditation breaks them up.",
  },
  {
    title: "The silence",
    content:
      "Noble silence means no talking, no eye contact, no phone, no reading, no writing (some retreats allow journaling). It sounds extreme. In practice, after the initial awkwardness, most people find it profoundly relieving. You do not need to make small talk. You do not need to perform sociability. You can just exist. If you need to communicate something practical (you are sick, your room is too cold), you can always speak to a teacher or staff member. Silence is about reducing stimulation, not about punishment.",
  },
  {
    title: "The food",
    content:
      "Meals are simple, wholesome, and usually vegetarian. Eating in silence feels strange at first -- you might notice how quickly you usually eat, or how much you use meals as social performance. Silent eating often becomes one of the most unexpectedly pleasant parts of the retreat. Food tastes different when you pay attention to it. Some retreats serve only two meals a day (breakfast and lunch) with a light snack in the evening. This is a traditional practice, not deprivation.",
  },
  {
    title: "The instruction",
    content:
      "Good meditation retreats include teaching. A teacher will explain the technique, usually at the start and periodically throughout. You are not expected to already know how to meditate. Instruction is clear, practical, and patient. Many retreats offer one-on-one check-ins with the teacher where you can ask questions privately, even during noble silence. Use these. They exist specifically for beginners.",
  },
  {
    title: "The other people",
    content:
      "You will be around other people but not interacting with them. This is odd at first. You eat together, sit together, walk together -- all in silence. Over the days, you start to develop a quiet awareness of others without the usual social overhead. Some people find this one of the most restful aspects of the retreat: being in community without being required to perform community.",
  },
];

const commonFears = [
  {
    fear: "I cannot sit still for five minutes, let alone 45",
    truth:
      "You do not need to sit perfectly still. Meditation is not a stillness contest. You can adjust your posture, scratch an itch, shift your weight. The instruction is about where you place your attention, not about your body being rigid. Walking meditation periods exist specifically to give your body movement between sittings. And 45 minutes sounds long until you are in it -- time moves differently in meditation. Some sittings fly by; others crawl. Both are normal.",
  },
  {
    fear: "My mind will not stop thinking",
    truth:
      "Your mind is supposed to think. That is what minds do. Meditation is not about stopping thoughts. It is about noticing that you are thinking and gently returning your attention to the breath, the body, or whatever anchor the teacher has suggested. Every time you notice and return, that is meditation. The noticing is the practice, not the absence of thought. You will think constantly. That is fine. Everyone does.",
  },
  {
    fear: "I will feel trapped",
    truth:
      "You can leave at any time. Walk out of the meditation hall, go to your room, take a walk. Nobody will stop you. Some retreats have a 'minimum commitment' policy where they ask you to stay for the full duration, but this is a request, not a prison sentence. If you need to leave, you leave. A reputable center will respect your autonomy completely.",
  },
  {
    fear: "I will be the only one who does not know what they are doing",
    truth:
      "At beginner-friendly retreats, a significant portion of participants are first-timers. Even at mixed-level retreats, experienced meditators remember being beginners and are generally kind about it. The teacher will offer instruction that covers the basics. You are not expected to arrive with skills.",
  },
  {
    fear: "I will have some kind of emotional breakdown",
    truth:
      "Strong emotions do come up in meditation. Removing the usual distractions means feelings you have been outrunning may surface. This is normal, not dangerous. It is also not guaranteed -- many first-timers have a perfectly calm experience. If difficult emotions do arise, teachers are trained to support you. You can request a private conversation at any time. And crying in a meditation hall is so common that nobody will even look up.",
  },
  {
    fear: "I am not spiritual or religious",
    truth:
      "Many meditation retreats are entirely secular. Even those rooted in Buddhist tradition typically do not require belief, prayer, or devotion. The techniques are practical: notice your breath, notice your thoughts, return your attention. You can do this without believing in anything beyond the fact that paying attention is valuable. If a retreat requires spiritual conformity, it is not one we would recommend to a beginner.",
  },
  {
    fear: "I will be bored out of my mind",
    truth:
      "You might be. Boredom is one of the most common experiences, especially on days one and two. But boredom in meditation is different from regular boredom -- it usually resolves into something else if you stay with it. Restlessness, then calm, then something you did not expect. The boredom is not a sign that the retreat is failing. It is a sign that your nervous system is adjusting to a drastically lower level of stimulation.",
  },
];

const practicalTips = [
  {
    tip: "Bring a cushion you have tested",
    detail:
      "Retreat centers provide meditation cushions, but comfort varies enormously. If you have a cushion, bench, or support you know works for your body, bring it. Back pain and knee pain are the most common physical complaints and can derail the experience. If you do not own a cushion, test the ones at the center on arrival and ask if alternatives are available. Chairs are always an option -- there is no shame in sitting in a chair.",
  },
  {
    tip: "Layer your clothing",
    detail:
      "Meditation halls are often cold, especially in early morning. Your body temperature drops when you are still for extended periods. A warm shawl, blanket, or extra layers can make the difference between a comfortable sit and a miserable one. Bring warm socks specifically for meditation.",
  },
  {
    tip: "Use the walking meditation",
    detail:
      "Do not skip walking periods to rest in your room. Walking meditation is not a break from 'real' meditation -- it is meditation with your eyes open and your body moving. It prevents stiffness, maintains energy, and provides a different quality of attention. Many people find walking meditation easier and more enjoyable than sitting.",
  },
  {
    tip: "Do not evaluate during the retreat",
    detail:
      "Resist the urge to score your meditation, rank your days, or decide whether the retreat is 'working.' The analytical mind will want to project-manage the experience. Let it try, notice it doing so, and return to the practice. The evaluation can happen after you go home.",
  },
  {
    tip: "Sleep when you can",
    detail:
      "Meditation retreat schedules start early and the days are long. Fatigue is common, especially on the first two days. If there is a rest period, use it to sleep. A short nap after lunch can prevent the afternoon sittings from becoming a battle with drowsiness.",
  },
  {
    tip: "Tell the teacher what you are experiencing",
    detail:
      "Use the private interview time. Describe what is actually happening -- 'I keep falling asleep,' 'I am having anxiety,' 'I do not understand the instructions' -- not what you think you should be experiencing. Teachers have heard everything. Nothing you say will surprise them, and their guidance is usually simple and helpful.",
  },
];

const dayByDay = [
  {
    day: "Day 1",
    title: "Arrival and disorientation",
    description:
      "You arrive, settle in, attend orientation. The first sitting feels like an experiment. Your body does not know what to do. Your mind races. Silence feels conspicuous. You are hyperaware of every sound, every other person. Meals are awkward. Sleep may be difficult. This is entirely normal. You are adapting to a completely foreign rhythm.",
  },
  {
    day: "Day 2",
    title: "Resistance",
    description:
      "The hardest day for most people. The novelty has worn off. Your body aches from sitting. Your mind rebels against the quiet. Boredom, frustration, doubt ('why did I come here?'), and restlessness are all common. Some people feel waves of emotion -- sadness, anger, grief -- without obvious cause. Others feel nothing at all. All of this is the retreat doing what it is supposed to do: revealing what is underneath the noise.",
  },
  {
    day: "Day 3",
    title: "Settling",
    description:
      "Something usually shifts around day three. The resistance softens. Sittings feel less like endurance. You start to notice small things -- the quality of light, the taste of tea, the feeling of walking slowly. Your thoughts still come, but there is a little more space around them. Not a dramatic change. More like the volume turning down slightly.",
  },
  {
    day: "Days 4-5",
    title: "Depth",
    description:
      "If the retreat is long enough to reach this point, these days often bring the most meaningful experiences. Concentration deepens. Insights arise -- not as ideas but as felt understanding. Some people cry. Some people laugh. Some people just sit quietly and feel, for the first time in a long time, that they are actually present. Not all retreats reach this depth, and that is okay.",
  },
  {
    day: "Final day",
    title: "Re-emergence",
    description:
      "Most retreats end silence on the last morning or afternoon. Talking again feels strange -- your voice sounds different, conversation feels loud and fast. People share experiences, exchange contact information, and say goodbye. There is often a sense of loss as the container dissolves. The transition back to regular life begins here, and it can be jarring.",
  },
];

export default function MeditationForBeginnersPage() {
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
              Meditation for Beginners
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <img src={guideImages["meditation-for-beginners"]} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/80 via-sky-800/60 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            Beginner&rsquo;s Guide
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 leading-[1.1]">
            Your First Meditation<br className="hidden sm:block" /> Retreat
          </h1>
          <p className="text-lg md:text-xl text-sky-100 leading-relaxed max-w-xl mx-auto">
            You do not need to know how to meditate. You do not need to sit
            still for hours. You just need to show up. Everything else, you
            learn there.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            What to expect
          </h2>
          <div className="space-y-8">
            {whatToExpect.map((item, i) => (
              <div key={i}>
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common fears */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Common fears (honestly addressed)
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Every one of these is something we have heard from real people before
            their first meditation retreat. None of them are silly, and none of
            them should stop you.
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

      {/* Day by day */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Day by day: the emotional arc
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Every retreat is different, but the inner experience follows a
            remarkably consistent pattern for most people.
          </p>
          <div className="space-y-8">
            {dayByDay.map((item, i) => (
              <div
                key={i}
                className="relative pl-8 border-l-2 border-sky-200"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-sky-300 border-2 border-white" />
                <div className="mb-2">
                  <span className="text-sky-600 font-medium text-sm uppercase tracking-wider">
                    {item.day}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-sage-900 mt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sage-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical tips */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Practical tips from people who have been there
          </h2>
          <div className="space-y-4">
            {practicalTips.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-warm-200/60"
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

      {/* Final encouragement */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100/60">
            <h2 className="font-serif text-xl font-semibold text-sage-900 mb-4">
              You do not need to be good at this
            </h2>
            <div className="space-y-4 text-sage-600 leading-relaxed">
              <p>
                There is no good or bad meditation. There is only showing up and
                sitting down. Some sits will feel peaceful. Others will feel like
                wrestling your own mind. Both count. Both are the practice.
              </p>
              <p>
                The most experienced meditators in the hall? They still have
                restless sits, racing minds, and sore knees. The difference is
                not that they have mastered stillness. It is that they have made
                peace with imperfection.
              </p>
              <p className="font-serif text-sage-800 italic">
                You are not behind. You are exactly where beginners are supposed
                to be: at the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Find a beginner-friendly meditation retreat
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/needs/quiet"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              Silent Retreats
            </Link>
            <Link
              href="/first-time"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              First-Time Guide
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
              "Your First Meditation Retreat -- A Beginner's Guide",
            description:
              "Everything you need to know before your first meditation or silent retreat, including what to expect, common fears, and practical tips.",
            url: "https://cheapretreats.com/guides/meditation-for-beginners",
            publisher: {
              "@type": "Organization",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://cheapretreats.com/guides/meditation-for-beginners",
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
            name: "How to Prepare for Your First Meditation Retreat",
            description:
              "Step-by-step preparation guide for first-time meditation retreat participants.",
            step: [
              {
                "@type": "HowToStep",
                name: "Understand the format",
                text: "Learn about the typical schedule: early wake-up, alternating sitting and walking meditation, silent meals, and early bedtime.",
              },
              {
                "@type": "HowToStep",
                name: "Address your fears",
                text: "Understand that you do not need to sit perfectly still, your mind will not stop thinking (and that is fine), and you can leave at any time.",
              },
              {
                "@type": "HowToStep",
                name: "Prepare physically",
                text: "Bring a comfortable cushion or test the center's equipment, layer clothing for temperature changes, and bring warm socks.",
              },
              {
                "@type": "HowToStep",
                name: "Use the support available",
                text: "Take advantage of private teacher interviews, walking meditation periods, and rest time. Ask for help when you need it.",
              },
              {
                "@type": "HowToStep",
                name: "Be patient with yourself",
                text: "Expect resistance on day 2, settling on day 3, and potential depth on days 4-5. The emotional arc is normal and shared by nearly all participants.",
              },
            ],
          }),
        }}
      />
    </>
  );
}
