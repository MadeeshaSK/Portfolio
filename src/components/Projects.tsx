// src/components/Projects.tsx

'use client'

import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeFilter, setActiveFilter] = useState('all')
  const [currentProject, setCurrentProject] = useState(0)

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'UI/UX' },
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.',
      image: '/api/placeholder/600/400',
      tags: ['React Native', 'Firebase', 'Redux'],
      category: 'mobile',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Design System',
      description: 'A comprehensive design system with reusable components, design tokens, and documentation for consistent user experiences.',
      image: '/api/placeholder/600/400',
      tags: ['Figma', 'Storybook', 'Design Tokens'],
      category: 'design',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with geolocation, forecasts, and interactive maps using modern web technologies.',
      image: '/api/placeholder/600/400',
      tags: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Social Media App',
      description: 'A full-featured social media application with posts, comments, likes, and real-time messaging capabilities.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'GraphQL', 'Apollo', 'AWS'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="container-custom">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} />
          <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id)
                setCurrentProject(0)
              }}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 filter-btn-active'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Featured Project Carousel */}
        {filteredProjects.length > 0 && (
          <div className={`mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <div className="relative max-w-4xl mx-auto">
              <div className="card overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Project Image */}
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-gray-400 text-lg">Project Screenshot</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {filteredProjects[currentProject].title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {filteredProjects[currentProject].description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[currentProject].tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a 
                        href={filteredProjects[currentProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary group"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a 
                        href={filteredProjects[currentProject].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary group"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              {filteredProjects.length > 1 && (
                <>
                  <button
                    onClick={prevProject}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 hover:bg-gray-800 rounded-full transition-colors duration-300 backdrop-blur-sm"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 hover:bg-gray-800 rounded-full transition-colors duration-300 backdrop-blur-sm"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {filteredProjects.length > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {filteredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentProject 
                          ? 'bg-blue-500' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 6).map((project, index) => (
            <div 
              key={project.id}
              className={`card group hover:scale-105 cursor-pointer ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100 + 800}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Project Image</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description.slice(0, 100)}...
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className={`text-center mt-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary group"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}