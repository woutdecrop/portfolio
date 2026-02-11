import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-950 text-white flex justify-between items-center px-6 py-4 fixed top-0 z-50 shadow-lg border-b border-orange-500/20 hover:shadow-xl transition-shadow">
      <Link href="/" className="text-2xl font-bold hover:text-orange-400 transition-colors duration-200 cursor-pointer">
        Wout
      </Link>

      <div className="flex gap-3">
        <Link href="#projects">
          <Button variant="default" size="sm" className="bg-orange-500/20 border border-orange-500/50 text-orange-400 hover:bg-orange-500/40 transition-colors duration-200 cursor-pointer">
            Home
          </Button>
        </Link>
        <Link href="#about">
          <Button variant="default" size="sm" className="bg-orange-500/20 border border-orange-500/50 text-orange-400 hover:bg-orange-500/40 transition-colors duration-200 cursor-pointer">
            About
          </Button>
        </Link>
        <Link href="#publications">
          <Button variant="default" size="sm" className="bg-orange-500/20 border border-orange-500/50 text-orange-400 hover:bg-orange-500/40 transition-colors duration-200 cursor-pointer">
            Publications
          </Button>
        </Link>
        <Link href="#skills">
          <Button variant="default" size="sm" className="bg-orange-500/20 border border-orange-500/50 text-orange-400 hover:bg-orange-500/40 transition-colors duration-200 cursor-pointer">
            Skills
          </Button>
        </Link>
        <Link href="#contact">
          <Button variant="default" size="sm" className="bg-orange-500/20 border border-orange-500/50 text-orange-400 hover:bg-orange-500/40 transition-colors duration-200 cursor-pointer">
            Contact
          </Button>
        </Link>
      </div>
    </nav>
  )
}
