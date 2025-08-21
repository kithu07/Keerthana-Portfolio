"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X } from "lucide-react"

const projects = [
  {
    id: 9,
    title: "Finance Settlement Automation for KMRL",
    category: "Data Analytics",
    image: "/kmrl.png?height=600&width=800",
    description: "Developed a PyQt-based desktop application to automate financial settlement by processing AFC logs and daily reports. Streamlined data ingestion, ambiguity resolution, and pattern analysis using Pandas, significantly reducing manual intervention and improving operational efficiency.",
    tags: ["Python", "PyQt", "Pandas", "Data Processing", "Automation"],
    link: "",
    github: ""
  },
  {
    id: 8,
    title: "ONES Platform Revamp (Admin + Student)",
    category: "Web & Desktop App",
    image: "/ONES.png?height=600&width=800",
    description: "Led the revamp of ONES (EdTech Startup) platform, covering both the Admin Dashboard and Student Website. Improved usability, responsiveness, and UI consistency across the system.",
    tags: ["Vue.js", "Next.js", "Tailwind CSS", "REST APIs", "Django", "Postgress", "HTML", "CSS", "GitHub"],
    link: "",
    github: ""
  },
  {
    id: 7,
    title: "Mindathe Irikk",
    category: "Chrome Extension",
    image: "/mindathe-irikk.png?height=600&width=800",
    description: "A sassy Mallu sound guardian for movie nights — this Chrome extension uses the Web Audio API to detect noise levels and respond with sarcastic Kerala-style audio warnings. Built with JavaScript, HTML, and CSS under Web Extensions Manifest V3.",
    tags: ["JavaScript", "HTML", "CSS", "Web Audio API", "Chrome Extensions"],
    link: "https://mindaathe-irikku.vercel.app/",
    github: "https://github.com/kithu07/mindathe-irikK"
  },
  {
    id: 1,
    title: "Arcade App",
    category: "Web App",
    image: "/arcade-room.png?height=600&width=800",
    description: "A dynamic and responsive leaderboard system for arcade games with player and volunteer login, QR-based score submission, and real-time updates — built using Next.js and MongoDB Atlas.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB Atlas", "React", "QR Scanner"],
    link: "https://vibhava-arcade.vercel.app/",
    github: "https://github.com/kithu07/vibhava-arcade"
  },
  {
    id: 2,
    title: "Ninte-Kadha",
    category: "GenAI",
    image: "/nitekadha.png?height=600&width=800",
    description: "A personalized storytelling app that transforms your search history into an aesthetically beautiful narrative using AI-generated insights and a sleek Next.js interface.",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "GeminiAPI"],
    link: "https://ninte-kadha-frontend.vercel.app/",
    github: "https://github.com/kithu07/ninte-kadha-backend"
    
  },
  {
    id: 3,
    title: "Evolution Odyssey",
    category: "Game Development",
    image: "/evod.png?height=600&width=800",
    description: "A 2D platformer game where players evolve through different stages while collecting coins and avoiding obstacles. Designed UI, implemented scoring systems, seamless navigation, and integrated immersive sound effects.",
    tags    : ["Lua", "LOVE2D", "Tiled", "GIT"],
    link: "https://drive.google.com/file/d/1-RgOGPpiP6-XdbJuyUrfocmKvXcQb8Fy/view?usp=sharing",
    github: "https://gitlab.com/helloworld4324028/evolutionodyssey"
  },
  {
    id: 4,
    title: "Premikoo",
    category: "GenAI",
    image: "/premikoo.png?height=600&width=800",
    description: "Premikoo is a fun, interactive Valentine's Day-themed website that lets users generate their Love Resume, predict their romantic future, and test their relationship compatibility through an engaging quiz.",
    tags: ["React", "Tailwind CSS", "Groq"],
    link: "https://lucky-hotteok-464fb7.netlify.app/",
    github: "https://github.com/ThePyWizard/thatcringeproject"
    
  },
  {
    id: 5,
    title: "PixelPerfect",
    category: "Web Development",
    image: "/pixel.png?height=600&width=800",
    description: "An AI-powered UI testing platform featuring A/B testing, color contrast optimization, and real-time metric visualization. Built a dynamic frontend dashboard using Chart.js and integrated Gemini for intelligent UI insights.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js", "Firebase", "Node", "Express", "Gemini"],
    link: "",
    github: "https://github.com/sachin136631/PixelPerfect"
  },
  {
    id: 6,
    title: "RescueChain",
    category: "Web App",
    image: "/rescue.png?height=600&width=800",
    description: "A disaster management platform connecting donors, volunteers, and relief camps with real-time updates, resource tracking, and transparent donation systems. Designed user-friendly interfaces and streamlined volunteer role assignment.",
    tags: ["Python", "HTML5", "CSS3", "Bootstrap", "Firebase", "FastAPI", "JavaScript", "Figma"],
    link: "",
    github: "https://github.com/kithu07/RescueChain"
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleLiveDemoClick = (link: string | undefined) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  const handleGitHubClick = (githubLink: string | undefined) => {
    if (githubLink) {
      window.open(githubLink, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured <span className="text-purple-500">Projects</span>
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
            Explore my latest work showcasing creative design and technical expertise. Click on any project to learn
            more about the process and technologies used.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card
                className="group bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-0 relative overflow-hidden cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                    <Badge className="mb-3 bg-purple-600/80">{project.category}</Badge>
                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs px-2 py-1 rounded bg-gray-800/80 text-gray-300">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded bg-gray-800/80 text-gray-300">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 line-clamp-2">{project.description}</p>
                  </div>

                  <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 border border-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full cursor-pointer"
                onClick={handleCloseModal}
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-purple-600">{selectedProject.category}</Badge>
                <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
              </div>

              <p className="text-gray-300 mb-6">{selectedProject.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-purple-500/50 text-purple-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => handleLiveDemoClick(selectedProject.link)}>
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Button>
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/50" onClick={() => handleGitHubClick(selectedProject.github)}>
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

