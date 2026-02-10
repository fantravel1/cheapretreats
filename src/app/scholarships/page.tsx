import type { Metadata } from "next";
import Link from "next/link";
import { retreats } from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";

export const metadata: Metadata = {
  title: "Retreat Scholarships — Free & Funded Healing Opportunities",
  description:
    "Can't afford a retreat? Many centers offer full or partial scholarships, sliding-scale pricing, and donation-based stays. Healing is not just for people with money.",
  alternates: { canonical: "https://cheapretreats.com/scholarships" },
};

const fundingTypes = [
  {
    title: "Full Scholarships",
    description: "Complete funding for your retreat stay — room, meals, and program fees covered by the center or sponsors. Some even cover travel costs.",
    availability: "Limited — apply 2-3 months ahead",
  },
  {
    title: "Partial Scholarships",
    description: "50-80% of costs covered. You pay a small portion. Many centers reserve these for BIPOC, LGBTQ+, disabled, and low-income applicants.",
    availability: "More widely available",
  },
  {
    title: "Sliding Scale",
    description: "Pay what you can honestly afford. No proof of income needed at most centers. Based on the honor system.",
    availability: "Common at nonprofit centers",
  },
  {
    title: "Donation-Based",
    description: "Pay whatever feels right after your stay. Some centers run entirely on donations — no minimum, no judgment.",
    availability: "Available year-round",
  },
  {
    title: "Sponsored Seats",
    description: "Companies, foundations, or individuals fund specific seats for particular populations — veterans, caregivers, frontline workers, teachers, or people in recovery. You apply through the sponsoring organization or the retreat center.",
    availability: "Varies by sponsor — check center websites",
  },
  {
    title: "Community Funds",
    description: "Grassroots scholarship pools funded by retreat alumni and community members. Past guests who benefited from affordable access donate so that future guests can too. A beautiful cycle of generosity.",
    availability: "Growing — more centers launching these each year",
  },
];

const applicationQuestions = [
  {
    question: "Why do you want to attend this retreat?",
    guidance: "Be specific and honest. You don't need a dramatic story — just the truth. \"I've been caregiving for my mother for three years and haven't had a break\" is more compelling than vague statements about \"wanting to grow.\" Centers want to know that you've thought about why this particular retreat matters to you right now.",
  },
  {
    question: "Please describe your financial situation briefly.",
    guidance: "You don't need to share exact numbers or prove hardship. A sentence or two is enough: \"I'm a freelance artist with inconsistent income and no savings\" or \"I'm between jobs after a layoff\" or \"I'm a single parent on a teacher's salary.\" Centers are not judging you — they're trying to allocate limited resources fairly.",
  },
  {
    question: "What do you hope to take home from this experience?",
    guidance: "This is where you show that you're coming with intention, not just looking for a free vacation. It's okay if your answer is simple: \"I want to sleep for a week\" or \"I want to learn to sit still\" or \"I need to grieve my partner in a safe place.\" Authenticity matters more than eloquence.",
  },
  {
    question: "Is there anything else you'd like us to know?",
    guidance: "This is optional, and it's fine to leave it brief or blank. But if there's context that helps — a disability, a trauma history, a specific reason you chose this center — this is the place to share it. Some people mention that they'd be willing to do work exchange for part of their stay, which can strengthen an application.",
  },
];

const successStories = [
  {
    name: "Tomoko",
    age: 38,
    background: "Elementary school teacher, single mother of two",
    story: "I had been running on empty for years — teaching all day, parenting all evening, never sleeping enough. I found a meditation center that offered full scholarships for educators. I almost didn't apply because I felt guilty taking something for free when other people probably needed it more. My therapist convinced me to try. I wrote two paragraphs about why I needed rest, and they accepted me within a week. I spent five days in silence in the mountains. I didn't have a breakthrough — I just slept, ate, and cried a little. When I came home, I was still tired. But something had shifted. I knew rest was possible, and I knew I deserved it.",
    scholarship: "Full scholarship through an educator wellness fund",
  },
  {
    name: "Marcus",
    age: 52,
    background: "Retired veteran, living with PTSD",
    story: "After twenty years in the military and two deployments, I was a mess. The VA was helpful but limited. A buddy told me about a retreat in Montana that was fully funded for veterans. I was skeptical — I figured it would be some new-age thing that wasn't for me. It turned out to be a ranch with horses, hiking, and a small group of other vets. No one tried to fix us. We just spent a week together in the mountains, talking when we wanted to and being quiet when we didn't. I went back twice. The second time, I brought my wife. She said it was the first time she'd seen me relaxed in a decade.",
    scholarship: "Fully funded veterans' retreat program",
  },
  {
    name: "Lina",
    age: 27,
    background: "Graduate student, first-generation immigrant",
    story: "I was writing my dissertation on intergenerational trauma while experiencing it. I couldn't afford therapy, let alone a retreat. I found a Buddhist meditation center that offered sliding-scale sits and partial scholarships for their longer retreats. I applied for a 10-day silent retreat and was offered a 75% scholarship — I paid $120 for what normally costs $500. Those ten days were brutal and beautiful. Sitting with my own mind for that long showed me patterns I'd been running from my whole life. I didn't finish my dissertation faster. But I finished it differently — with more honesty and less fear.",
    scholarship: "75% partial scholarship at a meditation center",
  },
];

