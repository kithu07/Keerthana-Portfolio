"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/data"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Top 4 specific projects requested by user
  // kmrl, adsage, nintekadha, evolution odyssey
  const topProjectsIds = ["finance-settlement-automation", "adsage", "ninte-kadha", "evolution-odyssey"];

  const displayedProjects = topProjectsIds
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean) as typeof projects;


  useEffect(() => {
    if (typeof window === "undefined") return

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches
    if (!isDesktop) return

    const section = sectionRef.current
    const container = cardsContainerRef.current
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[]

    if (!section || !container || cards.length === 0) return

    const totalCards = cards.length

    // Stack configuration - clean diagonal stacking
    // Cards stack going UP-LEFT (new cards land ON TOP in front)
    const stackOffsetY = -30  // Negative = each new card goes UP
    const stackOffsetX = -20  // Negative = each new card goes LEFT
    const stackScale = 0.015  // Slight scale reduction for depth

    // INITIAL STATE: Only first card visible, rest off-screen below
    cards.forEach((card, i) => {
      if (i === 0) {
        // First card at back of visual stack (will be covered by new cards)
        gsap.set(card, {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          zIndex: 1, // Lowest z-index (at back)
          transformOrigin: "center center",
        })
      } else {
        // Other cards start off-screen below, waiting to fly in ON TOP
        gsap.set(card, {
          y: 400,
          x: 80,
          scale: 0.9,
          opacity: 0,
          zIndex: i + 1, // Higher index = in front
          transformOrigin: "center center",
        })
      }
    })

    // Create smooth scroll-driven animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5, // Smooth, but no pinning
      },
    })

    // Animate each card to fly in and stack ON TOP (in front)
    cards.forEach((card, i) => {
      if (i === 0) return // First card stays as base

      // New cards land ON TOP, going up-left from the first card
      const finalY = i * stackOffsetY  // Goes up
      const finalX = i * stackOffsetX  // Goes left
      const finalScale = 1 - i * stackScale

      // Animate this card into its stacked position (in front)
      tl.to(
        card,
        {
          y: finalY,
          x: finalX,
          scale: finalScale,
          opacity: 1,
          duration: 1,
          ease: "none",
        },
        (i - 1) * 1
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [displayedProjects]) // Add dependency

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Side */}
          <div className="text-left">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="gradient-text">Featured Work</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-400 max-w-xl text-xl leading-relaxed mb-8"
            >
              A selection of my recent works.
            </motion.p>

            <Link href="/projects">
              <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-105">
                <span className="font-semibold">View Complete Gallery</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <div className="flex gap-4 mt-8">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-pink-500 animate-pulse"></span>
                <span className="text-sm text-pink-400">Scroll Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-75"></span>
                <span className="text-sm text-blue-400">Interactive Stack</span>
              </div>
            </div>
          </div>

          {/* Card Stack Side */}
          <div
            ref={cardsContainerRef}
            className="relative h-[550px] w-full flex items-center justify-center"
            style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
          >
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el }}
                className="absolute w-full max-w-md h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer group bg-slate-900"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link href={`/projects/${project.id}`} className="block h-full w-full relative">
                  {/* Image Background */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/20 backdrop-blur-sm">
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        <span className="text-sm font-medium">View Project</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}