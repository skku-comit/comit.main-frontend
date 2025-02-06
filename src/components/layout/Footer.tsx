export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
            <p className="mt-4 text-base text-gray-500">
              성균관대학교 자연과학캠퍼스<br />
              이메일: commit@skku.edu
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://manage.commit-club.com" className="text-base text-gray-500 hover:text-gray-900">
                  활동관리시스템
                </a>
              </li>
              {/* 다른 링크들 */}
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Social</h3>
            {/* 소셜 미디어 링크들 */}
          </div>
        </div>
      </div>
    </footer>
  );
} 