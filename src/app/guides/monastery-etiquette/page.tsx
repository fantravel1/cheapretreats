import type { Metadata } from "next";
import Link from "next/link";
import { guideImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Monastery Retreat Etiquette — A Gentle Guide",
  description:
    "What to wear, meal customs, silence rules, religious services, electronics, tipping, and how to be a respectful guest at a monastery retreat. A practical, non-judgmental guide.",
  alternates: {
    canonical: "https://cheapretreats.com/guides/monastery-etiquette",
  },
};

const generalPrinciples = [
  {
    principle: "You are a guest in someone else's home",
    explanation:
      "Monasteries are not hotels. They are living communities where people have dedicated their lives to a spiritual practice. When they open their doors to guests, they are sharing their space, their food, and their rhythm. The most important etiquette rule is simply to approach everything with that awareness. You do not need to share their beliefs to respect their way of life.",
  },
  {
    principle: "Ask when unsure",
    explanation:
      "No one expects you to know every custom. Monastery communities are used to hosting people from different backgrounds and are usually patient and kind when questions arise. A simple 'I am not sure about the custom here -- could you help me?' will always be received well. Asking shows respect; guessing and getting it wrong can cause unintended discomfort.",
  },
  {
    principle: "Less is more",
    explanation:
      "In clothing, behavior, sound, and expectation. Monasteries value simplicity. You do not need to perform piety or fake spiritual interest. But keeping your presence quiet, modest, and unobtrusive is a genuine form of respect for the space you are in.",
  },
];

const dressCode = [
  {
    guideline: "Cover shoulders and knees",
    detail:
      "This is universal across most monastic traditions -- Buddhist, Christian, Hindu. Sleeveless tops, shorts, and revealing clothing are generally inappropriate. Bring loose, comfortable clothing that covers your body without being tight. Think long pants or a long skirt, and shirts with at least short sleeves.",
  },
  {
    guideline: "Neutral or dark colors",
    detail:
      "Bright colors and bold patterns can be distracting in contemplative spaces. Monastery guests are not required to wear robes, but neutral tones -- earthy greens, blues, grays, blacks, browns -- are always appropriate and appreciated. White is significant in some traditions (worn by lay practitioners in Theravada Buddhism, for instance), so check before wearing all white.",
  },
  {
    guideline: "Remove shoes where indicated",
    detail:
      "Many monasteries require shoes to be removed before entering temples, meditation halls, and sometimes dining areas. Look for shoe racks near doorways or follow the lead of residents. Bring clean socks or slippers for indoor wear, especially in cold climates. Some traditions also remove shoes before entering sleeping quarters.",
  },
  {
    guideline: "Head coverings",
    detail:
      "Some traditions require head coverings for certain spaces or services. Christian monasteries may ask women to cover their hair in the chapel. Some Buddhist monasteries have no such requirement. Sikh gurdwaras require head coverings for everyone. When in doubt, bring a scarf and ask on arrival.",
  },
  {
    guideline: "No strong fragrances",
    detail:
      "Perfume, cologne, scented lotions, and strongly scented hair products are inappropriate in contemplative environments. Many monasteries specifically request fragrance-free personal care products. Respect for shared space includes respect for shared air.",
  },
];

const mealCustoms = [
  {
    custom: "Wait for a signal to begin eating",
    detail:
      "Many monasteries begin meals with a prayer, chant, bell, or moment of silence. Do not start eating until everyone else does. Watch and follow. If a blessing is said, you do not need to participate verbally -- sitting quietly with your hands in your lap or folded is perfectly appropriate regardless of your beliefs.",
  },
  {
    custom: "Eat what is offered",
    detail:
      "Monastery meals are simple and nutritious, usually vegetarian. Take what is served without complaint. If you have genuine dietary restrictions or allergies, communicate these when you arrive or in advance -- most kitchens can accommodate basic needs. But requesting special meals because of preference (not medical necessity) is generally inappropriate. Gratitude for simple food is part of the practice.",
  },
  {
    custom: "Eat silently or with minimal conversation",
    detail:
      "Many monasteries observe silence during meals, especially breakfast and lunch. Even those that allow conversation at dinner tend to keep it quiet and mindful. Follow the room's energy. If others are silent, be silent. If quiet conversation begins, you can participate gently. Never talk over others or dominate meal conversation.",
  },
  {
    custom: "Finish everything on your plate",
    detail:
      "Wasting food is considered disrespectful in virtually every monastic tradition. Take small portions and go back for seconds if available. In many Buddhist monasteries, you are expected to eat every grain of rice. This is not about hunger -- it is about appreciating the effort and resources that went into the meal.",
  },
  {
    custom: "Clean up after yourself",
    detail:
      "Wash your dishes, wipe your place, return everything to where it belongs. In many monasteries, dish washing is a communal and meditative activity. Do your part without being asked. Leaving a mess for others to clean contradicts the community ethic that monastic life is built on.",
  },
];

