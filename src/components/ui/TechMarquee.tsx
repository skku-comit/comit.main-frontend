'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TechStack } from '@/app/types';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const tech_stack: TechStack[] = [
  { name: 'Next.js', icon: '/icons/tech/nextjs.svg' },
  { name: 'React', icon: '/icons/tech/react.svg' },
  { name: 'TypeScript', icon: '/icons/tech/typescript.svg' },
  { name: 'JavaScript', icon: '/icons/tech/javascript.svg' },
  { name: 'Node.js', icon: '/icons/tech/nodejs.svg' },
  { name: 'MongoDB', icon: '/icons/tech/mongodb.svg' },
  { name: 'Spring', icon: '/icons/tech/spring.svg' },
  { name: 'Vue', icon: '/icons/tech/vue.svg' },
];

export default function TechMarquee() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: 0.1 // MainElement 애니메이션(0.8s) 완료 후 시작
      }}
      className="w-full px-20 relative"
    >
      <div 
        className="relative h-[60px] overflow-hidden group bg-transparent"
        style={{
          mask: `linear-gradient(90deg, transparent, black 15%, black 85%, transparent)`,
          WebkitMask: `linear-gradient(90deg, transparent, black 15%, black 85%, transparent)`,
        }}
      >
        {/* Hover시 나타나는 문구 */}
        <div className="w-auto absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 z-20">
          <div className="flex items-center gap-2 group/link">
            <p className="text-gray-200 text-lg font-medium group-hover/link:underline decoration-2">
              동아리에서 다뤄진 기술 스택 둘러보기
            </p>
            <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Marquee 컨텐츠 */}
        <div className="absolute flex items-center h-full group-hover:opacity-30 transition-opacity duration-300 z-10">
          <motion.div
            className="flex gap-28 items-center whitespace-nowrap"
            animate={{
              x: [0, -50 * tech_stack.length * 16],
            }}
            transition={{
              duration: tech_stack.length * 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {Array(99).fill(tech_stack).flat().map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center justify-center w-14 h-14"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={28}
                  height={28}
                  className="object-contain invert"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 