import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Common Questions About Affordable Healing Retreats",
  description:
    "Answers to common questions about CheapRetreats, affordable healing retreats, safety, what to expect, pricing, work exchange, and how to choose the right retreat.",
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
        q: "What if I need to leave early?",
        a: "You can always leave. A good retreat will tell you this explicitly. Before booking, check the retreat's refund and cancellation policy — we list these transparently. If a retreat makes you feel like you can't leave, that's a red flag.",
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
];

export default function FAQPage() {
  const allQuestions = faqs.flatMap((cat) => cat.questions);

  return (
    <>
      <section className="bg-gradient-to-b from-warm-100/40 to-warm-50 py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
