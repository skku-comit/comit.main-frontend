export default function CalendarSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">일정</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 동아리 일정 캘린더 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* 캘린더 컴포넌트 */}
          </div>
          {/* 동아리방 예약 현황 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* 예약 현황 컴포넌트 */}
          </div>
        </div>
      </div>
    </section>
  );
} 