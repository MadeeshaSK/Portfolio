// src/components/About.tsx

'use client'

import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, Award } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const stats = [
    { number: '3+', label: 'Years Coding Experience' },
    { number: '5+', label: 'Projects Completed' },
  ]

  const education = [
    {
      icon: GraduationCap,
      period: '2023 - Present',
      institution: 'UNIVERSITY OF MORATUWA, SL',
      qualification: 'BSc (Hons) in Information Technology (UG)',
      details: 'CGPA 3.42',
      link: 'https://uom.lk/',
    },
    {
      icon: GraduationCap,
      period: '2019 - 2022',
      institution: 'DHARMARAJA COLLEGE KANDY, SL',
      qualification: 'A/L (2021) in Physical Science Scheme',
      details: 'ABB z = 1.6627',
      link: 'https://www.dharmaraja.lk/',
    },
    {
      icon: Calendar,
      period: '2018',
      qualification: 'O/L (2018)',
      details: '8A 1B',
      link: '#', 
    },
  ]

  const certificates = [
    { name: 'Cloud Mastery with AWS', link: '#' },
    { name: 'Mastering CI/CD Pipelines', link: '#' },
    { name: 'Introduction to Cybersecurity', link: '#' },
    { name: 'OpenUOM Python', link: '#' },
    { name: 'OpenUOM Web Development', link: '#' },
    { name: 'Solo Learn Java', link: '#' },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-dark-900/20">
      <div className="container-custom">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full mb-8" />
            </div>

            <div className="space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">
                I'm Madeesha Sachindu Karunarathna from Moratuwa, Sri Lanka. A passionate 
                3rd year IT undergraduate at the University of Moratuwa with over 3 years of 
                experience in real-world projects. My journey in tech has led me through 5+ completed 
                projects, developing a strong interest in full-stack development for web, mobile, 
                and desktop applications, along with a deep passion for cybersecurity, networking, 
                DevOps, and AI.
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                I specialize in modern technologies including React, Next.js, Node.js, Spring Boot, Flutter and AWS
                . My approach is built on clean code principles, fast performance 
                optimization, effective teamwork, and strong time management skills. As a fast 
                learner, I'm constantly exploring new technologies and following industry trends 
                to ensure I stay updated with the latest developments.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                When I'm not coding, you'll find me learning new things, traveling, hiking, 
                watching movies, and listening to music. I believe in continuous learning and 
                maintaining a balance between technical growth and personal experiences that 
                inspire creativity in my development work.
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
                  <div className="text-sm text-text-muted uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Education */}
          <div className={`space-y-6 ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-text-primary mb-6">Education</h3>
            {education.map((edu, index) => {
              const IconComponent = edu.icon
              return (
                <div 
                  key={edu.qualification}
                  className={`card group hover:scale-105 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 150 + 400}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-primary-500 bg-primary-500/10 px-2 py-1 rounded">
                          {edu.period}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold mb-1 text-text-primary">
                        <a 
                          href={edu.link}
                          className="hover:text-primary-500 hover:underline transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {edu.qualification}
                        </a>
                      </h4>
                      {edu.institution && (
                        <p className="text-text-secondary text-sm mb-2">
                          <a 
                            href={edu.link}
                            className="hover:text-primary-500 hover:underline transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {edu.institution}
                          </a>
                        </p>
                      )}
                      <p className="text-text-muted text-sm font-medium">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
            
            {/* Certificates Section */}
            <div className={`card group hover:scale-105 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                 style={{ animationDelay: `${education.length * 150 + 400}ms` }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-3 text-text-primary">
                    Certificate Courses
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {certificates.map((cert, index) => (
                      <a
                        key={cert.name}
                        href={cert.link}
                        className="text-text-muted text-sm hover:text-primary-500 hover:underline transition-colors duration-200 cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        • {cert.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}