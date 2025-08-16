'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Github, Linkedin, Mail, Download, ExternalLink, Facebook, Instagram, Code2, Sparkles } from 'lucide-react'
import TechRainBackground from './TechRainBackground'

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  const roles = [
    'Full Stack Developer',
    'Mobile Application Developer', 
    'Desktop Application Developer',
    'UI/UX Designer',
    'Tech Enthusiast'
  ];

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Visibility animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Enhanced typing animation
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    
    const typeSpeed = 120;
    const deleteSpeed = 80;
    const pauseBeforeDelete = 2000;
    
    const currentWord = roles[currentRole];
    
    if (isTyping && !isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setIsTyping(false);
        }, pauseBeforeDelete);
      }
    } else if (isDeleting && !isTyping) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isDeleting, currentRole, roles]);

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleImageError = () => {
    console.log('Image failed to load, showing fallback')
    setImageError(true)
  }

  const handleImageLoad = () => {
    console.log('Image loaded successfully')
    setImageError(false)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Tech Rain Background */}
      <TechRainBackground />

      {/* Animated Cursor Follower */}
      <div 
        className="fixed pointer-events-none z-50 w-6 h-6 bg-primary-400/30 rounded-full blur-sm transition-all duration-300 ease-out"
        style={{ 
          left: mousePosition.x - 12, 
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})` 
        }}
      />

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 z-1">
        {/* Main background orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl animate-float-fast" />
        
        {/* Additional floating particles */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary-400/40 rounded-full animate-ping" />
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-secondary-400/60 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent-400/50 rounded-full animate-bounce" />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-primary-300/70 rounded-full animate-ping delay-1000" />
        
        {/* Floating tech icons */}
        <div className="absolute top-1/4 right-1/5 animate-float-icon opacity-20">
          <Code2 className="w-8 h-8 text-primary-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-float-icon-reverse opacity-15">
          <Sparkles className="w-6 h-6 text-secondary-400" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-24 lg:pt-32">
            
            {/* Left Column - Content */}
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Main Heading with enhanced animations */}
              <div className="mb-6">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  Hi, I&apos;m{' '}
                  <span className="gradient-text relative inline-block">
                    Madeesha
                    <span className="absolute -inset-1 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-lg blur animate-pulse-glow" />
                  </span>
                </h1>
                
                {/* Enhanced typing animation container */}
                <div className={`text-xl sm:text-2xl lg:text-3xl text-gray-300 h-12 flex items-center justify-center lg:justify-start transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <span className="typing-container relative">
                    <span className="typing-text bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                      {displayText}
                    </span>
                    <span className="typing-cursor text-primary-400 animate-blink">|</span>
                    {/* Glowing effect behind text */}
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded blur-sm animate-pulse" />
                  </span>
                </div>
                
                <p className={`text-sm sm:text-base text-gray-400 mt-2 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  Third year undergraduate at University of Moratuwa, Sri Lanka.
                </p>
              </div>

              {/* Description with stagger animation */}
              <p className={`text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Full-Stack Developer crafting impactful web, mobile, and desktop solutions — fueled by a passion for{' '}
                <span className="text-primary-400 font-semibold animate-pulse">Cybersecurity</span>,{' '}
                <span className="text-secondary-400 font-semibold animate-pulse delay-200">Networking</span>,{' '}
                <span className="text-accent-400 font-semibold animate-pulse delay-400">DevOps</span>, and{' '}
                <span className="text-primary-300 font-semibold animate-pulse delay-600">AI</span>.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <button 
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn btn-primary group relative overflow-hidden hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">View My Work</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </button>
                
                <a 
                  href="/Madeesha-CV.pdf" 
                  download
                  className="btn btn-secondary group relative overflow-hidden hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">Download Resume</span>
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </a>
              </div>

              {/* Enhanced Social Links */}
              <div className={`flex justify-center lg:justify-start space-x-6 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/madeesha-karunarathna", label: "LinkedIn", color: "hover:text-blue-400" },
                  { icon: Github, href: "https://github.com/MadeeshaSK", label: "GitHub", color: "hover:text-gray-300" },
                  { icon: Mail, href: "mailto:madeeshasachindu2@gmail.com", label: "Email", color: "hover:text-red-400" },
                  { icon: Facebook, href: "https://www.facebook.com/madeeshasachindu.karunarathna", label: "Facebook", color: "hover:text-blue-500" },
                  { icon: Instagram, href: "https://www.instagram.com/m_a_d_e_e__sh_a/", label: "Instagram", color: "hover:text-pink-400" }
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${social.color} relative group animate-float-social`}
                    style={{ animationDelay: `${index * 200}ms` }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 relative z-10" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/0 to-secondary-400/0 group-hover:from-primary-400/20 group-hover:to-secondary-400/20 transition-all duration-300" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-400/0 to-secondary-400/0 group-hover:from-primary-400/10 group-hover:to-secondary-400/10 blur transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full bg-gradient-to-br from-primary-400 to-secondary-600 p-2 animate-pulse-glow relative">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold gradient-text relative overflow-hidden">
                  {!imageError ? (
                    <Image
                      src="/image.png"
                      alt="Madeesha - Full Stack Developer"
                      fill
                      className="object-contain animate-slide-in-right rounded-full"
                      priority
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, (max-width: 1280px) 384px, 448px"
                    />
                  ) : (
                    // Enhanced fallback placeholder
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400/20 to-secondary-400/20 flex items-center justify-center relative">
                      <div className="text-6xl font-bold text-primary-400 animate-pulse">M</div>
                    </div>
                  )}
                  
                  {/* Debug info - only in development */}
                  {process.env.NODE_ENV === 'development' && (
                    <div className="absolute top-2 left-2 text-xs bg-black/70 text-white p-1 rounded z-20">
                      {imageError ? '❌ Img Error' : '✅ Img OK'}
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-600/20 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

          </div>

          {/* Enhanced Scroll Indicator */}
          <div className={`flex justify-center mt-8 lg:mt-16 transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button 
              onClick={handleScrollDown}
              className="animate-bounce-slow cursor-pointer p-4 rounded-full hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm hover:scale-110 relative group"
              aria-label="Scroll down"
            >
              <ChevronDown className="w-8 h-8 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/0 to-secondary-400/0 group-hover:from-primary-400/10 group-hover:to-secondary-400/10 transition-all duration-300" />
              <div className="absolute -inset-2 rounded-full bg-primary-400/0 group-hover:bg-primary-400/5 blur transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}