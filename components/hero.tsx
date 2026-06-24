"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail, FileText, Twitter, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const roles = [
  "Full Stack Developer",
  "Computer Science Student",
  "CyberSecurity Enthusiast",
  "Problem Solver",
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          )
        },
        isDeleting ? 40 : 80
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] as const }
    }
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />
        <div className="absolute top-1/3 left-1/4 h-[200px] w-[200px] rounded-full bg-blue-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div
        className="container px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Profile Image with ring animation */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 p-[3px] animate-gradient-x">
              <div className="absolute inset-0 rounded-full bg-background" style={{ margin: "3px" }} />
            </div>
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-[3px] border-background shadow-xl">
              <img
                src="/Profile.png"
                alt="Mujeeb Ur Rehman"
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="gradient-text-animate">Mujeeb Ur Rehman</span>
            </h1>
            <div className="h-10">
              <p className="text-xl text-muted-foreground md:text-2xl">
                <span>{displayText}</span>
                <span className="inline-block w-[3px] h-7 bg-primary ml-1 animate-pulse" />
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="mx-auto max-w-[700px] text-lg text-muted-foreground/80 md:text-xl leading-relaxed"
            variants={itemVariants}
          >
            Computer Science student at Sukkur IBA University with a passion for software development and problem-solving. 
            I specialize in creating management applications, web development, and AI solutions using modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <Button size="lg" asChild className="group relative overflow-hidden">
              <Link href="/projects">
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="group relative overflow-hidden hover:border-primary/50">
              <Link href="/contact">
                <span className="relative z-10 flex items-center">
                  Get In Touch
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </span>
              </Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex space-x-4"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: "https://github.com/mujeeb-ali", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mujeeb-ur-rehman-shah/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:mujeebalishah147@gmail.com", label: "Email" },
              { icon: Twitter, href: "https://x.com/mujeeb-ali", label: "Twitter" },
              { icon: FileText, href: "/resume", label: "Resume", isLink: true },
            ].map((social, i) => {
              const Icon = social.icon
              return (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    {social.isLink ? (
                      <Link href={social.href} className="text-muted-foreground hover:text-primary">
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    ) : (
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    )}
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-medium">Scroll Down</span>
              <ChevronDown className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
