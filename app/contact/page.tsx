import { Contact } from "@/components/contact"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Mujeeb Ur Rehman",
  description: "Get in touch with Mujeeb Ur Rehman for software development opportunities and collaborations.",
}

export default function ContactPage() {
  return (
    <div className="pt-14">
      <Contact />
    </div>
  )
}