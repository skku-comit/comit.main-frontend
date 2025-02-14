'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const reviews = [
  {
    content: '코밋에서의 경험이 제 개발자 커리어의 시작점이었어요. 선배들의 멘토링 덕분에 빠르게 성장할 수 있었죠.',
    author: '19학번 홍길동',
    role: '현) 네이버 프론트엔드 개발자',
    image: '/images/reviews/avatar1.jpg'
  },
  {
    content:
      '체계적인 스터디와 실전 프로젝트 경험이 실무에서 큰 도움이 되었습니다. 특히 협업 프로세스를 미리 경험해본 게 좋았어요.',
    author: '20학번 김철수',
    role: '현) 카카오 백엔드 개발자',
    image: '/images/reviews/avatar2.jpg'
  },
  {
    content:
      '개발을 처음 시작할 때 막막했는데, 코밋에서 만난 동료들과 함께하며 즐겁게 성장했어요. 지금도 좋은 인연으로 이어지고 있죠.',
    author: '21학번 이영희',
    role: '현) 토스 iOS 개발자',
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
          <h2 className="mb-4 text-3xl font-bold text-white">Alumni Stories</h2>
          <p className="text-lg text-gray-400">코밋과 함께 성장한 선배들의 이야기</p>
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
