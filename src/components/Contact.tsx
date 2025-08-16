// src/components/Contact.tsx

'use client'

import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Instagram, AlertCircle, CheckCircle } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)

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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'madeeshasachindu2@gmail.com',
      link: 'mailto:madeeshasachindu2@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 76 374 1826, +94 75 932 7242',
      link: 'tel:+94763741826',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: [
        'Moratuwa, Sri Lanka',
        'Postal Address: No 30/2, Urulewaththa, Wattappola',
      ],
      link: 'https://maps.app.goo.gl/oBTKHMSxh1t43KDNA',
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/madeesha-karunarathna',
      color: 'hover:text-secondary-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/MadeeshaSK',
      color: 'hover:text-text-secondary',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:madeeshasachindu2@gmail.com',
      color: 'hover:text-text-secondary',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/madeeshasachindu.karunarathna',
      color: 'hover:text-text-secondary',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/m_a_d_e_e__sh_a/',
      color: 'hover:text-text-secondary',
    },
    {
      icon: FaWhatsapp,
      label: 'Whatsapp',
      href: 'https://wa.me/94763741826',
      color: 'hover:text-text-secondary',
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
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'madeeshasachindu2@gmail.com'
      }
      
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,    // Your Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,   // Your Template ID
        templateParams
      )
      
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
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-900/20 to-dark-950">
      <div className="container-custom">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full mx-auto mb-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} />
          <p className={`text-lg text-text-secondary max-w-2xl mx-auto ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`space-y-8 ${inView ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text-primary">Let's Connect</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and design.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`card group hover:scale-105 cursor-pointer ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 100 + 600}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-text-primary mb-1">{info.title}</h4>

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
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '900ms' }}>
              <h4 className="text-lg font-medium text-text-primary mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-dark-800/50 rounded-lg ${social.color} transition-all duration-300 hover:scale-110 hover:bg-dark-700/50`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${inView ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 text-text-primary">Send Me a Message</h3>
              
              {submitted && (
                <div className="mb-6 p-4 bg-accent-500/20 border border-accent-500/50 rounded-lg animate-fade-in-up">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-400" />
                    <p className="text-accent-400">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg animate-fade-in-up">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-400">{error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Let's work together!"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner w-4 h-4" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className={`text-center mt-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
          <div className="card max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-text-primary">Ready to Start a Project?</h4>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Whether you have a clear vision or just an idea, I'm here to help bring it to life. 
              Let's discuss your project and see how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              {/* Email Button */}
              <a 
                href="mailto:madeeshasachindu2@gmail.com?subject=Project%20Inquiry"
                className="btn btn-secondary group flex items-center gap-2"
              >
                Start a Conversation
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/94763741826"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent group flex items-center gap-2 border border-white hover:bg-white hover:text-dark-900 transition-colors duration-300"
              >
                Quick Chat via WhatsApp
                <FaWhatsapp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}