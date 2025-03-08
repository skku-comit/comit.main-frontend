'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-gradient-to-br to-purple-600/10 via-black/20 from-black/90" /> */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 메인 텍스트 */}
          <h2 className="mb-6 text-2xl font-bold text-white sm:text-4xl lg:text-5xl tracking-tight">
          열정과 의지만 있다면, <br className='lg:hidden'/>누구던지 환영합니다.
          </h2>
          <p className="mx-auto mb-12 p-3 max-w-4xl text-base lg:text-xl leading-relaxed tracking-tighter text-gray-300">
            CoMit은 컴퓨터 분야에 생소하여 이제 막 코딩을 배우기 시작했거나, 이미 숙련되어 더 공부하고 싶은 개발자 모두에게 열려있습니다. 성균관대학교 최대 규모의 코딩 동아리에 가입하여 잊지 못할 경험을 시작하세요.
          </p>

          {/* CTA 버튼들 */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/join"
              className="inline-flex items-center rounded-2xl bg-purple-600 px-6 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-purple-700"
            >
              지원하기
              <ArrowRightIcon className="-mr-1 ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-2xl border border-gray-600 px-6 py-4 text-lg font-semibold text-gray-300 transition-colors duration-300 hover:bg-white/5"
            >
              더 알아보기
              <ArrowRightIcon className="-mr-1 ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
