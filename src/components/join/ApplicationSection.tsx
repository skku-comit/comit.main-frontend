'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const recruitmentSchedule = [
  {
    period: '2월 10일 ~ 2월 16일',
    title: '기존 부원 재등록 기간',
    description: '현재 CoMit 부원들의 재등록이 진행됩니다.',
    startDate: new Date('2025-02-10T00:00:00'),
    endDate: new Date('2025-03-10T00:00:00')
  },
  {
    period: '3월 10일 ~ 3월 11일',
    title: '동아리 홍보부스 기간',
    description: '학생회관에서 CoMit을 직접 만나보세요!',
    startDate: new Date('2025-03-10T00:00:00'),
    endDate: new Date('2025-03-12T00:00:00')
  },
  {
    period: '3월 12일 ~ 3월 16일',
    title: '정규모집 기간',
    description: '2024년 1학기 정규 모집이 진행됩니다.',
    startDate: new Date('2025-03-12T00:00:00'),
    endDate: new Date('2025-03-17T00:00:00')
  },
  {
    period: '3월 17일 ~',
    title: '동아리 상시모집 기간',
    description: '수시로 지원 가능한 상시 모집이 진행됩니다.',
    startDate: new Date('2025-03-17T00:00:00'),
    endDate: new Date('2025-12-31T23:59:59')
  }
]

export default function ApplicationSection() {
  const [currentPeriodIndex, setCurrentPeriodIndex] = useState<number | null>(null)

  useEffect(() => {
    const getCurrentPeriod = () => {
      const now = new Date()
      return recruitmentSchedule.findIndex(
        schedule => now >= schedule.startDate && now < schedule.endDate
      )
    }
    setCurrentPeriodIndex(getCurrentPeriod())
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-[1vw] space-y-[2vw]"
    >
      <h2 className="text-[2.5vw] md:text-[2vw] font-bold text-white md:text-start text-center">
        <span className="text-[#ad49e1]">25학년 1학기 </span>모집 일정
      </h2>
      <div className="space-y-[1.5vw]">
        {recruitmentSchedule.map((schedule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="relative pl-[2vw] before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-[#ad49e1]/30"
          >
            <div 
              className={`absolute -left-[5px] h-[0.8vw] w-[0.8vw] rounded-full ${
                currentPeriodIndex === index 
                  ? 'bg-[#ad49e1] ring-4 ring-[#ad49e1]/30' 
                  : 'bg-[#ad49e1]/50'
              }`}
              style={{ top: `${index * 1.5 + 1.5}vw` }}
            />
            <div className={`group cursor-pointer rounded-lg p-[1.5vw] transition-colors ${
              currentPeriodIndex === index 
                ? 'bg-[#ad49e1]/20 hover:bg-[#ad49e1]/22' 
                : 'bg-black/30 hover:bg-white/10'
            }`}>
              <div className="text-[1vw] md:text-[clamp(1.3vw, 22px)]  font-medium text-[#ebd3f8]">
                {schedule.period}
              </div>
              <div className="mt-[0.5vw] text-[1.8vw] md:text-[22px] font-semibold text-white">
                {schedule.title}
              </div>
              <div className="mt-[0.3vw] text-[1.2vw] md:text-[14px] text-gray-300">
                {schedule.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
