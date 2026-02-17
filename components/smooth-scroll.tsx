"use client"

import { useEffect, type ReactNode } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: InstanceType<typeof import("lenis").default> | null = null
    let raf: number

    async function init() {
      try {
        const Lenis = (await import("lenis")).default
        lenis = new Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 1.5,
        })

        function onFrame(time: number) {
          lenis?.raf(time)
          raf = requestAnimationFrame(onFrame)
        }
        raf = requestAnimationFrame(onFrame)
      } catch {
        // Graceful fallback if lenis isn't available
      }
    }

    init()

    return () => {
      cancelAnimationFrame(raf)
      lenis?.destroy()
    }
  }, [])

  return <>{children}</>
}
