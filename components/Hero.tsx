"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"
import profilePhoto from "@/assets/profile-photo..jpg"
import { useMode } from "@/components/ModeContext"


const HeroSection = () => {
  const { mode } = useMode()
  const isPersonal = mode === "personal"

  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center px-6 py-20 relative transition-colors duration-500 ${
        isPersonal ? "bg-neutral-950" : "bg-black"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src={profilePhoto}
            alt="Wout Decrop"
            width={160}
            height={160}
            className={`rounded-full mx-auto shadow-2xl transition-all duration-500 ${
              isPersonal
                ? "border-2 border-blue-400"
                : "border-2 border-orange-500"
            }`}
          />
        </div>

        {/* Subtitle */}
        <p
          className={`font-semibold tracking-widest uppercase text-sm mb-6 transition-colors duration-500 ${
            isPersonal ? "text-blue-100" : "text-orange-500"
          }`}
        >
          {isPersonal ? "Curious about the ocean 🌊" : "Marine AI Engineer"}
        </p>

        {/* Name */}
        <h1 className="text-7xl font-bold text-white mb-2">
          Wout
        </h1>

        <h2
          className={`text-7xl font-bold bg-clip-text text-transparent mb-8 transition-all duration-500 ${
            isPersonal
              ? "bg-gradient-to-r from-blue-400 to-pink-400"
              : "bg-gradient-to-r from-orange-500 to-orange-400"
          }`}
        >
          Decrop
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto transition-all duration-500">
          {isPersonal
            ? "Training models for the North Sea while travelling the world."
            : "Building AI models for plankton & vessel detection. Python, ML, & environmental research at VLIZ."}
        </p>

        {/* Optional subtle scroll cue */}
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-gray-500" size={24} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
