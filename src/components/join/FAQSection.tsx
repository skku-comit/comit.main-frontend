import { faqData } from '@/app/lib/mock/faq';

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqData.map((faq) => (
            <div key={faq.id} className="py-6">
              {/* FAQ 아코디언 아이템 */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 