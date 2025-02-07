'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import TechMarquee from '@/components/ui/TechMarquee';

export default function HeroSection() {
  return (
    <div className="relative h-[calc(100vh-4rem)]">
      <section className="h-[calc(100vh-4rem-80px)] flex items-center bg-black">
        {/* Background Animation */}


        <div key='MainElement' className="relative w-full pt-[10vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pl-[4%]"
          >
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
              코밋이기에 제공할 수 있는 학내 최고의 학습 커뮤니티.<br/>성균관대학교 중앙 코딩동아리 Comit

            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm">
              <Link 
                href="/join"
                className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-2xl text-white bg-gray-600 hover:bg-purple-700 transition-colors duration-300"
              >
                지원하기
                <ArrowRightIcon className="ml-1 -mr-1 h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-3 py-1.5 border-[1.5px] border-gray-300 font-medium rounded-2xl text-gray-300 hover:text-white transition-colors duration-300"
              >
                What's Comit?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="absolute bottom-0 left-0 right-0">
        <TechMarquee />
      </div>
    </div>
  );
} 