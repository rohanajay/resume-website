"use client"
import { useState } from "react"
import { X, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import FormattedResume from "./formatted-resume"

interface ResumeViewerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ResumeViewer({ open, onOpenChange }: ResumeViewerProps) {
  const [downloadClicked, setDownloadClicked] = useState(false)

  const handleDownload = () => {
    setDownloadClicked(true)

    // In a real implementation, this would generate and download a PDF
    // Here we're simulating the download with a timeout
    setTimeout(() => {
      setDownloadClicked(false)
    }, 1500)

    // Create a blob with the resume text content
    const resumeText = `ROHAN AJAY
West Lafayette, IN|765-262-9485 | rajay@purdue.edu|linkedin.com/in/rohanajay

PROFILE
• Skills: Statistical Analysis, Generative AI, Software Development, Machine Learning, Data Visualization, Optimization, AI/ML model deployment, Cloud Data Engineering, Agile Methodology, Business Intelligence, Stakeholder Communication
• Tools: Java, Python, Springboot, Alteryx, PostgreSQL, Tableau, GCP, Snowflake, AWS, Azure, JIRA
• Certifications: Nvidia Certified Associate – Generative AI and LLMs, AWS Cloud Practitioner, Tableau Desktop Specialist, Microsoft Certified AZ900 – Azure Fundamentals, AI900 – Azure AI Fundamentals, Alteryx Designer Core

EDUCATION
Purdue University, Daniels School of Business
Master of Science in Business Analytics and Information Management
West Lafayette, IN
August 2024 – July 2025

PROFESSIONAL EXPERIENCE
Care.com
Software Engineering Intern – Applied Artificial Intelligence
West Lafayette, IN (Remote)
May 2025 - Present
• Collaborated with system architects to refine and extend the modular-monolithic Java Spring Boot architecture for Care Family Profiles, integrating Kafka event streams with Go adapters to improve service coordination and data propagation across modules
• Designed and implemented Model Context Protocol (MCP) based tooling and versioned CRUD RESTful APIs in Java and Go for PostgreSQL, ensuring robust data modeling, referential integrity and high throughput across core application services
• Engineered AI-driven development workflows with Cursor by crafting prompts, experimenting with multiple LLMs, and documenting system designs (ERDs, API specifications, AI-augmented pipelines) for full-stack code generation
• Established scalable AI evaluation frameworks that combine automated test generation, continuous integration hooks and human in the loop review processes to validate code quality, verify model-generated outputs and accelerate deployment cycles

Krenicki Center for Business Analytics and Machine Learning
Student Data Scientist and AI Engineer
West Lafayette, IN
October 2024 – May 2025
• Developed machine learning models using random forest and LSTM to detect and predict phantom inventory for a national retailer, improving stockout forecasting and operational accuracy through advanced data-driven techniques.
• Developed and deployed agentic AI solutions using Prediction Guard's secure LLM APIs to automate B2B sales pipelines, achieving significant reductions in sales cycle time and operational costs while increasing outreach and lead qualification efficiency.
• Designed and implemented a risk benchmarking framework for LLMs at Prediction Guard, systematically evaluating model robustness and prompt sensitivity under adversarial scenarios to guide enterprise security and reliability improvements.
• Led the development and deployment of AI-driven solutions for the Supreme Court of Indiana, including NLP-based sentiment analysis of judge surveys, workflow automation pilots, and a comprehensive evaluation of AI tools for synthetic media detection.

Goldman Sachs
Senior Data Analyst
Corporate Treasury Division – CTO Business Intelligence and Data Solutions.
Bengaluru, India
January 2021 – June 2024
• Optimized and fine-tuned machine learning models for fraud detection on Actimize and sanctions screening on Fircosoft, enhancing model accuracy and operational efficiency.
• Implemented Machine Learning and BI initiatives for KRI tracking and automation, enabling GS vs. client fail rate analysis, resulting in 3 FTE efficiency savings and $450,000 annual net gain
• Experience leading Agile product teams, participating in sprint planning, daily stand-ups, and iterative delivery cycles.
• Led and trained a team of 16 embedded BI professionals across Corporate Treasury Operations, facilitating self-sufficiency in BI tools and contributing to over 20 BI projects
• Executed migration of legacy Sybase IQ databases to AWS cloud, ensuring seamless data delivery and providing Compliance, Sanctions and Fraud teams with a centralized, efficient database equipped with visualization tools like AWS Quicksight
• Leveraged Alteryx and ETL pipelines to automate reporting, while managing the Treasury PostgreSQL database and building Tableau dashboards to track capacity, productivity, and team performance driving efficiency gains equivalent to 5 FTEs.

LEADERSHIP ACTIVITIES, AFFILIATIONS, HONORS
• TechPoint MIRA Awards 2025 Finalist – for innovation and higher education
• Best student paper award at the MWDSI paper conference – Automation of B2B Sales pipelines using Agentic AI
• A lifetime member of Beta Gamma Sigma which recognizes and honors the top 20% of graduate students from around the world in business schools accredited by The Association to Advance Collegiate Schools of Business
• Passionate musician with Trinity Grade 3 certification in Plectrum Guitar and Led a community of 200 plus musicians as student head of the Music Club of PES University
• Active volunteer at Aikya, Akshaya Patra Foundation – a non-profit organization fighting hunger by feeding 2.2M students daily`

    const blob = new Blob([resumeText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Rohan_Ajay_Resume.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2 text-primary" />
            Rohan Ajay - Resume
          </DialogTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="flex items-center gap-1"
              disabled={downloadClicked}
            >
              <Download className="h-4 w-4" />
              {downloadClicked ? "Downloading..." : "Download"}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)} className="text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden bg-muted rounded-md mt-4">
          <div className="w-full h-full min-h-[60vh] overflow-auto">
            <FormattedResume />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