const organizationTypes = [
  {
    type: "Mental Health Nonprofits",
    description: "Organizations like the National Alliance on Mental Illness (NAMI) and local mental health coalitions sometimes fund retreat stays as part of recovery support programs. Ask your therapist or case manager if they know of any in your area.",
  },
  {
    type: "Veterans Organizations",
    description: "Several organizations fund retreat experiences specifically for veterans and active-duty service members. Programs range from wilderness therapy to meditation retreats to equine-assisted healing. Many are fully funded including travel.",
  },
  {
    type: "Caregiver Support Groups",
    description: "National and local caregiver organizations occasionally offer respite grants that can be used for retreat stays. The Caregiver Action Network and local Area Agencies on Aging are good starting points.",
  },
  {
    type: "Faith-Based Organizations",
    description: "Churches, synagogues, mosques, and sanghas often have discretionary funds that can be used to send members on retreat. Don't be afraid to ask your faith community's leadership — many have budgets specifically for this.",
  },
  {
    type: "Employee Assistance Programs (EAPs)",
    description: "Some progressive employers offer wellness stipends or EAP benefits that can cover retreat stays. Check with your HR department — the benefit may exist even if it's not well-publicized.",
  },
  {
    type: "Recovery & Addiction Support",
    description: "Organizations supporting people in recovery from addiction sometimes fund meditation retreats, nature-based healing, or contemplative stays as part of long-term recovery support.",
  },
  {
    type: "Racial Justice & Identity-Based Funds",
    description: "A growing number of funds specifically support BIPOC, LGBTQ+, disabled, and other marginalized people in accessing healing spaces. These are often grassroots, community-funded, and found through social media or mutual aid networks.",
  },
  {
    type: "Professional Associations",
    description: "Associations for teachers, nurses, social workers, and other helping professionals sometimes offer wellness grants or retreat scholarships. Check your professional organization's member benefits — you might be surprised what's available.",
  },
];

