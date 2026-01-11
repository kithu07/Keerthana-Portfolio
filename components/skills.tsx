"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Palette, Database, Terminal } from "lucide-react"

const skillCategories = [
  {
    category: "Languages",
    icon: <Code2 className="h-6 w-6" />,
    // Using manual classes to ensure JIT picks them up
    bgClass: "bg-pink-500/10",
    textClass: "text-pink-400",
    borderClass: "border-pink-500/30",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "Java", "HTML5", "CSS3", "SQL", "Lua"],
  },
  {
    category: "Frameworks & Libraries",
    icon: <Terminal className="h-6 w-6" />,
    bgClass: "bg-blue-500/10",
    textClass: "text-blue-400",
    borderClass: "border-blue-500/30",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Node.js", "Express.js", "FastAPI", "Pandas", "PyQt"],
  },
  {
    category: "Tools & Platforms",
    icon: <Database className="h-6 w-6" />,
    bgClass: "bg-purple-500/10",
    textClass: "text-purple-400",
    borderClass: "border-purple-500/30",
    skills: ["Git", "GitHub", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "Vercel", "Figma", "Photoshop"],
  },
  {
    category: "Specialized",
    icon: <Palette className="h-6 w-6" />,
    bgClass: "bg-cyan-500/10",
    textClass: "text-cyan-400",
    borderClass: "border-cyan-500/30",
    skills: ["Data Analytics", "GenAI Integration", "Gemini API", "Web Audio API", "Chrome Extensions", "Game Dev (LÖVE2D)"],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Technical Arsenal</span>
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-white/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${category.bgClass} ${category.textClass}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
