import type { Metadata } from "next";
import Link from "next/link";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Retreat Guides — Honest Advice for Real People",
  description:
    "Free, practical guides for anyone considering a healing retreat. Packing lists, choosing the right retreat, sliding scale pricing, meditation tips, monastery etiquette, and more. No fluff, no upsells.",
  alternates: { canonical: "https://cheapretreats.com/guides" },
};

const guides = [
  {
    slug: "how-to-choose",
    title: "How to Choose the Right Retreat",
    description:
      "A decision framework that starts with what you need, not what looks good on Instagram. Budget, duration, structure, solo vs. group -- the questions that actually matter.",
    category: "Getting Started",
  },
  {
    slug: "what-to-pack",
    title: "What to Pack for a Healing Retreat",
    description:
      "Seasonal packing lists, comfort items worth their weight, what to leave at home, and why less is almost always more.",
    category: "Getting Started",
  },
  {
    slug: "meditation-for-beginners",
    title: "Your First Meditation Retreat",
    description:
      "What to expect at a silent retreat, how to handle restlessness, common fears addressed honestly, and why you do not need to be good at sitting still.",
    category: "Getting Started",
  },
  {
    slug: "sliding-scale-explained",
    title: "Sliding Scale Pricing -- How It Works",
    description:
      "What sliding scale actually means, how to choose your level honestly, how to ask for a lower rate without shame, and why this model matters.",
    category: "Affordability",
  },
  {
    slug: "monastery-etiquette",
    title: "Monastery Retreat Etiquette",
    description:
      "What to wear, how meals work, silence rules, religious services, electronics, tipping, and how to be a respectful guest in someone else's sacred space.",
    category: "Specific Retreat Types",
  },
  {
    slug: "retreats-for-introverts",
    title: "Retreats for Introverts",
    description:
      "How to find quiet without forced socializing. Best retreat types for people who need solitude, private room importance, and solo-friendly picks.",
    category: "Specific Retreat Types",
  },
  {
    slug: "retreats-for-couples",
    title: "Retreats for Couples",
    description:
      "When to go together, when to go alone, shared vs. solo experiences, and honest communication tips for healing alongside a partner.",
    category: "Specific Retreat Types",
  },
  {
    slug: "retreats-vs-vacations",
    title: "Retreats vs. Vacations",
    description:
      "Why retreats are not luxury spas, what healing actually means in practice, managing expectations, and how to know which one you need right now.",
    category: "Understanding Retreats",
  },
  {
    slug: "digital-detox-tips",
    title: "Digital Detox -- Before, During & After",
    description:
      "How to prepare for disconnecting, out-of-office templates, what to do with your hands when you cannot scroll, and surviving re-entry.",
    category: "Practical Tips",
  },
  {
    slug: "post-retreat-integration",
    title: "After Your Retreat -- Integration Guide",
    description:
      "Re-entry tips, the retreat high crash, journaling prompts, maintaining changes at home, and knowing when it is time to go back.",
    category: "After Your Retreat",
  },
];

const categories = [
  "Getting Started",
  "Affordability",
  "Specific Retreat Types",
  "Understanding Retreats",
  "Practical Tips",
  "After Your Retreat",
];

export default function GuidesIndexPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-warm-50 border-b border-warm-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-sage-500">
            <Link href="/" className="hover:text-sage-700 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-sage-800 font-medium">Guides</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <img src={heroImages.startHere} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900/80 via-warm-800/60 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 leading-[1.1]">
            Retreat Guides
          </h1>
          <p className="text-lg md:text-xl text-warm-100 leading-relaxed max-w-xl mx-auto">
            Honest, practical advice from people who have been there. No
            affiliate links. No sponsored content. Just what we wish someone had
            told us before our first retreat.
          </p>
        </div>
      </section>

      {/* Guides by Category */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category) => {
              const categoryGuides = guides.filter(
                (g) => g.category === category
              );
              if (categoryGuides.length === 0) return null;
              return (
                <div key={category}>
                  <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6 pb-3 border-b border-warm-200/60">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categoryGuides.map((guide) => (
                      <Link
                        key={guide.slug}
                        href={`/guides/${guide.slug}`}
                        className="group block p-6 rounded-2xl bg-warm-50 border border-warm-200/60 hover:border-sage-300 hover:bg-sage-50/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2 group-hover:text-sage-900">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-sage-600 leading-relaxed mb-3">
                          {guide.description}
                        </p>
                        <span className="inline-flex items-center text-sm font-medium text-sage-500 group-hover:text-sage-700 transition-colors">
                          Read guide
                          <svg
                            className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                            viewBox="0 0 14 14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M2 7h10M8 3l4 4-4 4" />
                          </svg>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Also helpful */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Also helpful
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            These pages cover related ground and might answer questions the
            guides do not.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/first-time"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              First-Time Guide
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              FAQ
            </Link>
            <Link
              href="/start-here"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              Start Here
            </Link>
            <Link
              href="/scholarships"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              Scholarships
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Retreat Guides",
            description:
              "Free, practical guides for anyone considering a healing retreat. Packing lists, choosing the right retreat, sliding scale pricing, and more.",
            url: "https://cheapretreats.com/guides",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: guides.map((guide, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://cheapretreats.com/guides/${guide.slug}`,
                name: guide.title,
              })),
            },
          }),
        }}
      />
    </>
  );
}
