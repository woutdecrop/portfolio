"use client"

import { useMode } from "@/components/ModeContext"

export default function StravaSection() {
  const { mode } = useMode()
  if (mode !== "personal") return null

  // Example embed: https://www.strava.com/athletes/123456/embed
  return (
    <section id="strava" className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-8">My Strava Records 🏃‍♂️🚴</h2>
      <div className="max-w-4xl mx-auto">
        <iframe
          src="https://www.strava.com/activities/embed/ACTIVITY_ID"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}
