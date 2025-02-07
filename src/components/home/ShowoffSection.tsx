'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function ShowoffSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    if (!section || !text) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    // COMMIT 텍스트 애니메이션
    tl.from('.letter', {
      opacity: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.1,
      duration: 1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* COMMIT 타이포그래피 */}
        <div ref={textRef} className="text-center mb-24">
          <div className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight">
            {'COMIT'.split('').map((letter, index) => (
              <span
                key={index}
                className="letter inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* 설명 텍스트와 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
            코딩을 처음 시작하는 분부터 경험이 있는 분들까지,<br />
            모두가 함께 성장하는 개발 커뮤니티를 만들어갑니다.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            더 알아보기
          </Link>
        </motion.div>

        {/* 배경 장식 */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
      </div>
    </section>
  );
} 