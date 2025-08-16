'use client'

import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Instagram, AlertCircle, CheckCircle, Sparkles, MessageSquare } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'madeeshasachindu2@gmail.com',
      link: 'mailto:madeeshasachindu2@gmail.com',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 76 374 1826, +94 75 932 7242',
      link: 'tel:+94763741826',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: [
        'Moratuwa, Sri Lanka',
        'Postal Address: No 30/2, Urulewaththa, Wattappola',
      ],
      link: 'https://maps.app.goo.gl/oBTKHMSxh1t43KDNA',
      color: 'from-blue-500 to-cyan-600',
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/madeesha-karunarathna',
      color: 'hover:text-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/MadeeshaSK',
      color: 'hover:text-gray-300',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:madeeshasachindu2@gmail.com',
      color: 'hover:text-red-400',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/madeeshasachindu.karunarathna',
      color: 'hover:text-blue-500',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/m_a_d_e_e__sh_a/',
      color: 'hover:text-pink-400',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/94763741826',
      color: 'hover:text-green-400',
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear any existing error when user starts typing
    if (error) {
      setError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      // Simulate form submission (replace with actual EmailJS implementation)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
      
    } catch (error) {
      console.error('Failed to send email:', error)
      setError('Failed to send message. Please try again or contact me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-900/20 to-dark-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-500/5 rounded-full blur-2xl animate-float-fast" />
        
        {/* Floating particles */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-primary-400/30 rounded-full animate-ping" />
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-secondary-400/40 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent-400/20 rounded-full animate-bounce" />
        
        {/* Tech icons */}
        <div className="absolute top-1/4 right-1/5 animate-float-icon opacity-10">
          <MessageSquare className="w-8 h-8 text-primary-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-float-icon-reverse opacity-10">
          <Sparkles className="w-6 h-6 text-secondary-400" />
        </div>
      </div>

      {/* Interactive cursor follower */}
      <div 
        className="fixed pointer-events-none z-50 w-4 h-4 bg-primary-400/20 rounded-full blur-sm transition-all duration-300 ease-out"
        style={{ 
          left: mousePosition.x - 8, 
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})` 
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative inline-block transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Get In <span className="gradient-text">Touch</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-lg blur animate-pulse-glow" />
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full mx-auto mb-8 transition-all duration-1000 delay-200 ${inView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
          <p className={`text-lg text-text-secondary max-w-2xl mx-auto transition-all duration-1000 delay-400 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-600 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text-primary relative inline-block">
                Let's Connect
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-transparent rounded-full" />
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and design.
              </p>
            </div>

            {/* Enhanced Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`card group hover:scale-105 cursor-pointer transition-all duration-1000 delay-${800 + index * 100} ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative`}>
                          <IconComponent className="w-7 h-7 text-white relative z-10" />
                          <div className="absolute inset-0 bg-white/10 rounded-xl blur animate-pulse" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-primary-400 transition-colors duration-300">
                          {info.title}
                        </h4>

                        {Array.isArray(info.value) ? (
                          info.value.map((line, i) => (
                            <p
                              key={i}
                              className="text-text-secondary group-hover:text-primary-400 transition-colors duration-300"
                            >
                              {line}
                            </p>
                          ))
                        ) : (
                          <p className="text-text-secondary group-hover:text-primary-400 transition-colors duration-300">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 rounded-lg transition-all duration-300" />
                  </a>
                )
              })}
            </div>

            {/* Enhanced Social Links - Hero Style */}
            <div className={`transition-all duration-1000 delay-1200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h4 className="text-lg font-semibold text-text-primary mb-6 relative inline-block">
                Connect With Me
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-secondary-400 to-transparent rounded-full" />
              </h4>
              <div className="flex justify-start space-x-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${social.color.replace('hover:bg-', 'hover:text-').replace('-600', '-400').replace('-700', '-300').replace('-500', '-400')} relative group animate-float-social`}
                      style={{ animationDelay: `${index * 200}ms` }}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-6 h-6 relative z-10" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/0 to-secondary-400/0 group-hover:from-primary-400/20 group-hover:to-secondary-400/20 transition-all duration-300" />
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-400/0 to-secondary-400/0 group-hover:from-primary-400/10 group-hover:to-secondary-400/10 blur transition-all duration-300" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className={`transition-all duration-1000 delay-800 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="card relative overflow-hidden">
              {/* Form header with glow effect */}
              <div className="relative mb-8">
                <h3 className="text-2xl font-semibold text-text-primary relative inline-block">
                  Send Me a Message
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/5 to-secondary-400/5 rounded-lg blur animate-pulse" />
                </h3>
                <p className="text-text-muted text-sm mt-2">I'll get back to you as soon as possible!</p>
              </div>
              
              {/* Success/Error Messages */}
              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg animate-fade-in-up backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-green-400 font-medium">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg animate-fade-in-up backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-400 font-medium">{error}</p>
                  </div>
                </div>
              )}

              {/* Enhanced Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="form-label group-focus-within:text-primary-400 transition-colors duration-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="form-label group-focus-within:text-primary-400 transition-colors duration-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="form-label group-focus-within:text-primary-400 transition-colors duration-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400 transition-all duration-300"
                    placeholder="Let's work together!"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="form-label group-focus-within:text-primary-400 transition-colors duration-300">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="form-textarea focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full group relative overflow-hidden hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner w-4 h-4" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1400 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="card max-w-4xl mx-auto relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-lg animate-pulse-glow" />
            
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-4 text-text-primary gradient-text">Ready to Start a Project?</h4>
              <p className="text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
                Whether you have a clear vision or just an idea, I'm here to help bring it to life. 
                Let's discuss your project and see how we can work together to create something amazing.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {/* Enhanced Email Button */}
                <a 
                  href="mailto:madeeshasachindu2@gmail.com?subject=Project%20Inquiry"
                  className="btn btn-secondary group relative overflow-hidden hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">Start a Conversation</span>
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </a>

                {/* Enhanced WhatsApp Button */}
                <a
                  href="https://wa.me/94763741826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent group relative overflow-hidden hover:scale-105 transition-all duration-300 bg-green-600 hover:bg-green-700 border-green-500"
                >
                  <span className="relative z-10">Quick Chat via WhatsApp</span>
                  <FaWhatsapp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}