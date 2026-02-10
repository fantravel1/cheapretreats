import Link from "next/link";

const footerSections = [
  {
    title: "Browse by Need",
    links: [
      { href: "/needs/burnout", label: "Burnout Recovery" },
      { href: "/needs/grief", label: "Grief Retreats" },
      { href: "/needs/depression", label: "Depression Recovery" },
      { href: "/needs/trauma-sensitive", label: "Trauma-Sensitive" },
      { href: "/needs/quiet", label: "Quiet Retreats" },
      { href: "/needs/loneliness", label: "Loneliness" },
      { href: "/needs/caregivers", label: "Caregiver Recovery" },
      { href: "/needs/stop", label: "I Just Need to Stop" },
    ],
  },
  {
    title: "By Budget",
    links: [
      { href: "/under-500", label: "Under $500" },
      { href: "/under-750", label: "Under $750" },
      { href: "/under-1000", label: "Under $1,000" },
      { href: "/the-1000-reset", label: "The $1,000 Reset" },
      { href: "/work-exchange", label: "Work Exchange" },
      { href: "/scholarships", label: "Scholarships" },
    ],
  },
  {
    title: "Discover",
    links: [
      { href: "/community-run", label: "Community-Run Retreats" },
      { href: "/verified", label: "Verified Safe & Real" },
      { href: "/first-time", label: "First-Time Guide" },
      { href: "/reviews", label: "Honest Reviews" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/manifesto", label: "Our Manifesto" },
      { href: "/about", label: "About Us" },
      { href: "/faq", label: "FAQ" },
      { href: "/legal", label: "Legal" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-sage-900 text-sage-200">
      {/* Newsletter section */}
      <div className="border-b border-sage-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-3">
              Healing should not be a luxury good.
            </h2>
            <p className="text-sage-300 mb-8 text-base md:text-lg leading-relaxed">
              Get honest retreat recommendations, new affordable listings, and
              community stories. No spam. No guru energy.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 bg-sage-800 border border-sage-600/40 rounded-full text-white placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-400 text-sm"
              />
              <button
                type="submit"
                className="px-7 py-3 bg-sage-500 text-white font-medium rounded-full hover:bg-sage-400 transition-colors text-sm whitespace-nowrap"
              >
                Stay in the Loop
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-sage-400 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-sage-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sage-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-sage-500 flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M9 9h.01M15 9h.01" />
              </svg>
            </div>
            <span className="font-serif text-base font-medium text-sage-300">
              CheapRetreats
            </span>
          </div>
          <p className="text-xs text-sage-500">
            &copy; {new Date().getFullYear()} CheapRetreats.com. All rights
            reserved. You deserve rest.
          </p>
        </div>
      </div>
    </footer>
  );
}
