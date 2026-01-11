"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Cubes from "@/components/ui/Cubes"
import { getCalApi } from "@calcom/embed-react"

export default function Hero() {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "15min" });
      cal("ui", { "styles": { "branding": { "brandColor": "#EC4899" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* Cubes Background - More visible now */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Cubes
          gridSize={12}
          maxAngle={50}
          radius={4}
          borderStyle="1px solid rgba(236, 72, 153, 0.4)"
          faceColor="#0f172a"
          rippleColor="#ec4899"
          rippleSpeed={1.5}
          autoAnimate={true}
          rippleOnClick={true}
        />
      </div>

      {/* Gradient overlay for readability - adjusted to be lighter */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/80 z-[1] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 pointer-events-auto inline-block" // Confine pointer events to the text block only
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.1] mb-8">
            <span className="block hover:scale-105 transition-transform duration-500 cursor-default">Building Digital</span>
            <span className="block gradient-text hover:scale-105 transition-transform duration-500 cursor-default">Experiences</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed pointer-events-auto"
        >
          crafting interfaces that feel distinct, fluid, and alive.
          <br className="hidden md:block" />
          specializing in next.js, react, and physics-based interactions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-8 pointer-events-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Book a 15 min Call
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/resume"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              Resume
            </Link>
          </div>

          <motion.a
            href="https://github.com/kithu07"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-white/20 transition-all group cursor-pointer text-left w-full max-w-sm"
          >
            <div className="p-3 rounded-xl bg-slate-800 text-white group-hover:bg-slate-700 transition-colors">
              <Github className="h-6 w-6" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-slate-200">GitHub Activity</span>
              </div>

              {/* Simulated Contribution Graph */}
              <div className="flex gap-1 h-2 items-end">
                {[40, 70, 30, 80, 50, 90, 60, 40, 80, 60, 100, 70, 40, 80, 50].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-1.5 rounded-sm bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors"
                  />
                ))}
              </div>
              <span className="text-xs text-slate-500 mt-1 block">Check out my contributions</span>
            </div>
          </motion.a>

          <div className="flex gap-6 mt-4">
            <a href="https://www.linkedin.com/in/keerthana-ds07/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:contact@keerthana.dev" className="text-slate-400 hover:text-blue-500 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
