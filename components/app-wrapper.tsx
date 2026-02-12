"use client";

import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      {children}
    </SmoothScrollProvider>
  );
}
