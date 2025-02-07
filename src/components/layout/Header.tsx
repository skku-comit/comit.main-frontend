'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  UserCircleIcon, 
  BookOpenIcon,
  DocumentTextIcon,
  CalendarIcon, 
  AcademicCapIcon, 
  InformationCircleIcon, 
  DocumentDuplicateIcon, 
  BookmarkIcon, 
  NewspaperIcon, 
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentListIcon,
  PhotoIcon,
  UsersIcon,
  SparklesIcon,
  PaintBrushIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
  subheading?: string;
  icon?: React.ElementType;
  useStroke?: boolean;
}

interface NavSection {
  name: string;
  href: string;
  items: NavItem[];
}

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigation: NavSection[] = [
    {
      name: 'Our Story',
      href: '/about',
      items: [
        { name: '소개', href: '/about', subheading: '동아리 소개와 가치', icon: InformationCircleIcon },
        { name: '조직도', href: '/about/organization', subheading: '임원진 소개', icon: UsersIcon, useStroke: true },
        { name: 'CI', href: '/about/ci', subheading: '동아리 아이덴티티', icon: PaintBrushIcon, useStroke: true },
        { name: '연락처', href: '/about/contact', subheading: '문의하기', icon: EnvelopeIcon },
      ],
    },
    {
      name: '기록의 숲',
      href: '/community',
      items: [
        { name: '블로그', href: '/community/blog', subheading: '개발 이야기', icon: PencilSquareIcon },
        { name: '학습기록', href: '/community/study', subheading: '스터디/세션 기록', icon: ClipboardDocumentListIcon },
        { name: '미디어관', href: '/community/media', subheading: '활동 사진과 영상', icon: PhotoIcon, useStroke: true },
      ],
    },
    {
      name: '자료실',
      href: '/resources',
      items: [
        { name: '회칙', href: '/resources/rules', subheading: '동아리 운영 규정', icon: BookmarkIcon },
        { name: '동아리 일정', href: '/resources/calendar', subheading: '주요 일정 안내', icon: CalendarIcon },
        { name: '도서 현황', href: '/resources/books', subheading: '보유 도서 목록', icon: BookOpenIcon },
      ],
    },
    {
      name: '가입안내',
      href: '/join',
      items: [
        { name: '지원하기', href: '/join/apply', subheading: '신입 부원 모집', icon: AcademicCapIcon },
        { name: '이전 모집 공고', href: '/join/history', subheading: '지난 모집내역', icon: NewspaperIcon },
      ],
    },
  ];

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-black z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-[64px]">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-6 h-6">
              <Image
                src="/comit.png"
                alt="COMMIT Logo"
                fill
                sizes="24px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[15px] font-extrabold text-white">
              Comit
            </span>
          </Link>

          {/* 네비게이션 */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <nav className="hidden sm:flex items-center space-x-[15px]">
              {navigation.map((section) => (
                <div
                  key={section.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(section.name)}
                >
                  <Link
                    href={section.href}
                    className={`inline-flex items-center px-1 py-2 text-sm font-medium border-b-2 transition-colors
                      ${pathname === section.href 
                        ? 'text-blue-400 border-blue-400' 
                        : 'text-gray-300 border-transparent hover:text-white hover:border-gray-300'
                      }`}
                  >
                    {section.name}
                  </Link>

                  {/* 네비게이션 드롭다운 */}
                  <AnimatePresence>
                    {activeDropdown === section.name && (
                      <div className="absolute left-1/2 -translate-x-1/2"> {/* motion.div와 transform 속성 충돌 해결을 위한 wrapper div */}
                        <motion.div 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="mt-[6px] w-64 bg-black/70 backdrop-blur-md rounded-2xl shadow-lg py-3 border-none"
                        >
                          {section.items.map((item, index) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ 
                                duration: 0.2,
                                delay: index * 0.05,
                                ease: "easeOut"
                              }}
                            >
                              <Link
                                href={item.href}
                                className="block px-2.5 py-2 transition-colors group"
                              >
                                <div className="flex items-center ml-2">
                                  {item.icon && (
                                    <div className="w-10 h-10 flex items-center justify-center group-hover:bg-white rounded-lg mr-2.5 transition-colors bg-gray-600/50">
                                      <item.icon 
                                        className={`h-5 w-5 text-gray-300 transition-colors group-hover:text-white group-hover:fill-black ${
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
            <button
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="프로필"
            >
              <UserCircleIcon className="w-8 h-8" />
            </button>

            {/* 드롭다운 메뉴 */}
            <AnimatePresence>
              {isDropdownOpen && (
                <div className="absolute right-0 -translate-x-2">
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="mt-[4px] w-64 bg-black/70 backdrop-blur-md rounded-2xl shadow-lg py-2 border-none"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <a
                        href="https://comit-ams-jungjuns-projects.vercel.app/"
                        className="block px-2.5 py-2 transition-colors group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center ml-2">
                          <div className="w-10 h-10 flex items-center justify-center bg-gray-700/50 rounded-lg mr-2.5 transition-colors group-hover:bg-white">
                            <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-300 transition-colors group-hover:stroke-black group-hover:fill-white stroke-2" />
                          </div>
                          <div className="text-[15px] font-medium text-gray-200 group-hover:text-white">
                            COMS(코밋 스페이스)
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
  );
} 