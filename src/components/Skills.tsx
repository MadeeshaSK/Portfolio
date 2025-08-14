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
        { name: 'React / Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'Tailwind CSS', level: 92, color: 'from-teal-500 to-green-500' },
        { name: 'JavaScript (ES6+)', level: 88, color: 'from-yellow-500 to-orange-500' },
        { name: 'HTML5 / CSS3', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Vue.js', level: 75, color: 'from-green-500 to-emerald-500' },
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-600 to-green-700' },
        { name: 'Python', level: 80, color: 'from-blue-500 to-yellow-500' },
        { name: 'Express.js', level: 88, color: 'from-gray-600 to-gray-700' },
        { name: 'MongoDB', level: 82, color: 'from-green-500 to-green-600' },
        { name: 'PostgreSQL', level: 78, color: 'from-blue-600 to-blue-700' },
        { name: 'REST APIs', level: 90, color: 'from-purple-500 to-purple-600' },
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git / GitHub', level: 92, color: 'from-gray-700 to-gray-800' },
        { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', level: 70, color: 'from-orange-500 to-orange-600' },
        { name: 'Figma', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'VS Code', level: 95, color: 'from-blue-600 to-blue-700' },
        { name: 'Linux', level: 80, color: 'from-yellow-600 to-orange-600' },
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
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} />
          <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex justify-center mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-2 border border-gray-800">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
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
                  <span className="text-lg font-medium text-white">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
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
            <h4 className="text-xl font-semibold mb-4 text-white">Always Learning</h4>
            <p className="text-gray-400 leading-relaxed">
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