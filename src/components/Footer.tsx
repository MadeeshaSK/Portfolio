'use client'

import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Heart, ArrowUp, Sparkles, Code2, Star } from 'lucide-react'

export default function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-dark-900/20 to-dark-950 border-t border-text-muted/20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-500/5 rounded-full blur-2xl animate-float-fast" />
        
        {/* Floating particles */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-primary-400/40 rounded-full animate-float-particle" />
        <div className="absolute bottom-40 left-1/5 w-1 h-1 bg-secondary-400/50 rounded-full animate-float-particle-reverse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent-400/30 rounded-full animate-bounce-slow" />
        
        {/* Tech icons floating */}
        <div className="absolute top-1/4 right-1/6 animate-float-icon opacity-8">
          <Code2 className="w-8 h-8 text-primary-400" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float-icon-reverse opacity-6">
          <Sparkles className="w-6 h-6 text-secondary-400" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-spin-slow opacity-10">
          <Star className="w-10 h-10 text-accent-400" />
        </div>
      </div>

      {/* Cursor follower */}
      <div 
        className="fixed pointer-events-none z-50 w-4 h-4 bg-primary-400/20 rounded-full blur-sm transition-all duration-300 ease-out"
        style={{ 
          left: mousePosition.x - 8, 
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})` 
        }}
      />

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 animate-pulse-glow shadow-lg group relative overflow-hidden z-20"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white relative z-10 group-hover:-translate-y-0.5 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        
        {/* Hover particles */}
        <div className="absolute top-1 right-1 w-1 h-1 bg-white/60 rounded-full animate-ping group-hover:animate-none" />
        <div className="absolute bottom-1 left-1 w-1 h-1 bg-white/60 rounded-full animate-ping delay-300 group-hover:animate-none" />
      </button>

      <div className="container-custom py-12 relative z-10">
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Brand */}
          <div className={`lg:col-span-2 transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-6 relative">
              <h3 className="text-2xl font-bold gradient-text mb-4 relative inline-block">
                MadeeshaSK
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-lg blur animate-pulse-glow" />
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-md">
                Full-Stack Developer passionate about creating exceptional digital experiences across web, mobile, and desktop applications.
              </p>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className={`transition-all duration-1000 delay-200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h4 className="text-lg font-semibold text-text-primary mb-4 relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-transparent rounded-full" />
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <li key={item} className="animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(`#${item.toLowerCase()}`)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-text-muted hover:text-secondary-400 transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-secondary-400/0 group-hover:bg-secondary-400/80 rounded-full transition-all duration-300" />
                    {item}
                    <div className="w-0 h-px bg-secondary-400 group-hover:w-4 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Services */}
          <div className={`transition-all duration-1000 delay-400 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h4 className="text-lg font-semibold text-text-primary mb-4 relative inline-block">
              Services
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-secondary-400 to-transparent rounded-full" />
            </h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile App Development',
                'UI/UX Design',
                'Desktop App Development',
                'AI, DevOps, Networking, and Cybersecurity'
              ].map((service, index) => (
                <li key={service} className="animate-fade-in-up" style={{ animationDelay: `${500 + index * 100}ms` }}>
                  <div className="flex items-center gap-3 text-text-muted group hover:text-accent-400 transition-all duration-300">
                    <div className="w-2 h-2 bg-accent-400/60 rounded-full group-hover:bg-accent-400 group-hover:scale-125 transition-all duration-300" />
                    <span>{service}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className={`border-t border-text-muted/20 mt-12 pt-8 transition-all duration-1000 delay-800 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <span>© {currentYear} MadeeshaSK. All rights reserved.</span>
              <div className="w-1 h-1 bg-primary-400/60 rounded-full animate-pulse" />
            </div>
            
            <div className="flex items-center gap-3 text-text-muted text-sm">
              <Sparkles className="w-4 h-4 text-accent-400 animate-pulse" />
              <span>⚡ Fun fact 🎉: Everything is relative 😎</span>
              <div className="w-1 h-1 bg-accent-400/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}