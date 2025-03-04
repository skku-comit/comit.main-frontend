'use client'

import { motion } from 'framer-motion'

const faqs = [
  {
    question: '지원 자격이 어떻게 되나요?',
    answer: '성균관대학교 재학생이라면 누구나 지원 가능합니다. 전공과 학년에 제한이 없으며, 코딩에 대한 열정만 있다면 충분합니다.'
  },
  {
    question: '프로그래밍 경험이 없어도 지원할 수 있나요?',
    answer: '네, 가능합니다! CoMit은 기초부터 차근차근 배워나갈 수 있는 커리큘럼을 제공합니다. 열정과 의지만 있다면 충분합니다.'
  },
  {
    question: '활동 기간은 어떻게 되나요?',
    answer: '정규 활동은 한 학기(6개월) 동안 진행되며, 이후 재등록을 통해 계속 활동할 수 있습니다.'
  },
  {
    question: '주로 어떤 활동을 하나요?',
    answer: '정기 세미나, 프로젝트 협업, 스터디 그룹 활동, 네트워킹 행사 등 다양한 활동이 준비되어 있습니다.'
  }
]

export default function FAQSection() {
  return (
    <div className="bg-black/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="text-2xl md:text-3xl text-center font-bold leading-10 tracking-tight text-white mb-6 md:mb-12">FAQ</h2>
          <div className="space-y-2 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 rounded-lg p-6 hover:bg-black/40 transition-colors"
              >
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed break-keep">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
