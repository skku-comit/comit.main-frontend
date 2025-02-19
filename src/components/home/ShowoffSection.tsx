'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

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
  const [currentImage, setCurrentImage] = useState(1)
  const totalImages = 5
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // 자동 슬라이드 시작 함수
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setDragDirection('left')
      setCurrentImage((prev) => (prev === totalImages ? 1 : prev + 1))
    }, 4000)
  }

  // 자동 슬라이드 정지 함수
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  // 컴포넌트 마운트 시 자동 슬라이드 시작
  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide() // 컴포넌트 언마운트 시 정리
  }, [])

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    stopAutoSlide() // 드래그 종료 시 자동 슬라이드 정지
    const threshold = 50
    const dragDistance = info.offset.x

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        setDragDirection('right')
        prevImage()
      } else {
        setDragDirection('left')
        nextImage()
      }
    }
    startAutoSlide() // 드래그 후 자동 슬라이드 재시작
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev === totalImages ? 1 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 1 ? totalImages : prev - 1))
  }

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
    { number: 412, label: '명의 누적된 열정', suffix: '' },
    { number: 70, label: '개의 자발적 스터디 개설', suffix: '+' },
    { number: 24, label: '개의 다뤄진 기술 스택', suffix: '+' },
    { number: 80, label: '명 이상의 매학기 새로운 도전', suffix: '+' }
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
              <h2 className="text-reveal lg:text-[2.5rem] text-3xl xl:font-extrabold bg-gradient-to-r via-[#ad49e1] from-[#ad49e1] to-[#ebd3f8] bg-[200%_auto] bg-clip-text font-bold text-transparent">
                코밋이 만들어온 성장
              </h2>
              <p className="mt-4 text-gray-200 xl:text-lg px-8 lg:px-0">이 모든 숫자는 그동안 함께해왔던 부원들이 보여준, 열정의 증거입니다.</p>
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
                  <div className="mb-2 text-3xl lg:text-4xl font-bold text-white">
                    <span className="number-counter" data-target={stat.number}>
                      0
                    </span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 오른쪽: 이미지 슬라이더 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square"
          >
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={currentImage}
                  initial={{ 
                    x: dragDirection === 'left' ? 300 : -300 
                  }}
                  animate={{ 
                    x: 0 
                  }}
                  exit={{ 
                    x: dragDirection === 'left' ? -300 : 300 
                  }}
                  transition={{ 
                    duration: 0.2,
                    ease: "linear"
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={handleDragEnd}
                  onDragStart={stopAutoSlide} // 드래그 시작 시 자동 슬라이드 정지
                  className="relative h-full w-full cursor-grab active:cursor-grabbing"
                >
                  <Image
                    src={`/history_${currentImage}.jpg`}
                    alt={`CoMit History ${currentImage}`}
                    fill
                    className="object-cover"
                    priority
                    draggable={false}
                  />
                  <div className="absolute inset-0" />
                </motion.div>
              </AnimatePresence>

              {/* 이미지 인디케이터 */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
                {Array.from({ length: totalImages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      stopAutoSlide() // 인디케이터 클릭 시 자동 슬라이드 정지
                      setCurrentImage(index + 1)
                      startAutoSlide() // 이미지 변경 후 자동 슬라이드 재시작
                    }}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      currentImage === index + 1 ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
