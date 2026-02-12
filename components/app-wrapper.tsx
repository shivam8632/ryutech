"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <ScrollProgress />
        {children}
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
