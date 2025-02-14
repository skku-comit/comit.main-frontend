'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface StatItem {
  number: number
  label: string
  suffix: string
}

interface NumberElement extends Element {
  innerText: string
  getAttribute(name: string): string | null
}

type GSAPCallback = () => void

export default function ShowoffSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context((() => {
      // 텍스트 애니메이션
      gsap.to('.text-reveal', {
        backgroundPositionX: '0%',
        stagger: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom center',
          scrub: 1
        }
      })

      // 숫자 카운팅 애니메이션
      const numbers = gsap.utils.toArray<NumberElement>('.number-counter')
      numbers.forEach((number) => {
        const target = parseInt(number.getAttribute('data-target') || '0')
        const suffix = number.nextElementSibling as HTMLElement

        if (suffix) suffix.style.opacity = '0'

        gsap.to(number, {
          innerText: target,
          duration: 1.5,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: number,
            start: 'top 75%'
          },
          onComplete: () => {
            if (suffix) {
              gsap.to(suffix, {
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              })
            }
          }
        })
      })
    }) as GSAPCallback)

    return () => ctx.revert()
  }, [])

  const stats: StatItem[] = [
    { number: 412, label: '누적 부원', suffix: '' },
    { number: 70, label: '누적 스터디 개설', suffix: '+' },
    { number: 24, label: '다뤄진 기술 스택', suffix: '+' },
    { number: 80, label: '평균 신규 지원', suffix: '+' }
  ]

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black py-24">
      {/* 배경 그리드 패턴 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* 왼쪽: 통계 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-reveal bg-gradient-to-r from-purple-400 to-pink-600 bg-[200%_auto] bg-clip-text text-4xl font-bold text-transparent">
                Numbers speak for themselves
              </h2>
              <p className="mt-4 text-gray-400">우리의 성장을 보여주는 숫자들</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="mb-2 text-5xl font-bold text-white">
                    <span className="number-counter" data-target={stat.number}>
                      0
                    </span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 오른쪽: 이미지/그래픽 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square"
          >
            {/* 여기에 3D 그래픽이나 이미지 추가 */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
