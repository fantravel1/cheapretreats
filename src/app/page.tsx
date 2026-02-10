import type { Metadata } from "next";
import Link from "next/link";
import { heroImages, sectionImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "CheapRetreats — Affordable Healing Retreats for Real People",
  description:
    "Healing should not be a luxury good. Discover affordable, safe, verified retreats organized by what you actually need — burnout recovery, grief, quiet rest, and more. From $0 to $1,000.",
  alternates: { canonical: "https://cheapretreats.com" },
};

const needs = [
  {
    slug: "burnout",
    title: "Burnout Recovery",
    description:
      "When you've given everything and have nothing left. Not a spa weekend — real, structured rest that teaches your nervous system it's safe to stop. For the people who can't remember what 'okay' feels like.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20" className="stroke-rose-300" />
        <path d="M16 28c0-4 3.5-6 8-6s8 2 8 6" className="stroke-rose-400" />
        <path d="M18 20v-2M30 20v-2" className="stroke-rose-400" />
      </svg>
    ),
    color: "bg-rose-50 hover:bg-rose-100/70 border-rose-200/60",
    textColor: "text-rose-800",
  },
  {
    slug: "grief",
    title: "Grief Retreats",
    description:
      "Space to feel what you feel. No timelines. No fixing. No one telling you to 'move on.' Just people who understand that grief doesn't resolve — it evolves. Witness without performance.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 42s-16-9.5-16-21C8 13 14 8 24 16c10-8 16-3 16 5 0 11.5-16 21-16 21z" className="stroke-sky-400" />
      </svg>
    ),
    color: "bg-sky-50 hover:bg-sky-100/70 border-sky-200/60",
    textColor: "text-sky-800",
  },
  {
    slug: "depression",
    title: "Depression Recovery",
    description:
      "Gentle spaces for when everything feels heavy and getting out of bed is the whole day's work. No pressure to perform healing. No forced breakthroughs. Just a change of walls and people who get it.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 36c2-8 6-14 12-14s10 6 12 14" className="stroke-sage-400" />
        <circle cx="24" cy="14" r="6" className="stroke-sage-400" />
      </svg>
    ),
    color: "bg-sage-50 hover:bg-sage-100/70 border-sage-200/60",
    textColor: "text-sage-800",
  },
  {
    slug: "trauma-sensitive",
    title: "Trauma-Sensitive",
    description:
      "Trained facilitators who understand the body keeps the score. Consent-based everything. Opt-out always available. No surprise breathwork that puts you in a flashback. Your boundaries are the curriculum.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8" className="stroke-warm-400" />
        <circle cx="24" cy="24" r="10" className="stroke-warm-500" />
      </svg>
    ),
    color: "bg-warm-50 hover:bg-warm-100/70 border-warm-200/60",
    textColor: "text-warm-800",
  },
  {
    slug: "quiet",
    title: "Quiet Retreats",
    description:
      "No talking required. No sharing circles. No 'tell us how you feel.' Sometimes silence is the loudest healing — and the most generous thing someone can offer you is the absence of noise.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="12" width="32" height="24" rx="4" className="stroke-sage-400" />
        <path d="M16 24h16M16 30h8" className="stroke-sage-300" />
      </svg>
    ),
    color: "bg-sage-50 hover:bg-sage-100/70 border-sage-200/60",
    textColor: "text-sage-800",
  },
  {
    slug: "loneliness",
    title: "Loneliness",
    description:
      "Connection without performance. Be around people without having to be 'on.' No icebreakers, no forced vulnerability. Just shared meals, quiet presence, and the slow realization that you're not as alone as you thought.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="20" r="6" className="stroke-sky-400" />
        <circle cx="30" cy="20" r="6" className="stroke-sky-300" />
        <path d="M10 38c2-6 5-10 8-10h12c3 0 6 4 8 10" className="stroke-sky-400" />
      </svg>
    ),
    color: "bg-sky-50 hover:bg-sky-100/70 border-sky-200/60",
    textColor: "text-sky-800",
  },
  {
    slug: "caregivers",
    title: "Caregiver Recovery",
    description:
      "For those who carry everyone else and forgot they were also a person. Parents, nurses, therapists, eldest daughters. It's your turn now. Someone else will do the dishes.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16c-4 0-8 4-8 8s4 8 8 8" className="stroke-clay-400" />
        <path d="M28 16c4 0 8 4 8 8s-4 8-8 8" className="stroke-clay-400" />
        <path d="M20 24h8" className="stroke-clay-500" />
      </svg>
    ),
    color: "bg-clay-50 hover:bg-clay-100/70 border-clay-200/60",
    textColor: "text-clay-800",
  },
  {
    slug: "stop",
    title: "I Just Need to Stop",
    description:
      "No agenda. No program. No learning outcomes. Just stop. Sit down. Eat meals someone else cooked. Stare at a wall if you want. That's enough. That's actually a lot.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" className="stroke-warm-400" />
        <path d="M24 16v8l5 5" className="stroke-warm-500" />
      </svg>
    ),
    color: "bg-warm-50 hover:bg-warm-100/70 border-warm-200/60",
    textColor: "text-warm-800",
  },
];

