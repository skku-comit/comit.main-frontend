export default function CalendarSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">일정</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* 동아리 일정 캘린더 */}
          <div className="rounded-lg bg-white p-6 shadow-lg">{/* 캘린더 컴포넌트 */}</div>
          {/* 동아리방 예약 현황 */}
          <div className="rounded-lg bg-white p-6 shadow-lg">{/* 예약 현황 컴포넌트 */}</div>
        </div>
      </div>
    </section>
  )
}
