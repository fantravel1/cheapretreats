import Link from "next/link";
import type { Retreat } from "@/lib/retreats-data";
import { getRetreatSlug } from "@/lib/retreats-data";
import { getRetreatImage } from "@/lib/images";

export function RetreatCard({ retreat }: { retreat: Retreat }) {
  const slug = getRetreatSlug(retreat);
  const imageUrl = getRetreatImage(retreat.name, retreat.type, retreat.location);

  return (
    <Link
      href={`/retreats/${slug}`}
      className="group block bg-white rounded-2xl border border-warm-200/60 hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${retreat.name} in ${retreat.location}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Price overlay */}
        <div className="absolute bottom-3 left-4">
          <span className="font-display text-2xl font-semibold text-white drop-shadow-md">
            {retreat.priceDisplay}
          </span>
          <span className="text-white/80 text-sm ml-2 drop-shadow-md">
            {retreat.nightsDisplay}
          </span>
        </div>
        {/* Badges overlay */}
        <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 justify-end">
          {retreat.verified && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-sage-700 text-xs font-medium rounded-full shadow-sm">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                <path fillRule="evenodd" d="M6 0.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM8.7 4.8a.5.5 0 00-.7-.6L5.5 6.6 4 5.2a.5.5 0 00-.7.6l2 2a.5.5 0 00.7 0l3-2.7-.3-.3z" />
              </svg>
              Verified
            </span>
          )}
          {retreat.workExchange && (
            <span className="px-2.5 py-1 bg-sky-500/90 backdrop-blur-sm text-white text-xs rounded-full font-medium shadow-sm">
              Work Exchange
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="mb-3">
          <h3 className="font-serif text-lg md:text-xl font-semibold text-sage-900 group-hover:text-sage-700 transition-colors">
            {retreat.name}
          </h3>
          <p className="text-sage-500 text-sm mt-0.5 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {retreat.location}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-sm">
          <div>
            <span className="text-sage-400 text-xs uppercase tracking-wider font-medium">
              Type
            </span>
            <p className="text-sage-700 mt-0.5">{retreat.type}</p>
          </div>
          <div>
            <span className="text-sage-400 text-xs uppercase tracking-wider font-medium">
              Best for
            </span>
            <p className="text-sage-700 mt-0.5">{retreat.goodFor.join(", ")}</p>
          </div>
        </div>

        <p className="text-sage-500 text-sm mb-4">
          <span className="text-sage-400 text-xs uppercase tracking-wider font-medium">Includes: </span>
          {retreat.includes}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {retreat.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-warm-50 text-warm-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {retreat.scholarship && (
            <span className="px-2.5 py-1 bg-rose-50 text-rose-700 text-xs rounded-full font-medium">
              Scholarships
            </span>
          )}
          {retreat.slidingScale && (
            <span className="px-2.5 py-1 bg-sage-50 text-sage-700 text-xs rounded-full font-medium">
              Sliding Scale
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
