"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Github, Linkedin, Send, MapPin, Phone, ExternalLink } from "lucide-react"

export default function ContactSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // No logic as requested, just UI
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Email",
            value: "contact@keerthana.live",
            link: "mailto:contact@keerthana.live",
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            icon: <Github className="w-5 h-5" />,
            title: "GitHub",
            value: "github.com/keerthana",
            link: "https://github.com",
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            title: "LinkedIn",
            value: "linkedin.com/in/keerthana",
            link: "https://linkedin.com",
            color: "text-pink-400",
            bg: "bg-pink-500/10",
            border: "border-pink-500/20"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Location",
            value: "Kerala, India",
            link: "#",
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        },
    ]

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="max-w-5xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-pink-500" />
                            <span className="text-sm font-medium tracking-wider text-pink-400 uppercase">
                                Contact
                            </span>
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-pink-500" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-white">Let's Work </span>
                            <span className="gradient-text">Together</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        {/* Contact Info Column */}
                        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-105 group bg-slate-900/40 backdrop-blur-sm ${item.border} hover:border-opacity-50 hover:bg-slate-800/60`}
                                >
                                    <div className={`p-3 rounded-lg ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium text-slate-400 mb-0.5">{item.title}</h3>
                                        <p className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                    <ExternalLink className={`w-4 h-4 text-slate-600 group-hover:${item.color} transition-colors opacity-0 group-hover:opacity-100`} />
                                </a>
                            ))}
                        </motion.div>

                        {/* Contact Form Column */}
                        <motion.div variants={itemVariants} className="lg:col-span-3">
                            <div className="glass p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl -mr-16 -mt-16" />

                                <form onSubmit={handleSubmit} className="space-y-6 relative">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full bg-slate-950/50 border border-slate-800/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all placeholder:text-slate-600"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full bg-slate-950/50 border border-slate-800/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all placeholder:text-slate-600"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            className="w-full bg-slate-950/50 border border-slate-800/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all placeholder:text-slate-600"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full bg-slate-950/50 border border-slate-800/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all resize-none placeholder:text-slate-600"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/25 flex items-center justify-center gap-2 group"
                                    >
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
