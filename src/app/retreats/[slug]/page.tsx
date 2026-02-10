import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  retreats,
  getRetreatSlug,
  getRetreatBySlug,
  getRetreatRegion,
  getTypeSlug,
  getCountryName,
  retreatTypes,
} from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";

export function generateStaticParams() {
  return retreats.map((r) => ({
    slug: getRetreatSlug(r),
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const retreat = getRetreatBySlug(slug);

  if (!retreat) {
    return { title: "Retreat Not Found" };
  }

  const country = getCountryName(retreat.country);
  const description = retreat.description
    ? retreat.description
    : `${retreat.name} in ${retreat.location} — ${retreat.priceDisplay} for ${retreat.nightsDisplay}. ${retreat.type} retreat including ${retreat.includes}. Good for ${retreat.goodFor.join(", ")}.`;

  return {
    title: `${retreat.name} — ${retreat.priceDisplay} ${retreat.type} in ${retreat.location}`,
    description,
    alternates: {
      canonical: `https://cheapretreats.com/retreats/${slug}`,
    },
    openGraph: {
      title: `${retreat.name} — ${retreat.priceDisplay} | CheapRetreats`,
      description,
      url: `https://cheapretreats.com/retreats/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${retreat.name} — ${retreat.priceDisplay}`,
      description: `${retreat.type} in ${retreat.location}, ${country}. ${retreat.nightsDisplay}. ${retreat.goodFor.join(", ")}.`,
    },
  };
}

function getExpectContent(type: string, typeSlug: string): { heading: string; paragraphs: string[] } {
  const contentMap: Record<string, { heading: string; paragraphs: string[] }> = {
    "work-exchange": {
      heading: "What to expect from a work exchange",
      paragraphs: [
        "Work exchange retreats typically involve 4-6 hours of daily work in exchange for free room and board. Tasks vary by location — gardening, cooking, cleaning, maintenance, or hospitality.",
        "The rest of your time is yours. Most programs include access to the same facilities, workshops, and community meals as paying guests. It is a genuine exchange, not a labor arrangement.",
        "Come prepared for physical work and communal living. Bring work clothes, an open mind, and willingness to contribute. Most programs run 2-4 weeks minimum.",
      ],
    },
    "meditation": {
      heading: "What to expect from a meditation retreat",
      paragraphs: [
        "Meditation retreats follow a structured daily schedule — early morning wake-up, multiple sitting periods, walking meditation, and teacher meetings. Meals are typically vegetarian and eaten in silence.",
        "Most retreats observe noble silence, meaning no talking, reading, writing, or device use. This feels challenging at first and then becomes a relief.",
        "No prior meditation experience is required at most centers. Teachers provide instruction and individual guidance. Bring comfortable, modest clothing and an open willingness to sit with whatever arises.",
      ],
    },
    "silent-retreat": {
      heading: "What to expect from a silent retreat",
      paragraphs: [
        "Silent retreats remove the social performance of daily life. No small talk, no explaining yourself, no managing anyone else's experience. The silence is not a punishment — it is a gift.",
        "Most silent retreats include simple meals, time in nature, and optional meditation or contemplative practice. The schedule is gentle. The point is not productivity — it is presence.",
        "First-timers often feel restless for the first day. By day two or three, most people report a deep settling. Bring minimal belongings and no expectations.",
      ],
    },
    "monastery": {
      heading: "What to expect from a monastery stay",
      paragraphs: [
        "Monastery stays follow the rhythm of the monastic community — early rising, communal prayer or meditation, simple meals, and periods of quiet work or rest.",
        "Most monasteries welcome guests of all faiths or none. Participation in services is usually optional. Rooms are simple, meals are nourishing, and the pace is intentionally slow.",
        "Bring modest clothing, a willingness to respect the community's rhythms, and nothing more than you need. Many monastery stays are donation-based or very affordable.",
      ],
    },
    "rest-retreat": {
      heading: "What to expect from a rest retreat",
      paragraphs: [
        "Rest retreats have one purpose: to let you stop. There is no program, no workshop, no expectation. You sleep when you are tired, eat when you are hungry, and do nothing in between.",
        "Most rest retreats include comfortable accommodation, nourishing meals, and access to nature. Some offer optional gentle activities — yoga, walks, journaling — but nothing is required.",
        "This is not laziness. This is recovery. If you are burned out, grieving, or simply exhausted, giving yourself permission to rest is the most productive thing you can do.",
      ],
    },
    "grief-retreat": {
      heading: "What to expect from a grief retreat",
      paragraphs: [
        "Grief retreats create space specifically for loss — recent or old, expected or sudden, human or otherwise. The facilitators understand that grief is not a problem to solve but an experience to honor.",
        "Most programs include facilitated sharing circles, time in nature, creative expression, and simple meals together. You will not be asked to perform your grief or rush through it.",
        "These retreats are often small — 8-15 people — and staffed by facilitators who have their own relationship with loss. You do not need to explain or justify your grief here.",
      ],
    },
    "nature-retreat": {
      heading: "What to expect from a nature retreat",
      paragraphs: [
        "Nature retreats use the natural environment as the primary healing modality. Forest bathing, coastal walks, mountain silence, island solitude — the landscape does the heavy lifting.",
        "Accommodation ranges from private cabins to shared lodges. Meals are typically simple and locally sourced. Activities might include guided nature walks, wildlife observation, or simply sitting outside.",
        "Bring appropriate outdoor clothing and footwear. Leave your expectations at home. Nature works on its own timeline, and the most healing moments are often the ones you cannot plan.",
      ],
    },
    "community-retreat": {
      heading: "What to expect from a community retreat",
      paragraphs: [
        "Community retreats address the particular pain of isolation. Shared meals, gentle group activities, and the quiet companionship of people who want to be present with each other.",
        "These are not networking events or forced bonding exercises. The emphasis is on parallel presence — being together without the pressure to perform or connect on command.",
        "Most programs include communal cooking, walks, optional creative time, and evening gatherings. Come as you are. You do not need to be good at socializing to belong here.",
      ],
    },
    "trauma-sensitive": {
      heading: "What to expect from a trauma-sensitive retreat",
      paragraphs: [
        "Trauma-sensitive retreats prioritize safety, consent, and choice. Every activity is optional. Facilitators are trained in trauma-informed care and understand that healing is not linear.",
        "Programs may include somatic experiencing, gentle movement, facilitated sharing with clear boundaries, and plenty of unstructured time. The pace is intentionally slow.",
        "These retreats typically have smaller group sizes and higher staff ratios. If you have a history of trauma, these spaces are designed specifically for your nervous system.",
      ],
    },
    "caregiver-retreat": {
      heading: "What to expect from a caregiver retreat",
      paragraphs: [
        "Caregiver retreats exist for the people who take care of everyone else. The only expectation is that you let someone else do the caring for a few days.",
        "Programs typically include peer support circles, respite activities, nourishing meals prepared for you, and the rare experience of having your own needs prioritized.",
        "Many caregiver retreats offer sliding scale pricing and scholarships, recognizing that the people who need rest most often cannot afford it. Ask about financial assistance.",
      ],
    },
    "creative-retreat": {
      heading: "What to expect from a creative retreat",
      paragraphs: [
        "Creative retreats provide space, time, and solitude for creative work — or creative rest. These are not workshops about creativity. They are quiet places where creating can happen naturally.",
        "Accommodation usually includes a private workspace — a writing desk, an art studio, a cabin with good light. Meals are provided so you do not waste creative energy on logistics.",
        "Bring your materials, your projects, or nothing at all. Some of the most productive creative retreats involve doing nothing for the first three days and everything on the fourth.",
      ],
    },
    "spiritual-community": {
      heading: "What to expect from a spiritual community stay",
      paragraphs: [
        "Spiritual community stays immerse you in a living tradition — Quaker, Taize, Plum Village, or other contemplative communities. You participate in daily rhythms alongside residents.",
        "Services and practices are typically optional but attending is part of the experience. Meals are communal, rooms are simple, and the pace follows centuries-old patterns.",
        "Most communities welcome visitors of all faiths or none. Come with respect for the tradition and an open curiosity. You do not need to believe anything specific to benefit.",
      ],
    },
  };

  return contentMap[typeSlug] || {
    heading: "What to expect",
    paragraphs: [
      `This ${type.toLowerCase()} retreat offers a structured yet gentle environment designed for genuine healing and restoration.`,
      "Days typically include a balance of guided activities, communal meals, and unstructured personal time. The pace is intentionally slow — there is no pressure to achieve or perform.",
      "Come with an open mind and minimal expectations. The most healing experiences often arise from simply being present in a supportive environment.",
    ],
  };
}

function getPriceContext(price: number): string {
  if (price === 0) return "This retreat is free through work exchange or donations. No money is required to attend.";
  if (price < 300) return "This is among the most affordable retreats in our directory. The price includes accommodation and meals — there are no hidden fees.";
  if (price < 500) return "A mid-range option that includes meals and accommodation. The total cost is transparent — what you see is what you pay.";
  if (price < 750) return "This retreat includes meals, accommodation, and programming. While not the cheapest option, the per-night value is strong for what is included.";
  return "At the higher end of our directory, but still well under luxury retreat prices. The cost covers comprehensive programming, meals, and accommodation.";
}

function getPerNightCost(price: number, nights: number): string {
  if (price === 0) return "Free";
  const perNight = Math.round(price / nights);
  return `$${perNight}/night`;
}

export default async function RetreatDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const retreat = getRetreatBySlug(slug);

  if (!retreat) {
    notFound();
  }

  const country = getCountryName(retreat.country);
  const region = getRetreatRegion(retreat);
  const typeSlug = getTypeSlug(retreat);
  const retreatType = retreatTypes.find((t) => t.slug === typeSlug);
  const expectContent = getExpectContent(retreat.type, typeSlug);
  const includesList = retreat.includes.split(",").map((s) => s.trim());
  const perNight = getPerNightCost(retreat.price, retreat.nights);

  // Find related retreats: same goodFor categories or same type, excluding current
  const relatedRetreats = retreats
    .filter((r) => {
      if (getRetreatSlug(r) === slug) return false;
      const sharedGoodFor = r.goodFor.some((g) => retreat.goodFor.includes(g));
      const sameType = getTypeSlug(r) === typeSlug;
      return sharedGoodFor || sameType;
    })
    .sort((a, b) => {
      // Prioritize same type, then by shared goodFor count
      const aTypeMatch = getTypeSlug(a) === typeSlug ? 1 : 0;
      const bTypeMatch = getTypeSlug(b) === typeSlug ? 1 : 0;
      if (aTypeMatch !== bTypeMatch) return bTypeMatch - aTypeMatch;
      const aShared = a.goodFor.filter((g) => retreat.goodFor.includes(g)).length;
      const bShared = b.goodFor.filter((g) => retreat.goodFor.includes(g)).length;
      return bShared - aShared;
    })
    .slice(0, 4);

  // Determine price page link
  let pricePageHref = "/under-1000";
  let pricePageLabel = "Under $1,000";
  if (retreat.price === 0) {
    pricePageHref = "/work-exchange";
    pricePageLabel = "Work Exchange (Free)";
  } else if (retreat.price < 500) {
    pricePageHref = "/under-500";
    pricePageLabel = "Under $500";
  } else if (retreat.price < 750) {
    pricePageHref = "/under-750";
    pricePageLabel = "Under $750";
  }

  // Find relevant need page slugs based on goodFor
  const needSlugs: Record<string, string> = {
    "Burnout": "burnout",
    "Grief": "grief",
    "Depression": "depression",
    "Trauma": "trauma",
    "Quiet": "quiet",
    "Loneliness": "loneliness",
    "Stopping": "stopping",
    "Caregivers": "caregivers",
    "Overwhelm": "overwhelm",
    "First-timers": "first-timers",
    "Deep reset": "deep-reset",
    "Career transition": "career-transition",
    "Creative block": "creative-block",
    "Gentle reset": "gentle-reset",
    "Anxiety": "anxiety",
  };

  // Trust indicators
  const trustBadges = [
    { show: retreat.verified, label: "Verified Safe & Real", color: "sage" },
    { show: retreat.communityRun, label: "Community-Run", color: "sky" },
    { show: retreat.workExchange, label: "Work Exchange Available", color: "sky" },
    { show: retreat.scholarship, label: "Scholarships Available", color: "rose" },
    { show: retreat.slidingScale, label: "Sliding Scale Pricing", color: "sage" },
  ].filter((b) => b.show);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: retreat.name,
        description: retreat.description ||
          `${retreat.type} retreat in ${retreat.location}, ${country}. ${retreat.priceDisplay} for ${retreat.nightsDisplay}.`,
        url: `https://cheapretreats.com/retreats/${slug}`,
        publisher: {
          "@type": "Organization",
          name: "CheapRetreats",
          url: "https://cheapretreats.com",
        },
        mainEntityOfPage: `https://cheapretreats.com/retreats/${slug}`,
      },
      {
        "@type": "Product",
        name: retreat.name,
        description: `${retreat.type} — ${retreat.includes}`,
        url: `https://cheapretreats.com/retreats/${slug}`,
        brand: {
          "@type": "Organization",
          name: "CheapRetreats",
        },
        offers: {
          "@type": "Offer",
          price: retreat.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
          url: `https://cheapretreats.com/retreats/${slug}`,
        },
        category: retreat.type,
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Duration",
            value: retreat.nightsDisplay,
          },
          {
            "@type": "PropertyValue",
            name: "Location",
            value: `${retreat.location}, ${country}`,
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://cheapretreats.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "All Retreats",
            item: "https://cheapretreats.com/retreats",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: retreat.name,
            item: `https://cheapretreats.com/retreats/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-sage-50/60 border-b border-warm-200/40" aria-label="Breadcrumb">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-sage-500">
            <li>
              <Link href="/" className="hover:text-sage-700 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <svg className="w-3.5 h-3.5 text-sage-300" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 3l4 4-4 4" />
              </svg>
            </li>
            <li>
              <Link href="/retreats" className="hover:text-sage-700 transition-colors">
                All Retreats
              </Link>
            </li>
            <li>
              <svg className="w-3.5 h-3.5 text-sage-300" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 3l4 4-4 4" />
              </svg>
            </li>
            <li className="text-sage-700 font-medium truncate max-w-[200px] sm:max-w-none">
              {retreat.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-100/40 to-warm-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {retreat.verified && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sage-100 text-sage-700 text-xs font-medium rounded-full">
                <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="currentColor">
                  <path fillRule="evenodd" d="M6 0.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM8.7 4.8a.5.5 0 00-.7-.6L5.5 6.6 4 5.2a.5.5 0 00-.7.6l2 2a.5.5 0 00.7 0l3-2.7-.3-.3z" />
                </svg>
                Verified
              </span>
            )}
            {retreatType && (
              <span className="inline-flex items-center px-3 py-1.5 bg-sky-100 text-sky-700 text-xs font-medium rounded-full">
                {retreatType.name}
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-sage-900 mb-4 leading-[1.1]">
            {retreat.name}
          </h1>

          <p className="text-lg md:text-xl text-sage-600 mb-6">
            {retreat.location}, {country}
          </p>

          <div className="flex flex-wrap items-end gap-6 mb-8">
            <div>
              <div className="font-display text-4xl md:text-5xl font-semibold text-sage-800">
                {retreat.priceDisplay}
              </div>
              <div className="text-sm text-sage-500 mt-1">
                {retreat.nightsDisplay} &middot; {perNight}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {retreat.workExchange && (
                <span className="px-3 py-1.5 bg-sky-100 text-sky-700 text-xs font-medium rounded-full">
                  Work Exchange
                </span>
              )}
              {retreat.slidingScale && (
                <span className="px-3 py-1.5 bg-sage-100 text-sage-700 text-xs font-medium rounded-full">
                  Sliding Scale
                </span>
              )}
              {retreat.scholarship && (
                <span className="px-3 py-1.5 bg-rose-50 text-rose-700 text-xs font-medium rounded-full">
                  Scholarships
                </span>
              )}
            </div>
          </div>

          {retreat.description && (
            <p className="text-sage-600 leading-relaxed max-w-2xl">
              {retreat.description}
            </p>
          )}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-10 md:py-14 bg-white border-b border-warm-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6">
            What&rsquo;s included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {includesList.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-sage-50/50 rounded-xl border border-sage-100/80"
              >
                <div className="w-5 h-5 rounded-full bg-sage-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-sage-600" viewBox="0 0 12 12" fill="currentColor">
                    <path fillRule="evenodd" d="M9.7 3.3a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L2.3 6.5a.75.75 0 011.06-1.06l1.54 1.54L8.64 3.3a.75.75 0 011.06 0z" />
                  </svg>
                </div>
                <span className="text-sage-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Good For + Tags */}
      <section className="py-10 md:py-14 bg-warm-50 border-b border-warm-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Good For */}
            <div>
              <h2 className="font-serif text-lg font-semibold text-sage-900 mb-4">
                Good for
              </h2>
              <div className="flex flex-wrap gap-2">
                {retreat.goodFor.map((g) => {
                  const needSlug = needSlugs[g];
                  return needSlug ? (
                    <Link
                      key={g}
                      href={`/needs/${needSlug}`}
                      className="px-4 py-2 bg-white text-sage-700 text-sm rounded-full border border-sage-200/60 hover:bg-sage-50 hover:border-sage-300 transition-colors"
                    >
                      {g}
                    </Link>
                  ) : (
                    <span
                      key={g}
                      className="px-4 py-2 bg-white text-sage-700 text-sm rounded-full border border-sage-200/60"
                    >
                      {g}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h2 className="font-serif text-lg font-semibold text-sage-900 mb-4">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {retreat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-warm-100 text-warm-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      {trustBadges.length > 0 && (
        <section className="py-10 md:py-14 bg-white border-b border-warm-200/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-lg font-semibold text-sage-900 mb-6">
              Trust indicators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className={`flex items-center gap-3 p-4 rounded-xl border ${
                    badge.color === "sage"
                      ? "bg-sage-50/50 border-sage-100/80"
                      : badge.color === "sky"
                        ? "bg-sky-50/50 border-sky-100/80"
                        : "bg-rose-50/50 border-rose-100/80"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      badge.color === "sage"
                        ? "bg-sage-200"
                        : badge.color === "sky"
                          ? "bg-sky-200"
                          : "bg-rose-200"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 ${
                        badge.color === "sage"
                          ? "text-sage-600"
                          : badge.color === "sky"
                            ? "text-sky-600"
                            : "text-rose-600"
                      }`}
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M9.7 3.3a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L2.3 6.5a.75.75 0 011.06-1.06l1.54 1.54L8.64 3.3a.75.75 0 011.06 0z" />
                    </svg>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      badge.color === "sage"
                        ? "text-sage-700"
                        : badge.color === "sky"
                          ? "text-sky-700"
                          : "text-rose-700"
                    }`}
                  >
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What to Expect */}
      <section className="py-10 md:py-14 bg-warm-50 border-b border-warm-200/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6">
            {expectContent.heading}
          </h2>
          <div className="space-y-4 text-sage-600 leading-relaxed">
            {expectContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-10 md:py-14 bg-white border-b border-warm-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6">
            Getting there
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
              <div className="text-xs text-sage-400 uppercase tracking-wider font-medium mb-1">
                Location
              </div>
              <div className="font-serif font-semibold text-sage-800">
                {retreat.location}
              </div>
            </div>
            <div className="p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
              <div className="text-xs text-sage-400 uppercase tracking-wider font-medium mb-1">
                Country
              </div>
              <div className="font-serif font-semibold text-sage-800">
                {country}
              </div>
            </div>
            <div className="p-5 bg-sage-50/50 rounded-xl border border-sage-100/80">
              <div className="text-xs text-sage-400 uppercase tracking-wider font-medium mb-1">
                Region
              </div>
              <div className="font-serif font-semibold text-sage-800">
                {region}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Transparency */}
      <section className="py-10 md:py-14 bg-warm-50 border-b border-warm-200/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-6">
            Price transparency
          </h2>
          <div className="bg-white rounded-xl p-6 border border-sage-100/80 mb-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="font-display text-2xl font-semibold text-sage-800">
                  {retreat.priceDisplay}
                </div>
                <div className="text-xs text-sage-500 mt-1">Total cost</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-sage-800">
                  {retreat.nightsDisplay}
                </div>
                <div className="text-xs text-sage-500 mt-1">Duration</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-sage-800">
                  {perNight}
                </div>
                <div className="text-xs text-sage-500 mt-1">Per night</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-sage-800">
                  {includesList.length}
                </div>
                <div className="text-xs text-sage-500 mt-1">Items included</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-sage-500 leading-relaxed">
            {getPriceContext(retreat.price)}
          </p>
        </div>
      </section>

      {/* Related Retreats */}
      {relatedRetreats.length > 0 && (
        <section className="py-12 md:py-16 bg-white border-b border-warm-200/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-2">
              Similar retreats
            </h2>
            <p className="text-sage-500 text-sm mb-8">
              Based on shared needs and retreat type
            </p>
            <div className="space-y-5">
              {relatedRetreats.map((r) => (
                <Link
                  key={getRetreatSlug(r)}
                  href={`/retreats/${getRetreatSlug(r)}`}
                  className="block hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <RetreatCard retreat={r} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTAs */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Keep exploring
          </h2>
          <p className="text-sage-600 mb-8">
            Browse more retreats by budget, by need, or see everything we have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href={pricePageHref}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              {pricePageLabel}
            </Link>
            <Link
              href="/needs"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              Browse by Need
            </Link>
            <Link
              href="/retreats"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              All Retreats
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
