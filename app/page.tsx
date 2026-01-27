"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Education from "@/components/education"
import ContactSection from "@/components/contact"
import ParticleBackground from "@/components/particle-background"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"

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
    <div className="dark relative min-h-screen bg-slate-950 text-white noise-bg overflow-x-hidden">
      <CustomCursor />
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <ContactSection />
      </main>
    </div>
  )
}