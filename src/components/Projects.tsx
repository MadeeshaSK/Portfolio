// src/components/Projects.tsx

'use client'

import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ExternalLink, Github, Linkedin } from 'lucide-react'

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeFilter, setActiveFilter] = useState('all')
  const [showAllProjects, setShowAllProjects] = useState(false)

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'individual', label: 'Individual Projects' },
    { id: 'team', label: 'Team Projects' },
  ]

  const projects = [
    {
      id: 1,
      title: 'MSGLYAPI – SAAS PLATFORM',
      description: 'This SaaS platform offers SMS, email, and OTP verification services accessible via API keys or through an intuitive web interface. Users get a dashboard to manage their usage and view analytics, while admins have a full control panel to oversee platform operations with role-based access.',
      tags: ['Node.js', 'Firebase', 'Python', 'Next.js', 'Tailwind CSS', 'Docker', 'Redis'],
      category: 'individual',
      projectType: 'web app',
      year: '2025',
      image: '/projects/msgly-api.png',
      github: 'https://github.com/MadeeshaSK/msgsend',
      demo: 'https://msgly-api.vercel.app/',
      linkedin: 'https://www.linkedin.com/posts/madeesha-karunarathna_nodejs-firebase-saas-activity-7358515962419056641-3cjA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJe91gBXQEAH54t2W8kIqsJXbgXVT-GEBM',
    },
    {
      id: 2,
      title: 'POINTEDGE - POS WEBSITE',
      description: 'This project is a Point of Sale (POS) website for a supermarket. My responsibilities include implementing discount and loyalty management features to enhance customer engagement and streamline promotional offers. Second-year software development group project in collaboration with Taycantech Company.',
      tags: ['React.js', 'Chakra UI', 'Spring Boot', 'MySQL'],
      category: 'team',
      projectType: 'web app',
      year: '2024/2025',
      image: '/projects/point-edge.png',
      linkedin: 'https://www.linkedin.com/posts/madeesha-karunarathna_softwareengineering-possystem-springboot-activity-7360944662422962176-C5OU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJe91gBXQEAH54t2W8kIqsJXbgXVT-GEBM',
    },
    {
      id: 3,
      title: 'SECOND CHANCE - MOBILE APPLICATION',
      description: 'This is a mobile application for posting lost and found items and creating community posts with chat features. It includes an admin app to manage posts, users, and reports efficiently. Individual project created to meet personal and others\' needs.',
      tags: ['Flutter', 'Flutter BloC', 'Node.js', 'Firebase'],
      category: 'individual',
      projectType: 'mobile',
      year: '2025',
      image: '/projects/second-chance.jpg',
      status: 'ONGOING',
    },
    {
      id: 4,
      title: 'BUDGETLOG - DESKTOP APPLICATION',
      description: 'This is a personal budget management desktop app with authentication, an embedded database, logging, and tracking of earnings and spending. It also lets users customize templates. Individual project created to meet personal and others\' needs.',
      tags: ['Java Swing', 'SQLite'],
      category: 'individual',
      projectType: 'desktop',
      year: '2024',
      image: '/projects/budget-log.png',
      github: 'https://github.com/MadeeshaSK/BudgetLog',
      demo: 'https://github.com/MadeeshaSK/BudgetLog/releases/download/BudgetLog_v1/BudgetLog_v1_installer.zip',
      linkedin: 'https://www.linkedin.com/posts/madeesha-karunarathna_javadevelopment-softwaredevelopment-maven-activity-7283045338481864704-Hqdt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJe91gBXQEAH54t2W8kIqsJXbgXVT-GEBM',
    },
    {
      id: 5,
      title: 'GREEN CARE ASSIST - HARDWARE PROJECT',
      description: 'Condition Controlled Ornamental Plant Box — A microcontroller project that monitors and controls temperature and humidity to create ideal conditions for ornamental plants. My role is to manage the temperature and humidity control system. First-year microcontroller-based hardware group project.',
      tags: ['C++', 'Arduino', 'ESP32'],
      category: 'team',
      projectType: 'iot',
      year: '2023/2024',
      image: '/projects/green-care-assist.jpg',
      github: 'https://github.com/MadeeshaSK/Green-Care-Assist',
      linkedin: 'https://www.linkedin.com/posts/madeesha-karunarathna_arduino-esp32-uom-activity-7245796296698011650-Ax2K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJe91gBXQEAH54t2W8kIqsJXbgXVT-GEBM',
    },
    {
      id: 6,
      title: 'PERSONAL PORTFOLIO WEBSITE',
      description: 'A fully responsive and modern personal portfolio website showcasing my projects and skills. Features include smooth navigation, project galleries, and a contact form with all the modern web technologies.',
      tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
      category: 'individual',
      projectType: 'web app',
      year: '2025',
      image: '/projects/portfolio.png',
      github: 'https://github.com/MadeeshaSK/Portfolio',
      demo: 'https://madeeshask.dev',
      linkedin: 'https://linkedin.com',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6)

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case 'web app':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      case 'mobile':
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'desktop':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30'
      case 'iot':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/30'
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-900/20 to-transparent">
      <div className="container-custom">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full mx-auto mb-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} />
          <p className={`text-lg text-text-secondary max-w-2xl mx-auto ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Here are some of my projects that showcase my skills and experience across different technologies and platforms
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id)
                setShowAllProjects(false)
              }}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25 filter-btn-active'
                  : 'bg-dark-800/50 text-text-muted hover:text-text-primary hover:bg-dark-700/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`card group hover:scale-105 cursor-pointer ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100 + 600}ms` }}
            >
              {/* Project Header */}
              <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg mb-4 overflow-hidden relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10 flex items-center justify-center p-6">
                    <div className="text-center">
                      <h4 className="text-text-primary font-semibold text-lg mb-2">{project.title}</h4>
                      <p className="text-text-muted text-sm">({project.year})</p>
                    </div>
                  </div>
                )}
                
                {/* Conditional Links Overlay */}
                {(project.github || project.demo || project.linkedin) && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-dark-900 rounded-full hover:bg-dark-800 transition-colors duration-300 text-text-primary hover:text-text-secondary"
                        onClick={(e) => e.stopPropagation()}
                        title="View Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary-600 rounded-full hover:bg-primary-700 transition-colors duration-300 text-white"
                        onClick={(e) => e.stopPropagation()}
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.linkedin && (
                      <a 
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 text-white"
                        onClick={(e) => e.stopPropagation()}
                        title="More Details"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
                
                {/* Project Type and Status Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className={`px-2 py-1 text-xs rounded-full border ${getProjectTypeColor(project.projectType)}`}>
                    {project.projectType.toUpperCase()}
                  </span>
                  {project.status && (
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary-400 transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-dark-800 text-text-secondary text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Category Badge */}
                <div className="pt-2">
                  <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                    project.category === 'individual' 
                      ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                      : 'bg-secondary-500/20 text-secondary-300 border border-secondary-500/30'
                  }`}>
                    {project.category === 'individual' ? 'Individual Project' : 'Team Project'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <div className={`text-center mt-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="btn btn-secondary group"
            >
              {showAllProjects ? 'Show Less' : `View All ${filteredProjects.length} Projects`}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        )}

        {/* GitHub Link */}
        <div className={`text-center mt-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
          <a 
            href="https://github.com/MadeeshaSK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary-400 transition-colors duration-300 text-sm flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4" />
            View more projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}