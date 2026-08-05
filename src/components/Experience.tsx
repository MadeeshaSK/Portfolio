'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, Sparkles, Code2, Layers, ExternalLink, Linkedin } from 'lucide-react'

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const experiences = [
    {
      role: 'Intern Software Engineer',
      company: 'Sri Lanka Insurance Corporation General Ltd.',
      companyUrl: 'https://www.slicgeneral.lk/',
      linkedinUrl: 'https://www.linkedin.com/posts/madeesha-karunarathna_internship-softwareengineering-fullstackdevelopment-share-7489234419967262720-iaB4/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJe91gBXQEAH54t2W8kIqsJXbgXVT-GEBM',
      logo: '/logoNew.png',
      period: 'February 2026 – August 2026',
      duration: '6 months',
      location: 'Colombo, Sri Lanka',
      workType: 'On-site',
      description:
        'Contributed to the development and maintenance of 10+ enterprise software projects, including both internal company systems and public-facing applications. Gained hands-on experience in full-stack development, REST API development, database management, technical documentation, testing, debugging, and deployment while working across the complete Software Development Life Cycle (SDLC). Collaborated with cross-functional teams to deliver scalable enterprise solutions and gained valuable domain knowledge in the insurance and finance industry.',
      highlights: [
        'Developed & maintained 10+ enterprise software applications (internal & public-facing)',
        'Full-stack development, REST APIs, database management, & SDLC best practices',
        'Technical documentation, testing, debugging, and production deployments',
        'Gained domain knowledge in insurance & finance tech infrastructure'
      ],
      technologies: ['.NET', 'C#', 'Oracle SQL', 'REST APIs', 'GitHub', 'Postman'],
      gradient: 'from-primary-500 via-secondary-500 to-accent-500',
      badgeColor: 'bg-primary-500/10 text-primary-400 border-primary-500/20'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-dark-900/30 via-transparent to-dark-900/20 relative overflow-hidden">
      {/* Background Orbs & Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float-reverse" />

        {/* Floating Icons */}
        <div className="absolute top-1/4 right-1/6 animate-float-icon opacity-10">
          <Briefcase className="w-10 h-10 text-primary-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-float-icon-reverse opacity-10">
          <Layers className="w-8 h-8 text-secondary-400" />
        </div>
      </div>

      {/* Cursor Follower */}
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-primary-400/20 rounded-full blur-sm transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      />

      <div className="container-custom relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 relative">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Work{' '}
              <span className="gradient-text relative inline-block">
                Experience
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-lg blur animate-pulse-glow" />
              </span>
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full mx-auto mb-6 transition-all duration-1000 delay-200 ${inView ? 'scale-x-100' : 'scale-x-0'}`} />
            <p className={`text-text-muted text-base sm:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              My industry experience developing scalable software solutions and contributing to enterprise-level products.
            </p>
          </div>

          {/* Experience Cards Container */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`card group relative overflow-hidden transition-all duration-700 hover:scale-[1.01] ${inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                {/* Top Accent Gradient Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient}`} />

                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 p-2 sm:p-4">
                  {/* Card Header: Role & Period */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b border-gray-800/80 pb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                        {/* Company Logo Badge */}
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 relative shrink-0 bg-white/10 rounded-xl p-1.5 border border-gray-700/50 flex items-center justify-center overflow-hidden group-hover:scale-110 group-hover:border-primary-400/50 transition-all duration-300"
                          title="Visit Sri Lanka Insurance General website"
                        >
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            fill
                            className="object-contain p-1"
                          />
                        </a>

                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-primary-400 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 flex-wrap text-secondary-400 font-semibold text-sm sm:text-base mt-1">
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary-400 hover:underline flex items-center gap-1.5 transition-colors duration-200"
                            >
                              <Building2 className="w-4 h-4 text-secondary-400" />
                              <span>{exp.company}</span>
                              <ExternalLink className="w-3.5 h-3.5 opacity-70 hover:opacity-100 transition-opacity" />
                            </a>

                            {/* LinkedIn Icon Link */}
                            <a
                              href={exp.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 rounded-md bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 hover:text-blue-300 border border-blue-500/20 transition-all duration-300 ml-1"
                              title="Visit LinkedIn Post"
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs sm:text-sm text-text-muted">
                      <div className="flex items-center gap-2 bg-dark-800/60 px-3 py-1.5 rounded-full border border-gray-700/50 flex-wrap">
                        <Calendar className="w-4 h-4 text-primary-400" />
                        <span className="font-medium text-gray-200">{exp.period}</span>
                        <span className="text-xs text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded-full border border-primary-500/20 font-semibold">
                          ({exp.duration})
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-400 px-1">
                        <MapPin className="w-3.5 h-3.5 text-secondary-400" />
                        <span>{exp.workType} • {exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6 space-y-2.5">
                    <h4 className="text-xs uppercase tracking-wider text-text-muted font-bold flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-accent-400" /> Key Contributions & SDLC Exposure
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {exp.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Badges */}
                  <div className="pt-4 border-t border-gray-800/80">
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 className="w-4 h-4 text-secondary-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Technologies & Tools
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-gray-200 border border-primary-500/20 hover:border-primary-400/50 hover:scale-105 transition-all duration-300 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
