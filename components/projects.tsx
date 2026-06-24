"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink, Github, Filter, Search, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "AI Chatbot for Sukkur IBA University",
    description: "Created an intelligent chatbot to assist students with university-related queries such as admissions, departments, and campus information using NLP techniques.",
    icon: "🤖",
    gradient: "from-blue-500 to-purple-500",
    technologies: ["Python", "NLP", "Natural Language Processing", "AI"],
    category: "AI/ML",
    liveUrl: null,
    githubUrl: null,
    featured: false
  },
  {
    id: 2,
    title: "RentEase – Rental Management Web Application",
    description: "Developed a full-stack rental management web app for property listings, tenant management, and rental tracking with a responsive user interface.",
    icon: "🏠",
    gradient: "from-green-500 to-teal-500",
    technologies: ["HTML", "CSS", "JavaScript", "Frontend Development"],
    category: "Web Development",
    liveUrl: null,
    githubUrl: null,
    featured: false
  },
  {
    id: 3,
    title: "Face Recognition Attendance System",
    description: "Implemented a facial recognition-based attendance system using computer vision to automatically identify students and record attendance accurately.",
    icon: "👤",
    gradient: "from-pink-500 to-rose-500",
    technologies: ["Python", "Computer Vision", "Face Recognition", "OpenCV"],
    category: "AI/ML",
    liveUrl: null,
    githubUrl: null,
    featured: false
  },
  {
    id: 4,
    title: "File Compression Tool",
    description: "Implemented Huffman Coding and LZW algorithms for efficient file compression with added encryption for data security.",
    icon: "📦",
    gradient: "from-orange-500 to-red-500",
    technologies: ["Java", "GUI", "Algorithms", "Encryption"],
    category: "Desktop App",
    liveUrl: null,
    githubUrl: null,
    featured: false
  },
  {
    id: 5,
    title: "ATM Management System",
    description: "Developed a banking application supporting secure transactions, balance inquiries, cash withdrawal, and fund transfers with a user-friendly GUI.",
    icon: "💳",
    gradient: "from-cyan-500 to-blue-500",
    technologies: ["Java", "GUI", "JavaFX", "Banking System"],
    category: "Desktop App",
    liveUrl: null,
    githubUrl: null,
    featured: false
  },
  {
    id: 6,
    title: "Maze Solver Game",
    description: "Designed a user-controlled maze game featuring move tracking, path validation, and unsolvable maze detection with an interactive GUI.",
    icon: "🎮",
    gradient: "from-purple-500 to-indigo-500",
    technologies: ["Java", "GUI", "Game Development", "Algorithms"],
    category: "Desktop App",
    liveUrl: null,
    githubUrl: null,
    featured: false
  },
  {
    id: 7,
    title: "Sindhri Hotel Management System",
    description: "Built a console-based hotel management system with room booking, check-in/check-out, and automated billing features.",
    icon: "🏨",
    gradient: "from-yellow-500 to-orange-500",
    technologies: ["C++", "CLI", "Console Application"],
    category: "Desktop App",
    liveUrl: null,
    githubUrl: null,
    featured: false
  }
]

const categories = ["All", "AI/ML", "Web Development", "Desktop App"]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

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
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 h-[300px] w-[300px] rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-[250px] w-[250px] rounded-full bg-purple-500/3 blur-3xl" />
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
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A selection of projects that showcase my skills and experience in software development
            </p>

            <div className="max-w-md mx-auto mb-6">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="text"
                  placeholder="Search projects by name, technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "transition-all duration-300",
                    selectedCategory === category
                      ? "shadow-lg shadow-primary/25"
                      : "hover:border-primary/50 hover:text-primary"
                  )}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                custom={index}
                layout
              >
                <Card className="group h-full overflow-hidden border-2 border-border/50 hover:border-primary/30 transition-all duration-500 card-hover">
                  <div className="relative aspect-video overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <span className="text-7xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        {project.icon}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                      <div className="flex gap-2 w-full">
                        {project.liveUrl && (
                          <Button size="sm" className="flex-1" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="secondary" className="flex-1" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="shrink-0">
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-base mb-4 leading-relaxed">
                      {project.description}
                    </CardDescription>

                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-muted-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                      {project.liveUrl && (
                        <Button size="sm" className="flex-1 group/btn" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover/btn:-translate-y-0.5" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" className="flex-1 group/btn" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
            </motion.div>
          )}

          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Button size="lg" variant="outline" asChild className="group hover:border-primary/50 hover:text-primary transition-all duration-300">
              <a
                href="https://github.com/mujeeb-ali"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                View All Projects on GitHub
                <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


