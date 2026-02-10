import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://cheapretreats.com"),
  title: {
    default: "CheapRetreats — Affordable Healing Retreats for Real People",
    template: "%s | CheapRetreats",
  },
  description:
    "Healing should not be a luxury good. Discover affordable, safe, verified retreats organized by what you actually need — burnout recovery, grief, quiet rest, and more. From $200.",
  keywords: [
    "cheap retreats",
    "affordable wellness retreat",
    "burnout retreat",
    "grief retreat",
    "quiet retreat",
    "budget retreat",
    "healing retreat under $1000",
    "work exchange retreat",
    "sliding scale retreat",
    "trauma-informed retreat",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cheapretreats.com",
    siteName: "CheapRetreats",
    title: "CheapRetreats — You Deserve Rest, Even If You're Broke",
    description:
      "Fair-priced, honest, community-run retreats for real people. No guru upsells. No luxury shame. Just healing.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CheapRetreats — Affordable healing retreats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CheapRetreats — Affordable Healing Retreats",
    description: "You deserve rest — even if you're broke.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cheapretreats.com",
    languages: {
      "en-US": "https://cheapretreats.com",
      "es": "https://cheapretreats.com/es",
      "fr": "https://cheapretreats.com/fr",
      "pt": "https://cheapretreats.com/pt",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
              logo: "https://cheapretreats.com/images/logo.png",
              description:
                "Affordable, verified healing retreats for real people. Organized by need, not modality.",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "hello@cheapretreats.com",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CheapRetreats",
              url: "https://cheapretreats.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://cheapretreats.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
