import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Detox — Before, During & After Your Retreat",
  description:
    "How to prepare for disconnecting at a healing retreat. Out-of-office templates, pre-retreat phone weaning, what to do without screens, and surviving digital re-entry.",
  alternates: {
    canonical: "https://cheapretreats.com/guides/digital-detox-tips",
  },
};

const whyItMatters = [
  {
    point: "Your nervous system cannot rest while your phone is on",
    detail:
      "Every notification, even one you ignore, activates your alert system. The anticipation of a notification does the same thing. As long as your phone is within reach and powered on, part of your brain is monitoring it. A retreat cannot do its work -- calming your nervous system, slowing your thoughts, restoring your attention -- while you are maintaining a digital tether to the life you came to rest from.",
  },
  {
    point: "Your attention is the thing that needs healing",
    detail:
      "For most people, the core damage of constant connectivity is not information overload -- it is attention fragmentation. Your ability to focus on one thing for an extended period has been systematically eroded by devices designed to interrupt you. A retreat repairs this, but only if you actually stop the interruptions. Half-measures (keeping your phone on silent, checking it once a day) undermine the process.",
  },
  {
    point: "Being unreachable is itself therapeutic",
    detail:
      "The anxiety you feel about being unreachable is worth examining. For most of us, it is a conditioned response, not a rational fear. The world continued before you had a smartphone. It will continue during your retreat. The experience of being genuinely unreachable -- not just choosing not to respond, but actually unable to -- can be one of the most liberating aspects of a retreat.",
  },
];

const beforeRetreat = [
  {
    tip: "Start weaning two weeks before",
    detail:
      "Do not go from 8 hours of daily screen time to zero overnight. That is shock, not detox. Two weeks before your retreat, start reducing: turn off non-essential notifications, set your phone to grayscale, remove social media apps, establish phone-free meals, and stop sleeping with your phone in the bedroom. The gradual reduction makes the full disconnect at the retreat much less jarring.",
  },
  {
    tip: "Tell people you will be unreachable",
    detail:
      "Give your important contacts advance notice: family, close friends, your employer, anyone who might worry if they cannot reach you for several days. Provide the retreat center's phone number as an emergency contact. Be specific about dates and clear that you will not be checking messages. People adjust quickly when they know in advance.",
  },
  {
    tip: "Set up your out-of-office",
    detail:
      "Write and schedule your email auto-reply before you leave. Knowing that incoming emails are being handled (even just with an auto-response) reduces the anxiety of disconnecting. Be honest and simple. Something like: 'I am away from email from [date] to [date] and will not be checking messages. For urgent matters, contact [backup person]. I will respond when I return.' No need to explain that you are at a retreat unless you want to.",
  },
  {
    tip: "Prepare your work handoff",
    detail:
      "The number one source of retreat anxiety is unfinished work. Before you leave, delegate or complete anything time-sensitive. Write a handoff document for your backup. Clear your urgent queue. The effort you put into a clean handoff directly translates to peace of mind at the retreat.",
  },
  {
    tip: "Download what you might need offline",
    detail:
      "If you want music, a meditation app, maps to the retreat center, or a digital book, download everything before you go. Then you can put your phone in airplane mode (or powered off) without losing access to the few digital things that might be genuinely useful. The key is that nothing requires an internet connection.",
  },
  {
    tip: "Have one final scroll -- then stop",
    detail:
      "The night before the retreat, do your last check of messages, social media, and news. Then turn everything off. Do it deliberately, not guiltily. You are not abandoning anything. You are choosing a different kind of attention for a few days. Everything will be there when you return.",
  },
];

const duringRetreat = [
  {
    tip: "Power off, do not just silence",
    detail:
      "Airplane mode is a compromise. Power off is a commitment. When your phone is powered off and stored in your luggage, you cannot impulsively check it. The decision has been made and the barrier to reversal is high enough to be effective. If the retreat asks you to surrender your device, let them. That is not a constraint -- it is a gift.",
  },
  {
    tip: "Notice what your hands do",
    detail:
      "In the first hours without your phone, you will reach for it. Watch this happen. Your hand goes to your pocket or your bag, reflexively, dozens of times. Each reach is a small revelation about how deep the habit goes. Do not judge it. Just notice. This awareness is part of the healing.",
  },
  {
    tip: "Fill the gaps with presence, not substitutes",
    detail:
      "The urge to replace scrolling with reading, podcasts, or constant journaling is strong. Resist it. The empty space left by your phone is the point. Sit with the boredom. Walk without a destination. Look at something for longer than you normally would. The discomfort of having nothing to consume is where the restoration happens.",
  },
  {
    tip: "Use analog alternatives",
    detail:
      "A watch for time (instead of checking your phone). A paper book (instead of a Kindle with notifications). A physical journal (instead of a notes app). A paper map if you are exploring. These analogs serve the practical functions without the digital pull. There is a reason retreat centers often feel like time machines -- the absence of screens returns you to a simpler relationship with objects and information.",
  },
  {
    tip: "Handle the FOMO honestly",
    detail:
      "You will wonder what you are missing. Texts, posts, news, drama. The truth: you are missing noise. The important things -- the things that actually matter -- will still be there in a few days. And you might find that the distance gives you perspective on what you thought was urgent. Most of it was not.",
  },
  {
    tip: "If you break and check your phone",
    detail:
      "Do not spiral into guilt. It happens. Notice what triggered it (anxiety, boredom, habit, a specific worry), learn from it, and put the phone back. One lapse does not ruin a detox. The practice is in the returning, not in perfect abstinence.",
  },
];

