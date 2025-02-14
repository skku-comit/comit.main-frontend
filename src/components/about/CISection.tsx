import { clubIdentityData } from '@/app/lib/mock/ci'

export default function CISection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">CI 소개</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {clubIdentityData.map((identity) => (
            <div key={identity.id} className="rounded-lg bg-gray-50 p-6">
              {/* CI 카드 내용 */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
