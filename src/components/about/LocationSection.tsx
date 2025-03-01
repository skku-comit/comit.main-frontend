'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPinIcon, BuildingOffice2Icon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function LocationSection() {
  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white">찾아오시는 길</h2>
          <p className="mt-4 text-lg text-gray-400">CoMit 동아리방으로 오시는 방법을 안내해드립니다.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* 위치 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="rounded-xl bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <BuildingOffice2Icon className="h-6 w-6 text-[#ad49e1] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white">동아리방 위치</h3>
                  <p className="mt-2 text-gray-300">
                    성균관대학교 자연과학캠퍼스<br />
                    학생회관 20x호
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-6 w-6 text-[#ad49e1] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white">위치 상세 안내</h3>
                  <p className="mt-2 text-gray-300">
                    1. 학생회관 건물 진입 후<br />
                    2. 중앙 계단을 통해 2층으로 이동<br />
                    3. 큰 복도 오른편에 위치
                  </p>
                </div>
              </div>
            </div>

            <Link 
              href="https://www.skku.edu/skku/about/campusInfo/campusMap.do?category=sisulList&campusCd=2&kind=0104&buildNo=20104106"
              target="_blank"
              className="inline-flex items-center gap-2 text-[#ad49e1] hover:text-[#ebd3f8] transition-colors"
            >
              <span>캠퍼스 맵에서 보기</span>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* 지도 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5"
          >
          </motion.div>
        </div>
      </div>
    </section>
  )
} 