import type { Metadata } from "next";
import { Chelsea_Market, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ADS, BRAND } from "@/lib/data";

const chelsea = Chelsea_Market({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chelsea",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.SITE_URL ?? "http://localhost:3009";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kids' Party Planner Boca Raton | StyleChild Parties & Events",
  description:
    "Fully planned kids' parties in Boca Raton & South Florida. Any theme your kid loves: crowns, tees, slippers, squishies, sneakers, spa days and superheroes. Décor, games, set-up and clean-up handled. At our HQ, at your place, or shipped in a box. Call (561) 726-6736.",
  keywords: [
    "kids party planner Boca Raton",
    "kids birthday party Boca Raton",
    "kids craft party Boca Raton",
    "custom sneaker party",
    "princess party Boca Raton",
    "spa party for kids",
    "kids party ideas South Florida",
    "party in a box kids",
    "birthday party venue Boca Raton",
  ],
  openGraph: {
    title: "Kick Up Your Party! | StyleChild Parties & Events",
    description:
      "We plan it, style it, host it and clean it up. Any theme, any craft, décor and games. Boca Raton, at your place, or shipped in a box.",
    images: [`${basePath}/media/hero-mixed.jpg`],
    type: "website",
    locale: "en_US",
    siteName: BRAND.name,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "StyleChild Parties & Events",
  telephone: "+1-561-726-6736",
  email: BRAND.email,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1101 Holland Drive, Suite 5",
    addressLocality: "Boca Raton",
    addressRegion: "FL",
    postalCode: "33487",
    addressCountry: "US",
  },
  areaServed: ["Boca Raton", "Delray Beach", "Boynton Beach", "Parkland", "Fort Lauderdale", "Palm Beach County"],
  makesOffer: [
    { "@type": "Offer", name: "Bash in a Box" },
    { "@type": "Offer", name: "Parties at StyleChild HQ" },
    { "@type": "Offer", name: "Parties Wherever You Are" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${chelsea.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-full flex flex-col">
        {ADS.gtagId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ADS.gtagId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ADS.gtagId}');`}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        {children}
      </body>
    </html>
  );
}
