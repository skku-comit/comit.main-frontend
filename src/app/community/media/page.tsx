'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fetchMediaPosts } from '@/lib/data/mediaPosts'
import type { MediaPost } from '@/lib/types/media'

export default function MediaPage() {
  const [posts, setPosts] = useState<MediaPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchMediaPosts()
      setPosts(data)
      setLoading(false)
    }
    loadPosts()
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            미디어관
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            CoMit의 다양한 활동과 행사를 기록합니다
          </p>
        </div>

        {/* 필터 섹션 */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
            전체
          </button>
          <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
            행사
          </button>
          <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
            세미나
          </button>
          <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
            친목
          </button>
        </div>

        {/* 미디어 포스트 그리드 */}
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group cursor-pointer overflow-hidden rounded-xl bg-white/5"
              >
                {/* 썸네일 이미지 */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* 콘텐츠 */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-white group-hover:text-gray-300">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-400">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {post.views}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 