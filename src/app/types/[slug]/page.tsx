import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  retreatTypes,
  getRetreatsByTypeSlug,
  getRetreatSlug,
} from "@/lib/retreats-data";
import { RetreatCard } from "@/components/RetreatCard";
import { typeImages, heroImages } from "@/lib/images";

/* -------------------------------------------------------------------------- */
/*  Static params                                                              */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return retreatTypes.map((t) => ({ slug: t.slug }));
}

/* -------------------------------------------------------------------------- */
/*  Metadata (Next.js 16 async params)                                         */
/* -------------------------------------------------------------------------- */

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const type = retreatTypes.find((t) => t.slug === slug);
  if (!type) return {};
  return {
    title: `${type.name} — Affordable ${type.name} Retreats Under $1,000`,
    description: type.description,
    alternates: { canonical: `https://cheapretreats.com/types/${type.slug}` },
  };
}

/* -------------------------------------------------------------------------- */
/*  Per-type "What to Expect" content                                          */
/* -------------------------------------------------------------------------- */

const whatToExpectByType: Record<string, string[]> = {
  "work-exchange": [
    "Typically 4 to 5 hours of daily work in exchange for room and board",
    "Tasks may include gardening, cooking, cleaning, maintenance, or guest services",
    "Community meals with other volunteers and residents",
    "Structured free time for personal healing, reading, or exploration",
    "No prior skills required — training provided on-site",
  ],
  meditation: [
    "Multiple guided meditation sessions throughout each day",
    "Teacher-led instruction for both beginners and experienced practitioners",
    "Periods of noble silence, sometimes throughout the entire retreat",
    "Simple vegetarian meals eaten in mindful awareness",
    "Optional individual meetings with teachers for personal guidance",
  ],
  "silent-retreat": [
    "Extended periods of silence — sometimes for the full duration of the retreat",
    "No phones, no conversation, no social performance",
    "Structured daily rhythm with meals, rest, and optional meditation",
    "A surprising amount of emotional processing that silence makes possible",
    "Staff and facilitators available if you need support at any time",
  ],
  monastery: [
    "Following the daily rhythms of monastic life — bells, meals, chapel hours",
    "Simple private or shared rooms with minimal furnishings",
    "Three meals per day, often eaten in silence",
    "Optional participation in prayer, chanting, or worship services",
    "Open to people of all faiths or no faith — no conversion pressure",
  ],
  "rest-retreat": [
    "No workshops, no schedules, no mandatory activities",
    "Private or shared rooms with comfortable bedding designed for real rest",
    "Meals prepared for you — no cooking, no decisions",
    "Nature access, walking trails, or garden spaces for gentle movement",
    "Permission to do absolutely nothing, with no guilt attached",
  ],
  "grief-retreat": [
    "Facilitated sharing circles led by trained grief counselors",
    "A community of people who understand loss without needing explanations",
    "Nature walks, journaling, and creative expression as optional practices",
    "Meals and logistics handled so you can focus on processing",
    "Resources for continued support after the retreat ends",
  ],
  "nature-retreat": [
    "Immersion in natural landscapes — forests, mountains, coastlines, islands",
    "Guided nature walks, forest bathing, or wildlife observation",
    "Accommodations ranging from cabins to simple lodges in natural settings",
    "Minimal technology and deliberate disconnection from screens",
    "Nature-based therapeutic practices grounded in research",
  ],
  "community-retreat": [
    "Shared meals as a daily practice of togetherness",
    "Facilitated group activities designed for genuine connection, not forced intimacy",
    "A mix of structured time and free time to build relationships naturally",
    "People from different backgrounds brought together by shared intention",
    "Identity-affirming spaces where you can show up as yourself",
  ],
  "trauma-sensitive": [
    "Consent-based practices where you always choose your level of participation",
    "Facilitators trained in trauma-informed care and somatic awareness",
    "Clear boundaries, private rooms, and opt-out policies for every activity",
    "Small group sizes that allow for individual attention and safety",
    "Clinical referrals and follow-up resources provided as standard",
  ],
  "caregiver-retreat": [
    "Respite-focused programming designed for people who give care to others",
    "Peer support circles with others who understand caregiver exhaustion",
    "Meals, logistics, and scheduling handled so you can stop managing",
    "Optional massage, bodywork, or gentle movement sessions",
    "No expectation to be productive, social, or transformed",
  ],
  "creative-retreat": [
    "Unstructured creative time — writing, visual art, music, or craft",
    "Private spaces designed for focused work without interruption",
    "Optional workshops or mentorship, never mandatory performance",
    "Meals provided so creative flow is not interrupted by logistics",
    "Nature settings that inspire without demanding attention",
  ],
  "spiritual-community": [
    "Participation in the daily rhythms of a living spiritual tradition",
    "Shared worship, chanting, prayer, or meditation — always optional",
    "Community meals and work practice as forms of contemplation",
    "Welcoming of visitors regardless of religious background",
    "Extended stays possible at many communities",
  ],
  "digital-detox": [
    "Phones and devices collected or voluntarily surrendered on arrival",
    "Off-grid cabins or tech-free zones within the retreat space",
    "Re-learning boredom, daydreaming, and unmediated attention",
    "Nature-based activities that replace screen time with real experience",
    "Gradual re-introduction protocols for returning to connected life",
  ],
  "farm-stay": [
    "Hands-on agricultural work — animal care, planting, harvesting, composting",
    "Early mornings and physical labor that reset your nervous system",
    "Farm-to-table meals made from what you helped grow",
    "Connection to seasonal rhythms and the pace of growing things",
    "Community with other farm workers and long-term residents",
  ],
  somatic: [
    "Body-centered practices — breathwork, movement, somatic experiencing",
    "Consent-based touch work with trained practitioners",
    "Small groups that allow for individual attention and safety",
    "Integration sessions to process what arises during bodywork",
    "No pressure to share verbally — the body leads the process",
  ],
  "walking-retreat": [
    "Daily guided walks through beautiful and meaningful landscapes",
    "Walking as a meditative practice, not athletic performance",
    "Comfortable pace suitable for most fitness levels",
    "Shared meals and evening gatherings with fellow walkers",
    "A sense of pilgrimage — the path itself is the practice",
  ],
  "sound-healing": [
    "Sound baths with singing bowls, gongs, chimes, and other instruments",
    "Vibrational therapy sessions in natural or purpose-built acoustic spaces",
    "Guided relaxation combined with sustained harmonic frequencies",
    "No musical ability required — you receive the sound, not perform it",
    "Nature settings that complement the acoustic experience",
  ],
  "hot-springs": [
    "Access to natural geothermal pools for soaking and relaxation",
    "Alternating hot and cold water immersion protocols",
    "Mineral-rich waters with therapeutic properties",
    "Quiet soaking hours and communal bathing traditions",
    "Surrounding natural landscapes for hiking and contemplation",
  ],
  wellness: [
    "Full-service retreat centers with yoga, classes, and community events",
    "Buffet-style healthy meals included in the stay",
    "Access to pools, saunas, lakes, or other wellness amenities",
    "A good entry point if you are not sure what type of retreat suits you",
    "Flexible schedules where you can participate as much or as little as you want",
  ],
  "learning-retreat": [
    "Workshops, courses, and skill-building in a retreat environment",
    "Expert facilitators and hands-on learning opportunities",
    "Time for both structured learning and personal reflection",
    "Community of fellow learners with shared interests",
    "Nature-adjacent settings that support concentration and creativity",
  ],
};

