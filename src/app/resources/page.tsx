'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl px-6 py-24"
      >
        <h1 className="text-center text-4xl font-bold tracking-tight text-white mb-16">자료실</h1>
        
        <div className="grid gap-6">
          <Link 
            href="/resources/rules"
            className="group rounded-lg bg-white/5 p-6 transition-colors hover:bg-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-2">CoMit 회칙</h2>
            <p className="text-gray-400">CoMit의 운영 규정과 회원들의 권리 및 의무사항을 확인하세요.</p>
          </Link>
          
          {/* 추후 다른 자료들도 이곳에 추가 가능 */}
        </div>
      </motion.div>
    </div>
  )
}
