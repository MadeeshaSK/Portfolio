// src/components/TechRainBackground.tsx

'use client'

import { useEffect, useState } from 'react'

interface TechIcon {
  id: number
  name: string
  image?: string
  symbol?: string
  type: 'image' | 'text'
  x: number
  y: number
  speed: number
  size: number
  opacity: number
  rotation: number
  rotationSpeed: number
}

export default function TechRainBackground() {
  const [techIcons, setTechIcons] = useState<TechIcon[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Technology images and symbols based on your Skills component
  const technologies = [
    // From Skills component - use actual PNG images
    { name: 'React', image: '/skills/react.png', type: 'image' as const },
    { name: 'Next.js', image: '/skills/nextdotjs.png', type: 'image' as const },
    { name: 'Node.js', image: '/skills/nodedotjs.png', type: 'image' as const },
    { name: 'Python', image: '/skills/python.png', type: 'image' as const },
    { name: 'Java', image: '/skills/java.png', type: 'image' as const },
    { name: 'Spring Boot', image: '/skills/springboot.png', type: 'image' as const },
    { name: 'Flutter', image: '/skills/flutter.png', type: 'image' as const },
    { name: 'AWS', image: '/skills/aws.png', type: 'image' as const },
    { name: 'Docker', image: '/skills/docker.png', type: 'image' as const },
    { name: 'Git', image: '/skills/git.png', type: 'image' as const },
    // Text/Symbol based ones
    { name: 'JavaScript', symbol: 'JS', type: 'text' as const },
    { name: 'TypeScript', symbol: 'TS', type: 'text' as const },
    { name: 'Linux', symbol: '🐧', type: 'text' as const },
    { name: 'API', symbol: '🔌', type: 'text' as const },
    { name: 'Mobile', symbol: '📱', type: 'text' as const },
    { name: 'Web', symbol: '🌐', type: 'text' as const },
    { name: 'Security', symbol: '🔒', type: 'text' as const },
    { name: 'AI', symbol: '🤖', type: 'text' as const },
    { name: 'DevOps', symbol: '⚙️', type: 'text' as const },
    { name: 'Code', symbol: '</>', type: 'text' as const },
  ]

  // Initialize dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Create initial tech icons
  useEffect(() => {
    if (dimensions.width === 0) return

    const createTechIcon = (id: number): TechIcon => {
      const tech = technologies[Math.floor(Math.random() * technologies.length)]
      return {
        id,
        name: tech.name,
        image: tech.image,
        symbol: tech.symbol,
        type: tech.type,
        x: Math.random() * dimensions.width,
        y: Math.random() * -dimensions.height,
        speed: Math.random() * 2 + 1, // 1-3 speed
        size: Math.random() * 0.5 + 0.7, // 0.7-1.2 size
        opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7 opacity
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1, // -0.5 to 0.5 rotation speed
      }
    }

    // Create initial icons
    const initialIcons: TechIcon[] = []
    const iconCount = Math.floor(dimensions.width / 100) // Responsive icon count
    
    for (let i = 0; i < iconCount; i++) {
      initialIcons.push(createTechIcon(i))
    }
    
    setTechIcons(initialIcons)
  }, [dimensions.width, dimensions.height])

  // Animation loop
  useEffect(() => {
    if (techIcons.length === 0) return

    let animationId: number
    let lastTime = 0
    const targetFPS = 60
    const frameTime = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameTime) {
        animationId = requestAnimationFrame(animate)
        return
      }

      setTechIcons(prevIcons => 
        prevIcons.map(icon => {
          let newY = icon.y + icon.speed
          let newX = icon.x
          let newRotation = icon.rotation + icon.rotationSpeed

          // Reset position when icon goes off screen
          if (newY > dimensions.height + 50) {
            newY = -50
            newX = Math.random() * dimensions.width
            // Randomly change the technology
            const tech = technologies[Math.floor(Math.random() * technologies.length)]
            return {
              ...icon,
              name: tech.name,
              image: tech.image,
              symbol: tech.symbol,
              type: tech.type,
              x: newX,
              y: newY,
              rotation: newRotation,
              speed: Math.random() * 2 + 1,
              size: Math.random() * 0.5 + 0.7,
              opacity: Math.random() * 0.4 + 0.3,
            }
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            rotation: newRotation,
          }
        })
      )

      lastTime = currentTime
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [techIcons.length, dimensions.width, dimensions.height, technologies])

  if (dimensions.width === 0) return null

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'normal'
      }}
    >
      {techIcons.map(icon => (
        icon.type === 'image' ? (
          <img
            key={icon.id}
            src={icon.image}
            alt={icon.name}
            className="absolute tech-icon select-none"
            style={{
              left: `${icon.x}px`,
              top: `${icon.y}px`,
              transform: `rotate(${icon.rotation}deg) scale(${icon.size})`,
              opacity: icon.opacity,
              width: '32px',
              height: '32px',
              filter: 'drop-shadow(0 0 8px rgba(100, 116, 139, 0.3)) saturate(0.8)',
              willChange: 'transform',
            }}
          />
) : (
  <div
    key={icon.id}
    className="absolute tech-icon select-none"
    style={{
      left: `${icon.x}px`,
      top: `${icon.y}px`,
      transform: `rotate(${icon.rotation}deg) scale(${icon.size})`,
      opacity: icon.opacity,
      fontSize: icon.symbol && icon.symbol.length <= 2 ? '24px' : '20px',
      fontWeight: icon.symbol && (icon.symbol.includes('<') || icon.symbol.includes('>')) ? 'bold' : 'normal',
      fontFamily: icon.symbol && (icon.symbol.includes('<') || icon.symbol.includes('>') || icon.symbol.includes('JS') || icon.symbol.includes('TS')) ? 'monospace' : 'system-ui',
      color: '#64748b', // text-slate-500
      textShadow: '0 0 10px rgba(100, 116, 139, 0.3)',
      filter: 'blur(0.5px)',
      willChange: 'transform',
    }}
  >
    {icon.symbol}
  </div>
)
      ))}

      <style jsx>{`
        .tech-icon {
          transition: none;
          user-select: none;
          pointer-events: none;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .tech-icon {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  )
}