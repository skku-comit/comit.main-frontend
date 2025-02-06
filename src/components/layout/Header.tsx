'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserCircleIcon, BookOpenIcon, DocumentTextIcon, UserGroupIcon, BuildingOfficeIcon, PhotoIcon, CalendarIcon, AcademicCapIcon, InformationCircleIcon, DocumentDuplicateIcon, BookmarkIcon, NewspaperIcon, EnvelopeIcon, FilmIcon } from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
  subheading?: string;
  icon?: React.ElementType;
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
        { name: '조직도', href: '/about/organization', subheading: '임원진 소개', icon: UserGroupIcon },
        { name: 'CI', href: '/about/ci', subheading: '동아리 아이덴티티', icon: BuildingOfficeIcon },
        { name: '연락처', href: '/about/contact', subheading: '문의하기', icon: EnvelopeIcon },
      ],
    },
    {
      name: '기록의 숲',
      href: '/community',
      items: [
        { name: '블로그', href: '/community/blog', subheading: '개발 이야기', icon: DocumentDuplicateIcon },
        { name: '학습기록', href: '/community/study', subheading: '스터디/세션 기록', icon: BookOpenIcon },
        { name: '미디어관', href: '/community/media', subheading: '활동 사진과 영상', icon: FilmIcon },
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
    <header className="fixed top-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-[15px] font-extrabold">
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
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute mt-1 w-64 bg-black/60 backdrop-blur-md rounded-2xl shadow-lg py-1 border-none"
                        style={{ 
                          left: '50%',
                          transform: 'translate(-50%, -4px)'
                        }}
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
                              <div className="flex items-start ml-2">
                                {item.icon && (
                                  <div className="p-1.5 bg-gray-700/50 rounded-lg mr-2.5 transition-colors group-hover:bg-gray-600/50">
                                    <item.icon className="h-4 w-4 text-gray-300 transition-colors group-hover:text-white group-hover:fill-white" />
                                  </div>
                                )}
                                <div>
                                  <div className="text-[14px] font-medium text-gray-200 group-hover:text-white">
                                    {item.name}
                                  </div>
                                  {item.subheading && (
                                    <div className="text-[12px] text-gray-400 transition-colors group-hover:text-white">
                                      {item.subheading}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          {/* 프로필 아이콘과 드롭다운 */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="프로필"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <UserCircleIcon className="w-8 h-8" />
            </button>

            {/* 드롭다운 메뉴 */}
            {isDropdownOpen && (
              <div className="absolute right-0 -translate-x-2 mt-2 w-[180px] bg-black rounded-2xl shadow-lg py-1.5 border-none border-gray-800">
                <a
                  href="https://manage.commit-club.com"
                  className="block px-3.5 py-2.5 text-[14px] text-gray-200 hover:bg-gray-700/50 transition-colors rounded-xl mx-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CAMS
                </a>
                <a
                  href="https://admin.commit-club.com"
                  className="block px-3.5 py-2.5 text-[14px] text-gray-200 hover:bg-gray-700/50 transition-colors rounded-xl mx-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  코밋관리체계
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 