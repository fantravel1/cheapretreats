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
  {
    title: "Group Dynamics",
    description: "How facilitators handle interpersonal conflict, power imbalances between participants, and group pressure. Includes clear boundaries around unsolicited advice-giving and cross-talk policies.",
    weight: "Scored 1-10",
  },
  {
    title: "Follow-up Resources",
    description: "Whether the retreat provides after-retreat support such as integration guides, recommended therapists, follow-up check-ins, or online community access for alumni.",
    weight: "Scored 1-10",
  },
  {
    title: "Environmental Ethics",
    description: "Sustainability practices including waste management, energy sourcing, local sourcing of food, and minimal ecological footprint on surrounding land and communities.",
    weight: "Scored 1-10",
  },
  {
    title: "Cultural Sensitivity",
    description: "Respect for indigenous and traditional practices. Proper attribution of lineage. No appropriation of sacred ceremonies for commercial purposes. Fair compensation for local teachers.",
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
  "No clear emergency procedures or evacuation plans on site",
  "Staff without relevant credentials presenting themselves as therapists or medical professionals",
  "Pressure to stop taking prescribed medication or abandon ongoing treatment plans",
  "Required donation amounts disguised as 'suggested' contributions that are socially enforced",
];

const verificationSteps = [
  {
    step: "01",
    title: "Application",
    description:
      "Retreat operators submit a detailed application covering their practices, pricing structure, staff qualifications, safety protocols, and philosophy. We also accept nominations from retreat-goers who had a genuinely good experience at an affordable center. Every application is read by a real person — not filtered by an algorithm.",
  },
  {
    step: "02",
    title: "Research",
    description:
      "We independently research the retreat's history, online presence, reviews across multiple platforms, legal standing, and any reported incidents. We check for lawsuits, complaints filed with consumer protection agencies, and patterns of negative feedback. We also verify that pricing advertised matches what participants actually pay.",
  },
  {
    step: "03",
    title: "On-site Evaluation",
    description:
      "For retreats that pass initial screening, we conduct an on-site evaluation — either through a trained reviewer attending as a participant or through a detailed video walkthrough with the retreat operator. We assess the physical space, talk to staff, review emergency protocols in person, and observe the general atmosphere. This step is non-negotiable.",
  },
  {
    step: "04",
    title: "Ongoing Monitoring",
    description:
      "Verification is not a one-time event. We collect ongoing feedback from retreat-goers, conduct periodic re-evaluations, and require retreats to report any significant changes to their operations (new staff, pricing changes, facility changes). A retreat can lose its verified status at any time if standards slip or if we receive credible safety reports.",
  },
];

const scoreExamples = [
  {
    name: "Mountain Stillness Center",
    location: "Northern Thailand",
    score: "92/100",
    status: "Verified",
    statusColor: "bg-sage-100 text-sage-700",
    summary:
      "This small meditation center scored exceptionally across all categories. Strong consent culture with explicit opt-in forms for every activity. Two trained nurses on staff. Clear emergency evacuation route posted in three languages. Transparent pricing with no hidden fees. Excellent follow-up resources including a free alumni integration circle. Lost a few points on physical accessibility (hillside location with stairs) and group size (occasionally runs slightly above optimal ratio during peak season).",
  },
  {
    name: "Coastal Healing Collective",
    location: "Portugal",
    score: "74/100",
    status: "Verified (conditional)",
    statusColor: "bg-warm-100 text-warm-700",
    summary:
      "A community-run retreat with genuine heart but some gaps. Strong trauma awareness and excellent facilitator credentials. Good consent practices. Lost points on refund policies (14-day window is shorter than we prefer), follow-up resources (limited to an email check-in), and environmental ethics (still transitioning away from single-use plastics). Given conditional status with a 6-month improvement plan. We work with retreats like this rather than rejecting them outright, because the core safety practices are solid.",
  },
  {
    name: "Awakening Journey Institute",
    location: "Central America",
    score: "31/100",
    status: "Rejected",
    statusColor: "bg-rose-100 text-rose-700",
    summary:
      "Failed multiple essential criteria. The founder — who has no formal training in psychology, therapy, or bodywork — personally leads all sessions and discourages participants from questioning the methodology. Refund policy requires forfeiting 80% of fees for cancellations made even 60 days in advance. Multiple former participants reported pressure to enroll in a $3,000 'advanced awakening' program during the retreat. We also found that the 'suggested donation' model resulted in social shaming of those who paid less. This retreat will not be listed.",
  },
];

