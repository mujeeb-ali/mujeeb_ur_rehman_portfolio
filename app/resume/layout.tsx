import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume - Mujeeb Ur Rehman",
  description: "Download the resume of Mujeeb Ur Rehman, Computer Science student specializing in software development and AI.",
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
