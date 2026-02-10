import type { Retreat } from "@/lib/retreats-data";

export function RetreatCard({ retreat }: { retreat: Retreat }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-7 border border-warm-200/60 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
        <div>
          {retreat.verified && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-sage-100 text-sage-700 text-xs font-medium rounded-full mb-2">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                <path fillRule="evenodd" d="M6 0.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM8.7 4.8a.5.5 0 00-.7-.6L5.5 6.6 4 5.2a.5.5 0 00-.7.6l2 2a.5.5 0 00.7 0l3-2.7-.3-.3z" />
              </svg>
              Verified Safe & Real
            </span>
          )}
          <h3 className="font-serif text-lg md:text-xl font-semibold text-sage-900">
            {retreat.name}
          </h3>
          <p className="text-sage-500 text-sm mt-0.5">
            {retreat.location}
          </p>
        </div>
        <div className="sm:text-right flex-shrink-0">
          <div className="font-display text-2xl md:text-3xl font-semibold text-sage-800">
            {retreat.priceDisplay}
          </div>
          <div className="text-sm text-sage-500">{retreat.nightsDisplay}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-sm">
        <div>
          <span className="text-sage-400 text-xs uppercase tracking-wider font-medium">
            Type
          </span>
          <p className="text-sage-700 mt-0.5">{retreat.type}</p>
        </div>
        <div>
          <span className="text-sage-400 text-xs uppercase tracking-wider font-medium">
            Includes
          </span>
          <p className="text-sage-700 mt-0.5">{retreat.includes}</p>
        </div>
        <div>
          <span className="text-sage-400 text-xs uppercase tracking-wider font-medium">
            Best for
          </span>
          <p className="text-sage-700 mt-0.5">{retreat.goodFor.join(", ")}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {retreat.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-warm-100 text-warm-700 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
        {retreat.workExchange && (
          <span className="px-2.5 py-1 bg-sky-100 text-sky-700 text-xs rounded-full font-medium">
            Work Exchange
          </span>
        )}
        {retreat.scholarship && (
          <span className="px-2.5 py-1 bg-rose-50 text-rose-700 text-xs rounded-full font-medium">
            Scholarships
          </span>
        )}
        {retreat.slidingScale && (
          <span className="px-2.5 py-1 bg-sage-100 text-sage-700 text-xs rounded-full font-medium">
            Sliding Scale
          </span>
        )}
      </div>
    </div>
  );
}
