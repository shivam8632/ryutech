"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Send,
  CheckCircle,
  MapPin,
  Mail,
  Clock,
  Shield,
  MessageSquare,
  Zap,
} from "lucide-react"

const ease = [0.21, 0.47, 0.32, 0.98] as const

const serviceOptions = [
  "Web Development",
  "Custom Software",
  "UI/UX Design",
  "Automation",
  "Other",
]

const budgetOptions = [
  "Under $5K",
  "$5K – $15K",
  "$15K – $50K",
  "$50K – $100K",
  "$100K+",
]

const trustSignals = [
  {
    icon: Zap,
    title: "Fast Response",
    description: "We reply within 24 hours — often sooner.",
  },
  {
    icon: Shield,
    title: "NDA Ready",
    description: "We sign NDAs before any discussion if needed.",
  },
  {
    icon: MessageSquare,
    title: "No Obligation",
    description: "Free initial consultation. No pressure.",
  },
]

export function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [errorMsg, setErrorMsg] = useState("")

  function updateField(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        })
      } else {
        setStatus("error")
        setErrorMsg(
          data.errors?.[0]?.message || data.error || "Something went wrong",
        )
      }
    } catch {
      setStatus("error")
      setErrorMsg("Network error. Please try again.")
    }
  }

  return (
    <section className="pb-32 lg:pb-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* ── Left: Form ── */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-green-500/20 bg-white/[0.02] p-12 lg:p-16 text-center"
              >
                <CheckCircle className="w-12 h-12 text-green-400/80 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent
                </h3>
                <p className="text-white/35 mb-8 max-w-sm mx-auto">
                  We&apos;ll review your project details and respond within 24
                  hours with a tailored plan.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                onSubmit={handleSubmit}
                className="space-y-7"
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-medium text-white/35 uppercase tracking-widest mb-2.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-primary/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-white/35 uppercase tracking-widest mb-2.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-primary/40 transition-colors"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-[11px] font-medium text-white/35 uppercase tracking-widest mb-2.5">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    placeholder="Your company name"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-primary/40 transition-colors"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-[11px] font-medium text-white/35 uppercase tracking-widest mb-3">
                    Service Interested In
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => updateField("service", s)}
                        className={`text-xs rounded-full px-4 py-2 border transition-all duration-300 ${formData.service === s
                            ? "bg-primary/10 border-primary/30 text-primary"
                            : "bg-white/[0.03] border-white/[0.06] text-white/35 hover:text-white/55 hover:border-white/[0.12]"
                          }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-[11px] font-medium text-white/35 uppercase tracking-widest mb-3">
                    Budget Range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => updateField("budget", b)}
                        className={`text-xs rounded-full px-4 py-2 border transition-all duration-300 ${formData.budget === b
                            ? "bg-primary/10 border-primary/30 text-primary"
                            : "bg-white/[0.03] border-white/[0.06] text-white/35 hover:text-white/55 hover:border-white/[0.12]"
                          }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-medium text-white/35 uppercase tracking-widest mb-2.5">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-primary/40 transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && errorMsg && (
                  <p className="text-sm text-red-400/80">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative inline-flex items-center gap-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 disabled:opacity-50 rounded-full px-8 py-4 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </button>
              </motion.form>
            )}
          </div>

          {/* ── Right: Info + Trust ── */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="lg:sticky lg:top-28 space-y-10"
            >
              {/* Contact info */}
              <div>
                <h3 className="text-[11px] font-medium text-white/30 uppercase tracking-widest mb-6">
                  Contact Info
                </h3>
                <div className="space-y-5">
                  <InfoRow
                    icon={Mail}
                    label="Email"
                    value="hello@ryutech.dev"
                    href="mailto:hello@ryutech.dev"
                  />
                  <InfoRow
                    icon={MapPin}
                    label="Location"
                    value="Lahore, Pakistan — Available worldwide"
                  />
                  <InfoRow
                    icon={Clock}
                    label="Response"
                    value="Within 24 hours"
                  />
                </div>
              </div>

              {/* Trust signals */}
              <div className="border-t border-white/[0.06] pt-10">
                <h3 className="text-[11px] font-medium text-white/30 uppercase tracking-widest mb-6">
                  Why Reach Out
                </h3>
                <div className="space-y-5">
                  {trustSignals.map((signal) => (
                    <div
                      key={signal.title}
                      className="flex items-start gap-4"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
                        <signal.icon className="w-4 h-4 text-primary/50" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60 font-medium">
                          {signal.title}
                        </p>
                        <p className="text-xs text-white/25">
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What happens next */}
              <div className="border-t border-white/[0.06] pt-10">
                <h3 className="text-[11px] font-medium text-white/30 uppercase tracking-widest mb-6">
                  What Happens Next
                </h3>
                <div className="space-y-4">
                  {[
                    "We review your project details and research your industry",
                    "Schedule a discovery call to align on scope and goals",
                    "Deliver a tailored proposal with timeline and pricing",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-xs font-mono text-primary/40 mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-white/30 leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail
  label: string
  value: string
  href?: string
}) {
  const content = href ? (
    <a
      href={href}
      className="text-sm text-white/30 hover:text-white/55 transition-colors"
    >
      {value}
    </a>
  ) : (
    <p className="text-sm text-white/30">{value}</p>
  )

  return (
    <div className="flex items-start gap-4">
      <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-primary/50" />
      </div>
      <div>
        <p className="text-sm text-white/60 font-medium">{label}</p>
        {content}
      </div>
    </div>
  )
}
