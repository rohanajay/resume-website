"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Linkedin, Send, FileText, CheckCircle, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { DocumentViewer } from "./document-viewer"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  })
  const [resumeOpen, setResumeOpen] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Add an ID to the section element when it mounts
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.id = "contact"
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields before sending your message.",
        variant: "destructive",
      })
      return
    }

    setIsSending(true)
    setIsSent(false)

    try {
      // EmailJS configuration
      const serviceId = "service_sftioe7"
      const templateId = "template_1430kmq"
      const publicKey = "vLpGcfiID6g5NISSz"

      // Send the email
      const result = await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)

      console.log("Email sent successfully:", result.text)

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Reset form
      setFormData({ from_name: "", from_email: "", message: "" })
      setIsSent(true)

      // Reset sent status after 3 seconds
      setTimeout(() => {
        setIsSent(false)
      }, 3000)
    } catch (error) {
      console.error("Failed to send email:", error)
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSending(false)
    }
  }

  const contactInfo = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      label: "Resume",
      value: "View/Download Resume",
      action: () => setResumeOpen(true),
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      label: "Location",
      value: "Chicago, IL",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      label: "Phone",
      value: "+1 (765)-262-9485",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      label: "Email",
      value: "ajayrohan0509@gmail.com",
    },
    {
      icon: <Linkedin className="h-6 w-6 text-primary" />,
      label: "LinkedIn",
      value: "linkedin.com/in/rohanajay",
      link: "https://linkedin.com/in/rohanajay",
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

  // Button animations
  const buttonVariants = {
    idle: { scale: 1 },
    sending: { scale: 0.98 },
    sent: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
  }

  return (
    <div ref={sectionRef}>
      {/* Resume Viewer Modal */}
      <DocumentViewer
        open={resumeOpen}
        onOpenChange={setResumeOpen}
        title="Rohan Ajay - Resume"
        documentUrl="#"
        documentName="Rohan_Ajay_Resume.txt"
        documentType="resume"
      />

      <h2 className="section-heading">CONTACT ME</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={item}>
                <Card className="bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300 cursor-pointer">
                  <CardContent className="p-4" onClick={info.action ? info.action : undefined}>
                    <div className="flex items-center">
                      <div className="mr-4">{info.icon}</div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : info.action ? (
                          <button
                            className="font-medium hover:text-primary transition-colors text-left w-full"
                            onClick={info.action}
                          >
                            {info.value}
                          </button>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

          <Card className="bg-secondary/50">
            <CardContent className="p-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="from_email"
                    name="from_email"
                    type="email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>

                <motion.div variants={buttonVariants} animate={isSending ? "sending" : isSent ? "sent" : "idle"}>
                  <Button type="submit" className="w-full group" disabled={isSending}>
                    {isSending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : isSent ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
