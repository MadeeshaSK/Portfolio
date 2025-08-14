// src/components/Hero.tsx

'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react'

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [roles.length])

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/10 rounded-full blur-2xl animate-bounce-slow" />
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold gradient-text">
                YN
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6 animate-fade-in-up delay-200">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Your Name</span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-400 h-8 flex items-center justify-center">
              <span className="animate-fade-in-up">
                {roles[currentRole]}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-400">
            I create exceptional digital experiences through innovative design and clean code. 
            Passionate about building solutions that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-600">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary group"
            >
              View My Work
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a 
              href="/resume.pdf" 
              download
              className="btn btn-secondary group"
            >
              Download CV
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up delay-800">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 social-link-github"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 social-link-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 hover:text-blue-400"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={handleScrollDown}
            className="animate-bounce cursor-pointer p-2 rounded-full hover:bg-gray-800/50 transition-colors duration-300 animate-fade-in-up delay-1000"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  )
}