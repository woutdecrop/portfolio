"use client"

import { useMode } from "@/components/ModeContext"
import { Button } from "@/components/ui/button"

export default function ModeSwitch() {
  const { mode, toggleMode } = useMode()

  return (
    <Button
      variant="ghost"
      onClick={toggleMode}
      className="text-sm font-medium"
    >
      {mode === "professional" ? "Click for Personal mode 🌊" : "Click for Professional mode 🧪"}
    </Button>
  )
}
