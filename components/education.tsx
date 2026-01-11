"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, School } from "lucide-react"

export default function Education() {
    return (
        <section id="education" className="py-24 relative bg-slate-950/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Academic <span className="gradient-text">Background</span>
                    </motion.h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mx-auto" />
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-white/10 overflow-hidden"
                    >
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="flex-shrink-0 p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20">
                                <GraduationCap className="h-12 w-12" />
                            </div>

                            <div className="flex-grow space-y-4">
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">Bachelor of Technology</h3>
                                        <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-slate-400 border border-white/10">2022 - 2026</span>
                                    </div>
                                    <p className="text-xl text-blue-400 font-medium flex items-center gap-2">
                                        <School className="h-5 w-5" /> Cochin University of Science and Technology (CUSAT)
                                    </p>
                                </div>

                                <p className="text-slate-400 leading-relaxed text-lg">
                                    Major in <span className="text-slate-200 font-semibold">Computer Science and Engineering</span>.
                                    Focused on Software Engineering, Data Structures, and Algorithms.
                                </p>

                                <div className="pt-4 flex gap-4 text-sm text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="h-4 w-4 text-pink-500" />
                                        <span>CGPA: 8.5 (Current)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
