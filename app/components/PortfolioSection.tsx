import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Terminal, Folder } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  image: string
}

interface PortfolioContent {
  title: string
  subtitle: string
  projects: Project[]
}

export default function PortfolioSection({ content }: { content: PortfolioContent }) {
  return (
    <section className="py-20 bg-black relative">
      {/* Matrix-like background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Terminal Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-900 border border-green-400 rounded-lg p-6 mb-8">
              <div className="font-mono text-green-400 text-sm mb-2">
                <span className="text-gray-500">$</span> ls -la /projects
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">{content.title}</h2>
            </div>
            <p className="text-xl text-cyan-400 font-mono">{content.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.projects.map((project) => (
              <Card
                key={project.id}
                className="bg-gray-900 border-gray-700 hover:border-green-400 transition-all duration-300 group overflow-hidden"
              >
                <CardHeader className="p-0 relative">
                  <div className="absolute top-3 left-3 z-10 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-black p-3 border-b border-gray-700">
                    <div className="flex items-center">
                      <Folder className="h-4 w-4 text-cyan-400 mr-2" />
                      <span className="text-gray-400 font-mono text-sm">project_{project.id}.exe</span>
                    </div>
                  </div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>

                <CardContent className="p-6">
                  <div className="font-mono text-green-400 text-sm mb-2">
                    <span className="text-gray-500">$</span> cat README.md
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-mono">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                  <div className="font-mono text-cyan-400 text-sm mb-2">
                    <span className="text-gray-500">$</span> ls dependencies/
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-gray-800 text-gray-300 border-gray-600 font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button asChild size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-black font-mono">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Terminal className="h-4 w-4 mr-2" />
                      ./run
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 font-mono bg-transparent"
                  >
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      src/
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
