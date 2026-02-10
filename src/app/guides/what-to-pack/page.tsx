import type { Metadata } from "next";
import Link from "next/link";
import { guideImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "What to Pack for a Healing Retreat — Seasonal Packing Lists & Tips",
  description:
    "A practical, no-fuss packing guide for healing retreats. Seasonal lists, comfort items worth bringing, what to leave at home, and why minimalism makes the experience better.",
  alternates: { canonical: "https://cheapretreats.com/guides/what-to-pack" },
};

const essentials = [
  {
    item: "Comfortable, layered clothing",
    detail:
      "Retreat centers are often in older buildings or rural settings where temperature varies wildly between rooms. Morning meditation halls can be frigid; afternoon sun rooms can be stifling. Layers let you adjust without fuss. Skip anything tight, scratchy, or that requires a mirror to put on. Think soft pants, loose shirts, a warm hoodie, and one warmer layer for evenings.",
  },
  {
    item: "A warm shawl or light blanket",
    detail:
      "This is the single most underrated retreat item. Use it in meditation, during group sessions, on cold evenings, as an extra layer on thin retreat beds, or wrapped around your shoulders during outdoor sitting. A large scarf or pashmina works too. Many experienced retreat-goers say this is the one thing they never travel without.",
  },
  {
    item: "Comfortable walking shoes",
    detail:
      "Most retreats involve walking -- between buildings, on nature trails, or just around the grounds. Bring shoes you can slip on without fuss. If the retreat is in a muddy or rural area, waterproof shoes or boots are worth the space. Flip-flops or sandals for shared bathrooms are also essential.",
  },
  {
    item: "Earplugs and an eye mask",
    detail:
      "If you are in a shared room, these are non-negotiable. Even in a private room, retreat centers in nature come with roosters, birds, wind, and other people moving around at dawn. A good pair of foam earplugs and a soft eye mask can mean the difference between rest and frustration.",
  },
  {
    item: "A water bottle",
    detail:
      "Staying hydrated is important, especially if the retreat involves long sitting, heated rooms, or dry climates. Most centers have filtered water stations but may not provide individual bottles. Bring one you can refill throughout the day.",
  },
  {
    item: "Medications and personal health items",
    detail:
      "Bring everything you take regularly. Retreat centers are often far from pharmacies. Include pain relievers, allergy medication, digestive aids, any prescription medications, and menstrual products if relevant. Do not assume the center will have what you need.",
  },
  {
    item: "A journal and pen",
    detail:
      "Not mandatory, but many people find writing helps process what comes up during retreat. You do not need a fancy notebook. A simple pad and pen is enough. Some retreats include journaling time in their schedule; even those that do not tend to create moments worth writing about.",
  },
  {
    item: "Shower sandals",
    detail:
      "Shared bathrooms are common at affordable retreat centers. Shower sandals keep things hygienic and comfortable. This is especially true at monastery stays and community-run centers.",
  },
  {
    item: "A small flashlight or headlamp",
    detail:
      "Early morning wake-ups and late-night bathroom trips in unfamiliar buildings are much easier with a small light. Many retreat centers have minimal outdoor lighting. A phone flashlight works in a pinch, but a small clip-on light means you do not need to turn on your phone.",
  },
  {
    item: "Basic toiletries",
    detail:
      "Bring what you need but keep it simple. Many retreat centers provide basic soap and shampoo, but quality varies. Bring your own if you have sensitivities or preferences. Avoid anything heavily scented -- in close quarters and silent spaces, strong smells are distracting for others.",
  },
  {
    item: "Snacks you trust",
    detail:
      "Retreat meals are usually wholesome and sufficient, but timing may not match what your body is used to. A few granola bars, nuts, dried fruit, or whatever you reliably eat can prevent hunger-related irritability, especially on arrival day when you may have missed a meal in transit.",
  },
  {
    item: "Cash",
    detail:
      "Many retreat centers, especially donation-based and monastery stays, operate on a cash basis. Bring small bills for donations, tips for staff if appropriate, and any local purchases. ATMs may not be nearby.",
  },
];

