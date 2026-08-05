'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToHero = () => {
    const heroElement = document.querySelector('#home')
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={scrollToHero}
      aria-label="Scroll to Hero section"
      title="Back to Top"
      className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-dark-800/90 border border-primary-500/30 text-primary-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 backdrop-blur-md transition-all duration-500 transform hover:scale-110 group ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
    </button>
  )
}
