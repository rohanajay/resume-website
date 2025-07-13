"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
  const education = [
    {
      school: "Purdue University, Daniels School of Business",
      logo: "/images/logos/purdue_logo.png",
      degree: "Master of Science in Business Analytics and Information Management",
      location: "West Lafayette, IN",
      period: "August 2024 - August 2025",
    },
    {
      school: "PES University, College of Engineering",
      logo: "/images/logos/pes_logo.jpeg",
      degree: "Bachelor of Technology in Electronics and Communications Engineering",
      location: "Bengaluru, India",
      period: "August 2017 - May 2021",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div>
      <h2 className="section-heading">EDUCATION</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-6 mt-8"
      >
        {education.map((edu, index) => (
          <motion.div key={index} variants={item}>
            <Card className="overflow-hidden bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-16 h-16 rounded-lg bg-background/70 p-2 flex items-center justify-center">
                      <img src={edu.logo || "/placeholder.svg"} alt={edu.school} className="max-w-full max-h-full" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.school}</h3>
                    <p className="text-lg text-muted-foreground">{edu.degree}</p>
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <span>{edu.location}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
