"use client"; // must be at the top

import { useMode } from "@/components/ModeContext"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/Hero"
import AboutSection from "@/components/about"
import { Experience } from "@/components/Experience"
import SkillsSection from "@/components/Skills"
import LanguagesSection from "@/components/Languages"
import PublicationsSection from "@/components/Publications"
import ConferencesSection from "@/components/Conferences"
import RepoSection from "@/components/Repos"
import FooterSection from "@/components/Footer"

// personal sections
import MusicSection from "@/components/personal/MusicSection"
import TravelSection from "@/components/personal/TravelSection"
import StravaSection from "@/components/personal/StravaSection"
import PersonsalSection from "@/components/personal/PersonalSection"
import ContactSection from "@/components/personal/ContactSection"
import FunProjectSection from "@/components/personal/ProjectsSection";
import HeroPersonalSection from "@/components/personal/HeroSection"
export default function Home() {
  const { mode } = useMode()

  return (
    <>
      <Navbar /> {/* Navbar must also be client */}
      {mode === "professional" ? (
        <>
          <HeroSection />
          <AboutSection />
          <Experience />
          <SkillsSection />
          <LanguagesSection />
          <PublicationsSection />
          <ConferencesSection />
          <RepoSection />
          <FooterSection />
        </>
      ) : (
        <>
          <HeroPersonalSection />
          <PersonsalSection />
          <MusicSection />
          <TravelSection />
          <FunProjectSection />
          <ContactSection />
        </>
      )}
    </>
  )
}
