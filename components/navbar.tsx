"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

// Update the navigation links to match the new order and rename Leadership to Recognition
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Recognition", href: "#recognition" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const observerRefs = useRef<IntersectionObserver[]>([])

  // Handle scroll events for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set up optimized scroll detection for sections
  useEffect(() => {
    // Store the last known active section to prevent unnecessary updates
    let lastActiveSection = activeSection
    let ticking = false

    const determineActiveSection = () => {
      // Get all sections
      const sections = navLinks
        .map((link) => {
          const id = link.href.substring(1)
          const element = document.getElementById(id)
          return { id, element }
        })
        .filter((section) => section.element !== null)

      // Get current scroll position with offset for header
      const scrollPosition = window.scrollY + 100

      // Find the section that should be active
      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, element } = sections[i]
        if (!element) continue

        const sectionTop = element.offsetTop - 120 // Add offset to improve detection

        if (scrollPosition >= sectionTop) {
          if (lastActiveSection !== id) {
            lastActiveSection = id
            setActiveSection(id)
          }
          break
        }
      }

      // Handle case when at the top of the page
      if (scrollPosition < 100 && lastActiveSection !== "") {
        lastActiveSection = ""
        setActiveSection("")
      }

      ticking = false
    }

    // Throttle scroll event using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          determineActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Initial check
    determineActiveSection()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeSection])

  const toggleMenu = () => setIsOpen(!isOpen)

  // Handle smooth scrolling when clicking nav links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)

    if (element) {
      // Close mobile menu if open
      if (isOpen) setIsOpen(false)

      // Smooth scroll to the element
      element.scrollIntoView({ behavior: "smooth", block: "start" })

      // Update URL without page reload
      window.history.pushState({}, "", href)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <a href="#" className="text-xl font-bold text-primary">
              Rohan Ajay
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link text-foreground hover:text-primary transition-colors duration-300 relative ${
                    isActive ? "text-primary font-medium" : ""
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ease-in-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              )
            })}
            <ThemeToggle />
          </motion.nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="rounded-full bg-background/20 hover:bg-background/40"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative py-2 px-3 rounded-md transition-colors duration-300 ${
                      isActive
                        ? "text-primary font-medium bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-secondary/50"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-md transform transition-transform duration-300 ease-in-out origin-left ${
                        isActive ? "scale-y-100" : "scale-y-0"
                      }`}
                    />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
