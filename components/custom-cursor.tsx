"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const dotX = useSpring(cursorX, { stiffness: 800, damping: 35, mass: 0.3 })
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 35, mass: 0.3 })

  const ringX = useSpring(cursorX, { stiffness: 120, damping: 20, mass: 0.8 })
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 20, mass: 0.8 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [cursorX, cursorY])

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999]">
      {/* Inner dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-white mix-blend-difference"
        style={{
          left: dotX,
          top: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="absolute w-9 h-9 rounded-full border border-white/50 mix-blend-difference"
        style={{
          left: ringX,
          top: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  )
}
