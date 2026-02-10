import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Manifesto — Healing, Not Hustle",
  description:
    "CheapRetreats believes healing should not be a luxury good. Read our manifesto on anti-cult wellness, fair pricing, and why rest is a right — not a reward.",
  alternates: { canonical: "https://cheapretreats.com/manifesto" },
};

export default function ManifestoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-sage-100/50 to-warm-50 py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium mb-8">
            The Healing, Not Hustle Manifesto
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            You deserve rest
            <span className="block text-sage-500 mt-2 italic font-normal text-[0.85em]">
              even if you&rsquo;re broke.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            This is not a marketing pitch. This is a belief system.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="prose-custom mb-16">
            <p className="text-xl text-sage-700 leading-relaxed font-serif italic">
              Somewhere along the way, rest became a luxury product. Healing became
              an industry. And wellness became a competition to see who could spend
              the most money on self-improvement.
            </p>
            <p className="text-lg text-sage-600 leading-relaxed mt-6">
              CheapRetreats exists because we think that&rsquo;s broken.
            </p>
          </div>

          {/* What "Cheap" Means */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              What &ldquo;cheap&rdquo; means here
            </h2>
            <p className="text-sage-600 leading-relaxed mb-6">
              We own the word. We don&rsquo;t apologize for it. &ldquo;Cheap&rdquo;
              here means:
            </p>
            <div className="space-y-4">
              {[
                { word: "Fair-priced", meaning: "Not marked up to feel exclusive. Priced to be accessible." },
                { word: "Honest", meaning: "No hidden fees. No surprise upsells. What you see is what it costs." },
                { word: "Community-run", meaning: "Often operated by real people, cooperatives, or nonprofits — not venture-backed brands." },
                { word: "Simple", meaning: "No elaborate staging. No influencer aesthetics. Just a safe place to land." },
                { word: "Non-extractive", meaning: "Nobody profits from your pain. Nobody monetizes your vulnerability." },
              ].map((item) => (
                <div key={item.word} className="flex gap-4 p-4 bg-sage-50/60 rounded-xl border border-sage-100/80">
                  <span className="font-serif font-semibold text-sage-800 whitespace-nowrap">{item.word}</span>
                  <span className="text-sage-600 text-sm leading-relaxed">{item.meaning}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Wellness Industry Problem */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              The wellness industry problem
            </h2>
            <div className="space-y-5 text-sage-600 leading-relaxed">
              <p>
                The global wellness industry is valued at over $1.8 trillion. That
                number should tell you something. An enormous amount of money is being
                made from people who are suffering. And a significant portion of that
                money flows not toward genuine healing, but toward marketing, branding,
                and the careful packaging of rest as a status symbol. When a meditation
                retreat costs more than a month&rsquo;s rent, something has gone wrong.
                When &ldquo;self-care&rdquo; requires a credit card, the language has
                been hijacked.
              </p>
              <p>
                The wellness industry frequently exploits vulnerability. It uses shame
                as a sales tool &mdash; the quiet implication that if you can&rsquo;t
                afford the retreat, maybe you don&rsquo;t want healing badly enough.
                It repackages basic human needs (sleep, stillness, nature, community)
                as premium experiences and sells them back to exhausted people at a
                markup. It profits from the gap between what people need and what they
                can access. And it often targets the most vulnerable &mdash; the
                grieving, the burned out, the lonely &mdash; with promises that feel
                more like pressure than invitation.
              </p>
              <p>
                We are not anti-wellness. We are anti-exploitation. There are
                extraordinary facilitators, healers, and retreat spaces doing genuine,
                life-changing work at honest prices. They exist, and we want to help
                you find them. But we refuse to pretend the industry as a whole is
                benign. Too many people have been priced out of rest, shamed for
                needing help, or harmed by unregulated practitioners operating without
                oversight. That is the problem we are here to address.
              </p>
            </div>
          </div>

          {/* Hard Bans */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              What we will never do
            </h2>
            <p className="text-sage-600 leading-relaxed mb-6">
              These are not guidelines. These are hard bans. We will never list,
              promote, or tolerate:
            </p>
            <div className="space-y-3">
              {[
                "Influencer retreats — if the goal is content, not healing, it's not for us",
                "Pseudo-guru cult vibes — charismatic leaders with unchecked power over vulnerable people",
                "Luxury shame — making you feel broken for not being able to afford $5,000 retreats",
                "Productivity framing — rest as a 'strategy' to work harder later",
                "\"Transform in 3 days\" lies — real healing takes time, and anyone who says otherwise is selling something",
                "Coercive group dynamics — forced sharing circles, mandatory vulnerability, shame for opting out",
                "Unqualified trauma work — facilitators without training handling situations that require professional skill",
                "Financial predation — high-pressure upsells, non-refundable deposits for thousands of dollars, or payment plans designed to trap",
              ].map((ban, i) => (
                <div key={i} className="flex gap-3 items-start p-4 bg-rose-50/50 rounded-xl border border-rose-100/60">
                  <svg className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 111.4 1.4L11.4 10l4.3 4.3a1 1 0 01-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z" />
                  </svg>
                  <span className="text-sage-700 text-sm leading-relaxed">{ban}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What We Believe */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              What we believe
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { word: "Rest", desc: "is not laziness" },
                { word: "Grief", desc: "deserves space" },
                { word: "Slowness", desc: "is not weakness" },
                { word: "Safety", desc: "is non-negotiable" },
                { word: "Listening", desc: "heals more than advice" },
                { word: "Rebuilding", desc: "happens at your pace" },
                { word: "Autonomy", desc: "means you choose what you do" },
                { word: "Community", desc: "does not require performance" },
                { word: "Access", desc: "should not depend on income" },
              ].map((belief) => (
                <div key={belief.word} className="p-5 bg-sage-50/60 rounded-xl border border-sage-100/80 text-center">
                  <div className="font-serif text-xl font-semibold text-sage-800 mb-1">{belief.word}</div>
                  <div className="text-xs text-sage-500">{belief.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Retreats That Don't Call Themselves Retreats */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              Retreats that don&rsquo;t call themselves retreats
            </h2>
            <div className="space-y-5 text-sage-600 leading-relaxed">
              <p>
                Not everyone wants a &ldquo;retreat.&rdquo; The word itself can feel
                loaded &mdash; too spiritual, too soft, too much like admitting something
                you&rsquo;re not ready to admit. Some people need healing without the
                label. They need to go somewhere quiet and different, do something with
                their hands or their feet, and come back feeling a little more like
                themselves. That counts. That is enough.
              </p>
              <p>
                We list places that would never use the word &ldquo;retreat&rdquo; in
                their marketing but offer the same thing at their core: space to step
                out of your life for a few days and breathe.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                {
                  name: "Monastery stays",
                  desc: "Benedictine, Buddhist, or otherwise. Simple rooms, shared meals, a rhythm of silence. No belief required — just willingness to be quiet.",
                },
                {
                  name: "Farm stays",
                  desc: "Wake up early. Feed animals. Pull weeds. Get physically tired in a way that quiets the mind. Sleep deeply. Repeat.",
                },
                {
                  name: "Art residencies for non-artists",
                  desc: "Some residencies welcome people who simply need space and time. You don't need a portfolio. You need a room and some unstructured days.",
                },
                {
                  name: "Volunteer-light stays",
                  desc: "Help for a few hours a day — cooking, cleaning, gardening — in exchange for a bed and meals. Structure without pressure. Purpose without performance.",
                },
                {
                  name: "Silent guesthouses",
                  desc: "Small places in quiet towns that operate on a culture of silence. Not enforced, just understood. No program, no facilitator. Just a quiet room.",
                },
                {
                  name: "Walking pilgrimages",
                  desc: "The Camino de Santiago. The Kumano Kodo. Shikoku. You walk. You carry what you need. The rhythm of walking does something that sitting still cannot.",
                },
              ].map((place) => (
                <div key={place.name} className="p-5 bg-warm-50 rounded-xl border border-warm-200/60">
                  <h3 className="font-serif font-semibold text-sage-800 mb-2">{place.name}</h3>
                  <p className="text-sm text-sage-600 leading-relaxed">{place.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sage-600 leading-relaxed mt-6">
              If the word &ldquo;retreat&rdquo; makes you flinch, ignore it. Call it a
              trip. Call it time away. Call it nothing at all. The point is that you go
              somewhere different, and you give yourself permission to not be productive
              while you&rsquo;re there.
            </p>
          </div>

          {/* What We Mean by "Safe" */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              What we mean by &ldquo;safe&rdquo;
            </h2>
            <div className="space-y-5 text-sage-600 leading-relaxed">
              <p>
                We use the word &ldquo;safe&rdquo; a lot on this site, and we want to
                be specific about what we mean. Safety is not a vibe. It is not a
                feeling conjured by candles and soft music. It is a set of concrete,
                verifiable practices that a retreat either has or doesn&rsquo;t.
              </p>
              <p>
                When we say a retreat is safe, we mean it meets a baseline standard. Not
                perfection &mdash; but a genuine, demonstrable commitment to not causing
                harm.
              </p>
            </div>
            <div className="space-y-4 mt-8">
              {[
                {
                  title: "Consent culture",
                  desc: "Every activity is opt-in. You are never pressured to participate in anything — not group sharing, not breathwork, not bodywork, not ceremony. 'No' is a complete sentence, and facilitators model this.",
                },
                {
                  title: "Facilitator training",
                  desc: "The people leading sessions have relevant qualifications. If someone is facilitating trauma work, they have trauma training. If someone is leading breathwork, they understand contraindications. We ask about credentials, and we note when retreats are peer-led rather than professionally facilitated.",
                },
                {
                  title: "Opt-out policies",
                  desc: "You can leave any session at any time without explanation. You can skip meals, skip activities, skip the entire program and sit in your room. A safe retreat does not punish withdrawal.",
                },
                {
                  title: "No surprise touch",
                  desc: "Nobody touches you without asking first. Not during yoga adjustments, not during healing sessions, not during group exercises. This is non-negotiable, and any retreat that cannot guarantee it will not appear on this site.",
                },
                {
                  title: "Trauma awareness",
                  desc: "Staff understand that participants may be carrying trauma. They know not to push people past their boundaries. They know that a panic attack is not a 'breakthrough.' They have protocols for when someone is in distress, and those protocols do not involve more yoga.",
                },
                {
                  title: "Clear boundaries around facilitator relationships",
                  desc: "Facilitators do not pursue romantic or sexual relationships with participants. They do not offer private, off-schedule sessions that blur professional lines. Power dynamics are acknowledged, not exploited.",
                },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-sage-50/60 rounded-xl border border-sage-100/80">
                  <h3 className="font-serif font-semibold text-sage-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-sage-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sage-600 leading-relaxed mt-6">
              We cannot guarantee that every retreat we list will be perfectly safe for
              every person. Healing spaces are run by humans, and humans make mistakes.
              But we can guarantee that we take safety seriously, that we investigate
              complaints, and that we will remove any listing that fails to meet these
              standards.
            </p>
          </div>

          {/* Normalize Imperfect Healing */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              Normalize imperfect healing
            </h2>
            <div className="bg-warm-50 rounded-2xl p-8 border border-warm-200/60">
              <div className="space-y-6 text-sage-700 text-lg leading-relaxed font-serif italic">
                <p>&ldquo;You don&rsquo;t need to be ready.&rdquo;</p>
                <p>&ldquo;You don&rsquo;t need to believe anything.&rdquo;</p>
                <p>&ldquo;You don&rsquo;t need to &lsquo;open your heart&rsquo; on schedule.&rdquo;</p>
                <p>&ldquo;You don&rsquo;t need to cry at the right moment, or smile at the right time, or have a breakthrough by Friday.&rdquo;</p>
              </div>
              <p className="text-sage-600 mt-8 leading-relaxed">
                Healing is not a performance. You can go to a retreat and feel nothing
                special. You can leave early. You can skip the group share. You can
                sit alone at dinner. All of that is okay.
              </p>
              <p className="text-sage-600 mt-4 leading-relaxed">
                You can come home and not have a single Instagram-worthy insight. You
                can struggle to explain what happened. You can wonder if it even
                &ldquo;worked.&rdquo; Some things shift quietly, below the surface,
                and you only notice them weeks later when you realize you slept through
                the night, or you didn&rsquo;t snap at your partner, or you sat in
                silence for ten minutes without reaching for your phone.
              </p>
              <p className="text-sage-600 mt-4 leading-relaxed">
                That&rsquo;s healing. It doesn&rsquo;t always announce itself.
              </p>
            </div>
          </div>

          {/* A Note for Skeptics */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              A note for skeptics
            </h2>
            <div className="space-y-5 text-sage-600 leading-relaxed">
              <p>
                If the word &ldquo;retreat&rdquo; makes you roll your eyes, we get it.
                Maybe you associate retreats with incense and chanting and people who
                say &ldquo;namaste&rdquo; too much. Maybe you tried something once and
                it felt performative, or expensive, or both. Maybe someone you trust
                got pulled into a group that started as a wellness community and ended
                as something closer to a cult. Maybe you&rsquo;re a fundamentally
                skeptical person and anything that smells like self-help triggers your
                alarm bells.
              </p>
              <p>
                All of that is valid. Your skepticism is not a character flaw. It is
                probably protecting you.
              </p>
              <p>
                Here is what we want you to know: CheapRetreats is not asking you to
                believe in anything. We are not selling a philosophy, a methodology, or
                a spiritual framework. We are not asking you to &ldquo;do the
                work&rdquo; or &ldquo;show up fully&rdquo; or &ldquo;surrender to the
                process.&rdquo; We are pointing at places where you can go and be quiet
                for a few days without anyone trying to sell you on their worldview.
              </p>
              <p>
                Some of the places we list are secular. Some are spiritual. Some are
                religious. We label them clearly so you know exactly what you&rsquo;re
                walking into. We flag anything that involves ceremony, plant medicine,
                energy work, or other practices that require informed consent. We note
                when a retreat has a strong ideological framework versus when it&rsquo;s
                simply a quiet place with a bed and some trees.
              </p>
              <p>
                You do not have to be a &ldquo;retreat person&rdquo; to benefit from
                going somewhere quiet and doing nothing for three days. You just have
                to be tired enough to try.
              </p>
            </div>
          </div>

          {/* Why This Matters */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
              Why this matters
            </h2>
            <div className="space-y-4 text-sage-600 leading-relaxed">
              <p>
                People are burned out, grieving, depressed, lonely, and exhausted.
                The wellness industry often makes this worse by adding financial
                stress and social comparison on top of existing pain.
              </p>
              <p>
                We believe the antidote is simple: safe, affordable places where
                you can stop. That&rsquo;s it.
              </p>
              <p>
                Not transform. Not optimize. Not ascend.
              </p>
              <p className="font-serif text-xl text-sage-800 italic pt-2">
                Just stop.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="text-center py-12 border-t border-warm-200/60">
            <p className="font-display text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
              You don&rsquo;t need to hustle your way into healing.
            </p>
            <Link
              href="/start-here"
              className="inline-flex items-center px-8 py-4 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors shadow-lg shadow-sage-600/20"
            >
              Find Your Retreat
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
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
            headline: "The Healing, Not Hustle Manifesto — CheapRetreats",
            description: "CheapRetreats believes healing should not be a luxury good. Our manifesto on anti-cult wellness, fair pricing, and accessible rest.",
            author: { "@type": "Organization", name: "CheapRetreats" },
            publisher: { "@type": "Organization", name: "CheapRetreats", url: "https://cheapretreats.com" },
            mainEntityOfPage: "https://cheapretreats.com/manifesto",
          }),
        }}
      />
    </>
  );
}
