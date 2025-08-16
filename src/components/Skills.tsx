// src/components/Skills.tsx

'use client'

import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Image from 'next/image'

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeCategory, setActiveCategory] = useState('webdev')

  // Technology icon component
  const TechIcon = ({ name, imagePath, className = "" }: { name: string; imagePath: string; className?: string }) => {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <Image
          src={imagePath}
          alt={`${name} logo`}
          width={48}
          height={48}
          className="w-full h-full object-contain skill-icon transition-all duration-300"
        />
      </div>
    );
  };

  const skillCategories = {
    webdev: {
      title: 'Web Development',
      skills: [
        { name: 'HTML', imagePath: '/skills/html5.png' },
        { name: 'CSS', imagePath: '/skills/css.png' },
        { name: 'SaSS', imagePath: '/skills/sass.png' },
        { name: 'JavaScript', imagePath: '/skills/javascript.png' },
        { name: 'TypeScript', imagePath: '/skills/typescript.png' },
        { name: 'React.js', imagePath: '/skills/react.png' },
        { name: 'Next.js', imagePath: '/skills/nextdotjs.png' },
        { name: 'Chakra UI', imagePath: '/skills/chakra-ui.png' },
        { name: 'Tailwind CSS', imagePath: '/skills/tailwindcss.png' },
        { name: 'Node.js', imagePath: '/skills/nodedotjs.png' },
        { name: 'Spring Boot', imagePath: '/skills/springboot.png' },
        { name: 'Spring Security', imagePath: '/skills/springsecurity.png' },
        { name: 'Microservices', imagePath: '/skills/microservice.png' },
      ]
    },
    languages: {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', imagePath: '/skills/java.png' },
        { name: 'C', imagePath: '/skills/c.png' },
        { name: 'Python', imagePath: '/skills/python.png' },
        { name: 'Dart', imagePath: '/skills/dart.png' },
      ]
    },
    mobile: {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', imagePath: '/skills/flutter.png' },
      ]
    },
    databases: {
      title: 'Databases',
      skills: [
        { name: 'MySQL', imagePath: '/skills/mysql.png' },
        { name: 'MongoDB', imagePath: '/skills/mongodb.png' },
        { name: 'SQLite', imagePath: '/skills/sqlite.png' },
        { name: 'Redis', imagePath: '/skills/redis.png' },
      ]
    },
    cloud: {
      title: 'Cloud & Deployment',
      skills: [
        { name: 'AWS', imagePath: '/skills/aws.png' },
        { name: 'Firebase', imagePath: '/skills/firebase.png' },
        { name: 'Vercel', imagePath: '/skills/vercel.png' },
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', imagePath: '/skills/git.png' },
        { name: 'Github', imagePath: '/skills/github.png' },
        { name: 'Figma', imagePath: '/skills/figma.png' },
        { name: 'ClickUp', imagePath: '/skills/clickup.png' },
        { name: 'Canva', imagePath: '/skills/canva.png' },
        { name: 'Postman', imagePath: '/skills/postman.png' },
        { name: 'Arduino', imagePath: '/skills/arduino.png' },
      ]
    },
    devops: {
      title: 'DevOps & Other Skills',
      skills: [
        { name: 'CI/CD', imagePath: '/skills/devops.png' },
        { name: 'Jenkins', imagePath: '/skills/jenkins.png' },
        { name: 'Docker', imagePath: '/skills/docker.png' },
        { name: 'OOP', imagePath: '/skills/oop.png' },
        { name: 'DSA', imagePath: '/skills/dsa.png' },
        { name: 'Networking', imagePath: '/skills/networking.png' },
        { name: 'Cloud Security', imagePath: '/skills/cloudsecurity.png' },
        { name: 'Digital Systems', imagePath: '/skills/digital-transformation.png' },
        { name: 'AI & Machine Learning', imagePath: '/skills/ai.png' },
        { name: 'Languages (Sinhala & English)', imagePath: '/skills/language.png' },
      ]
    },
    soft_skills: {
      title: 'Non-Technical Skills',
      skills: [
        { name: 'Teamwork', imagePath: '/skills/collaboration.png' },
        { name: 'Quick Learner', imagePath: '/skills/agility.png' },
        { name: 'Problem Solving', imagePath: '/skills/problem-solving.png' },
        { name: 'Time Management', imagePath: '/skills/time-management.png' },
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
            Technologies and skills I use to build amazing digital experiences
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="glass-effect rounded-lg p-2 border border-text-muted/20">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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
        <div className="max-w-6xl mx-auto">
          <div className={`mb-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <h3 className="text-2xl font-semibold text-center mb-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`card group hover:scale-105 transition-transform duration-300 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <TechIcon 
                      name={skill.name} 
                      imagePath={skill.imagePath}
                      className="w-full h-full" 
                    />
                  </div>
                  <span className="text-sm font-medium text-text-primary group-hover:text-primary-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className={`text-center mt-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
          <div className="card max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-text-primary">Continuous Learning</h4>
            <p className="text-text-muted leading-relaxed">
              I'm passionate about staying current with technology trends and continuously 
              expanding my skill set to deliver innovative solutions across multiple domains.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}