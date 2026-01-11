"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Award, Medal } from "lucide-react"

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Awards & <span className="gradient-text">Recognition</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Moments of pride and validation of my journey.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Major Achievement - Spans 2 cols on Large screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 md:p-10 rounded-3xl bg-slate-900 border border-amber-500/20 flex flex-col justify-center overflow-hidden">
              {/* Background Sparkles */}
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Trophy className="w-40 h-40 text-amber-500" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold border border-amber-500/20 mb-6">
                  <Star className="w-3 h-3 fill-amber-400" /> Prestigious
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-amber-200 transition-colors">
                  Google WE'24 Scholar
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                  Selected as a scholar for the Women Engineers program by Google. A recognition of technical excellence, leadership potential, and commitment to diversity in technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Secondary Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 rounded-3xl bg-slate-900 border border-blue-500/20 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Medal className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Hackathon Finalist</h4>
              <p className="text-slate-400">
                Top 5 in multiple university-level hackathons. Recognized for innovative problem-solving.
              </p>
            </div>
          </motion.div>

          {/* Tertiary Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 rounded-3xl bg-slate-900 border border-purple-500/20 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Community Leader</h4>
              <p className="text-slate-400">
                Active mentor and contributor to student developer communities (TinkerHub, ACES).
              </p>
            </div>
          </motion.div>

          {/* Academic Excellence - Replaces Open Source */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1 relative group h-full"
          >
            <div className="absolute inset-0 bg-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 rounded-3xl bg-slate-900 border border-pink-500/20 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-white mb-2">Academic Top Scorer</h4>
              <p className="text-slate-400">
                Maintained a <span className="text-pink-400 font-bold">9.97 CGPA</span>, topping the last 4 semesters. Balanced academic excellence with active club leadership.
              </p>
            </div>
          </motion.div>

          {/* Freelance Projects - New Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1 relative group h-full"
          >
            <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 rounded-3xl bg-slate-900 border border-emerald-500/20 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-white mb-2">Freelance Developer</h4>
              <p className="text-slate-400">
                Successfully delivered multiple freelance projects, earning trust and satisfaction from diverse clients.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
