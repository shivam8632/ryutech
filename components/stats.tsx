"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 5, suffix: "+", label: "Years experience" },
  { value: 30, suffix: "+", label: "Happy clients" },
];

function StatItem({
  value,
  suffix,
  label,
  index,
}: (typeof STATS)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {value}
        {suffix}
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="grid gap-12 sm:grid-cols-3"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
