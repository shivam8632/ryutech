"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { motion, useMotionValue, useSpring, useInView } from "framer-motion"
import { ArrowRight, Mail, CheckCircle } from "lucide-react"

const ease = [0.21, 0.47, 0.32, 0.98] as const

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  /* ── mouse-reactive gradient ── */
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const smoothGlowX = useSpring(glowX, { stiffness: 60, damping: 20 })
  const smoothGlowY = useSpring(glowY, { stiffness: 60, damping: 20 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      glowX.set(((e.clientX - rect.left) / rect.width) * 100)
      glowY.set(((e.clientY - rect.top) / rect.height) * 100)
    },
    [glowX, glowY],
  )

  /* ── newsletter form ── */
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSubscribed(true)
        setEmail("")
      }
    } catch {
      /* handled silently */
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-32 lg:py-44 relative overflow-hidden"
    >
      {/* Mouse-following gradient glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)",
          left: smoothGlowX,
          top: smoothGlowY,
          translateX: "-50%",
          translateY: "-50%",
          x: "-50%",
          y: "-50%",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-primary/40" />
          <span className="text-[11px] font-medium text-white/25 tracking-[0.2em] uppercase">
            Let&apos;s Talk
          </span>
          <span className="w-8 h-px bg-primary/40" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 text-balance"
        >
          Ready to build something{" "}
          <span className="gradient-text">exceptional?</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease }}
          className="text-[17px] text-white/28 max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Let&apos;s start with a conversation about your vision.
          We&apos;d love to show you what&apos;s possible.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
        >
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-full px-8 py-4 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </a>
          <a
            href="mailto:hello@ryutech.dev"
            className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white/60 transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            hello@ryutech.dev
          </a>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45, ease }}
          className="max-w-md mx-auto"
        >
          <p className="text-[10px] text-white/15 uppercase tracking-[0.2em] mb-4">
            Or stay in the loop
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-sm text-green-400/70">
              <CheckCircle className="w-4 h-4" />
              You&apos;re on the list.
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full p-1.5 focus-within:border-primary/25 transition-colors duration-300"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-transparent text-sm text-white/70 placeholder:text-white/15 px-4 py-2 outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="text-xs font-medium text-white/70 bg-white/[0.06] hover:bg-white/[0.1] rounded-full px-5 py-2.5 transition-colors duration-300 shrink-0 disabled:opacity-40"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
