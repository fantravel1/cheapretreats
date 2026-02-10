"use client";

import Link from "next/link";
import { useState } from "react";

const needsLinks = [
  { href: "/needs/burnout", label: "Burnout Recovery" },
  { href: "/needs/grief", label: "Grief Retreats" },
  { href: "/needs/depression", label: "Depression Recovery" },
  { href: "/needs/trauma-sensitive", label: "Trauma-Sensitive" },
  { href: "/needs/quiet", label: "Quiet Retreats" },
  { href: "/needs/loneliness", label: "Loneliness" },
  { href: "/needs/caregivers", label: "Caregiver Recovery" },
  { href: "/needs/stop", label: "I Just Need to Stop" },
];

const priceLinks = [
  { href: "/under-500", label: "Under $500" },
  { href: "/under-750", label: "Under $750" },
  { href: "/under-1000", label: "Under $1,000" },
  { href: "/the-1000-reset", label: "The $1,000 Reset" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [needsOpen, setNeedsOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-50/95 backdrop-blur-md border-b border-warm-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-sage-500 flex items-center justify-center transition-transform group-hover:scale-105">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M9 9h.01M15 9h.01" />
              </svg>
            </div>
            <span className="font-serif text-xl font-semibold text-sage-800 tracking-tight">
              Cheap<span className="text-sage-500">Retreats</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/start-here" className="px-3 py-2 text-sm font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-100/60 rounded-lg transition-colors">
              Start Here
            </Link>
            <Link href="/manifesto" className="px-3 py-2 text-sm font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-100/60 rounded-lg transition-colors">
              Manifesto
            </Link>

            {/* Needs Dropdown */}
            <div className="relative"
              onMouseEnter={() => setNeedsOpen(true)}
              onMouseLeave={() => setNeedsOpen(false)}
            >
              <button className="px-3 py-2 text-sm font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-100/60 rounded-lg transition-colors flex items-center gap-1">
                Browse by Need
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5l3 3 3-3" />
                </svg>
              </button>
              {needsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-warm-200/60 py-2 animate-fade-in">
                  {needsLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-sage-700 hover:bg-sage-50 hover:text-sage-900 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Price Dropdown */}
            <div className="relative"
              onMouseEnter={() => setPriceOpen(true)}
              onMouseLeave={() => setPriceOpen(false)}
            >
              <button className="px-3 py-2 text-sm font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-100/60 rounded-lg transition-colors flex items-center gap-1">
                By Budget
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5l3 3 3-3" />
                </svg>
              </button>
              {priceOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-warm-200/60 py-2 animate-fade-in">
                  {priceLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-sage-700 hover:bg-sage-50 hover:text-sage-900 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/community-run" className="px-3 py-2 text-sm font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-100/60 rounded-lg transition-colors">
              Community-Run
            </Link>
            <Link href="/verified" className="px-3 py-2 text-sm font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-100/60 rounded-lg transition-colors">
              Verified Safe
            </Link>
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/start-here" className="hidden sm:inline-flex items-center px-5 py-2.5 bg-sage-500 text-white text-sm font-medium rounded-full hover:bg-sage-600 transition-colors shadow-sm">
              Find Your Retreat
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-sage-600 hover:text-sage-800 hover:bg-sage-100/60 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-warm-200/60 animate-fade-in">
            <div className="space-y-1 py-3">
              <Link href="/start-here" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-base font-medium text-sage-800 hover:bg-sage-100/60 rounded-lg">
                Start Here
              </Link>
              <Link href="/manifesto" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-base font-medium text-sage-800 hover:bg-sage-100/60 rounded-lg">
                Manifesto
              </Link>
            </div>

            <div className="py-3 border-t border-warm-200/40">
              <p className="px-3 py-2 text-xs font-semibold text-sage-500 uppercase tracking-wider">Browse by Need</p>
              {needsLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block px-5 py-2.5 text-sm text-sage-700 hover:bg-sage-100/60 rounded-lg">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="py-3 border-t border-warm-200/40">
              <p className="px-3 py-2 text-xs font-semibold text-sage-500 uppercase tracking-wider">By Budget</p>
              {priceLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block px-5 py-2.5 text-sm text-sage-700 hover:bg-sage-100/60 rounded-lg">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="py-3 border-t border-warm-200/40 space-y-1">
              <Link href="/community-run" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-base font-medium text-sage-800 hover:bg-sage-100/60 rounded-lg">
                Community-Run Retreats
              </Link>
              <Link href="/verified" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-base font-medium text-sage-800 hover:bg-sage-100/60 rounded-lg">
                Verified Safe & Real
              </Link>
            </div>

            <div className="pt-4 px-3">
              <Link href="/start-here" onClick={() => setMobileOpen(false)} className="block w-full text-center px-5 py-3 bg-sage-500 text-white font-medium rounded-full hover:bg-sage-600 transition-colors">
                Find Your Retreat
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
