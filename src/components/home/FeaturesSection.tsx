'use client'

import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  VideoCameraIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    category: '학습 지원',
    items: [
      {
        title: '자율 스터디/세션',
        description: '학기별로 자율적으로 운영되는 다양한 주제의 스터디와 세션',
        icon: AcademicCapIcon
      },
      {
        title: 'IT 도서 지원',
        description: '원하는 IT 도서 구매 및 대여 가능',
        icon: BookOpenIcon
      },
      {
        title: 'Udemy 강의',
        description: 'Udemy 플랫폼 강좌 시청 무료',
        icon: VideoCameraIcon
      }
    ]
  },
  {
    category: '시설 및 공간',
    items: [
      {
        title: '동아리방',
        description: '24시간 사용 가능한 동아리 전용 공간',
        icon: BuildingOfficeIcon
      },
      {
        title: '시설 대여',
        description: '동아리방을 포함한 여러 시설 자유롭게 대여 가능',
        icon: BuildingOfficeIcon
      }
    ]
  },
  {
    category: '네트워킹',
    items: [
      {
        title: '현업 선배 세미나',
        description: '현업에서 활동 중인 선배들의 실무 경험 공유',
        icon: UserGroupIcon
      },
      {
        title: '대외 활동',
        description: '기업 탐방, 대학 연합 해커톤 등 다양한 외부 활동 참여',
        icon: GlobeAltIcon
      }
    ]
  }
]

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* 배경 그리드 패턴 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <p className="mb-4 text-3xl font-bold text-white sm:text-4xl tracking-tight">부원이 아니라면 절대 누리지 못하는 혜택들</p>
          <p className="w-4/5 text-xl text-gray-400">CoMit에서는 단순한 스터디 운영뿐만 아니라 장소 및 강좌 제공, 부원들을 위한 정기적인 모임과 네트워크 등 꾸준하고 열성적으로 학습하기에 안성맞춤인 환경 조성에 최선을 다하고 있습니다.</p>
        </motion.div>

        <div className="space-y-24">
          {features.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="mb-8 text-2xl font-bold text-white">{category.category}</h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700">
                      <div className="mb-4 flex items-center">
                        <div className="mr-4 rounded-lg bg-white/5 p-2 transition-colors group-hover:bg-white/10">
                          <feature.icon className="h-6 w-6 text-purple-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                      </div>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
