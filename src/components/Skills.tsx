// src/components/Skills.tsx

'use client'

import { useInView } from 'react-intersection-observer'
import { JSX, useState } from 'react'

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeCategory, setActiveCategory] = useState('frontend')

  // Technology icon component
  const TechIcon = ({ name, className = "" }: { name: string; className?: string }) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'React': (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.87S13.03 13.85 12 13.85s-1.87-.84-1.87-1.87S10.97 10.11 12 10.11M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
        </svg>
      ),
      'Next.js': (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.108-.8531.108-1.7475s-.012-1.0884-.108-1.7476c-.652-4.506-3.8591-8.2919-8.2087-9.6945C13.1928.6332 12.3238.4081 11.5725 0z"/>
        </svg>
      ),
      'Vue.js': (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
        </svg>
      ),
      'TypeScript': (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      ),
      'Tailwind CSS': (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      ),
      'Sass': (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M8.1,18.2c-0.2,0.7-1.3,0.4-1.7-0.2 c-0.5-0.7-0.3-1.8,0.5-2.3c0.2-0.1,0.5-0.2,0.7-0.2c0.6,0,1.1,0.4,1.2,1c0,0.2,0,0.4-0.1,0.6C8.5,17.5,8.3,17.9,8.1,18.2z"/>
        </svg>
      ),
      // Add more icons as needed...
    };

    return iconMap[name] || (
      <div className={`${className} bg-gray-600 rounded flex items-center justify-center text-xs font-bold`}>
        {name.charAt(0)}
      </div>
    );
  };

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Vue.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Sass' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
      ]
    },
    backend: {
      title: 'Backend',
      skills: [
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'NestJS' },
        { name: 'FastAPI' },
        { name: 'Flask' },
        { name: 'REST API' },
        { name: 'GraphQL' },
        { name: 'Socket.io' },
      ]
    },
    languages: {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Python' },
        { name: 'Java' },
        { name: 'C++' },
        { name: 'PHP' },
        { name: 'Go' },
        { name: 'Rust' },
      ]
    },
    databases: {
      title: 'Databases',
      skills: [
        { name: 'MongoDB' },
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'Redis' },
        { name: 'Firebase' },
        { name: 'SQLite' },
        { name: 'Elasticsearch' },
      ]
    },
    cloud: {
      title: 'Cloud',
      skills: [
        { name: 'AWS' },
        { name: 'Google Cloud' },
        { name: 'Azure' },
        { name: 'Vercel' },
        { name: 'Netlify' },
        { name: 'Digital Ocean' },
        { name: 'Heroku' },
      ]
    },
    tools: {
      title: 'Tools',
      skills: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'VS Code' },
        { name: 'Figma' },
        { name: 'Postman' },
        { name: 'Linux' },
        { name: 'Webpack' },
        { name: 'Vite' },
      ]
    },
    other: {
      title: 'Other',
      skills: [
        { name: 'Agile/Scrum' },
        { name: 'Testing' },
        { name: 'CI/CD' },
        { name: 'SEO' },
        { name: 'Performance' },
        { name: 'Security' },
        { name: 'Microservices' },
      ]
    },
    nontechnical: {
      title: 'Non-Technical Skills',
      skills: [
        { name: 'Problem Solving' },
        { name: 'Communication' },
        { name: 'Team Work' },
        { name: 'Leadership' },
        { name: 'Time Management' },
        { name: 'Creativity' },
        { name: 'Project Management' },
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
        <div className="max-w-5xl mx-auto">
          <div className={`mb-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <h3 className="text-2xl font-semibold text-center mb-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`card group hover:scale-105 transition-transform duration-300 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300 text-primary-400 group-hover:text-primary-300">
                    <TechIcon name={skill.name} className="w-full h-full" />
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
              expanding my skill set to deliver innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}