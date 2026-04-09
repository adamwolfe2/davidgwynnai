import { cn } from "@/lib/utils"
import Link from "next/link"

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  target,
  rel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer"

  const variants = {
    primary: "bg-[#578cff] text-white hover:bg-[#4070e0] hover:scale-[1.02] active:scale-[0.98] shadow-sm",
    secondary: "bg-[#f0f6ff] text-[#578cff] hover:bg-[#dceaff] hover:scale-[1.02] active:scale-[0.98]",
    outline: "border-2 border-[#578cff] text-[#578cff] hover:bg-[#f0f6ff] hover:scale-[1.02]",
    ghost: "text-[#578cff] hover:bg-[#f0f6ff]",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
