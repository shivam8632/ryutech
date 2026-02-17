"use client"

export function NoiseOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      <svg className="w-full h-full opacity-[0.025]">
        <filter id="ryutech-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#ryutech-noise)" />
      </svg>
    </div>
  )
}
