import { About } from "@/components/about"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Mujeeb Ur Rehman",
  description: "Learn more about Mujeeb Ur Rehman, Computer Science student at Sukkur IBA University with a passion for software development.",
}

export default function AboutPage() {
  return (
    <div className="pt-14">
      <About />
    </div>
  )
}