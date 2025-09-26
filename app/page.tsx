import Hero from "@/components/Hero"
import About from "@/components/About"
import Research from "@/components/Research"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Achievements from "@/components/Achievements"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      <Hero />
      <About />
      <Research />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
    </main>
  )
}
