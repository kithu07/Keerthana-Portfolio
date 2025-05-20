"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const textElement = textRef.current
    const text = textElement.innerText
    textElement.innerText = ""

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        textElement.innerText += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    setTimeout(() => {
      typeWriter()
    }, 1000)
  }, [])

  const handleViewWorkClick = () => {
    window.open("https://github.com/kithu07", "_blank"); 
  };

  const handleViewResumeClick = () => {
    window.open("https://drive.google.com/file/d/1g7VG5W0NYh_6STXzfsIzcnJqEevgkgMf/view?usp=drive_link", "_blank"); 
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <Navbar />

      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-block px-3 py-1 text-sm bg-purple-900/50 text-purple-300 rounded-full border border-purple-700">
            Designer & Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.3] pb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-500"

        >
          <span ref={textRef}>Building, Leading, Creating</span>
          <span className="animate-blink">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
        >
          I craft visually stunning digital experiences that blend creativity with technical excellence. Specializing in
          modern web design and development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6" onClick={handleViewWorkClick}>
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/50 px-6 py-6" onClick={handleViewResumeClick}>
            View Resume <Download className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

