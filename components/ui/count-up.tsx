"use client"

import { useEffect, useRef, useState } from "react"
import {
  useInView,
  useMotionValue,
  animate,
  useReducedMotion,
} from "framer-motion"

interface CountUpProps {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
}

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const motionValue = useMotionValue(to)
  const shouldReduceMotion = useReducedMotion()
  // Default to final value so SSR, no-JS, and reduced-motion all show real numbers.
  // The animation is a progressive enhancement.
  const [displayValue, setDisplayValue] = useState(to.toLocaleString())

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return

    motionValue.set(0)
    setDisplayValue("0")

    const controls = animate(motionValue, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        setDisplayValue(Math.round(value).toLocaleString())
      },
    })

    return () => controls.stop()
  }, [isInView, to, duration, motionValue, shouldReduceMotion])

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
