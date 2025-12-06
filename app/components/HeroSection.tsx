import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Globe } from "lucide-react"
import Link from "next/link"

interface HeroContent {
  headline: string
  name: string
  mission: string
  education: string
  description: string
  cta: {
    primary: string
    secondary: string
  }
}

export default function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Animated Code Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-green-400/20 font-mono text-sm animate-pulse">
          {"const webDeveloper = {"}
          <br />
          {'  name: "Panagiotis Chrysanthou",'}
          <br />
          {'  stack: ["Next.js", "Supabase"],'}
          <br />
          {'  mission: "building web solutions"'}
          <br />
          {"};"}
        </div>
        <div className="absolute bottom-32 right-10 text-cyan-400/20 font-mono text-sm animate-pulse delay-1000">
          {"function buildWebApp() {"}
          <br />
          {"  return nextjs + supabase + success;"}
          <br />
          {"}"}
        </div>
      </div>

      {/* Terminal Window */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Header */}
          <div className="bg-gray-800 rounded-t-lg p-3 flex items-center space-x-2 mb-0">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex-1 text-center">
              <span className="text-gray-400 text-sm font-mono">panagiotis@webdev-terminal:~$</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="bg-gray-900 rounded-b-lg p-6 border border-gray-700">
            <div className="font-mono text-green-400 mb-4">
              <span className="text-gray-500">$</span> ./introduce --role=web-developer
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono">
              {content.name}
            </h1>

            <div className="font-mono text-cyan-400 mb-2">
              <span className="text-gray-500">$</span> cat specialization.txt
            </div>
            <h2 className="text-lg md:text-xl font-mono text-white mb-6">{content.headline}</h2>

            <div className="font-mono text-green-400 mb-2">
              <span className="text-gray-500">$</span> echo $MISSION
            </div>
            <p className="text-base md:text-lg mb-6 text-white font-mono">{content.mission}</p>

            <div className="font-mono text-purple-400 mb-2">
              <span className="text-gray-500">$</span> cat education.txt
            </div>
            <p className="text-sm md:text-base mb-4 text-white font-mono">{content.education}</p>

            <div className="font-mono text-cyan-400 mb-2">
              <span className="text-gray-500">$</span> cat services.md
            </div>
            <p className="text-sm md:text-base mb-8 text-white max-w-2xl leading-relaxed">{content.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-black font-mono px-8 py-3 text-lg border border-green-400"
              >
                <Link href="#portfolio">
                  <Globe className="mr-2 h-5 w-5" />
                  {content.cta.primary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 text-lg bg-transparent font-mono"
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  {content.cta.secondary}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 text-lg bg-transparent font-mono"
              >
                <Link href="https://bytebrief.vercel.app/" target="_blank" rel="noopener noreferrer">
                  My Tech News Blog
                </Link>
              </Button>
            </div>

            <div className="flex justify-center space-x-8">
              <Link
                href="https://github.com/PanagiotisC00"
                className="text-gray-400 hover:text-green-400 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-8 w-8 group-hover:animate-pulse" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-8 w-8 group-hover:animate-pulse" />
              </Link>
              <Link
                href="mailto:panagiotischrysanthou2@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-8 w-8 group-hover:animate-pulse" />
              </Link>
              <Link
                href="https://scholar.google.com"
                className="text-gray-400 hover:text-[#D2B48C] transition-colors font-mono text-sm border-b border-transparent hover:border-[#D2B48C]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </Link>
              <Link
                href="https://orcid.org/0009-0000-1798-0314"
                className="text-gray-400 hover:text-[#808000] transition-colors font-mono text-sm border-b border-transparent hover:border-[#808000]"
                target="_blank"
                rel="noopener noreferrer"
              >
                ORCID
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
