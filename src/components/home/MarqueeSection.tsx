'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const technologies = [
  { name: 'JavaScript', icon: '/icons/tech/javascript.svg' },
  { name: 'TypeScript', icon: '/icons/tech/typescript.svg' },
  { name: 'React', icon: '/icons/tech/react.svg' },
  { name: 'Node.js', icon: '/icons/tech/nodejs.svg' },
  { name: 'MongoDB', icon: '/icons/tech/mongodb.svg' },
  { name: 'Next.js', icon: '/icons/tech/nextjs.svg' },
  { name: 'Spring', icon: '/icons/tech/spring.svg' },
  { name: 'C', icon: '/icons/tech/c.svg' },
  { name: 'C++', icon: '/icons/tech/cpp.svg' },
  { name: 'Vue', icon: '/icons/tech/vue.svg' }
]

export default function MarqueeSection() {
  return (
    <div className="h-[80px] overflow-hidden bg-black">
      <div className="flex h-full items-center">
        <motion.div
          className="flex items-center gap-16 whitespace-nowrap"
          animate={{
            x: [0, -1920]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex h-12 w-12 items-center justify-center opacity-60 grayscale transition-opacity hover:opacity-100"
            >
              <Image src={tech.icon} alt={tech.name} width={32} height={32} className="object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
