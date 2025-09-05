"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Wrench, Brain, Target } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "SQL"],
      color: "cyan",
    },
    {
      title: "AI/ML Tools",
      icon: Brain,
      skills: ["NumPy", "Pandas", "Flask", "Matplotlib", "OpenCV", "LLMs"],
      color: "purple",
    },
    {
      title: "Web Tools",
      icon: Globe,
      skills: ["HTML", "CSS", "ReactJS", "WhisperAI", "Streamlit", "Dialogflow", "Hugging Face"],
      color: "green",
    },
    {
      title: "Social Controls",
      icon: Database,
      skills: ["Git", "GitHub"],
      color: "blue",
    },
    {
      title: "IDEs",
      icon: Wrench,
      skills: ["VS Code", "Google Colab", "PyCharm", "Sublime", "Replit"],
      color: "orange",
    },
    {
      title: "Problem Solving",
      icon: Target,
      skills: ["170+ LeetCode"],
      color: "pink",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      purple: "bg-slate-600/20 text-slate-300 border-slate-600/30",
      green: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      blue: "bg-slate-600/20 text-slate-300 border-slate-600/30",
      orange: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      pink: "bg-slate-600/20 text-slate-300 border-slate-600/30",
    }
    return colors[color as keyof typeof colors] || colors.cyan
  }

  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </motion.h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative AI and software solutions
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-colors h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg text-white">
                      <div className={`p-2 rounded-lg ${getColorClasses(category.color).split(" ")[0]}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="secondary"
                            className={`${getColorClasses(category.color)} hover:scale-105 transition-transform cursor-default`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
