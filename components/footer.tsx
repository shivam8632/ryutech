"use client";

import { motion } from "framer-motion";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <motion.a
            href="#"
            className="text-lg font-semibold tracking-tight"
            whileHover={{ opacity: 0.8 }}
          >
            RyuTech
          </motion.a>
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <motion.p
          className="mt-8 text-center text-sm text-muted-foreground md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} RyuTech. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
