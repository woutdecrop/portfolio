import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ModeProvider } from "@/components/ModeContext"
import ParticleBackground from "@/components/ParticleBackground"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wout Decrop - Portfolio",
  description: "Marine AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-slate-100`}
        suppressHydrationWarning
      >
        <ModeProvider>
          <ParticleBackground />
          {children}
        </ModeProvider>

        <SpeedInsights />
      </body>
    </html>
  )
}
