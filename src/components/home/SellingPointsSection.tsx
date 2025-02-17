'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

const catchPhrase = [
  '탐구, 연결, 그리고 성취.',
  '교내 최대규모의 중앙 컴퓨터동아리 CoMit'
]


const features = [
  {
    title: '체계적인 그룹 학습',
    description: '학기 단위로 운영되는 스터디와 세션에 참가하세요. 웹개발과 알고리즘을 포함한 다양한 언어와 프레임워크가 매 학기 다뤄집니다. 개인적으로 공부하고 싶은 분야가 있다면 부담없이 스터디를 개설하여 팀원을 모집하세요.',
    gradient: 'from-purple-500 to-blue-500',
    icon: 'cooperation.svg'
  },
  {
    title: '학습환경 지원',
    description: '스터디와 세션, 세미나 등 다양한 학습 환경을 제공하고 부원들에 한해 학습에 필요한 강좌 및 물품을 아낌없이 지원합니다. 동아리방을 포함한 시설 예약, 타 학회와의 교류 활동 등 특별한 학습 환경을 누리세요.',
    gradient: 'from-white to-cyan-500',
    icon: 'support.svg'
  },
  {
    title: '돈독한 네트워킹',
    description: '매 학기 MT를 포함한 다양한 네트워킹 행사를 진행하여 동아리원들이 서로 친밀해질 기회를 제공합니다. 실력이 부족했던 사람들은 자연스럽게 녹아들며 성장하고, 실력이 있는 사람들도 동아리에 헌신하고픈 문화를 만듭니다.',
    gradient: 'from-cyan-500 to-emerald-500',
    icon: 'networking.svg'
  }
]

export default function SellingPointsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <section className="relative overflow-hidden bg-black sm:px-6 lg:px-[7%]">
      {/* 배경 그리드 패턴 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 -mt-8 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative mx-auto px-4 py-16 max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-16 text-center pt-10"
        >
          <h2 className="mb-4 lg:text-7xl leading-none font-semibold text-white tracking-tighter">
            {catchPhrase[0]}
            <br />
            <p className='lg:text-3xl tracking-tighter font-normal text-gray-300 lg:mt-5'>{catchPhrase[1]}
            </p>
          </h2>
        </motion.div>

        {/* 비디오 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-20 relative rounded-2xl overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover rounded-2xl"
          >
            <source src="/sellingpointsection.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="grid grid-cols-1 sm:gap-6 gap-0 md:grid-cols-3">

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[index] = el
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative z-10 rounded-2xl sm:border-2 border-gray-800 bg-black/50 p-3 sm:p-8 backdrop-blur-sm transition-all duration-500 group-hover:border-gray-700 group-hover:bg-black/70 group-hover:shadow-[0_0_30px_-5px] group-hover:shadow-purple-500/20 group-hover:-translate-y-2 overflow-hidden">
                {/* 빛나는 커서 효과 */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: isHovered
                      ? `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 50%)`
                      : ''
                  }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                />
                <div className="flex flex-row sm:flex-col items-start gap-3 sm:gap-4">
                  <div className="w-[50px] h-[50px] flex-shrink-0 mt-1 sm:mt-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={50}
                      height={50}
                      className="w-full h-full text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white sm:mb-3 mb-0">{feature.title}</h3>
                    <p className="relative sm:tracking-normal tracking-tighter text-gray-300 text-[15px] sm:text-base leading-snug md:leading-relaxed transition-colors duration-500 group-hover:text-white">
                      {feature.description}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
