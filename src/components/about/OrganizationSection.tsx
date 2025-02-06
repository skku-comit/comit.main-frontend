import { executives } from '@/app/lib/mock/members';

export default function OrganizationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">임원진 소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((executive) => (
            <div key={executive.id} className="bg-white rounded-lg shadow-md p-6">
              {/* 임원진 카드 내용 */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 