/* -------------------------------------------------------------------------- */
/*  Per-type FAQ content                                                       */
/* -------------------------------------------------------------------------- */

interface FAQ {
  question: string;
  answer: string;
}

const faqsByType: Record<string, FAQ[]> = {
  "work-exchange": [
    { question: "Do I need special skills for a work-exchange retreat?", answer: "No. Most work-exchange programs provide all training on-site. Common tasks include gardening, cooking, cleaning, and general maintenance. What matters is willingness, not expertise." },
    { question: "How many hours per day will I work?", answer: "Most programs ask for 4 to 5 hours of work per day, typically in the morning. The rest of the day is yours for rest, exploration, or personal practice." },
    { question: "Is work exchange really free?", answer: "Yes. You trade labor for room and board. Some programs may ask for a small application fee, but the stay itself costs nothing. You are responsible for your own travel to and from the retreat." },
  ],
  meditation: [
    { question: "Do I need meditation experience to attend?", answer: "No. Most meditation retreats welcome complete beginners and provide instruction from the ground up. Teachers are available to help you find a practice that works for your mind." },
    { question: "What is noble silence?", answer: "Noble silence means refraining from speaking, eye contact, and gesturing with other participants. It creates a container for deeper internal work. Staff are always available if you need something." },
    { question: "What if I cannot sit still for long periods?", answer: "Walking meditation, standing meditation, and lying-down meditation are all legitimate practices offered at most retreats. No one expects you to sit motionless for hours on your first retreat." },
  ],
  "silent-retreat": [
    { question: "What if I find silence unbearable?", answer: "This is more common than you might expect, and facilitators are prepared for it. You can speak with staff at any time. Many people find that the discomfort passes after the first day and is replaced by a surprising sense of relief." },
    { question: "Is a silent retreat the same as a meditation retreat?", answer: "Not necessarily. Some silent retreats include meditation, but others simply offer quiet rest without any practice or instruction. The shared element is the absence of social performance." },
    { question: "Can I bring my phone?", answer: "Policies vary. Some retreats collect phones on arrival; others ask you to keep them in your room on airplane mode. Check with your specific retreat for their policy." },
  ],
  monastery: [
    { question: "Do I have to be religious to stay at a monastery?", answer: "No. Most monasteries welcome guests of all faiths or no faith at all. Participation in religious services is almost always optional. The monks and nuns are accustomed to hosting seekers of every background." },
    { question: "What is the daily schedule like?", answer: "Monastic days typically begin early (5 or 6 AM) with prayer or meditation, followed by meals, work periods, and more prayer. Guests usually follow a modified schedule and can opt out of activities." },
    { question: "Are monastery stays really that affordable?", answer: "Yes. Many monasteries operate on a donation basis or charge modest fees to cover food and lodging. They are among the most affordable retreat options in the world." },
  ],
  "rest-retreat": [
    { question: "Is it really okay to just do nothing?", answer: "Yes. Rest retreats are specifically designed for people who need permission to stop. There is no agenda, no expectation of transformation, and no pressure to participate in anything." },
    { question: "What if I feel guilty about resting?", answer: "That is one of the most common feelings people bring to rest retreats. The structure — meals provided, no schedule — is designed to remove the decisions that keep you performing. The guilt usually fades by day two." },
    { question: "Are rest retreats good for burnout?", answer: "They are among the most commonly recommended retreat types for burnout. Unlike activity-based retreats, rest retreats do not add to your to-do list. They subtract from it." },
  ],
  "grief-retreat": [
    { question: "How recent does my loss need to be?", answer: "There is no timeline for grief. Some people attend grief retreats weeks after a loss; others attend years or decades later. The retreats welcome anyone carrying grief, regardless of when or what kind." },
    { question: "Will I be pressured to share in a group?", answer: "No. Sharing circles are facilitated but always voluntary. Many people spend entire retreats listening and being witnessed without speaking. That is a valid and respected way to participate." },
    { question: "What kinds of loss are included?", answer: "All kinds. Death of a loved one, divorce, job loss, loss of health, estrangement, miscarriage, loss of identity. Grief retreats understand that loss takes many forms." },
  ],
  "nature-retreat": [
    { question: "Do I need to be physically fit?", answer: "Most nature retreats are designed for a range of fitness levels. Activities like forest bathing and gentle walks do not require athleticism. Check with your specific retreat about accessibility." },
    { question: "What about bugs, weather, and roughing it?", answer: "Accommodations range from comfortable cabins with electricity and plumbing to more rustic options. Most nature retreats are not camping — they are lodging in natural settings with meals provided." },
    { question: "Is nature therapy evidence-based?", answer: "Yes. Research on forest bathing, nature exposure, and green exercise shows measurable reductions in cortisol, blood pressure, and rumination. The science supports what most people feel intuitively." },
  ],
  "community-retreat": [
    { question: "What if I am introverted or socially anxious?", answer: "Community retreats are designed to be gentler than ordinary social situations. Activities are structured to reduce performance pressure, and quiet time is always available. Many introverts find these retreats surprisingly comfortable." },
    { question: "Will I be forced to share personal information?", answer: "No. Sharing is always voluntary. Community retreats focus on parallel presence — being around others without the pressure to perform or disclose." },
    { question: "Are these retreats identity-specific?", answer: "Some are. There are community retreats specifically for BIPOC, LGBTQ+, mothers, veterans, and other groups. Others are open to everyone. Check the retreat description for details." },
  ],
  "trauma-sensitive": [
    { question: "Do I need a diagnosis to attend?", answer: "No. Trauma-sensitive retreats welcome anyone who resonates with the approach. You do not need a formal trauma diagnosis. If you feel that safety and consent-based practices would help, this type may be right for you." },
    { question: "How are these different from regular retreats?", answer: "Trauma-sensitive retreats are designed with specific safety protocols: consent-based touch, opt-out policies, trained facilitators, small groups, private rooms, and clinical referrals. The emphasis is on not re-traumatizing." },
    { question: "Is this a substitute for therapy?", answer: "No. Trauma-sensitive retreats complement therapy but do not replace it. Many retreats provide referrals for continued clinical support after the retreat ends." },
  ],
  "caregiver-retreat": [
    { question: "What if I feel guilty about leaving the person I care for?", answer: "This is the most common barrier caregivers face. Caregiver retreats are designed for exactly this situation — they help you understand that caring for yourself is not selfish; it is necessary for sustainable caregiving." },
    { question: "Are these only for professional caregivers?", answer: "No. Caregiver retreats serve anyone who provides ongoing care — parents of children with special needs, adult children caring for aging parents, partners of people with chronic illness, and professional caregivers alike." },
    { question: "How short can a caregiver retreat be?", answer: "Many are designed as weekends (2 to 3 nights) specifically because caregivers cannot be away for long. Some offer single-day respite as well." },
  ],
  "creative-retreat": [
    { question: "Do I need to be a professional artist or writer?", answer: "No. Creative retreats are for anyone who wants uninterrupted time to create or to reconnect with creativity. No portfolio, no credentials, no finished product required." },
    { question: "Will there be workshops or instruction?", answer: "Some creative retreats offer optional workshops or mentorship. Others provide only space and time. Check the specific retreat to understand the level of structure offered." },
    { question: "What if I am blocked and cannot create anything?", answer: "That is a perfectly valid reason to attend. Many creative retreats understand that creative block is not a failure of will — it is a symptom of depletion. Rest and space often restore what productivity culture took away." },
  ],
  "spiritual-community": [
    { question: "Will I be expected to convert or adopt beliefs?", answer: "No. Living spiritual communities that host guests understand they are welcoming people of all backgrounds. Participation in worship and practice is always optional. Curiosity is welcome; commitment is not expected." },
    { question: "What is daily life like in a spiritual community?", answer: "Days typically include communal meals, shared work (gardening, cooking, cleaning), periods of prayer or meditation, and free time. The rhythm is simple and repetitive by design." },
    { question: "How long can I stay?", answer: "Many spiritual communities welcome guests for a week or more. Some, like Taize and Plum Village, have programs specifically designed for extended stays of several weeks." },
  ],
  "digital-detox": [
    { question: "Do I really have to give up my phone?", answer: "Most digital-detox retreats collect devices on arrival. Some offer a lockbox so you know your phone is safe. Others have designated check-in times. The point is genuine disconnection, not deprivation." },
    { question: "What if there is an emergency at home?", answer: "Retreats provide an emergency contact number that family members can call. Staff will come find you immediately if something urgent arises. This is standard practice." },
    { question: "How long does it take to adjust?", answer: "Most people report that the first 24 hours are the hardest — phantom phone checking, restlessness, low-grade anxiety. By day two or three, most feel a noticeable shift toward calm." },
  ],
  "farm-stay": [
    { question: "Is farm work physically demanding?", answer: "It can be, but most farm stays accommodate a range of abilities. Tasks are assigned based on what you can do. Lighter work like seed sorting, herb harvesting, and egg collecting is always available." },
    { question: "What are the hours like?", answer: "Farm life follows natural rhythms — early mornings and early evenings. Most stays involve 4 to 6 hours of work per day with plenty of rest time between tasks." },
    { question: "Is a farm stay therapeutic?", answer: "Many people find it deeply so. The combination of physical labor, natural rhythms, animal contact, and simple meals creates a grounding effect that is hard to replicate in other settings." },
  ],
  somatic: [
    { question: "What does somatic mean?", answer: "Somatic means body-based. Somatic retreats use the body as the primary vehicle for healing — through breathwork, movement, touch, and body awareness practices. The approach recognizes that trauma and stress live in the body, not just the mind." },
    { question: "Will someone touch me?", answer: "Only with your explicit consent, every time. Consent-based touch is a foundational principle of somatic work. You can always say no, change your mind, or request a modification." },
    { question: "Do I need to be flexible or physically fit?", answer: "No. Somatic work meets you where you are. Practices are adapted to your body, your comfort level, and your nervous system. There is no performance standard." },
  ],
  "walking-retreat": [
    { question: "How far do we walk each day?", answer: "Distances vary by retreat but are typically moderate — 5 to 10 miles per day at a gentle pace. The focus is contemplative walking, not athletic endurance. Rest days are often built in." },
    { question: "Do I need special equipment?", answer: "Comfortable, broken-in walking shoes or boots are essential. Most retreats provide a packing list. You do not need expensive gear — just reliable footwear and weather-appropriate clothing." },
    { question: "What makes walking retreats healing?", answer: "Walking engages bilateral brain stimulation, similar to EMDR therapy. Combined with nature, rhythm, and the absence of screens, it creates conditions for processing that sitting still sometimes cannot." },
  ],
  "sound-healing": [
    { question: "Is sound healing scientifically supported?", answer: "Research is emerging. Studies show that sound baths can reduce anxiety, lower heart rate, and improve mood. The mechanisms are not fully understood, but the relaxation response is well-documented." },
    { question: "Do I need musical ability?", answer: "No. Sound healing is a receptive practice — you lie down and let the sound wash over you. There is nothing to learn, perform, or get right." },
    { question: "What instruments are used?", answer: "Common instruments include crystal and Tibetan singing bowls, gongs, tuning forks, chimes, and drums. Some practitioners also use voice. The specific instruments vary by facilitator." },
  ],
  "hot-springs": [
    { question: "Are hot springs safe for everyone?", answer: "Most people can safely enjoy hot springs. However, those with heart conditions, pregnancy, or certain skin conditions should consult a doctor first. Most retreat centers provide guidelines on soaking duration and temperature." },
    { question: "Do I need to bring a swimsuit?", answer: "Policies vary. Some hot springs are clothing-optional; others require swimwear. Check with your specific retreat. Towels and robes are usually provided." },
    { question: "What makes hot springs therapeutic?", answer: "Mineral-rich geothermal water combined with heat promotes muscle relaxation, improved circulation, and stress reduction. The combination of natural setting and warm water creates a uniquely calming experience." },
  ],
  wellness: [
    { question: "Are wellness centers good for first-timers?", answer: "Yes. Wellness centers are often the best entry point for people who have never attended a retreat. They offer variety, structure, and community without requiring commitment to a single modality." },
    { question: "Do I have to do yoga?", answer: "No. Most wellness centers offer a menu of classes and activities. Yoga is usually available but never mandatory. You can spend your time in whatever way serves you best." },
    { question: "What is included in the price?", answer: "Typically, lodging, all meals, and access to classes and facilities (pools, saunas, meditation halls, trails). Some workshops or bodywork sessions may be extra. Check the specific center for details." },
  ],
  "learning-retreat": [
    { question: "What kinds of things can I learn?", answer: "Learning retreats cover a wide range — writing, art, permaculture, herbalism, mindfulness teaching, leadership, and more. The setting is retreat-like (nature, meals provided, community) even when the content is educational." },
    { question: "Is it like going to school?", answer: "Not exactly. Learning retreats blend education with rest, nature, and community. Class sizes are small, schedules are humane, and there are no grades or tests. Think workshop-meets-vacation." },
    { question: "Are certificates or credentials offered?", answer: "Some learning retreats offer certificates of completion or continuing education credits. Others are purely for personal enrichment. Check the specific program for details." },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Related types mapping                                                      */
/* -------------------------------------------------------------------------- */

const relatedTypesMap: Record<string, string[]> = {
  "work-exchange": ["farm-stay", "community-retreat", "monastery", "spiritual-community"],
  meditation: ["silent-retreat", "monastery", "digital-detox", "rest-retreat"],
  "silent-retreat": ["meditation", "monastery", "nature-retreat", "digital-detox"],
  monastery: ["silent-retreat", "meditation", "spiritual-community", "walking-retreat"],
  "rest-retreat": ["nature-retreat", "digital-detox", "silent-retreat", "wellness"],
  "grief-retreat": ["community-retreat", "walking-retreat", "trauma-sensitive", "nature-retreat"],
  "nature-retreat": ["walking-retreat", "digital-detox", "rest-retreat", "farm-stay"],
  "community-retreat": ["grief-retreat", "spiritual-community", "wellness", "caregiver-retreat"],
  "trauma-sensitive": ["somatic", "grief-retreat", "rest-retreat", "caregiver-retreat"],
  "caregiver-retreat": ["rest-retreat", "community-retreat", "wellness", "nature-retreat"],
  "creative-retreat": ["rest-retreat", "nature-retreat", "digital-detox", "farm-stay"],
  "spiritual-community": ["monastery", "meditation", "community-retreat", "walking-retreat"],
  "digital-detox": ["nature-retreat", "silent-retreat", "rest-retreat", "farm-stay"],
  "farm-stay": ["work-exchange", "nature-retreat", "community-retreat", "digital-detox"],
  somatic: ["trauma-sensitive", "sound-healing", "walking-retreat", "rest-retreat"],
  "walking-retreat": ["nature-retreat", "grief-retreat", "silent-retreat", "somatic"],
  "sound-healing": ["somatic", "meditation", "wellness", "nature-retreat"],
  "hot-springs": ["nature-retreat", "rest-retreat", "wellness", "silent-retreat"],
  wellness: ["rest-retreat", "meditation", "nature-retreat", "community-retreat"],
  "learning-retreat": ["creative-retreat", "community-retreat", "wellness", "farm-stay"],
};

/* -------------------------------------------------------------------------- */
/*  goodFor tag to descriptive statement mapping                               */
/* -------------------------------------------------------------------------- */

const goodForDescriptions: Record<string, string> = {
  Burnout: "You are running on empty and need more than a weekend off",
  "Deep reset": "You are ready to step away from everything and start fresh",
  "Career transition": "You are between chapters and need space to think clearly",
  Stopping: "You have forgotten how to stop and need permission to do nothing",
  Quiet: "The noise has become too much and you need genuine silence",
  Grief: "You are carrying a loss and need space where that is understood",
  Depression: "The weight has settled in and you need a change of environment",
  Loneliness: "You are isolated and need to be around people who understand",
  Trauma: "You are carrying something heavy and need a safe, consent-based space",
  Caregivers: "You take care of everyone else and no one takes care of you",
  "First-timers": "You have never been on a retreat and want a gentle entry point",
  Overwhelm: "Everything is too much and you need to subtract, not add",
  "Creative block": "The creative well has run dry and you need space to refill it",
  "Gentle reset": "You do not need a dramatic change, just a soft pause",
};

/* -------------------------------------------------------------------------- */
/*  Page component                                                             */
/* -------------------------------------------------------------------------- */

export default async function TypePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const type = retreatTypes.find((t) => t.slug === slug);
  if (!type) notFound();

  const typeRetreats = getRetreatsByTypeSlug(slug);
  const sortedRetreats = [...typeRetreats].sort((a, b) => a.price - b.price);

  // Aggregate goodFor tags
  const goodForTags = [
    ...new Set(typeRetreats.flatMap((r) => r.goodFor)),
  ];

  // Price range
  const prices = typeRetreats.map((r) => r.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const hasFree = minPrice === 0;
  const hasScholarships = typeRetreats.some((r) => r.scholarship);
  const hasSlidingScale = typeRetreats.some((r) => r.slidingScale);
  const hasWorkExchange = typeRetreats.some((r) => r.workExchange);

  // What to expect
  const expectations = whatToExpectByType[slug] || [
    "A structured program designed around this specific type of healing",
    "Meals and accommodations included in the listed price",
    "Small group sizes that allow for personal attention",
    "Facilitators with relevant training and experience",
    "Clear opt-out policies for every activity",
  ];

  // FAQs
  const faqs = faqsByType[slug] || [
    { question: `Do I need experience with ${type.name.toLowerCase()} to attend?`, answer: "No prior experience is required. These retreats welcome people at every level, including complete beginners. Facilitators provide guidance and support throughout." },
    { question: `How much does a ${type.name.toLowerCase()} retreat cost?`, answer: `Prices for verified ${type.name.toLowerCase()} retreats on CheapRetreats range from ${hasFree ? "free (work exchange or donation-based)" : `$${minPrice}`} to $${maxPrice}. Many offer sliding-scale pricing or scholarships.` },
    { question: "What should I bring?", answer: "Most retreats provide a detailed packing list after booking. In general, bring comfortable clothing, any personal medications, a journal if you like writing, and an open mind. Leave expectations at home." },
  ];

  // Related types
  const relatedSlugs = relatedTypesMap[slug] || [];
  const relatedTypes = relatedSlugs
    .map((s) => retreatTypes.find((t) => t.slug === s))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <img src={typeImages[slug] || heroImages.retreatsIndex} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-900/85 via-sage-800/65 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8 border border-white/20 backdrop-blur-sm">
            Browse by Type
          </div>
          <div className="text-4xl mb-4" role="img" aria-hidden="true">
            {type.icon}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4 leading-[1.1]">
            {type.name}
          </h1>
          <p className="text-lg md:text-xl text-sage-100 leading-relaxed max-w-xl mx-auto">
            {type.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-sage-200">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-sage-300"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.3 5.7a.75.75 0 00-1.1-1l-3 3.2-1.4-1.4a.75.75 0 00-1.1 1l2 2a.75.75 0 001.1 0l3.5-3.8z"
                />
              </svg>
              {typeRetreats.length}{" "}
              {typeRetreats.length === 1 ? "retreat" : "retreats"} verified
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-sage-300"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM7.25 5a.75.75 0 011.5 0v3.25H11a.75.75 0 010 1.5H7.25V5z" />
              </svg>
              {hasFree ? "From free" : `From $${minPrice}`}
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-sage-300"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.4 3.1 15l.9-5.3-4-3.9L5.5 5z" />
              </svg>
              Up to $
              {maxPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-14 md:py-20 bg-white border-b border-warm-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            Who this is for
          </h2>
          <p className="text-sage-600 mb-8">
            People come to {type.name.toLowerCase()} for different reasons. You
            do not need to check every box — one is enough.
          </p>
          <div className="space-y-3">
            {goodForTags.map((tag) => (
              <div
                key={tag}
                className="flex gap-3 items-start p-4 bg-sage-50/50 rounded-xl border border-sage-100/80"
              >
                <span className="text-sage-400 font-medium">&mdash;</span>
                <span className="text-sage-700 leading-relaxed">
                  {goodForDescriptions[tag] || tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            What to expect
          </h2>
          <p className="text-sage-600 mb-8">
            Every retreat is different, but here is what is common across
            verified {type.name.toLowerCase()}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expectations.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 items-start p-4 bg-white rounded-xl border border-warm-200/60"
              >
                <svg
                  className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                  />
                </svg>
                <span className="text-sage-700 text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreat Listings */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900">
                {type.name} retreats
              </h2>
              <p className="text-sage-500 text-sm mt-1">
                {typeRetreats.length} verified options, sorted by price
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {sortedRetreats.map((retreat) => (
              <RetreatCard key={getRetreatSlug(retreat)} retreat={retreat} />
            ))}
          </div>
        </div>
      </section>

      {/* Price Range */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-warm-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            What does it cost?
          </h2>
          <p className="text-sage-600 mb-8">
            Total cost, upfront. No hidden fees. Here is the price range for
            verified {type.name.toLowerCase()}.
          </p>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-warm-200/60">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-sm text-sage-500 uppercase tracking-wider font-medium mb-1">
                  Lowest
                </div>
                <div className="font-display text-3xl font-semibold text-sage-800">
                  {hasFree ? "Free" : `$${minPrice}`}
                </div>
                <div className="text-xs text-sage-400 mt-1">
                  {hasFree ? "Work exchange or donation" : "Per stay"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-sage-500 uppercase tracking-wider font-medium mb-1">
                  Highest
                </div>
                <div className="font-display text-3xl font-semibold text-sage-800">
                  ${maxPrice.toLocaleString()}
                </div>
                <div className="text-xs text-sage-400 mt-1">Per stay</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-sage-500 uppercase tracking-wider font-medium mb-1">
                  Options
                </div>
                <div className="font-display text-3xl font-semibold text-sage-800">
                  {typeRetreats.length}
                </div>
                <div className="text-xs text-sage-400 mt-1">
                  Verified retreats
                </div>
              </div>
            </div>

            {(hasScholarships || hasSlidingScale || hasWorkExchange) && (
              <div className="border-t border-warm-200/60 pt-5">
                <p className="text-sm text-sage-500 mb-3">
                  Ways to reduce cost:
                </p>
                <div className="flex flex-wrap gap-2">
                  {hasWorkExchange && (
                    <Link
                      href="/work-exchange"
                      className="px-3 py-1.5 bg-sky-50 text-sky-700 text-xs rounded-full font-medium hover:bg-sky-100 transition-colors"
                    >
                      Work Exchange Available
                    </Link>
                  )}
                  {hasScholarships && (
                    <Link
                      href="/scholarships"
                      className="px-3 py-1.5 bg-rose-50 text-rose-700 text-xs rounded-full font-medium hover:bg-rose-100 transition-colors"
                    >
                      Scholarships Available
                    </Link>
                  )}
                  {hasSlidingScale && (
                    <span className="px-3 py-1.5 bg-sage-50 text-sage-700 text-xs rounded-full font-medium">
                      Sliding Scale Pricing
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Types */}
      {relatedTypes.length > 0 && (
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-sage-900 mb-3">
              Related retreat types
            </h2>
            <p className="text-sage-600 text-sm mb-6">
              People interested in {type.name.toLowerCase()} often explore these
              as well.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTypes.map(
                (related) =>
                  related && (
                    <Link
                      key={related.slug}
                      href={`/types/${related.slug}`}
                      className="group block p-5 bg-warm-50/50 rounded-xl border border-warm-200/60 hover:border-sage-300 transition-all hover:shadow-md"
                    >
                      <span
                        className="text-xl mb-2 block"
                        role="img"
                        aria-hidden="true"
                      >
                        {related.icon}
                      </span>
                      <h3 className="font-serif font-semibold text-sage-800 mb-1 group-hover:text-sage-900">
                        {related.name}
                      </h3>
                      <p className="text-xs text-sage-500 leading-relaxed line-clamp-2">
                        {related.description}
                      </p>
                      <span className="inline-flex items-center mt-3 text-xs font-medium text-sage-400 group-hover:text-sage-600 transition-colors">
                        Explore
                        <svg
                          className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M2 6h8M7 3l3 3-3 3" />
                        </svg>
                      </span>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            Common questions about {type.name.toLowerCase()}
          </h2>
          <p className="text-sage-600 mb-8">
            Honest answers. No sales pitch.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 md:p-7 border border-warm-200/60"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-sage-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Not sure this type is right for you?
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8">
            That is completely fine. Browse by what you need instead, explore all
            20 types, or start with our guided path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/types"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              All Retreat Types
            </Link>
            <Link
              href="/needs"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              Browse by Need
            </Link>
            <Link
              href="/start-here"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              Start Here
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org — Article + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${type.name} — Affordable ${type.name} Retreats Under $1,000`,
            description: type.description,
            url: `https://cheapretreats.com/types/${type.slug}`,
            publisher: {
              "@type": "Organization",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://cheapretreats.com/types/${type.slug}`,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
