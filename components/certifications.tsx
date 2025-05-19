"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Certifications() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handleMouseEnter = (id: number) => {
    setHoveredId(id)
  }

  const handleMouseLeave = () => {
    setHoveredId(null)
  }

  // GitHub repository URL for certifications
  const certificationsRepoUrl = "https://github.com/rohanajay/research-papers/tree/main/Certifications"

  // Function to open GitHub certifications repository
  const openCertificationsRepo = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open(certificationsRepoUrl, "_blank")
  }

  const certifications = [
    {
      id: 1,
      name: "Generative AI and LLMs",
      organization: "NVIDIA",
      logo: "/images/logos/nvidia_logo.jpeg",
      issueDate: "2025",
      skills: ["Large Language Models", "Generative AI", "Prompt Engineering", "AI Applications"],
    },
    {
      id: 2,
      name: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      logo: "/images/logos/aws_logo.png",
      issueDate: "2025",
      skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Cloud Architecture"],
    },
    {
      id: 3,
      name: "Tableau Desktop Specialist",
      organization: "Tableau",
      logo: "/images/logos/tableau_logo.png",
      issueDate: "2025",
      skills: ["Data Visualization", "Dashboard Design", "Data Analysis", "Business Intelligence"],
    },
    {
      id: 4,
      name: "Azure Fundamentals (AZ-900)",
      organization: "Microsoft",
      logo: "/images/logos/azure_logo.png",
      issueDate: "2024",
      skills: ["Cloud Concepts", "Azure Services", "Azure Pricing", "Cloud Security"],
    },
    {
      id: 5,
      name: "Azure AI Fundamentals (AI-900)",
      organization: "Microsoft",
      logo: "/images/logos/azure_logo.png",
      issueDate: "2024",
      skills: ["AI Workloads", "Machine Learning", "Computer Vision", "Natural Language Processing"],
    },
    {
      id: 6,
      name: "Alteryx Designer Core",
      organization: "Alteryx",
      logo: "/images/logos/alteryx_logo.png",
      issueDate: "2021",
      skills: ["Data Preparation", "Data Blending", "Workflow Optimization", "Analytics Automation"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div>
      <h2 className="section-heading">CERTIFICATIONS</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      >
        {certifications.map((cert, index) => (
          <motion.div key={index} variants={item}>
            <Card
              className="h-full bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
              onMouseEnter={() => handleMouseEnter(cert.id)}
              onMouseLeave={handleMouseLeave}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-background/70 p-2 flex items-center justify-center">
                    <img
                      src={cert.logo || "/placeholder.svg"}
                      alt={cert.organization}
                      className="max-w-full max-h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                    <p className="text-primary text-sm">{cert.organization}</p>
                    <p className="text-muted-foreground text-sm mt-1">Issued: {cert.issueDate}</p>
                  </div>
                </div>

                {/* Skills - Always visible */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="bg-primary/10 border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* View Credential Button - Always at the bottom */}
                <div className="mt-auto pt-4">
                  <Button
                    className="bg-primary/10 hover:bg-primary/20 text-primary border-none w-full"
                    onClick={openCertificationsRepo}
                  >
                    <span className="flex items-center justify-center">
                      <Github className="mr-2 h-4 w-4" />
                      View Credential
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
