"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PoweredByPrescience } from "./prescience-mark"

/**
 * DecisionReceipt — the only boxed component on the site per CLAUDE.md.
 *
 * Rotating illustrative specimen: cycles through three decision categories
 * (banking, insurance, healthcare) with a subtle crossfade. Explicitly marked
 * SPECIMEN ENVIRONMENT — there is no live counter, no real-time clock, no
 * production data. Per David's P0-3: a defensibility brand cannot imply
 * client decision volume that doesn't exist.
 */

type ReceiptRow = {
  k: string
  v: string
  /** Render value in red when true (e.g. guardrail fired / under review). */
  flag?: boolean
}

type Scenario = {
  id: string
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

export function DecisionReceipt() {
  const [index, setIndex] = useState(0)

  // Rotate specimens every 5s. No counter, no clock — the card is editorial,
  // not telemetry from a production system.
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SCENARIOS.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const scenario = SCENARIOS[index]

  return (
    <div>
      {/* Specimen eyebrow — explicitly illustrative, no live indicators */}
      <div
        className="flex items-center justify-between mb-2"
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        <span className="text-red">Illustrative · {scenario.vertical}</span>
        <span className="text-sand">Specimen environment</span>
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

        {/* Specimen footer strip — replaces the old "decisions logged · 24h"
            counter which implied real production volume */}
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
          <span className="text-sand">Receipt format</span>
          <span className="text-navy" style={{ fontWeight: 600 }}>
            Examination-ready
          </span>
        </div>
      </div>

      <div className="mt-3">
        <PoweredByPrescience />
      </div>
    </div>
  )
}
