"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Network,
  Terminal,
  Code2,
  Monitor,
  GitBranch,
} from "lucide-react"

const skillCategories = [
  {
    title: "Security Operations",
    icon: Shield,
    skills: [
      { name: "Incident Response Lifecycle", level: 85 },
      { name: "Threat Detection & Triage", level: 82 },
      { name: "Log Analysis", level: 88 },
      { name: "Vulnerability Management", level: 78 },
      { name: "MITRE ATT&CK Framework", level: 80 },
      { name: "Phishing Analysis", level: 82 }
    ],
    color: "from-red-500 to-orange-500",
    iconBg: "bg-red-500/10"
  },
  {
    title: "Security Tools & SIEM",
    icon: Monitor,
    skills: [
      { name: "Google Cloud SIEM", level: 85 },
      { name: "Splunk (Basics)", level: 72 },
      { name: "Wireshark", level: 82 },
      { name: "Nmap", level: 80 },
      { name: "tcpdump", level: 78 },
      { name: "LetsDefend Platform", level: 85 }
    ],
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500/10"
  },
  {
    title: "Networking & Protocols",
    icon: Network,
    skills: [
      { name: "TCP/IP", level: 88 },
      { name: "DNS", level: 85 },
      { name: "HTTP/HTTPS", level: 90 },
      { name: "Firewalls", level: 80 },
      { name: "Network Traffic Analysis", level: 82 },
      { name: "Subnetting", level: 75 }
    ],
    color: "from-teal-500 to-green-500",
    iconBg: "bg-teal-500/10"
  },
  {
    title: "Programming & Scripting",
    icon: Code2,
    skills: [
      { name: "Python", level: 88 },
      { name: "SQL", level: 82 },
      { name: "Bash", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "C++", level: 78 }
    ],
    color: "from-green-500 to-emerald-500",
    iconBg: "bg-green-500/10"
  },
  {
    title: "Operating Systems",
    icon: Terminal,
    skills: [
      { name: "Linux (Ubuntu/Debian CLI)", level: 85 },
      { name: "Windows Event Viewer", level: 80 },
      { name: "Windows Command Line", level: 82 },
      { name: "Virtualization Basics", level: 75 }
    ],
    color: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-500/10"
  },
  {
    title: "Core CS Fundamentals",
    icon: GitBranch,
    skills: [
      { name: "Data Structures & Algorithms", level: 82 },
      { name: "Computer Networks", level: 88 },
      { name: "Operating Systems", level: 80 },
      { name: "Database Systems", level: 85 },
      { name: "Software Engineering", level: 82 }
    ],
    color: "from-indigo-500 to-purple-500",
    iconBg: "bg-indigo-500/10"
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
              Security operations, threat detection, and technical proficiencies
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
            <h3 className="text-2xl font-semibold mb-6">Additional Skills & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "NIST CSF", "NIST Incident Response Lifecycle", "PCAP Analysis",
                "IOC Identification", "Google Professional Cybersecurity",
                "Python Automation", "Secure Coding", "Web Security",
                "Java", "Node.js", "Git", "Chrome DevTools"
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
