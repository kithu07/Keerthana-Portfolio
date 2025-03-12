"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import ParticleBackground from "@/components/particle-background"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="dark relative min-h-screen overflow-hidden bg-black text-white">
      <CustomCursor />
      <ParticleBackground />

      <main className="relative z-10">
        <Hero />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollY > 100 ? 0 : 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-purple-300 mb-2">Scroll to explore</span>
          <ChevronDown className="animate-bounce text-purple-400" />
        </motion.div>

        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}

