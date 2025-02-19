'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'
import TechMarquee from '@/components/ui/TechMarquee'

export default function HeroSection() {
  return (
    <div className="relative h-[calc(100vh-4rem)]">
      {/* 디지털 그리드 패턴 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute inset-0"
      >
        {/* 기본 그리드 패턴 */}
        <div className="absolute inset-0 -mt-8 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        {/* 오른쪽 영역 강조 그리드 패턴 */}
        <div
          className="absolute right-0 -mt-8 h-full w-[49.5%] bg-[linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)'
          }}
        />
      </motion.div>

      {/* 하단 그라데이션 레이어 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.1 // MainElement 애니메이션(0.8s) 완료 후 시작
        }}
        className="md:flex hidden absolute bottom-0 left-0 right-0 z-10 h-[120px] bg-gradient-to-t from-fuchsia-700/80 via-purple-800/30 to-transparent"
      ></motion.div>

      {/* 하단 양쪽에서 피어오르는 그라데이션 - 오류 발생 */}
      {/* <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] bg-gradient-radial from-fuchsia-700/80 via-purple-800/30 to-transparent rounded-full blur-2xl z-0"></div>
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[280px] bg-gradient-radial from-fuchsia-700/80 via-purple-800/30 to-transparent rounded-full blur-2xl z-20"></div> */}
      <section className="flex h-full w-[100vw] bg-black">
        {/* Background Animation */}

        <div key="MainElement" className="relative mb-[2vh] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[55vw] sm:pl-[8%] xl:pl-[6%]"
          >
            {/* 2024 활동 요약 링크 */}
            <Link
              href="/about/summary"
              className="group mb-2 inline-flex items-center gap-2 rounded-full p-0 decoration-white underline-offset-4 transition-colors hover:underline"
            >
              <div className="rounded-full bg-white/10 p-1">
                <SparklesIcon className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium tracking-tight text-white">2024 활동 요약 살펴보기</span>
            </Link>

            {/* Main Heading */}
            <h1 className="font-bold tracking-tighter text-white leading-[1] text-[42px] lg:text-[50px] xl:text-[68px] 2xl:text-[80px]">
              <div className="flex flex-col">
                <span className="flex items-baseline gap-4">
                  <span>The</span>
                  <span>best community</span>
                </span>
                <span className="flex items-baseline gap-4">
                  <span>for</span>
                  <span className='whitespace-nowrap'>future-developers.</span>
                </span>
              </div>
            </h1>

            {/* Sub Heading */}
            <p className="text-bold md:mt-3 mt-4 max-w-3xl text-[20px]/[1.3] xl:text-[22px]/[1.3] tracking-tighter text-gray-300">
              <span className="hidden lg:inline">코밋이기에 제공할 수 있는 </span>학내 최고의 학습 커뮤니티.
              <br />
              성균관대학교 중앙 코딩동아리 CoMit
            </p>

            {/* CTA Buttons */}
            <div className="mt-4 xl:mt-6 flex flex-col gap-3 md:text-xs xl:text-sm sm:flex-row">
              <Link
                href="/join"
                className="inline-flex items-center rounded-2xl border border-transparent bg-white px-4 py-2 font-medium text-black transition-colors duration-150 hover:bg-purple-500"
              >
                지원하기
                <ArrowRightIcon className="-mr-1 ml-1 md:h-3 md:w-3 xl:h-4 xl:w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-2xl border-[1.5px] border-gray-300 px-3 py-1.5 font-medium text-gray-300 transition-colors duration-300 hover:text-white"
              >
                What&apos;s CoMit?
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="flex h-full w-full items-center justify-center">
          {/* 오른쪽: 코드 에디터 UI - 큰 버전 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative hidden lg:flex items-center lg:pb-[8%] lg:pr-[4%] 2xl:w-[450px] scale-[65%] lg:scale-[80%] xl:scale-100 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
          >
            <div>
              {/* 에디터 헤더 */}
              <div className="flex items-center border-b border-gray-700 bg-gray-800/50 px-4 py-2">
                <div className="flex gap-2">
                  {/* Close 버튼 */}
                  <div className="group relative h-3 w-3 cursor-pointer rounded-full bg-[#FF5F56] transition-all hover:bg-[#FF5F56]/90">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80">
                      <svg className="h-3 w-3 text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 18L18 6M6 6l12 12" strokeWidth="3" stroke="currentColor" />
                      </svg>
                    </div>
                  </div>
                  {/* Minimize 버튼 */}
                  <div className="group relative h-3 w-3 cursor-pointer rounded-full bg-[#FFBD2E] transition-all hover:bg-[#FFBD2E]/90">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80">
                      <svg className="h-3 w-3 text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 12h14" strokeWidth="3" stroke="currentColor" />
                      </svg>
                    </div>
                  </div>
                  {/* Maximize 버튼 */}
                  <div className="group relative h-3 w-3 cursor-pointer rounded-full bg-[#28C940] transition-all hover:bg-[#28C940]/90">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80">
                      {/* <svg className="w-2 h-2 text-black" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                        </svg> */}
                    </div>
                  </div>
                </div>
                <span className="ml-4 text-sm text-gray-400">welcome.ts</span>
              </div>

              {/* 코드 내용 */}
              <div className="px-3 py-6 font-mono text-sm">
                <div className="group">
                  <button className="mr-2 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="group text-purple-400">const </span>
                  <span className="text-blue-400">greet</span>
                  <span className="text-white"> = </span>
                  <span className="text-amber-300">() ={'>'}</span>
                  <span className="text-white"> {'{'}</span>
                </div>
                <div className="group hover:cursor-pointer">
                  <button className="mr-6 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-cyan-400">console</span>
                  <span className="text-white">.</span>
                  <span className="text-emerald-400">log</span>
                  <span className="text-white">(</span>
                  <span className="text-amber-200">
                    &apos;<span className="transition-colors group-hover:bg-white/20">Welcome to CoMit!</span>&apos;
                  </span>
                  <span className="text-white">);</span>
                </div>
                <div className="group text-white">
                  <button className="mr-2 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  {'}'};
                </div>

                <div className="group mt-4">
                  <button className="mr-2 h-2 w-2 animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-purple-400">while</span>
                  <span className="text-white"> (</span>
                  <span className="text-amber-200">true</span>
                  <span className="text-white">) {'{'}</span>
                </div>
                <div className="group">
                  <button className="mr-6 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-emerald-400">tryAgain</span>
                  <span className="text-white">();</span>
                </div>

                <div className="group mt-2">
                  <button className="mr-6 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-purple-400">if</span>
                  <span className="text-white"> (</span>
                  <span className="text-red-400">wantToGiveUp</span>
                  <span className="text-white">) {'{'}</span>
                </div>
                <div className="group">
                  {' '}
                  <button className="mr-10 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-cyan-400">console</span>
                  <span className="text-white">.</span>
                  <span className="text-emerald-400">log</span>
                  <span className="text-white">(</span>
                  <span className="text-amber-200 transition-colors">&apos;Remember: Every step counts!&apos;</span>
                  <span className="text-white">);</span>
                </div>
                <div className="group">
                  <button className="mr-10 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-orange-400">continue</span>
                  <span className="text-white">;</span>
                </div>
                <div className="group text-white">
                  <button className="mr-6 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  {'}'}
                </div>

                <div className="group mt-2">
                  <button className="mr-6 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-purple-400">if</span>
                  <span className="text-white"> (</span>
                  <span className="text-green-400">successAchieved</span>
                  <span className="text-white">) {'{'}</span>
                </div>
                <div className="group">
                  <button className="mr-10 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-violet-100">break</span>
                  <span className="text-white">;</span>
                </div>
                <div className="group text-white">
                  <button className="mr-6 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  {'}'}
                </div>
                <div className="group text-white">
                  <button className="mr-2 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  {'}'}
                </div>

                <div className="group mt-4">
                  <button className="mr-2 h-2 w-2 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-blue-400">greet</span>
                  <span className="text-white">();</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 오른쪽: 코드 에디터 UI - 작은 버전 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative lg:hidden flex items-center pb-10 w-[300px] h-[340px] overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
          >
            <div className="w-full">
              {/* 에디터 헤더 */}
              <div className="flex items-center border-b border-gray-700 bg-gray-800/50 px-3 py-1.5">
                <div className="flex gap-1.5">
                  {/* Close 버튼 */}
                  <div className="group relative h-2 w-2 cursor-pointer rounded-full bg-[#FF5F56] transition-all hover:bg-[#FF5F56]/90">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80">
                      <svg className="h-2 w-2 text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 18L18 6M6 6l12 12" strokeWidth="3" stroke="currentColor" />
                      </svg>
                    </div>
                  </div>
                  {/* Minimize 버튼 */}
                  <div className="group relative h-2 w-2 cursor-pointer rounded-full bg-[#FFBD2E] transition-all hover:bg-[#FFBD2E]/90">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80">
                      <svg className="h-2 w-2 text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 12h14" strokeWidth="3" stroke="currentColor" />
                      </svg>
                    </div>
                  </div>
                  {/* Maximize 버튼 */}
                  <div className="group relative h-2 w-2 cursor-pointer rounded-full bg-[#28C940] transition-all hover:bg-[#28C940]/90">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80">
                    </div>
                  </div>
                </div>
                <span className="ml-3 text-xs text-gray-400">welcome.ts</span>
              </div>

              {/* 코드 내용 */}
              <div className="px-2 py-3 font-mono text-[10px]">
                <div className="group">
                  <button className="mr-1.5 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-purple-400">const </span>
                  <span className="text-blue-400">greet</span>
                  <span className="text-white"> = </span>
                  <span className="text-amber-300">() ={'>'}</span>
                  <span className="text-white"> {'{'}</span>
                </div>
                <div className="group hover:cursor-pointer">
                  <button className="mr-4 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-cyan-400">console</span>
                  <span className="text-white">.</span>
                  <span className="text-emerald-400">log</span>
                  <span className="text-white">(</span>
                  <span className="text-amber-200">
                    &apos;<span className="transition-colors group-hover:bg-white/20">Welcome to CoMit!</span>&apos;
                  </span>
                  <span className="text-white">);</span>
                </div>
                <div className="group text-white">
                  <button className="mr-1.5 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  {'}'};
                </div>

                <div className="group mt-3">
                  <button className="mr-1.5 h-1.5 w-1.5 animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-purple-400">while</span>
                  <span className="text-white"> (</span>
                  <span className="text-amber-200">true</span>
                  <span className="text-white">) {'{'}</span>
                </div>
                <div className="group">
                  <button className="mr-4 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-emerald-400">tryAgain</span>
                  <span className="text-white">();</span>
                </div>

                <div className="group mt-1.5">
                  <button className="mr-4 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-purple-400">if</span>
                  <span className="text-white"> (</span>
                  <span className="text-red-400">wantToGiveUp</span>
                  <span className="text-white">) {'{'}</span>
                </div>
                <div className="group">
                  <button className="mr-6 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-cyan-400">console</span>
                  <span className="text-white">.</span>
                  <span className="text-emerald-400">log</span>
                  <span className="text-white">(</span>
                  <span className="text-amber-200">&apos;Remember: Every step counts!&apos;</span>
                  <span className="text-white">);</span>
                </div>
                <div className="group">
                  <button className="mr-6 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-orange-400">continue</span>
                  <span className="text-white">;</span>
                </div>
                <div className="group text-white">
                  <button className="mr-4 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  {'}'}
                </div>

                <div className="group mt-1.5">
                  <button className="mr-4 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-purple-400">if</span>
                  <span className="text-white"> (</span>
                  <span className="text-green-400">successAchieved</span>
                  <span className="text-white">) {'{'}</span>
                </div>
                <div className="group">
                  <button className="mr-6 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-violet-100">break</span>
                  <span className="text-white">;</span>
                </div>
                <div className="group text-white">
                  <button className="mr-4 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  {'}'}
                </div>
                <div className="group text-white">
                  <button className="mr-1.5 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  {'}'}
                </div>

                <div className="group mt-3">
                  <button className="mr-1.5 h-1.5 w-1.5 rounded-full bg-red-600/85 opacity-0 group-hover:opacity-100"></button>
                  <span className="text-blue-400">greet</span>
                  <span className="text-white">();</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <TechMarquee /> {/* Height 60px */}
      </div>
    </div>
  )
}
