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
              ].map((belief) => (
                <div key={belief.word} className="p-5 bg-sage-50/60 rounded-xl border border-sage-100/80 text-center">
                  <div className="font-serif text-xl font-semibold text-sage-800 mb-1">{belief.word}</div>
                  <div className="text-xs text-sage-500">{belief.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Imperfect Healing */}
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
