import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Custom Software", href: "/services#custom-software" },
    { label: "UI/UX Design", href: "/services#ui-ux-design" },
    { label: "Automation", href: "/services#automation" },
  ],
  Company: [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Connect: [
    { label: "Twitter", href: "#", external: true },
    { label: "LinkedIn", href: "#", external: true },
    { label: "GitHub", href: "#", external: true },
    { label: "Dribbble", href: "#", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 py-16 lg:py-20">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="text-white font-semibold text-xl tracking-tight inline-block mb-4"
            >
              ryu<span className="text-primary">tech</span>
            </Link>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs mb-6">
              Precision digital engineering for ambitious businesses. We build
              software that scales, not just ships.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Start a conversation
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-medium text-white/50 uppercase tracking-widest mb-5">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 text-sm text-white/30 hover:text-white/70 transition-colors duration-300"
                        >
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-white/30 hover:text-white/70 transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Ryutech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-white/20 hover:text-white/40 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/20 hover:text-white/40 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
