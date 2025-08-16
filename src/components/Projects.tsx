'use client'

import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { ExternalLink, Github, Linkedin, Code2, Sparkles, Star, Trophy, Target, Zap, Calendar, Users, User, Rocket, Eye, Play } from 'lucide-react'

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeFilter, setActiveFilter] = useState('all')
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [animatingFilter, setAnimatingFilter] = useState(false)
  const [projectCounts, setProjectCounts] = useState<{[key: string]: number}>({})

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const filters = [
    { id: 'all', label: 'All Projects', icon: Rocket },
    { id: 'individual', label: 'Individual Projects', icon: User },
    { id: 'team', label: 'Team Projects', icon: Users },
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
      featured: true,
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
      featured: true,
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
      status: 'ONGOING(75%)',
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
      demo: 'https://madeeshask.vercel.app/',
      linkedin: 'https://linkedin.com',
    },
  ]

  // Calculate project counts
  useEffect(() => {
    const counts: {[key: string]: number} = {}
    filters.forEach(filter => {
      if (filter.id === 'all') {
        counts[filter.id] = projects.length
      } else {
        counts[filter.id] = projects.filter(project => project.category === filter.id).length
      }
    })
    setProjectCounts(counts)
  }, [])

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

  const getProjectTypeIcon = (type: string) => {
    switch (type) {
      case 'web app':
        return Code2
      case 'mobile':
        return Zap
      case 'desktop':
        return Target
      case 'iot':
        return Sparkles
      default:
        return Star
    }
  }

  const handleFilterChange = (filterId: string) => {
    if (filterId !== activeFilter) {
      setAnimatingFilter(true)
      setTimeout(() => {
        setActiveFilter(filterId)
        setShowAllProjects(false)
        setAnimatingFilter(false)
      }, 300)
    }
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-900/20 to-transparent relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/5 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-2/3 left-1/6 w-64 h-64 bg-accent-500/5 rounded-full blur-2xl animate-float-fast" />
        
        {/* Floating particles */}
        <div className="absolute top-20 right-1/4 w-3 h-3 bg-primary-400/40 rounded-full animate-float-particle" />
        <div className="absolute bottom-40 left-1/5 w-2 h-2 bg-secondary-400/50 rounded-full animate-float-particle-reverse" />
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-accent-400/30 rounded-full animate-bounce-slow" />
        
        {/* Tech icons floating */}
        <div className="absolute top-1/4 right-1/6 animate-float-icon opacity-8">
          <Rocket className="w-14 h-14 text-primary-400" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float-icon-reverse opacity-6">
          <Trophy className="w-12 h-12 text-secondary-400" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-spin-slow opacity-10">
          <Star className="w-16 h-16 text-accent-400" />
        </div>
      </div>

      {/* Cursor follower */}
      <div 
        className="fixed pointer-events-none z-50 w-6 h-6 bg-accent-400/20 rounded-full blur-sm transition-all duration-300 ease-out"
        style={{ 
          left: mousePosition.x - 12, 
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})` 
        }}
      />

      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <div ref={ref} className="text-center mb-16">
          <div className="relative">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              My{' '}
              <span className="gradient-text relative">
                Projects
                <div className="absolute -inset-3 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-lg blur animate-pulse-glow" />
              </span>
            </h2>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-8 w-6 h-6 border-2 border-primary-400/30 rounded-full animate-spin-slow" />
            <div className="absolute top-4 -left-8 w-4 h-4 bg-secondary-400/20 rounded-full animate-pulse delay-500" />
          </div>
          
          <div className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full mx-auto mb-8 transition-all duration-1000 delay-200 ${inView ? 'scale-x-100' : 'scale-x-0'} origin-center`} />
          
          <p className={`text-lg text-text-secondary max-w-2xl mx-auto transition-all duration-1000 delay-400 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Here are some of my projects that showcase my skills and experience across{' '}
            <span className="text-primary-400 font-semibold">different technologies</span>{' '}
            and{' '}
            <span className="text-secondary-400 font-semibold">platforms</span>
          </p>
        </div>

        {/* Enhanced Project Stats */}
        <div className={`text-center mb-8 transition-all duration-1000 delay-600 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Trophy className="w-4 h-4 text-primary-400 animate-pulse" />
              <span>Total: <span className="text-primary-400 font-semibold">{projects.length}</span> Projects</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Star className="w-4 h-4 text-secondary-400 animate-bounce" />
              <span>Featured: <span className="text-secondary-400 font-semibold">{projects.filter(p => p.featured).length}</span></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Zap className="w-4 h-4 text-accent-400 animate-pulse delay-300" />
              <span>Technologies: <span className="text-accent-400 font-semibold">{[...new Set(projects.flatMap(p => p.tags))].length}</span></span>
            </div>
          </div>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-800 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="glass-effect rounded-xl p-3 border border-text-muted/20 backdrop-blur-lg">
            <div className="flex gap-2">
              {filters.map((filter) => {
                const IconComponent = filter.icon
                const isActive = activeFilter === filter.id
                const count = projectCounts[filter.id] || 0
                
                return (
                  <button
                    key={filter.id}
                    onClick={() => handleFilterChange(filter.id)}
                    className={`group relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-500 hover:scale-105 flex items-center gap-3 min-w-[140px] ${
                      isActive
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25 filter-btn-active'
                        : 'bg-dark-800/50 text-text-muted hover:text-text-primary hover:bg-dark-700/50'
                    }`}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg transition-all duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-20'
                    }`} />
                    
                    {/* Icon */}
                    <IconComponent className={`w-4 h-4 transition-all duration-500 relative z-10 ${
                      isActive ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                    }`} />
                    
                    {/* Label */}
                    <span className="relative z-10">{filter.label}</span>
                    
                    {/* Count badge */}
                    <div className={`w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold transition-all duration-500 relative z-10 ${
                      isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'
                    }`}>
                      {count}
                    </div>
                    
                    {/* Hover particles */}
                    {isActive && (
                      <>
                        <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-ping" />
                        <div className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full animate-ping delay-300" />
                      </>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${animatingFilter ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
          {displayedProjects.map((project, index) => {
            const TypeIcon = getProjectTypeIcon(project.projectType)
            const isHovered = hoveredProject === project.id
            
            return (
              <div 
                key={project.id}
                className={`card group hover:scale-105 cursor-pointer relative overflow-hidden ${inView ? 'animate-fade-in-up' : 'opacity-0'} ${project.featured ? 'ring-2 ring-primary-400/30' : ''}`}
                style={{ animationDelay: `${index * 100 + 600}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 transition-all duration-500" />
                
                {/* Project Header */}
                <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg mb-4 overflow-hidden relative group/image">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10 flex items-center justify-center p-6">
                      <div className="text-center">
                        <TypeIcon className="w-12 h-12 text-primary-400 mx-auto mb-3 animate-pulse-glow" />
                        <h4 className="text-text-primary font-semibold text-lg mb-2">{project.title}</h4>
                        <p className="text-text-muted text-sm">({project.year})</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Enhanced Links Overlay */}
                  {(project.github || project.demo || project.linkedin) && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-dark-900/90 backdrop-blur-sm rounded-full hover:bg-dark-800 transition-all duration-300 text-text-primary hover:text-white hover:scale-110 group/link"
                          onClick={(e) => e.stopPropagation()}
                          title="View Code"
                        >
                          <Github className="w-5 h-5 group-hover/link:rotate-12 transition-transform duration-300" />
                          <div className="absolute -inset-2 bg-primary-400/0 group-hover/link:bg-primary-400/20 rounded-full blur transition-all duration-300" />
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-primary-600/90 backdrop-blur-sm rounded-full hover:bg-primary-700 transition-all duration-300 text-white hover:scale-110 group/link"
                          onClick={(e) => e.stopPropagation()}
                          title="Live Demo"
                        >
                          <Play className="w-5 h-5 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                          <div className="absolute -inset-2 bg-primary-400/0 group-hover/link:bg-primary-400/30 rounded-full blur transition-all duration-300" />
                        </a>
                      )}
                      {project.linkedin && (
                        <a 
                          href={project.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-blue-600/90 backdrop-blur-sm rounded-full hover:bg-blue-700 transition-all duration-300 text-white hover:scale-110 group/link"
                          onClick={(e) => e.stopPropagation()}
                          title="More Details"
                        >
                          <Linkedin className="w-5 h-5 group-hover/link:rotate-12 transition-transform duration-300" />
                          <div className="absolute -inset-2 bg-blue-400/0 group-hover/link:bg-blue-400/30 rounded-full blur transition-all duration-300" />
                        </a>
                      )}
                    </div>
                  )}
                  
                  {/* Enhanced Project Type and Status Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className={`px-3 py-1 text-xs rounded-full border ${getProjectTypeColor(project.projectType)} backdrop-blur-sm flex items-center gap-1`}>
                      <TypeIcon className="w-3 h-3" />
                      <span>{project.projectType.toUpperCase()}</span>
                    </div>
                    {project.status && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30 backdrop-blur-sm animate-pulse">
                        {project.status}
                      </span>
                    )}
                    {project.featured && (
                      <div className="px-2 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 text-xs rounded-full border border-primary-500/30 backdrop-blur-sm flex items-center gap-1">
                        <Star className="w-3 h-3 animate-pulse" />
                        <span>FEATURED</span>
                      </div>
                    )}
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-2 py-1 bg-black/50 backdrop-blur-sm text-text-secondary text-xs rounded-full border border-text-muted/20 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Project Info */}
                <div className="space-y-4 relative z-10">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary-400 transition-colors duration-300 mb-2 flex items-center gap-2">
                      {project.title}
                      {isHovered && <Sparkles className="w-5 h-5 text-primary-400 animate-spin" />}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed group-hover:text-text-secondary transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Enhanced Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tag}
                        className={`px-2 py-1 bg-dark-800 text-text-secondary text-xs rounded hover:bg-primary-500/20 hover:text-primary-300 transition-all duration-300 cursor-pointer ${
                          isHovered ? 'animate-pulse' : ''
                        }`}
                        style={{ animationDelay: `${tagIndex * 100}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Category Badge */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                      project.category === 'individual' 
                        ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30 hover:bg-primary-500/30'
                        : 'bg-secondary-500/20 text-secondary-300 border border-secondary-500/30 hover:bg-secondary-500/30'
                    }`}>
                      {project.category === 'individual' ? <User className="w-3 h-3" /> : <Users className="w-3 h-3" />}
                      <span>{project.category === 'individual' ? 'Individual Project' : 'Team Project'}</span>
                    </span>
                    
                    {/* Quick action buttons */}
                    <div className="flex gap-1">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-text-muted hover:text-primary-400 hover:bg-primary-500/10 rounded transition-all duration-300 group/quick"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Eye className="w-4 h-4 group-hover/quick:scale-110 transition-transform duration-300" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-text-muted hover:text-secondary-400 hover:bg-secondary-500/10 rounded transition-all duration-300 group/quick"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4 group-hover/quick:scale-110 transition-transform duration-300" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                {isHovered && (
                  <>
                    <div className="absolute top-2 right-2 w-1 h-1 bg-primary-400 rounded-full animate-ping" />
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-secondary-400 rounded-full animate-ping delay-200" />
                    <div className="absolute top-1/2 right-2 w-1 h-1 bg-accent-400 rounded-full animate-ping delay-400" />
                  </>
                )}

                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary-400/0 group-hover:border-primary-400/40 transition-colors duration-500 rounded-tr" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary-400/0 group-hover:border-secondary-400/40 transition-colors duration-500 rounded-bl" />
              </div>
            )
          })}
        </div>

        {/* Enhanced Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="btn btn-secondary group relative overflow-hidden hover:scale-105 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAllProjects ? 'Show Less' : `View All ${filteredProjects.length} Projects`}
                <div className={`transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`}>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </button>
          </div>
        )}

        {/* Enhanced GitHub Link Section */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="card max-w-md mx-auto group hover:scale-105 transition-all duration-500 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-500" />
            
            <div className="relative z-10 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Github className="w-6 h-6 text-white" />
              </div>
              
              <h4 className="text-lg font-semibold text-text-primary group-hover:text-primary-400 transition-colors duration-300 mb-2">
                Explore More Projects
              </h4>
              
              <p className="text-text-muted text-sm mb-4 group-hover:text-text-secondary transition-colors duration-300">
                Check out my GitHub for more projects and contributions
              </p>
              
              <a 
                href="https://github.com/MadeeshaSK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 hover:bg-primary-500/20 text-text-secondary hover:text-primary-300 rounded-lg transition-all duration-300 group/link"
              >
                <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-300" />
              </a>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary-400/20 group-hover:border-primary-400/60 transition-colors duration-500" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-secondary-400/20 group-hover:border-secondary-400/60 transition-colors duration-500" />
            
            {/* Floating particles on hover */}
            <div className="absolute top-4 right-4 w-1 h-1 bg-primary-400/0 group-hover:bg-primary-400/60 rounded-full transition-all duration-300 group-hover:animate-ping" />
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary-400/0 group-hover:bg-secondary-400/60 rounded-full transition-all duration-300 group-hover:animate-ping delay-200" />
          </div>
        </div>

        {/* Enhanced Project Statistics */}
        <div className={`mt-16 transition-all duration-1000 delay-1400 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                number: projects.length, 
                label: 'Total Projects',
                icon: Rocket,
                color: 'from-primary-500 to-secondary-500',
              },
              { 
                number: [...new Set(projects.flatMap(p => p.tags))].length, 
                label: 'Technologies Used',
                icon: Code2,
                color: 'from-secondary-500 to-accent-500',
              },
              { 
                number: projects.filter(p => p.category === 'individual').length, 
                label: 'Individual Projects',
                icon: User,
                color: 'from-accent-500 to-primary-500',
              },
              { 
                number: projects.filter(p => p.category === 'team').length, 
                label: 'Team Projects',
                icon: Users,
                color: 'from-primary-500 to-secondary-500',
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div 
                  key={stat.label}
                  className="card text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Number */}
                    <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-500">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-sm text-text-muted uppercase tracking-wide font-medium group-hover:text-text-secondary transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Hover particles */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-primary-400/0 group-hover:bg-primary-400/60 rounded-full transition-all duration-300 group-hover:animate-ping" />
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-secondary-400/0 group-hover:bg-secondary-400/60 rounded-full transition-all duration-300 group-hover:animate-ping delay-200" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}