const seasonal = [
  {
    season: "Spring & Fall",
    items: [
      "Rain jacket or light waterproof layer",
      "One warm fleece or sweater",
      "Long pants and a pair of shorts",
      "Closed-toe shoes that can handle wet ground",
      "An extra pair of warm socks",
      "A hat for sun or wind",
    ],
  },
  {
    season: "Summer",
    items: [
      "Sunscreen and a hat with a brim",
      "Insect repellent (essential for rural and forest retreats)",
      "Lightweight, breathable clothing that covers skin for bug protection",
      "A swimsuit if the center has water access",
      "Sunglasses",
      "A light cardigan for air-conditioned or cool indoor spaces",
    ],
  },
  {
    season: "Winter",
    items: [
      "Thermal base layers -- meditation halls can be very cold",
      "A heavy sweater or down layer",
      "Warm socks and slippers for indoor wear",
      "A winter hat and gloves for outdoor walking",
      "Hand warmers (disposable ones are lightweight and worthwhile)",
      "A hot water bottle if you run cold -- some centers provide these, many do not",
    ],
  },
];

const doNotBring = [
  {
    item: "Multiple outfit options",
    reason:
      "Nobody cares what you look like. Retreats are one of the few places where appearance genuinely does not matter. Three to four outfits plus sleepwear is enough for a week. You can often do laundry at the center.",
  },
  {
    item: "Work materials",
    reason:
      "Leave the laptop. Leave the work notebook. If you bring them you will use them, and you will spend your retreat half-present. The point is to stop. Let yourself stop.",
  },
  {
    item: "Books about self-improvement",
    reason:
      "Bring a novel if you want, or poetry, or nothing. But leave the optimization books at home. You are not at the retreat to improve yourself. You are there to rest. The urge to turn rest into productivity is exactly what retreats are designed to interrupt.",
  },
  {
    item: "Heavily scented products",
    reason:
      "Strong perfume, cologne, scented lotions, and aromatherapy oils can be overwhelming in shared and silent spaces. Many retreat centers specifically request fragrance-free products. Be considerate of other guests.",
  },
  {
    item: "Expensive jewelry or valuables",
    reason:
      "Most retreat centers have simple accommodations without safes or locks. Leave valuables at home. You will not need them, and worrying about them defeats the purpose.",
  },
  {
    item: "Expectations",
    reason:
      "This is not a joke item. The biggest thing to leave behind is the idea that you need to have a specific experience. No epiphanies required. No transformation necessary. Sometimes a retreat is just sleeping well and eating simply for a few days, and that is enough.",
  },
];

const specialConsiderations = [
  {
    type: "Monastery stays",
    notes:
      "Bring modest clothing that covers shoulders and knees. Many monasteries have dress codes, especially for religious services. Dark or neutral colors are usually appropriate. Bring a head covering if the tradition requires one -- check in advance. Leave alcohol and recreational substances at home entirely.",
  },
  {
    type: "Silent retreats",
    notes:
      "Bring extra journaling supplies since writing may be your primary form of expression. A good book for downtime is more important when you cannot chat with others. Skip anything that makes noise -- rustling bags, noisy zippers, squeaky shoes. These small sounds become very noticeable in silence.",
  },
  {
    type: "Nature and wilderness retreats",
    notes:
      "Invest in good walking shoes or hiking boots. Bring rain gear regardless of the forecast. Pack a daypack for outdoor excursions. Include a water purification option if the retreat involves backcountry time. Sunscreen and insect repellent are essential, not optional.",
  },
  {
    type: "Work exchange stays",
    notes:
      "Bring work-appropriate clothing: clothes you can garden in, get dirty in, or move freely in. Sturdy shoes or boots for physical work. Gloves if you have sensitive hands. You will be doing real work -- dress for it.",
  },
];

