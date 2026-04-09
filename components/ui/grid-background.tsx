/**
 * GridBackground — subtle grid lines + radial colour glow.
 * Place as the *first child* of a `relative overflow-hidden` container.
 *
 * Variants:
 *  "blue"    — light-blue glow  (#C9EBFF)  — hero, services, how-it-works
 *  "purple"  — lavender glow    (#d5c5ff)  — testimonials, stats, CTA
 *  "none"    — grid only, no glow           — minimal sections
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
  "top-center": "bg-[radial-gradient(circle_600px_at_50%_-50px,VAR,transparent)]",
  "top-right":  "bg-[radial-gradient(circle_700px_at_100%_100px,VAR,transparent)]",
  "top-left":   "bg-[radial-gradient(circle_700px_at_0%_100px,VAR,transparent)]",
}

export function GridBackground({
  variant = "blue",
  glowPosition = "top-center",
}: GridBackgroundProps) {
  const color = glowColors[variant]
  const gradientClass = positionStyles[glowPosition].replace("VAR", color)

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#e8edf5_1px,transparent_1px),linear-gradient(to_bottom,#e8edf5_1px,transparent_1px)] bg-[size:5rem_3.5rem]">
      {variant !== "none" && (
        <div className={`absolute inset-0 ${gradientClass}`} />
      )}
    </div>
  )
}
