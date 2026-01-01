"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react"
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
      {
        name: "GitHub",
        href: "https://github.com/mujeeb-ali",
        icon: Github,
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/mujeeb-ur-rehman-shah/",
        icon: Linkedin,
      },
      {
        name: "Twitter",
        href: "https://x.com/mujeeb-ali",
        icon: Twitter,
      },
      {
        name: "Email",
        href: "mailto:mujeebalishah147@gmail.com",
        icon: Mail,
      },
    ],
  }

  return (
    <footer className="relative border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold gradient-text">
                Mujeeb Ur Rehman
              </h3>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Computer Science Student at Sukkur IBA University, passionate about software development, 
              AI, and creating innovative solutions.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
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

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:mujeebalishah147@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  mujeebalishah147@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923252170112"
                  className="hover:text-primary transition-colors"
                >
                  +92 325 2170112
                </a>
              </li>
              <li className="text-muted-foreground">
                Khairpur Mir&apos;s, Pakistan
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Mujeeb Ur Rehman. All rights reserved. Built with 🤍 By Mujeeb ur rehman In Pakistan
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group hover:bg-primary/10"
          >
            Back to top
            <ArrowUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </Button>
        </motion.div>
      </div>

      {/* Bottom gradient decoration */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  )
}
