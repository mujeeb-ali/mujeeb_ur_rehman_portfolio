"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Database,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Monitor,
  Code2,
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
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500/10"
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java", level: 92 },
      { name: "Python", level: 88 },
      { name: "C++", level: 80 },
      { name: "C#", level: 70 }
    ],
    color: "from-green-500 to-emerald-500",
    iconBg: "bg-green-500/10"
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
    color: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-500/10"
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
    color: "from-orange-500 to-red-500",
    iconBg: "bg-orange-500/10"
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
    color: "from-indigo-500 to-purple-500",
    iconBg: "bg-indigo-500/10"
  },
  {
    title: "Mobile & Android",
    icon: Smartphone,
    skills: [
      { name: "Android Development", level: 85 },
      { name: "Management Apps", level: 88 },
      { name: "Mobile UI Design", level: 80 }
    ],
    color: "from-teal-500 to-blue-500",
    iconBg: "bg-teal-500/10"
  }
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    <section id="skills" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-500/3 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  custom={categoryIndex}
                >
                  <Card className="h-full border-2 border-border/50 hover:border-primary/20 transition-all duration-500 card-hover overflow-hidden group">
                    <CardHeader className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      <CardTitle className="flex items-center gap-3 relative">
                        <div className={`p-2.5 rounded-xl ${category.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`h-5 w-5 text-${category.color.split(" ")[0].replace("from-", "")}`} />
                        </div>
                        <span className="text-lg">{category.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 relative">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-1.5 group/skill">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium group-hover/skill:text-primary transition-colors duration-300">
                              {skill.name}
                            </span>
                            <Badge
                              variant="secondary"
                              className="text-xs transition-all duration-300 group-hover/skill:bg-primary/10 group-hover/skill:text-primary"
                            >
                              {skill.level}%
                            </Badge>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${category.color} relative`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{
                                duration: 1,
                                delay: categoryIndex * 0.1 + skillIndex * 0.08,
                                ease: [0.175, 0.885, 0.32, 1]
                              }}
                            >
                              <div className="absolute inset-0 bg-white/20 shimmer" />
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

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
                <Badge
                  key={tech}
                  variant="outline"
                  className="px-3 py-1.5 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                >
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
