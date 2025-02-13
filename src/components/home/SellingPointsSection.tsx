'use client'

import { motion } from 'framer-motion'
import { BookOpenIcon, DocumentTextIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: '체계적인 학습',
    description: '스터디와 세션을 통한 단계별 성장',
    icon: BookOpenIcon,
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    title: '실전 프로젝트',
    description: '팀 프로젝트로 배우는 실무 경험',
    icon: DocumentTextIcon,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: '개발자 네트워킹',
    description: '선후배와 함께하는 성장 커뮤니티',
    icon: UserGroupIcon,
    gradient: 'from-cyan-500 to-emerald-500'
  }
]

export default function SellingPointsSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* 배경 그리드 패턴 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 -mt-8 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white">Why CoMit?</h2>
          <p className="text-lg text-gray-400">코밋에서만 경험할 수 있는 특별한 가치</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative z-10 rounded-2xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-700">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 transition-opacity group-hover:opacity-5`}
                />

                <div className={`inline-flex rounded-xl bg-gradient-to-br p-3 ${feature.gradient} mb-5`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
