import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppWrapper } from "@/components/app-wrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RyuTech | Website & Web App Development",
  description:
    "IT services for website development and web applications. We build fast, scalable, and goal-focused digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('ryutech-color-theme');if(t&&['ocean','emerald','violet','amber','rose'].includes(t))document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
