"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

const easeOut = [0.21, 0.47, 0.32, 0.98] as const

interface RevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const offsets = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: easeOut },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function CountUp({
  target,
  suffix = "",
  className,
}: {
  target: number
  suffix?: string
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Counter from={0} to={target} />
          {suffix}
        </motion.span>
      ) : (
        `0${suffix}`
      )}
    </motion.span>
  )
}

function Counter({ from, to }: { from: number; to: number }) {
  return (
    <motion.span
      initial={from}
      animate={to}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {(() => {
        const ref = useRef<HTMLSpanElement>(null)

        return (
          <motion.span
            ref={ref}
            animate={{ opacity: 1 }}
            onUpdate={() => { }}
          >
            <AnimatedNumber target={to} />
          </motion.span>
        )
      })()}
    </motion.span>
  )
}

function AnimatedNumber({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref}>
      {isInView ? (
        <motion.span>{target}</motion.span>
      ) : (
        <span>0</span>
      )}
    </span>
  )
}
