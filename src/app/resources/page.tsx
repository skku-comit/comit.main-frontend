'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl px-2 sm:px-4 py-6 lg:px-6 md:py-10 lg:py-24"
      >
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-8 lg:mb-16">자료실</h1>
        
        <div className="grid gap-6">
          <Link 
            href="/resources/rules"
            className="group rounded-lg bg-white/5 p-4 md:p-6 transition-all duration-300 
              hover:bg-white/10 hover:scale-[1.01] hover:shadow-lg hover:shadow-white/5
              cursor-pointer relative"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg lg:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  CoMit 회칙
                  <ArrowRightIcon className="size-4 lg:size-5 text-[#ad49e1] group-hover:translate-x-1 transition-all" />
                </h2>
                <p className="text-gray-400 text-sm lg:text-base break-keep">CoMit의 운영 규정과 회원들의 권리 및 의무사항을 확인하세요.</p>
              </div>
            </div>
          </Link>
          
          {/* 추후 다른 자료들도 이곳에 추가 가능 */}
        </div>
      </motion.div>
    </div>
  )
}
