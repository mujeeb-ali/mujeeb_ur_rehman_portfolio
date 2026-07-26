import { Skills } from "@/components/skills"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills - Mujeeb Ur Rehman",
  description: "Explore the cybersecurity and technical skills of Mujeeb Ur Rehman in SOC operations, threat detection, SIEM, and security tools.",
}

export default function SkillsPage() {
  return (
    <div className="pt-14">
      <Skills />
    </div>
  )
}