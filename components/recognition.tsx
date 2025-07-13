"use client"

import { motion } from "framer-motion"
import { Award, Music, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Recognition() {
  const achievements = [
    {
      title: "TechPoint MIRA Awards Finalist",
      description:
        "This was in recognition of our efforts in automating the entire data strategy of Indy Reads, a local non-profit organization whose mission is to achieve literacy for all",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "Best Student Paper Award",
      description:
        "At the MWDSI paper conference for our paper on 'Automating B2B Sales Pipelines using Generative AI'",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "Beta Gamma Sigma Member",
      description:
        "Recognizes and honors the top 20% of graduate students from around the world in business schools accredited by The Association to Advance Collegiate Schools of Business",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "Kaggle Competition",
      description:
        "Secured third place in the Data Mining Kaggle Competition by detecting bankruptcy using credit risk",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "Music Club Leadership",
      description:
        "Passionate musician with Trinity Grade 3 certification in Plectrum Guitar and Led a community of 200 plus musicians as student head of the Music Club of PES University",
      icon: <Music className="h-6 w-6 text-primary" />,
    },
    {
      title: "Volunteer Work",
      description:
        "Active volunteer at Aikya, Akshaya Patra Foundation – a non-profit organization fighting hunger by feeding 2.2M students daily. Volunteered with various CSR initiatives at Goldman Sachs and PES University",
      icon: <Heart className="h-6 w-6 text-primary" />,
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
      <h2 className="section-heading">RECOGNITION</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
      >
        {achievements.map((achievement, index) => (
          <motion.div key={index} variants={item}>
            <Card className="h-full bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{achievement.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <p className="mt-2 text-muted-foreground">{achievement.description}</p>
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
