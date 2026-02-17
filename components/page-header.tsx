"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

const ease = [0.21, 0.47, 0.32, 0.98] as const

interface PageHeaderProps {
  eyebrow: string
  title: string
  titleAccent?: string
  description: string
  children?: ReactNode
}

export function PageHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          <span className="inline-flex items-center gap-3 text-[11px] font-medium text-white/30 tracking-[0.2em] uppercase mb-6">
            <span className="w-8 h-px bg-primary/60" />
            {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight mb-6"
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="gradient-text">{titleAccent}</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="text-lg text-white/30 max-w-xl leading-relaxed"
        >
          {description}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
