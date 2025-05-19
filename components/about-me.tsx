"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

export default function AboutMe() {
  return (
    <div>
      <h2 className="section-heading">ABOUT ME</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <Card className="bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="col-span-1">
                <div className="relative w-full aspect-square max-w-xs mx-auto rounded-xl overflow-hidden border-4 border-primary/20">
                  <img
                    src="/images/about/about_picture.png"
                    alt="Rohan playing guitar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="col-span-2 space-y-4">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">Hello there, I'm Rohan! </h3>
                </div>

                <p className="text-muted-foreground">
                  I am a Data Scientist and Software Engineer with a passion for developing AI-driven solutions that
                  solve real-world problems. With expertise in Artificial Intelligence, Machine Learning and Software
                  Engineering, I specialize in building scalable AI/ML systems and deploying them to production.
                </p>

                <p className="text-muted-foreground">
                  My experience spans across various domains including Generative AI, Natural Language Processing,
                  Predictive Analytics, Software Development and Data Visualization. I enjoy working with cutting-edge
                  technologies and frameworks to create innovative solutions.
                </p>

                <p className="text-muted-foreground">
                  When I am not working, you can find me making music, playing my guitar, reading about the latest
                  advancements in AI, or volunteering for community initiatives. I believe in continuous learning and am
                  always excited to take on new challenges.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
