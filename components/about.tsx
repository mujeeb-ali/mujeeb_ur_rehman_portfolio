"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Award, Sparkles } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
      transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] as const }
    }
  }

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/2 blur-3xl" />
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
            <div className="flex items-center justify-center gap-3">
              <div className="relative">
                <img
                  src="/Profile.png"
                  alt="Mujeeb Ur Rehman"
                  className="h-12 w-12 rounded-full border-2 border-border/40 object-cover"
                />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-50 blur-sm -z-10" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
              Get to know more about my journey into cybersecurity and SOC operations
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="border-2 border-border/50 hover:border-primary/20 transition-all duration-500 card-hover overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 relative">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    My Story
                    <Sparkles className="h-5 w-5 text-primary" />
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I&apos;m a Computer Science student at Sukkur IBA University specializing in
                      SOC operations, threat detection, and incident response. My journey into
                      cybersecurity began with a curiosity about how systems work and evolved into
                      hands-on practice with SIEM navigation, log analysis, and network traffic
                      analysis through platforms like LetsDefend and Google Cloud SIEM.
                    </p>
                    <p>
                      I have a solid foundation in Python, Linux, and core networking protocols
                      with a strong grasp of the MITRE ATT&amp;CK framework and NIST Incident
                      Response life cycle. I&apos;ve built projects ranging from AI chatbots to
                      secure web applications, always with an emphasis on security best practices.
                    </p>
                    <p>
                      I enjoy analyzing systems for potential risks, investigating security alerts,
                      and collaborating in team environments. I actively participate in
                      cybersecurity workshops, university tech events, and continuously build my
                      skills through practical labs and certifications. I am seeking an entry level
                      SOC Analyst / Blue Team role where I can monitor, analyze, and mitigate
                      security events in a live environment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border/50 hover:border-primary/20 transition-all duration-500 card-hover overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 relative">
                  <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 group/fact">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover/fact:bg-primary/20 transition-colors duration-300">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground group-hover/fact:text-foreground transition-colors duration-300">Based in Khairpur Mir&apos;s, Pakistan</span>
                    </div>
                    <div className="flex items-center gap-3 group/fact">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover/fact:bg-primary/20 transition-colors duration-300">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground group-hover/fact:text-foreground transition-colors duration-300">CGPA: 3.01</span>
                    </div>
                    <div className="flex items-center gap-3 group/fact">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover/fact:bg-primary/20 transition-colors duration-300">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground group-hover/fact:text-foreground transition-colors duration-300">BS Computer Science (Ongoing)</span>
                    </div>
                    <div className="flex items-center gap-3 group/fact">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover/fact:bg-primary/20 transition-colors duration-300">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground group-hover/fact:text-foreground transition-colors duration-300">40+ wpm Typing Speed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="border-2 border-border/50 hover:border-primary/20 transition-all duration-500 card-hover overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 relative">
                  <h3 className="text-2xl font-semibold mb-4">Current Focus</h3>
                  <div className="space-y-4">
                    <div className="group/focus">
                      <h4 className="font-medium mb-2 group-hover/focus:text-primary transition-colors duration-300">Security Operations</h4>
                      <div className="flex flex-wrap gap-2">
                        {["SIEM", "Log Analysis", "Threat Detection", "Incident Response"].map(tech => (
                          <Badge key={tech} variant="secondary" className="hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="group/focus">
                      <h4 className="font-medium mb-2 group-hover/focus:text-primary transition-colors duration-300">Security Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Wireshark", "Nmap", "tcpdump", "LetsDefend"].map(tech => (
                          <Badge key={tech} variant="secondary" className="hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="group/focus">
                      <h4 className="font-medium mb-2 group-hover/focus:text-primary transition-colors duration-300">Networking & Protocols</h4>
                      <div className="flex flex-wrap gap-2">
                        {["TCP/IP", "DNS", "HTTP/HTTPS", "Firewalls"].map(tech => (
                          <Badge key={tech} variant="secondary" className="hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border/50 hover:border-primary/20 transition-all duration-500 card-hover overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 relative">
                  <h3 className="text-2xl font-semibold mb-4">Currently Learning</h3>
                  <div className="space-y-3">
                    {[
                      "Advanced SIEM analysis and threat hunting",
                      "Splunk and cloud security platforms",
                      "Python automation for security tasks",
                      "Network security and penetration testing fundamentals"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group/learn">
                        <span className="h-2 w-2 mt-2 rounded-full bg-primary shrink-0 group-hover/learn:scale-150 transition-transform duration-300" />
                        <span className="text-muted-foreground group-hover/learn:text-foreground transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border/50 hover:border-primary/20 transition-all duration-500 card-hover overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 relative">
                  <h3 className="text-2xl font-semibold mb-4">What I Value</h3>
                  <div className="space-y-3">
                    {[
                      { title: "Security First", desc: "Prioritizing secure practices in every solution" },
                      { title: "Incident Readiness", desc: "Being prepared to detect and respond to threats" },
                      { title: "Continuous Learning", desc: "Staying updated with the latest security landscape" },
                      { title: "Collaboration", desc: "Working effectively in SOC and team environments" },
                    ].map((item, i) => (
                      <div key={i} className="p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300 group/value">
                        <p><strong className="group-hover/value:text-primary transition-colors duration-300">{item.title}:</strong> <span className="text-muted-foreground">{item.desc}</span></p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
