/**
 * PrescienceMark — the crosshairs-in-O reticle used for the PrescienceOS™
 * product wordmark. Pair with live text in the display font for proper kerning,
 * e.g. <span>Prescience<PrescienceMark size={14}/>S</span>.
 *
 * Per CLAUDE.md: never use as the primary site mark (lighthouse is the site mark);
 * only where PrescienceOS is the subject.
 */
export function PrescienceMark({
  size = 22,
  ink = "#1B2A4A",
  tick = "#C8102E",
  className,
}: {
  size?: number
  ink?: string
  tick?: string
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" fill="none" stroke={ink} strokeWidth="2.4" />
      <line x1="12" y1="0.5" x2="12" y2="6" stroke={tick} strokeWidth="2.4" />
      <line x1="12" y1="18" x2="12" y2="23.5" stroke={tick} strokeWidth="2.4" />
      <line x1="0.5" y1="12" x2="6" y2="12" stroke={tick} strokeWidth="2.4" />
      <line x1="18" y1="12" x2="23.5" y2="12" stroke={tick} strokeWidth="2.4" />
      <circle cx="12" cy="12" r="1.5" fill={tick} />
    </svg>
  )
}

/** Reversed variant for navy backgrounds. */
export function PrescienceMarkReverse(props: { size?: number; className?: string }) {
  return <PrescienceMark ink="#FFFFFF" tick="#E5536A" {...props} />
}

/**
 * PoweredByPrescience — inline lockup that reads:
 *   POWERED BY   PrescienceOS
 * where the "O" in "PrescienceOS" is the reticle SVG.
 *
 * Fixed in David's P1-3:
 * - Adds visible space between the "POWERED BY" eyebrow and the wordmark
 *   (was collapsing to "POWERED BYPrescience·S").
 * - Replaces the orphaned middle-dot glyph with the actual PrescienceMark
 *   reticle component, used as the letter O so the wordmark reads
 *   "PrescienceOS" with the crosshairs-in-O at the right size.
 * - Uses --font-display (Newsreader) for the wordmark so kerning matches
 *   the rest of the editorial brand.
 */
export function PoweredByPrescience({
  ink = "#1B2A4A",
  tick = "#C8102E",
  muted = "#8A8170",
}: {
  ink?: string
  tick?: string
  muted?: string
}) {
  return (
    <div className="flex items-center justify-end gap-3">
      <span
        style={{
          color: muted,
          fontFamily: "var(--font-ui)",
          fontSize: 10,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        Powered by
      </span>
      <span
        className="inline-flex items-baseline gap-[2px]"
        style={{
          color: ink,
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: "0.005em",
        }}
        aria-label="PrescienceOS"
      >
        <span>Prescience</span>
        <PrescienceMark size={14} ink={ink} tick={tick} className="relative top-[1px]" />
        <span>S</span>
      </span>
    </div>
  )
}
