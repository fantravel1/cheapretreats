import type { Metadata } from "next";
import Link from "next/link";
import { needsData } from "@/lib/needs-data";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Browse Retreats by Need — What Do You Need Right Now?",
  description:
    "Find healing retreats organized by what you actually need — burnout recovery, grief, depression, trauma-sensitive, quiet, loneliness, caregiver recovery, and more.",
  alternates: { canonical: "https://cheapretreats.com/needs" },
};

export default function NeedsIndexPage() {
  const needs = Object.values(needsData);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-100/40 to-warm-50 py-20 md:py-32">
        <img src={heroImages.needs} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-50/90 via-sage-50/75 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            What do you need<br className="hidden sm:block" /> right now?
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-xl mx-auto">
            We don&rsquo;t organize by modality. We organize by what&rsquo;s
            actually going on. Because &ldquo;yoga retreat&rdquo; doesn&rsquo;t
            describe what hurts.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {needs.map((need) => (
              <Link
                key={need.slug}
                href={`/needs/${need.slug}`}
                className={`group block p-6 md:p-8 rounded-2xl bg-gradient-to-br ${need.gradient} border border-warm-200/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
              >
                <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-2">
                  {need.headline}
                </h2>
                <p className="text-sage-600 font-serif italic mb-3">{need.subtitle}</p>
                <p className="text-sm text-sage-600 leading-relaxed mb-4">
                  {need.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-sage-500 group-hover:text-sage-700 transition-colors">
                  Browse {need.title.toLowerCase()}
                  <svg className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Not sure what you need?
          </h2>
          <p className="text-sage-600 text-lg mb-8">
            That&rsquo;s okay. Start with our guided path or browse by budget instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-here" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
              Start Here
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
