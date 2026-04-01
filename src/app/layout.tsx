import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vloerverwarmingkenner.nl"),
  title: {
    template: "%s | Vloerverwarmingkenner.nl",
    default: "Vloerverwarming Vergelijken 2026 - Kosten, Soorten & Tips | Vloerverwarmingkenner.nl",
  },
  description:
    "Alles over vloerverwarming in 2026. Vergelijk soorten, bereken kosten, ontdek subsidies en leer of je het zelf kunt doen. Onafhankelijk en 100% gratis.",
  keywords: [
    "vloerverwarming",
    "vloerverwarming kosten",
    "watervloerverwarming",
    "elektrische vloerverwarming",
    "vloerverwarming aanleggen",
    "vloerverwarming installatie",
    "vloerverwarming subsidie",
    "vloerverwarming voordelen",
    "vloerverwarming nadelen",
    "vloerverwarming zelf doen",
    "vloerverwarming per ruimte",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://vloerverwarmingkenner.nl",
    siteName: "Vloerverwarmingkenner.nl",
    title: "Vloerverwarming Vergelijken 2026 - Kosten, Soorten & Tips | Vloerverwarmingkenner.nl",
    description:
      "Alles over vloerverwarming in 2026. Vergelijk soorten, bereken kosten, ontdek subsidies en leer of je het zelf kunt doen. Onafhankelijk en 100% gratis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vloerverwarming Vergelijken 2026 - Kosten, Soorten & Tips",
    description:
      "Alles over vloerverwarming in 2026. Vergelijk soorten, bereken kosten, ontdek subsidies en leer of je het zelf kunt doen.",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://vloerverwarmingkenner.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.className}>
      <head>
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX');
            `,
          }}
        />

        {/* Geo Meta Tags */}
        <meta name="geo.position" content="52.3676;4.9041" />
        <meta name="ICBM" content="52.3676, 4.9041" />
        <meta name="geo.placename" content="Netherlands" />
        <meta name="geo.region" content="NL" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://vloerverwarmingkenner.nl/#website",
                  url: "https://vloerverwarmingkenner.nl",
                  name: "Vloerverwarmingkenner.nl",
                  description:
                    "Alles over vloerverwarming in 2026. Vergelijk soorten, bereken kosten, ontdek subsidies en leer of je het zelf kunt doen.",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://vloerverwarmingkenner.nl/zoeken?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://vloerverwarmingkenner.nl/#organization",
                  name: "Vloerverwarmingkenner",
                  url: "https://vloerverwarmingkenner.nl",
                  description:
                    "Onafhankelijke gids over vloerverwarming - kosten, soorten, subsidies en tips.",
                  sameAs: [
                    "https://www.facebook.com/vloerverwarmingkenner",
                    "https://www.instagram.com/vloerverwarmingkenner",
                    "https://www.linkedin.com/company/vloerverwarmingkenner",
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
