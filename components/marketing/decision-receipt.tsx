"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PoweredByPrescience } from "./prescience-mark"

/**
 * DecisionReceipt — the only boxed component on the site per CLAUDE.md.
 *
 * Live specimen: cycles through real-world decision categories (banking,
 * insurance, healthcare) with a subtle crossfade. Decision IDs tick like
 * a flight recorder counter. A muted "logged at" timestamp updates every
 * few seconds. None of the motion is flashy — the editorial brand stays
 * intact; the card is the one place "evidence on demand" can move.
 */

type ReceiptRow = {
  k: string
  v: string
  /** Render value in red when true (e.g. guardrail fired / under review). */
  flag?: boolean
}

type Scenario = {
  id: string
  /** Vertical label shown as the live eyebrow ("Banking" etc). */
  vertical: string
  rows: ReceiptRow[]
}

const SCENARIOS: Scenario[] = [
  {
    id: "banking",
    vertical: "Banking",
    rows: [
      { k: "Decision", v: "Credit denial · 4471" },
      { k: "Rationale", v: "Captured, plain-language" },
      { k: "Model version", v: "v3.2 · logged" },
      { k: "Accountable", v: "Named officer" },
      { k: "Guardrail", v: "Fired · on record", flag: true },
    ],
  },
  {
    id: "insurance",
    vertical: "Insurance",
    rows: [
      { k: "Decision", v: "Claim adjudication · 88,204" },
      { k: "Rationale", v: "Captured, plain-language" },
      { k: "Model version", v: "v2.1 · logged" },
      { k: "Accountable", v: "Adjuster of record" },
      { k: "Guardrail", v: "Active · monitored" },
    ],
  },
  {
    id: "healthcare",
    vertical: "Healthcare",
    rows: [
      { k: "Decision", v: "Triage routing · 1.2-91" },
      { k: "Rationale", v: "Captured, plain-language" },
      { k: "Model version", v: "v4.0 · logged" },
      { k: "Accountable", v: "Clinician of record" },
      { k: "Guardrail", v: "Fired · on record", flag: true },
    ],
  },
]

/** Editorial counter — formats a number with thousands separators. */
function formatCount(n: number): string {
  return n.toLocaleString("en-US")
}

/** Pad to 2 digits for the timestamp. */
function pad2(n: number): string {
  return n.toString().padStart(2, "0")
}

export function DecisionReceipt() {
  const [index, setIndex] = useState(0)
  const [counter, setCounter] = useState(184_726)
  const [now, setNow] = useState<Date | null>(null)

  // Cycle scenarios every 5s.
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SCENARIOS.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  // Tick the "decisions logged" counter on a jittered cadence (1.4–2.6s).
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    const tick = () => {
      setCounter((c) => c + Math.floor(Math.random() * 3) + 1)
      timeoutId = setTimeout(tick, 1400 + Math.random() * 1200)
    }
    timeoutId = setTimeout(tick, 1800)
    return () => clearTimeout(timeoutId)
  }, [])

  // Live timestamp — refresh every second. Render only on the client to
  // avoid SSR/hydration drift; falls back to "—" until mounted.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const scenario = SCENARIOS[index]
  const timestamp = now
    ? `${pad2(now.getHours())}:${pad2(now.getMinutes())}:${pad2(now.getSeconds())} UTC`
    : "··:··:··"

  return (
    <div>
      {/* Live status eyebrow */}
      <div
        className="flex items-center justify-between mb-2"
        style={{ fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" }}
      >
        <span className="flex items-center gap-2 text-red font-semibold">
          <LivePulse />
          Live · {scenario.vertical}
        </span>
        <span className="text-sand" suppressHydrationWarning>
          {timestamp}
        </span>
      </div>

      {/* Receipt card */}
      <div className="bg-white border border-navy relative overflow-hidden">
        <div
          className="bg-navy text-white px-3 py-2"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Decision Receipt™ specimen
        </div>

        {/* Crossfade between scenarios */}
        <div className="relative" style={{ minHeight: 180 }}>
          <AnimatePresence mode="wait">
            <motion.table
              key={scenario.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-full border-collapse"
              style={{ fontFamily: "var(--font-ui)", fontSize: 12.5 }}
            >
              <tbody>
                {scenario.rows.map((row, i) => {
                  const isLast = i === scenario.rows.length - 1
                  return (
                    <tr key={row.k}>
                      <td
                        className="px-3 py-2 text-sand align-top"
                        style={{ borderBottom: isLast ? "none" : "1px solid #ECE7DA" }}
                      >
                        {row.k}
                      </td>
                      <td
                        className="px-3 py-2 text-right align-top"
                        style={{
                          borderBottom: isLast ? "none" : "1px solid #ECE7DA",
                          color: row.flag ? "var(--color-red)" : "var(--color-navy)",
                        }}
                      >
                        {row.v}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </motion.table>
          </AnimatePresence>
        </div>

        {/* Footer counter strip */}
        <div
          className="flex items-center justify-between px-3 py-2 border-t bg-paper-2"
          style={{
            borderColor: "var(--color-rule)",
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <span className="text-sand">Decisions logged · 24h</span>
          <CounterDigits value={formatCount(counter)} />
        </div>
      </div>

      <div className="mt-3">
        <PoweredByPrescience />
      </div>
    </div>
  )
}

/** Small pulsing red dot — "live" indicator. */
function LivePulse() {
  return (
    <span className="relative inline-flex items-center justify-center" style={{ width: 8, height: 8 }}>
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: "var(--color-red)", opacity: 0.4 }}
        animate={{ scale: [1, 2.2, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      />
      <span
        className="relative inline-block rounded-full"
        style={{ width: 6, height: 6, backgroundColor: "var(--color-red)" }}
      />
    </span>
  )
}

/** Counter digits — fades the trailing digit when it changes so the
 *  ticker feels mechanical, not just "a number going up." */
function CounterDigits({ value }: { value: string }) {
  return (
    <span className="text-navy tabular-nums" style={{ fontWeight: 600 }}>
      <AnimatePresence mode="popLayout" initial={false}>
        {value.split("").map((char, i) => (
          <motion.span
            key={`${i}-${char}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  )
}
