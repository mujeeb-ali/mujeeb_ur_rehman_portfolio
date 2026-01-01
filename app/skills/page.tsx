import { Skills } from "@/components/skills"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills - Mujeeb Ur Rehman",
  description: "Explore the technical skills and expertise of Mujeeb Ur Rehman in Java, Python, Web Development, and AI/ML.",
}

export default function SkillsPage() {
  return (
    <div className="pt-14">
      <Skills />
    </div>
  )
}