import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verified Safe & Real — The No Bullshit Healing Index",
  description:
    "Every retreat on CheapRetreats is scored on safety, consent culture, facilitator training, trauma awareness, and price transparency. Learn how our verification works.",
  alternates: { canonical: "https://cheapretreats.com/verified" },
};

const scoringCriteria = [
  {
    title: "Safety",
    description: "Emergency protocols, staff training, first aid availability, physical environment safety checks.",
    weight: "Essential",
  },
  {
    title: "Consent Culture",
    description: "Explicit opt-in for all activities. No surprise physical contact. No pressure to share personal information.",
    weight: "Essential",
  },
  {
    title: "Facilitator Training",
    description: "Verified credentials, relevant experience, ongoing professional development, supervision.",
    weight: "Scored 1-10",
  },
  {
    title: "Group Size",
    description: "Staff-to-participant ratio, maximum group sizes, availability of individual attention.",
    weight: "Scored 1-10",
  },
  {
    title: "Silence vs. Structure",
    description: "Clarity about how much structure to expect. Freedom to choose between guided and unguided time.",
    weight: "Scored 1-10",
  },
  {
    title: "Accessibility",
    description: "Physical accessibility, neurodivergent awareness, dietary accommodations, financial accessibility.",
    weight: "Scored 1-10",
  },
  {
    title: "Refund Policies",
    description: "Clear cancellation terms, reasonable refund windows, compassionate exceptions.",
    weight: "Scored 1-10",
  },
  {
    title: "Trauma Awareness",
    description: "Trauma-informed practices, grounding tools available, staff trained in de-escalation.",
    weight: "Essential",
  },
];

const redFlags = [
  "A charismatic leader who cannot be questioned",
  "No refund policy or extremely restrictive cancellation terms",
  "Pressure to sign up for advanced programs during the retreat",
  "Claims of guaranteed transformation or healing",
  "Required secrecy about what happens during the retreat",
  "Physical contact without explicit consent",
  "No way to leave or communicate with the outside world",
  "Shame-based language about illness, poverty, or lack of progress",
];

export default function VerifiedPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sage-100/50 to-warm-50 py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium mb-8">
            The No Bullshit Healing Index&trade;
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Verified Safe & Real
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-2xl mx-auto">
            Not vibes. Not aesthetics. Real safety metrics that protect vulnerable
            people seeking healing. Every retreat we list goes through this.
          </p>
        </div>
      </section>

      {/* Scoring Criteria */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
            What we score
          </h2>
          <div className="space-y-4">
            {scoringCriteria.map((criteria) => (
              <div key={criteria.title} className="flex flex-col sm:flex-row gap-4 p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
                <div className="sm:w-48 flex-shrink-0">
                  <h3 className="font-serif font-semibold text-sage-800">{criteria.title}</h3>
                  <span className={`text-xs font-medium mt-1 inline-block px-2 py-0.5 rounded-full ${criteria.weight === "Essential" ? "bg-sage-200 text-sage-700" : "bg-warm-100 text-warm-700"}`}>
                    {criteria.weight}
                  </span>
                </div>
                <p className="text-sage-600 text-sm leading-relaxed">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badge */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-warm-200/60 inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8 text-sage-500" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 1a11 11 0 100 22 11 11 0 000-22zm5.3 8.3a1 1 0 00-1.4-1.4L10 13.6 8.1 11.7a1 1 0 10-1.4 1.4l2.5 2.5a1 1 0 001.4 0l6.7-6.3z" />
              </svg>
              <span className="font-serif text-2xl font-semibold text-sage-800">
                CheapRetreats Verified
              </span>
            </div>
            <p className="text-sage-600 text-lg font-serif italic">Safe & Real</p>
            <p className="text-sage-500 text-sm mt-4 max-w-md mx-auto">
              This badge means a retreat has passed all essential safety criteria
              and scored well on our comprehensive evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Red flags we watch for
          </h2>
          <p className="text-sage-600 mb-8">
            If we find any of these, a retreat will not be listed — period.
          </p>
          <div className="space-y-3">
            {redFlags.map((flag, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-rose-50/50 rounded-xl border border-rose-100/60">
                <svg className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 111.4 1.4L11.4 10l4.3 4.3a1 1 0 01-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z" />
                </svg>
                <span className="text-sage-700 text-sm leading-relaxed">{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            This protects vulnerable people.
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            People seeking healing are often at their most vulnerable. Our
            verification exists to make sure that vulnerability is honored, not
            exploited.
          </p>
          <Link href="/start-here" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
            Browse Verified Retreats
          </Link>
        </div>
      </section>
    </>
  );
}
