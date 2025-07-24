import { promises as fs } from "fs"
import path from "path"
import HeroSection from "./components/HeroSection"
import WebPortfolioSection from "./components/WebPortfolioSection"
import AboutSection from "./components/AboutSection"

import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

async function getContent() {
  const filePath = path.join(process.cwd(), "data", "english.json")
  const fileContents = await fs.readFile(filePath, "utf8")
  return JSON.parse(fileContents)
}

export default async function Home() {
  const content = await getContent()

  return (
    <main className="min-h-screen bg-black">
      <HeroSection content={content.hero} />
      <WebPortfolioSection content={content.webPortfolio} />
      <AboutSection content={content.about} />

      <ContactSection content={content.contact} />
      <Footer />
    </main>
  )
}
