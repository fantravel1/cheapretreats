import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sliding Scale Pricing — How It Works at Healing Retreats",
  description:
    "What sliding scale pricing means, how to choose your level honestly, how to ask for a lower rate without shame, and why this model makes healing accessible to everyone.",
  alternates: {
    canonical: "https://cheapretreats.com/guides/sliding-scale-explained",
  },
};

const howItWorks = [
  {
    title: "The basic idea",
    content:
      "Sliding scale pricing means a retreat offers a range of prices for the same experience. Instead of one fixed price, you see something like '$400 - $800' and you choose where you fall within that range. Everyone gets the same room, the same meals, the same facilitators. The only thing that differs is what you pay.",
  },
  {
    title: "Why retreats use it",
    content:
      "Because healing should not be only for people who can afford full price. Sliding scale allows retreat centers to remain financially viable while making their programs accessible to a wider range of people. The people who pay at the higher end subsidize those who pay at the lower end. It is a form of community care built into the pricing model.",
  },
  {
    title: "How the math works",
    content:
      "Most retreat centers set their sliding scale around a 'sustaining rate' -- the price at which they break even on your participation. The bottom of the scale is usually at or slightly below this rate, meaning they absorb a small loss. The top of the scale is above it, generating surplus that covers the shortfall from lower-paying guests. The system only works if some people pay at the higher end. This is important to understand.",
  },
];

const choosingYourLevel = [
  {
    level: "Lower end of the scale",
    description: "You are living paycheck to paycheck, carrying debt, or have limited income from part-time work, disability, caregiving, or unemployment.",
    honest:
      "If paying the full price would mean not eating properly, skipping medications, or going into debt, the lower end is for you. That is exactly what it is there for. Do not feel guilty. The retreat center designed this price for your situation specifically.",
  },
  {
    level: "Middle of the scale",
    description: "You have stable employment and can meet your basic needs, but a full-price retreat would be a meaningful financial stretch.",
    honest:
      "The middle is the most common place to land, and it is a fair and honest choice for most working people. You are neither wealthy nor struggling, and the middle rate reflects that. Most retreat centers say the majority of their guests pay somewhere in the middle range.",
  },
  {
    level: "Higher end of the scale",
    description: "You have financial security, savings, stable income, and the full price would not create hardship.",
    honest:
      "Paying at the higher end is not a luxury tax or a guilt payment. It is a conscious choice to make this retreat possible for someone else. When you pay at the top of the scale, you are directly funding someone's ability to attend who otherwise could not. That is a real and tangible form of generosity.",
  },
];

const howToAsk = [
  {
    scenario: "The retreat lists a sliding scale but does not explain how to use it",
    approach:
      "Email them directly. Something like: 'I see you offer sliding scale pricing. I am interested in attending and would like to request the lower/middle rate. Is there anything you need from me?' Most centers will simply confirm. They do not usually require proof of income or a detailed explanation.",
  },
  {
    scenario: "You need a rate below the listed bottom of the scale",
    approach:
      "Ask. Many centers have additional flexibility beyond what is published. You can write: 'The lowest listed rate is still a stretch for me. Is there any additional accommodation available, such as a work-exchange option or a further reduced rate?' The worst they can say is no, and many will say yes.",
  },
  {
    scenario: "You feel embarrassed asking for a lower rate",
    approach:
      "Remember: the sliding scale exists specifically so that people like you can attend. You are not asking for charity. You are using a system that was designed with you in mind. Retreat centers that offer sliding scale expect and welcome people at every price point. If a center makes you feel ashamed for asking, that tells you something about the center, not about you.",
  },
  {
    scenario: "The retreat does not list a sliding scale",
    approach:
      "Ask anyway. Many retreats are open to negotiation even if they do not advertise it. A polite email explaining your situation and asking if any flexibility exists is always appropriate. Some centers have unpublished scholarship funds, work-exchange spots, or the ability to offer a reduced rate for a specific session that is not full.",
  },
];

const commonQuestions = [
  {
    q: "Will people know how much I paid?",
    a: "No. Sliding scale is always confidential. Other guests will not know your rate, and staff will not treat you differently. You get the same experience regardless of your price point.",
  },
  {
    q: "What if I pick the wrong level?",
    a: "There is no wrong level if you are being honest with yourself. If you can genuinely afford a higher rate and choose the lowest one to save money, that takes a spot from someone who needs it. If you stretch beyond your means to pay the highest rate out of guilt, you will spend the retreat stressed about money. Neither serves anyone. Honesty is the only rule.",
  },
  {
    q: "Do I need to provide proof of income?",
    a: "Almost never. The vast majority of sliding scale systems are honor-based. Retreat centers trust you to self-assess honestly. On rare occasions, a center may ask for a brief explanation of your circumstances, but this is uncommon and should never feel invasive.",
  },
  {
    q: "Is sliding scale the same as a scholarship?",
    a: "No. Sliding scale is a range of prices that anyone can access. Scholarships are separate funds -- often donated -- that cover part or all of the cost for specific applicants. Some centers offer both. If you need more support than the sliding scale provides, ask about scholarships specifically.",
  },
  {
    q: "Can I pay more later if my situation improves?",
    a: "Many centers welcome this, and some have specific 'pay it forward' programs. If a retreat was meaningful to you and your financial situation changes, reaching out to make an additional contribution is a beautiful thing. But it is never expected or required.",
  },
  {
    q: "What if I feel guilty paying less?",
    a: "Guilt about receiving support is common and worth examining, but it should not stop you from going. The sliding scale model works because it distributes cost according to ability. Your participation at a lower rate is not taking from someone else -- it is the system working as designed. Guilt about accessing care you need is often itself a symptom of the burnout or depletion that brought you to the retreat in the first place.",
  },
];