const priceLadders = [
  { price: "Under $500", href: "/under-500", description: "Weekend resets, silent stays, donation-based retreats, monastery guesthouses, and nature walks", count: "120+" },
  { price: "Under $750", href: "/under-750", description: "3-5 night retreats with meals, nature immersion, workshops, farm stays, and guided programs", count: "200+" },
  { price: "Under $1,000", href: "/under-1000", description: "Full-week programs, comprehensive healing, remote locations, art residencies, and pilgrimages", count: "350+" },
];

const trustFeatures = [
  { title: "Safety Scored", description: "Every retreat rated on consent culture, facilitator training, trauma awareness, emergency protocols, and accessibility. Not vibes — metrics." },
  { title: "No Guru Energy", description: "We ban pseudo-guru cult vibes, manipulative upsells, 'transform in 3 days' lies, and anyone who makes you call them 'master.'" },
  { title: "Real Reviews", description: "Reviews that include what was hard, who it's not for, what surprised people, and whether the bathrooms were clean. The stuff that actually matters." },
  { title: "Price Transparent", description: "Total cost upfront — nights, food, travel realism, hidden fees. No surprise pricing ever. If there's an upsell on site, we tell you." },
  { title: "Trauma-Informed", description: "Every listed retreat is screened for trauma awareness. We check for opt-out policies, consent practices, trigger protocols, and facilitator credentials." },
  { title: "Accessibility First", description: "Physical accessibility, sensory accommodations, dietary needs, neurodivergent-friendly scheduling, and quiet spaces. We list what's real, not what's aspirational." },
];

const communitySpaces = [
  "Monasteries",
  "Convents",
  "Ashrams",
  "Rural Co-ops",
  "Nonprofit Retreat Houses",
  "Worker-Owned Spaces",
  "Indigenous Centers",
  "Silent Guesthouses",
  "Quaker Meeting Houses",
  "Community Land Trusts",
  "University Retreat Cabins",
  "Buddhist Centers",
  "Eco-Villages",
  "Historic Farmsteads",
];

