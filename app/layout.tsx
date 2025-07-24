import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Panagiotis Chrysanthou - Software Engineer",
  description:
    "B.Sc. Computer Engineering, M.Sc. Computer Science. Full-stack developer specializing in modern web technologies and software engineering.",
  keywords: "full-stack developer, computer engineering, computer science, web development, Next.js, TypeScript, software engineering",
  authors: [{ name: "Panagiotis Chrysanthou" }],
  openGraph: {
    title: "Panagiotis Chrysanthou - Software Engineer",
    description:
      "B.Sc. Computer Engineering, M.Sc. Computer Science. Full-stack developer specializing in modern web technologies and software engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panagiotis Chrysanthou - Software Engineer",
    description:
      "B.Sc. Computer Engineering, M.Sc. Computer Science. Full-stack developer specializing in modern web technologies and software engineering.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
