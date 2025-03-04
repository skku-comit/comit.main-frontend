'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const reviews = [
  {
    content: '복학 후 처음 가입한 동아리이자, 개발로 처음 발을 들여놓게 해 준 동아리입니다. 낯선 복학 생활 속에서, 함께 성장할 수 있는 동료들을 만났어요. ',
    author: '20학번 권서진',
    role: '현) 3대 330',
    image: '/seojin.jpg'
  },
  {
    content:
      '코밋은 개발의 시발점입니다. 이론 지식들을 실제 적용할 수 있는 놀이터로, 관심사가 같은 친구들을 만나 좋은 추억들을 쌓을 수 있었습니다.',
    author: '22학번 손장수',
    role: '현) 피아노 마스터',
    image: '/images/reviews/avatar2.jpg'
  },
  {
    content:
      '여러 훌륭한 친구들을 만나 많이 배웠습니다. 특히 코밋 웹사이트 개발 과정에 참여하며 협업 방식에 대해 배울 수 있어 좋았어요.',
    author: '19학번 김재순',
    role: '현) 든든한 동아리 멘토',
    image: '/images/reviews/avatar3.jpg'
  }
]

export default function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div ref={containerRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl xl:text-[40px] font-bold text-white">CoMit, 어땠나요?</h2>
          <p className="text-lg xl:text-[20px] text-gray-400">코밋과 함께 성장한 선배들의 이야기</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              style={{ y }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative z-10 rounded-2xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-700">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <p className="mb-6 text-gray-300">&apos;{review.content}&apos;</p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-800">
                      <Image src={review.image} alt={review.author} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{review.author}</div>
                      <div className="text-sm text-gray-400">{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
