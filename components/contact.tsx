"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, Sparkles } from "lucide-react"
import { useToast } from "@/components/ui/toast"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      showToast("Please fix the errors in the form", "error")
      return
    }
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        showToast("Message sent successfully! I'll get back to you soon.", "success")
        setFormData({ name: '', email: '', subject: '', message: '' })
        setErrors({})
      } else {
        showToast(data.error || "Failed to send message. Please try again.", "error")
      }
    } catch {
      showToast("An error occurred. Please try again later.", "error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] as const }
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[300px] w-[300px] rounded-full bg-purple-500/3 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear from you. Send me a message and let&apos;s discuss how we can work together.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", desc: "Drop me a line anytime", value: "mujeebalishah147@gmail.com", href: "mailto:mujeebalishah147@gmail.com" },
                  { icon: Phone, title: "Phone", desc: "Call me for urgent matters", value: "+92 325 2170112", href: "tel:+923252170112" },
                  { icon: MapPin, title: "Location", desc: "Currently based in", value: "Mustafa Colony Bhurgari, Khairpur Mir's (66020), Pakistan" },
                ].map((item, i) => (
                  <Card key={i} className="border-2 border-border/50 hover:border-primary/20 transition-all duration-500 card-hover overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="relative">
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground mb-2">{item.desc}</p>
                      {item.href ? (
                        <a href={item.href} className="text-primary hover:underline transition-all duration-300 hover:translate-x-0.5 inline-block">
                          {item.value}
                        </a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}

                <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Quick Response</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      I typically respond within 24 hours during weekdays.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="border-2 border-border/50 hover:border-primary/20 transition-all duration-500 card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Send Message
                    <Sparkles className="h-5 w-5 text-primary" />
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${errors.name ? "border-red-500" : ""}`}
                        />
                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className={`transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${errors.email ? "border-red-500" : ""}`}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What&apos;s this about?"
                        className={`transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${errors.subject ? "border-red-500" : ""}`}
                      />
                      {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello..."
                        className={`min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${errors.message ? "border-red-500" : ""}`}
                      />
                      {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group relative overflow-hidden transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Prefer a different way to connect? Find me on:
            </p>
            <div className="flex justify-center gap-4">
              {[
                { name: "LinkedIn", href: "https://www.linkedin.com/in/mujeeb-ur-rehman-shah/" },
                { name: "GitHub", href: "https://github.com/mujeeb-ali" },
                { name: "WhatsApp", href: "https://wa.me/923252170112" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-primary/5 border border-primary/20 text-sm font-semibold text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary hover:bg-primary/15 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
