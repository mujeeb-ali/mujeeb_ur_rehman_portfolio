import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Blog />
      <Contact />
    </div>
  )
}
