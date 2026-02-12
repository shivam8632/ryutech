"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function IconLeads() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-200">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconRevenue() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-200">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function IconConversion() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-200">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

const metrics = [
  { Icon: IconLeads, value: "12.5K", label: "New Leads", change: "+24%" },
  { Icon: IconRevenue, value: "₹8.2L", label: "Revenue", change: "+18%" },
  { Icon: IconConversion, value: "68%", label: "Conversion", change: "+12%" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden px-6 pt-24 pb-24 md:px-8 lg:px-12"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* glow background - uses theme accent */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[-20%] top-[-20%] h-[700px] w-[700px] rounded-full blur-[140px] opacity-20"
          style={{ background: "var(--accent)" }}
        />
        <div
          className="absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full blur-[140px] opacity-10"
          style={{ background: "var(--accent)" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.05fr,1fr]">
        {/* LEFT */}
        <div className="max-w-[560px]">
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur">
            Your Brand&apos;s Dedicated Growth Engine
          </span>

          <motion.h1 className="mt-6 text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[52px]">
            Fast, Scalable & Result-
            <br />
            <span style={{ color: "var(--accent)" }}>
              Driven Growth Marketing
            </span>
          </motion.h1>

          <p className="mt-5 text-[15.5px] leading-[1.7] text-slate-300 max-w-[520px]">
            We help businesses attract attention, generate quality leads, and convert customers through performance marketing, content strategy, and smart automation. From brand building to revenue scaling — we manage your complete digital growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-xl px-7 font-semibold text-white shadow-lg hover:opacity-95"
              style={{ background: "var(--accent)", boxShadow: "0 10px 30px color-mix(in srgb, var(--accent) 35%, transparent)" }}
              asChild
            >
              <a href="#contact">Get Free Consultation</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border backdrop-blur-md px-7 font-medium text-slate-200 hover:bg-white/10"
              style={{ borderColor: "var(--hero-border)", background: "var(--hero-button-bg)" }}
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {[
              { value: "99.9%", label: "Uptime Guaranteed" },
              { value: "24/7", label: "Support Available" },
              { value: "50+", label: "Clients Served" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border p-4 text-center backdrop-blur-md"
                style={{ borderColor: "var(--hero-border)", background: "var(--hero-dashboard-card)" }}
              >
                <div className="text-xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT DASHBOARD */}
        <div className="hidden md:block">
          <div
            className="overflow-hidden rounded-3xl border backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            style={{ borderColor: "var(--hero-border)", background: "var(--hero-dashboard-bg)" }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 pt-4 pb-3 text-slate-400 text-xs uppercase tracking-widest">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              Growth Analytics
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Your Brand Growth</h3>
                <span
                  className="rounded-lg px-2.5 py-1 text-xs font-semibold text-white"
                  style={{ background: "var(--accent)" }}
                >
                  Live
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-white/5 p-3.5"
                    style={{ background: "var(--hero-metric-bg)" }}
                  >
                    <div className="flex items-center justify-between">
                      <m.Icon />
                      <span className="rounded-md px-2 py-0.5 text-xs font-semibold text-white bg-emerald-500/90">{m.change}</span>
                    </div>
                    <div className="mt-2.5 text-xl font-bold text-slate-100">{m.value}</div>
                    <div className="text-xs text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <p className="text-sm font-medium text-slate-200">Traffic & Engagement</p>
                <div
                  className="relative mt-3 h-28 w-full rounded-xl border border-white/5"
                  style={{ background: "var(--hero-metric-bg)" }}
                >
                  <svg viewBox="0 0 320 100" className="h-full w-full p-3" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="heroVisitors" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <path d="M 0 70 Q 40 62 80 52 T 160 38 T 240 22 T 320 18 L 320 100 L 0 100 Z" fill="url(#heroVisitors)" />
                    <path d="M 0 70 Q 40 62 80 52 T 160 38 T 240 22 T 320 18" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <div className="mt-4 flex gap-5 text-sm text-slate-300">
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" />3 Active Campaigns</span>
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-400" />2 In Review</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-20">
        <Button
          className="rounded-full px-6 py-6 text-white shadow-lg hover:opacity-95"
          style={{ background: "var(--accent)", boxShadow: "0 15px 40px color-mix(in srgb, var(--accent) 45%, transparent)" }}
          asChild
        >
          <a href="#contact">Enquire Now</a>
        </Button>
      </div>
    </section>
  );
}
