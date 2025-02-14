export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">Contact Us</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* 지도 */}
          <div className="h-96 rounded-lg bg-gray-200">{/* 카카오맵 또는 구글맵 컴포넌트 */}</div>
          {/* 연락처 정보 */}
          <div className="space-y-6">{/* 주소, 이메일, 문의방법 등 */}</div>
        </div>
      </div>
    </section>
  )
}
