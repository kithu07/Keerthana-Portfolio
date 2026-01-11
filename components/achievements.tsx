"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Award } from "lucide-react"

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Awards & <span className="gradient-text">Recognition</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-amber-500 rounded-full mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {/* Main Major Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative p-1 bg-gradient-to-r from-pink-500/50 via-white/10 to-blue-500/50 rounded-3xl">
              <div className="relative bg-slate-950 rounded-[22px] p-8 md:p-12 overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" />

                <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
                  <div className="flex-shrink-0 p-6 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-500/30 text-amber-500 shadow-lg shadow-amber-500/10">
                    <Trophy className="h-16 w-16" />
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm font-semibold border border-pink-500/20">
                        Prestigious
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-pink-200 transition-colors">
                        Google WE'24 Scholar
                      </h3>
                    </div>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                      Selected as a scholar for the Women Engineers program by Google.
                      A recognition of technical excellence and potential to lead in the technology space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Achievement Placeholders (if needed, otherwise minimal) */}
          {/* Example 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-pink-500/30 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Hackathon Finalist</h4>
                <p className="text-slate-400 text-sm">Recognized for innovative solutions in university-level hackathons.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-pink-500/30 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Star className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Community Leader</h4>
                <p className="text-slate-400 text-sm">Active contributor and mentor in student developer communities.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
