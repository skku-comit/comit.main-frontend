import Image from 'next/image'

export default function ActivitiesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">주요 활동</h2>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">정기 활동</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>주 1회 정기 세션</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>스터디 그룹 활동</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>프로젝트 팀 활동</span>
              </li>
            </ul>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg">
            <Image src="/images/activities.jpg" alt="COMMIT 활동 사진" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
