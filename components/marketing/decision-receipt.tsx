import { PoweredByPrescience } from "./prescience-mark"

/**
 * DecisionReceipt — the only boxed component on the site per CLAUDE.md.
 * Specimen card shown in the hero. Navy header in mono uppercase, key/value
 * rows in Inter, "Fired · on record" guardrail state in editorial red.
 */
type ReceiptRow = {
  k: string
  v: string
  /** Render value in red when true (e.g. guardrail fired). */
  flag?: boolean
}

const DEFAULT_ROWS: ReceiptRow[] = [
  { k: "Decision", v: "Credit denial — 4471" },
  { k: "Rationale", v: "Captured, plain-language" },
  { k: "Model version", v: "v3.2 · logged" },
  { k: "Accountable", v: "Named officer" },
  { k: "Guardrail", v: "Fired · on record", flag: true },
]

export function DecisionReceipt({
  rows = DEFAULT_ROWS,
  title = "Decision Receipt™ — specimen",
}: {
  rows?: ReceiptRow[]
  title?: string
}) {
  return (
    <div>
      <div className="bg-white border border-navy">
        <div
          className="bg-navy text-white px-3 py-2"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>
        <table className="w-full border-collapse" style={{ fontFamily: "var(--font-ui)", fontSize: 12.5 }}>
          <tbody>
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1
              return (
                <tr key={row.k}>
                  <td
                    className="px-3 py-1.5 text-sand align-top"
                    style={{ borderBottom: isLast ? "none" : "1px solid #ECE7DA" }}
                  >
                    {row.k}
                  </td>
                  <td
                    className="px-3 py-1.5 text-right align-top"
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
        </table>
      </div>
      <div className="mt-3">
        <PoweredByPrescience />
      </div>
    </div>
  )
}
