"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

const GTM_ID = "GTM-NK99T983"
const GA4_ID = "G-TJ19MYHKSB"
const STORAGE_KEY = "cookie-consent"

type ConsentState = "accepted" | "rejected" | "pending"

function readConsent(): ConsentState {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "accepted" || stored === "rejected") return stored
  } catch {
    // localStorage unavailable
  }
  return "pending"
}

export default function Analytics() {
  const [consent, setConsent] = useState<ConsentState>("pending")

  useEffect(() => {
    setConsent(readConsent())

    function handler() {
      setConsent(readConsent())
    }
    window.addEventListener("cookie-consent-change", handler)
    return () => window.removeEventListener("cookie-consent-change", handler)
  }, [])

  const accepted = consent === "accepted"

  return (
    <>
      {/* Google Consent Mode v2 defaults — must run BEFORE GTM/GA */}
      <Script id="consent-default" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'functionality_storage': 'denied',
          'personalization_storage': 'denied',
          'security_storage': 'granted'
        });
      `}</Script>

      {/* Push consent update once user accepts */}
      {accepted && (
        <Script id="consent-update" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'functionality_storage': 'granted',
            'personalization_storage': 'granted'
          });
        `}</Script>
      )}

      {/* Google Tag Manager — loads but respects Consent Mode */}
      <Script id="gtm-init" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}</Script>

      {/* GA4 direct — also respects Consent Mode */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA4_ID}');
      `}</Script>

      {/* Third-party visitor analytics — only loads with explicit consent.
          The data-ga4-key attribute wires this pixel's events directly into
          the GA4 property so enriched visitor attributes flow into reports. */}
      {accepted && (
        <Script
          src="https://cdn.idpixel.app/v1/idp-analytics-69d8475a58b55f8c5c2737f3.min.js"
          strategy="afterInteractive"
          data-ga4-key={GA4_ID}
        />
      )}
    </>
  )
}
