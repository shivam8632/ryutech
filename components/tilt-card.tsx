"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const DEFAULT_MAX_TILT = 12;

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export function TiltCard({
  children,
  className = "",
  maxTilt = DEFAULT_MAX_TILT,
  scale = 1.02,
  ...props
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 400, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);
  const scaleSpring = useSpring(1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const posX = (e.clientX - centerX) / (rect.width / 2);
    const posY = (e.clientY - centerY) / (rect.height / 2);
    x.set(Math.max(-1, Math.min(1, posX)));
    y.set(Math.max(-1, Math.min(1, posY)));
    scaleSpring.set(scale);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scaleSpring.set(1);
  };

  return (
    <div className={className} style={{ perspective: "1000px" }} {...props}>
      <motion.div
        ref={ref}
        className="h-full w-full"
        style={{
          rotateX,
          rotateY,
          scale: scaleSpring,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </motion.div>
    </div>
  );
}
