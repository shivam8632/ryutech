"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const STEPS = [
  {
    title: "From idea",
    subtitle: "to strategy",
    description: "We align your vision with a clear technical roadmap.",
  },
  {
    title: "From design",
    subtitle: "to code",
    description: "Pixel-perfect interfaces and scalable architecture.",
  },
  {
    title: "From launch",
    subtitle: "to scale",
    description: "Performance, security, and growth built in.",
  },
];

export function ScrollPinSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[var(--section-bg)]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/section-bg.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" aria-hidden />
        </div>
        {/* Decorative vector */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden text-muted-foreground/[0.07]">
          <Image
            src="/vectors/scroll-deco.svg"
            alt=""
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl items-center justify-center px-6">
          {STEPS.map((step, i) => (
            <StepBlock
              key={i}
              step={step}
              index={i}
              totalSteps={STEPS.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
        <ScrollHint />
      </div>
    </section>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

/** Ensures input range is strictly increasing (no duplicates) for useTransform. */
function ensureIncreasing(
  inputs: number[],
  outputs: number[]
): { inputs: number[]; outputs: number[] } {
  const resultI: number[] = [];
  const resultO: number[] = [];
  for (let i = 0; i < inputs.length; i++) {
    if (i === 0 || inputs[i] > resultI[resultI.length - 1]) {
      resultI.push(inputs[i]);
      resultO.push(outputs[i]);
    }
  }
  return { inputs: resultI, outputs: resultO };
}

function StepBlock({
  step,
  index,
  totalSteps,
  scrollYProgress,
}: {
  step: (typeof STEPS)[0];
  index: number;
  totalSteps: number;
  scrollYProgress: MotionValue<number>;
}) {
  const stepStart = index / totalSteps;
  const stepEnd = (index + 1) / totalSteps;
  const stepMid = (stepStart + stepEnd) / 2;

  // Input ranges must be in [0, 1] and strictly increasing for Web Animations API
  const { inputs: opacityInput, outputs: opacityOutput } = ensureIncreasing(
    [
      clamp(stepStart - 0.15, 0, 1),
      stepStart,
      stepMid,
      stepEnd,
      clamp(stepEnd + 0.15, 0, 1),
    ],
    [0, 0.3, 1, 0.3, 0]
  );
  const opacity = useTransform(scrollYProgress, opacityInput, opacityOutput);

  const y = useTransform(
    scrollYProgress,
    [stepStart, stepMid, stepEnd],
    [80, 0, -80]
  );

  const { inputs: scaleInput, outputs: scaleOutput } = ensureIncreasing(
    [
      clamp(stepStart - 0.1, 0, 1),
      stepStart,
      stepMid,
      stepEnd,
      clamp(stepEnd + 0.1, 0, 1),
    ],
    [0.92, 0.96, 1, 0.96, 0.92]
  );
  const scale = useTransform(scrollYProgress, scaleInput, scaleOutput);

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center text-center"
      style={{ opacity, y, scale }}
    >
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Step {index + 1}
      </p>
      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        {step.title}
        <br />
        <span className="text-foreground/70">{step.subtitle}</span>
      </h2>
      <p className="mt-6 max-w-md text-lg text-muted-foreground">
        {step.description}
      </p>
    </motion.div>
  );
}

function ScrollHint() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <span className="text-xs uppercase tracking-widest">Scroll</span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="block h-8 w-5 rounded-full border-2 border-current"
      />
    </motion.div>
  );
}
