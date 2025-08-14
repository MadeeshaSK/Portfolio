// src/components/About.tsx

'use client'

import { useInView } from 'react-intersection-observer'
import { Code2, Palette, Zap, Heart } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
  ]

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful, intuitive user interfaces that provide exceptional user experiences.',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and performance across all devices and platforms.',
    },
    {
      icon: Heart,
      title: 'Passionate Work',
      description: 'Bringing enthusiasm and dedication to every project, ensuring the best possible outcomes.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="container-custom">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8" />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with over 3 years of experience creating 
                digital solutions that bridge the gap between design and functionality. My journey 
                in tech started with a curiosity about how things work, and it has evolved into 
                a career dedicated to building exceptional user experiences.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in modern web technologies including React, Next.js, Node.js, and 
                cloud platforms. When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className={`space-y-6 ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div 
                  key={highlight.title}
                  className={`card group hover:scale-105 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 150 + 400}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}