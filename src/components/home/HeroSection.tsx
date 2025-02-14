'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import TechMarquee from '@/components/ui/TechMarquee';

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
            className="absolute -mt-8 right-0 w-[49.5%] h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:4rem_4rem]"
            style={{
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)',
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
      className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-fuchsia-700/80 via-purple-800/30 to-transparent z-10"
    ></motion.div>
        
        {/* 하단 양쪽에서 피어오르는 그라데이션 - 오류 발생 */}
        {/* <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] bg-gradient-radial from-fuchsia-700/80 via-purple-800/30 to-transparent rounded-full blur-2xl z-0"></div>
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[280px] bg-gradient-radial from-fuchsia-700/80 via-purple-800/30 to-transparent rounded-full blur-2xl z-20"></div> */}
        <section className="h-full w-[100vw] flex bg-black">
          {/* Background Animation */}

          <div key='MainElement' className="relative mb-[2vh] flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pl-[6%] w-[55vw]"
            >
              {/* 2024 활동 요약 링크 */}
              <Link 
                href="/about/summary"
                className="inline-flex items-center mb-2 gap-2 p-0 decoration-white underline-offset-4 rounded-full hover:underline transition-colors group"
              >
                <div className="p-1 bg-white/10 rounded-full">
                  <SparklesIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-sm font-medium tracking-tight">
                  2024 활동 요약 살펴보기
                </span>
                
              </Link>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-[85px] font-bold text-white mb-6 tracking-tighter">
                <div className="flex flex-col">
                  <span className="flex items-baseline gap-4">
                    <span>The</span>
                    <span>best community</span>
                  </span>
                  <span className="flex items-baseline gap-4">
                    <span>for</span>
                    <span>future-developers.</span>
                  </span>
                </div>
              </h1>

              {/* Sub Heading */}
              <p className="mt-6 text-[22px]/[1.3] text-bold text-gray-300 max-w-3xl tracking-tighter">
                코밋이기에 제공할 수 있는 학내 최고의 학습 커뮤니티.<br/>성균관대학교 중앙 코딩동아리 CoMit
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm">
                <Link 
                  href="/join"
                  className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-2xl text-black bg-white hover:bg-purple-500/90 transition-colors duration-300"
                >
                  지원하기
                  <ArrowRightIcon className="ml-1 -mr-1 h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-3 py-1.5 border-[1.5px] border-gray-300 font-medium rounded-2xl text-gray-300 hover:text-white transition-colors duration-300"
                >
                  What&apos;s CoMit?
                </Link>
              </div>
            </motion.div>
          </div>

          <div className='w-full h-full flex justify-center items-center'>
                        {/* 오른쪽: 코드 에디터 UI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex items-center pr-[4%] pb-[8%]"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 w-[450px]">
                {/* 에디터 헤더 */}
                <div className="flex items-center px-4 py-2 bg-gray-800/50 border-b border-gray-700">
                  <div className="flex gap-2">
                    {/* Close 버튼 */}
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/90 relative group cursor-pointer transition-all">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80">
                        <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 18L18 6M6 6l12 12" strokeWidth="3" stroke="currentColor"/>
                        </svg>
                      </div>
                    </div>
                    {/* Minimize 버튼 */}
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/90 relative group cursor-pointer transition-all">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80">
                        <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5 12h14" strokeWidth="3" stroke="currentColor"/>
                        </svg>
                      </div>
                    </div>
                    {/* Maximize 버튼 */}
                    <div className="w-3 h-3 rounded-full bg-[#28C940] hover:bg-[#28C940]/90 relative group cursor-pointer transition-all">
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
                  <div className="group"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-2'></button>
                  <span className="text-purple-400 group">const </span>
                    <span className="text-blue-400">greet</span>
                    <span className="text-white"> = </span>
                    <span className="text-amber-300">() ={'>'}</span>
                    <span className="text-white"> {'{'}</span>
                  </div>
                  <div className="group hover:cursor-pointer"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-6'></button>
                    <span className="text-cyan-400">console</span>
                    <span className="text-white">.</span>
                    <span className="text-emerald-400">log</span>
                    <span className="text-white">(</span>
                    <span className="text-amber-200">&apos;<span className='group-hover:bg-white/20 transition-colors'>Welcome to CoMit!</span>&apos;</span>
                    <span className="text-white">);</span>
                  </div>
                  <div className="text-white group"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-2'></button>{'}'};</div>
                  
                  <div className="mt-4 group"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-2 animate-[pulse_2s_ease-in-out_infinite]'></button>
                    <span className="text-purple-400">while</span>
                    <span className="text-white"> (</span>
                    <span className="text-amber-200">true</span>
                    <span className="text-white">) {'{'}</span>
                  </div>
                  <div className="group"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-6'></button>
                    <span className="text-emerald-400">tryAgain</span>
                    <span className="text-white">();</span>
                  </div>
                  
                  <div className="group mt-2"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-6'></button>
                    <span className="text-purple-400">if</span>
                    <span className="text-white"> (</span>
                    <span className="text-red-400">wantToGiveUp</span>
                    <span className="text-white">) {'{'}</span>
                  </div>
                  <div className="group"> <button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-10'></button>
                    <span className="text-cyan-400">console</span>
                    <span className="text-white">.</span>
                    <span className="text-emerald-400">log</span>
                    <span className="text-white">(</span>
                    <span className="text-amber-200 transition-colors">&apos;Remember: Every step counts!&apos;</span>
                    <span className="text-white">);</span>
                  </div>
                  <div className="group"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-10'></button>
                    <span className="text-orange-400">continue</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="group text-white"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-6'></button>{'}'}</div>
                  
                  <div className="group mt-2"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-6'></button>
                    <span className="text-purple-400">if</span>
                    <span className="text-white"> (</span>
                    <span className="text-green-400">successAchieved</span>
                    <span className="text-white">) {'{'}</span>
                  </div>
                  <div className="group"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-10'></button>
                    <span className="text-violet-100">break</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="group text-white"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-6'></button>{'}'}</div>
                  <div className="group text-white"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-2'></button>{'}'}</div>

                  <div className="mt-4 group"><button className='group-hover:opacity-100 opacity-0 rounded-full bg-red-600/85 w-2 h-2 mr-2'></button>
                    <span className="text-blue-400">greet</span>
                    <span className="text-white">();</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </section>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <TechMarquee />         {/* Height 60px */}
        </div>
    </div>
  );
} 