export default function ScholarshipsPage() {
  const scholarshipRetreats = retreats.filter((r) => r.scholarship || r.slidingScale).sort((a, b) => a.price - b.price);

  return (
    <>
      <section className="bg-gradient-to-b from-rose-50/40 to-warm-50 py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Healing is not just for<br className="hidden sm:block" /> people with money.
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-2xl mx-auto">
            Many retreat centers offer scholarships, sliding-scale pricing, and
            donation-based stays. You don&rsquo;t need to prove you&rsquo;re
            &ldquo;poor enough.&rdquo; You just need to ask.
          </p>
        </div>
      </section>

      {/* Funding Types */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            Types of financial support
          </h2>
          <p className="text-sage-600 leading-relaxed mb-8 max-w-3xl">
            Financial support for retreat stays comes in many forms. Some are formal
            programs with applications; others are as simple as a conversation with the
            center&rsquo;s director. Here are the most common types.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fundingTypes.map((type) => (
              <div key={type.title} className="p-6 bg-sage-50/50 rounded-2xl border border-sage-100/80">
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">{type.title}</h3>
                <p className="text-sm text-sage-600 leading-relaxed mb-3">{type.description}</p>
                <span className="text-xs text-sage-500 italic">{type.availability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Application */}
      <section className="py-14 md:py-20 bg-rose-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            What a scholarship application looks like
          </h2>
          <p className="text-sage-600 leading-relaxed mb-8">
            If you&rsquo;ve never applied for a retreat scholarship, the process might
            feel intimidating. It shouldn&rsquo;t be. Most applications are short — just
            a few questions. Here&rsquo;s a typical example with guidance on how to
            answer each one.
          </p>
          <div className="space-y-6">
            {applicationQuestions.map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-sage-100/80">
                <div className="flex gap-3 items-start mb-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-100/70 flex items-center justify-center text-rose-700 font-semibold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-sage-800">
                    {item.question}
                  </h3>
                </div>
                <div className="ml-10 p-4 bg-sage-50/40 rounded-xl border border-sage-100/40">
                  <p className="text-sm text-sage-600 leading-relaxed">
                    <span className="font-semibold text-sage-700">How to answer:</span>{" "}
                    {item.guidance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            How to apply for a scholarship
          </h2>
          <div className="space-y-4 text-sage-600 leading-relaxed">
            <p>
              Most retreat scholarships involve a simple application — a few paragraphs about
              why you want to attend and your financial situation. Here are tips:
            </p>
            <ul className="space-y-3">
              {[
                "Be honest and brief — you don't need a sob story, just the truth",
                "Apply early — most scholarship deadlines are 2-3 months before the retreat",
                "Check the center's website first — many have a scholarship page with their own process",
                "It's okay to apply to multiple places — most centers expect this",
                "Don't feel shame — these programs exist because the centers believe in access",
                "If you don't hear back, follow up gently — applications sometimes fall through the cracks",
                "Mention any flexibility you have — being open to dates or willing to share a room can increase your chances",
                "If you have skills to offer, say so — some centers will combine a partial scholarship with work exchange",
                "Keep a copy of your application — you can reuse and adapt it for other centers",
                "Ask about payment plans as an alternative — some centers offer interest-free installments even if scholarship funds are depleted",
              ].map((tip, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-sage-400 font-medium">&mdash;</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            Success stories
          </h2>
          <p className="text-sage-600 leading-relaxed mb-8 max-w-3xl">
            Real people who received scholarships and what the experience meant to them.
            These stories are honest — not every retreat was transformative, but each one
            mattered.
          </p>
          <div className="space-y-6">
            {successStories.map((story, i) => (
              <div key={i} className="p-6 md:p-8 bg-sage-50/40 rounded-2xl border border-sage-100/60">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-sage-800">
                      {story.name}, {story.age}
                    </h3>
                    <p className="text-sm text-sage-500">{story.background}</p>
                  </div>
                  <span className="flex-shrink-0 px-3 py-1 bg-rose-50 text-rose-700 text-xs rounded-full font-medium">
                    {story.scholarship}
                  </span>
                </div>
                <p className="text-sage-700 leading-relaxed">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations That Fund Scholarships */}
      <section className="py-14 md:py-20 bg-rose-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            Organizations that fund retreat scholarships
          </h2>
          <p className="text-sage-600 leading-relaxed mb-8 max-w-3xl">
            Retreat centers aren&rsquo;t the only source of funding. Many outside
            organizations offer grants, stipends, or sponsored seats that can cover
            retreat costs. Here are the types of organizations worth exploring.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {organizationTypes.map((org) => (
              <div key={org.type} className="p-6 bg-white rounded-2xl border border-sage-100/80">
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">{org.type}</h3>
                <p className="text-sm text-sage-600 leading-relaxed">{org.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900">
              Retreats with financial support
            </h2>
            <span className="text-sm text-sage-500">{scholarshipRetreats.length} listings</span>
          </div>
          <div className="space-y-5">
            {scholarshipRetreats.map((retreat, i) => (
              <RetreatCard key={i} retreat={retreat} />
            ))}
          </div>
        </div>
      </section>

      {/* If You've Been Denied */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            If you&rsquo;ve been denied
          </h2>
          <div className="space-y-6 text-sage-700 leading-relaxed">
            <p>
              Getting a scholarship denial hurts — especially when you&rsquo;re already
              struggling. It can feel like confirmation of the lie that healing is not
              for people like you. It is. The denial is not about your worthiness. It is
              almost always about limited funds and high demand.
            </p>
            <p>
              Here&rsquo;s what to do next:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Apply elsewhere",
                  text: "Different centers have different funding cycles and criteria. A denial at one place says nothing about your chances at another. Cast a wide net.",
                },
                {
                  title: "Ask about alternatives",
                  text: "Reply to the denial and ask: \"Is there a work exchange option? A payment plan? A future cycle I can apply to?\" Many centers will find a way to help if you're willing to be flexible.",
                },
                {
                  title: "Try donation-based centers",
                  text: "Vipassana centers, many monasteries, and some ashrams operate entirely on donations. There is no application — you simply show up and give what you can, including nothing.",
                },
                {
                  title: "Look into work exchange",
                  text: "If you can contribute 4-6 hours of daily work, many retreat centers will host you for free. This is a different path to the same destination.",
                },
                {
                  title: "Start small and local",
                  text: "A day retreat, a weekend sitting group, a free meditation class at your local community center — these are not lesser experiences. Sometimes the most healing thing is what's closest to home.",
                },
                {
                  title: "Apply again next year",
                  text: "Many centers give priority to returning applicants. A denial this year is not a permanent no. Keep the relationship alive.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-xl border border-warm-200/60">
                  <span className="text-sage-400 font-semibold flex-shrink-0">&mdash;</span>
                  <div>
                    <span className="font-semibold text-sage-800">{item.title}:</span>{" "}
                    <span className="text-sage-600">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <p>
              Remember: the fact that you applied at all means you recognized your need
              for rest and took action. That takes courage. Don&rsquo;t let a form letter
              undo that.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            You deserve rest regardless of your bank account.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/work-exchange" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Work Exchange
            </Link>
            <Link href="/under-500" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              Under $500
            </Link>
            <Link href="/start-here" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              Start Here
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
