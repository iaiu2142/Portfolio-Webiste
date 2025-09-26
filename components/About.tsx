"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Trophy, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const stats = [
    { number: "3.44", label: "GPA", icon: GraduationCap, color: "text-cyan-400" },
    { number: "2000+", label: "Students Mentored", icon: Users, color: "text-slate-300" },
    { number: "15+", label: "Hackathons", icon: Trophy, color: "text-cyan-400" },
    { number: "4", label: "Hackathon Wins", icon: Award, color: "text-slate-300" },
  ]

  return (
    <section className="py-20 px-4 bg-slate-800/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(6, 182, 212, 0.3) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Me</span>
            <motion.div
              className="absolute -top-2 -right-8 w-6 h-6"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Award className="w-6 h-6 text-cyan-400/60" />
            </motion.div>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Software Engineer | AI Enthusiast | Problem Solver
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Enhanced Image - Floating Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative"
              >
                {/* Floating Image without background */}
                <div className="relative">
                  <Image
                    src="/images/about-final.jpg"
                    alt="About Ilsa"
                    width={400}
                    height={400}
                    className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-3xl drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))",
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating badge - only Hackathon Winner */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-slate-600/90 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold text-sm shadow-lg"
              >
                Hackathon Winner 🏆
              </motion.div>

              {/* Additional floating elements like hero section */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/20"
              >
                <span className="text-lg">🎓</span>
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                  x: [0, 10, 0],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  x: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                }}
                className="absolute top-1/4 -left-8 w-10 h-10 bg-slate-600/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Award className="w-5 h-5 text-slate-400" />
              </motion.div>

              <motion.div
                animate={{
                  rotate: [360, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  x: { duration: 5, repeat: Number.POSITIVE_INFINITY },
                }}
                className="absolute bottom-1/4 -right-8 w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Trophy className="w-5 h-5 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.p
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                I'm an AI enthusiast and software engineer who loves coding, winning hackathons, and building smart tech
                solutions. Problem-solver at heart and always exploring new ways to make an impact with AI 🤖❤️
              </motion.p>

              <motion.p
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Currently pursuing my Bachelor's in Software Engineering at Virtual University of Pakistan with a strong
                GPA of 3.44. I've been recognized as a Microsoft Gold Student Ambassador and Stanford Code in Place
                Section Leader.
              </motion.p>
            </div>

            {/* Enhanced Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-cyan-400" />
                Key Highlights
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { text: "Microsoft Gold Ambassador", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
                  { text: "Stanford Section Leader", color: "bg-slate-600/20 text-slate-300 border-slate-600/30" },
                  { text: "Research Co-Author", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
                  { text: "Hackathon Winner", color: "bg-slate-600/20 text-slate-300 border-slate-600/30" },
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className={`${badge.color} hover:shadow-lg transition-all duration-300 px-3 py-1`}
                    >
                      {badge.text}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700/50 text-center backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-center mb-2">
                          <IconComponent className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                        <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
