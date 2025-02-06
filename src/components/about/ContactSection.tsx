export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 지도 */}
          <div className="h-96 bg-gray-200 rounded-lg">
            {/* 카카오맵 또는 구글맵 컴포넌트 */}
          </div>
          {/* 연락처 정보 */}
          <div className="space-y-6">
            {/* 주소, 이메일, 문의방법 등 */}
          </div>
        </div>
      </div>
    </section>
  );
} 