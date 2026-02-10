'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/Navbar"
import { Experience } from "@/components/Experience"
import PublicationsSection from "@/components/Publications"
import AboutSection from "@/components/about"
import SkillsSection from "@/components/Skills"
import FooterSection from "@/components/Footer"
import Contact from "@/components/Contact"
import HeroSection from "@/components/Hero"
 // <- import Navbar

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      {/* About section */}
      <AboutSection />

      {/* Experience section */}
      <Experience />

      {/* Publications section */}
      <PublicationsSection />

      {/* Skills section */}
      <SkillsSection />

      {/* Footer section */}
      <FooterSection />
      {/* Contact section */}
      <Contact />
    </>
  )
}

