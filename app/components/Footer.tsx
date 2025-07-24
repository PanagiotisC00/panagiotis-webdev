import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <Image
                  src="/terminal_logo.png"
                  alt="Panagiotis Chrysanthou Logo"
                  width={32}
                  height={32}
                  className="mr-2 flex-shrink-0"
                  style={{ verticalAlign: 'middle' }}
                />
                <span className="text-gray-400 text-sm font-mono">
                  © {currentYear} Panagiotis Chrysanthou. All rights reserved.
                </span>
              </div>
              <p className="text-gray-500 text-xs font-mono mt-1">
                Full-Stack Web Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/PanagiotisC00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors group"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5 group-hover:animate-pulse" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 group-hover:animate-pulse" />
              </a>
              <a
                href="mailto:panagiotischrysanthou2@gmail.com"
                className="text-gray-400 hover:text-yellow-400 transition-colors group"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5 group-hover:animate-pulse" />
              </a>
            </div>
          </div>


        </div>
      </div>
    </footer>
  )
} 