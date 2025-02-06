'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-gray-900 via-gray-900 to-blue-900">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-6">
            <span className="block">The Best Community for</span>
            <span className="block text-blue-400">Future-Developers.</span>
          </h1>


          {/* Sub Heading */}
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            성균관대학교 중앙 코딩동아리 코밋에서 교내 최고의 <br/>개발 커뮤니티 & 학습 시스템을 누리세요.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/join"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              지원하기
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-300 hover:bg-gray-800 transition-colors duration-300"
            >
              더 알아보기
            </Link>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-300 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 