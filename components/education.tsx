"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar, ExternalLink } from "lucide-react"

export default function Education() {
    return (
        <section id="education" className="py-32 relative bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            Education
                        </h2>
                        <div className="h-1 w-20 bg-blue-500 rounded-full" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-slate-400 max-w-md text-right hidden md:block"
                    >
                        Building a strong foundation in computer science and engineering principles.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 group"
                >
                    <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors duration-500" />

                    <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-10">
                        {/* Left Column: Logo/Emblem */}
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                <GraduationCap className="w-10 h-10" />
                            </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="flex-grow space-y-8">
                            <div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                    <h3 className="text-3xl font-bold text-white">Bachelor of Technology</h3>
                                    <div className="flex items-center gap-2 text-slate-400 bg-white/5 px-3 py-1 rounded-full text-sm border border-white/5">
                                        <Calendar className="w-4 h-4" /> 2022 - 2026
                                    </div>
                                </div>
                                <div className="text-xl text-blue-400 font-medium mb-1">Computer Science and Engineering</div>
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <MapPin className="w-4 h-4" /> Cochin University of Science and Technology (CUSAT)
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                { /* Coursework removed as per request */}

                                <div>
                                    <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Academic Performance</h4>
                                    <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-white/5">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-slate-500">CGPA</span>
                                            <span className="text-2xl font-bold text-white">8.5</span>
                                        </div>
                                        <div className="h-8 w-px bg-white/10" />
                                        <div className="flex flex-col">
                                            <span className="text-xs text-slate-500">Status</span>
                                            <span className="text-sm font-medium text-emerald-400">Active Student</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
