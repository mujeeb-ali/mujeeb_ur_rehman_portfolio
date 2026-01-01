"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, FileText, Twitter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.4 }
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Profile Image */}
          <motion.div
            className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {/* Placeholder profile image - replace with your actual image */}
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <span className="text-4xl font-bold text-primary">MR</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div className="space-y-4" {...fadeInUp}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Mujeeb Ur Rehman</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-xl text-muted-foreground md:text-2xl">
              Computer Science Student & Software Developer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl"
            {...fadeInLeft}
          >
            Computer Science student at Sukkur IBA University with a passion for software development and problem-solving. 
            I specialize in creating management applications, web development, and AI solutions using modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            {...fadeInRight}
          >
            <Button size="lg" asChild className="group">
              <Link href="/projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 rotate-45 transition-transform group-hover:translate-y-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Get In Touch
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/mujeeb-ali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/mujeeb-ur-rehman-shah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="mailto:mujeebalishah147@gmail.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://x.com/mujeeb-ali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter / X</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="/resume"
                className="text-muted-foreground hover:text-primary"
              >
                <FileText className="h-5 w-5" />
                <span className="sr-only">Resume</span>
              </Link>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <Button variant="ghost" size="icon" asChild>
              <a href="#about" className="text-muted-foreground">
                <ArrowDown className="h-6 w-6" />
                <span className="sr-only">Scroll down</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}