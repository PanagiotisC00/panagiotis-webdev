import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Folder, ExternalLink, CheckCircle } from "lucide-react"
import Link from "next/link"

interface WebProject {
  id: number
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  features: string[]
}

interface WebPortfolioContent {
  title: string
  subtitle: string
  projects: WebProject[]
}

export default function WebPortfolioSection({ content }: { content: WebPortfolioContent }) {
  return (
    <section id="portfolio" className="py-20 bg-black relative">
      {/* Matrix-like background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Terminal Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-900 border border-green-400 rounded-lg p-6 mb-8">
              <div className="font-mono text-green-400 text-sm mb-2">
                <span className="text-gray-500">$</span> ls -la /web-projects --showcase
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">{content.title}</h2>
            </div>
            <p className="text-xl text-cyan-400 font-mono">{content.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.projects.map((project) => (
              <Card
                key={project.id}
                className="bg-gray-900 border-gray-700 hover:border-green-400 transition-all duration-300 group overflow-hidden flex flex-col"
              >
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 font-mono text-sm">web-app_{project.id}/</span>
                  </div>
                  <div className="flex items-center">
                    <Folder className="h-4 w-4 text-cyan-400 mr-2" />
                    <span className="text-gray-400 font-mono text-sm">project-files/</span>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="font-mono text-green-400 text-sm mb-2">
                    <span className="text-gray-500">$</span> cat project-info.md
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-mono">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                  <div className="font-mono text-purple-400 text-sm mb-2">
                    <span className="text-gray-500">$</span> ls features/
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="font-mono text-cyan-400 text-sm mb-2">
                    <span className="text-gray-500">$</span> cat tech-stack.json
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-gray-800 text-gray-300 border-gray-600 font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex justify-end mt-auto">
                  <Button asChild size="sm" className="bg-green-600 hover:bg-purple-600 text-black font-mono">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
