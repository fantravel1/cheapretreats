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
  { title: "Apply", description: "Most programs have a simple application. Some accept everyone; others look for specific skills. You'll typically hear back within a week or two." },
  { title: "Work 4-6 hours/day", description: "Help with meals, cleaning, gardening, maintenance, or guest services. The work is part of the healing — grounding, physical, and shared." },
  { title: "Settle in", description: "The first few days can feel awkward. You're learning routines, meeting people, and adjusting to a new rhythm. Give yourself grace — it gets easier." },
  { title: "Stay for free", description: "Room and meals included. Some programs also give you access to workshops, classes, and facilities. Others keep it simple — bed, food, community." },
  { title: "Heal alongside", description: "When you're not working, the retreat is yours. Rest, walk, practice, or do nothing at all. Many people say the unstructured hours matter most." },
  { title: "Transition home", description: "Leaving a work exchange can be its own kind of grief. Take it slow. Bring a practice home with you — even something as small as morning silence or hand-washing your dishes." },
];

const workTypes = [
  {
    title: "Kitchen & Cooking",
    description: "Preparing meals for the community — chopping vegetables, cooking, washing dishes, setting tables. Kitchen work is often the most meditative: repetitive, physical, and deeply nourishing. You'll learn to cook for 20 or 200, and you'll eat well.",
    expect: "Early mornings, hot kitchens, standing for hours. But also: the satisfaction of feeding people, the rhythm of bread-making, and the quiet conversations that happen while peeling carrots.",
  },
  {
    title: "Gardening & Farming",
    description: "Working the land — planting, weeding, harvesting, composting, tending animals. Farm work connects you to seasonal rhythms and gives your body something real to do after months or years of screen-based living.",
    expect: "Sore muscles, dirt under your nails, sunburns. Also: the profound calm of working in soil, watching things grow, and learning that patience is a physical practice.",
  },
  {
    title: "Maintenance & Building",
    description: "Fixing, painting, building, cleaning — the unglamorous work that keeps a retreat center running. Carpentry, plumbing, electrical, grounds-keeping, and general handyperson tasks.",
    expect: "Varied tasks from day to day. Some programs need skilled tradespeople; others just need willing hands. You'll learn practical skills and develop a relationship with the physical space.",
  },
  {
    title: "Guest Services",
    description: "Welcoming arriving guests, managing bookings, turning over rooms, doing laundry, keeping common spaces clean and warm. This is the hospitality work — making others feel safe and held.",
    expect: "Social energy required. You'll interact with guests who may be in fragile states. It's emotionally rewarding but can be draining. Good for people who are naturally caring and organized.",
  },
  {
    title: "Teaching & Facilitation",
    description: "Leading yoga classes, meditation sits, art workshops, or discussion groups. Some programs invite work-exchangers with facilitation experience to share their skills with guests.",
    expect: "Less common than other roles, and usually reserved for people with existing training or certification. A beautiful opportunity if you have skills to share but can't afford to attend as a paying guest.",
  },
  {
    title: "Digital & Admin",
    description: "Website updates, social media, newsletter writing, database management, bookkeeping. Many small retreat centers desperately need tech-savvy help and offer stays in exchange for digital skills.",
    expect: "More screen time than other roles, but often more flexible hours. Great for people with physical limitations who still want a work-exchange experience. Can sometimes be done partially remotely.",
  },
];