const silenceRules = [
  {
    rule: "Observe the silence periods",
    detail:
      "Most monasteries have designated silence times -- often from evening until after breakfast, and sometimes during the full day. These are not suggestions. Even if you do not understand the reason, respect the practice. Silence in a monastery is not emptiness; it is the primary container for contemplative life. Your talking, even whispered, disrupts that container for everyone.",
  },
  {
    rule: "Reduce incidental noise",
    detail:
      "Close doors gently. Walk softly. Do not rustle through bags during meditation or services. Silence means more than not speaking -- it means minimizing the sound of your presence. This extends to alarm clocks (use vibrating ones), zippers, and even the sound of writing. Be conscious of how much noise a human body makes when it is not trying to be quiet.",
  },
  {
    rule: "Do not use silence periods for reading or work",
    detail:
      "Silence is not free time with no talking. It is contemplative space. Using it to read novels, write emails (even if your phone is technically off), or plan your week works against the purpose. Sit, walk, rest, pray, or meditate. The discomfort of having nothing to do is part of the experience.",
  },
];

const religiousServices = [
  {
    topic: "Attendance expectations",
    detail:
      "Some monasteries expect guests to attend at least some daily services (matins, vespers, morning chanting, etc.). Others make attendance entirely optional. Check the retreat description or ask at arrival. Even if you are not religious, attending a service or two can be a profoundly beautiful experience -- the chanting, the ritual, the age of the practice. You do not need to participate actively; sitting respectfully is sufficient.",
  },
  {
    topic: "How to participate (or not)",
    detail:
      "If you attend a service, follow the lead of the community. Stand when they stand, sit when they sit. You do not need to sing, chant, bow, or pray. Sitting quietly with an attitude of respect is always appropriate. If there is a communion, eucharist, or equivalent, do not participate unless explicitly invited. Some traditions welcome outsiders; others restrict participation to members. When in doubt, remain seated.",
  },
  {
    topic: "Sacred spaces",
    detail:
      "Temples, chapels, shrines, and meditation halls are sacred spaces. Do not photograph them without permission. Do not touch altar items, statues, or religious objects. Do not point your feet toward altars or sacred images (important in Buddhist and Hindu traditions). Remove hats in Christian churches. These spaces hold deep meaning for the community -- treat them with the same care you would want for something precious to you.",
  },
];

const electronics = [
  {
    rule: "Phones should be off, not silent",
    detail:
      "Silent mode still means you are checking your phone. Most monasteries ask that phones be turned off and kept in your room. Some have designated phone areas or times. Respect whatever the policy is. If you need to be reachable for a genuine emergency, inform the office and give them a contact number -- they will find you if needed.",
  },
  {
    rule: "No photography without permission",
    detail:
      "Ask before photographing anything -- buildings, grounds, residents, religious objects, food. Many monasteries prohibit photography entirely in certain areas. Never photograph monks, nuns, or other residents without explicit permission. Their faces, their practice, and their home are not content for your social media.",
  },
  {
    rule: "Laptops and tablets",
    detail:
      "Leave them in the car or at home. A monastery retreat is not a working retreat. The sound of typing, the glow of screens, and the energy of digital work are fundamentally incompatible with contemplative space. If you must bring a device for travel, keep it out of sight and off for the duration of your stay.",
  },
];

const tippingAndDonations = [
  {
    topic: "Donation-based stays",
    detail:
      "Many monasteries operate on a dana (generosity) model, where no fixed price is charged and guests donate what they can. This is not 'free.' The monastery has real costs -- food, maintenance, utilities. A fair donation reflects what you can genuinely afford. If you can afford $50-100 per night, that is appropriate. If you can afford $20, that is also accepted with gratitude. If you truly cannot afford anything, your presence is still welcome. But be honest with yourself about your means.",
  },
  {
    topic: "Tipping staff and monastics",
    detail:
      "Do not tip monastics (monks, nuns, brothers, sisters). In most traditions, they have taken vows that include renouncing personal wealth. Offering money directly to a monastic is inappropriate and can be embarrassing. If the monastery has lay staff (kitchen workers, groundskeepers), a small tip may be appropriate -- ask the guest coordinator. The best way to show appreciation is a donation to the community fund.",
  },
  {
    topic: "Leaving a donation",
    detail:
      "Most monasteries have a donation box or a process for making contributions. Cash is usually preferred. If you are staying for multiple days, donating at the end of your stay is typical. Some traditions have specific giving customs -- in Theravada Buddhist monasteries, offering food to monks in the morning is a common practice for lay supporters.",
  },
];

const commonMistakes = [
  "Treating it like a hotel -- requesting special services, complaining about simplicity, expecting concierge-level attention.",
  "Trying to start deep spiritual conversations with monastics when they are clearly busy or observing silence.",
  "Photographing everything without asking, especially during services or in sacred spaces.",
  "Bringing and consuming alcohol or recreational substances on monastery grounds.",
  "Ignoring posted rules because you think they do not apply to guests.",
  "Leaving your personal belongings in shared spaces.",
  "Playing music, even through headphones, in common areas.",
  "Arriving late to services or meals that you have committed to attending.",
];

