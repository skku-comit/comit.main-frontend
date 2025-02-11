'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  BuildingOfficeIcon,
  UserGroupIcon,
  VideoCameraIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    category: '학습 지원',
    items: [
      {
        title: '자율 스터디/세션',
        description: '학기별로 자율적으로 운영되는 다양한 주제의 스터디와 세션',
        icon: AcademicCapIcon,
      },
      {
        title: 'IT 도서 지원',
        description: '원하는 IT 도서 구매 및 대여 가능',
        icon: BookOpenIcon,
      },
      {
        title: 'Udemy 강의',
        description: 'Udemy 플랫폼 강좌 시청 무료',
        icon: VideoCameraIcon,
      },
    ],
  },
  {
    category: '시설 및 공간',
    items: [
      {
        title: '동아리방',
        description: '24시간 사용 가능한 동아리 전용 공간',
        icon: BuildingOfficeIcon,
      },
      {
        title: '시설 대여',
        description: '동아리방을 포함한 여러 시설 자유롭게 대여 가능',
        icon: BuildingOfficeIcon,
      },
    ],
  },
  {
    category: '네트워킹',
    items: [
      {
        title: '현업 선배 세미나',
        description: '현업에서 활동 중인 선배들의 실무 경험 공유',
        icon: UserGroupIcon,
      },
      {
        title: '대외 활동',
        description: '기업 탐방, 대학 연합 해커톤 등 다양한 외부 활동 참여',
        icon: GlobeAltIcon,
      },
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            다양한 혜택과 기회
          </h2>
          <p className="text-xl text-gray-600">
            COMIT에서 제공하는 특별한 경험들을 만나보세요
          </p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg mr-4">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 