'use client';

import { useState } from 'react';

export default function PostFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: '전체' },
    { id: 'recall', label: '동아리 회고' },
    { id: 'study', label: '스터디 기록' },
    { id: 'tech', label: '기술 아티클' },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
      {/* 카테고리 필터 */}
      <div className="flex gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium
              ${selectedCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* 검색 */}
      <div className="relative">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );
} 