export default function MonasteryEtiquettePage() {
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
              Monastery Etiquette
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <img src={guideImages["monastery-etiquette"]} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900/80 via-warm-800/60 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            Etiquette Guide
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 leading-[1.1]">
            Monastery Retreat<br className="hidden sm:block" /> Etiquette
          </h1>
          <p className="text-lg md:text-xl text-warm-100 leading-relaxed max-w-xl mx-auto">
            A gentle, practical guide to being a respectful guest in someone
            else&rsquo;s sacred space. You do not need to be religious. You just
            need to be considerate.
          </p>
        </div>
      </section>

      {/* General principles */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Three guiding principles
          </h2>
          <div className="space-y-6">
            {generalPrinciples.map((item, i) => (
              <div key={i}>
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.principle}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress code */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            What to wear
          </h2>
          <div className="space-y-4">
            {dressCode.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-warm-200/60"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.guideline}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meals */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Meal customs
          </h2>
          <div className="space-y-4">
            {mealCustoms.map((item, i) => (
              <div
                key={i}
                className="bg-sage-50/50 rounded-2xl p-6 border border-sage-100/80"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.custom}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Silence */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Silence rules
          </h2>
          <div className="space-y-4">
            {silenceRules.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-warm-200/60"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.rule}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Religious services */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Religious services
          </h2>
          <div className="space-y-6">
            {religiousServices.map((item, i) => (
              <div key={i}>
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.topic}
                </h3>
                <p className="text-sage-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electronics */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Electronics
          </h2>
          <div className="space-y-4">
            {electronics.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-warm-200/60"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.rule}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipping */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Tipping and donations
          </h2>
          <div className="space-y-6">
            {tippingAndDonations.map((item, i) => (
              <div key={i}>
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.topic}
                </h3>
                <p className="text-sage-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Common mistakes
          </h2>
          <div className="space-y-3">
            {commonMistakes.map((mistake, i) => (
              <div
                key={i}
                className="flex gap-3 items-start p-4 bg-rose-50/40 rounded-xl border border-rose-100/60"
              >
                <svg
                  className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sage-600 text-sm leading-relaxed">
                  {mistake}
                </span>
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
              You are welcome here
            </h2>
            <div className="space-y-4 text-sage-600 leading-relaxed">
              <p>
                Monasteries have been hosting guests for centuries. Hospitality
                is central to most monastic traditions. You do not need to be
                perfect. You do not need to know everything in advance.
              </p>
              <p>
                Approach the experience with humility, curiosity, and basic
                consideration, and you will be fine. The monks, nuns, and
                brothers who maintain these spaces have seen every kind of guest.
                Your sincerity matters more than your knowledge of the rules.
              </p>
              <p className="font-serif text-sage-800 italic">
                Come as you are. Leave a little quieter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Find monastery retreats
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/under-500"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              Under $500 Retreats
            </Link>
            <Link
              href="/guides/what-to-pack"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              What to Pack
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
            headline: "Monastery Retreat Etiquette -- A Gentle Guide",
            description:
              "A practical guide to monastery retreat etiquette covering dress code, meal customs, silence, religious services, electronics, and donations.",
            url: "https://cheapretreats.com/guides/monastery-etiquette",
            publisher: {
              "@type": "Organization",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://cheapretreats.com/guides/monastery-etiquette",
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
            name: "How to Be a Respectful Guest at a Monastery Retreat",
            description:
              "Step-by-step guide to etiquette and customs at monastery retreats.",
            step: [
              {
                "@type": "HowToStep",
                name: "Dress appropriately",
                text: "Cover shoulders and knees, wear neutral colors, remove shoes where indicated, bring a head covering, and avoid strong fragrances.",
              },
              {
                "@type": "HowToStep",
                name: "Follow meal customs",
                text: "Wait for the signal to eat, eat what is offered with gratitude, observe silence during meals, finish everything on your plate, and clean up after yourself.",
              },
              {
                "@type": "HowToStep",
                name: "Respect silence",
                text: "Observe designated silence periods, minimize incidental noise, and use silence for contemplation rather than reading or work.",
              },
              {
                "@type": "HowToStep",
                name: "Navigate religious services",
                text: "Attend services if expected, follow the community's lead for standing and sitting, sit respectfully if you choose not to participate actively.",
              },
              {
                "@type": "HowToStep",
                name: "Manage electronics",
                text: "Turn phones off rather than silent, ask before photographing anything, and leave laptops in your car or at home.",
              },
              {
                "@type": "HowToStep",
                name: "Handle donations",
                text: "Donate generously according to your means, do not tip monastics directly, and use the community donation box or designated process.",
              },
            ],
          }),
        }}
      />
    </>
  );
}
