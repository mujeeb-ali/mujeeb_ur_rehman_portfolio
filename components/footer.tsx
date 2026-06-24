"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Skills", href: "/skills" },
      { name: "Projects", href: "/projects" },
      { name: "Resume", href: "/resume" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      { name: "GitHub", href: "https://github.com/mujeeb-ali", icon: Github },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/mujeeb-ur-rehman-shah/", icon: Linkedin },
      { name: "Twitter", href: "https://x.com/mujeeb-ali", icon: Twitter },
      { name: "Email", href: "mailto:mujeebalishah147@gmail.com", icon: Mail },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] as const }
    }
  }

  return (
    <footer className="relative border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 group">
              <h3 className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300 inline-block">
                Mujeeb Ur Rehman
              </h3>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Computer Science Student at Sukkur IBA University, passionate about software development,
              AI, and creating innovative solutions.
            </p>
            <div className="flex items-center gap-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <a
                      href={social.href}
                      target={social.name !== "Email" ? "_blank" : undefined}
                      rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-foreground/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-foreground/80">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:mujeebalishah147@gmail.com"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  mujeebalishah147@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923252170112"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  +92 325 2170112
                </a>
              </li>
              <li className="text-muted-foreground">
                Khairpur Mir&apos;s, Pakistan
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {currentYear} Mujeeb Ur Rehman. All rights reserved. Built with{" "}
            <Heart className="h-3.5 w-3.5 inline-block text-red-500 fill-red-500 animate-pulse" />{" "}
            in Pakistan
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            Back to top
            <ArrowUp className="ml-2 h-4 w-4 transition-all duration-300 group-hover:-translate-y-1" />
          </Button>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  )
}
