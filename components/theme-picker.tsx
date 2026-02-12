"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { motion, AnimatePresence } from "framer-motion";

import type { ColorTheme } from "@/components/theme-provider";

const THEME_OPTIONS: { id: ColorTheme; label: string; color: string }[] = [
  { id: "ocean", label: "Ocean", color: "#4a88ff" },
  { id: "emerald", label: "Emerald", color: "#10b981" },
  { id: "violet", label: "Violet", color: "#8b5cf6" },
  { id: "amber", label: "Amber", color: "#f59e0b" },
  { id: "rose", label: "Rose", color: "#f43f5e" },
];

export function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card ring-offset-background transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2"
        aria-label="Change color theme"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span
          className="h-4 w-4 rounded-full shadow-sm ring-2 ring-white/50 ring-offset-2 ring-offset-background"
          style={{
            background: THEME_OPTIONS.find((t) => t.id === theme)?.color ?? "#4a88ff",
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-border bg-card py-2 shadow-lg"
          >
            <p className="px-3 py-1.5 text-xs font-medium text-muted-foreground">
              Color theme
            </p>
            <div className="grid grid-cols-5 gap-2 px-3 pt-1">
              {THEME_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setTheme(opt.id);
                    setOpen(false);
                  }}
                  className="flex flex-col items-center gap-1 rounded-lg py-2 transition hover:bg-muted"
                  title={opt.label}
                >
                  <span
                    className={`h-8 w-8 rounded-full ring-2 transition ${
                      theme === opt.id
                        ? "ring-foreground/40 ring-offset-2 ring-offset-background"
                        : "ring-transparent"
                    }`}
                    style={{ background: opt.color }}
                  />
                  <span className="text-[11px] font-medium text-foreground">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
