"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

const ease = [0.21, 0.47, 0.32, 0.98] as const

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Active Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "5+", label: "Years of Craft" },
]

const technologies = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "Go",
  "AWS", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "GraphQL",
  "Redis", "Figma", "Tailwind CSS", "Prisma",
]

const SCRAMBLE_CHARS = "0123456789%+!#—?="

function ScrambleStat({
  value,
  label,
  delay,
  active,
}: {
  value: string
  label: string
  delay: number
  active: boolean
}) {
  const [display, setDisplay] = useState(value)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!active || hasRun.current) return
    hasRun.current = true

    let frame = 0
    const totalFrames = 25

    const interval = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const result = value
        .split("")
        .map((char, i) => {
          if (char === " ") return " "
          if (i / value.length < progress) return char
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        })
        .join("")
      setDisplay(result)
      if (frame >= totalFrames) clearInterval(interval)
    }, 35)

    return () => clearInterval(interval)
  }, [active, value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
    >
      <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight tabular-nums mb-2 font-mono">
        {display}
      </div>
      <div className="text-sm text-white/30 tracking-wide">{label}</div>
    </motion.div>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="work" className="py-32 lg:py-40 relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.02] rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-primary/60" />
          <span className="text-[11px] font-medium text-white/30 tracking-[0.2em] uppercase">
            Impact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-20 lg:mb-28"
        >
          Results speak
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-28 lg:mb-36">
          {stats.map((stat, i) => (
            <ScrambleStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={0.15 + i * 0.1}
              active={isInView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/[0.06] pt-14"
        >
          <p className="text-[11px] font-medium text-white/20 tracking-[0.2em] uppercase mb-8 text-center">
            Technologies We Master
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.03 }}
                className="text-[11px] text-white/25 bg-white/[0.02] border border-white/[0.05] rounded-full px-4 py-2 hover:bg-white/[0.05] hover:text-white/50 hover:border-white/[0.1] transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