export default function WhatToPackPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-warm-50 border-b border-warm-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-sage-500">
            <Link href="/" className="hover:text-sage-700 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/guides"
              className="hover:text-sage-700 transition-colors"
            >
              Guides
            </Link>
            <span>/</span>
            <span className="text-sage-800 font-medium">What to Pack</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <img src={guideImages["what-to-pack"]} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900/80 via-warm-800/60 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            Practical Guide
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 leading-[1.1]">
            What to Pack for a<br className="hidden sm:block" /> Healing Retreat
          </h1>
          <p className="text-lg md:text-xl text-warm-100 leading-relaxed max-w-xl mx-auto">
            Less than you think. The best packing list is the shortest one. Here
            is everything you actually need, nothing you do not, and a few
            things that make the experience genuinely better.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-6">
            The minimalist approach
          </h2>
          <div className="space-y-4 text-sage-600 leading-relaxed">
            <p>
              There is a reason retreat centers tend toward simplicity. Part of
              what makes a retreat work is the absence of choice. When you do not
              have to decide what to wear, what to eat, or what to do next, your
              brain gets to rest in a way it rarely does at home.
            </p>
            <p>
              Overpacking works against this. Every extra item is a small
              decision you will have to make, a thing to keep track of, a
              reminder of your regular life. The goal is to bring enough to be
              comfortable and nothing more.
            </p>
            <p>
              A good rule: if you are wondering whether to bring something, you
              probably do not need it. Retreats are designed so that you need
              very little. Trust that.
            </p>
          </div>
        </div>
      </section>

      {/* Essentials */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            The essentials
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            These are the items that experienced retreat-goers consistently say
            matter. Not all of them are obvious.
          </p>
          <div className="space-y-4">
            {essentials.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-warm-200/60"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.item}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Seasonal additions
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Add these to your essentials list depending on when and where you are
            going.
          </p>
          <div className="space-y-8">
            {seasonal.map((season, i) => (
              <div key={i}>
                <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">
                  {season.season}
                </h3>
                <div className="space-y-2">
                  {season.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex gap-3 items-center p-3 bg-sage-50/50 rounded-lg border border-sage-100/60"
                    >
                      <svg
                        className="w-4 h-4 text-sage-400 flex-shrink-0"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.4 4.3a.75.75 0 010 1.06l-6 6a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06L6.9 9.8l5.44-5.44a.75.75 0 011.06 0z"
                        />
                      </svg>
                      <span className="text-sage-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What NOT to bring */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            What not to bring
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            These are the things people most commonly overpack or bring
            unnecessarily. Leaving them behind is part of the experience.
          </p>
          <div className="space-y-4">
            {doNotBring.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-5 bg-rose-50/40 rounded-xl border border-rose-100/60"
              >
                <svg
                  className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="font-medium text-sage-800 mb-1">
                    {item.item}
                  </h3>
                  <p className="text-sage-600 text-sm leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Considerations */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Packing by retreat type
          </h2>
          <p className="text-sage-600 leading-relaxed mb-10">
            Different retreats have different needs. Adjust your packing based
            on where you are going.
          </p>
          <div className="space-y-6">
            {specialConsiderations.map((item, i) => (
              <div
                key={i}
                className="bg-sky-50/50 rounded-2xl p-6 border border-sky-100/60"
              >
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                  {item.type}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final note */}
      <section className="py-14 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-warm-200/60">
            <h2 className="font-serif text-xl font-semibold text-sage-900 mb-4">
              One last thing
            </h2>
            <div className="space-y-4 text-sage-600 leading-relaxed">
              <p>
                The most important thing you bring to a retreat is not in your
                bag. It is your willingness to be there -- even if you are
                nervous, even if you are not sure why you are going, even if
                packing feels like the easiest part because at least it is
                something concrete you can control.
              </p>
              <p>
                Pack light. Arrive open. The rest takes care of itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            Ready to find your retreat?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/start-here"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
            >
              Find Your Retreat
            </Link>
            <Link
              href="/guides/how-to-choose"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              How to Choose a Retreat
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage-700 font-medium rounded-full hover:bg-sage-50 transition-colors border border-sage-200"
            >
              All Guides
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
            headline: "What to Pack for a Healing Retreat",
            description:
              "A practical, no-fuss packing guide for healing retreats with seasonal lists, comfort items, and minimalist philosophy.",
            url: "https://cheapretreats.com/guides/what-to-pack",
            publisher: {
              "@type": "Organization",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://cheapretreats.com/guides/what-to-pack",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Pack for a Healing Retreat",
            description:
              "Step-by-step packing guidance for different types of healing retreats.",
            step: [
              {
                "@type": "HowToStep",
                name: "Start with essentials",
                text: "Pack comfortable layered clothing, a warm shawl, walking shoes, earplugs, eye mask, water bottle, medications, journal, shower sandals, flashlight, toiletries, snacks, and cash.",
              },
              {
                "@type": "HowToStep",
                name: "Add seasonal items",
                text: "Adjust for weather: rain gear and fleece for spring/fall, sunscreen and insect repellent for summer, thermal layers and hand warmers for winter.",
              },
              {
                "@type": "HowToStep",
                name: "Remove unnecessary items",
                text: "Leave behind multiple outfits, work materials, self-improvement books, heavily scented products, expensive valuables, and rigid expectations.",
              },
              {
                "@type": "HowToStep",
                name: "Adjust for retreat type",
                text: "Monastery stays need modest clothing; silent retreats benefit from extra journaling supplies; nature retreats require good hiking shoes; work exchanges need sturdy work clothes.",
              },
            ],
          }),
        }}
      />
    </>
  );
}
