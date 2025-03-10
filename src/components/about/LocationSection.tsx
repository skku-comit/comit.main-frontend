'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPinIcon, BuildingOffice2Icon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function LocationSection() {
  return (
    <section className="relative bg-white/5 py-24">
      <div className="absolute inset-0" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white">찾아오시는 길</h2>
          <p className="mt-4 text-lg text-gray-400 break-keep">CoMit 동아리방으로 오시는 방법을 안내해드립니다.</p>
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
            <div className="rounded-xl bg-white/15 p-6">
              <div className="flex items-start gap-4">
                <BuildingOffice2Icon className="h-6 w-6 text-[#ad49e1] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white">동아리방 위치</h3>
                  <p className="mt-2 text-gray-300">
                    성균관대학교 자연과학캠퍼스 <br className='block sm:hidden' />
                    학생회관 03312호
                  </p>
                  <p className='text-gray-300 text-sm'>[경기 수원시 장안구 서부로 2066 (우)16419]</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white/15 p-6">
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-6 w-6 text-[#ad49e1] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white">위치 상세 안내</h3>
                  <p className="mt-2 text-gray-300 break-keep">
                    1. 학생회관 건물 진입 후<br />
                    2. 중앙 계단을 통해 3층으로 이동<br />
                    3. 동아리방 03312호<br className='block sm:hidden' />(큰 복도 정가운데에 위치)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link 
                href="https://www.skku.edu/skku/about/campusInfo/campusMap.do?category=sisulList&campusCd=2&kind=0104&buildNo=20104106"
                target="_blank"
                className="ml-4 inline-flex items-center gap-1 text-[#ad49e1] hover:underline"
              >
                <span>캠퍼스 맵에서 보기</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </Link>
              
              <Link 
                href="https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,494141.99999999726,1054130.0000000012&rt1=&rt2=%EC%84%B1%EA%B7%A0%EA%B4%80%EB%8C%80%ED%95%99%EA%B5%90%20%EC%9E%90%EC%97%B0%EA%B3%BC%ED%95%99%EC%BA%A0%ED%8D%BC%EC%8A%A4%20%ED%95%99%EC%83%9D%ED%9A%8C%EA%B4%80&rtIds=,17561123"
                target="_blank"
                className="ml-4 inline-flex items-center gap-1 text-[#ad49e1] hover:underline"
              >
                <span>길찾기(카카오맵)</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* 지도 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5"
          >
            <Image src="/map.png" alt="캠퍼스 맵" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 