const whatToDoWithYourHands = [
  "Walk. Walk slowly. Walk without a podcast.",
  "Sit somewhere and watch clouds, birds, trees, water, anything that moves slowly.",
  "Write by hand. Not essays. Just whatever comes.",
  "Stretch. Your body has been curled around a screen for years. Uncurl it.",
  "Lie down in the grass or on the floor and stare at the ceiling.",
  "Drink tea slowly. Notice the warmth, the taste, the steam.",
  "Talk to someone if the retreat allows it. Real, face-to-face, eye-contact conversation.",
  "Do nothing. Genuinely nothing. This is harder than it sounds and more valuable than you expect.",
  "Touch textures: tree bark, stone walls, wool blankets, cool water.",
  "Cook or help in the kitchen if the retreat allows it. Working with your hands is grounding.",
  "Draw, even if you cannot draw. The point is the movement, not the result.",
  "Clean something. Sweeping, wiping, organizing. Simple physical tasks quiet the mind.",
];

const afterRetreat = [
  {
    tip: "Do not turn everything on at once",
    detail:
      "When the retreat ends, the urge to immediately power up and catch up is overwhelming. Resist the flood. Turn on your phone but wait an hour before opening email. Check messages from family first, then close friends, then work. Give yourself permission to respond slowly. You do not owe anyone an instantaneous reply after days of silence.",
  },
  {
    tip: "Notice how the digital world feels",
    detail:
      "Pay attention to your body when you re-engage with screens. Do your shoulders tense? Does your breathing change? Does the scroll feel addictive immediately? These sensations were always there -- you just could not feel them before the detox. This awareness is one of the most valuable things you bring home.",
  },
  {
    tip: "Keep some of the boundaries",
    detail:
      "You probably cannot maintain full digital detox in regular life. But you can keep pieces: no phone at meals, no phone in the bedroom, no social media before noon, notifications off for non-essential apps. Pick one or two boundaries that felt most beneficial and try to hold them. Even partial boundaries are worthwhile.",
  },
  {
    tip: "Expect the pull to be strong",
    detail:
      "Within a day or two of returning, the old habits will reassert themselves with surprising force. This is normal. The neural pathways are well-worn. Do not interpret a return to old patterns as failure. Just notice, gently redirect when you can, and remember that every moment of awareness is itself a small act of resistance against compulsive use.",
  },
  {
    tip: "Consider a permanent change",
    detail:
      "Many people return from retreat-based digital detox and make lasting changes: switching to a simpler phone, deleting social media accounts, setting screen time limits, or establishing a daily phone-free window. If the detox showed you something about your relationship with technology that you do not want to forget, act on it while the memory is fresh.",
  },
];

const outOfOfficeTemplates = [
  {
    label: "Simple and direct",
    template:
      "I am away from [date] to [date] and will not be checking email during this time. I will respond to all messages when I return on [date]. For urgent matters, please contact [name] at [email].",
  },
  {
    label: "For a more personal tone",
    template:
      "I am taking a few days of dedicated rest from [date] to [date]. I will not be checking email or messages during this time. I will respond to everything when I return on [date]. If something cannot wait, [name] at [email] can help. Thank you for your patience.",
  },
  {
    label: "For when you do not want to explain",
    template:
      "Thank you for your email. I am currently unavailable and will return on [date]. I will not have access to email during this period. For time-sensitive requests, please contact [name] at [email]. I will respond promptly upon my return.",
  },
];

