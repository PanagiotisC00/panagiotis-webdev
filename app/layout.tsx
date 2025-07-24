import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Panagiotis Chrysanthou - Software Engineer",
  description:
    "Full-stack web developer specializing in modern, responsive websites and web applications. Professional web development services with SEO optimization and hosting solutions.",
  keywords: "full-stack developer, web developer, responsive websites, modern web applications, SEO optimization, web hosting, professional web development, custom websites, bilingual websites, API development, database integration, Vercel deployment, Next.js, TypeScript, React, Tailwind CSS, web design, frontend development, backend development, Cyprus web developer, European web developer",
  authors: [{ name: "Panagiotis Chrysanthou" }],
  openGraph: {
    title: "Panagiotis Chrysanthou - Software Engineer",
    description:
      "Full-stack web developer specializing in modern, responsive websites and web applications. Professional web development services with SEO optimization and hosting solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panagiotis Chrysanthou - Software Engineer",
    description:
      "Full-stack web developer specializing in modern, responsive websites and web applications. Professional web development services with SEO optimization and hosting solutions.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Panagiotis Chrysanthou",
    "jobTitle": "Full-Stack Web Developer",
    "url": "https://panagiotis-portfolio.vercel.app",
    "email": "panagiotischrysanthou2@gmail.com",
    "sameAs": [
      "https://github.com/PanagiotisC00"
    ],
    "knowsAbout": [
      "Next.js",
      "TypeScript", 
      "React",
      "Full-Stack Development",
      "Web Development",
      "API Development",
      "Database Integration",
      "SEO Optimization"
    ],
    "description": "Full-stack web developer specializing in modern, responsive websites and web applications with SEO optimization and hosting solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CY"
    }
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
