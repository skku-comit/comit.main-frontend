import { executives } from '@/app/lib/mock/members'

export default function OrganizationSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">임원진 소개</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {executives.map((executive) => (
            <div key={executive.id} className="rounded-lg bg-white p-6 shadow-md">
              {/* 임원진 카드 내용 */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
