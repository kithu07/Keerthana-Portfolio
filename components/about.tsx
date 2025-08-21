"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg opacity-75 blur-lg"></div>
            <Card className="relative bg-gray-900 border-0 overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/keerthana.jpeg?height=600&width=600"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Keerthana D S</h3>
                    <p className="text-gray-300">Creative Developer & Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-purple-500">About</span> Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6"></div>
            </div>

            <p className="text-gray-300 text-lg">
            Hi, I’m Keerthana!
             I’m a Computer Science undergraduate at CUSAT and a Google WE’24 Scholar
             (TalentSprint), passionate about building impactful solutions at the crossroads of
              technology and creativity. With hands-on experience in full-stack development, 
              data analytics projects, and emerging technologies like Generative AI, I bring a 
              strong problem-solving mindset and a drive to innovate. Beyond coding, my 
              background in graphic design allows me to blend technical depth with creative flair, 
              making me equally comfortable in engineering solutions and presenting them with clarity.
            </p>

            <p className="text-gray-300 text-lg">
            From building dynamic web experiences to designing visually compelling interfaces, 
            I bring ideas to life with precision and flair. As a leader, developer, and designer, 
            I love tackling challenges, optimizing solutions, and pushing the boundaries of innovation.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              <Badge className="bg-cyan-900/60 hover:bg-cyan-800 text-cyan-200 px-3 py-1">Web Development</Badge>
              <Badge className="bg-purple-900/60 hover:bg-purple-800 text-purple-200 px-3 py-1">GenAI</Badge>
              <Badge className="bg-cyan-900/60 hover:bg-cyan-800 text-cyan-200 px-3 py-1">UI/UX Design</Badge>
              <Badge className="bg-purple-900/60 hover:bg-purple-800 text-purple-200 px-3 py-1">Data Analytics</Badge>
              <Badge className="bg-cyan-900/60 hover:bg-cyan-800 text-cyan-200 px-3 py-1">Graphic Design</Badge>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

