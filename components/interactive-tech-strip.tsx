"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind",
  "Framer Motion",
  "GSAP",
  "REST & GraphQL",
  "Vercel",
  "Docker",
];

export function InteractiveTechStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const pointerIdRef = useRef<number | null>(null);

  const x = useMotionValue(0);
  const constrainedX = useTransform(x, (v) => {
    if (!trackRef.current || !stripRef.current) return 0;
    const max = 0;
    const min = -(trackRef.current.scrollWidth - stripRef.current.offsetWidth);
    return Math.max(min, Math.min(max, v));
  });

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      startX.current = e.clientX;
      scrollLeft.current = x.get();
      pointerIdRef.current = e.pointerId;
      stripRef.current?.setPointerCapture(e.pointerId);
    },
    [x]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - startX.current;
      x.set(scrollLeft.current + dx);
    },
    [isDragging, x]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    scrollLeft.current = x.get();
    if (stripRef.current && pointerIdRef.current !== null) {
      try {
        stripRef.current.releasePointerCapture(pointerIdRef.current);
      } catch {
        // ignore
      }
      pointerIdRef.current = null;
    }
  }, [x]);

  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-muted/30 py-12">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Drag to explore
      </p>
      <motion.div
        ref={stripRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none touch-none"
        style={{ userSelect: "none" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <motion.div
          ref={trackRef}
          className="flex w-max gap-4 px-6"
          style={{ x: constrainedX }}
        >
          {[...TECH, ...TECH].map((name, i) => (
            <motion.span
              key={`${name}-${i}`}
              className="flex shrink-0 rounded-full border border-border/60 bg-background/90 px-5 py-2.5 text-sm font-medium text-foreground/90 shadow-sm"
              whileHover={{ scale: 1.05, borderColor: "var(--border)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
