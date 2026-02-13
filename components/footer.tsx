import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

const footerLinks = {
  "Company": ["About Us", "Careers", "Blog", "Contact"],
  "Services": ["Web Development", "Mobile Apps", "Cloud Solutions", "IT Consulting"],
  "Products": ["VisCRM", "Work Hour Monitor", "Dialer Online"],
  "Legal": ["Privacy Policy", "Terms of Service", "Cookie Policy"],
}

const technologies = [
  "React", "Next.js", "Node.js", "Python", "AWS", "TypeScript",
  "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "GraphQL", "Redis",
]

export function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(262,83%,58%)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-white font-bold text-lg">
                Ryu<span className="text-[hsl(217,91%,60%)]">tech</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We craft innovative digital solutions to drive business growth and transform ideas into reality.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            {Object.entries(footerLinks).slice(0, 2).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[hsl(217,91%,60%)]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[hsl(217,91%,60%)]" />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium mb-0.5">Address</h5>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Suite 4-B, Mughalpura,<br />
                    Lahore, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[hsl(217,91%,60%)]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[hsl(217,91%,60%)]" />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium mb-0.5">Phone</h5>
                  <p className="text-gray-400 text-xs">+92 300 1234 567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[hsl(217,91%,60%)]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[hsl(217,91%,60%)]" />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium mb-0.5">Email</h5>
                  <p className="text-gray-400 text-xs">info@variablesoft.com</p>
                </div>
              </div>
              <Button className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)] text-white rounded-full px-6 mt-2 w-fit">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-8 border-b border-white/10">
          <h4 className="text-center text-gray-500 text-sm mb-4 font-serif italic">Technologies We Love</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 hover:border-[hsl(217,91%,60%)]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; 2024 Ryutech. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Designed and developed by{" "}
            <span className="text-[hsl(217,91%,60%)]">VARIABLE INFOTECH INDIA PRIVATE LIMITED</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
