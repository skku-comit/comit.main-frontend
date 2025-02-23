'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  description: string
  date: string
  author: string
  color: string
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: '리액트 18의 새로운 기능 탐구',
    description: 'React 18에서 추가된 주요 기능들과 성능 개선사항을 알아봅니다.',
    date: '2024-03-15',
    author: '김민수',
    color: 'bg-blue-500'
  },
  // ... 더 많은 목업 데이터
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex overflow-hidden rounded-xl bg-white/5 hover:bg-white/10"
            >
              <div className={`w-24 ${post.color}`} />
              <div className="flex-1 p-6">
                <h2 className="text-xl font-semibold text-white">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-400">{post.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 