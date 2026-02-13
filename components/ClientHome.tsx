"use client";

import Navbar from "@/components/Navbar"
import { useMode } from "@/components/ModeContext"
import HeroSection from "@/components/Hero"
import AboutSection from "@/components/about"
// ... other sections

export default function ClientHome() {
  const { mode } = useMode();

  return (
    <>
      <Navbar />
      {mode === "professional" ? (
        <>
          <HeroSection />
          <AboutSection />
          {/* ...professional sections */}
        </>
      ) : (
        <>
          <HeroSection isPersonal />
          <AboutSection isPersonal />
          {/* ...personal sections */}
        </>
      )}
    </>
  )
}
