import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, FileText } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

interface BlogContent {
  title: string
  subtitle: string
  posts: BlogPost[]
}

export default function BlogSection({ content }: { content: BlogContent }) {
  return (
    <section className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Terminal Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-black border border-cyan-400 rounded-lg p-6 mb-8">
              <div className="font-mono text-cyan-400 text-sm mb-2">
                <span className="text-gray-500">$</span> find /blog -name "*.md" | head -4
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">{content.title}</h2>
            </div>
            <p className="text-xl text-green-400 font-mono">{content.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.posts.map((post) => (
              <Card
                key={post.id}
                className="bg-black border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
              >
                <CardHeader className="pb-3">
                  {/* Terminal window header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center text-gray-400 font-mono text-xs">
                      <FileText className="h-3 w-3 mr-1" />
                      post_{post.id}.md
                    </div>
                  </div>

                  <div className="font-mono text-green-400 text-sm mb-2">
                    <span className="text-gray-500">$</span> head -n 1 post_{post.id}.md
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors font-mono group-hover:text-cyan-400">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <div className="flex items-center text-sm text-gray-400 font-mono mb-3">
                    <Calendar className="h-4 w-4 mr-2 text-green-400" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                    <Clock className="h-4 w-4 ml-4 mr-2 text-cyan-400" />
                    {post.readTime}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="font-mono text-cyan-400 text-sm mb-2">
                    <span className="text-gray-500">$</span> cat excerpt.txt
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{post.excerpt}</p>

                  <div className="font-mono text-purple-400 text-sm mb-2">
                    <span className="text-gray-500">$</span> ls tags/
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} className="bg-gray-800 text-gray-300 border-gray-600 font-mono text-xs">
                        #{tag.toLowerCase().replace(" ", "_")}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-black border border-green-400 rounded-lg p-4">
              <div className="font-mono text-green-400 text-sm">
                <span className="text-gray-500">$</span> cd /blog && ls -la
              </div>
              <Link href="/blog" className="text-cyan-400 hover:text-white font-mono transition-colors">
                → View All Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
