"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Sparkles, Award, Code2, Rocket } from "lucide-react"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const highlights = [
    { icon: <Award className="h-5 w-5" />, text: "Google WE'24 Scholar" },
    { icon: <Code2 className="h-5 w-5" />, text: "Full-Stack Developer" },
    { icon: <Rocket className="h-5 w-5" />, text: "15+ Projects Delivered" },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-pink-500" />
              <span className="text-sm font-medium tracking-wider text-pink-400 uppercase">
                About Me
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-pink-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Turning Ideas Into Reality</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Image Column - Smaller */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative card-premium rounded-2xl overflow-hidden">
                  <Image
                    src="/keerthana.jpeg?height=400&width=400"
                    alt="Keerthana D S"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Keerthana D S</h3>
                      <p className="text-pink-400 font-medium">Developer & Designer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 glass rounded-xl border border-white/5 hover:border-pink-500/30 transition-all duration-300 text-center"
                  >
                    <div className="p-3 mb-3 rounded-full bg-pink-500/10 text-pink-400">
                      {item.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-200">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Content Column */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <div className="glass p-8 rounded-2xl">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  I am a passionate <span className="text-white font-semibold">Full Stack Developer</span> from India, currently pursuing my Computer Science degree at CUSAT.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I specialize in building high-performance web applications using <span className="text-blue-400">React, Next.js, and Node.js</span>.
                  My work sits at the intersection of engineering and design, ensuring that every pixel serves a purpose.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass p-6 rounded-xl border-l-4 border-pink-500">
                  <h4 className="font-bold text-white mb-2">Problem Solver</h4>
                  <p className="text-sm text-slate-400">Turning complex requirements into elegant, scalable code.</p>
                </div>
                <div className="glass p-6 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-white mb-2">Creative Thinker</h4>
                  <p className="text-sm text-slate-400">Designing interfaces that feel intuitive and engaging.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