const testimonials = [
  {
    quote: "I spent six weeks doing kitchen work at a Zen center in California. I woke at 4:30am every day, made rice for 40 people, and washed pots until my hands were raw. It was the hardest and most peaceful time of my life. By week three, the repetition broke something open in me. I stopped thinking about my problems and just started being present with the rice, the water, the steam. I cried while washing dishes once, and nobody said anything — they just kept washing alongside me.",
    attribution: "James, 29 — kitchen work exchange at a Zen center",
    honest: "The physical exhaustion was real. My back hurt for the first two weeks. Some days I resented the alarm clock. But by the end, I didn't want to leave.",
  },
  {
    quote: "I did gardening and maintenance at a small permaculture farm in Portugal for a month. The work was genuinely hard — hauling compost, building raised beds in the heat, fixing irrigation. But I slept better than I had in years. I ate food I'd helped grow. I had no phone signal and didn't miss it. The couple who ran the farm treated me like family, not free labor. We cooked dinner together every night.",
    attribution: "Priya, 36 — farm work exchange in Portugal",
    honest: "Not every day was magical. Some days the work felt monotonous, and I missed my friends. The accommodations were basic — a converted shed with a good mattress but no hot water. You have to be honest with yourself about your comfort needs.",
  },
  {
    quote: "As someone with a chronic illness, I was worried I couldn't do physical work exchange. I found a meditation center that needed help with their website and newsletter. I worked four hours a day on my laptop, and the rest of the time I sat in the meditation hall, walked in the gardens, and rested. It was the first time I'd accessed retreat space without paying $2,000 I didn't have.",
    attribution: "Alex, 44 — digital work exchange at a meditation center",
    honest: "Not all programs accommodate physical limitations. I applied to seven places before finding one that fit. Don't give up — but do be upfront about what you can and can't do.",
  },
];

