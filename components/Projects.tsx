"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Brain, Eye, Heart, Gamepad2, Film, MessageSquare, Star, Zap } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "NLP Relationship Counsellor",
      description:
        "Mental Health Analysis App that analyzes chat logs and conversations using AI to provide relationship advice, detect toxic behaviors and red flags.",
      image: "/images/projects/reader.jpg",
      technologies: ["NLP", "Groq API", "Streamlit", "Transformers", "FAISS"],
      github: "https://github.com/iaiu2142/Relationship_Counsellor",
      demo: "https://huggingface.co/spaces/devilsa/Relationship_Counselling",
      icon: Heart,
      category: "AI/ML",
      featured: true,
    },
    {
      title: "Drive Guard",
      description:
        "AI-Powered Driver Drowsiness Detection System using real-time face detection and eye blink detection to classify states: Active, Drowsy, and Sleeping.",
      image: "/images/projects/drive.png",
      technologies: ["OpenCV", "ML", "Python", "Dlib", "NumPy"],
      github: "https://github.com/iaiu2142/AI-Drive-Gaurd",
      icon: Eye,
      category: "AI/ML",
      featured: true,
    },
    {
      title: "PlayDate - AI Autism Support",
      description:
        "AI-Powered platform for children with autism using GPT-4, WhisperAI, and adaptive AI to create personalized learning activities.",
      image: "/images/projects/chip.png",
      technologies: ["React JS", "Tailwind CSS", "Django", "WhisperAI", "GPT-4", "MySQL"],
      github: "https://github.com/iaiu2142/PlayDate-updated",
      icon: Gamepad2,
      category: "Full Stack",
      featured: true,
    },
    {
      title: "CNow - Walking Assistance",
      description:
        "AI platform for visually impaired people using CNN, LSTM, and NLP to convert visual input into speech for better navigation.",
      image: "/images/projects/eye.jpg",
      technologies: ["Flask", "CNN", "LSTM", "NLP", "Braille Interface"],
      github: "https://github.com/iaiu2142/image_caption_generator-Project",
      icon: Brain,
      category: "AI/ML",
    },
    {
      title: "Movie Analyzer RAG App",
      description:
        "AI-Powered Movie Scraping App using RAG with Llama model to analyze and summarize movies using user prompts.",
      image: "/images/projects/futurehome.png",
      technologies: ["Python3", "RAG", "GROQ API", "Llama Model", "Kaggle Dataset"],
      github: "https://colab.research.google.com/drive/1KnAecXlKZXuCy2v7SXT1zwf-yQbdpT0A?usp=sharing",
      demo: "https://www.youtube.com/live/8aQSUfHCg0A?si=icmcbGubbykEycW3&t=40",
      icon: Film,
      category: "AI/ML",
    },
    {
      title: "NLP Chatbot with Dialogflow",
      description:
        "Intelligent chatbot developed using Google Dialogflow with natural language processing capabilities for enhanced user interactions.",
      image: "/images/projects/chatbot.jpg",
      technologies: ["Dialogflow", "NLP", "Python", "Flask", "JavaScript"],
      github: "https://github.com/iaiu2142/FYP_NLP-Chatbot-Development-using-Dialogflow",
      icon: MessageSquare,
      category: "AI/ML",
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-800/30 backdrop-blur-sm relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
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
            Latest{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Projects</span>
            <motion.div
              className="absolute -top-2 -right-8 w-6 h-6"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-cyan-400/60" />
            </motion.div>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Showcasing my passion for AI, machine learning, and innovative software solutions
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={project.featured ? "lg:col-span-1 md:col-span-1" : ""}
              >
                <Card
                  className={`bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-500 group h-full relative overflow-hidden ${project.featured ? "ring-1 ring-cyan-500/30" : ""}`}
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-900 font-semibold">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="p-0 relative">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                      {/* Floating icon */}
                      <motion.div
                        className="absolute top-4 right-4 bg-cyan-500/20 backdrop-blur-sm p-3 rounded-full border border-cyan-400/30"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="h-6 w-6 text-cyan-400" />
                      </motion.div>

                      {/* Category badge */}
                      <div className="absolute bottom-4 left-4">
                        <Badge
                          variant="secondary"
                          className="bg-slate-800/80 text-cyan-400 backdrop-blur-sm border border-cyan-400/30"
                        >
                          {project.category}
                        </Badge>
                      </div>

                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 space-y-4">
                    <motion.h3
                      className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge
                            variant="outline"
                            className="text-xs border-slate-600/50 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs border-slate-600/50 text-gray-400">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 pt-2">
                      <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-slate-600/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 bg-transparent transition-all duration-300"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            {project.title === "Movie Analyzer RAG App" ? "Colab" : "Code"}
                          </a>
                        </Button>
                      </motion.div>

                      {project.demo && (
                        <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-slate-900 font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                          >
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              {project.title === "Movie Analyzer RAG App" ? "Video" : "Demo"}
                            </a>
                          </Button>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
