'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const recruitmentSchedule = [
  {
    period: '2월 10일 ~ 2월 16일',
    title: '기존 부원 재등록 기간',
    description: '현재 CoMit 부원들의 재등록이 진행됩니다.',
    startDate: new Date('2025-02-10T00:00:00'),
    endDate: new Date('2025-02-17T00:00:00')
  },  
  {
    period: '3월 4일 ~ 3월 16일',
    title: '정규모집 기간',
    description: '2024년 1학기 정규 모집이 진행됩니다.',
    startDate: new Date('2025-03-04T00:00:00'),
    endDate: new Date('2025-03-17T00:00:00')
  },
  {
    period: '3월 11일 ~ 3월 12일',
    title: '동아리 홍보부스 기간',
    description: '학생회관에서 CoMit을 직접 만나보세요!',
    startDate: new Date('2025-03-11T00:00:00'),
    endDate: new Date('2025-03-13T00:00:00')
  },

  {
    period: '3월 17일 ~',
    title: '동아리 상시모집 기간',
    description: '수시로 지원 가능한 상시 모집이 진행됩니다.',
    startDate: new Date('2025-03-17T00:00:00'),
    endDate: new Date('2025-08-10T23:59:59')
  }
]

export default function ApplicationSection() {
  const [currentPeriodIndex, setCurrentPeriodIndex] = useState<number | null>(null)

  useEffect(() => {
    const getCurrentPeriod = () => {
      const now = new Date()
      const index = recruitmentSchedule.findIndex(
        schedule => now >= schedule.startDate && now < schedule.endDate
      )
      console.log(index)
      return index
    }
    setCurrentPeriodIndex(getCurrentPeriod())
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-full flex flex-col"
    >
      <h2 className="text-[26px] md:my-0 mt-12 mb-4 md:text-[24px] lg:text-[30px] font-bold text-white md:text-start text-center">
        <span className="text-[#ad49e1]">25학년 1학기 </span>모집 일정
      </h2>
      <div className="flex-1 flex flex-col gap-3 md:gap-0 md:justify-around mt-2 md:mx-0">
        {recruitmentSchedule.map((schedule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="relative lg:pl-6 lg:before:absolute lg:before:left-0 lg:before:top-1 lg:before:bottom-1 lg:before:h-auto lg:before:w-[2px] lg:before:bg-[#ad49e1]/30"
          >
            <div key='calendar-dot'
              className={`hidden lg:block absolute -left-[4px] md:size-2.5 size-2 rounded-full ${
                currentPeriodIndex === index 
                  ? 'bg-[#ad49e1] ring-4 ring-[#ad49e1]/45 animate-pulse' 
                  : 'bg-[#ad49e1]/70'
              }`}
              style={{ 
                top: `${15 + (index * 30)}px` 
              }}
              
            />
            <div key='calendar-card' className={`group cursor-pointer rounded-lg p-3 lg:p-[22px] transition-colors ${
              currentPeriodIndex === index 
                ? 'bg-[#ad49e1]/20 hover:bg-[#ad49e1]/22' 
                : 'bg-black/30 hover:bg-white/10'
            }`}>
              <div className="text-base md:text-[12px] lg:text-[16px] font-medium text-[#ebd3f8]">
                {schedule.period}
              </div>
              <div className="text-base md:text-[17px] lg:text-[22px] md:mt-1 font-semibold text-white">
                {schedule.title}
              </div>
              <div className="text-sm mt-0.5 md:text-[12px] lg:text-[16px] text-gray-300 break-keep">
                {schedule.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
