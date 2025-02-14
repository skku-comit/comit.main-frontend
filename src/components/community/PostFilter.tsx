'use client'

import { useState } from 'react'

export default function PostFilter() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: '전체' },
    { id: 'recall', label: '동아리 회고' },
    { id: 'study', label: '스터디 기록' },
    { id: 'tech', label: '기술 아티클' }
  ]

  return (
    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
      {/* 카테고리 필터 */}
      <div className="flex gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              selectedCategory === category.id
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
          className="w-full rounded-lg border px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:w-64"
        />
      </div>
    </div>
  )
}
