import { Projects } from "@/components/projects"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Mujeeb Ur Rehman",
  description: "View the portfolio of projects by Mujeeb Ur Rehman including AI Chatbot, RentEase, Face Recognition System, and more.",
}

export default function ProjectsPage() {
  return (
    <div className="pt-14">
      <Projects />
    </div>
  )
}