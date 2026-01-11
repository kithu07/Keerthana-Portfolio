"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import emailjs from "emailjs-com"
import Booking from "@/components/booking"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const serviceID = "service_1vcb72h"
    const templateID = "template_62q6p87"
    const userID = "3-Gx0twW3kQZmORtx"

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log("Email sent successfully!", response)
          toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
          })
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
        },
        (error) => {
          console.error("Failed to send email:", error)
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          })
        }
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

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
            Have a project in mind or want to collaborate? Book a call or send me a message!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Form & Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-pink-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-pink-500"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-pink-500"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-pink-500 min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : <span className="flex items-center"><Send className="mr-2 h-4 w-4" /> Send Message</span>}
                </Button>
              </form>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 justify-between items-center text-slate-300">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-pink-900/30 text-pink-400"><Mail className="h-5 w-5" /></div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">dskithu07@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
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
          </div>

          {/* Right Side: Booking Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Book a Call</h3>
              <p className="text-slate-400">Schedule a 15-minute meeting with me directly.</p>
            </div>
            <Booking />
          </motion.div>
        </div>
      </div>
    </section>
  )
}