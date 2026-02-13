"use client"

import { useEffect, useState } from "react"

export function HeroParallaxGlows() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const speed = 0.2
  const topOffset = scrollY * speed * 0.5
  const bottomOffset = scrollY * speed * -0.3

  return (
    <>
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[hsl(217,91%,60%)]/10 rounded-full blur-3xl transition-transform duration-100"
        style={{ transform: `translate(${topOffset * 0.3}px, ${topOffset}px)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-[hsl(262,83%,58%)]/10 rounded-full blur-3xl transition-transform duration-100"
        style={{ transform: `translate(${bottomOffset * -0.2}px, ${bottomOffset}px)` }}
      />
    </>
  )
}
