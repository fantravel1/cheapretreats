import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 md:py-48 bg-warm-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sage-400 text-sm font-medium mb-4">404</p>
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-sage-900 mb-4">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="text-sage-600 text-lg mb-8 leading-relaxed">
          But you do — and you deserve rest. Let&rsquo;s get you somewhere
          helpful.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors"
          >
            Go Home
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
  );
}
