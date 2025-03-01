'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import FAQSection from '@/components/join/FAQSection'
import ApplicationSection from '@/components/join/ApplicationSection'

const googleDocsLink = "https://docs.google.com/forms/d/example" // 실제 구글 폼 링크로 교체 필요

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#2e073f] to-[#2e073f]">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden pt-[5vw] pb-[4vw]">
        <div className="mx-auto lg:max-w-[90%] px-[4vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-[5vw] md:text-[3vw] font-bold tracking-normal text-white leading-[1.3]">
              CoMit과 함께<br />성장할 준비가 되셨나요?
            </h1>
            <p className="mx-auto mt-4 text-[2.5vw] md:text-[1.5vw] tracking-tight leading-[1.6] text-gray-300">
              2025년, 더 넓은 세상을 향해 도약하는 CoMit의 새로운 여정에 함께해주세요.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="mx-auto max-w-[90%] px-[4vw] py-[3vw]">
        <div className="grid gap-[3vw] md:grid-cols-2">
          {/* 포스터 섹션 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/poster_demo.png"
                alt="CoMit 모집 포스터"
                width={800}
                height={1000}
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* 모집 일정 섹션 */}
          <ApplicationSection />
        </div>
      </div>

      {/* 지원하기 버튼 섹션 */}
      <div className="py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <Link 
            href={googleDocsLink}
            className="inline-flex items-center justify-center px-16 py-4 text-[22px] font-semibold text-white 
              bg-gradient-to-r from-[#7a1cac] to-[#ad49e1] rounded-full 
              shadow-lg shadow-purple-500/30 
              transition-all duration-300 
              hover:shadow-purple-500/50 hover:scale-[1.02]
              focus:outline-none focus:ring-2 focus:ring-[#ad49e1] focus:ring-offset-2 focus:ring-offset-[#2e073f]"
          >
            지원서 작성하러 가기
          </Link>
        </motion.div>
      </div>

      {/* FAQ 섹션 */}
      <FAQSection />
    </div>
  )
}
