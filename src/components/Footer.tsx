// src/components/Footer.tsx

'use client'

import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 border-t border-text-muted/20 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-glow shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">MadeeshaSK</h3>
              <p className="text-text-secondary leading-relaxed max-w-md">
              Full-Stack Developer passionate about creating exceptional digital experiences across web, mobile, and desktop applications.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(`#${item.toLowerCase()}`)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-text-muted hover:text-secondary-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Services</h4>
            <ul className="space-y-2">
            {[
              'Web Development',
              'Mobile App Development',
              'UI/UX Design',
              'Desktop App Development',
              'AI, DevOps, Networking, and Cybersecurity'
            ].map((service) => (
              <li key={service}>
                <span className="text-text-muted">{service}</span>
              </li>
            ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-text-muted/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-text-muted text-sm">
              © {currentYear} MadeeshaSK. All rights reserved.
            </div>
            
            <div className="flex items-center text-text-muted text-sm">
            ⚡ Fun fact 🎉: Everything is relative 😎
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}