const testimonials = [
  {
    quote:
      "I have PTSD and I was terrified of going to a retreat where I might be triggered without support. The CheapRetreats verified badge was the reason I finally went. Everything they said about the consent practices and trauma awareness was accurate. I felt safe the entire time.",
    name: "Sarah M.",
    context: "Attended a verified retreat in Bali",
  },
  {
    quote:
      "As a queer person, I have had bad experiences at wellness spaces that claim to be inclusive but aren't. The verification process actually checks for this. The retreat I chose through CheapRetreats was the first time I felt genuinely welcome, not just tolerated.",
    name: "Jordan K.",
    context: "Attended a verified retreat in Portugal",
  },
  {
    quote:
      "I am a single parent on a tight budget. I needed to know that if something went wrong, I could leave and get a fair refund. The fact that CheapRetreats verifies refund policies and financial transparency gave me enough confidence to book. It was the best decision I have made in years.",
    name: "Maria T.",
    context: "Attended a verified retreat in Mexico",
  },
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

      {/* The Verification Process */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            The verification process
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10 max-w-2xl">
            We do not hand out badges. Every retreat that carries the CheapRetreats
            Verified mark has gone through a rigorous, multi-stage process designed
            to protect the people who need protection most.
          </p>
          <div className="space-y-6">
            {verificationSteps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col sm:flex-row gap-5 p-6 bg-sage-50/40 rounded-2xl border border-sage-100/70"
              >
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage-200/60 text-sage-700 font-display text-lg font-semibold">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sage-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring Criteria */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            What we score
          </h2>
          <p className="text-sage-600 leading-relaxed mb-8 max-w-2xl">
            Our scoring system has two tiers. &ldquo;Essential&rdquo; criteria are
            pass/fail — a retreat either meets them or it does not get listed.
            Scored criteria are rated 1&ndash;10 and contribute to the overall
            verification score.
          </p>
          <div className="space-y-4">
            {scoringCriteria.map((criteria) => (
              <div key={criteria.title} className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-xl border border-sage-100/80">
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

      {/* Score Examples */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Score examples
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10 max-w-2xl">
            To show how the scoring works in practice, here are three anonymized
            examples from recent evaluations. Names and some details have been
            changed, but the scores and reasoning are real.
          </p>
          <div className="space-y-6">
            {scoreExamples.map((example) => (
              <div
                key={example.name}
                className="p-6 md:p-8 bg-sage-50/30 rounded-2xl border border-sage-100/70"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <h3 className="font-serif text-lg font-semibold text-sage-800">
                    {example.name}
                  </h3>
                  <span className="text-sage-500 text-sm">{example.location}</span>
                  <div className="flex items-center gap-3 sm:ml-auto">
                    <span className="font-display text-xl font-semibold text-sage-800">
                      {example.score}
                    </span>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${example.statusColor}`}
                    >
                      {example.status}
                    </span>
                  </div>
                </div>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {example.summary}
                </p>
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

      {/* Testimonials */}
      <section className="py-14 md:py-20 bg-sage-50/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4 text-center">
            What retreat-goers say about verified retreats
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10 text-center max-w-2xl mx-auto">
            The point of verification is not a badge on a website. It is the
            feeling of safety that lets someone actually let go and heal.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-sage-100/70 flex flex-col"
              >
                <blockquote className="text-sage-700 text-sm leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-5 pt-4 border-t border-sage-100/60">
                  <p className="font-serif font-semibold text-sage-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-sage-500 text-xs mt-0.5">
                    {testimonial.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Retreat Operators */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            For retreat operators
          </h2>
          <p className="text-sage-600 leading-relaxed mb-6">
            If you run an affordable retreat and believe it meets our standards,
            we would like to hear from you. Here is what the application process
            looks like.
          </p>
          <div className="space-y-5 text-sage-600 leading-relaxed">
            <div className="p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
              <h3 className="font-serif font-semibold text-sage-800 mb-2">
                Who should apply
              </h3>
              <p className="text-sm">
                We list retreats that cost under $150/night (or operate on a
                donation/sliding-scale basis). You should have been operating for
                at least one year with a consistent track record. We welcome
                monasteries, ashrams, community-run centers, nonprofit retreat
                spaces, cooperatives, and independent facilitators with dedicated
                spaces.
              </p>
            </div>
            <div className="p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
              <h3 className="font-serif font-semibold text-sage-800 mb-2">
                What we need from you
              </h3>
              <p className="text-sm">
                A completed application form covering your safety protocols,
                staff qualifications, pricing structure, cancellation policies,
                consent practices, and a description of your programs. We also
                ask for references from at least three past participants and any
                relevant certifications or accreditations your staff hold.
              </p>
            </div>
            <div className="p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
              <h3 className="font-serif font-semibold text-sage-800 mb-2">
                What to expect
              </h3>
              <p className="text-sm">
                Initial review takes approximately 2&ndash;4 weeks. If your
                retreat passes initial screening, we will schedule an on-site or
                virtual evaluation. The full process from application to listing
                typically takes 6&ndash;10 weeks. There is no fee to apply or to
                be listed. We do not charge retreats for verification — ever.
              </p>
            </div>
            <div className="p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
              <h3 className="font-serif font-semibold text-sage-800 mb-2">
                If you do not pass
              </h3>
              <p className="text-sm">
                We provide detailed, constructive feedback explaining exactly
                which criteria were not met and what changes would be needed. Many
                retreats that initially receive a conditional or rejected status
                come back after making improvements and successfully earn
                verification. We are not here to gatekeep — we are here to raise
                the bar for everyone.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-warm-50 rounded-2xl border border-warm-200/60 text-center">
            <p className="text-sage-700 font-medium mb-2">
              Ready to apply?
            </p>
            <p className="text-sage-600 text-sm mb-4">
              Send your application or questions to:
            </p>
            <p className="font-serif text-lg font-semibold text-sage-800">
              verified@cheapretreats.com
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How does CheapRetreats verify retreats?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every retreat goes through a 4-step process: Application, Research, On-site Evaluation, and Ongoing Monitoring. We score retreats on 12 criteria including safety, consent culture, facilitator training, trauma awareness, group dynamics, cultural sensitivity, and more.",
                },
              },
              {
                "@type": "Question",
                name: "What red flags does CheapRetreats look for in retreats?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We watch for charismatic leaders who cannot be questioned, no refund policies, pressure to upsell, guaranteed healing claims, required secrecy, non-consensual physical contact, isolation from the outside world, shame-based language, lack of emergency procedures, unqualified staff, pressure to stop prescribed medication, and disguised required donations.",
                },
              },
              {
                "@type": "Question",
                name: "How can retreat operators apply for verification?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Retreat operators can apply by emailing verified@cheapretreats.com with details about their safety protocols, staff qualifications, pricing, and consent practices. The process takes 6-10 weeks and there is no fee to apply or be listed.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
