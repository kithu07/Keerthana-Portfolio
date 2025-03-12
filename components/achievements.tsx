"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react"

const timelineItems = [
  {
    year: "2023",
    title: "Design Excellence Award",
    description: "Recognized for outstanding UI/UX design in the annual Digital Design Awards.",
    icon: <Trophy className="h-6 w-6" />,
    color: "purple",
  },
  {
    year: "2022",
    title: "Senior UI/UX Designer",
    description: "Promoted to lead the design team at TechCorp, overseeing all digital product designs.",
    icon: <Briefcase className="h-6 w-6" />,
    color: "cyan",
  },
  {
    year: "2021",
    title: "Frontend Developer Certification",
    description: "Completed advanced certification in modern frontend development technologies.",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "purple",
  },
  {
    year: "2020",
    title: "Best Portfolio Website",
    description: "Won first place in the Creative Portfolios competition for innovative design.",
    icon: <Award className="h-6 w-6" />,
    color: "cyan",
  },
  {
    year: "2019",
    title: "UI/UX Designer",
    description: "Started career as a UI/UX designer at DigitalCraft, working on various web and mobile projects.",
    icon: <Briefcase className="h-6 w-6" />,
    color: "purple",
  },
]

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-purple-500">Achievements</span> & Milestones
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Key highlights from my professional journey and notable accomplishments.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 transform md:-translate-x-1/2"></div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-black border-2 border-purple-500 transform -translate-x-1/2 z-10"></div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div
                  className={`p-6 rounded-lg border ${
                    item.color === "purple"
                      ? "bg-purple-900/20 border-purple-500/30"
                      : "bg-cyan-900/20 border-cyan-500/30"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-full ${item.color === "purple" ? "bg-purple-900" : "bg-cyan-900"}`}>
                      {item.icon}
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        item.color === "purple" ? "text-purple-400" : "text-cyan-400"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

