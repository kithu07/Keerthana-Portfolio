"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/data"
import Navbar from "@/components/navbar"
import ParticleBackground from "@/components/particle-background"
import CustomCursor from "@/components/custom-cursor"
import { ArrowUpRight } from "lucide-react"

export default function ProjectsPage() {
    return (
        <div className="dark relative min-h-screen bg-slate-950 text-white noise-bg">
            <CustomCursor />
            <ParticleBackground />
            <Navbar />

            <main className="container mx-auto px-4 py-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="gradient-text">All Projects</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A complete collection of my technical works, experiments, and creative endeavors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/projects/${project.id}`} className="group block relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 mx-auto">
                                {/* Image Background */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/20 backdrop-blur-sm">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                            <span className="text-sm font-medium">View Project</span>
                                            <ArrowUpRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    )
}
