import { MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { 
  FaInstagram, 
  FaYoutube, 
  FaGithub,
} from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
            <div className="space-y-2 text-sm text-gray-100">
              <p>
                <span className="font-medium">회장 박해리</span>
                <span className="ml-2">010-2323-3434</span>
              </p>
              <p className="">
                <span className="font-medium">홍보팀 정유현</span>
                <span className="ml-2">010-0353-3554</span>
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
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Location</h3>
            <p className="text-sm text-gray-100 leading-relaxed">
              경기 수원시 장안구 천천동 585<br />
              성균관대학교 자연과학캠퍼스<br />
              학생회관 20x호
            </p>
            <a 
              href="/location" 
              className="inline-flex items-center text-sm text-gray-100 hover:text-purple-400 transition-colors"
            >
              <MapPinIcon className="w-4 h-4 mr-1" />
              찾아오시는 길
            </a>
          </div>
          
          {/* Quick Links & Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Links</h3>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <a href="https://manage.commit-club.com" className="hover:text-white transition-colors">
                  활동관리시스템
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/join" className="hover:text-white transition-colors">
                  Join Us
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="inline-flex items-center  hover:text-purple-400 transition-colors"
                >
                  <ShieldCheckIcon className="w-4 h-4 mr-1" />
                  개인정보 처리방침
                </a>
              </li>
            </ul>
          </div>
          
          {/* Development Team */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Development Team</h3>
            <div className="space-y-2 text-sm text-gray-100">
              <p>
                <span className="font-medium">Frontend</span><br />
                임정준, 권서진
              </p>
              <p>
                <span className="font-medium">Backend</span><br />
                손장수, 김주민
              </p>
              <p>
                <span className="font-medium">Design</span><br />
                정유현, 임정준
              </p>
            </div>
          </div>
        </div>

        {/* SNS Links & Copyright */}
        <div className="flex flex-col items-center space-y-4 mt-6 pt-6 border-t border-gray-800">
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/skku_comit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-red-500 transition-colors"
            >
              <FaYoutube size={20} />
            </a>
            <a 
              href="https://github.com/skku-comit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://open.kakao.com/o/gQ6Bykfh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-yellow-400 transition-colors"
            >
              <RiKakaoTalkFill size={20} />
            </a>
          </div>
          <p className="text-center text-gray-100 text-xs">
            © {new Date().getFullYear()} CoMit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 