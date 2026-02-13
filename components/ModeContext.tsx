"use client"
import { createContext, useContext, useState, ReactNode } from "react"

type Mode = "professional" | "personal"

interface ModeContextType {
  mode: Mode
  toggleMode: () => void
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("professional")

  const toggleMode = () =>
    setMode((prev) => (prev === "professional" ? "personal" : "professional"))

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export const useMode = () => {
  const context = useContext(ModeContext)
  if (!context) throw new Error("useMode must be used within a ModeProvider")
  return context
}
