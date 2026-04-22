import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const GA_ID = "G-OVXVR4BSGO"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "AI Advisors, LLC — The Flight Recorder for Your AI Decisions",
    template: "%s | AI Advisors, LLC",
  },
  description:
    "AI Advisors, LLC builds Decision Defensibility Infrastructure for executives and boards in banks, insurers, and health systems — so when the scrutiny comes, the record is already there.",
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
    title: "AI Advisors, LLC — The Flight Recorder for Your AI Decisions",
    description:
      "AI Governance & Decision Defensibility Infrastructure for banks, insurers, and health systems.",
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
    title: "AI Advisors, LLC — The Flight Recorder for Your AI Decisions",
    description:
      "AI Governance & Decision Defensibility Infrastructure for banks, insurers, and health systems.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
      <Script src="https://cdn.idpixel.app/v1/idp-analytics-69d8475a58b55f8c5c2737f3.min.js" strategy="afterInteractive" />
    </html>
  )
}
