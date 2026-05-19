"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const STORAGE_KEY = "cookie-consent"

type ConsentChoice = "accepted" | "rejected"

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored !== "accepted" && stored !== "rejected") {
        setShow(true)
      }
    } catch {
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
      className="fixed bottom-4 left-4 right-4 sm:right-auto z-50 max-w-sm rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-2xl shadow-black/10"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <h3 className="text-sm font-bold text-[#292929] mb-2">
        Cookies & analytics
      </h3>
      <p className="text-xs text-[#292929]/70 leading-relaxed mb-4">
        We use cookies and similar technologies to understand how visitors use
        this site and to improve your experience. See our{" "}
        <Link
          href="/privacy"
          className="text-[#578cff] font-medium hover:underline"
        >
          privacy policy
        </Link>{" "}
        for details.
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => handleChoice("rejected")}
          className="flex-1 px-3 py-2 rounded-lg border border-[#e2e8f0] text-xs font-semibold text-[#292929] hover:bg-[#f8fafc] transition-colors"
        >
          Reject
        </button>
        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          className="flex-1 px-3 py-2 rounded-lg bg-[#578cff] text-xs font-semibold text-white hover:bg-[#4577e5] transition-colors"
        >
          Accept all
        </button>
      </div>
    </div>
  )
}
