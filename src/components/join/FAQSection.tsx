import { faqData } from '@/app/lib/mock/faq'

export default function FAQSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">자주 묻는 질문</h2>
        <div className="mx-auto max-w-3xl divide-y divide-gray-200">
          {faqData.map((faq) => (
            <div key={faq.id} className="py-6">
              {/* FAQ 아코디언 아이템 */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
