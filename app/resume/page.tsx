"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Calendar, MapPin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="pt-14 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Resume
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Download my resume or view my professional experience below
            </p>
            <Button size="lg" asChild>
              <a 
                href="/Mujeeb_Ur_Rehman_Resume.pdf" 
                download="Mujeeb_Ur_Rehman_Resume.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  fetch('/Mujeeb_Ur_Rehman_Resume.pdf')
                    .then(response => response.blob())
                    .then(blob => {
                      const url = window.URL.createObjectURL(blob);
                      const link = document.createElement('a');
                      link.href = url;
                      link.download = 'Mujeeb_Ur_Rehman_Resume.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      window.URL.revokeObjectURL(url);
                    });
                }}
                className="inline-flex items-center cursor-pointer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF Resume
              </a>
            </Button>
          </motion.div>

          {/* Personal Information */}
          <motion.div 
            {...fadeInUp}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Mujeeb Ur Rehman</CardTitle>
                <CardDescription className="text-lg">Computer Science Student & Software Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>mujeebalishah147@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+92 325 2170112</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Khairpur Mir&apos;s, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    <Link href="/" className="hover:underline">
                      Portfolio Website
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Summary */}
          <motion.div 
            {...fadeInUp}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Computer Science student at Sukkur IBA University with a strong foundation in programming and 
                  a passion for software development. Specialized in creating management applications for Android, 
                  web development, and AI solutions. Proficient in Java, Python, C++, and web technologies with 
                  experience in building diverse projects from chatbots to management systems. Strong analytical 
                  and problem-solving skills with excellent proficiency in MS Office and a typing speed of 40+ wpm. 
                  Eager team player committed to sharing knowledge and helping others achieve their goals.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div 
            {...fadeInUp}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Current Education */}
                <div className="border-b border-border pb-6 last:border-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">BS Computer Science</h3>
                      <p className="text-primary font-medium">Sukkur IBA University Khairpur Campus</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Aug 2023 - Present</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>Khairpur Mir&apos;s, Pakistan</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
                    <li>Current CGPA: 3.04</li>
                    <li>Focus on Software Development, AI, and Web Technologies</li>
                    <li>Active participant in SIBA FEST and Math Olympiad</li>
                    <li>Attended Two-Day Cyber Security Session by Lincoln Corner</li>
                    <li>Participated in Sports Gala 2025</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Computer Science</Badge>
                    <Badge variant="secondary">Software Engineering</Badge>
                    <Badge variant="secondary">AI & ML</Badge>
                    <Badge variant="secondary">Web Development</Badge>
                  </div>
                </div>

                {/* Intermediate */}
                <div className="border-b border-border pb-6 last:border-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">Intermediate (Pre-Engineering)</h3>
                      <p className="text-primary font-medium">SNAK Govt. Superior Science College</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Aug 2019 - May 2021</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>Khairpur Mir&apos;s, Pakistan</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
                    <li>Secured A1 Grade</li>
                    <li>Specialized in Mathematics, Physics, and Chemistry</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Pre-Engineering</Badge>
                    <Badge variant="secondary">A1 Grade</Badge>
                  </div>
                </div>

                {/* Matriculation */}
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">Matriculation (SSC)</h3>
                      <p className="text-primary font-medium">Govt. Naz Pilot Secondary High School</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Aug 2017 - Mar 2019</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>Khairpur Mir&apos;s, Pakistan</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
                    <li>Secured A Grade</li>
                    <li>Strong foundation in Science and Mathematics</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Matriculation</Badge>
                    <Badge variant="secondary">A Grade</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Academic Projects */}
          <motion.div 
            {...fadeInUp}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Academic Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-b border-border pb-4 last:border-0">
                  <h4 className="font-semibold mb-2">AI Chatbot for Sukkur IBA University</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Created an intelligent chatbot to assist students with university-related queries such as 
                    admissions, departments, and campus information using NLP techniques.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">NLP</Badge>
                    <Badge variant="secondary">AI</Badge>
                  </div>
                </div>

                <div className="border-b border-border pb-4 last:border-0">
                  <h4 className="font-semibold mb-2">Face Recognition Attendance System</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Implemented a facial recognition-based attendance system using computer vision to automatically 
                    identify students and record attendance accurately.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                    <Badge variant="secondary">OpenCV</Badge>
                  </div>
                </div>

                <div className="border-b border-border pb-4 last:border-0">
                  <h4 className="font-semibold mb-2">RentEase – Rental Management Web Application</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Developed a full-stack rental management web app for property listings, tenant management, 
                    and rental tracking with a responsive user interface.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                  </div>
                </div>

                <div className="border-b border-border pb-4 last:border-0">
                  <h4 className="font-semibold mb-2">File Compression Tool</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Implemented Huffman Coding and LZW algorithms for efficient file compression with 
                    added encryption for data security.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">GUI</Badge>
                    <Badge variant="secondary">Algorithms</Badge>
                  </div>
                </div>

                <div className="border-b border-border pb-4 last:border-0">
                  <h4 className="font-semibold mb-2">ATM Management System</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Developed a banking application supporting secure transactions, balance inquiries, 
                    cash withdrawal, and fund transfers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">GUI</Badge>
                    <Badge variant="secondary">Banking</Badge>
                  </div>
                </div>

                <div className="border-b border-border pb-4 last:border-0">
                  <h4 className="font-semibold mb-2">Maze Solver Game</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Designed a user-controlled maze game featuring move tracking, path validation, 
                    and unsolvable maze detection.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">GUI</Badge>
                    <Badge variant="secondary">Game Dev</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Sindhri Hotel Management System</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Built a console-based hotel management system with room booking, check-in/check-out, 
                    and automated billing features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">CLI</Badge>
                    <Badge variant="secondary">Management</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Python", "C++", "C#", "JavaScript", "HTML5", "CSS3"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Web Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Frontend Development", "Backend Development", "Responsive Design", "Full Stack"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">AI & Machine Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Natural Language Processing", "Computer Vision", "Face Recognition", "Chatbot Development"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Software Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {["GUI Development", "CLI Applications", "Android Development", "Management Apps", "OOP"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tools & Productivity</h4>
                  <div className="flex flex-wrap gap-2">
                    {["MS Word", "MS Excel", "Git", "Problem Solving", "Analytical Skills", "Team Management"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Extra Curriculum */}
          <motion.div 
            {...fadeInUp}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Extra Curriculum Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1">✓</div>
                  <div>
                    <p className="text-muted-foreground">Attended a Two-Day Cyber Security Session by Lincoln Corner</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">✓</div>
                  <div>
                    <p className="text-muted-foreground">Participated in SIBA FEST at Sukkur IBA University</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">✓</div>
                  <div>
                    <p className="text-muted-foreground">Competed in the Math Olympiad at Sukkur IBA University</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">✓</div>
                  <div>
                    <p className="text-muted-foreground">Took part in the Sports Gala 2025 at Sukkur IBA University</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Download Button */}
          <motion.div 
            {...fadeInUp}
            className="text-center"
          >
            <Button size="lg" asChild>
              <a 
                href="/Mujeeb_Ur_Rehman_Resume.pdf" 
                download="Mujeeb_Ur_Rehman_Resume.pdf"
                className="inline-flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Full Resume (PDF)
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}