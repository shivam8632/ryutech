"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { usePathname } from "next/navigation"

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<InstanceType<typeof import("lenis").default> | null>(
    null,
  )
  const rafRef = useRef<number>(0)
  const pathname = usePathname()

  useEffect(() => {
    async function init() {
      try {
        const Lenis = (await import("lenis")).default
        const instance = new Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 1.5,
        })
        lenisRef.current = instance

        function onFrame(time: number) {
          instance.raf(time)
          rafRef.current = requestAnimationFrame(onFrame)
        }
        rafRef.current = requestAnimationFrame(onFrame)
      } catch {
        /* lenis unavailable — native scroll is fine */
      }
    }

    init()

    return () => {
      cancelAnimationFrame(rafRef.current)
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [])

  /* scroll to top on every route change */
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return <>{children}</>
}
