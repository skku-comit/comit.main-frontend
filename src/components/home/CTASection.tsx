'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-[1px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 스파클 아이콘 */}
          <SparklesIcon className="h-12 w-12 text-blue-200 mx-auto mb-8" />

          {/* 메인 텍스트 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            함께 성장할 준비가 되셨나요?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            COMIT과 함께라면, 여러분의 개발자 꿈을 현실로 만들 수 있습니다.
            지금 바로 시작하세요!
          </p>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center px-8 py-4 border-2 border-white bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              지원하기
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              제안하기
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
            </Link>
          </div>

          {/* 추가 정보 */}
          <p className="mt-8 text-blue-200 text-sm">
            문의사항이 있으신가요? 
            <Link href="/contact" className="underline ml-1 hover:text-white">
              연락하기
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
} 