"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(value)
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent pointer-events-none"
      aria-hidden
    >
      <div
        className="h-full bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(262,83%,58%)] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
