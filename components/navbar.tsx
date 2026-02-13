"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(262,83%,58%)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-white font-bold text-lg">
              Ryu<span className="text-[hsl(217,91%,60%)]">tech</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)] text-white rounded-full px-6">
              Contact
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 px-3">
              <Button className="w-full bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)] text-white rounded-full">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