export default function DigitalDetoxTipsPage() {
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
            <span className="text-sage-800 font-medium">Digital Detox</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-100/40 to-warm-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/70 text-sky-700 rounded-full text-sm font-medium mb-8">
            Practical Guide
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Digital Detox
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            Before, during, and after. How to actually disconnect -- not just put
            your phone on silent and pretend -- and what happens when you do.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Why disconnecting matters
          </h2>
          <div className="space-y-6">
            {whyItMatters.map((item, i) => (
              <div key={i}>
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.point}
                </h3>
                <p className="text-sage-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before the retreat */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Before the retreat
          </h2>
          <div className="space-y-4">
            {beforeRetreat.map((item, i) => (
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

      {/* Out of office templates */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Out-of-office templates
          </h2>
          <p className="text-sage-600 leading-relaxed mb-8">
            Copy, customize, and schedule before you leave. Having this set up
            in advance removes one more source of last-minute anxiety.
          </p>
          <div className="space-y-4">
            {outOfOfficeTemplates.map((item, i) => (
              <div
                key={i}
                className="bg-sage-50/50 rounded-2xl p-6 border border-sage-100/80"
              >
                <h3 className="font-serif text-base font-semibold text-sage-800 mb-3">
                  {item.label}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed italic bg-white rounded-lg p-4 border border-sage-100/60">
                  &ldquo;{item.template}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* During the retreat */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            During the retreat
          </h2>
          <div className="space-y-4">
            {duringRetreat.map((item, i) => (
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

      {/* What to do with your hands */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            What to do with your hands
          </h2>
          <p className="text-sage-600 leading-relaxed mb-8">
            The hardest part of a digital detox is not the absence of
            information. It is the absence of something to fidget with. Here are
            things your hands can do instead of scrolling.
          </p>
          <div className="space-y-3">
            {whatToDoWithYourHands.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 items-start p-3 bg-sage-50/50 rounded-lg border border-sage-100/60"
              >
                <span className="text-sage-400 font-medium flex-shrink-0">
                  &mdash;
                </span>
                <span className="text-sage-700 text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After the retreat */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            After the retreat
          </h2>
          <div className="space-y-4">
            {afterRetreat.map((item, i) => (
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

      {/* Closing */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100/60">
            <h2 className="font-serif text-xl font-semibold text-sage-900 mb-4">
              The thing you are really detoxing from
            </h2>
            <div className="space-y-4 text-sage-600 leading-relaxed">
              <p>
                It is not the phone. It is the constant availability. The
                unspoken obligation to respond, to know, to have an opinion, to
                be current. The phone is just the delivery mechanism for a
                culture that never lets you stop.
              </p>
              <p>
                When you put it down for a few days, you are not just resting
                your eyes or your thumbs. You are resting the part of your brain
                that is always on call. That part is exhausted, and it cannot
                tell you how exhausted it is while it is still running.
              </p>
              <p className="font-serif text-sage-800 italic">
                You will not miss anything that matters. But you might find
                something that does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Ready to put the phone down?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/needs/burnout"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              Burnout Retreats
            </Link>
            <Link
              href="/needs/quiet"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              Silent Retreats
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
            headline: "Digital Detox -- Before, During & After Your Retreat",
            description:
              "How to prepare for disconnecting at a healing retreat, manage the detox during your stay, and maintain healthier digital habits afterward.",
            url: "https://cheapretreats.com/guides/digital-detox-tips",
            publisher: {
              "@type": "Organization",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://cheapretreats.com/guides/digital-detox-tips",
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
            name: "How to Do a Digital Detox for a Healing Retreat",
            description:
              "Step-by-step guide to disconnecting from devices before, during, and after a healing retreat.",
            step: [
              {
                "@type": "HowToStep",
                name: "Wean gradually before the retreat",
                text: "Start reducing screen time two weeks before: turn off notifications, remove social media apps, establish phone-free meals, stop sleeping with your phone.",
              },
              {
                "@type": "HowToStep",
                name: "Prepare your contacts and work",
                text: "Tell important contacts you will be unreachable, set up an out-of-office email reply, and complete a clean work handoff.",
              },
              {
                "@type": "HowToStep",
                name: "Power off during the retreat",
                text: "Turn your phone fully off rather than silent. Notice the reflexive reaching. Fill gaps with presence, not substitutes.",
              },
              {
                "@type": "HowToStep",
                name: "Use analog alternatives",
                text: "Use a watch for time, physical books, paper journals, and paper maps. These serve practical functions without digital pull.",
              },
              {
                "@type": "HowToStep",
                name: "Re-enter gradually",
                text: "Do not turn everything on at once. Check family first, then friends, then work. Notice how screens feel after the break.",
              },
              {
                "@type": "HowToStep",
                name: "Keep some boundaries at home",
                text: "Maintain at least one or two digital boundaries from the retreat: no phone at meals, no phone in the bedroom, or a daily phone-free window.",
              },
            ],
          }),
        }}
      />
    </>
  );
}
