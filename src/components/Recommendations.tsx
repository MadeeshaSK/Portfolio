'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Building2, Calendar, ExternalLink, Linkedin, Quote, UserCheck } from 'lucide-react'

export default function Recommendations() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const recommendations: any[] = [
    {
      name: 'Ms. Kumuduni Rajapakshe',
      profileUrl: 'https://www.linkedin.com/in/kumuduni/',
      companyUrl: 'https://www.linkedin.com/company/silc-general/posts/?feedView=all',
      role: 'Manager Software Development',
      company: 'Sri Lanka Insurance Corporation General Ltd.',
      period: '2026',
      relationship: 'Supervised during internship period',
      quote:
        'I had the pleasure of mentoring and managing Madeesha Karunarathne during his time as an Intern Software Engineer in our SLIC ICT Software Development team. From day one, Madeesha stood out for his remarkable ability to learn quickly and adapt to complex software systems and technical frameworks. Throughout his internship, he consistently demonstrated strong analytical skills, a solid technical foundation, a great understanding of the insurance domain, and a high level of professionalism. Madeesha took full responsibility for assigned tasks, delivered clean and reliable code, and approached new technical challenges with great enthusiasm. He has built an excellent foundation for a successful career in software engineering, and I am confident he will be a valuable asset to any technical team. I highly recommend him!',
      linkedinUrl: 'https://www.linkedin.com/in/madeesha-karunarathna/details/recommendations/',
      gradient: 'from-primary-500 via-secondary-500 to-accent-500'
    }
  ]

  return (
    <section id="recommendations" className="section-padding bg-gradient-to-b from-dark-900/40 via-transparent to-dark-900/30 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float-reverse" />
      </div>

      {/* Cursor Follower */}
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-accent-400/20 rounded-full blur-sm transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      />

      <div className="container-custom relative z-10">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 relative">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="gradient-text relative inline-block">
                Recommendations
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-400/10 to-primary-400/10 rounded-lg blur animate-pulse-glow" />
              </span>
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full mx-auto mb-6 transition-all duration-1000 delay-200 ${inView ? 'scale-x-100' : 'scale-x-0'}`} />
            <p className={`text-text-muted text-base sm:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Recommendations from industry leads, engineering colleagues, and academic mentors.
            </p>
          </div>

          {/* Recommendations Cards Grid */}
          {recommendations.length === 0 ? (
            <div className="card text-center p-8 border border-gray-800/80 bg-dark-900/60 max-w-lg mx-auto">
              <UserCheck className="w-10 h-10 text-primary-400/60 mx-auto mb-3 animate-pulse" />
              <h3 className="text-lg font-semibold text-text-primary mb-1">Recommendations</h3>
              <p className="text-sm text-text-muted">Detailed recommendations will be published shortly.</p>
            </div>
          ) : (
            <div className={recommendations.length === 1 ? "grid grid-cols-1 max-w-3xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
              {recommendations.map((rec, index) => (
                <div
                  key={rec.name}
                  className={`card group relative overflow-hidden transition-all duration-700 hover:scale-[1.02] flex flex-col justify-between ${inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  {/* Top Accent Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${rec.gradient}`} />

                  {/* Background Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 p-4 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Header: Name, Position, Period */}
                      <div className="flex items-start justify-between gap-4 mb-4 border-b border-gray-800/80 pb-4">
                        <div>
                          <a href={rec.profileUrl} target="_blank" rel="noopener noreferrer">
                            <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-400 transition-colors duration-300">
                              {rec.name}
                            </h3>
                          </a>
                          <p className="text-sm text-secondary-400 font-semibold mt-0.5">
                            {rec.role}
                          </p>
                          <a href={rec.companyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary-400 transition-colors duration-300 font-medium mt-1.5">
                            <Building2 className="w-3.5 h-3.5 text-secondary-400 shrink-0" />
                            <span>{rec.company}</span>
                          </a>
                        </div>

                        {/* Date Badge */}
                        <div className="flex items-center gap-1.5 bg-dark-800/80 px-3 py-1 rounded-full border border-gray-700/50 text-xs text-gray-300 shrink-0">
                          <Calendar className="w-3.5 h-3.5 text-primary-400" />
                          <span>{rec.period}</span>
                        </div>
                      </div>

                      {/* Temporary Recommendation Quote Body */}
                      <div className="relative my-3 pl-3 border-l-2 border-primary-500/40 text-gray-300 text-sm leading-relaxed italic">
                        <Quote className="w-5 h-5 text-primary-400/20 absolute -top-2 -left-2.5 rotate-180 pointer-events-none" />
                        &ldquo;{rec.quote}&rdquo;
                      </div>
                    </div>

                    {/* Bottom Line: Relationship & Verify Link */}
                    <div className="pt-3 border-t border-gray-800/80 mt-2 flex items-center justify-between gap-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 text-gray-300 font-medium">
                        <UserCheck className="w-4 h-4 text-primary-400 shrink-0" />
                        <span>{rec.relationship}</span>
                      </div>

                      <a
                        href={rec.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 hover:text-blue-300 border border-blue-500/20 transition-all duration-300 shrink-0 font-medium text-xs"
                        title="Verify on LinkedIn"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