const unconventionalRetreats = [
  {
    title: "Monastery Stays",
    description: "Centuries-old guest programs. Shared meals, structured silence, no WiFi. From $0-50/night.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 40V22l18-16 18 16v18" className="stroke-sage-500" />
        <path d="M18 40V30h12v10" className="stroke-sage-400" />
        <path d="M24 6v4" className="stroke-sage-400" />
      </svg>
    ),
  },
  {
    title: "Farm Stays",
    description: "Hands in soil, animals to feed, fresh food. Healing through rhythm, not therapy.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 40h32M14 40V24l10-8 10 8v16" className="stroke-warm-500" />
        <path d="M20 40v-8h8v8" className="stroke-warm-400" />
      </svg>
    ),
  },
  {
    title: "Art Residencies",
    description: "Quiet studios, communal dinners, no deliverables. Create or don't. Just be somewhere different.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" className="stroke-clay-400" />
        <path d="M18 30c2-4 4-6 6-6s4 2 6 6" className="stroke-clay-500" />
        <circle cx="20" cy="20" r="2" className="stroke-clay-400" />
        <circle cx="28" cy="20" r="2" className="stroke-clay-400" />
      </svg>
    ),
  },
  {
    title: "Walking Pilgrimages",
    description: "The Camino, Kumano Kodo, St. Olav's Way. Walk until the noise stops. Budget: boots and a backpack.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 38l8-14 8 8 8-20" className="stroke-sky-500" />
        <circle cx="12" cy="38" r="2" className="stroke-sky-400" />
        <circle cx="36" cy="12" r="2" className="stroke-sky-400" />
      </svg>
    ),
  },
  {
    title: "Silent Guesthouses",
    description: "No program. No facilitator. Just a quiet room, shared meals, and a garden. That's the whole thing.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="14" width="28" height="24" rx="3" className="stroke-sage-400" />
        <path d="M10 22h28" className="stroke-sage-300" />
        <path d="M20 14V10M28 14V10" className="stroke-sage-400" />
      </svg>
    ),
  },
  {
    title: "Volunteer-Light Stays",
    description: "2-3 hours of gentle work per day — gardening, cooking, tidying — and the rest is yours. Free or nearly free.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 8c-6 0-12 6-12 14 0 10 12 20 12 20s12-10 12-20c0-8-6-14-12-14z" className="stroke-rose-400" />
        <path d="M20 22h8M24 18v8" className="stroke-rose-300" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "I went for burnout recovery and spent three days staring at a lake. I didn't 'transform.' I just slept for the first time in months. That was enough.",
    name: "Mara K.",
    need: "Burnout Recovery",
    location: "Silent stay in Vermont",
    cost: "$340",
  },
  {
    quote: "After my mom died, everyone wanted me to talk about it. The grief retreat let me just sit with other people who understood. Nobody fixed me. I didn't need fixing.",
    name: "James T.",
    need: "Grief",
    location: "Monastery in New Mexico",
    cost: "$0 (donation)",
  },
  {
    quote: "I'm autistic and most 'wellness' spaces are a sensory nightmare. This one had quiet hours, no forced group activities, and a facilitator who actually asked about my needs beforehand.",
    name: "Ren S.",
    need: "Quiet Retreat",
    location: "Farm stay in Oregon",
    cost: "$480",
  },
  {
    quote: "I'm a hospice nurse. I hadn't had more than two days off in a row for three years. The caregiver retreat was the first place where no one needed anything from me.",
    name: "Devi P.",
    need: "Caregiver Recovery",
    location: "Co-op in North Carolina",
    cost: "$575",
  },
];

const stats = [
  { value: "500+", label: "Verified Retreats", sublabel: "Every one personally screened" },
  { value: "27", label: "Countries", sublabel: "Across 6 continents" },
  { value: "$0–$1K", label: "Price Range", sublabel: "Including free options" },
  { value: "100%", label: "Safety Scored", sublabel: "No Bullshit Healing Index" },
];

const howItWorks = [
  {
    step: "01",
    title: "Browse by need",
    description: "Not by modality, not by location, not by Instagram aesthetic. Tell us what hurts, and we'll show you what helps.",
  },
  {
    step: "02",
    title: "Check the safety score",
    description: "Every retreat is rated on our No Bullshit Healing Index — consent culture, facilitator training, trauma awareness, refund policies, and real reviews.",
  },
  {
    step: "03",
    title: "Book with confidence",
    description: "Total costs upfront. Honest reviews from real people. And if a retreat doesn't feel right, you'll know before you go — not after you've paid.",
  },
];

