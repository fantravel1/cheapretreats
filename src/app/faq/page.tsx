import type { Metadata } from "next";
import Link from "next/link";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "FAQ — Common Questions About Affordable Healing Retreats",
  description:
    "Answers to common questions about CheapRetreats, affordable healing retreats, safety, what to expect, pricing, work exchange, dietary needs, disabilities, traveling alone, and how to choose the right retreat.",
  alternates: { canonical: "https://cheapretreats.com/faq" },
};

const faqs = [
  {
    category: "About CheapRetreats",
    questions: [
      {
        q: "What is CheapRetreats?",
        a: "CheapRetreats is a global retreat discovery platform that helps people find affordable, safe, verified healing retreats. We organize retreats by what you actually need — burnout recovery, grief, quiet time, depression support — rather than by marketing category. Retreats start from $200, and we also list free options through work exchange and scholarships.",
      },
      {
        q: "Is CheapRetreats free to use?",
        a: "Yes. Browsing, searching, and reading all content on CheapRetreats is completely free. We earn a small commission when you book a retreat through our platform, but this never affects which retreats we recommend or how we rate them.",
      },
      {
        q: "Why is it called 'cheap'?",
        a: "We own the word. 'Cheap' here means fair-priced, honest, community-run, simple, and non-extractive. It's a rejection of the idea that healing needs to be expensive to be real. We don't apologize for it.",
      },
      {
        q: "Do you run the retreats yourselves?",
        a: "No. We are a discovery and vetting platform, not a retreat center. We research, verify, and organize retreat information so you can make an informed decision. The retreats themselves are run by independent centers, communities, monasteries, and facilitators. We hold them to our standards, but we don't operate them.",
      },
    ],
  },
  {
    category: "Safety & Trust",
    questions: [
      {
        q: "Are cheap retreats safe?",
        a: "Every retreat on CheapRetreats is scored using our No Bullshit Healing Index, which rates safety, consent culture, facilitator training, group size, trauma awareness, accessibility, and refund policies. Price and quality are not the same thing — many affordable retreats (especially monastery stays, nonprofit centers, and community-run spaces) have excellent safety records.",
      },
      {
        q: "What is the No Bullshit Healing Index?",
        a: "It's our proprietary scoring system that evaluates every retreat on what actually matters: safety, consent culture, facilitator qualifications, trauma awareness, price transparency, accessibility, and refund policies. Retreats that pass earn our 'Verified Safe & Real' badge.",
      },
      {
        q: "How do I know a retreat isn't a cult?",
        a: "We specifically screen for red flags: charismatic leaders who can't be questioned, required secrecy, pressure to sign up for more programs, shame-based language, and no ability to leave. If we find any of these, the retreat is not listed. Period. We also tag every retreat's spiritual orientation clearly: secular, spiritual-optional, religious, or trauma-informed.",
      },
      {
        q: "What happens if I have a bad experience at a listed retreat?",
        a: "We take this seriously. Email us at hello@cheapretreats.com with details and we will investigate. If a retreat violates our safety standards, we remove it from the platform. We also update our listing notes to warn future guests about specific issues. Your feedback directly protects other people.",
      },
    ],
  },
  {
    category: "Choosing a Retreat",
    questions: [
      {
        q: "How do I choose the right retreat?",
        a: "Start with what you need (burnout recovery, grief space, quiet, etc.), then set your budget, then consider preferences like location, spiritual orientation, and group size. Our Start Here page walks you through this step by step. If you're overwhelmed, the $1,000 Reset is our curated guide of top picks.",
      },
      {
        q: "I've never been on a retreat. Is that okay?",
        a: "Absolutely. Most people haven't. We have a complete First-Time Guide that covers what to expect, what won't happen, your boundaries, what to bring, and how to know if you're ready (spoiler: you don't need to be). Many retreats on our platform are specifically welcoming to first-timers.",
      },
      {
        q: "How far in advance should I book?",
        a: "It depends on the retreat. Popular monastery stays and work exchange programs can fill up 3-6 months ahead. Smaller independent centers often have availability within a few weeks. Donation-based retreats tend to be first-come, first-served. We note booking lead times on each listing so you can plan accordingly.",
      },
      {
        q: "Can I talk to someone who has been to a specific retreat before I book?",
        a: "Many of our listings include links to honest reviews from past participants. You can also check our Reviews page for detailed accounts. Some retreat centers have alumni networks or will connect you with a past guest if you ask. We encourage this — talking to someone who has actually been there is one of the best ways to decide.",
      },
    ],
  },
  {
    category: "Pricing & Affordability",
    questions: [
      {
        q: "How much does an affordable retreat cost?",
        a: "Retreats on CheapRetreats range from $0 (work exchange and donation-based) to under $1,000 for the total stay. Our Under $500 page has the most budget-friendly options. Prices always include accommodation and usually meals — we show total cost, not misleading per-night rates.",
      },
      {
        q: "I can't afford any retreat. What are my options?",
        a: "Many options exist: work exchange programs (stay free in exchange for a few hours of daily work), donation-based retreats (pay what you can), sliding-scale pricing (reduced rates based on your situation), and full scholarships. Check our Scholarships page and Work Exchange page for details.",
      },
      {
        q: "Are there hidden costs?",
        a: "Not on our platform. We show total cost upfront — accommodation, meals, program fees. If a retreat has additional costs (like transport to a remote location), we note that. Our radical price transparency policy means no bait-and-switch, no surprise upsells, no hidden fees.",
      },
    ],
  },
  {
    category: "Types of Retreats",
    questions: [
      {
        q: "What's a silent retreat?",
        a: "A retreat where participants maintain silence — no talking at meals, during activities, or in common areas. Some allow brief communication with staff. Silent retreats are powerful for people who are overstimulated, introverted, or exhausted by social performance. You don't need to meditate — many people just rest.",
      },
      {
        q: "What's a work exchange retreat?",
        a: "You stay at a retreat center for free in exchange for 4-6 hours of daily work — cooking, cleaning, gardening, maintenance. The rest of the time is yours. Many people find the physical work itself grounding and healing. It's not exploitation — it's a fair exchange that makes healing accessible.",
      },
      {
        q: "What's a trauma-sensitive retreat?",
        a: "A retreat where every detail is designed for people with trauma histories. Facilitators are trained, all activities have opt-outs, physical contact never happens without consent, and grounding tools are always available. These spaces prioritize your autonomy and safety above all else.",
      },
    ],
  },
  {
    category: "During Your Retreat",
    questions: [
      {
        q: "What if I want to leave early?",
        a: "You can always leave. A good retreat will tell you this explicitly on day one. Before booking, check the refund and cancellation policy — we list these transparently on every retreat page. Some centers offer partial refunds for early departures, others don't, but none should ever prevent you from leaving. If a retreat makes you feel trapped or guilts you for wanting to go, that is a red flag and you should contact us.",
      },
      {
        q: "What if I cry the entire time?",
        a: "That happens more often than you think, and it is completely normal. Retreats remove the distractions that keep difficult emotions at bay. Many participants cry on day one or two as their nervous system finally gets permission to release. Good facilitators will not rush to fix you, pathologize your tears, or make it about them. If you are concerned, choose a retreat tagged as trauma-informed — those spaces are designed to hold exactly this.",
      },
      {
        q: "What if I hate it and feel like I wasted my money?",
        a: "It is possible you will not enjoy every moment. Retreats are not vacations. Discomfort, boredom, restlessness, and frustration are all common — especially in the first 24-48 hours. That said, if you feel genuinely unsafe, manipulated, or misled, that is different. Trust your gut. You can leave at any time, and you can report your experience to us. We also recommend checking refund policies before booking so you know your options.",
      },
      {
        q: "Can I use my phone during the retreat?",
        a: "It depends on the retreat. Some are phone-free or ask you to surrender devices at check-in. Others have designated phone zones or hours. Many simply request that you keep phones in your room and off during group activities. We tag each retreat's technology policy on its listing page. If being unreachable causes you serious anxiety, choose a retreat that allows limited phone access — there is no shame in that.",
      },
    ],
  },
  {
    category: "After Your Retreat",
    questions: [
      {
        q: "What are 'post-retreat blues' and are they normal?",
        a: "Very normal. Many people feel a dip — sadness, irritability, disorientation — in the days or weeks after returning home. You have been in a protected environment with intentional pacing, and now you are back in the noise. The contrast can be jarring. It does not mean the retreat failed. It means you experienced something real and your nervous system is readjusting. Be gentle with yourself. Avoid making major life decisions in the first week back.",
      },
      {
        q: "How do I maintain the benefits after I go home?",
        a: "The honest answer: you probably will not maintain all of them, and that is okay. The retreat is not a permanent fix — it is a reset. That said, some things help: keep one small practice from the retreat (even five minutes of morning stillness), reduce screen time for the first week back, journal about what you noticed during the retreat, and protect your reentry — do not schedule a packed week the day after you return. The goal is integration, not perfection.",
      },
      {
        q: "How soon should I go on another retreat?",
        a: "There is no formula. Some people go once and get what they needed. Others go annually as maintenance. A few go quarterly. We generally suggest waiting at least a month after your first retreat to let the experience settle before planning another. If you feel an urgent compulsion to immediately book another retreat, pause and ask yourself whether you are seeking healing or escaping your life. Both are valid, but they require different responses.",
      },
    ],
  },
  {
    category: "Specific Concerns",
    questions: [
      {
        q: "Can retreats accommodate dietary needs?",
        a: "Most can. Vegetarian and vegan meals are standard at the majority of retreat centers. For specific needs — gluten-free, halal, kosher, severe allergies — contact the retreat directly before booking. We note dietary accommodation details on each listing when available. Monastery stays and donation-based retreats tend to have simpler, less flexible menus, so ask in advance. Never assume — always confirm in writing.",
      },
      {
        q: "Are retreats accessible for people with disabilities?",
        a: "Some are and some are not, and we are honest about this. Many retreat centers are in older buildings, rural locations, or mountainous terrain that can present barriers. We tag accessibility information on each listing: wheelchair access, single-story accommodation, accessible bathrooms, proximity to medical facilities, and sensory considerations. If accessibility is a priority, filter by our accessibility tags or email us and we will help you find the right fit.",
      },
      {
        q: "Is it safe to travel alone to a retreat?",
        a: "Yes, and most people do. Solo travelers are the majority at most retreat centers. You will not be the only person who arrived alone. That said, standard travel safety applies: tell someone where you are going, share your itinerary, research the location, and trust your instincts. For remote retreats, check transport options in advance — some are hard to reach without a car. We flag retreats that are particularly welcoming and well-set-up for solo travelers.",
      },
      {
        q: "What if I don't speak the local language?",
        a: "Many retreats on our platform operate in English or offer English-speaking facilitators, even in non-English-speaking countries. We list the primary language on each retreat page. Silent retreats, by nature, require less verbal communication. For retreats in other languages, check whether translation is provided. Monastery stays often have multilingual communities. If language is a concern, filter by English-speaking retreats or contact the center directly to ask what support is available.",
      },
      {
        q: "Can I bring a friend or partner?",
        a: "Usually yes, but consider whether you should. Many people find that attending with someone they know changes the experience — you default to familiar dynamics instead of being fully present. Some retreats offer shared rooms for couples or friends. Others intentionally separate people who arrive together. If you are nervous about going alone, bringing someone can help, but know that the deepest work often happens when you do not have a social safety net. Check individual retreat policies on our listings.",
      },
    ],
  },
];

export default function FAQPage() {
  const allQuestions = faqs.flatMap((cat) => cat.questions);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-warm-100/40 to-warm-50 py-20 md:py-32">
        <img src={heroImages.faq} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50/90 via-warm-50/75 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Common Questions
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            Honest answers. No fluff. If your question isn&rsquo;t here, email us
            at hello@cheapretreats.com.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqs.map((category) => (
              <div key={category.category}>
                <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6 pb-3 border-b border-warm-200/60">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((faq, i) => (
                    <div key={i} className="pb-6 border-b border-warm-100/60 last:border-0">
                      <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-sage-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-sage-600 text-lg mb-8">
            Reach out at hello@cheapretreats.com — we respond to every message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-here" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Find Your Retreat
            </Link>
            <Link href="/first-time" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              First-Time Guide
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allQuestions.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
