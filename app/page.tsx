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
import ScrollReveal from "@/components/ScrollReveal"

export default function Home() {
  const { mode } = useMode()

  return (
    <>
      <Navbar /> {/* Navbar must also be client */}
      {mode === "professional" ? (
        <>
          <HeroSection />
          <ScrollReveal delay={0.2}><AboutSection /></ScrollReveal>
          <ScrollReveal delay={0.2}><Experience /></ScrollReveal>
          <ScrollReveal delay={0.2}><SkillsSection /></ScrollReveal>
          <ScrollReveal delay={0.2}><LanguagesSection /></ScrollReveal>
          <ScrollReveal delay={0.2}><PublicationsSection /></ScrollReveal>
          <ScrollReveal delay={0.2}><ConferencesSection /></ScrollReveal>
          <ScrollReveal delay={0.2}><RepoSection /></ScrollReveal>
          <FooterSection />
        </>
      ) : (
        <>
          <HeroPersonalSection />
          <ScrollReveal delay={0.2}><PersonsalSection /></ScrollReveal>
          <ScrollReveal delay={0.2}><MusicSection /></ScrollReveal>
          <ScrollReveal delay={0.2}><TravelSection /></ScrollReveal>
          <ScrollReveal delay={0.2}><FunProjectSection /></ScrollReveal>
          <ScrollReveal delay={0.2}><ContactSection /></ScrollReveal>
        </>
      )}
    </>
  )
}
