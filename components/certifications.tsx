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

  // Function to open certification link
  const openCertificationLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault()
    window.open(url, "_blank")
  }

  // Function to open all credentials repository
  const openAllCredentials = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open("https://github.com/rohanajay/research-papers/tree/main/Certifications", "_blank")
  }

  const certifications = [
    {
      id: 1,
      name: "Generative AI and LLMs",
      organization: "NVIDIA",
      logo: "/images/logos/nvidia_logo.jpeg",
      issueDate: "2025",
      skills: ["Large Language Models", "Generative AI", "Prompt Engineering", "AI Applications"],
      verificationUrl: "https://www.credly.com/badges/0ebe827c-45c7-4bde-b25a-5fbe5072417f/public_url",
    },
    {
      id: 2,
      name: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      logo: "/images/logos/aws_logo.png",
      issueDate: "2025",
      skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Cloud Architecture"],
      verificationUrl: "https://www.credly.com/badges/1bf278b1-fe1a-43e7-9bf4-0f8d03b49d3f/public_url",
    },
    {
      id: 3,
      name: "Tableau Desktop Specialist",
      organization: "Tableau",
      logo: "/images/logos/tableau_logo.png",
      issueDate: "2025",
      skills: ["Data Visualization", "Dashboard Design", "Data Analysis", "Business Intelligence"],
      verificationUrl: "https://www.credly.com/badges/12cff6f9-9f62-46cb-b045-f2489183244d/public_url",
    },
    {
      id: 4,
      name: "Azure Fundamentals (AZ-900)",
      organization: "Microsoft",
      logo: "/images/logos/azure_logo.png",
      issueDate: "2024",
      skills: ["Cloud Concepts", "Azure Services", "Azure Pricing", "Cloud Security"],
      verificationUrl:
        "https://github.com/rohanajay/research-papers/blob/main/Certifications/Rohan%20Ajay%20Microsoft%20AZ900%20Certificate.png",
    },
    {
      id: 5,
      name: "Azure AI Fundamentals (AI-900)",
      organization: "Microsoft",
      logo: "/images/logos/azure_logo.png",
      issueDate: "2024",
      skills: ["AI Workloads", "Machine Learning", "Computer Vision", "Natural Language Processing"],
      verificationUrl:
        "https://github.com/rohanajay/research-papers/blob/main/Certifications/Rohan%20Ajay%20Microsoft%20AI900%20Certificate.png",
    },
    {
      id: 6,
      name: "Alteryx Designer Core",
      organization: "Alteryx",
      logo: "/images/logos/alteryx_logo.png",
      issueDate: "2021",
      skills: ["Data Preparation", "Data Blending", "Workflow Optimization", "Analytics Automation"],
      verificationUrl:
        "https://github.com/rohanajay/research-papers/blob/main/Certifications/Rohan%20Ajay%20Alteryx%20Designer%20Core%20Certification.png",
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
                    onClick={(e) => openCertificationLink(cert.verificationUrl, e)}
                  >
                    <span className="flex items-center justify-center">
                      {cert.verificationUrl.includes("credly.com") ? (
                        <ExternalLink className="mr-2 h-4 w-4" />
                      ) : (
                        <Github className="mr-2 h-4 w-4" />
                      )}
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

      {/* View All Credentials Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center mt-12"
      >
        <Button
          className="group border-2 border-primary bg-transparent hover:bg-primary/10 text-foreground px-8 py-3"
          onClick={openAllCredentials}
        >
          <span className="flex items-center justify-center">
            <Github className="mr-2 h-5 w-5 text-primary" />
            View All Credentials
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-primary" />
          </span>
        </Button>
      </motion.div>
    </div>
  )
}
