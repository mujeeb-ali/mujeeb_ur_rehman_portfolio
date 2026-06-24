"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "Building AI Chatbots with NLP",
    description: "Learn how to create intelligent chatbots using Natural Language Processing techniques and Python.",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "AI/ML",
    tags: ["Python", "NLP", "AI"],
    slug: "building-ai-chatbots-nlp"
  },
  {
    id: 2,
    title: "Face Recognition Systems Explained",
    description: "A comprehensive guide to implementing face recognition systems using computer vision libraries.",
    date: "2024-11-20",
    readTime: "10 min read",
    category: "Computer Vision",
    tags: ["Python", "OpenCV", "AI"],
    slug: "face-recognition-systems"
  },
  {
    id: 3,
    title: "Modern Web Development with JavaScript",
    description: "Exploring modern JavaScript frameworks and best practices for building responsive web applications.",
    date: "2024-10-10",
    readTime: "6 min read",
    category: "Web Development",
    tags: ["JavaScript", "HTML", "CSS"],
    slug: "modern-web-development"
  },
]

export function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
    <section id="blog" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/3 blur-3xl" />
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
              Articles & Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge and experiences from my learning journey
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <motion.div key={article.id} variants={itemVariants}>
                <Card className="h-full border-2 border-border/50 hover:border-primary/30 transition-all duration-500 card-hover overflow-hidden group">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                      <span>&bull;</span>
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="w-fit transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                    >
                      {article.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {article.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-primary/10 transition-all duration-300"
                      asChild
                    >
                      <Link href={`/blog/${article.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
