"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
    {
        role: "Software Engineer Intern",
        org: "Cognifyr.co",
        period: "May 2025 – June 2025",
        description: "Full-Stack Development and AI Automation Startup (Remote). Refactored the admin dashboard for ONES (EdTech), improving UI performance and responsiveness for a platform serving 5,000+ active app users using Vue.js and Tailwind CSS. Built the student-facing portal in Next.js, converting Figma designs into production-ready code featuring live class integration, secure payment gateways, and adaptive testing modules.",
        skills: ["Next.js", "Vue.js", "Tailwind CSS", "Refactoring", "Payment Gateways"]
    },
    {
        role: "Lead",
        org: "TinkerHub CUSAT",
        period: "2025 - Present",
        description: "Leading the student community to foster technical skills and innovation through workshops and hackathons. Orchestrating events that bridge the gap between academic learning and industry demands.",
        skills: ["Leadership", "Community Building", "Mentoring"]
    },
    {
        role: "Vice Chairperson",
        org: "ACES, CUSAT",
        period: "2023 - Present",
        description: "Organizing flagship academic and cultural events for the Computer Science department. Managing cross-functional teams and budget allocation for departmental activities.",
        skills: ["Event Management", "Team Coordination", "Budget Planning"]
    },
    {
        role: "Media Team Member",
        org: "Team Horizon",
        period: "2023 - 2025",
        description: "Managed branding and social media presence for the university's award-winning Mars Rover team. Created engaging content that resulted in global recognition and increased sponsorship.",
        skills: ["Social Media Marketing", "Content Creation", "Branding"]
    }
]

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    return (
        <section id="experience" className="py-32 relative overflow-hidden bg-slate-950">
            {/* Background blur */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Journey</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            My path of growth, leadership, and technical contribution.
                        </p>
                    </motion.div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />

                    <div className="space-y-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-500 z-10 -translate-x-1/2 mt-1.5 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                                    <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20" />
                                </div>

                                {/* Content Side */}
                                <div className="ml-12 md:ml-0 md:w-1/2 relative">
                                    <div className={`p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-purple-500/30 transition-all group backdrop-blur-sm shadow-xl ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}>
                                        {/* Role & Org */}
                                        <div className={`flex flex-col gap-1 mb-4 ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{exp.role}</h3>
                                            <span className="text-lg text-purple-400 font-medium">{exp.org}</span>
                                        </div>

                                        {/* Period */}
                                        <div className={`inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-slate-300 mb-6 border border-white/5`}>
                                            {exp.period}
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-400 leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        {/* Skills Tags */}
                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                                            {exp.skills.map((skill, i) => (
                                                <span key={i} className="text-xs font-semibold px-2 py-1 bg-purple-900/20 text-purple-300 rounded border border-purple-500/20">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Space for Layout Balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
