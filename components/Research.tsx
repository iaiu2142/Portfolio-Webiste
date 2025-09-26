"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Video, Award } from "lucide-react"
import Image from "next/image"

export default function Research() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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
            Research{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Work</span>
            <motion.div
              className="absolute -top-2 -right-8 w-6 h-6"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <FileText className="w-6 h-6 text-cyan-400/60" />
            </motion.div>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Contributing to healthcare innovation through advance research
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg shrink-0">
                    <Award className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                      Fracture Detection in X-rays Using CNN 🦴❤️
                    </CardTitle>
                    <Badge className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-900 font-semibold">
                      Poster Presentation Selected
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Our research paper,{" "}
                  <span className="font-bold text-white">"Fracture Detection in X-rays Using CNN 🦴❤️"</span> has been
                  selected for <span className="text-cyan-400 font-semibold">#Poster_Presentation</span> at the{" "}
                  <span className="font-semibold text-white">
                    3rd International Conference on Health Professions Education & Research (ICHPER 2025)
                  </span>
                  , hosted at Shaikh Zayed Medical Complex Lahore.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* LinkedIn Post Preview */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-slate-700/50 border-slate-600/50 hover:border-cyan-500/50 transition-colors h-full overflow-hidden">
                      <CardContent className="p-0">
                        <div className="p-4 pb-3">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-blue-600/20 p-2 rounded">
                              <ExternalLink className="h-4 w-4 text-blue-400" />
                            </div>
                            <span className="text-sm font-medium text-white">LinkedIn Post</span>
                          </div>
                        </div>
                        <div
                          className="relative overflow-hidden cursor-pointer"
                          onClick={() =>
                            window.open(
                              "https://www.linkedin.com/feed/update/urn:li:activity:7377315594473226240/",
                              "_blank",
                            )
                          }
                        >
                          <Image
                            src="/images/research/linkedin-preview.png"
                            alt="ICHPER 2025 Conference - Research Presentation and Certificate"
                            width={500}
                            height={200}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                          <div className="absolute top-2 right-2 bg-blue-600/90 backdrop-blur-sm rounded-full p-1.5 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <ExternalLink className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="p-4 pt-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10 bg-transparent"
                            onClick={() =>
                              window.open(
                                "https://www.linkedin.com/feed/update/urn:li:activity:7377315594473226240/",
                                "_blank",
                              )
                            }
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View LinkedIn Post
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* YouTube Video Preview */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-slate-700/50 border-slate-600/50 hover:border-red-500/50 transition-colors h-full overflow-hidden">
                      <CardContent className="p-0">
                        <div className="p-4 pb-3">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-red-600/20 p-2 rounded">
                              <Video className="h-4 w-4 text-red-400" />
                            </div>
                            <span className="text-sm font-medium text-white">Poster Presentation</span>
                          </div>
                        </div>
                        <div
                          className="relative overflow-hidden cursor-pointer"
                          onClick={() => window.open("https://www.youtube.com/shorts/UFrikWX3Vlk", "_blank")}
                        >
                          <Image
                            src="/images/research/presentation-action.png"
                            alt="Live Poster Presentation at ICHPER 2025 Conference"
                            width={500}
                            height={200}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                          {/* Play button overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-600/90 backdrop-blur-sm rounded-full p-3 hover:bg-red-500 transition-colors hover:scale-110 duration-300">
                              <Video className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="absolute top-2 right-2 bg-red-600/90 backdrop-blur-sm rounded-full p-1.5 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <ExternalLink className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="p-4 pt-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10 bg-transparent"
                            onClick={() => window.open("https://www.youtube.com/shorts/UFrikWX3Vlk", "_blank")}
                          >
                            <Video className="h-4 w-4 mr-2" />
                            Watch Presentation
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Research Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-slate-700/30 rounded-lg p-6"
                >
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-cyan-400" />
                    Research Highlights
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "CNN-based fracture detection",
                      "96% test accuracy achieved",
                      "Healthcare AI application",
                      "International conference selection",
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
