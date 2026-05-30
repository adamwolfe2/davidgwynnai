"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const STORAGE_KEY = "cookie-consent"

type ConsentChoice = "accepted" | "rejected"

/**
 * Editorial cookie-consent dialog. Paper background, navy ink, single red
 * accent on the accept action. Persists choice to localStorage and broadcasts
 * a `cookie-consent-change` CustomEvent that Analytics listens for.
 */
export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Decide once on mount whether to surface the banner. The SSR-safe
    // default is hidden — only show after we've checked localStorage.
    let next = false
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored !== "accepted" && stored !== "rejected") {
        next = true
      }
    } catch {
      next = true
    }
    if (next) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(true)
    }
  }, [])

  function handleChoice(choice: ConsentChoice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      // localStorage unavailable — proceed in-memory only
    }
    window.dispatchEvent(
      new CustomEvent("cookie-consent-change", { detail: choice })
    )
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:right-auto z-50 max-w-[420px] bg-paper p-6"
      style={{
        fontFamily: "var(--font-ui)",
        border: "1px solid var(--color-rule)",
        borderTop: "3px solid var(--color-red)",
        boxShadow: "0 12px 32px rgba(27, 42, 74, 0.08)",
      }}
    >
      <p
        className="text-red mb-2"
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: 10,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        Cookies &amp; analytics
      </p>
      <p
        className="text-ink-body mb-4"
        style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55 }}
      >
        We use cookies and similar technologies to understand how visitors use this site and to
        improve your experience. See our{" "}
        <Link
          href="/privacy"
          className="text-red border-b border-red pb-px hover:text-[#A50C25] transition-colors"
        >
          privacy policy
        </Link>{" "}
        for details.
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => handleChoice("rejected")}
          className="flex-1 px-4 text-navy hover:bg-paper-2 transition-colors"
          style={{
            border: "1px solid var(--color-rule)",
            fontFamily: "var(--font-ui)",
            fontSize: 12,
            letterSpacing: "0.03em",
            fontWeight: 600,
            minHeight: 44,
          }}
        >
          Reject
        </button>
        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          className="flex-1 px-4 bg-navy text-white hover:bg-[#0f1d36] transition-colors"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 12,
            letterSpacing: "0.03em",
            fontWeight: 600,
            minHeight: 44,
          }}
        >
          Accept all
        </button>
      </div>
    </div>
  )
}
