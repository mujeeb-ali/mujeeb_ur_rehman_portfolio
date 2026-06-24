"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Trophy, Target, Lightbulb, Sparkles } from "lucide-react"

const achievements = [
  {
    year: "2025",
    title: "Sports Gala Participation",
    description: "Participated in Sports Gala 2025 at Sukkur IBA University",
    icon: Trophy,
    category: "Sports",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    year: "2024",
    title: "Math Olympiad Competition",
    description: "Competed in the Math Olympiad at Sukkur IBA University",
    icon: Target,
    category: "Academic",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    year: "2024",
    title: "SIBA FEST Participant",
    description: "Participated in SIBA FEST at Sukkur IBA University",
    icon: Award,
    category: "Event",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    year: "2024",
    title: "Cyber Security Training",
    description: "Attended Two-Day Cyber Security Session by Lincoln Corner",
    icon: Lightbulb,
    category: "Training",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    year: "2023",
    title: "University Admission",
    description: "Started BS Computer Science at Sukkur IBA University Khairpur Campus",
    icon: Award,
    category: "Education",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    year: "2021",
    title: "Pre-Engineering Excellence",
    description: "Secured A1 Grade in Intermediate Pre-Engineering",
    icon: Trophy,
    category: "Education",
    gradient: "from-rose-500 to-red-500"
  },
]

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] as const }
    }
  }

  return (
    <section id="achievements" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-primary/3 blur-3xl" />
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
              Achievements & Timeline
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey and accomplishments throughout the years
            </p>
          </motion.div>

          <div className="relative">
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
                    <Card className="ml-0 md:ml-20 border-2 border-border/50 hover:border-primary/20 transition-all duration-500 card-hover border-l-4 border-l-primary overflow-hidden group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      <CardContent className="p-6 relative">
                        <div className="flex items-start gap-4">
                          <div className="absolute -left-4 md:-left-16 mt-1">
                            <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${achievement.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="h-6 w-6" />
                            </div>
                          </div>

                          <div className="flex-1 ml-12 md:ml-0">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge
                                variant="outline"
                                className="font-semibold transition-all duration-300 group-hover:border-primary/50"
                              >
                                <Calendar className="h-3 w-3 mr-1" />
                                {achievement.year}
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                              >
                                {achievement.category}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                              {achievement.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
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
