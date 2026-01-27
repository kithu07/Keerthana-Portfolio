"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Booking from "@/components/booking"

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="text-pink-500">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Have a project in mind or want to collaborate? Book a call or connect with me!
          </motion.p>
        </div>

        <div className="flex flex-col gap-12 items-center">
          {/* Booking Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl"
          >
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Book a Call</h3>
              <p className="text-slate-400">Schedule a 15-minute meeting with me directly.</p>
            </div>
            <Booking />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8 w-full max-w-4xl"
          >
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-slate-300 w-full">
              <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-white/5 backdrop-blur-sm min-w-[250px]">
                <div className="p-3 rounded-lg bg-pink-900/30 text-pink-400"><Mail className="h-5 w-5" /></div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">dskithu07@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-white/5 backdrop-blur-sm min-w-[250px]">
                <div className="p-3 rounded-lg bg-pink-900/30 text-pink-400"><MapPin className="h-5 w-5" /></div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">Kochi, Kerala</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <a href="https://github.com/kithu07" className="p-3 rounded-full bg-gray-800 hover:bg-pink-900/70 transition-colors"><Github className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/in/keerthana-ds07/" className="p-3 rounded-full bg-gray-800 hover:bg-pink-900/70 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/keerthanaa_ds/" className="p-3 rounded-full bg-gray-800 hover:bg-pink-900/70 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}