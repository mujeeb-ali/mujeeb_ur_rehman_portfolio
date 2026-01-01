"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  // Code,
  Database,
  // Palette,
  Server, 
  Smartphone, 
  Cloud,
  GitBranch,
  Monitor
} from "lucide-react"

const skillCategories = [
  {
    title: "Web Development",
    icon: Monitor,
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "Responsive Design", level: 85 },
      { name: "Frontend Development", level: 87 },
      { name: "Backend Development", level: 80 }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Programming Languages",
    icon: Server,
    skills: [
      { name: "Java", level: 92 },
      { name: "Python", level: 88 },
      { name: "C++", level: 80 },
      { name: "C#", level: 70 }
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Software Development",
    icon: Database,
    skills: [
      { name: "GUI Development", level: 85 },
      { name: "CLI Applications", level: 80 },
      { name: "Object-Oriented Programming", level: 88 },
      { name: "Data Structures & Algorithms", level: 82 },
      { name: "Software Design", level: 80 }
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI & Machine Learning",
    icon: Cloud,
    skills: [
      { name: "Natural Language Processing", level: 75 },
      { name: "Computer Vision", level: 78 },
      { name: "Face Recognition", level: 80 },
      { name: "Chatbot Development", level: 82 }
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Tools & Productivity",
    icon: GitBranch,
    skills: [
      { name: "MS Word", level: 90 },
      { name: "MS Excel", level: 92 },
      { name: "Version Control (Git)", level: 80 },
      { name: "Problem Solving", level: 88 },
      { name: "Analytical Skills", level: 85 }
    ],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Mobile & Android",
    icon: Smartphone,
    skills: [
      { name: "Android Development", level: 85 },
      { name: "Management Apps", level: 88 },
      { name: "Mobile UI Design", level: 80 }
    ],
    color: "from-teal-500 to-blue-500"
  }
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-7xl"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  custom={categoryIndex}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-lg">{category.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {skill.level}%
                            </Badge>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                duration: 1, 
                                delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Skills */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-6">Other Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "Jest", "Cypress", "Storybook", "Stripe", "Auth0", "Supabase",
                "Headless CMS", "Microservices", "WebRTC", "Web3", "Blockchain",
                "Machine Learning", "Data Visualization", "SEO", "Performance Optimization"
              ].map((tech) => (
                <Badge key={tech} variant="outline" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}