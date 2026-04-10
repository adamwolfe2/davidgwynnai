import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "David W. Gwynn | AI Advisors, LLC — AI Governance & Decision Defensibility",
    template: "%s | AI Advisors, LLC",
  },
  description:
    "I build Decision Defensibility Infrastructure for executives and boards in banks, insurers, and health systems — so when the scrutiny comes, the record is already there.",
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
    title: "David W. Gwynn | AI Advisors, LLC",
    description:
      "AI Governance & Decision Defensibility Infrastructure for banks, insurers, and health systems.",
    url: "https://www.aiadvisorsllc.com",
    siteName: "AI Advisors, LLC",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 3158,
        height: 1454,
        alt: "AI Advisors LLC — AI Governance & Decision Defensibility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David W. Gwynn | AI Advisors, LLC",
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
      <Script src="https://cdn.idpixel.app/v1/idp-analytics-69d8475a58b55f8c5c2737f3.min.js" strategy="afterInteractive" />
    </html>
  )
}
