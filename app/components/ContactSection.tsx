import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Terminal, Wifi, CheckCircle } from "lucide-react"

interface ContactContent {
  title: string
  subtitle: string
  description: string
  email: string
  services: string[]
}

export default function ContactSection({ content }: { content: ContactContent }) {
  return (
    <section id="contact" className="py-20 bg-black relative min-h-screen">
      {/* Network pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,0,0.1),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(0,255,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Terminal Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-900 border border-green-400 rounded-lg p-6 mb-8">
              <div className="font-mono text-green-400 text-sm mb-2">
                <span className="text-gray-500">$</span> ./start-project --client-consultation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">{content.title}</h2>
            </div>
            <p className="text-xl text-cyan-400 mb-8 font-mono">{content.subtitle}</p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">{content.description}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Services & Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-900 border-green-400 border-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <Wifi className="h-4 w-4 text-green-400" />
                  </div>
                  <CardTitle className="flex items-center text-xl font-mono text-green-400">
                    <Terminal className="h-6 w-6 mr-3" />
                    Web Development Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-mono text-green-400 text-sm mb-4">
                    <span className="text-gray-500">$</span> cat services.json
                  </div>
                  <ul className="space-y-3">
                    {content.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-cyan-400 border-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <MessageSquare className="h-4 w-4 text-cyan-400" />
                  </div>
                  <CardTitle className="flex items-center text-xl font-mono text-cyan-400">Direct Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-mono text-cyan-400 text-sm mb-4">
                    <span className="text-gray-500">$</span> ping panagiotis@webdev-server
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">
                    Response time: &lt; 48 hours
                    <br />
                    Project consultation: FREE
                  </p>
                  <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700 text-black font-mono">
                    <a href={`mailto:${content.email}`} className="flex items-center justify-center w-full px-2">
                      <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm break-all">{content.email}</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
