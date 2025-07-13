"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Profile from "@/components/profile"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Recognition from "@/components/recognition"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-16 md:pt-8">
        <Hero />

        <section id="about" className="py-16">
          <AboutMe />
        </section>

        <section id="experience" className="py-16">
          <Experience />
        </section>

        <section id="education" className="py-16">
          <Education />
        </section>

        <section id="skills" className="py-16">
          <Profile />
        </section>

        <section id="certifications" className="py-16">
          <Certifications />
        </section>

        <section id="projects" className="py-16">
          <Projects />
        </section>

        <section id="recognition" className="py-16">
          <Recognition />
        </section>

        <section id="contact" className="py-16">
          <Contact />
        </section>
      </div>

      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  )
}
