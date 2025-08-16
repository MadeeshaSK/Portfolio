'use client'

import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Code2, Brain, Wrench, Database, Cloud, Palette, Server, Heart, Sparkles, Zap, Star, Trophy } from 'lucide-react'

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeCategory, setActiveCategory] = useState('webdev')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [animatingCategory, setAnimatingCategory] = useState(false)
  const [skillCounts, setSkillCounts] = useState<{[key: string]: number}>({})

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Count skills in each category
  useEffect(() => {
    const counts: {[key: string]: number} = {}
    Object.entries(skillCategories).forEach(([key, category]) => {
      counts[key] = category.skills.length
    })
    setSkillCounts(counts)
  }, [])

  // Technology icon component with enhanced effects
  const TechIcon = ({ name, imagePath, className = "" }: { name: string; imagePath: string; className?: string }) => {
    return (
      <div className={`${className} flex items-center justify-center relative group`}>
        <Image
          src={imagePath}
          alt={`${name} logo`}
          width={48}
          height={48}
          className="w-full h-full object-contain skill-icon transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
        />
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 to-secondary-400/0 group-hover:from-primary-400/20 group-hover:to-secondary-400/20 rounded-lg blur transition-all duration-500" />
      </div>
    );
  };

  const categoryIcons = {
    webdev: Code2,
    languages: Brain,
    mobile: Wrench,
    databases: Database,
    cloud: Cloud,
    tools: Palette,
    devops: Server,
    soft_skills: Heart
  }

  const categoryColors = {
    webdev: 'from-blue-500 to-cyan-500',
    languages: 'from-purple-500 to-pink-500',
    mobile: 'from-green-500 to-teal-500',
    databases: 'from-orange-500 to-red-500',
    cloud: 'from-sky-500 to-blue-500',
    tools: 'from-yellow-500 to-orange-500',
    devops: 'from-red-500 to-pink-500',
    soft_skills: 'from-emerald-500 to-green-500'
  }

  const skillCategories = {
    webdev: {
      title: 'Web Development',
      subtitle: 'Frontend & Backend Technologies',
      skills: [
        { name: 'HTML', imagePath: '/skills/html5.png', level: 90 },
        { name: 'CSS', imagePath: '/skills/css.png', level: 85 },
        { name: 'SaSS', imagePath: '/skills/sass.png', level: 80 },
        { name: 'JavaScript', imagePath: '/skills/javascript.png', level: 88 },
        { name: 'TypeScript', imagePath: '/skills/typescript.png', level: 82 },
        { name: 'React.js', imagePath: '/skills/react.png', level: 92 },
        { name: 'Next.js', imagePath: '/skills/nextdotjs.png', level: 85 },
        { name: 'Chakra UI', imagePath: '/skills/chakraui.png', level: 78 },
        { name: 'Tailwind CSS', imagePath: '/skills/tailwindcss.png', level: 90 },
        { name: 'Node.js', imagePath: '/skills/nodedotjs.png', level: 85 },
        { name: 'Spring Boot', imagePath: '/skills/springboot.png', level: 80 },
        { name: 'Spring Security', imagePath: '/skills/springsecurity.png', level: 75 },
        { name: 'Microservices', imagePath: '/skills/microservice.png', level: 70 },
      ]
    },
    languages: {
      title: 'Programming Languages',
      subtitle: 'Core Programming Skills',
      skills: [
        { name: 'Java', imagePath: '/skills/java.png', level: 90 },
        { name: 'C', imagePath: '/skills/c.png', level: 75 },
        { name: 'Python', imagePath: '/skills/python.png', level: 80 },
        { name: 'Dart', imagePath: '/skills/dart.png', level: 85 },
      ]
    },
    mobile: {
      title: 'Mobile Development',
      subtitle: 'Cross-platform Solutions',
      skills: [
        { name: 'Flutter', imagePath: '/skills/flutter.png', level: 85 },
      ]
    },
    databases: {
      title: 'Databases',
      subtitle: 'Data Storage & Management',
      skills: [
        { name: 'MySQL', imagePath: '/skills/mysql.png', level: 88 },
        { name: 'MongoDB', imagePath: '/skills/mongodb.png', level: 82 },
        { name: 'SQLite', imagePath: '/skills/sqlite.png', level: 85 },
        { name: 'Redis', imagePath: '/skills/redis.png', level: 75 },
      ]
    },
    cloud: {
      title: 'Cloud & Deployment',
      subtitle: 'Scalable Infrastructure',
      skills: [
        { name: 'AWS', imagePath: '/skills/aws.png', level: 80 },
        { name: 'Firebase', imagePath: '/skills/firebase.png', level: 85 },
        { name: 'Vercel', imagePath: '/skills/vercel.png', level: 90 },
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      subtitle: 'Development Ecosystem',
      skills: [
        { name: 'Git', imagePath: '/skills/git.png', level: 92 },
        { name: 'Github', imagePath: '/skills/github.png', level: 90 },
        { name: 'Figma', imagePath: '/skills/figma.png', level: 85 },
        { name: 'ClickUp', imagePath: '/skills/clickup.png', level: 88 },
        { name: 'Canva', imagePath: '/skills/canva.png', level: 82 },
        { name: 'Postman', imagePath: '/skills/postman.png', level: 85 },
        { name: 'Arduino', imagePath: '/skills/arduino.png', level: 70 },
      ]
    },
    devops: {
      title: 'DevOps & Other Skills',
      subtitle: 'Advanced Technical Skills',
      skills: [
        { name: 'CI/CD', imagePath: '/skills/devops.png', level: 75 },
        { name: 'Jenkins', imagePath: '/skills/jenkins.png', level: 70 },
        { name: 'Docker', imagePath: '/skills/docker.png', level: 78 },
        { name: 'OOP', imagePath: '/skills/oop.png', level: 90 },
        { name: 'DSA', imagePath: '/skills/dsa.png', level: 85 },
        { name: 'Networking', imagePath: '/skills/networking.png', level: 80 },
        { name: 'Cloud Security', imagePath: '/skills/cloudsecurity.png', level: 75 },
        { name: 'Digital Systems', imagePath: '/skills/digital-transformation.png', level: 82 },
        { name: 'AI & Machine Learning', imagePath: '/skills/ai.png', level: 70 },
        { name: 'Languages (Sinhala & English)', imagePath: '/skills/language.png', level: 95 },
      ]
    },
    soft_skills: {
      title: 'Non-Technical Skills',
      subtitle: 'Professional Competencies',
      skills: [
        { name: 'Teamwork', imagePath: '/skills/collaboration.png', level: 95 },
        { name: 'Quick Learner', imagePath: '/skills/agility.png', level: 92 },
        { name: 'Problem Solving', imagePath: '/skills/problem-solving.png', level: 90 },
        { name: 'Time Management', imagePath: '/skills/time-management.png', level: 88 },
      ]
    }
  }

  const handleCategoryChange = (key: string) => {
    if (key !== activeCategory) {
      setAnimatingCategory(true)
      setTimeout(() => {
        setActiveCategory(key)
        setAnimatingCategory(false)
      }, 300)
    }
  }

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/6 left-1/5 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-accent-500/5 rounded-full blur-2xl animate-float-fast" />
        
        {/* Floating tech particles */}
        <div className="absolute top-20 right-1/4 w-3 h-3 bg-primary-400/30 rounded-full animate-float-particle" />
        <div className="absolute bottom-40 left-1/5 w-2 h-2 bg-secondary-400/40 rounded-full animate-float-particle-reverse" />
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-accent-400/20 rounded-full animate-bounce-slow" />
        
        {/* Tech icons floating */}
        <div className="absolute top-1/4 right-1/6 animate-float-icon opacity-5">
          <Code2 className="w-16 h-16 text-primary-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float-icon-reverse opacity-8">
          <Sparkles className="w-12 h-12 text-secondary-400" />
        </div>
        <div className="absolute top-1/2 right-1/5 animate-spin-slow opacity-6">
          <Zap className="w-14 h-14 text-accent-400" />
        </div>
      </div>

      {/* Cursor follower */}
      <div 
        className="fixed pointer-events-none z-50 w-6 h-6 bg-secondary-400/20 rounded-full blur-sm transition-all duration-300 ease-out"
        style={{ 
          left: mousePosition.x - 12, 
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})` 
        }}
      />

      <div className="container-custom relative z-10">
        <div ref={ref} className="text-center mb-16">
          <div className="relative">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              My{' '}
              <span className="gradient-text relative">
                Skills
                <div className="absolute -inset-3 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-lg blur animate-pulse-glow" />
              </span>
            </h2>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-8 w-6 h-6 border-2 border-primary-400/20 rounded-full animate-spin-slow" />
            <div className="absolute top-4 -left-8 w-4 h-4 bg-secondary-400/20 rounded-full animate-pulse delay-500" />
          </div>
          
          <div className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full mx-auto mb-8 transition-all duration-1000 delay-200 ${inView ? 'scale-x-100' : 'scale-x-0'} origin-center`} />
          
          <p className={`text-lg text-text-secondary max-w-2xl mx-auto transition-all duration-1000 delay-400 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Technologies and skills I use to build{' '}
            <span className="text-primary-400 font-semibold">amazing</span>{' '}
            digital experiences
          </p>
        </div>

        {/* Enhanced Category Stats */}
        <div className={`text-center mb-8 transition-all duration-1000 delay-600 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Star className="w-4 h-4 text-primary-400 animate-pulse" />
              <span>Total: <span className="text-primary-400 font-semibold">{Object.values(skillCounts).reduce((a, b) => a + b, 0)}</span> Skills</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Trophy className="w-4 h-4 text-secondary-400 animate-bounce" />
              <span>Categories: <span className="text-secondary-400 font-semibold">{Object.keys(skillCategories).length}</span></span>
            </div>
          </div>
        </div>

        {/* Enhanced Category Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-800 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="glass-effect rounded-xl p-3 border border-text-muted/20 backdrop-blur-lg">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {Object.entries(skillCategories).map(([key, category]) => {
                const IconComponent = categoryIcons[key as keyof typeof categoryIcons]
                const isActive = activeCategory === key
                const colorGradient = categoryColors[key as keyof typeof categoryColors]
                
                return (
                  <button
                    key={key}
                    onClick={() => handleCategoryChange(key)}
                    className={`group relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-500 hover:scale-105 flex flex-col items-center gap-2 min-w-[100px] ${
                      isActive
                        ? 'text-white shadow-xl'
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient} rounded-lg transition-all duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-20'
                    }`} />
                    
                    {/* Icon */}
                    <div className="relative z-10">
                      <IconComponent className={`w-5 h-5 transition-all duration-500 ${
                        isActive ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                      }`} />
                    </div>
                    
                    {/* Category name */}
                    <span className="relative z-10 text-xs leading-tight text-center">
                      {category.title}
                    </span>
                    
                    {/* Skill count badge */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r ${colorGradient} flex items-center justify-center text-xs font-bold text-white transition-all duration-500 ${
                      isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'
                    }`}>
                      {skillCounts[key] || 0}
                    </div>
                    
                    {/* Hover particles */}
                    {isActive && (
                      <>
                        <div className="absolute -top-1 -right-1 w-1 h-1 bg-white rounded-full animate-ping" />
                        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-white rounded-full animate-ping delay-300" />
                      </>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Skills Grid with enhanced animations */}
        <div className="max-w-7xl mx-auto">
          {/* Category Header */}
          <div className={`text-center mb-12 transition-all duration-500 ${animatingCategory ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
            <div className="flex items-center justify-center gap-4 mb-4">
              {(() => {
                const IconComponent = categoryIcons[activeCategory as keyof typeof categoryIcons]
                const colorGradient = categoryColors[activeCategory as keyof typeof categoryColors]
                return (
                  <div className={`w-12 h-12 bg-gradient-to-br ${colorGradient} rounded-xl flex items-center justify-center animate-pulse-glow`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                )
              })()}
              <div>
                <h3 className="text-2xl font-semibold gradient-text">
                  {skillCategories[activeCategory as keyof typeof skillCategories].title}
                </h3>
                <p className="text-sm text-text-muted">
                  {skillCategories[activeCategory as keyof typeof skillCategories].subtitle}
                </p>
              </div>
            </div>
            
            <div className={`w-16 h-0.5 bg-gradient-to-r ${categoryColors[activeCategory as keyof typeof categoryColors]} rounded-full mx-auto`} />
          </div>

          {/* Skills Grid */}
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 transition-all duration-500 ${animatingCategory ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div 
                key={`${activeCategory}-${skill.name}`}
                className={`card group hover:scale-105 transition-all duration-500 hover:rotate-1 relative overflow-hidden ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 50}ms` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[activeCategory as keyof typeof categoryColors]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="flex flex-col items-center text-center p-4 relative z-10">
                  {/* Icon container */}
                  <div className="w-14 h-14 mb-3 group-hover:scale-125 transition-all duration-500 relative">
                    <TechIcon 
                      name={skill.name} 
                      imagePath={skill.imagePath}
                      className="w-full h-full" 
                    />
                    
                    {/* Skill level indicator */}
                    <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r ${categoryColors[activeCategory as keyof typeof categoryColors]} flex items-center justify-center text-xs font-bold text-white transition-all duration-500 ${
                      hoveredSkill === skill.name ? 'scale-100' : 'scale-0'
                    }`}>
                      {Math.floor(skill.level / 10)}
                    </div>
                  </div>
                  
                  {/* Skill name */}
                  <span className="text-sm font-medium text-text-primary group-hover:text-primary-400 transition-all duration-300 mb-2">
                    {skill.name}
                  </span>
                  
                  {/* Skill level bar */}
                  <div className={`w-full h-1 bg-gray-700 rounded-full overflow-hidden transition-all duration-500 ${
                    hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div 
                      className={`h-full bg-gradient-to-r ${categoryColors[activeCategory as keyof typeof categoryColors]} transition-all duration-1000 ease-out`}
                      style={{ width: hoveredSkill === skill.name ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
                
                {/* Floating particles on hover */}
                {hoveredSkill === skill.name && (
                  <>
                    <div className="absolute top-2 right-2 w-1 h-1 bg-primary-400 rounded-full animate-ping" />
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-secondary-400 rounded-full animate-ping delay-200" />
                    <div className="absolute top-1/2 left-2 w-1 h-1 bg-accent-400 rounded-full animate-ping delay-400" />
                  </>
                )}
                
                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary-400/0 group-hover:border-primary-400/40 transition-colors duration-500 rounded-tr" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary-400/0 group-hover:border-secondary-400/40 transition-colors duration-500 rounded-bl" />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Additional Info */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="card max-w-3xl mx-auto group hover:scale-105 transition-all duration-500 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center animate-pulse-glow">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-text-primary group-hover:text-primary-400 transition-colors duration-300">
                  Continuous Learning Journey
                </h4>
              </div>
              
              <p className="text-text-muted leading-relaxed mb-6 group-hover:text-text-secondary transition-colors duration-300">
                I'm passionate about staying current with technology trends and continuously 
                expanding my skill set to deliver innovative solutions across multiple domains.
              </p>
              
              {/* Progress indicators */}
              <div className="flex justify-center items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                  <span className="text-text-muted">Always Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse delay-300" />
                  <span className="text-text-muted">Building Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse delay-600" />
                  <span className="text-text-muted">Exploring New Tech</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-3 h-3 border-2 border-primary-400/20 rounded-full animate-spin-slow" />
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary-400/30 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}