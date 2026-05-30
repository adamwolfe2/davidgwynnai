import type { Metadata } from "next"
import { Newsreader, Source_Serif_4, Inter, IBM_Plex_Mono } from "next/font/google"
import Analytics from "@/components/analytics"
import CookieConsent from "@/components/cookie-consent"
import "./globals.css"

const GTM_ID = "GTM-NK99T983"

// Editorial typography stack — Newsreader (display), Source Serif 4 (body),
// Inter (UI/labels), IBM Plex Mono (Decision Receipt specimen only)
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-newsreader",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-source-serif",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aiadvisorsllc.com"),
  title: {
    default: "AI Advisors, LLC. The Flight Recorder for Your AI Decisions",
    template: "%s | AI Advisors, LLC",
  },
  description:
    "AI Advisors, LLC builds Decision Defensibility Infrastructure for General Counsel, Chief Risk Officers, compliance leaders, and boards in banks, insurers, and health systems, so when the scrutiny comes, the record is already there.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  keywords: [
    "AI governance",
    "decision defensibility",
    "PrescienceOS",
    "model risk management",
    "AI regulatory compliance",
    "board AI governance",
    "regulated industries AI",
  ],
  openGraph: {
    title: "AI Advisors, LLC. The Flight Recorder for Your AI Decisions",
    description:
      "Decision Defensibility Infrastructure for banks, insurers, and health systems.",
    url: "https://www.aiadvisorsllc.com",
    siteName: "AI Advisors, LLC",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 2796,
        height: 1502,
        alt: "AI Advisors LLC — The Flight Recorder for Your AI Decisions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Advisors, LLC. The Flight Recorder for Your AI Decisions",
    description:
      "Decision Defensibility Infrastructure for banks, insurers, and health systems.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${sourceSerif.variable} ${inter.variable} ${plexMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink-body">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <CookieConsent />
      </body>
      <Analytics />
    </html>
  )
}
