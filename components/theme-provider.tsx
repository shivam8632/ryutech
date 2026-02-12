"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "ryutech-color-theme";

export type ColorTheme = "ocean" | "emerald" | "violet" | "amber" | "rose";

const THEMES: ColorTheme[] = ["ocean", "emerald", "violet", "amber", "rose"];

type ThemeContextValue = {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
  themes: ColorTheme[];
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getStoredTheme(): ColorTheme {
  if (typeof window === "undefined") return "ocean";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && THEMES.includes(stored as ColorTheme)) return stored as ColorTheme;
  return "ocean";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ColorTheme>("ocean");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(getStoredTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  const setTheme = useCallback((next: ColorTheme) => {
    setThemeState(next);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, themes: THEMES }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export { THEMES };
