'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import FAQSection from '@/components/join/FAQSection'
import ApplicationSection from '@/components/join/ApplicationSection'

const googleDocsLink = "https://docs.google.com/forms/d/e/1FAIpQLSdBSgxtOhW4cVpzmUgJSOcHFZHyuxUuA2ZbOuCOiKucbKJ0Wg/viewform" // 실제 구글 폼 링크로 교체 필요

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#2e073f] to-[#2e073f]">
      {/* 헤더 섹션 */}
        <div className="mx-auto pl-[9vw] md:pl-0 md:pr-8 relative overflow-hidden py-16 md:py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-start md:text-center text-[28px] md:text-[32px] lg:text-[40px] font-bold md:tracking-normal text-white leading-[1.2] break-keep">
              CoMit과 함께<br />성장할 준비가 되셨나요?
            </h1>
            <p className="text-start md:text-center text-base md:text-[20px] lg:text-[24px] mx-auto mt-4 md:mt-3 tracking-tight leading-[1.4] break-keep text-gray-200">
              2025년, 더 넓은 세상을 향해 도약하는 CoMit의 새로운 여정에 함께해주세요.
            </p>
          </motion.div>
        </div>

      {/* 메인 콘텐츠 */}
        <div className="grid gap-8 lg:gap-[3vw+60px] md:grid-cols-2 px-0 md:px-8 mx-auto w-[min(95vw,1180px)]">
          {/* 포스터 섹션 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[83vw] md:w-[min(42vw,500px)] mx-auto"
          >
            <div className="size-full overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.01]">
              <Image
                src="/poster_demo.png"
                alt="CoMit 모집 포스터"
                width={500}
                height={700}
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* 모집 일정 섹션 */}
          <ApplicationSection />
        </div>

      {/* 지원하기 버튼 섹션 */}
      <div className="py-6 md:mt-12 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:mb-16 mb-16"
        >
          <Link 
            href={googleDocsLink}
            className="inline-flex items-center justify-center px-12 py-3 md:px-16 md:py-4 text-base md:text-[20px] font-semibold text-white 
              bg-gradient-to-r from-[#7a1cac] to-[#ad49e1] rounded-2xl 
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
