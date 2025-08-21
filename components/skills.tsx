"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette, Layers, Database, Globe } from "lucide-react"

const skills = [
  {
    category: "Frontend Development",
    icon: <Code className="h-8 w-8 text-purple-400" />,
    items: [
      { name: "HTML", level: 95 },
      { name: "React", level: 75 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 70 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Javascript", level: 90 },
    ],
  },
  {
    category: "Design",
    icon: <Palette className="h-8 w-8 text-cyan-400" />,
    items: [
      { name: "UI/UX Design", level: 80 },
      { name: "Figma", level: 85 },
      { name: "Photoshop", level: 95 },
      { name: "Canva", level: 95},
    ],
  },
  {
    category: "Languages & Databases",
    icon: <Database className="h-8 w-8 text-purple-400" />,
    items: [
      { name: "Node.js", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "C++", level: 95 },
      { name: "Java", level: 90},
      { name: "C", level: 90 },
      { name: "Python", level: 95 },
    ],
  },
  {
    category: "Soft Skills",
    icon: <Layers className="h-8 w-8 text-cyan-400" />,
    items: [
        { "name": "Leadership", "level": 100 },
        { "name": "Effective Communication", "level": 95 },
        { "name": "Team Collaboration", "level": 100 },
        { "name": "Event Planning and Management", "level": 95 },
        { "name": "Strong Commitment", "level": 100 },
    ],
  },
]

export default function Skills() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="text-purple-500">Skills</span>
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
            A comprehensive overview of my technical skills and expertise across various domains.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={itemVariants}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gray-800/80">{skillGroup.icon}</div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>

              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          groupIndex % 2 === 0
                            ? "bg-gradient-to-r from-purple-600 to-purple-400"
                            : "bg-gradient-to-r from-cyan-600 to-cyan-400"
                        }`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-lg border border-purple-500/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 p-4 rounded-full bg-purple-900/50">
              <Globe className="h-10 w-10 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Always Learning</h3>
              <p className="text-gray-300">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. Currently diving into backend development, exploring databases, APIs, and server-side architectures to build robust and scalable applications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

