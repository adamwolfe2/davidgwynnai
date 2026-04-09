/**
 * GridBackground — subtle grid lines + radial colour glow.
 * Place as the *first child* of a `relative overflow-hidden` container.
 *
 * Variants:
 *  "blue"    — light-blue glow  (#C9EBFF)  — hero, services, how-it-works
 *  "purple"  — lavender glow    (#d5c5ff)  — testimonials, stats, CTA
 *  "none"    — grid only, no glow           — minimal sections
 *
 * Layer order (bottom → top):
 *  1. Radial colour glow (behind grid lines so lines stay visible)
 *  2. Grid lines (always on top of the glow)
 */

type GridVariant = "blue" | "purple" | "none"

interface GridBackgroundProps {
  variant?: GridVariant
  glowPosition?: "top-center" | "top-right" | "top-left"
}

const glowColors: Record<GridVariant, string> = {
  blue:   "#C9EBFF",
  purple: "#d5c5ff",
  none:   "transparent",
}

const positionStyles: Record<string, string> = {
  "top-center": "bg-[radial-gradient(circle_700px_at_50%_-80px,VAR,transparent_70%)]",
  "top-right":  "bg-[radial-gradient(circle_700px_at_100%_100px,VAR,transparent_70%)]",
  "top-left":   "bg-[radial-gradient(circle_700px_at_0%_100px,VAR,transparent_70%)]",
}

export function GridBackground({
  variant = "blue",
  glowPosition = "top-center",
}: GridBackgroundProps) {
  const color = glowColors[variant]
  const gradientClass = positionStyles[glowPosition].replace("VAR", color)

  return (
    <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
      {/* Glow layer — behind grid so lines are always visible */}
      {variant !== "none" && (
        <div className={`absolute inset-0 ${gradientClass}`} />
      )}
      {/* Grid lines — fades out toward bottom */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#a8c4dc_1px,transparent_1px),linear-gradient(to_bottom,#a8c4dc_1px,transparent_1px)] bg-[size:4.5rem_3.5rem] opacity-[0.28]"
        style={{ maskImage: "linear-gradient(to bottom, black 30%, transparent 90%)" }}
      />
    </div>
  )
}