const alternatives = [
  {
    option: "Work exchange",
    description:
      "Stay for free in exchange for 4-5 hours of daily work -- cooking, cleaning, gardening, general maintenance. Your remaining time is your own for rest and retreat activities. This is not charity; it is a fair exchange of labor for access.",
    href: "/work-exchange",
  },
  {
    option: "Donation-based retreats",
    description:
      "Pay what you can, from $0 up. Common at Buddhist meditation centers and some yoga communities. These run on generosity and are a legitimate, shame-free way to access retreat experiences. Your donation, whatever its size, is genuinely appreciated.",
    href: "/community-run",
  },
  {
    option: "Scholarships",
    description:
      "Many retreat centers maintain scholarship funds for people who cannot afford any rate. Applications are usually simple -- a brief description of your situation and why you want to attend. Acceptance rates vary, but the funds exist specifically to be used.",
    href: "/scholarships",
  },
  {
    option: "Payment plans",
    description:
      "Some centers allow you to split the cost into monthly payments before your retreat. This does not reduce the total price but spreads it across several months, making it more manageable. Ask if this option is available when you book.",
    href: "/under-500",
  },
];

export default function SlidingScalePage() {
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
            <span className="text-sage-800 font-medium">Sliding Scale</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-100/40 to-warm-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 text-warm-700 rounded-full text-sm font-medium mb-8">
            Affordability Guide
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Sliding Scale Pricing
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            What it means, how to use it, and why you should never feel ashamed
            of choosing the rate that is right for you.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            How sliding scale works
          </h2>
          <div className="space-y-6">
            {howItWorks.map((item, i) => (
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

      {/* Choosing your level */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            How to choose your level honestly
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Most sliding scale systems offer three tiers. Here is a framework
            for placing yourself. No judgment. Just honesty.
          </p>
          <div className="space-y-6">
            {choosingYourLevel.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-warm-200/60"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.level}
                </h3>
                <p className="text-sage-500 text-sm mb-3 italic">
                  {item.description}
                </p>
                <p className="text-sage-600 leading-relaxed">{item.honest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to ask */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            How to ask (scripts you can actually use)
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Asking for a lower rate should not feel like begging. Here are real
            scenarios and language you can use.
          </p>
          <div className="space-y-6">
            {howToAsk.map((item, i) => (
              <div
                key={i}
                className="bg-sage-50/50 rounded-2xl p-6 border border-sage-100/80"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                  {item.scenario}
                </h3>
                <p className="text-sage-600 leading-relaxed">{item.approach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core message */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100/60">
            <h2 className="font-serif text-xl font-semibold text-sage-900 mb-4">
              The thing we most want you to hear
            </h2>
            <div className="space-y-4 text-sage-600 leading-relaxed">
              <p>
                Sliding scale is not a loophole, a hack, or a way to get
                something for less than it is worth. It is a deliberate design
                choice by retreat centers who believe that access to healing
                should not depend on your bank account.
              </p>
              <p>
                When you use a sliding scale at the rate that honestly reflects
                your situation, you are participating in the system exactly as it
                was intended. You are not taking from anyone. You are not getting
                away with something. You are receiving care at a price that
                reflects your reality, and that is the entire point.
              </p>
              <p className="font-serif text-sage-800 italic">
                Healing should not be a luxury good.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Common questions
          </h2>
          <div className="space-y-6">
            {commonQuestions.map((item, i) => (
              <div
                key={i}
                className="pb-6 border-b border-warm-100/60 last:border-0"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                  {item.q}
                </h3>
                <p className="text-sage-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other affordability options */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Other ways to make retreats affordable
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Sliding scale is one option. Here are others. They can often be
            combined.
          </p>
          <div className="space-y-4">
            {alternatives.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group block bg-white rounded-2xl p-6 border border-warm-200/60 hover:border-sage-300 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2 group-hover:text-sage-900">
                  {item.option}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Find retreats with sliding scale pricing
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/start-here"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              Find Your Retreat
            </Link>
            <Link
              href="/scholarships"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              Scholarships
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
            headline: "Sliding Scale Pricing at Healing Retreats -- How It Works",
            description:
              "A complete guide to understanding and using sliding scale pricing at healing retreats, including how to choose your level and how to ask.",
            url: "https://cheapretreats.com/guides/sliding-scale-explained",
            publisher: {
              "@type": "Organization",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://cheapretreats.com/guides/sliding-scale-explained",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: commonQuestions.map((faq) => ({
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
