"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Linkedin, Mail, Github, FileText } from "lucide-react"
import TypewriterComponent from "typewriter-effect"
import { DocumentViewer } from "./document-viewer"

export default function Hero() {
  const [showContent, setShowContent] = useState(false)
  const [rohanTyped, setRohanTyped] = useState(false)
  const [resetAnimation, setResetAnimation] = useState(0)
  const [resumeOpen, setResumeOpen] = useState(false)

  // Function to reset the animation
  const resetNameAnimation = useCallback(() => {
    setRohanTyped(false)
    setResetAnimation((prev) => prev + 1) // Increment to force re-render
  }, [])

  useEffect(() => {
    // Delay showing the content until after the name starts typing
    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 1500)

    // Set up the animation reset timer
    const resetTimer = setTimeout(() => {
      resetNameAnimation()
    }, 10000) // 10 seconds

    return () => {
      clearTimeout(contentTimer)
      clearTimeout(resetTimer)
    }
  }, [resetAnimation, resetNameAnimation]) // Reset the timer when animation resets

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Simplified function to scroll to the contact section at the bottom of the page
  const scrollToContact = () => {
    // Get the total height of the document
    const documentHeight = document.body.scrollHeight

    // Calculate a position that will center the contact section
    // (total height minus viewport height, with a small offset to ensure it's centered)
    const scrollPosition = documentHeight - window.innerHeight + 100

    // Scroll to that position
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center pt-12 md:pt-20 overflow-hidden relative">
      {/* Document Viewer Modal for Resume */}
      <DocumentViewer
        open={resumeOpen}
        onOpenChange={setResumeOpen}
        title="Rohan Ajay - Resume"
        documentUrl="#"
        documentName="Rohan_Ajay_Resume.txt"
        documentType="resume"
      />

      {/* Background glow effect that extends across the hero section */}
      <div className="absolute top-1/2 right-1/4 md:right-1/3 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-primary/10 blur-[100px] -z-10 hero-glow-bg"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 relative z-10 text-center md:text-left px-4 md:px-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap items-baseline justify-center md:justify-start">
            <div className="text-primary mr-3 min-h-[1.5em]">
              {rohanTyped ? (
                "Rohan"
              ) : (
                <TypewriterComponent
                  key={`rohan-${resetAnimation}`} // Force re-render on reset
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Rohan")
                      .callFunction(() => {
                        setRohanTyped(true)
                      })
                      .start()
                  }}
                  options={{
                    cursor: "",
                    delay: 80,
                    loop: false,
                    autoStart: true,
                    deleteSpeed: 999999999, // Extremely high value to prevent deletion
                  }}
                />
              )}
            </div>
            <div className="min-h-[1.5em]">
              {rohanTyped ? (
                <TypewriterComponent
                  key={`ajay-${resetAnimation}`} // Force re-render on reset
                  options={{
                    strings: ["Ajay"],
                    autoStart: true,
                    loop: false,
                    cursor: "|",
                    delay: 80,
                    deleteSpeed: 999999999, // Extremely high value to prevent deletion
                  }}
                />
              ) : (
                <span className="opacity-0">Ajay</span>
              )}
            </div>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">Data Scientist & AI Software Engineer</h2>
            <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about leveraging AI and Data Science to solve complex business problems and drive innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
              <Button onClick={scrollToContact} className="group w-full h-12">
                Contact Me
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => setResumeOpen(true)}
                className="group border-2 border-primary bg-transparent hover:bg-primary/10 text-foreground w-full h-12"
              >
                <span>Resume</span>
                <FileText className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" asChild className="group w-full h-12">
                <a
                  href="https://linkedin.com/in/rohanajay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center"
                >
                  LinkedIn
                  <Linkedin className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" asChild className="group w-full h-12">
                <a
                  href="https://github.com/rohanajay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center"
                >
                  GitHub
                  <Github className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center mb-8 md:mb-0"
        >
          <div className="relative profile-container">
            {/* Main image - Updated with the actual profile picture */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 relative z-20">
              <img
                src="/images/profile/rohan_hero_profile_picture.jpeg"
                alt="Rohan Ajay"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Enhanced multi-layered glow effects - without ripples */}
            <div className="absolute -inset-4 rounded-full bg-primary/40 blur-xl animate-pulse-slow z-10"></div>
            <div className="absolute -inset-8 rounded-full bg-primary/30 blur-2xl animate-pulse-medium z-0"></div>
            <div className="absolute -inset-16 rounded-full bg-primary/20 blur-3xl animate-pulse-fast -z-10"></div>

            {/* Extended glow that reaches toward text */}
            <div className="absolute -inset-24 md:-inset-32 -left-32 md:-left-48 rounded-full bg-primary/15 blur-3xl animate-pulse-slow -z-20"></div>

            {/* Beacon effect - central bright spot */}
            <div className="absolute inset-0 rounded-full bg-primary/50 blur-md animate-pulse-beacon z-10 mix-blend-screen"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="flex justify-center mt-8 md:mt-16"
      >
        <a
          href="#about"
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </motion.div>
    </section>
  )
}
