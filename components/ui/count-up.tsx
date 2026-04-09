"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useMotionValue, useTransform, animate } from "framer-motion"

interface CountUpProps {
  to: number
  suffix?: string
  duration?: number
}

export function CountUp({ to, suffix = "", duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const motionValue = useMotionValue(0)
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (!isInView) return

    const controls = animate(motionValue, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        setDisplayValue(Math.round(value).toLocaleString())
      },
    })

    return () => controls.stop()
  }, [isInView, to, duration, motionValue])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}
