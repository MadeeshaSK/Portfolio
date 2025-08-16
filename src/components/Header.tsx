'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, Code2 } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-lg border-b border-primary-500/20 shadow-lg shadow-primary-500/10'
          : 'bg-transparent'
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient line */}
        <div className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 transition-all duration-1000 ${
          scrolled ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`} />
        
        {/* Floating particles */}
        {scrolled && (
          <>
            <div className="absolute top-2 right-1/4 w-1 h-1 bg-primary-400/40 rounded-full animate-ping" />
            <div className="absolute bottom-2 left-1/3 w-1 h-1 bg-secondary-400/30 rounded-full animate-pulse" />
          </>
        )}
      </div>

      {/* Cursor follower */}
      <div 
        className="fixed pointer-events-none z-60 w-3 h-3 bg-accent-400/30 rounded-full blur-sm transition-all duration-300 ease-out"
        style={{ 
          left: mousePosition.x - 6, 
          top: mousePosition.y - 6,
          transform: `scale(${mousePosition.x > 0 && mousePosition.y < 100 ? 1 : 0})` 
        }}
      />

      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
              className="group relative flex items-center gap-3"
            >
              {/* Logo icon */}
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative">
                <Code2 className="w-5 h-5 text-white relative z-10" />
                <div className="absolute inset-0 bg-white/10 rounded-lg blur animate-pulse" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </div>
              
              {/* Logo text */}
              <span className="text-2xl font-bold gradient-text group-hover:scale-105 transition-all duration-300 relative">
                MadeeshaSK
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/0 to-secondary-400/0 group-hover:from-primary-400/10 group-hover:to-secondary-400/10 rounded-lg blur transition-all duration-500" />
              </span>
              
              {/* Floating particles around logo */}
              <div className="absolute top-1 right-1 w-1 h-1 bg-primary-400/0 group-hover:bg-primary-400/80 rounded-full transition-all duration-300 group-hover:animate-ping" />
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-secondary-400/0 group-hover:bg-secondary-400/80 rounded-full transition-all duration-300 group-hover:animate-ping delay-200" />
            </a>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="text-gray-300 hover:text-primary-400 transition-all duration-300 relative group py-2 hover:scale-105"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-500 group-hover:w-full transition-all duration-300" />
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-primary-400/0 group-hover:bg-primary-400/10 rounded-lg blur transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-primary-400 transition-all duration-300 hover:scale-110 relative group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative z-10">
              {isOpen ? (
                <X size={24} className="transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="group-hover:rotate-6 transition-transform duration-300" />
              )}
            </div>
            
            {/* Button background */}
            <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 rounded-lg transition-all duration-300" />
            <div className="absolute -inset-1 bg-primary-400/0 group-hover:bg-primary-400/10 rounded-lg blur transition-all duration-300" />
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-dark-900/90 backdrop-blur-xl rounded-lg border border-primary-500/20 mt-4 mx-4 relative">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-lg" />
            
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="block px-4 py-2 text-gray-300 hover:text-primary-400 hover:bg-dark-800/50 rounded-lg transition-all duration-300 relative group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 rounded-lg transition-all duration-300" />
              </a>
            ))}
            
            {/* Floating particles in mobile menu */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-primary-400/30 rounded-full animate-pulse" />
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-secondary-400/30 rounded-full animate-pulse delay-500" />
          </div>
        </div>
      </nav>
    </header>
  )
}