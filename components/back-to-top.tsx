"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 500)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!show) return null

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)] text-white shadow-lg transition-all duration-300 hover:scale-110 focus:scale-110"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  )
}
