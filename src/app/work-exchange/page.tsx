import type { Metadata } from "next";
import Link from "next/link";
import { retreats } from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";

export const metadata: Metadata = {
  title: "Work Exchange Retreats — Heal for Free by Helping",
  description:
    "Can't afford a retreat? Work exchange programs let you stay for free in exchange for a few hours of daily work — cooking, cleaning, gardening, or maintenance.",
  alternates: { canonical: "https://cheapretreats.com/work-exchange" },
};

const howItWorks = [
  { title: "Apply", description: "Most programs have a simple application. Some accept everyone; others look for specific skills." },
  { title: "Work 4-6 hours/day", description: "Help with meals, cleaning, gardening, maintenance, or guest services. The work is part of the healing." },
  { title: "Stay for free", description: "Room and meals included. Some programs also give you access to workshops, classes, and facilities." },
  { title: "Heal alongside", description: "When you're not working, the retreat is yours. Rest, walk, practice, or do nothing at all." },
];

export default function WorkExchangePage() {
  const workExchangeRetreats = retreats.filter((r) => r.workExchange).sort((a, b) => a.price - b.price);

  return (
    <>
      <section className="bg-gradient-to-b from-sky-100/40 to-warm-50 py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/70 text-sky-700 rounded-full text-sm font-medium mb-8">
            Free or nearly free
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Work Exchange
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-2xl mx-auto">
            Help with meals, cleaning, or gardening for a few hours a day — and
            stay for free. The work itself is often part of the healing.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
            How work exchange works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {howItWorks.map((step, i) => (
              <div key={i} className="flex gap-4 p-5 bg-sky-50/50 rounded-xl border border-sky-100/60">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-200/60 flex items-center justify-center text-sky-700 font-semibold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-sage-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-sage-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
            Work exchange retreats
          </h2>
          <div className="space-y-5">
            {workExchangeRetreats.map((retreat, i) => (
              <RetreatCard key={i} retreat={retreat} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            Tips for work exchange
          </h2>
          <div className="space-y-4 text-sage-600 leading-relaxed">
            {[
              "Be honest about your physical abilities — programs want to match you with appropriate work",
              "Apply early — popular programs fill up months in advance",
              "Ask about the schedule before committing — some are more demanding than others",
              "It's okay if you've never done farm work or kitchen work — most programs train you",
              "Work exchange is real work — but it's also grounding, physical, and often meditative",
              "If a program asks for money AND work, that's a red flag — reach out to us",
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-sage-50/50 rounded-xl border border-sage-100/80">
                <svg className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                </svg>
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Other affordable options
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link href="/scholarships" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Scholarships
            </Link>
            <Link href="/under-500" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200">
              Under $500
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
