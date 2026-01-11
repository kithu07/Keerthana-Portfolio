"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
    {
        role: "Lead",
        org: "TinkerHub CUSAT",
        period: "2025 - Present",
        description: "Leading the student community to foster technical skills and innovation through workshops and hackathons.",
        color: "pink",
    },
    {
        role: "Vice Chairperson",
        org: "ACES, CUSAT",
        period: "2023 - Present",
        description: "Organizing academic and cultural events for the Computer Science department, bridging the gap between students and industry.",
        color: "blue",
    },
    {
        role: "Media Team Member",
        org: "Team Horizon",
        period: "2023 - 2025",
        description: "Managed branding and media presence for the university's mars rover team, achieving global recognition.",
        color: "purple", // Purple acts as a bridge between pink and blue
    }
]

export default function Experience() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Professional <span className="gradient-text">Experience</span>
                    </motion.h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mx-auto" />
                </div>

                <div ref={ref} className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg text-blue-400 font-medium">{exp.org}</p>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-slate-300 text-sm whitespace-nowrap">
                                        <Calendar className="h-4 w-4" />
                                        {exp.period}
                                    </div>
                                </div>
                                <p className="text-slate-400 leading-relaxed max-w-2xl">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
