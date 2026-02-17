"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Check, Globe, Code2, Palette, Cpu } from "lucide-react"
import Link from "next/link"
import type { Service, ServiceIconKey } from "@/lib/data/services"

const iconMap: Record<ServiceIconKey, typeof Globe> = {
  globe: Globe,
  code: Code2,
  palette: Palette,
  cpu: Cpu,
}

const ease = [0.21, 0.47, 0.32, 0.98] as const

export function ServiceDeepDive({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const isReversed = index % 2 === 1

  return (
    <section
      id={service.slug}
      ref={ref}
      className="py-24 lg:py-32 relative"
    >
      {/* Subtle section separator */}
      {index > 0 && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-white/[0.04]" />
      )}

      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-start ${isReversed ? "direction-rtl" : ""
            }`}
        >
          {/* Text column */}
          <div
            className={`${isReversed ? "lg:col-start-7 lg:col-span-6" : "lg:col-span-6"
              }`}
            style={{ direction: "ltr" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              {/* Number + icon */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono text-primary/50">
                  {service.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  {(() => {
                    const Icon = iconMap[service.iconKey]
                    return <Icon className="w-5 h-5 text-primary/60" />
                  })()}
                </div>
              </div>

              {/* Title + tagline */}
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                {service.title}
              </h2>
              <p className="text-lg text-primary/60 font-medium mb-6">
                {service.tagline}
              </p>

              {/* Long description */}
              <p className="text-white/30 leading-relaxed mb-8">
                {service.longDescription}
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-primary/70" />
                    </div>
                    <span className="text-sm text-white/40 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-white/30 bg-white/[0.03] border border-white/[0.05] rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Discuss your project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Visual column — process steps */}
          <div
            className={`${isReversed ? "lg:col-start-1 lg:col-span-5 lg:row-start-1" : "lg:col-span-5 lg:col-start-8"
              }`}
            style={{ direction: "ltr" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="lg:sticky lg:top-28"
            >
              {/* Service-specific process */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden">
                <div className="p-6 border-b border-white/[0.04]">
                  <p className="text-[11px] font-medium text-white/30 tracking-[0.2em] uppercase">
                    Our approach
                  </p>
                </div>

                {service.process.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                      ease,
                    }}
                    className={`p-6 ${i < service.process.length - 1
                        ? "border-b border-white/[0.04]"
                        : ""
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono text-primary/40 mt-1 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="text-sm font-medium text-white/80 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-white/25 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Gradient accent behind card */}
              <div
                className={`absolute -z-10 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] opacity-50 bg-gradient-to-br ${service.gradient} to-transparent`}
                style={{
                  left: isReversed ? "-20%" : "auto",
                  right: isReversed ? "auto" : "-20%",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
