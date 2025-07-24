import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Code,
  Database,
  Cloud,
  Smartphone,
  Wifi,
  Car,
  Plane,
  Brain,
  GraduationCap,
  Folder,
} from "lucide-react"

interface AboutContent {
  title: string
  subtitle: string
  sections: {
    webDevelopment: {
      title: string
      experience: string
      description: string
      skills: {
        frontend: string[]
        backend: string[]
        cloud: string[]
      }
      achievements: string[]
    }
    advancedTech: {
      title: string
      experience: string
      description: string
      domains: {
        networking: {
          title: string
          skills: string[]
          experience: string
        }
        autonomous: {
          title: string
          skills: string[]
          experience: string
        }

        ml: {
          title: string
          skills: string[]
          experience: string
        }
      }
      achievements: string[]
    }
    education: {
      title: string
      degrees: Array<{
        degree: string
        institution: string
        focus: string
      }>
    }
    additionalProjects: {
      title: string
      projects: Array<{
        title: string
        description: string
        technologies: string[]
        domain: string
      }>
    }
  }
}

export default function AboutSection({ content }: { content: AboutContent }) {
  return (
    <section className="py-20 bg-gray-900 relative">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Terminal-style header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-black border border-green-400 rounded-lg p-4 mb-8">
              <div className="font-mono text-green-400 text-sm mb-2">
                <span className="text-gray-500">$</span> cat professional-profile.md
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">{content.title}</h2>
            </div>
            <p className="text-xl text-cyan-400 mb-8 font-mono">{content.subtitle}</p>
          </div>

          <Tabs defaultValue="web-dev" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full max-w-4xl mx-auto bg-transparent border-none p-0">
              <TabsTrigger
                value="web-dev"
                className="font-mono data-[state=active]:bg-green-600 data-[state=active]:text-black bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs md:text-sm rounded-lg px-3 md:px-4 py-2 md:py-3 transition-all duration-200 border border-gray-600 hover:border-green-400 w-full"
              >
                Web Dev
              </TabsTrigger>
              <TabsTrigger
                value="advanced-tech"
                className="font-mono data-[state=active]:bg-cyan-600 data-[state=active]:text-black bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs md:text-sm rounded-lg px-3 md:px-4 py-2 md:py-3 transition-all duration-200 border border-gray-600 hover:border-cyan-400 w-full"
              >
                Advanced Tech
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="font-mono data-[state=active]:bg-purple-600 data-[state=active]:text-black bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs md:text-sm rounded-lg px-3 md:px-4 py-2 md:py-3 transition-all duration-200 border border-gray-600 hover:border-purple-400 w-full"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="font-mono data-[state=active]:bg-orange-600 data-[state=active]:text-black bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs md:text-sm rounded-lg px-3 md:px-4 py-2 md:py-3 transition-all duration-200 border border-gray-600 hover:border-orange-400 w-full"
              >
                Other Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="web-dev" className="mt-12 md:mt-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Web Development Experience */}
                <Card className="bg-black border-green-400 border-2">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-400 font-mono text-sm ml-2">web-experience.log</span>
                    </div>
                    <CardTitle className="text-green-400 font-mono">{content.sections.webDevelopment.title}</CardTitle>
                    <p className="text-cyan-400 font-mono text-sm">{content.sections.webDevelopment.experience}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">{content.sections.webDevelopment.description}</p>

                    <div className="font-mono text-green-400 mb-4">
                      <span className="text-gray-500">$</span> cat achievements.txt
                    </div>
                    <ul className="space-y-3">
                      {content.sections.webDevelopment.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 font-mono text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Web Development Skills */}
                <div className="space-y-8">
                  <div className="bg-black border border-cyan-400 rounded-lg p-8">
                    <div className="flex items-center mb-6">
                      <Code className="h-8 w-8 text-cyan-400 mr-4" />
                      <h4 className="text-xl font-mono text-cyan-400">Frontend</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {content.sections.webDevelopment.skills.frontend.map((skill, index) => (
                        <Badge key={index} className="bg-cyan-900/50 text-cyan-300 border-cyan-400 font-mono text-sm px-4 py-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black border border-green-400 rounded-lg p-8">
                    <div className="flex items-center mb-6">
                      <Database className="h-8 w-8 text-green-400 mr-4" />
                      <h4 className="text-xl font-mono text-green-400">Backend</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {content.sections.webDevelopment.skills.backend.map((skill, index) => (
                        <Badge key={index} className="bg-green-900/50 text-green-300 border-green-400 font-mono text-sm px-4 py-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black border border-purple-400 rounded-lg p-8">
                    <div className="flex items-center mb-6">
                      <Cloud className="h-8 w-8 text-purple-400 mr-4" />
                      <h4 className="text-xl font-mono text-purple-400">Cloud & DevOps</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {content.sections.webDevelopment.skills.cloud.map((skill, index) => (
                        <Badge key={index} className="bg-purple-900/50 text-purple-300 border-purple-400 font-mono text-sm px-4 py-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced-tech" className="mt-12 md:mt-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Advanced Tech Experience */}
                <Card className="bg-black border-cyan-400 border-2">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-400 font-mono text-sm ml-2">research-profile.log</span>
                    </div>
                    <CardTitle className="text-cyan-400 font-mono">{content.sections.advancedTech.title}</CardTitle>
                    <p className="text-green-400 font-mono text-sm">{content.sections.advancedTech.experience}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">{content.sections.advancedTech.description}</p>

                    <div className="font-mono text-cyan-400 mb-4">
                      <span className="text-gray-500">$</span> cat research-achievements.txt
                    </div>
                    <ul className="space-y-3">
                      {content.sections.advancedTech.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 font-mono text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Advanced Tech Domains */}
                <div className="space-y-6">
                  <div className="bg-black border border-green-400 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Wifi className="h-6 w-6 text-green-400 mr-3" />
                      <h4 className="text-lg font-mono text-green-400">
                        {content.sections.advancedTech.domains.networking.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">
                      {content.sections.advancedTech.domains.networking.experience}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {content.sections.advancedTech.domains.networking.skills.map((skill, index) => (
                        <Badge
                          key={index}
                          className="bg-green-900/50 text-green-300 border-green-400 font-mono text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black border border-blue-400 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Car className="h-6 w-6 text-blue-400 mr-3" />
                      <h4 className="text-lg font-mono text-blue-400">
                        {content.sections.advancedTech.domains.autonomous.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">
                      {content.sections.advancedTech.domains.autonomous.experience}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {content.sections.advancedTech.domains.autonomous.skills.map((skill, index) => (
                        <Badge key={index} className="bg-blue-900/50 text-blue-300 border-blue-400 font-mono text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-8">
                <div className="bg-black border border-yellow-400 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Brain className="h-6 w-6 text-yellow-400 mr-3" />
                    <h4 className="text-lg font-mono text-yellow-400">
                      {content.sections.advancedTech.domains.ml.title}
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{content.sections.advancedTech.domains.ml.experience}</p>
                  <div className="flex flex-wrap gap-2">
                    {content.sections.advancedTech.domains.ml.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-yellow-900/50 text-yellow-300 border-yellow-400 font-mono text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-12 md:mt-12">
              <Card className="bg-black border-purple-400 border-2">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-400 font-mono text-sm ml-2">academic-credentials.log</span>
                  </div>
                  <CardTitle className="text-purple-400 font-mono flex items-center">
                    <GraduationCap className="h-6 w-6 mr-3" />
                    {content.sections.education.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-mono text-purple-400 text-sm mb-4">
                    <span className="text-gray-500">$</span> cat degrees.txt
                  </div>
                  <div className="space-y-6">
                    {content.sections.education.degrees.map((degree, index) => (
                      <div key={index} className="border-l-2 border-purple-400 pl-6">
                        <h4 className="text-lg font-mono text-white mb-2">{degree.degree}</h4>
                        <p className="text-purple-300 font-mono text-sm mb-1">
                          {degree.institution}
                        </p>
                        <p className="text-gray-300 text-sm">Focus: {degree.focus}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

                         <TabsContent value="projects" className="mt-12 md:mt-12">
               <div className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                  {content.sections.additionalProjects.projects.map((project, index) => (
                    <Card
                      key={index}
                      className="bg-gray-900 border-gray-700 hover:border-orange-400 transition-all duration-300"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <Badge className="bg-orange-900/50 text-orange-300 border-orange-400 font-mono text-xs">
                            {project.domain}
                          </Badge>
                        </div>
                        <div className="flex items-center mb-2">
                          <Folder className="h-4 w-4 text-orange-400 mr-2" />
                          <span className="text-gray-400 font-mono text-sm">project_{index + 1}/</span>
                        </div>
                        <CardTitle className="text-lg font-mono text-white">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="font-mono text-orange-400 text-sm mb-2">
                          <span className="text-gray-500">$</span> cat description.md
                        </div>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                        <div className="font-mono text-cyan-400 text-sm mb-2">
                          <span className="text-gray-500">$</span> ls technologies/
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              className="bg-gray-800 text-gray-300 border-gray-600 font-mono text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
