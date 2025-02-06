'use client';

import { motion } from 'framer-motion';
import { BookOpenIcon, DocumentTextIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: '체계적인 학습',
    description: '스터디와 세션을 통한 단계별 성장',
    icon: BookOpenIcon,
    color: 'text-blue-500',
  },
  {
    title: '학습 기록',
    description: '포트폴리오 시스템으로 성장 과정 기록',
    icon: DocumentTextIcon,
    color: 'text-green-500',
  },
  {
    title: '네트워킹',
    description: '프로젝트와 활동을 통한 실전 경험',
    icon: UserGroupIcon,
    color: 'text-purple-500',
  },
];

export default function SellingPointsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            개발자를 꿈꾸는 모든 학생들을 위해서- <br/>
            Comit에서 자유롭게 지식을 공유하고 성장하세요
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`inline-block p-4 rounded-lg ${feature.color} bg-opacity-10 mb-4`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 