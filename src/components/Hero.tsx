// src/components/Hero.tsx

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Github, Linkedin, Mail, Download, ExternalLink, Facebook, Instagram } from 'lucide-react'

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const roles = [
    'Full Stack Developer',
    'Mobile Application Developer',
    'Desktop Application Developer',
    'UI/UX Designer',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseBeforeDelete = 1500;
    
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl animate-bounce-slow" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-24 lg:pt-32">
            
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Main Heading */}
              <div className="mb-6 animate-fade-in-up delay-200">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                  Hi, I'm <span className="gradient-text">Madeesha</span>
                </h1>
                <div className="text-xl sm:text-2xl lg:text-3xl text-text-secondary h-12 flex items-center justify-center lg:justify-start">
                  <span className="typing-container">
                    <span className="typing-text">{displayText}</span>
                    <span className="typing-cursor">|</span>
                  </span>
                </div>
                <p className="text-sm sm:text-base text-text-muted mt-2 animate-fade-in-up delay-300">
                  Third year undergraduate at University of Moratuwa, Sri Lanka.
                </p>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-fade-in-up delay-400">
              Full-Stack Developer crafting impactful web, mobile, and desktop solutions — fueled by a passion for Cybersecurity, Networking, DevOps, and AI.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up delay-600">
                <button 
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn btn-primary group"
                >
                  View My Work
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <a 
                  href="MadeeshaSK-CV.pdf" 
                  download
                  className="btn btn-secondary group"
                >
                  Download Resume
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in-up delay-800">
                <a 
                  href="https://github.com/MadeeshaSK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-800/50 hover:bg-dark-700 transition-all duration-300 social-link-github"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/madeesha-karunarathna" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-800/50 hover:bg-dark-700 transition-all duration-300 social-link-linkedin"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:madeeshasachindu2@gmail.com"
                  className="p-3 rounded-full bg-dark-800/50 hover:bg-dark-700 transition-all duration-300 hover:text-secondary-400"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.facebook.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-800/50 hover:bg-dark-700 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>

                <a 
                  href="https://www.instagram.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-800/50 hover:bg-dark-700 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full bg-gradient-to-br from-primary-400 to-secondary-600 p-2 animate-pulse-glow relative">
                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold gradient-text relative overflow-hidden">
                <Image
                    src="/image.png"
                    alt="Madeesha - Full Stack Developer"
                    fill
                    className="object-contain animate-slide-in-right rounded-full"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, (max-width: 1280px) 384px, 448px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-600/20 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

          </div>

          {/* Scroll Indicator - Centered at bottom */}
          <div className="flex justify-center mt-8 lg:mt-16">
            <button 
              onClick={handleScrollDown}
              className="animate-bounce cursor-pointer p-2 rounded-full hover:bg-dark-800/50 transition-colors duration-300 animate-fade-in-up delay-1000"
              aria-label="Scroll down"
            >
              <ChevronDown className="w-8 h-8 text-text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}