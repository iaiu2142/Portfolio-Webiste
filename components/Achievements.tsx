"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, BookOpen } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      category: "Coding Competitions",
      icon: Trophy,
      items: [
        {
          title: "UC Berkeley CALICO",
          description: "Bronze Medal with 140th global rank out of 865 teams",
          badge: "Bronze Medal",
        },
        {
          title: "Google Code Jam Farewell",
          description: "24th position from Pakistan with 71 points, top 8% of 301 participants",
          badge: "24th in Pakistan",
        },
        {
          title: "Meta Hacker Cup",
          description: "Qualified in qualification round, ranked in top 31% in Round 1",
          badge: "Top 31%",
        },
        {
          title: "Harvard CS50x Puzzle Day",
          description: "1st position solving 9/9 problems among 530+ global teams (3 times)",
          badge: "1st Place",
        },
      ],
    },
    {
      category: "Hackathons & Awards",
      icon: Award,
      items: [
        {
          title: "WordSprint Developers 2.0 Hack",
          description: "Winner among 150 competing teams as Team Lead",
          badge: "Winner",
        },
        {
          title: "Web3 & Me Hackathon",
          description: "Winner among over 43 international teams",
          badge: "Winner",
        },
        {
          title: "BuildwithAI Hack",
          description: "Won Honorable Mention Award",
          badge: "Honorable Mention",
        },
        {
          title: "WordSprint Developers Hackathon 3.0",
          description: "Recognized as a Mentor to serve international teams",
          badge: "Mentor",
        },
      ],
    },
    {
      category: "Academic & Leadership",
      icon: BookOpen,
      items: [
        {
          title: "Stanford Code In Place",
          description: "Selected as Section Leader (top 10% worldwide)",
          badge: "Section Leader",
        },
        {
          title: "Microsoft Gold Student Ambassador",
          description: "Highest rank - Community Hero recognition",
          badge: "Gold Ambassador",
        },
        {
          title: "Merit-Based Scholarship",
          description: "Awarded $250 fully funded scholarship in FSc Pre-Engineering",
          badge: "Scholarship",
        },
        {
          title: "DET Academic Scores",
          description: "120/160 overall [Speaking 130, Writing 125]",
          badge: "120/160",
        },
      ],
    },
    {
      category: "Research & Speaking",
      icon: Star,
      items: [
        {
          title: "Multi-Regional Fracture Detection Research",
          description: "Co-Author - CNN model achieved 96% test accuracy",
          badge: "Co-Author",
        },
        {
          title: "BuildwithAI Hack Workshop",
          description: "Honorable Guest Speaker for RAG Chatbot development",
          badge: "Guest Speaker",
        },
        {
          title: "IEEE-UIT Speaker",
          description: "LinkedIn Learning and Profile Management presentation",
          badge: "Speaker",
        },
        {
          title: "Students Mentored",
          description: "Trained and mentored over 2000+ students globally",
          badge: "2000+ Students",
        },
      ],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Grand <span className="text-cyan-400">Achievements</span>
          </motion.h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Recognition and accomplishments that showcase my dedication to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl text-white">
                      <div className="bg-cyan-500/20 p-2 rounded-lg">
                        <IconComponent className="h-6 w-6 text-cyan-400" />
                      </div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="border-l-2 border-cyan-500/30 pl-4 py-2"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                          <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 text-xs shrink-0">
                            {item.badge}
                          </Badge>
                        </div>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </motion.div>
                    ))}
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
