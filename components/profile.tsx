"use client"

import { motion } from "framer-motion"
import { Code, Database, Cpu, BrainCircuit, Server, LineChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Profile() {
  const technicalSkills = [
    "Statistical Analysis",
    "Machine Learning",
    "Generative AI",
    "Software Development",
    "Data Visualization",
    "Optimization",
    "AI/ML model deployment",
    "Cloud Data Engineering",
    "Agile Methodology",
    "Business Intelligence",
    "Product development",
    "Stakeholder Communication",
  ]

  const toolCategories = [
    {
      name: "Programming & Databases",
      icon: <Code className="h-6 w-6 text-primary" />,
      tools: [
        { name: "Python", logo: "/images/logos/python_logo.png" },
        { name: "Java", logo: "/images/logos/java_logo.png" },
        { name: "R", logo: "/images/logos/r_logo.svg" },
        { name: "Go", logo: "/images/logos/go_logo.png" },
        { name: "SQL", logo: "/images/logos/sql_logo.png" },
        { name: "PostgreSQL", logo: "/images/logos/postgresql_logo.png" },
        { name: "Snowflake", logo: "/images/logos/snowflake_logo.png" },
        { name: "MongoDB", logo: "/images/logos/mongodb_logo.webp" },
      ],
    },
    {
      name: "Generative AI & ML",
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      tools: [
        { name: "LangChain", logo: "/images/logos/langchain_logo.jpeg" },
        { name: "Hugging Face", logo: "/images/logos/huggingface_logo.png" },
        { name: "Llama", logo: "/images/logos/llama_logo.jpeg" },
        { name: "OpenAI", logo: "/images/logos/openai_logo.webp" },
        { name: "PyTorch", logo: "/images/logos/pytorch_logo.png" },
        { name: "TensorFlow", logo: "/images/logos/tensorflow_logo.png" },
        { name: "Scikit-learn", logo: "/images/logos/sklearn_logo.png" },
        { name: "CrewAI", logo: "/images/logos/crew_ai_logo.webp" },
      ],
    },
    {
      name: "Cloud & Infrastructure",
      icon: <Server className="h-6 w-6 text-primary" />,
      tools: [
        { name: "AWS", logo: "/images/logos/aws_logo.png" },
        { name: "Azure", logo: "/images/logos/azure_logo.png" },
        { name: "GCP", logo: "/images/logos/gcp_logo.png" },
        { name: "Docker", logo: "/images/logos/docker_logo.jpeg" },
        { name: "Kubernetes", logo: "/images/logos/kubernetes_logo.png" },
        { name: "Kafka", logo: "/images/logos/kafka_logo.png" },
        { name: "Spring", logo: "/images/logos/spring_logo.svg" },
        { name: "Streamlit", logo: "/images/logos/streamlit_logo.png" },
      ],
    },
    {
      name: "Data & Analytics",
      icon: <LineChart className="h-6 w-6 text-primary" />,
      tools: [
        { name: "Tableau", logo: "/images/logos/tableau_logo.png" },
        { name: "Alteryx", logo: "/images/logos/alteryx_logo.png" },
        { name: "Power BI", logo: "/images/logos/power_bi_logo.png" },
        { name: "AWS Quicksight", logo: "/images/logos/aws_logo.png" },
        { name: "Pandas", logo: "/images/logos/pandas_logo.png" },
        { name: "NumPy", logo: "/images/logos/numpy_logo.png" },
      ],
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
      <h2 className="section-heading">SKILLS</h2>

      {/* Technical Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 mb-12"
      >
        <Card className="bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <Cpu className="h-7 w-7 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, idx) => (
                <Badge
                  key={idx}
                  className="text-base py-2.5 px-5 bg-primary/10 hover:bg-primary/20 text-primary border-none"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tools & Technologies */}
      <h3 className="text-xl font-semibold mb-6 flex items-center">
        <Database className="h-6 w-6 text-primary mr-3" />
        Tools & Technologies
      </h3>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        {toolCategories.map((category, index) => (
          <motion.div key={index} variants={item}>
            <Card className="h-full bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300 overflow-hidden">
              <CardContent className="p-7">
                <div className="flex items-center gap-5 mb-7">
                  <div className="w-18 h-18 rounded-full bg-primary/10 flex items-center justify-center p-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-4 mt-5">
                  {category.tools.map((tool, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="bg-background/50 hover:bg-background/80 transition-colors flex items-center gap-2.5 py-2.5 px-5 text-base font-medium"
                    >
                      <img src={tool.logo || "/placeholder.svg"} alt={tool.name} className="w-6 h-6" />
                      {tool.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
