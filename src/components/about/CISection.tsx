import { ciData } from '@/app/lib/mock/ci';

export default function CISection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">CI 소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ciData.map((ci) => (
            <div key={ci.id} className="bg-gray-50 rounded-lg p-6">
              {/* CI 카드 내용 */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 