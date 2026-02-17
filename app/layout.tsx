import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { NoiseOverlay } from "@/components/noise-overlay"
import { SmoothScroll } from "@/components/smooth-scroll"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Ryutech — Precision Digital Engineering",
    template: "%s — Ryutech",
  },
  description:
    "We engineer digital products with surgical precision. Web development, custom software, UI/UX design, and automation solutions for ambitious businesses.",
  keywords: [
    "web development",
    "custom software",
    "UI/UX design",
    "automation",
    "digital agency",
    "software engineering",
  ],
  openGraph: {
    title: "Ryutech — Precision Digital Engineering",
    description:
      "We engineer digital products with surgical precision. Software solutions for ambitious businesses.",
    type: "website",
    siteName: "Ryutech",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        <SmoothScroll>
          <CustomCursor />
          <NoiseOverlay />
          <Navbar />
          <main className="min-h-screen bg-background">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
