"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Trophy, Target, Lightbulb } from "lucide-react"

const achievements = [
  {
    year: "2025",
    title: "Sports Gala Participation",
    description: "Participated in Sports Gala 2025 at Sukkur IBA University",
    icon: Trophy,
    category: "Sports"
  },
  {
    year: "2024",
    title: "Math Olympiad Competition",
    description: "Competed in the Math Olympiad at Sukkur IBA University",
    icon: Target,
    category: "Academic"
  },
  {
    year: "2024",
    title: "SIBA FEST Participant",
    description: "Participated in SIBA FEST at Sukkur IBA University",
    icon: Award,
    category: "Event"
  },
  {
    year: "2024",
    title: "Cyber Security Training",
    description: "Attended Two-Day Cyber Security Session by Lincoln Corner",
    icon: Lightbulb,
    category: "Training"
  },
  {
    year: "2023",
    title: "University Admission",
    description: "Started BS Computer Science at Sukkur IBA University Khairpur Campus",
    icon: Award,
    category: "Education"
  },
  {
    year: "2021",
    title: "Pre-Engineering Excellence",
    description: "Secured A1 Grade in Intermediate Pre-Engineering",
    icon: Trophy,
    category: "Education"
  },
]

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="achievements" className="py-20 md:py-32 bg-secondary/30">
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
              Achievements & Timeline
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey and accomplishments throughout the years
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 hidden md:block" />

            <div className="space-y-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <Card className="ml-0 md:ml-20 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="absolute -left-4 md:-left-16 mt-1">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white shadow-lg">
                              <Icon className="h-6 w-6" />
                            </div>
                          </div>

                          <div className="flex-1 ml-12 md:ml-0">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant="outline" className="font-semibold">
                                <Calendar className="h-3 w-3 mr-1" />
                                {achievement.year}
                              </Badge>
                              <Badge variant="secondary">{achievement.category}</Badge>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                              {achievement.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
