"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number, e: React.MouseEvent) => {
    // Stop event propagation to prevent card click from interfering
    e.stopPropagation()

    // If already expanded, collapse it; otherwise expand it
    setExpandedId(expandedId === id ? null : id)
  }

  // Check if the item is expanded
  const isExpanded = (id: number) => expandedId === id

  const experiences = [
    {
      id: 1,
      company: "Care.com",
      logo: "/images/logos/care_logo.png",
      position: "Data Science and Applied AI Engineering Fullstack Intern",
      location: "Remote",
      period: "May 2025 - Present",
      responsibilities: [
        "Spearheaded LLM adoption across engineering, analytics, and growth delivering end-to-end solutions which achieved 4+ FTE savings and recognized across departments securing executive buy-in for further scalable and reusable GenAI initiatives",
        "Designed and deployed N8N workflows that parsed 2000+ daily marketing metrics across verticals and generated Slack-based summaries using LLMs to reduce manual reporting time by 90% and enabled daily performance monitoring across marketing and growth teams",
        "Built multi-variable regression models identifying location-specific provider gaps which delivered insights to optimize fulfillment and seeker conversion by 20%, influencing strategic provider acquisition planning for high-impact MSAs",
        "Designed a reusable bootstrapping and unit testing framework using LLMs, integrating structured documentation to Deploy Java services with 3x faster development cycles and higher consistency across teams",
      ],
    },
    {
      id: 2,
      company: "Krenicki Center for Business Analytics and Machine Learning",
      logo: "/images/logos/purdue_logo.png",
      position: "Student Data Scientist and AI Engineer",
      location: "West Lafayette, IN",
      period: "October 2025 - May 2025",
      responsibilities: [
        "Developed Machine Learning models using random forest and LSTM to detect and predict phantom inventory for a national retailer, improving stockout forecasting and operational accuracy through advanced data-driven techniques.",
        "Developed and deployed Agentic AI solutions using Prediction Guard's secure LLM APIs to automate B2B sales pipelines, achieving significant reductions in sales cycle time and operational costs while increasing outreach and lead qualification efficiency.",
        "Designed and implemented a Risk Benchmarking framework for LLMs at Prediction Guard, systematically evaluating model robustness and prompt sensitivity under adversarial scenarios to guide enterprise security and reliability improvements.",
        "Led the development and deployment of AI-driven solutions for the Supreme Court of Indiana, including NLP-based sentiment analysis of judge surveys, workflow automation pilots, and a comprehensive evaluation of AI tools for synthetic media detection.",
      ],
    },
    {
      id: 3,
      company: "Goldman Sachs",
      logo: "/images/logos/gs_logo.png",
      position: "Senior Data Analyst",
      location: "Bengaluru, India",
      period: "January 2021 – June 2024",
      progression: [
        {
          role: "Senior Data Analyst, Corporate Treasury Division – CTO Business Intelligence and Data Solutions",
          period: "January 2023 – June 2024",
          highlights: [
            "Optimized and fine-tuned Machine Learning models for fraud detection on Actimize and sanctions screening on Fircosoft, enhancing model accuracy and operational efficiency.",
            "Implemented Machine Learning and BI initiatives for KRI tracking and automation, enabling GS vs. client fail rate analysis, resulting in 3 FTE efficiency savings and $450,000 annual net gain",
            "Led and trained a team of 16 embedded BI professionals across Corporate Treasury Operations, facilitating self-sufficiency in BI tools and contributing to over 20 BI projects",
            "Executed migration of legacy Sybase IQ databases to AWS cloud, ensuring seamless data delivery and providing Compliance, Sanctions and Fraud teams with a centralized, efficient database equipped with visualization tools like AWS Quicksight",
          ],
        },
        {
          role: "Junior Data Analyst",
          period: "June 2021 – December 2022",
          highlights: [
            "Leveraged Alteryx to automate manual reporting and implemented ETL data strategy to provide access to previously unavailable data serving as a key enabler to future BI initiatives",
            "Managed the Treasury PostgreSQL database and developed Tableau dashboards to assess capacity, productivity, and team performance, achieving an efficiency gain equivalent to 5 FTEs",
          ],
        },
        {
          role: "STEM Intern",
          period: "January 2021 – June 2021",
          highlights: [
            "Developed comprehensive data expertise as a Goldman Sachs - Data School graduate, mastering querying, preparation, blending, warehousing, and defensive design practices",
            "Executed a project management overhaul by implementing JIRA to replace outdated Excel-based manual tracking",
            "Enabled efficient simultaneous project tracking with smart Gantt charts for effective timeline visualization, significantly enhancing project transparency and efficiency across the organization.",
          ],
        },
      ],
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
      <h2 className="section-heading text-center md:text-left">PROFESSIONAL EXPERIENCE</h2>

      <div className="relative mt-12">
        {/* Timeline line - only visible on md screens and up */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 z-0 hidden md:block"></div>

        {/* Mobile timeline line - centered for small screens */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30 z-0 md:hidden"></div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={item}
              className={`mb-12 flex justify-center items-start ${
                index % 2 === 0 ? "md:justify-end" : "md:justify-start"
              }`}
            >
              {/* Timeline dot - only visible on md screens and up */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary z-20 hidden md:block"></div>

              {/* Mobile timeline dot - only visible on small screens */}
              <div className="absolute left-4 w-4 h-4 rounded-full bg-primary z-20 md:hidden"></div>

              {/* Content card */}
              <div className={`relative w-full md:w-5/12 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} pl-12 md:pl-0`}>
                <Card className="experience-card overflow-hidden bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start">
                      <div className="mr-3 sm:mr-4 mt-1">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-background/70 p-2 flex items-center justify-center">
                          <img
                            src={exp.logo || "/placeholder.svg"}
                            alt={exp.company}
                            className="max-w-full max-h-full"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div className="pr-10 sm:pr-12">
                            <h3 className="text-lg sm:text-xl font-semibold">{exp.company}</h3>
                            <p className="text-base sm:text-lg text-primary">{exp.position}</p>
                            <div className="flex flex-wrap items-center mt-2 text-xs sm:text-sm text-muted-foreground">
                              <span className="mr-2">{exp.location}</span>
                              <span className="mx-2 hidden sm:inline">•</span>
                              <div className="flex items-center mt-1 sm:mt-0">
                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                <span>{exp.period}</span>
                              </div>
                            </div>
                          </div>
                          <div className="absolute right-3 top-3">
                            <button
                              className={`w-8 h-8 flex items-center justify-center rounded-full hover:bg-background/50 transition-colors focus:outline-none ${
                                isExpanded(exp.id) ? "ring-2 ring-primary/50" : ""
                              }`}
                              onClick={(e) => toggleExpand(exp.id, e)}
                              aria-label={isExpanded(exp.id) ? "Collapse" : "Expand"}
                              type="button"
                            >
                              {isExpanded(exp.id) ? (
                                <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                              ) : (
                                <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                              )}
                            </button>
                          </div>
                        </div>

                        <AnimatePresence>
                          {isExpanded(exp.id) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4"
                            >
                              {exp.company === "Goldman Sachs" ? (
                                <div className="space-y-6">
                                  {exp.progression?.map((role, idx) => (
                                    <div key={idx} className="border-l-2 border-primary/30 pl-4">
                                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                                        <h4 className="font-semibold text-primary text-sm sm:text-base">{role.role}</h4>
                                        <Badge variant="outline" className="mt-1 sm:mt-0 sm:ml-2 inline-flex w-fit">
                                          {role.period}
                                        </Badge>
                                      </div>
                                      <ul className="space-y-2 mt-2">
                                        {role.highlights.map((highlight, hIdx) => (
                                          <li key={hIdx} className="flex items-start">
                                            <span className="text-primary mr-2 flex-shrink-0">•</span>
                                            <span className="text-xs sm:text-sm">{highlight}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <ul className="space-y-2">
                                  {exp.responsibilities?.map((resp, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <span className="text-primary mr-2 flex-shrink-0">•</span>
                                      <span className="text-sm">{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
