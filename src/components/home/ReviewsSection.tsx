'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const reviews = [
  {
    id: 1,
    content: "코딩을 처음 시작했을 때는 막막했는데, COMMIT에서 체계적으로 학습하면서 실력이 크게 향상되었어요. 특히 선배들의 멘토링이 큰 도움이 되었습니다.",
    author: "김OO",
    role: "10기 학부생",
    image: "/images/reviews/review1.jpg",
    rating: 5,
  },
  {
    id: 2,
    content: "동아리방에서 자유롭게 공부하고 토론할 수 있는 환경이 정말 좋았어요. 프로젝트도 함께하면서 실전 경험을 쌓을 수 있었죠.",
    author: "이OO",
    role: "9기 졸업생",
    image: "/images/reviews/review2.jpg",
    rating: 5,
  },
  {
    id: 3,
    content: "현업에 계신 선배들의 특강을 통해 실무에 대한 인사이트를 얻을 수 있었고, 진로 결정에 큰 도움이 되었습니다.",
    author: "박OO",
    role: "8기 졸업생",
    image: "/images/reviews/review3.jpg",
    rating: 5,
  },
];

export default function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            선배들의 생생한 후기
          </h2>
          <p className="text-xl text-gray-600">
            COMMIT에서 성장한 선배들의 이야기를 들어보세요
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              {/* 별점 */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* 후기 내용 */}
              <p className="text-gray-600 mb-6 min-h-[100px]">
                "{review.content}"
              </p>

              {/* 작성자 정보 */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={review.image}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 