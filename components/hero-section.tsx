"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, Code2, Palette, Cpu, Globe } from "lucide-react"

const ease = [0.21, 0.47, 0.32, 0.98] as const

/* ── word-by-word clip-reveal ── */
function RevealLine({
  children,
  delay,
  className = "",
}: {
  children: string
  delay: number
  className?: string
}) {
  const words = children.split(" ")
  return (
    <span className={`block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.27em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.065,
              ease,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/* ── floating service chips ── */
const chips = [
  { icon: Globe, label: "Web", x: 10, y: 12, depth: 1.0 },
  { icon: Palette, label: "Design", x: 60, y: 8, depth: 0.6 },
  { icon: Code2, label: "Software", x: 5, y: 58, depth: 0.8 },
  { icon: Cpu, label: "Automation", x: 55, y: 65, depth: 0.5 },
]

const metrics = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Active Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
]

export function HeroSection() {
  /* ── mouse parallax ── */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const [mounted, setMounted] = useState(false)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2
      const cy = (e.clientY / window.innerHeight - 0.5) * 2
      mouseX.set(cx)
      mouseY.set(cy)
    },
    [mouseX, mouseY],
  )

  useEffect(() => {
    setMounted(true)
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── animated gradient mesh bg ── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-grid" />

        {/* Gradient orbs that shift with mouse */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full blur-[160px] opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)",
            left: "40%",
            top: "20%",
            x: mounted ? smoothX : 0,
            y: mounted ? smoothY : 0,
            scale: 1,
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, hsl(250 80% 67%), transparent 70%)",
            right: "10%",
            bottom: "10%",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, hsl(280 70% 60%), transparent 70%)",
            left: "10%",
            bottom: "30%",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center pt-32 lg:pt-40 pb-32">
          {/* ── Left: Typography-driven content ── */}
          <div className="lg:col-span-7 space-y-8">
            {/* eyebrow */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              <span className="inline-flex items-center gap-3 text-[11px] font-medium text-white/30 tracking-[0.2em] uppercase overflow-hidden">
                <motion.span
                  className="block w-8 h-px bg-primary/60"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
                Digital Engineering Studio
              </span>
            </motion.div>

            {/* Main headline — word-by-word clip reveal */}
            <h1 className="text-[clamp(2.8rem,6.5vw,6rem)] font-bold text-white leading-[0.92] tracking-tight">
              <RevealLine delay={0.35}>We engineer</RevealLine>
              <RevealLine delay={0.55}>digital products</RevealLine>
              <RevealLine delay={0.75} className="gradient-text">
                with precision.
              </RevealLine>
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease }}
              className="text-[17px] text-white/30 max-w-md leading-relaxed"
            >
              From concept to deployment — software that scales your business.
              No templates. No shortcuts. Just craft.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3, ease }}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-full px-7 py-3.5 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* shine sweep on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white/70 transition-colors duration-300 px-1"
              >
                Explore Services
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* ── Right: Mouse-reactive floating composition ── */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center min-h-[520px]">
            {/* Central pulsing orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-xl" />
                <div className="absolute inset-[72px] rounded-full border border-white/[0.04] bg-white/[0.01]" />
                {/* spinning orbit ring */}
                <div className="absolute inset-4 rounded-full border border-dashed border-white/[0.04] animate-spin-slow" />
              </div>
            </div>

            {/* Mouse-reactive floating chips */}
            {chips.map((chip, i) => (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 + i * 0.15, ease }}
                className="absolute"
                style={{
                  left: `${chip.x}%`,
                  top: `${chip.y}%`,
                  x: mounted
                    ? smoothX.get() * chip.depth * 25
                    : 0,
                  y: mounted
                    ? smoothY.get() * chip.depth * 25
                    : 0,
                }}
              >
                <motion.div
                  className="flex items-center gap-2.5 glass rounded-xl px-4 py-2.5 cursor-default select-none"
                  whileHover={{ scale: 1.08, borderColor: "rgba(255,255,255,0.12)" }}
                  animate={{
                    y: [0, chip.depth * -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                    <chip.icon className="w-3.5 h-3.5 text-primary/70" />
                  </div>
                  <span className="text-xs text-white/50 font-medium">
                    {chip.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom metrics strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/[0.04]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-5 gap-8 overflow-x-auto hide-scrollbar">
            {metrics.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3 shrink-0">
                {i > 0 && (
                  <div className="w-px h-4 bg-white/[0.06] mr-3 hidden sm:block" />
                )}
                <span className="text-sm font-semibold text-white/80 tabular-nums">
                  {stat.value}
                </span>
                <span className="text-[11px] text-white/20 tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
