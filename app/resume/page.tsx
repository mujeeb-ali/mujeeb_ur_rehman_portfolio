"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Calendar, MapPin, Mail, Phone, Linkedin, Github } from "lucide-react"
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

          {/* Header Card */}
          <motion.div {...fadeInUp} className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Mujeeb Ur Rehman</CardTitle>
                <CardDescription className="text-lg">Aspiring SOC Analyst | Blue Team &amp; Security Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Khairpur Mir&apos;s, Sindh, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+92 325 2170112</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>mujeebalishah147@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-primary" />
                    <a href="https://linkedin.com/in/mujeeb-ur-rehman-shah" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/mujeeb-ur-rehman-shah</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-primary" />
                    <a href="https://github.com/mujeeb-ali" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/mujeeb-ali</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Summary */}
          <motion.div {...fadeInUp} className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Motivated Computer Science undergraduate at Sukkur IBA University specializing in SOC operations, threat detection, and incident response fundamentals. Hands-on experience with SIEM navigation, log analysis, network traffic analysis, and SOC workflows through practical labs (LetsDefend, Google Cloud SIEM) and certifications. Proficient in Python, Linux, and core networking protocols with a solid grasp of the MITRE ATT&amp;CK framework and NIST Incident Response life cycle. Seeking an Entry-Level SOC Analyst / Blue Team Entry Level Role to assist in monitoring, analyzing, and mitigating security events in a live SOC environment.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Skills */}
          <motion.div {...fadeInUp} className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Security Operations &amp; Concepts</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Incident Response Lifecycle", "Threat Detection", "Log Analysis", "Vulnerability Management", "MITRE ATT&CK Framework", "NIST CSF", "Phishing Analysis"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Security Tools &amp; Monitoring</h4>
                  <div className="flex flex-wrap gap-2">
                    {["SIEM (Google Cloud SIEM)", "Splunk Basics", "Wireshark", "Nmap", "tcpdump", "LetsDefend SOC Platform", "Chrome DevTools"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Networking &amp; Protocols</h4>
                  <div className="flex flex-wrap gap-2">
                    {["TCP/IP", "DNS", "HTTP/HTTPS", "Firewalls", "Network Traffic Analysis", "Subnetting"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Operating Systems</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Linux (Ubuntu/Debian CLI)", "Windows (Event Viewer, Command Line)", "Virtualization Basics"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Programming &amp; Scripting</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python (Automation/Parsing)", "SQL", "Bash (Basic)", "JavaScript", "C++"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Core Computer Science</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Computer Networks", "Operating Systems", "Database Systems", "Software Engineering"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications & Workshops */}
          <motion.div {...fadeInUp} className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Certifications &amp; Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Google Professional Cybersecurity Certificate — Coursera (2025)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Introduction to SOC — LetsDefend (2025)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Introduction to SIEM — Google Cloud (2025)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Introduction to Cybersecurity — Cisco &amp; IBM (2025)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Python, SQL &amp; Git Certifications — DataCamp (2024–2025)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cybersecurity Workshop — Lincoln Corner Khairpur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>SIBAFEST: Tackle with Tech — Sukkur IBA University</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cybersecurity & Technical Projects */}
          <motion.div {...fadeInUp} className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Cybersecurity &amp; Technical Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-b border-border pb-4 last:border-0">
                  <h4 className="font-semibold mb-1">SOC &amp; Security Lab Practice (LetsDefend / Google Cloud SIEM) | 2025</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-2">
                    <li><strong>Log &amp; Alert Analysis:</strong> Investigated simulated security alerts including phishing emails, brute-force login attempts, and suspicious network connections.</li>
                    <li><strong>Incident Triage:</strong> Utilized SIEM tools to analyze log sources (Windows Event Logs, HTTP traffic), identify Indicators of Compromise (IOCs), and document investigation steps using the MITRE ATT&amp;CK framework.</li>
                    <li><strong>PCAP Analysis:</strong> Analyzed network packet captures in Wireshark to inspect malicious payloads and identify unauthorized port scanning.</li>
                  </ul>
                </div>

                <div className="border-b border-border pb-4 last:border-0">
                  <h4 className="font-semibold mb-1">RentEase — Full-Stack Rental Web App (Secure Web Concepts) | 2025</h4>
                  <p className="text-sm text-muted-foreground mb-2">Tech Stack: Node.js, Express.js, MongoDB, JavaScript, HTML/CSS</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-2">
                    <li><strong>Authentication &amp; Validation:</strong> Implemented user authentication workflows and server-side input validation to guard against common web vulnerabilities (SQL/NoSQL injection, cross-site scripting fundamentals).</li>
                    <li><strong>API Security:</strong> Designed RESTful API endpoints enforcing structured data schemas and secure error handling.</li>
                  </ul>
                </div>

                <div className="border-b border-border pb-4 last:border-0">
                  <h4 className="font-semibold mb-1">AI Chatbot for Sukkur IBA University | 2025</h4>
                  <p className="text-sm text-muted-foreground mb-2">Tech Stack: Python, Flask, NLP</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-2">
                    <li>Developed an NLP-driven query engine using Python and Flask to automate student inquiry handling.</li>
                    <li>Ensured secure input sanitization for web queries processed through lightweight Flask endpoints.</li>
                  </ul>
                </div>

                <div className="border-b border-border pb-4 last:border-0">
                  <h4 className="font-semibold mb-1">Face Recognition Attendance System | 2025</h4>
                  <p className="text-sm text-muted-foreground mb-2">Tech Stack: Python, OpenCV</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-2">
                    <li>Built an automated identification system using computer vision techniques, applying frame preprocessing for reliable feature detection under inconsistent lighting.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div {...fadeInUp} className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-b border-border pb-4 last:border-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">BS Computer Science</h3>
                      <p className="text-primary font-medium">Sukkur IBA University — Khairpur Campus</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Aug 2023 – Present</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-2">CGPA: 3.01 / 4.00</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Relevant Coursework:</strong> Computer Networks, Operating Systems, Database Systems, Web Engineering, Data Structures &amp; Algorithms, Object-Oriented Programming.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Computer Science</Badge>
                    <Badge variant="secondary">Networking</Badge>
                    <Badge variant="secondary">Security</Badge>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">Intermediate (Pre-Engineering)</h3>
                      <p className="text-primary font-medium">SNAK Govt. Superior Science College, Khairpur Mir&apos;s</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Aug 2019 – May 2021</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Grade: A-1</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages */}
          <motion.div {...fadeInUp} className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 md:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">English:</span>
                    <span className="text-muted-foreground">Proficient</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Urdu:</span>
                    <span className="text-muted-foreground">Native</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Sindhi:</span>
                    <span className="text-muted-foreground">Native</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* References */}
          <motion.div {...fadeInUp} className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>References</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Available upon request.</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Download Button */}
          <motion.div {...fadeInUp} className="text-center">
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
