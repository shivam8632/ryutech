"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type AnimationType = "fade-in-up" | "fade-in" | "scale-in" | "slide-in-left" | "slide-in-right"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600
  threshold?: number
  rootMargin?: string
}

const animationClasses: Record<AnimationType, string> = {
  "fade-in-up": "animate-fade-in-up",
  "fade-in": "animate-fade-in",
  "scale-in": "animate-scale-in",
  "slide-in-left": "animate-slide-in-left",
  "slide-in-right": "animate-slide-in-right",
}

export function ScrollReveal({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const delayClass = delay ? `animation-delay-${delay}` : ""
  const animClass = visible ? animationClasses[animation] : "opacity-0"
  const style = !visible ? { opacity: 0 } : undefined

  return (
    <div
      ref={ref}
      className={`${animClass} ${delayClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
