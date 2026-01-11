"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Code2 } from "lucide-react"
import Navbar from "@/components/navbar"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import GridMotion from "@/components/ui/GridMotion"

export default function ProjectDetails() {
    const { id } = useParams()
    const router = useRouter()
    const [project, setProject] = useState<typeof projects[0] | null>(null)

    useEffect(() => {
        if (id) {
            const foundProject = projects.find((p) => p.id === id)
            if (foundProject) {
                setProject(foundProject)
            } else {
                router.push("/#projects")
            }
        }
    }, [id, router])

    if (!project) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading...</div>

    // Prepare items for GridMotion
    // We'll repeat the project image and some placeholders to fill the grid
    const items = [
        project.image,
        <div key="1" className="w-full h-full flex items-center justify-center bg-pink-500/20 text-pink-300 font-bold text-xl">React</div>,
        project.image,
        <div key="2" className="w-full h-full flex items-center justify-center bg-blue-500/20 text-blue-300 font-bold text-xl">Next.js</div>,
        project.image,
        <div key="3" className="w-full h-full flex items-center justify-center bg-purple-500/20 text-purple-300 font-bold text-xl">GSAP</div>,
        project.image,
        <div key="4" className="w-full h-full flex items-center justify-center bg-cyan-500/20 text-cyan-300 font-bold text-xl">Tailwind</div>,
        project.image,
        <div key="5" className="w-full h-full flex items-center justify-center bg-pink-500/10 text-pink-200 font-bold text-xl">Design</div>,
        project.image,
        <div key="6" className="w-full h-full flex items-center justify-center bg-blue-500/10 text-blue-200 font-bold text-xl">Code</div>,
        project.image,
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-pink-500/30">
            <Navbar />

            {/* Immersive Grid Hero Section */}
            <div className="relative h-[50vh] w-full overflow-hidden">
                <Link
                    href="/#projects"
                    className="absolute top-24 left-8 z-50 p-4 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all group border border-white/10"
                >
                    <ArrowLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
                </Link>

                <div className="absolute inset-0 z-0 opacity-60">
                    <GridMotion items={items} />
                </div>

                {/* Overlay Title */}
                <div className="absolute inset-0 z-10 flex items-end justify-center pb-12 pointer-events-none">
                    <div className="bg-slate-950/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center mb-4">
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-white to-blue-400">
                            {project.title}
                        </h1>
                        <p className="text-slate-300 mt-2 text-lg">{project.category}</p>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 py-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2 space-y-12 bg-slate-950/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        {/* Overview */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
                                Overview
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                {project.detailedDescription || project.description}
                            </p>
                        </section>

                        {/* Key Features */}
                        {project.features && (
                            <section>
                                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                                    Key Features
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-pink-500/30 transition-colors group"
                                        >
                                            <div className="mt-1 p-2 rounded-lg bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform">
                                                <Code2 className="h-5 w-5" />
                                            </div>
                                            <p className="text-slate-300 group-hover:text-white transition-colors">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                    </motion.div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8 mt-1 lg:mt-0">
                        {/* Project Meta Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm sticky top-24"
                        >
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700 hover:border-pink-500/50 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                                    {project.link && (
                                        <Button
                                            className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-xl py-6 font-bold text-lg shadow-lg shadow-pink-900/20"
                                            onClick={() => window.open(project.link, '_blank')}
                                        >
                                            <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                                        </Button>
                                    )}
                                    {project.github && (
                                        <Button
                                            variant="outline"
                                            className="w-full border-slate-700 hover:bg-white/10 text-white rounded-xl py-6 hover:text-white bg-transparent"
                                            onClick={() => window.open(project.github, '_blank')}
                                        >
                                            <Github className="mr-2 h-5 w-5" /> View Source
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
