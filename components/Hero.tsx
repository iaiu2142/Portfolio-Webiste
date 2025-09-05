"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Youtube, Mail, Sparkles, Code, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particleCount, setParticleCount] = useState(20)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth < 768 ? 10 : 20)
    }

    updateParticleCount()
    window.addEventListener("resize", updateParticleCount)
    return () => window.removeEventListener("resize", updateParticleCount)
  }, [])

  const titles = ["AI Enthusiast", "Software Engineer", "Problem Solver", "Tech Explorer"]
  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-3 sm:px-4 lg:px-6 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-500/30 to-transparent rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          style={{ top: "10%", right: "10%" }}
        />
        <motion.div
          className="absolute w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-l from-slate-600/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 0.01,
            y: -mousePosition.y * 0.01,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          style={{ bottom: "10%", left: "10%" }}
        />

        {/* Floating particles - responsive count */}
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400/30 rounded-full"
            animate={{
              y: [-20, -100, -20],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10 max-w-7xl">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6 px-2 sm:px-4 lg:px-0 order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-400 mb-2 lg:mb-4 font-light tracking-wide">
              Hey, It's Me
            </h3>
            <motion.div
              className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400/60" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 relative leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Ilsa Afzaal
            </span>
            <motion.div
              className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400/40" />
            </motion.div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4 sm:mb-6 lg:mb-8 h-6 xs:h-8 sm:h-10 lg:h-12 flex items-center justify-center lg:justify-start"
          >
            <span className="mr-2">And I'm a</span>
            <motion.span
              key={currentTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-cyan-400 font-semibold relative"
            >
              {titles[currentTitle]}
              <motion.div
                className="absolute -right-6 sm:-right-8 top-1/2 transform -translate-y-1/2"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-400/60" />
              </motion.div>
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-gray-300 text-sm xs:text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 max-w-2xl leading-relaxed px-2 sm:px-4 lg:px-0"
          >
            I'm a tech explorer on a never-ending adventure, hopping between fresh ideas, chasing exciting innovations,
            and happily leveling up my skills every day. 🚀
          </motion.p>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/ilsaafzaal/", color: "hover:shadow-cyan-500/50" },
              { icon: Github, href: "https://github.com/iaiu2142", color: "hover:shadow-slate-500/50" },
              { icon: Youtube, href: "https://www.youtube.com/@learningwithilsa", color: "hover:shadow-cyan-500/50" },
            ].map((social, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${social.color}`}
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: [-100, 300] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <a href="mailto:dev.ilsaafzaal@gmail.com" className="flex items-center gap-2 relative z-10">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                Ping me 📩
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative"
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full bg-gradient-to-r from-cyan-400/30 to-slate-600/30 blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Main image container */}
              <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full bg-gradient-to-br from-cyan-400 to-slate-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
                  <Image
                    src="/images/hero-new.png"
                    alt="Ilsa Afzaal"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover scale-110"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Enhanced Floating elements - responsive sizes */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
              }}
              className="absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 lg:-right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/20"
            >
              <span className="text-lg sm:text-2xl lg:text-3xl">🤖</span>
            </motion.div>

            <motion.div
              animate={{
                rotate: -360,
                y: [0, -10, 0],
              }}
              transition={{
                rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                y: { duration: 3, repeat: Number.POSITIVE_INFINITY },
              }}
              className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-4 sm:-left-6 lg:-left-8 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-slate-600/30 to-slate-700/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-500/20"
            >
              <span className="text-base sm:text-xl lg:text-2xl">💻</span>
            </motion.div>

            {/* Additional floating tech icons - hidden on very small screens */}
            <motion.div
              animate={{
                rotate: [0, 360],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="hidden sm:block absolute top-1/4 -left-8 sm:-left-10 lg:-left-12 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Code className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-cyan-400" />
            </motion.div>

            <motion.div
              animate={{
                rotate: [360, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="hidden sm:block absolute bottom-1/4 -right-8 sm:-right-10 lg:-right-12 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-slate-600/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center gap-1 sm:gap-2"
        >
          <span className="text-cyan-400 text-xs sm:text-sm font-light">Scroll Down</span>
          <ArrowDown className="h-4 w-4 sm:h-6 sm:w-6 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
