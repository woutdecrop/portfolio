"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Mode = "professional" | "personal"

interface ModeContextType {
  mode: Mode
  toggleMode: () => void
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("professional")

  // Sync with URL hash on mount and hash change
  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash.replace("#", "")
      const searchParams = new URLSearchParams(window.location.search)
      const queryMode = searchParams.get("mode")

      // Add other personal sections if they also trigger personal mode
      if (
        hash === "personal" || hash === "music" || hash === "travel" || hash === "funproject" || hash === "contact" ||
        queryMode === "personal"
      ) {
        setMode("personal")
      } else {
        setMode("professional")
      }
    }

    // Check initial route
    handleRouteChange()

    window.addEventListener("hashchange", handleRouteChange)
    window.addEventListener("popstate", handleRouteChange)
    return () => {
      window.removeEventListener("hashchange", handleRouteChange)
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  const toggleMode = () => {
    const newMode = mode === "professional" ? "personal" : "professional"

    setMode(newMode)

    // Run side effects outside of the React setState callback to avoid Router conflicts
    setTimeout(() => {
      // Update URL (Prefer hash for internal navigation, but clear query if switching back to pro)
      if (newMode === "personal") {
        window.history.pushState(null, "", "#personal")
      } else {
        // Clear hash and query params for professional
        window.history.pushState(null, "", window.location.pathname)
      }

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 0)
  }

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
