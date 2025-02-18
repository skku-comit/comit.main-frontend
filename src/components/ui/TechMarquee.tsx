'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TechStack } from '@/app/types'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const tech_stack: TechStack[] = [
  { name: 'Next.js', icon: '/icons/tech/nextjs.svg' },
  { name: 'React', icon: '/icons/tech/react.svg' },
  { name: 'TypeScript', icon: '/icons/tech/typescript.svg' },
  { name: 'JavaScript', icon: '/icons/tech/javascript.svg' },
  { name: 'Node.js', icon: '/icons/tech/nodejs.svg' },
  { name: 'MongoDB', icon: '/icons/tech/mongodb.svg' },
  { name: 'Spring', icon: '/icons/tech/spring.svg' },
  { name: 'Vue', icon: '/icons/tech/vue.svg' }
]

export default function TechMarquee() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.1 // MainElement 애니메이션(0.8s) 완료 후 시작
      }}
      className="relative w-full px-20 hidden md:contents"
    >
      <div
        className="group relative h-[60px] overflow-hidden bg-transparent"
        style={{
          mask: `linear-gradient(90deg, transparent, black 15%, black 85%, transparent)`,
          WebkitMask: `linear-gradient(90deg, transparent, black 15%, black 85%, transparent)`
        }}
      >
        {/* Hover시 나타나는 문구 */}
        <div className="absolute inset-0 z-20 flex w-auto items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="group/link flex items-center gap-2">
            <p className="text-lg font-medium text-gray-200 decoration-2 group-hover/link:underline">
              동아리에서 다뤄진 기술 스택 둘러보기
            </p>
            <ArrowTopRightOnSquareIcon className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Marquee 컨텐츠 */}
        <div className="absolute z-10 flex h-full items-center transition-opacity duration-300 group-hover:opacity-30">
          <motion.div
            className="flex items-center gap-28 whitespace-nowrap"
            animate={{
              x: [0, -50 * tech_stack.length * 16]
            }}
            transition={{
              duration: tech_stack.length * 15,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
          >
            {Array(99)
              .fill(tech_stack)
              .flat()
              .map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="flex h-14 w-14 items-center justify-center">
                  <Image src={tech.icon} alt={tech.name} width={28} height={28} className="object-contain invert" />
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
