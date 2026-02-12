"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const STEPS = [
  { num: "01", title: "Discovery & strategy", desc: "We define goals, scope, and a clear roadmap." },
  { num: "02", title: "Design & build", desc: "Iterative development with regular check-ins." },
  { num: "03", title: "Launch & support", desc: "Deploy, monitor, and evolve with you." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 1]);

  return (
    <section id="process" ref={ref} className="relative py-24 md:py-32 bg-muted/15 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div className="mb-20 text-center" style={{ opacity }}>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            How we work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            From brief to launch
          </h2>
        </motion.div>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="text-5xl font-light text-muted-foreground/50">
                {step.num}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="absolute -right-4 top-12 hidden h-px w-8 bg-border md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
