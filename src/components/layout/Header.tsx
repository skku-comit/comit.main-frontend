'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const pathname = usePathname();
  
  const navigation = [
    { name: 'Our Story', href: '/about' },
    { name: '기록의 숲', href: '/community' },
    { name: '자료실', href: '/resources' },
    { name: '가입안내', href: '/join' },
  ];

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
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <nav className="hidden sm:flex items-center space-x-[15px]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 py-2 text-sm font-medium border-b-2 transition-colors
                    ${pathname === item.href 
                      ? 'text-blue-400 border-blue-400' 
                      : 'text-gray-300 border-transparent hover:text-white hover:border-gray-300'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* 프로필 아이콘 */}
          <div className="flex items-center">
            <button
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="프로필"
            >
              <UserCircleIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 