"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Briefcase } from "lucide-react"
import Image from "next/image"

export default function Experience() {
  const experiences = [
    {
      title: "Microsoft Gold Student Ambassador",
      company: "Microsoft",
      type: "Leadership",
      image: "/images/experience/microsoft-ambassador.jpeg",
      link: null,
    },
    {
      title: "Stanford Code in Place Section Leader",
      company: "Stanford University",
      type: "Education",
      image: "/images/experience/code-in-place.jpg",
      link: null,
    },
    {
      title: "Coding Instructor",
      company: "iCodeGuru",
      type: "Teaching",
      image: "/images/experience/coding-instructor.jpg",
      link: "https://www.youtube.com/playlist?list=PLj1Vzhlf6ygkVQZqewISe_D8SZhobmk1R",
    },
    {
      title: "GenAI Workshop Trainer",
      company: "PakAngels Aspire Pakistan",
      type: "Training",
      image: "/images/experience/genai-workshop.png",
      link: null,
    },
    {
      title: "GenAI Hackathon Judge",
      company: "PEC Silicon Valley",
      type: "Judging",
      image: "/images/experience/pec-judge-updated.jpg",
      link: null,
    },
    {
      title: "Virtual Assistant",
      company: "Changing Skies",
      type: "Remote Work",
      image: "/images/experience/changing-skies.png",
      link: null,
    },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
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
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Experience</span>
            <motion.div
              className="absolute -top-2 -right-8 w-6 h-6"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Briefcase className="w-6 h-6 text-cyan-400/60" />
            </motion.div>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Leadership roles and impactful contributions
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 hover:border-cyan-500/30 transition-all duration-300 group h-full relative overflow-hidden">
                {/* Image Section */}
                {exp.image && (
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={exp.image || "/placeholder.svg"}
                      alt={exp.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                    {/* Link overlay for clickable items */}
                    {exp.link && (
                      <motion.div
                        className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        whileHover={{ opacity: 1 }}
                      >
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-cyan-500/90 backdrop-blur-sm rounded-full p-3 text-slate-900 hover:bg-cyan-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </motion.div>
                    )}
                  </div>
                )}

                <CardContent className={`p-6 ${!exp.image ? "pt-8" : ""}`}>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                        {exp.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="border-slate-500/50 text-slate-400 group-hover:border-cyan-400/50 group-hover:text-cyan-400 transition-colors duration-300 shrink-0"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    <p className="text-cyan-400 font-semibold text-sm">{exp.company}</p>

                    {/* Link button for items with links */}
                    {exp.link && (
                      <motion.div className="pt-2" whileHover={{ scale: 1.02 }}>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Playlist
                        </a>
                      </motion.div>
                    )}
                  </div>
                </CardContent>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.1), transparent)",
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
