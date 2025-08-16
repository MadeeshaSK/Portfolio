'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, Award, Code2, BookOpen, Trophy, Star, Sparkles, Target, Zap } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0])
  
  // Enhanced stats with icons
  const stats = [
    { 
      number: 1, 
      suffix: '+',
      label: 'Projects Under Industry Mentorship',
      icon: Target,
      color: 'from-primary-500 to-secondary-500',
      delay: 0
    },
    { 
      number: 3, 
      suffix: '+',
      label: 'Years Coding Experience',
      icon: Code2,
      color: 'from-secondary-500 to-accent-500',
      delay: 200
    },
    { 
      number: 5, 
      suffix: '+',
      label: 'Projects Completed',
      icon: Trophy,
      color: 'from-accent-500 to-primary-500',
      delay: 400
    },
  ]

  const education = [
    {
      icon: GraduationCap,
      period: '2023 - Present',
      institution: 'UNIVERSITY OF MORATUWA, SL',
      qualification: 'BSc (Hons) in Information Technology (UG)',
      details: 'CGPA 3.42',
      link: 'https://uom.lk/',
      resultLink: 'https://drive.google.com/file/d/1FUJMN4omnrnifyFv9Pe5g5xjeJJC-0PE/view?usp=drive_link',
      gradient: 'from-primary-500 to-secondary-500',
      status: 'current'
    },
    {
      icon: GraduationCap,
      period: '2019 - 2022',
      institution: 'DHARMARAJA COLLEGE KANDY, SL',
      qualification: 'A/L (2021) in Physical Science Scheme',
      details: 'ABB z = 1.6627',
      link: 'https://www.dharmaraja.lk/',
      resultLink: 'https://drive.google.com/file/d/1DN3sSyJEgXTcK22VGheTjT8grODC84eD/view?usp=drive_link',
      gradient: 'from-secondary-500 to-accent-500',
      status: 'completed'
    },
    {
      icon: Calendar,
      period: '2018',
      qualification: 'O/L (2018)',
      details: '8A 1B',
      link: 'https://drive.google.com/file/d/1o89qs-Ctaz3629JdP-wRZ9vWWwRWe9MI/view?usp=drive_link',
      resultLink: 'https://drive.google.com/file/d/1o89qs-Ctaz3629JdP-wRZ9vWWwRWe9MI/view?usp=drive_link',
      gradient: 'from-accent-500 to-primary-500',
      status: 'completed'
    },
  ]

  const certificates = [
    { name: 'Cloud Mastery with AWS', link: '#', category: 'cloud' },
    { name: 'Mastering CI/CD Pipelines', link: '#', category: 'devops' },
    { name: 'Introduction to Cybersecurity', link: '#', category: 'security' },
    { name: 'OpenUOM Python', link: 'https://www.linkedin.com/posts/madeesha-karunarathna_certificate-activity-7270404725978611712-cKn-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJe91gBXQEAH54t2W8kIqsJXbgXVT-GEBM', category: 'programming' },
    { name: 'OpenUOM Web Development', link: 'https://www.linkedin.com/posts/madeesha-karunarathna_web-design-for-beginers-activity-7250182741873278977-Ym7K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJe91gBXQEAH54t2W8kIqsJXbgXVT-GEBM', category: 'web' },
    { name: 'Solo Learn Java', link: 'https://www.linkedin.com/posts/madeesha-karunarathna_sololearn-introduction-to-java-activity-7253021235041771520-yymU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJe91gBXQEAH54t2W8kIqsJXbgXVT-GEBM', category: 'programming' },
  ]

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animate stats numbers
  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        setTimeout(() => {
          let current = 0
          const increment = stat.number / 50
          const timer = setInterval(() => {
            current += increment
            if (current >= stat.number) {
              current = stat.number
              clearInterval(timer)
            }
            setAnimatedStats(prev => {
              const newStats = [...prev]
              newStats[index] = Math.floor(current)
              return newStats
            })
          }, 30)
        }, stat.delay)
      })
    }
  }, [inView])

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent via-dark-900/10 to-dark-900/30 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/5 rounded-full blur-2xl animate-float-fast" />
        
        {/* Floating particles */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-primary-400/60 rounded-full animate-float-particle" />
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-secondary-400/40 rounded-full animate-float-particle-reverse" />
        <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-accent-400/80 rounded-full animate-bounce-slow" />
        
        {/* Tech icons floating */}
        <div className="absolute top-1/5 right-1/4 animate-float-icon opacity-10">
          <BookOpen className="w-12 h-12 text-primary-400" />
        </div>
        <div className="absolute bottom-1/4 left-1/6 animate-float-icon-reverse opacity-15">
          <Star className="w-8 h-8 text-secondary-400" />
        </div>
        <div className="absolute top-2/3 right-1/3 animate-spin-slow opacity-10">
          <Sparkles className="w-10 h-10 text-accent-400" />
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

      <div className="container-custom relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content - Enhanced */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-30px]'}`}>
            <div className="relative">
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                About{' '}
                <span className="gradient-text relative">
                  Me
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-lg blur animate-pulse-glow" />
                </span>
              </h2>
              <div className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full mb-8 transition-all duration-1000 delay-400 ${inView ? 'scale-x-100' : 'scale-x-0'} origin-left`} />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary-400/30 rounded-full animate-spin-slow opacity-50" />
              <div className="absolute top-8 -left-6 w-4 h-4 bg-secondary-400/20 rounded-full animate-pulse delay-1000" />
            </div>

            {/* Enhanced paragraphs with stagger animation */}
            <div className="space-y-6">
              <p className={`text-lg text-text-secondary leading-relaxed transition-all duration-1000 delay-600 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                I'm <span className="text-primary-400 font-semibold">Madeesha Sachindu Karunarathna</span> from Moratuwa, Sri Lanka. A passionate 
                3rd year IT undergraduate at the <span className="text-secondary-400 font-semibold">University of Moratuwa</span> with over 3 years of 
                experience in real-world projects. My journey in tech has led me through 5+ completed 
                projects, developing a strong interest in <span className="gradient-text font-semibold">full-stack development</span> for web, mobile, 
                and desktop applications, along with a deep passion for cybersecurity, networking, 
                DevOps, and AI.
              </p>
              
              <p className={`text-lg text-text-secondary leading-relaxed transition-all duration-1000 delay-800 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                I specialize in modern technologies including <span className="text-primary-400">React</span>, <span className="text-secondary-400">Next.js</span>, <span className="text-accent-400">Node.js</span>, <span className="text-primary-400 font-semibold">Spring Boot</span>, <span className="gradient-text font-semibold">Flutter</span> and <span className="text-secondary-400 font-semibold">AWS</span>. 
                My approach is built on clean code principles, fast performance 
                optimization, effective teamwork, and strong time management skills. As a <span className="gradient-text font-semibold">fast 
                learner</span>, I'm constantly exploring new technologies and following industry trends 
                to ensure I stay updated with the latest developments.
              </p>

              <p className={`text-lg text-text-secondary leading-relaxed transition-all duration-1000 delay-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                When I'm not coding, you'll find me learning new things, traveling, hiking, 
                watching movies, and listening to music. I believe in <span className="text-primary-400 font-semibold">continuous learning</span> and 
                maintaining a balance between technical growth and personal experiences that 
                inspire creativity in my development work.
              </p>
            </div>

            {/* Enhanced Stats Grid with animations */}
            <div className="pt-8">
              <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-1000 delay-1200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div 
                      key={stat.label}
                      className={`card text-center group cursor-pointer hover:scale-105 transition-all duration-500 relative overflow-hidden ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                      style={{ animationDelay: `${index * 100 + 1400}ms` }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Background gradient effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Icon */}
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500`}>
                        <IconComponent className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />
                      </div>
                      
                      {/* Animated number */}
                      <div className="relative">
                        <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-500">
                          {animatedStats[index]}{stat.suffix}
                        </div>
                        {hoveredCard === index && (
                          <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-lg blur animate-pulse" />
                        )}
                      </div>
                      
                      <div className="text-sm text-text-muted uppercase tracking-wide font-medium group-hover:text-text-secondary transition-colors duration-300">
                        {stat.label}
                      </div>
                      
                      {/* Floating particles on hover */}
                      {hoveredCard === index && (
                        <>
                          <div className="absolute top-2 right-2 w-1 h-1 bg-primary-400 rounded-full animate-ping" />
                          <div className="absolute bottom-2 left-2 w-1 h-1 bg-secondary-400 rounded-full animate-ping delay-300" />
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Education */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${inView ? 'animate-fade-in-right' : 'opacity-0 translate-x-[30px]'}`}>
            <div className="relative">
              <h3 className={`text-2xl font-bold text-text-primary mb-6 transition-all duration-1000 delay-600 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Education Journey
              </h3>
              {/* Timeline line */}
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-secondary-400 to-accent-400 opacity-30" />
            </div>
            
            {education.map((edu, index) => {
              const IconComponent = edu.icon
              return (
                <div 
                  key={edu.qualification}
                  className={`card group hover:scale-105 transition-all duration-500 relative overflow-hidden ${inView ? 'animate-fade-in-up' : 'opacity-0'} ${edu.status === 'current' ? 'ring-2 ring-primary-400/30' : ''}`}
                  style={{ animationDelay: `${index * 150 + 800}ms` }}
                >
                  {/* Background effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 bg-gradient-to-br ${edu.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative`}>
                        <IconComponent className="w-6 h-6 text-white relative z-10" />
                        {edu.status === 'current' && (
                          <div className="absolute -inset-1 bg-primary-400/30 rounded-lg blur animate-pulse" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-sm font-medium text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20 transition-all duration-300 group-hover:scale-105`}>
                          {edu.period}
                        </span>
                        {edu.status === 'current' && (
                          <span className="px-2 py-1 text-xs bg-accent-500/20 text-accent-400 rounded-full animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold mb-1 text-text-primary group-hover:text-primary-400 transition-colors duration-300">
                        <a 
                          href={edu.link}
                          className="hover:text-primary-500 hover:underline transition-all duration-300 relative"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {edu.qualification}
                          <Zap className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                      </h4>
                      
                      {edu.institution && (
                        <p className="text-text-secondary text-sm mb-2 group-hover:text-secondary-400 transition-colors duration-300">
                          <a 
                            href={edu.link}
                            className="hover:text-secondary-500 hover:underline transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {edu.institution}
                          </a>
                        </p>
                      )}
                      
                      <p className="text-text-muted text-sm font-medium group-hover:text-accent-400 transition-colors duration-300">
                        <a 
                          href={edu.resultLink}
                          className="hover:text-accent-500 hover:underline transition-colors duration-200 flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {edu.details}
                          <Trophy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover particles */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-primary-400/0 group-hover:bg-primary-400/60 rounded-full transition-all duration-300 group-hover:animate-ping" />
                  <div className="absolute bottom-2 left-12 w-1 h-1 bg-secondary-400/0 group-hover:bg-secondary-400/60 rounded-full transition-all duration-300 group-hover:animate-ping delay-200" />
                </div>
              )
            })}
            
            {/* Enhanced Certificates Section */}
            <div className={`card group hover:scale-105 transition-all duration-500 relative overflow-hidden ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                 style={{ animationDelay: `${education.length * 150 + 800}ms` }}>
              
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-primary-500/0 group-hover:from-accent-500/5 group-hover:to-primary-500/5 transition-all duration-500" />
              
              <div className="flex items-start space-x-4 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-4 text-text-primary group-hover:text-accent-400 transition-colors duration-300 flex items-center gap-2">
                    Certificate Courses
                    <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow" />
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {certificates.map((cert, index) => (
                      <a
                        key={cert.name}
                        href={cert.link}
                        className="group/cert text-text-muted text-sm hover:text-primary-500 transition-all duration-300 cursor-pointer flex items-start gap-2 p-2 rounded hover:bg-primary-500/10 relative overflow-hidden"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-primary-400 opacity-60 group-hover/cert:opacity-100 transition-opacity duration-300">•</span>
                        <span className="group-hover/cert:translate-x-1 transition-transform duration-300 relative">
                          {cert.name}
                          <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 group-hover/cert:w-full transition-all duration-500" />
                        </span>
                        
                        {/* Category indicator */}
                        <span className={`ml-auto text-xs px-2 py-0.5 rounded-full opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 ${
                          cert.category === 'cloud' ? 'bg-blue-500/20 text-blue-400' :
                          cert.category === 'devops' ? 'bg-green-500/20 text-green-400' :
                          cert.category === 'security' ? 'bg-red-500/20 text-red-400' :
                          cert.category === 'programming' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {cert.category}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Animated corner elements */}
              <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-accent-400/0 group-hover:border-accent-400/60 transition-colors duration-500" />
              <div className="absolute bottom-2 left-12 w-2 h-2 border-b-2 border-l-2 border-primary-400/0 group-hover:border-primary-400/60 transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}