"use client";

import { Button } from "@/components/ui/button"
import Link from "next/link"
import ModeSwitch from "@/components/ModeSwitch"
import { useMode } from "@/components/ModeContext"

export default function Navbar() {
  const { mode } = useMode();
  const isPersonal = mode === "personal";

  const navLinks = isPersonal
    ? [
        { label: "About Me", href: "#about" },
        { label: "Music", href: "#music" },
        { label: "Travel", href: "#travel" },
        { label: "Contact", href: "#contact" }
      ]
    : [
        { label: "About", href: "#about" },
        { label: "Experience & Education", href: "#experience" },
        { label: "Expertise", href: "#skills" },
        { label: "Research", href: "#publications" },
        { label: "Contact", href: "#contact" }
      ];

  // Colors based on mode
  const borderColor = isPersonal ? "border-blue-500/50" : "border-orange-500/50";
  const textColor = isPersonal ? "text-white-400" : "text-orange-400";
  const bgColor = isPersonal ? "bg-blue-500/20" : "bg-orange-500/20";
  const hoverBg = isPersonal ? "hover:bg-blue-500/40" : "hover:bg-orange-500/40";

  return (
    <nav className="w-full bg-gray-950 text-white flex justify-between items-center px-6 py-4 fixed top-0 z-50 shadow-lg border-b border-orange-500/20 hover:shadow-xl transition-shadow">
      {/* Left */}
      <div className="flex items-center gap-3">
        <Link href="/" className="text-2xl font-bold hover:text-orange-400 transition-colors duration-200 cursor-pointer">
          Wout
        </Link>
        <ModeSwitch />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <Button
              variant="default"
              size="sm"
              className={`${bgColor} ${borderColor} ${textColor} ${hoverBg} transition-colors duration-200 cursor-pointer`}
            >
              {link.label}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
