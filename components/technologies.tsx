"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind",
  "Framer Motion",
  "REST & GraphQL",
];

export function Technologies() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative border-y border-border/50 bg-muted/30 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Technologies we use
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 md:gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06 },
            },
          }}
        >
          {TECH.map((name, i) => (
            <motion.span
              key={name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium text-foreground/90 shadow-sm backdrop-blur-sm"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
