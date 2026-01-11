"use client"

import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import CustomCursor from "@/components/custom-cursor"
import ParticleBackground from "@/components/particle-background"

export default function ContactPage() {
    return (
        <div className="dark min-h-screen bg-slate-950 text-white flex flex-col noise-bg">
            <CustomCursor />
            <ParticleBackground />
            <Navbar />

            <main className="flex-grow pt-20">
                <Contact />
            </main>
        </div>
    )
}
