// src/components/Skills.tsx

'use client'

import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React / Next.js', level: 95, color: 'from-primary-500 to-secondary-500' },
        { name: 'TypeScript', level: 90, color: 'from-secondary-600 to-secondary-700' },
        { name: 'Tailwind CSS', level: 92, color: 'from-primary-500 to-accent-500' },
        { name: 'JavaScript (ES6+)', level: 88, color: 'from-accent-500 to-accent-600' },
        { name: 'HTML5 / CSS3', level: 95, color: 'from-secondary-500 to-primary-500' },
        { name: 'Vue.js', level: 75, color: 'from-accent-500 to-primary-500' },
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-primary-600 to-primary-700' },
        { name: 'Python', level: 80, color: 'from-secondary-500 to-accent-500' },
        { name: 'Express.js', level: 88, color: 'from-dark-600 to-dark-700' },
        { name: 'MongoDB', level: 82, color: 'from-accent-500 to-accent-600' },
        { name: 'PostgreSQL', level: 78, color: 'from-secondary-600 to-secondary-700' },
        { name: 'REST APIs', level: 90, color: 'from-primary-500 to-secondary-600' },
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git / GitHub', level: 92, color: 'from-dark-700 to-dark-800' },
        { name: 'Docker', level: 75, color: 'from-secondary-500 to-secondary-600' },
        { name: 'AWS', level: 70, color: 'from-accent-500 to-accent-600' },
        { name: 'Figma', level: 85, color: 'from-primary-500 to-secondary-500' },
        { name: 'VS Code', level: 95, color: 'from-secondary-600 to-secondary-700' },
        { name: 'Linux', level: 80, color: 'from-accent-600 to-accent-700' },
      ]
    }
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full mx-auto mb-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} />
          <p className={`text-lg text-text-secondary max-w-2xl mx-auto ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex justify-center mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="glass-effect rounded-lg p-2 border border-text-muted/20">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'text-text-muted hover:text-text-primary hover:bg-dark-800/50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className={`mb-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <h3 className="text-2xl font-semibold text-center mb-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`card group ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-text-primary">{skill.name}</span>
                  <span className="text-sm text-text-muted">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-dark-800 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ 
                      width: inView ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100 + 1000}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className={`text-center mt-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
          <div className="card max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-text-primary">Always Learning</h4>
            <p className="text-text-muted leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and best practices to stay at the forefront of web development and deliver 
              cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}