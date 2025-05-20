"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code,
  Calendar,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Layers,
  BarChart,
  Globe,
  ExternalLink,
  Github,
  Youtube,
  Play,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number, e: React.MouseEvent) => {
    // Stop event propagation to prevent card click from interfering
    e.stopPropagation()

    // If already expanded, collapse it; otherwise expand it
    setExpandedId(expandedId === id ? null : id)
  }

  // Check if the item is expanded
  const isExpanded = (id: number) => expandedId === id

  // Function to open GitHub link directly in a new tab
  const openGitHubPaper = (url: string, e: React.MouseEvent) => {
    e.preventDefault()
    window.open(url, "_blank")
  }

  // Function to open YouTube video in a new tab
  const openYouTubeVideo = (url: string, e: React.MouseEvent) => {
    e.preventDefault()
    window.open(url, "_blank")
  }

  const projects = [
    {
      id: 1,
      title: "Automating B2B Sales Processes Using Agentic AI",
      period: "Jan 2025 – Apr 2025",
      summary:
        "Deployed autonomous AI agents to streamline and benchmark B2B sales pipelines, balancing automation and human oversight.",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      highlights: [
        "Designed and trained Hermes-Llama-70B agents via LangChain, communicating with Prediction Guard's API to run end-to-end sales dialogues.",
        "Generated and tested synthetic buyer personas to compare AI-driven versus traditional workflows, measuring throughput, lead conversion, and cycle time.",
        "Identified optimal autonomy levels—achieving a 30% reduction in manual handoffs while maintaining customer satisfaction.",
      ],
      skills: ["LangChain", "Llama 70B", "Agentic AI", "API Integration"],
      githubUrl: "https://github.com/rohanajay/research-papers/blob/main/Automating_B2B_Sales_Using_Agentic_AI.pdf",
      videoUrl: "https://youtu.be/IkefBKis3eY?si=_7-49BMPvKbsPUjl",
    },
    {
      id: 2,
      title: "Detecting & Predicting Phantom Inventory with Random Forest & LSTM",
      period: "Jan 2025 – Apr 2025",
      summary:
        'Built machine-learning pipelines to detect "ghost" stock discrepancies and forecast future stockouts in retail inventory systems.',
      icon: <Layers className="h-6 w-6 text-primary" />,
      highlights: [
        "Analyzed transaction logs & stock-level time series to uncover misplacement, system glitches, and shrinkage anomalies.",
        "Developed a Random Forest classifier for real-time phantom-inventory detection (93% accuracy) and LSTM models for 30-day stockout forecasting (RMSE ≈ 12 units).",
        "Clustered anomalous patterns to inform targeted audits, reducing phantom inventory write-offs by 18%.",
      ],
      skills: ["Random Forest", "LSTM Time Series", "Clustering", "Inventory Analytics"],
      githubUrl:
        "https://github.com/rohanajay/research-papers/blob/main/Detecting%20and%20Predicting%20Phanton%20Inventory%20Using%20Random%20Forests%20and%20LSTM.pdf",
      videoUrl: "https://youtu.be/7GUXGPq7R1M?si=LGwkvx2sS20kO4N4",
    },
    {
      id: 3,
      title: "Enhancing Judicial Efficiency & Access to Justice Using AI",
      period: "Jan 2025 – Apr 2025",
      summary: "Leveraged NLP and survey analysis to guide responsible AI integration in Indiana's court system.",
      icon: <Code className="h-6 w-6 text-primary" />,
      highlights: [
        "Processed responses from 100+ judges using Python NLP pipelines and Azure Language AI for sentiment & topic extraction.",
        "Mapped pain points—data privacy concerns, accountability gaps—and proposed workflow enhancements (e.g., automated benchbook checks).",
        "Delivered a best-practices framework balancing AI-driven productivity with judicial oversight.",
      ],
      skills: ["Python NLP", "Azure Language AI", "Survey Analytics", "Generative AI"],
      githubUrl:
        "https://github.com/rohanajay/research-papers/blob/main/Enhancing%20Judicial%20Efficiency%20and%20Access%20to%20Justice%20Using%20AI.pdf",
      videoUrl: "https://youtu.be/GTVDXvHmF60?si=R6MBoyhVLjJ0Zm1C",
    },
    {
      id: 4,
      title: "Risk Benchmarking for Large Language Models",
      period: "Jan 2025 – Apr 2025",
      summary:
        "Established an adversarial-prompt framework to quantify LLM robustness under subtle input perturbations.",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      highlights: [
        "Created adversarial samples with Hermes-3-Llama-3.1-70B and evaluated response deviation using an 8B parameter variant.",
        "Measured Prompt Deviation Rate (PDR) under letter- and sentence-level attacks; found structural changes spike PDR by 45% vs. < 5% for minor typos.",
        "Conducted statistical analyses confirming consistent model sensitivity, informing enterprise risk-mitigation strategies.",
      ],
      skills: ["LLM Evaluation", "Adversarial Testing", "Statistical Analysis", "AI Risk"],
      githubUrl: "https://github.com/rohanajay/research-papers/blob/main/Risk%20Benchmarking%20for%20LLMs.pdf",
      videoUrl: "https://youtu.be/GLCanqHLmMo?si=073pcP2IxSBUFd4I",
    },
    {
      id: 5,
      title: "Analytics & Modeling for Point-Based Loyalty Programs",
      period: "Jan 2025 – Apr 2025",
      summary:
        "Investigated campaign design's impact on shopper engagement and incremental sales for a major U.S. retailer.",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      highlights: [
        "Ran A/B tests on offer types (per-visit incentives vs. point multipliers), controlling for pre-campaign spend.",
        "Built predictive models (linear regression, tree-based) to forecast campaign lift; simple linear models matched complex methods (±2% error).",
        "Recommended optimized incentive structures that boosted visit frequency by 8% with minimal budget increase.",
      ],
      skills: ["Forecasting", "Predictive Modeling", "A/B Testing", "Data Visualization"],
      githubUrl: "https://github.com/rohanajay/research-papers/blob/main/Analytics_For_Loyalty_Campaigns.pdf",
      videoUrl: "https://youtu.be/LTVhOPqcxeM?si=oDDKTQOMxu8cV1VF&t=21",
    },
    {
      id: 6,
      title: "Translation-Need Mapping Tool for SIL International",
      period: "Jan 2025 – Apr 2025",
      summary:
        "Developed an interactive Python/HTML application to identify underserved language communities and guide SIL's expansion.",
      icon: <Globe className="h-6 w-6 text-primary" />,
      highlights: [
        'Aggregated demographic, linguistic, and existing-translation data to pinpoint translation "deserts."',
        "Integrated LLM prompts to surface sociocultural barriers and crowd-sourced feedback for each region.",
        "Delivered a web-based dashboard enabling stakeholders to filter by language family, region, and resource availability.",
      ],
      skills: ["Python", "Web Development (HTML/CSS)", "Geospatial Analysis", "LLM Integration"],
      githubUrl: "https://github.com/rohanajay/research-papers/blob/main/Mapping_Path_to_translations.pdf",
      videoUrl: "https://youtu.be/NL5knCowE5g?si=e9LVI9Py3vtgQ43n",
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
      <h2 className="section-heading text-center md:text-left">PROJECTS</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Card className="project-card h-full bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300 flex flex-col">
              <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-start">
                  <div className="mr-3 sm:mr-4 mt-1 flex-shrink-0">{project.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div className="pr-10 sm:pr-12">
                        <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                        <div className="flex items-center mt-2 text-xs sm:text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          <span>{project.period}</span>
                        </div>
                      </div>
                      <div className="absolute right-3 top-3">
                        <button
                          className={`w-8 h-8 flex items-center justify-center rounded-full hover:bg-background/50 transition-colors focus:outline-none ${
                            isExpanded(project.id) ? "ring-2 ring-primary/50" : ""
                          }`}
                          onClick={(e) => toggleExpand(project.id, e)}
                          aria-label={isExpanded(project.id) ? "Collapse" : "Expand"}
                          type="button"
                        >
                          {isExpanded(project.id) ? (
                            <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                          ) : (
                            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                          )}
                        </button>
                      </div>
                    </div>

                    <p className="mt-2 text-sm sm:text-base text-muted-foreground">{project.summary}</p>

                    <AnimatePresence>
                      {isExpanded(project.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <h4 className="font-semibold mb-2 text-sm sm:text-base">Highlights:</h4>
                          <ul className="space-y-2 mb-4">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-2 flex-shrink-0">•</span>
                                <span className="text-xs sm:text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Action Buttons - Always at the bottom */}
                <div className="mt-auto pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    className="group border-2 border-primary bg-transparent hover:bg-primary/10 text-foreground w-full"
                    onClick={(e) => openYouTubeVideo(project.videoUrl, e)}
                  >
                    <span className="flex items-center justify-center">
                      <Youtube className="mr-2 h-4 w-4 text-primary" />
                      Watch Video
                      <Play className="ml-2 h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-1 transition-transform text-primary" />
                    </span>
                  </Button>

                  <Button
                    className="bg-primary/10 hover:bg-primary/20 text-primary border-none w-full text-sm sm:text-base"
                    onClick={(e) => openGitHubPaper(project.githubUrl, e)}
                  >
                    <span className="flex items-center justify-center">
                      <Github className="mr-2 h-4 w-4" />
                      View Paper
                      <ExternalLink className="ml-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
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
