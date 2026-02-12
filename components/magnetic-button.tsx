"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const DEFAULT_STENGTH = 0.4;
const DEFAULT_RADIUS = 120;

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
};

export function MagneticButton({
  children,
  className = "",
  strength = DEFAULT_STENGTH,
  radius = DEFAULT_RADIUS,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < radius) {
      const pullX = distanceX * strength * (1 - distance / radius);
      const pullY = distanceY * strength * (1 - distance / radius);
      x.set(pullX);
      y.set(pullY);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const handleMouseEnter = () => setHovered(true);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