const spiritualTags = [
  { label: "Secular", description: "No spiritual framework. Evidence-based or simply restful. No prayers, no rituals, no energy talk.", color: "bg-sage-100 text-sage-700 border-sage-200/60" },
  { label: "Spiritual-Optional", description: "Spiritual elements are available but never required. Skip the meditation, keep the garden walks.", color: "bg-warm-100 text-warm-700 border-warm-200/60" },
  { label: "Religious", description: "Rooted in a faith tradition. Clearly labeled so you know what you're walking into.", color: "bg-sky-100 text-sky-700 border-sky-200/60" },
  { label: "Trauma-Informed", description: "Facilitators trained in trauma response. Opt-out policies. No surprise breathwork or forced vulnerability.", color: "bg-rose-100 text-rose-700 border-rose-200/60" },
  { label: "Neurodivergent-Friendly", description: "Sensory accommodations, flexible scheduling, quiet spaces, and facilitators who actually understand what that means.", color: "bg-clay-100 text-clay-700 border-clay-200/60" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <img src={heroImages.homepage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-900/90 via-sage-900/70 to-sage-900/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-sage-200 rounded-full text-sm font-medium mb-8 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-sage-300 animate-pulse" />
              500+ verified retreats from $0 to $1,000
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-[1.1] tracking-tight">
              You deserve rest
              <span className="block text-sage-200 mt-2 italic font-normal text-[0.85em]">
                even if you&rsquo;re broke.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-sage-200 max-w-2xl mx-auto mb-4 leading-relaxed">
              Healing should not be a luxury good. We find affordable, honest,
              verified retreats — organized by what you actually need, not what
              sounds marketable.
            </p>

            <p className="text-base text-sage-300 max-w-xl mx-auto mb-10 leading-relaxed">
              Monastery stays. Silent guesthouses. Farm residencies. Walking pilgrimages.
              The kind of rest that works — without the $5,000 price tag or the
              mandatory gratitude journal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start-here"
                className="inline-flex items-center justify-center px-8 py-4 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-all shadow-lg shadow-sage-600/20 hover:shadow-xl hover:shadow-sage-600/30 text-base"
              >
                Find Your Retreat
                <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href="/the-1000-reset"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors border border-white/20 text-base"
              >
                The $1,000 Reset
              </Link>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-sage-300">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-sage-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.4 3.1 15l.9-5.3-4-3.9L5.5 5z" /></svg>
              Verified Safe & Real
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-sage-400" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.3 5.7a.75.75 0 00-1.1-1l-3 3.2-1.4-1.4a.75.75 0 00-1.1 1l2 2a.75.75 0 001.1 0l3.5-3.8z" /></svg>
              No Guru Energy
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-sage-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM7.25 5a.75.75 0 011.5 0v3.25H11a.75.75 0 010 1.5H7.25V5z" /></svg>
              From $0/retreat
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-sage-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12.5c-3 0-5.5-2.5-5.5-5.5S5 2.5 8 2.5s5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5z" /><path d="M10.5 7.5L7 11l-1.5-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
              Honest Reviews Only
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-sage-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zM4.5 8.5a.75.75 0 010-1.5h7a.75.75 0 010 1.5h-7z" /></svg>
              Trauma-Informed
            </span>
          </div>
        </div>
      </section>

      {/* Stats / Social Proof Section */}
      <section className="py-14 md:py-16 bg-white border-b border-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-semibold text-sage-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-sage-700 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-sage-500">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need-Based Browsing Section */}
      <section className="py-20 md:py-28 bg-white" id="needs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
              What do you need right now?
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed mb-3">
              We don&rsquo;t organize by modality. We organize by what&rsquo;s
              actually going on. Because &ldquo;yoga retreat&rdquo; doesn&rsquo;t
              describe what hurts.
            </p>
            <p className="text-sage-500 text-base leading-relaxed">
              Each category is curated by people who&rsquo;ve been there — not by
              marketers. Click what resonates and we&rsquo;ll show you the real options.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {needs.map((need) => (
              <Link
                key={need.slug}
                href={`/needs/${need.slug}`}
                className={`group block p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${need.color}`}
              >
                <div className="mb-4">{need.icon}</div>
                <h3 className={`font-serif text-lg font-semibold mb-2 ${need.textColor}`}>
                  {need.title}
                </h3>
                <p className="text-sm text-sage-600 leading-relaxed">
                  {need.description}
                </p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-sage-500 group-hover:text-sage-700 transition-colors">
                  Browse retreats
                  <svg className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Retreats That Don't Call Themselves Retreats */}
      <section className="py-20 md:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 text-warm-700 rounded-full text-sm font-medium mb-6 border border-warm-200/60">
              The hidden gems
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
              Retreats that don&rsquo;t call themselves retreats
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed mb-3">
              The most healing places often have no marketing budget, no Instagram
              presence, and no idea they&rsquo;re in the wellness industry. They&rsquo;ve
              just been quietly helping people for decades — or centuries.
            </p>
            <p className="text-sage-500 text-base leading-relaxed">
              We find them so you don&rsquo;t have to. Monastery guest programs, farm stays that
              cost less than your grocery bill, walking pilgrimages where the only requirement
              is a pair of boots.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {unconventionalRetreats.map((retreat, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-warm-200/60 hover:border-sage-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="mb-4 text-sage-600">{retreat.icon}</div>
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {retreat.title}
                </h3>
                <p className="text-sm text-sage-600 leading-relaxed">
                  {retreat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/community-run"
              className="inline-flex items-center px-6 py-3 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors text-sm"
            >
              Browse all unconventional retreats
              <svg className="ml-1.5 w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Price Ladder Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
              Radical price transparency
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed mb-3">
              No bait-and-switch. No surprise fees. You see the total cost — nights,
              food, everything — before you even click.
            </p>
            <p className="text-sage-500 text-base leading-relaxed">
              We also track what&rsquo;s not included: airport transfers, extra workshops,
              single-room upgrades, the &ldquo;premium&rdquo; add-ons. Because a $500 retreat
              that becomes $900 on arrival isn&rsquo;t a $500 retreat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {priceLadders.map((ladder) => (
              <Link
                key={ladder.href}
                href={ladder.href}
                className="group block bg-sage-50/40 rounded-2xl p-8 border border-warm-200/60 hover:border-sage-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-sm font-medium text-sage-500 mb-1">{ladder.count} retreats</div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold text-sage-800 mb-3">
                  {ladder.price}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed mb-6">
                  {ladder.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-sage-500 group-hover:text-sage-700 transition-colors">
                  Browse options
                  <svg className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* $1000 Reset Feature */}
          <div className="mt-12 max-w-5xl mx-auto">
            <Link
              href="/the-1000-reset"
              className="group block bg-gradient-to-br from-sage-700 via-sage-800 to-sage-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm text-sage-200 mb-4">
                  Signature Guide
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-semibold mb-3">
                  The $1,000 Reset
                </h3>
                <p className="text-sage-200 text-base md:text-lg max-w-xl leading-relaxed mb-2">
                  If you had $1,000 and needed to reset your nervous system —
                  here are your best options. Curated. Verified. Honest.
                </p>
                <p className="text-sage-300 text-sm max-w-xl leading-relaxed mb-6">
                  Includes flight-realistic budgets, what to pack, what to expect on day one,
                  and what nobody tells you about your first retreat.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-sage-300 group-hover:text-white transition-colors">
                  Read the guide
                  <svg className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
              How it works
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed">
              No account required. No algorithm. No data harvesting.
              Just a simple path from &ldquo;I need something&rdquo; to &ldquo;I found it.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-8 border border-warm-200/60 h-full">
                  <div className="font-display text-4xl font-semibold text-sage-200 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-sage-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sage-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-sage-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/start-here"
              className="inline-flex items-center px-8 py-4 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-all shadow-lg shadow-sage-600/20 text-base"
            >
              Start browsing
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Healing Without Spiritual Pressure Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/70 text-sky-700 rounded-full text-sm font-medium mb-6 border border-sky-200/60">
              Clear labeling
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
              Healing without spiritual pressure
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed mb-3">
              One of the biggest barriers to retreat-going is not knowing if you&rsquo;ll
              be asked to chant, pray, hold crystals, or &ldquo;open your third eye.&rdquo;
              Some people love that. Others need it clearly labeled.
            </p>
            <p className="text-sage-500 text-base leading-relaxed">
              Every retreat on CheapRetreats is tagged so you know exactly what you&rsquo;re
              walking into — before you pack your bag.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {spiritualTags.map((tag, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border ${tag.color}`}
              >
                <h3 className="font-serif text-lg font-semibold mb-2">
                  {tag.label}
                </h3>
                <p className="text-sm leading-relaxed opacity-80">
                  {tag.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl mx-auto text-center">
            <p className="text-sage-500 text-sm leading-relaxed italic">
              Why does this matter? Because a person processing trauma doesn&rsquo;t need
              surprise group breathwork. Because an atheist grieving their partner deserves
              rest without being told it&rsquo;s &ldquo;part of God&rsquo;s plan.&rdquo; Because
              neurodivergent people deserve spaces designed with them in mind, not as an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* Trust / No Bullshit Section */}
      <section className="py-20 md:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/70 text-sage-700 rounded-full text-sm font-medium mb-6">
              The No Bullshit Healing Index&trade;
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
              Every retreat scored on what actually matters
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed mb-3">
              Not vibes. Not aesthetics. Real safety metrics that protect vulnerable
              people seeking healing.
            </p>
            <p className="text-sage-500 text-base leading-relaxed">
              We developed this index because the wellness industry has a safety problem.
              Beautiful photography and five-star reviews don&rsquo;t tell you whether a
              facilitator is trained to handle a panic attack — or whether they&rsquo;ll
              shame you for having one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trustFeatures.map((feature, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-white border border-warm-200/60"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-200/60 flex items-center justify-center mt-0.5">
                  <svg className="w-5 h-5 text-sage-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-sage-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/verified"
              className="inline-flex items-center px-6 py-3 bg-sage-100 text-sage-700 font-medium rounded-full hover:bg-sage-200 transition-colors text-sm"
            >
              Learn about our verification process
              <svg className="ml-1.5 w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
              Real people, real stays
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed">
              Not curated success stories. Not &ldquo;I found myself.&rdquo; Just honest
              accounts of what it was like, what it cost, and whether it helped.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-sage-50/40 rounded-2xl p-8 border border-sage-100"
              >
                <svg className="w-8 h-8 text-sage-300 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 7.05C7.32 7.56 4.53 10.26 4.05 14H7v6H1v-5.95C1.05 8.25 5.51 3.4 11 3v4.05zm12 0C19.32 7.56 16.53 10.26 16.05 14H19v6h-6v-5.95C13.05 8.25 17.51 3.4 23 3v4.05z" />
                </svg>
                <p className="text-sage-700 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sage-800 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-sage-500">
                      {testimonial.need} &middot; {testimonial.location}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-sage-600 bg-sage-100 px-3 py-1 rounded-full">
                    {testimonial.cost}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center px-6 py-3 bg-sage-100 text-sage-700 font-medium rounded-full hover:bg-sage-200 transition-colors text-sm"
            >
              Read all reviews
              <svg className="ml-1.5 w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Community-Run Section */}
      <section className="py-20 md:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
                The spaces that actually heal
              </h2>
              <p className="text-sage-600 text-lg leading-relaxed mb-4">
                The most powerful healing often happens in the least marketed
                places. We highlight community-run, nonprofit, and
                worker-owned spaces that put people before profit.
              </p>
              <p className="text-sage-500 text-base leading-relaxed mb-6">
                Many of these places have been hosting guests for decades — even centuries.
                They don&rsquo;t have SEO strategies or influencer partnerships. They have
                gardens, libraries, shared meals, and rooms that smell like wood and old books.
                That&rsquo;s the point.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {communitySpaces.map((space) => (
                  <span
                    key={space}
                    className="px-3 py-1.5 bg-warm-100 text-warm-700 text-sm rounded-full border border-warm-200/60"
                  >
                    {space}
                  </span>
                ))}
              </div>
              <Link
                href="/community-run"
                className="inline-flex items-center px-6 py-3 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors text-sm"
              >
                Browse community-run retreats
                <svg className="ml-1.5 w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </Link>
            </div>

            {/* Decorative visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sage-100 via-warm-100 to-clay-100 border border-warm-200/60 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-sage-200/60 mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-10 h-10 text-sage-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 40V20l18-14 18 14v20H30v-12h-12v12H6z" />
                      </svg>
                    </div>
                    <p className="font-serif text-xl text-sage-700 italic leading-relaxed">
                      &ldquo;These places have been healing people for centuries. <br className="hidden md:block" />
                      They just don&rsquo;t have a marketing budget.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First-Time Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-sky-50 to-warm-50 rounded-3xl p-8 md:p-14 border border-sky-100/60">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/70 text-sky-700 rounded-full text-sm font-medium mb-6">
                  For first-timers
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
                  Never been on a retreat?
                </h2>
                <p className="text-sage-600 text-lg leading-relaxed mb-4">
                  That&rsquo;s okay. Most people haven&rsquo;t. And the idea can be
                  genuinely scary — sleeping somewhere unfamiliar, being around strangers,
                  not knowing the rules.
                </p>
                <p className="text-sage-600 leading-relaxed mb-4">
                  We built a guide that covers what to expect, what won&rsquo;t
                  happen, your boundaries, how to leave early if you need to, and
                  how to know if you&rsquo;re ready (spoiler: you don&rsquo;t need
                  to be).
                </p>
                <p className="text-sage-500 leading-relaxed mb-8">
                  We also answer the questions nobody else does: What if I cry? What if
                  I hate it? What if I&rsquo;m the only person there who isn&rsquo;t
                  &ldquo;spiritual&rdquo;? What if I just want to leave?
                  All normal. All okay.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/first-time"
                    className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white font-medium rounded-full hover:bg-sky-700 transition-colors text-sm"
                  >
                    Read the First-Time Guide
                    <svg className="ml-1.5 w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 7h10M8 3l4 4-4 4" />
                    </svg>
                  </Link>
                  <Link
                    href="/start-here"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200 text-sm"
                  >
                    Start Here Instead
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Cult Wellness / Imperfect Healing */}
      <section className="py-20 md:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-sage-900 mb-8 leading-tight">
              You don&rsquo;t need to be ready.
            </h2>
            <div className="space-y-6 text-sage-600 text-lg md:text-xl leading-relaxed">
              <p>You don&rsquo;t need to believe anything.</p>
              <p>You don&rsquo;t need to &ldquo;open your heart&rdquo; on schedule.</p>
              <p>You don&rsquo;t need a linen wardrobe or a gratitude practice.</p>
              <p>You don&rsquo;t need to have a diagnosis or a therapist&rsquo;s referral.</p>
              <p>You don&rsquo;t need to &ldquo;deserve&rdquo; it.</p>
              <p className="text-sage-500 text-base italic pt-2">
                You just need a safe place to land for a few days.
                <br />
                That&rsquo;s what we help you find.
              </p>
            </div>
            <div className="mt-12">
              <Link
                href="/manifesto"
                className="inline-flex items-center px-8 py-4 bg-sage-800 text-white font-medium rounded-full hover:bg-sage-900 transition-colors"
              >
                Read Our Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility / Financial Aid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-900 mb-4">
              Can&rsquo;t afford a retreat?
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed mb-3">
              We&rsquo;re a bridge, not a gatekeeper. Many retreats offer ways to
              attend for less — or free.
            </p>
            <p className="text-sage-500 text-base leading-relaxed">
              We believe that if you need rest, you shouldn&rsquo;t have to prove you
              deserve it first. These options exist because enough people agree.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { title: "Sliding Scale", description: "Pay what you can. Many retreats adjust pricing based on your situation — no paperwork, no shame, just honesty.", href: "/under-500" },
              { title: "Scholarships", description: "Full or partial funding from retreat centers and community sponsors. We list which ones have open applications right now.", href: "/scholarships" },
              { title: "Work Exchange", description: "Help with meals, cleaning, or gardening in exchange for your stay. Usually 2-4 hours per day, the rest is yours.", href: "/work-exchange" },
              { title: "Donation-Based", description: "Pay what feels right afterward. No minimum. No judgment. Some of the best retreats in the world run on this model.", href: "/under-500" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group block p-6 bg-sage-50/50 rounded-2xl border border-sage-100 hover:border-sage-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-sage-600 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img src={sectionImages.cta} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50/95 via-warm-50/90 to-warm-50/95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-sage-900 mb-6 leading-tight">
              Healing should not be <br className="hidden sm:block" />a luxury good.
            </h2>
            <p className="text-sage-600 text-lg leading-relaxed mb-4">
              You don&rsquo;t need $5,000 and a linen wardrobe to rest. You just need
              to know where to go.
            </p>
            <p className="text-sage-500 text-base leading-relaxed mb-10">
              We&rsquo;ve done the research, checked the safety, talked to past guests,
              and listed the real price. All that&rsquo;s left is you deciding you&rsquo;re
              worth a few quiet days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start-here"
                className="inline-flex items-center justify-center px-8 py-4 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-all shadow-lg shadow-sage-600/20 text-base"
              >
                Find Your Retreat
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200 text-base"
              >
                Common Questions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is CheapRetreats?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CheapRetreats is a global retreat discovery platform that helps people find affordable, safe, verified healing retreats organized by human need — like burnout recovery, grief, quiet rest, and more — rather than by modality. Retreats range from $0 (donation-based) to $1,000, and include monastery stays, farm residencies, walking pilgrimages, and silent guesthouses alongside traditional retreat centers.",
                },
              },
              {
                "@type": "Question",
                name: "Are cheap retreats safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every retreat on CheapRetreats is scored using our No Bullshit Healing Index, which rates safety, consent culture, facilitator training, trauma awareness, accessibility, and refund policies. We also screen for trauma-informed practices, opt-out policies, and neurodivergent accommodations. We verify retreats so you don't have to worry.",
                },
              },
              {
                "@type": "Question",
                name: "How much does an affordable retreat cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Retreats on CheapRetreats range from $0 to under $1,000 for the total stay including accommodation and often meals. We list donation-based, sliding-scale, work-exchange, and scholarship-funded retreats for those who need additional financial support. Monastery stays can be as low as $0-50 per night, and many farm stays and walking pilgrimages cost little more than food.",
                },
              },
              {
                "@type": "Question",
                name: "What types of retreats does CheapRetreats offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CheapRetreats organizes retreats by human need: burnout recovery, grief retreats, depression recovery, trauma-sensitive retreats, quiet retreats (no talking required), loneliness retreats, caregiver recovery, and 'I just need to stop' retreats. We also feature unconventional healing spaces like monastery stays, farm stays, art residencies, walking pilgrimages, silent guesthouses, and volunteer-light stays.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to be spiritual to go on a retreat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Every retreat on CheapRetreats is clearly tagged as secular, spiritual-optional, or religious so you know exactly what to expect. We also tag retreats as trauma-informed and neurodivergent-friendly. Many of our most popular retreats have no spiritual component at all — just rest, nature, quiet, and good food.",
                },
              },
              {
                "@type": "Question",
                name: "What are 'retreats that don't call themselves retreats'?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "These are healing spaces that don't market themselves as wellness retreats — monastery guest programs, working farms that host visitors, art residencies, walking pilgrimages like the Camino de Santiago, silent guesthouses, and volunteer-light stays. They're often the most affordable and authentic healing experiences available, and CheapRetreats is one of the few places that catalogs them.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