const faqItems = [
  {
    question: "Do I need experience to do work exchange?",
    answer: "Almost never. The vast majority of programs train you on the job. If you can chop vegetables, sweep a floor, or pull weeds, you have enough skills. Programs that need specialized skills (electrician, yoga teacher, web developer) will say so clearly in their listing. If you're unsure, just ask — most coordinators are happy to talk through options.",
  },
  {
    question: "How many hours a day will I work?",
    answer: "Most programs ask for 4-6 hours per day, typically 5-6 days a week. Some split it into a morning shift and an afternoon shift with a long break in between. A few programs ask for more (up to 8 hours) in exchange for longer stays or additional perks. Be wary of any program asking for more than 6 hours without clear justification — that's unpaid labor, not exchange.",
  },
  {
    question: "Can I leave if it's not working out?",
    answer: "Yes, always. You are a volunteer, not an employee, and you can leave at any time. That said, try to give the program reasonable notice (at least a few days) so they can adjust. If you're leaving because of a safety concern or mistreatment, you can leave immediately — and please let us know so we can investigate.",
  },
  {
    question: "Is work exchange the same as volunteering?",
    answer: "They're related but different. Work exchange is a specific arrangement: you trade labor for room and board at a retreat or community. Volunteering is broader — you might volunteer at a local shelter or park without receiving anything in return. WWOOF (World Wide Opportunities on Organic Farms) is a specific network that connects volunteers with organic farms. See our comparison section below for more detail.",
  },
  {
    question: "What if I have dietary restrictions or allergies?",
    answer: "Most programs can accommodate common dietary needs (vegetarian, vegan, gluten-free) since many already serve plant-based meals. For severe allergies or complex medical diets, contact the program directly before applying. Some smaller places may not have the kitchen capacity for highly specialized diets, and it's better to know upfront than to arrive and struggle.",
  },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* Types of Work Exchange */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            Types of work exchange
          </h2>
          <p className="text-sage-600 leading-relaxed mb-8 max-w-3xl">
            Not all work exchange is the same. Different programs need different kinds of
            help, and the right match depends on your body, your skills, and what kind of
            work feels restorative to you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workTypes.map((type) => (
              <div key={type.title} className="p-6 bg-white rounded-2xl border border-warm-200/60">
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">{type.title}</h3>
                <p className="text-sm text-sage-600 leading-relaxed mb-3">{type.description}</p>
                <div className="p-3 bg-sky-50/50 rounded-lg border border-sky-100/40">
                  <p className="text-xs text-sky-700 leading-relaxed">
                    <span className="font-semibold">What to expect:</span> {type.expect}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-14 md:py-20 bg-white">
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

      {/* Real Experiences */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            Real experiences
          </h2>
          <p className="text-sage-600 leading-relaxed mb-8 max-w-3xl">
            Work exchange is not a vacation. It is real work in exchange for real rest.
            Here are honest accounts from people who have done it.
          </p>
          <div className="space-y-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="p-6 md:p-8 bg-white rounded-2xl border border-warm-200/60">
                <blockquote className="text-sage-700 leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <p className="text-sm text-sage-500 font-medium mb-3">
                  &mdash; {testimonial.attribution}
                </p>
                <div className="p-3 bg-warm-50 rounded-lg border border-warm-100/60">
                  <p className="text-xs text-sage-600 leading-relaxed">
                    <span className="font-semibold text-sage-700">The honest part:</span> {testimonial.honest}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Exchange vs Volunteering vs WWOOF */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-3">
            Work exchange vs volunteering vs WWOOF
          </h2>
          <p className="text-sage-600 leading-relaxed mb-8 max-w-3xl">
            These terms get used interchangeably, but they mean different things.
            Understanding the differences helps you find the right fit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-sky-50/40 rounded-2xl border border-sky-100/60">
              <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">Work Exchange</h3>
              <div className="space-y-3 text-sm text-sage-600 leading-relaxed">
                <p>
                  A direct arrangement between you and a retreat center, farm, or community.
                  You work a set number of hours per day (usually 4-6) and receive room and
                  board in return. The focus is mutual benefit.
                </p>
                <p>
                  <span className="font-semibold text-sage-700">Best for:</span> People
                  seeking healing or rest who can&rsquo;t afford to pay. The retreat
                  environment is the point.
                </p>
                <p>
                  <span className="font-semibold text-sage-700">Duration:</span> Typically
                  2-8 weeks. Some programs offer longer stays.
                </p>
              </div>
            </div>

            <div className="p-6 bg-warm-50/60 rounded-2xl border border-warm-200/60">
              <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">Volunteering</h3>
              <div className="space-y-3 text-sm text-sage-600 leading-relaxed">
                <p>
                  Broader than work exchange. Volunteering means offering your time and labor
                  without direct compensation. Some volunteer positions include room and board;
                  many do not. The emphasis is on service to others or a cause.
                </p>
                <p>
                  <span className="font-semibold text-sage-700">Best for:</span> People
                  motivated primarily by service. The cause or organization is the point,
                  not necessarily personal healing.
                </p>
                <p>
                  <span className="font-semibold text-sage-700">Duration:</span> Varies
                  widely — from a single afternoon to years of commitment.
                </p>
              </div>
            </div>

            <div className="p-6 bg-sage-50/40 rounded-2xl border border-sage-100/60">
              <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">WWOOF</h3>
              <div className="space-y-3 text-sm text-sage-600 leading-relaxed">
                <p>
                  World Wide Opportunities on Organic Farms — a specific global network
                  connecting volunteers with organic farms. You join the network (small
                  annual fee), browse farm listings, and arrange stays directly with hosts.
                </p>
                <p>
                  <span className="font-semibold text-sage-700">Best for:</span> People
                  interested in farming, sustainable agriculture, and rural life. The
                  learning and land connection is the point.
                </p>
                <p>
                  <span className="font-semibold text-sage-700">Duration:</span> Usually
                  2 weeks to several months. Hosts set their own minimums.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-5 bg-sky-50/30 rounded-xl border border-sky-100/40">
            <p className="text-sm text-sage-600 leading-relaxed">
              <span className="font-semibold text-sage-700">The overlap:</span> Many
              retreat centers list on WWOOF or volunteer platforms even though they function
              as work exchanges. And many WWOOF farms offer a retreat-like experience even
              though they are technically farms. Don&rsquo;t get too hung up on
              labels — focus on what the specific place offers and whether it matches what
              you need.
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-14 md:py-20 bg-warm-50">
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
              "Bring clothes you don't mind ruining — garden dirt and kitchen grease are part of the deal",
              "Communicate early if you're struggling — good programs want to support you, not push you past your limits",
              "Consider bringing a journal — the combination of physical work and unstructured time often unlocks unexpected insights",
              "Remember that the other work-exchangers are going through something too — some of your deepest connections will be with the people washing dishes beside you",
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-white rounded-xl border border-warm-200/60">
                <svg className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                </svg>
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-5">
            {faqItems.map((item, i) => (
              <div key={i} className="p-6 bg-sky-50/30 rounded-2xl border border-sky-100/40">
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                  {item.question}
                </h3>
                <p className="text-sm text-sage-600 leading-relaxed">{item.answer}</p>
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
