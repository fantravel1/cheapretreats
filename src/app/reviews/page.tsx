import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Honest Retreat Reviews — What Was Hard, What Helped, What Surprised Me",
  description:
    "Real retreat reviews from real people. Not testimonials — honest accounts including what was hard, who it's not for, and what surprised people.",
  alternates: { canonical: "https://cheapretreats.com/reviews" },
};

const reviews = [
  {
    name: "Sarah M.",
    retreat: "Mountain Silence Retreat Center",
    location: "Blue Ridge Mountains, NC",
    need: "Burnout",
    stayed: "4 nights",
    rating: "Would return",
    whatHelped: "The complete absence of a schedule. Nobody expected anything from me. I slept 12 hours the first day and didn't feel guilty about it. The meals appeared at regular times and that was the only structure.",
    whatWasHard: "The second day was brutal. Without distraction, all the anxiety I'd been outrunning caught up. I cried in my room for two hours. But nobody knocked on my door or tried to fix it.",
    whoItsNotFor: "If you need a lot of social interaction to feel safe, this might feel isolating. It's very quiet. That's the point, but it's not for everyone.",
    whatSurprised: "How quickly my body started sleeping normally once I stopped looking at screens. By day three I was falling asleep at 9pm and waking up with the light.",
    wishIdKnown: "Bring a flashlight. The paths aren't well-lit at night.",
  },
  {
    name: "James R.",
    retreat: "Plum Village Practice Center",
    location: "Dordogne, France",
    need: "Grief",
    stayed: "7 nights",
    rating: "Life-changing (genuinely)",
    whatHelped: "Eating in silence with 200 other people and realizing I wasn't alone. The walking meditation. The monks' complete lack of urgency about anything.",
    whatWasHard: "The communal living. Shared rooms with strangers. The 5:30am wake-up bell. The food was simple and sometimes repetitive. I missed coffee (they don't serve it).",
    whoItsNotFor: "People who need privacy. People who aren't open to Buddhist-inspired practices (though nothing is forced). People who need caffeine to function.",
    whatSurprised: "That the working meditation — washing dishes, cleaning toilets — was where I cried the most. Something about doing simple physical tasks broke something open.",
    wishIdKnown: "Bring layers. The meditation hall is cold in the morning. And the donation at the end is genuinely voluntary — don't stress about it.",
  },
  {
    name: "Kim L.",
    retreat: "Esalen Work-Scholar Program",
    location: "Big Sur, CA",
    need: "Career transition / burnout",
    stayed: "28 nights",
    rating: "Transformative but demanding",
    whatHelped: "The hot springs at 2am with nobody around. The community of other work-scholars who were all going through their own transitions. Getting physically tired from honest work.",
    whatWasHard: "The work is real. Dishwashing for 5 hours is not glamorous. Some of the workshops available to scholars were incredible; others felt like expensive wellness theater. The social dynamics could be cliquey.",
    whoItsNotFor: "People who can't do physical work. People who need immediate mental health support — this is a growth experience, not a treatment program. People who are uncomfortable with nudity (the hot springs are clothing-optional).",
    whatSurprised: "That I didn't miss my phone after the first week. That the hardest part wasn't the work — it was sitting with myself during the free time.",
    wishIdKnown: "Apply 6+ months early. Bring work clothes that can get dirty. The food is incredible but the schedule is strict.",
  },
  {
    name: "Andrea T.",
    retreat: "Gaia House",
    location: "Devon, England",
    need: "Anxiety / overwhelm",
    stayed: "5 nights",
    rating: "Deeply restful",
    whatHelped: "The teachers were warm without being performative. The bell that rang to bring you back to the present. The gardens. The permission to skip any session.",
    whatWasHard: "Sitting meditation for 45 minutes when my body wanted to run. The noble silence felt lonely at first. I had a low-level headache for two days (probably screen withdrawal).",
    whoItsNotFor: "People who need constant activity or stimulation. People who would find Buddhist chanting uncomfortable (it's a small part of the schedule). People with significant mobility issues — the center has stairs.",
    whatSurprised: "How much my body hurt from just sitting still. I didn't realize how tense I was until I stopped moving.",
    wishIdKnown: "The donation model means you genuinely pay what you can. I was anxious about this but they made it completely pressure-free. Bring comfortable sitting cushion covers.",
  },
  {
    name: "Marcus D.",
    retreat: "The Nothing Retreat",
    location: "Vermont",
    need: "I just needed to stop",
    stayed: "3 nights",
    rating: "Exactly what I needed",
    whatHelped: "Nothing. Literally nothing. There was no program, no facilitator, no group. Just a cabin, meals, and woods. I did absolutely nothing for three days and it was the most healing thing I've done in years.",
    whatWasHard: "The boredom. The first afternoon I almost left because I didn't know what to do with myself. I'm so conditioned to be productive that doing nothing felt physically uncomfortable.",
    whoItsNotFor: "People who need structure or guidance. People in acute crisis who need professional support. People who expect a 'retreat experience' — this is intentionally nothing.",
    whatSurprised: "That by day two, the boredom transformed into peace. My brain literally quieted down. I could hear birds. I could taste food. I didn't even know I'd lost those things.",
    wishIdKnown: "Bring a book but also be okay with not reading it. The cabin is basic — bring an extra blanket in winter.",
  },
  {
    name: "Priya K.",
    retreat: "Safe Ground Retreat",
    location: "Oregon",
    need: "Trauma recovery",
    stayed: "4 nights",
    rating: "Would recommend with caveats",
    whatHelped: "The facilitator explicitly stated 'you can leave any activity at any time, no questions asked' at the start. And they meant it. The somatic exercises were gentle. The group was small (8 people).",
    whatWasHard: "One participant shared something very intense during a circle and it triggered several of us. The facilitator handled it well but it was still hard. Some of the practices brought up body memories I wasn't expecting.",
    whoItsNotFor: "People who haven't done any therapeutic work on their trauma yet — this is a supplement, not a replacement. People who are easily triggered by others' trauma stories (group sharing is optional but happens).",
    whatSurprised: "That the most healing part was not the formal sessions but the informal conversations over tea with other participants who just... got it. No explaining needed.",
    wishIdKnown: "Bring grounding objects from home — a familiar blanket, a photo, something that smells like home. You might need them.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-warm-100/40 to-warm-50 py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Honest Reviews
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-2xl mx-auto">
            Not testimonials. Not &ldquo;this changed my life&rdquo; fluff. Real
            accounts from real people — including what was hard, who it&rsquo;s not
            for, and what surprised them.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {reviews.map((review, i) => (
              <article key={i} className="bg-warm-50/50 rounded-2xl p-6 md:p-8 border border-warm-200/60">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6 pb-5 border-b border-warm-200/40">
                  <div>
                    <div className="font-serif text-lg font-semibold text-sage-800">{review.name}</div>
                    <div className="text-sage-600 text-sm">{review.retreat}</div>
                    <div className="text-sage-500 text-sm">{review.location}</div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-sm text-sage-500">Need: <span className="text-sage-700 font-medium">{review.need}</span></div>
                    <div className="text-sm text-sage-500">Stayed: <span className="text-sage-700">{review.stayed}</span></div>
                    <div className="text-sm text-sage-700 font-medium mt-1">{review.rating}</div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-xs font-semibold text-sage-500 uppercase tracking-wider mb-2">What helped</h3>
                    <p className="text-sage-700 text-sm leading-relaxed">{review.whatHelped}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-rose-500 uppercase tracking-wider mb-2">What was hard</h3>
                    <p className="text-sage-700 text-sm leading-relaxed">{review.whatWasHard}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-warm-600 uppercase tracking-wider mb-2">Who it&rsquo;s not for</h3>
                    <p className="text-sage-700 text-sm leading-relaxed">{review.whoItsNotFor}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">What surprised me</h3>
                    <p className="text-sage-700 text-sm leading-relaxed">{review.whatSurprised}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-sage-500 uppercase tracking-wider mb-2">What I wish I&rsquo;d known</h3>
                    <p className="text-sage-700 text-sm leading-relaxed">{review.wishIdKnown}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            This is how trust is built.
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            We ask every reviewer the same five questions. No editing for
            positivity. No cherry-picking.
          </p>
          <Link href="/start-here" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
            Find Your Retreat
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Honest Retreat Reviews",
            description: "Real retreat reviews including what was hard, who it's not for, and what surprised people.",
            url: "https://cheapretreats.com/reviews",
          }),
        }}
      />
    </>
  );
}
