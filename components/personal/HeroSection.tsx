"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"
import profilePhoto from "@/assets/profile-photo..jpg"


const HeroPersonanlSection = () => {

  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center px-6 py-20 relative transition-colors duration-500 ${
 "bg-neutral-950" 
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src={profilePhoto}
            alt="Wout Decrop"
            width={160}
            height={160}
            className={`rounded-full mx-auto shadow-2xl transition-all duration-500 ${"border-2 border-blue-400"
            }`}
          />
        </div>

        {/* Subtitle */}
        <p
          className={`font-semibold tracking-widest uppercase text-sm mb-6 transition-colors duration-500 ${
            "text-blue-100" 
          }`}
        >
          {"Curious about the ocean 🌊" }
        </p>

        {/* Name */}
        <h1 className="text-7xl font-bold text-white mb-2">
          Wout
        </h1>

        <h2
          className={`text-7xl font-bold bg-clip-text text-transparent mb-8 transition-all duration-500 ${
 "bg-gradient-to-r from-blue-400 to-pink-400"
          }`}
        >
          Decrop
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto transition-all duration-500">
          {"Training models for the North Sea while travelling the world."}
        </p>

        {/* Optional subtle scroll cue */}
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-gray-500" size={24} />
        </div>
      </div>
    </section>
  )
}

export default HeroPersonanlSection
