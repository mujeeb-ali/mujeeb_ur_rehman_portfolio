"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-6xl"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, skills, and passion for development
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Personal Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">My Story</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I&apos;m a passionate Computer Science student at Sukkur IBA University 
                      with a strong foundation in programming, software development, and 
                      cybersecurity fundamentals. My interest in technology began with curiosity 
                      and evolved into building secure and practical solutions through Android 
                      management applications and web-based systems.
                    </p>
                    <p>
                      I specialize in Java, Python, and web technologies, with hands-on experience 
                      in developing projects such as AI chatbots, management systems, and 
                      security-aware web applications. I have a growing interest in cybersecurity, 
                      particularly in web application security, secure coding practices, and 
                      vulnerability awareness.
                    </p>
                    <p>
                      I enjoy problem-solving, analyzing systems for potential risks, and 
                      collaborating in team environments. Outside of development, I actively 
                      participate in university events, attend cybersecurity and tech sessions, 
                      and assist students in computer labs. I am eager to deepen my cybersecurity 
                      skills and gain real-world experience through a paid internship where I can 
                      contribute to both development and security-focused tasks.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Based in Khairpur Mir&apos;s, Pakistan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">CGPA: 3.04</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">BS Computer Science (Ongoing)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">40+ wpm Typing Speed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills & Interests */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Current Focus */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Current Focus</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Frontend Development</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Backend Development</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Node.js</Badge>
                        <Badge variant="secondary">Express</Badge>
                        <Badge variant="secondary">PostgreSQL</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Tools & Platforms</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Git</Badge>
                        <Badge variant="secondary">Docker</Badge>
                        <Badge variant="secondary">AWS</Badge>
                        <Badge variant="secondary">Vercel</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Learning & Goals */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Currently Learning</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>• Advanced React patterns and performance optimization</p>
                    <p>• Cloud architecture and microservices</p>
                    <p>• Machine Learning fundamentals with Python</p>
                    <p>• Mobile development with React Native</p>
                  </div>
                </CardContent>
              </Card>

              {/* Values */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">What I Value</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>• <strong>Clean Code:</strong> Readable, maintainable, and scalable solutions</p>
                    <p>• <strong>User Experience:</strong> Building interfaces that users love</p>
                    <p>• <strong>Continuous Learning:</strong> Staying updated with latest technologies</p>
                    <p>• <strong>Collaboration:</strong> Working effectively in team environments</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}