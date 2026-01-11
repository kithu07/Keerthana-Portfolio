"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import CustomCursor from "@/components/custom-cursor"
import { Download } from "lucide-react"

export default function ResumePage() {
    return (
        <div className="dark min-h-screen bg-slate-950 text-white flex flex-col">
            <CustomCursor />
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-28 flex flex-col h-screen">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-between items-center mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold">
                        My <span className="gradient-text">Resume</span>
                    </h1>
                    <a
                        href="/KEERTHANA_JAN.pdf"
                        download="Keerthana_Resume.pdf"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all hover:scale-105 font-medium shadow-lg shadow-blue-500/25"
                    >
                        <Download className="w-5 h-5" />
                        <span>Download PDF</span>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-grow w-full h-full relative"
                >
                    <iframe
                        src="/KEERTHANA_JAN.pdf#toolbar=0&navpanes=0&scrollbar=0"
                        className="w-full h-full rounded-2xl"
                        title="Resume"
                    />
                </motion.div>
            </main>
        </div>
    )
}
