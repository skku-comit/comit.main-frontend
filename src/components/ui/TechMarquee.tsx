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
    <div className="relative h-[80px] overflow-hidden group bg-black">
      {/* 그라데이션 배경 */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/10 to-black" />
      
      {/* 좌우 페이드 효과 - 더 넓게, 더 불투명하게 */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black via-black/90 to-transparent z-10" />
      
      {/* Hover시 나타나는 문구 */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 z-20">
        <div className="flex items-center gap-2 group/link">
          <p className="text-gray-200 text-lg font-medium group-hover/link:underline decoration-2">
            동아리에서 다뤄진 기술 스택 둘러보기
          </p>
          <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Marquee 컨텐츠 */}
      <div className="relative flex items-center h-full group-hover:opacity-30 transition-opacity duration-300">
        <motion.div
          className="flex gap-24 items-center whitespace-nowrap px-48"
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
          {Array(4).fill(tech_stack).flat().map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center justify-center w-14 h-14"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={32}
                height={32}
                className="object-contain invert"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 