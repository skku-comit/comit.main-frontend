import { MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa'
import { RiKakaoTalkFill } from 'react-icons/ri'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <div className="space-y-2 text-sm text-gray-100">
              <p>
                <span className="font-medium">회장 최해리</span>
                <span className="ml-2">010-7448-4041</span>
              </p>
              <p className="">
                <span className="font-medium">기획팀장 임정준</span>
                <span className="ml-2">010-4740-3604</span>
              </p>
              <p>
                <a href="mailto:comit10282@gmail.com" className="text-purple-500 hover:text-purple-300">
                  comit10282@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Location</h3>
            <p className="text-sm leading-relaxed text-gray-100">
              경기 수원시 장안구 천천동 585
              <br />
              성균관대학교 자연과학캠퍼스
              <br />
              학생회관 03312
            </p>
            <a
              href="/about"
              className="inline-flex items-center text-sm text-gray-100 transition-colors hover:text-purple-400"
            >
              <MapPinIcon className="mr-1 h-4 w-4" />
              찾아오시는 길
            </a>
          </div>

          {/* Quick Links & Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Links</h3>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <a href="https://manage.commit-club.com" className="transition-colors hover:text-white">
                  활동관리시스템
                </a>
              </li>
              <li>
                <a href="/about" className="transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/join" className="transition-colors hover:text-white">
                  Join Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="inline-flex items-center transition-colors hover:text-purple-400">
                  <ShieldCheckIcon className="mr-1 h-4 w-4" />
                  개인정보 처리방침
                </a>
              </li>
            </ul>
          </div>

          {/* Development Team */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Development Team</h3>
            <div className="space-y-2 text-sm text-gray-100">
              <p>
                <span className="font-medium">Frontend</span>
                <br />
                임정준, 권서진
              </p>
              <p>
                <span className="font-medium">Backend</span>
                <br />
                손장수, 김주민
              </p>
              <p>
                <span className="font-medium">Design</span>
                <br />
                정유현, 임정준
              </p>
            </div>
          </div>
        </div>

        {/* SNS Links & Copyright */}
        <div className="mt-6 flex flex-col items-center space-y-4 border-t border-gray-800 pt-6">
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/skku_comit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 transition-colors hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/@skku_comit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 transition-colors hover:text-red-500"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://github.com/skku-comit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 transition-colors hover:text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://open.kakao.com/o/gQ6Bykfh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 transition-colors hover:text-yellow-400"
            >
              <RiKakaoTalkFill size={20} />
            </a>
          </div>
          <p className="text-center text-xs text-gray-100">© {new Date().getFullYear()} CoMit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
