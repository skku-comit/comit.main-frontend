'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  UserCircleIcon,
  BookOpenIcon,
  CalendarIcon,
  AcademicCapIcon,
  InformationCircleIcon,
  BookmarkIcon,
  NewspaperIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
  // ClipboardDocumentListIcon,
  // PhotoIcon,
  UsersIcon,
  PaintBrushIcon,
  // PencilSquareIcon
} from '@heroicons/react/24/outline'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  name: string
  href: string
  subheading?: string
  icon?: React.ElementType
  useStroke?: boolean
}

interface NavSection {
  name: string
  href: string
  items: NavItem[]
}

export default function Header() {
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const navigation: NavSection[] = [
    {
      name: '찾아오시는 길', //임시방편
      href: '/about',
      items: [
        { name: '소개', href: '/about', subheading: '동아리 소개와 가치', icon: InformationCircleIcon },
        { name: '조직도', href: '/about/organization', subheading: '임원진 소개', icon: UsersIcon, useStroke: true },
        { name: 'CI', href: '/about/ci', subheading: '동아리 아이덴티티', icon: PaintBrushIcon, useStroke: true },
        { name: '연락처', href: '/about/contact', subheading: '문의하기', icon: EnvelopeIcon }
      ]
    },
    // {
    //   name: '기록의 숲',
    //   href: '/community',
    //   items: [
    //     { name: '블로그', href: '/community/blog', subheading: '개발, 그리고 동아리 이야기', icon: PencilSquareIcon },
    //     {
    //       name: '학습기록',
    //       href: '/community/study',
    //       subheading: '학기별 스터디/세션 기록',
    //       icon: ClipboardDocumentListIcon
    //     },
    //     {
    //       name: '미디어관',
    //       href: '/community/media',
    //       subheading: '코밋의 행사/이벤트',
    //       icon: PhotoIcon,
    //       useStroke: true
    //     }
    //   ]
    // },
    {
      name: '자료실', //임시방편
      href: '/resources',
      items: [
        { name: '회칙', href: '/resources/rules', subheading: '동아리 운영 규정', icon: BookmarkIcon },
        { name: '동아리 일정', href: '/resources/calendar', subheading: '주요 일정 안내', icon: CalendarIcon },
        { name: '도서 현황', href: '/resources/books', subheading: '동아리방 보유도서 목록', icon: BookOpenIcon }
      ]
    },
    {
      name: '가입안내',
      href: '/join',
      items: [
        { name: '리쿠르팅', href: '/join/apply', subheading: '2025-1 신입부원 모집', icon: AcademicCapIcon },
        { name: '이전 모집 공고', href: '/join/history', subheading: '지난 모집내역', icon: NewspaperIcon }
      ]
    }
  ]

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full bg-black">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-[64px] items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-6 w-6">
              <Image src="/comit.png" alt="COMMIT Logo" fill sizes="24px" className="object-contain" priority />
            </div>
            <span className="text-[15px] font-extrabold text-white">CoMit</span>
          </Link>

          {/* 네비게이션 */}
          <div className="absolute left-1/2 -translate-x-1/2 transform" onMouseLeave={() => setActiveDropdown(null)}>
            <nav className="hidden items-center space-x-[15px] sm:flex">
              {navigation.map((section) => (
                <div key={section.name} className="relative" onMouseEnter={() => setActiveDropdown(section.name)}>
                  <Link
                    href={section.href}
                    className={`inline-flex items-center border-b-2 px-1 py-2 text-sm lg:text-base font-medium transition-colors ${
                      pathname === section.href
                        ? 'border-blue-400 text-blue-400'
                        : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white'
                    }`}
                  >
                    {section.name}
                  </Link>

                  {/* 네비게이션 드롭다운 */}
                  <AnimatePresence>
                    {false &&activeDropdown === section.name && (
                      <div className="absolute left-1/2 -translate-x-1/2">
                        {' '}
                        {/* motion.div와 transform 속성 충돌 해결을 위한 wrapper div */}
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="mt-[6px] w-64 rounded-2xl border-none bg-black/70 py-3 shadow-lg backdrop-blur-md"
                        >
                          {section.items.map((item, index) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.2,
                                delay: index * 0.05,
                                ease: 'easeOut'
                              }}
                            >
                              <Link href={item.href} className="group block px-2.5 py-2 transition-colors">
                                <div className="ml-2 flex items-center">
                                  {item.icon && (
                                    <div className="mr-2.5 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-600/50 transition-colors group-hover:bg-white">
                                      <item.icon
                                        className={`h-5 w-5 text-gray-300 transition-colors group-hover:fill-black group-hover:text-white ${
                                          item.useStroke ? 'group-hover:stroke-black' : ''
                                        }`}
                                      />
                                    </div>
                                  )}
                                  <div>
                                    <div className="text-[15px] font-medium text-gray-200 group-hover:text-white">
                                      {item.name}
                                    </div>
                                    {item.subheading && (
                                      <div className="text-[13px] tracking-tight text-gray-400 transition-colors group-hover:text-white">
                                        {item.subheading}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          {/* 프로필 아이콘과 드롭다운 */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="p-2 text-gray-300 transition-colors hover:text-white" aria-label="프로필">
              <UserCircleIcon className="size-6 sm:size-8" />
            </button>

            {/* 드롭다운 메뉴 */}
            <AnimatePresence>
              {isDropdownOpen && (
                <div className="absolute right-0 -translate-x-2">
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="mt-[4px] w-64 rounded-2xl border-none bg-black/70 py-2 shadow-lg backdrop-blur-md"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <a
                        href="https://comit-website.vercel.app/"
                        className="group block px-2.5 py-2 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="ml-2 flex items-center">
                          <div className="mr-2.5 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700/50 transition-colors group-hover:bg-white">
                            <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2 text-gray-300 transition-colors group-hover:fill-white group-hover:stroke-black" />
                          </div>
                          <div className="text-[15px] font-normal text-gray-200 group-hover:text-white">
                            메인 웹사이트
                          </div>
                        </div>
                      </a>                      <a
                        href="https://cams-orpin.vercel.app/my-activities"
                        className="group block px-2.5 py-2 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="ml-2 flex items-center">
                          <div className="mr-2.5 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700/50 transition-colors group-hover:bg-white">
                            <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2 text-gray-300 transition-colors group-hover:fill-white group-hover:stroke-black" />
                          </div>
                          <div className="text-[15px] font-normal text-gray-200 group-hover:text-white">
                            CAMS(서비스 준비중)
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}
