'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchStudyRecords } from '@/lib/data/studyRecords'
import type { StudyRecord } from '@/lib/types/study'

export default function StudyPage() {
  const [records, setRecords] = useState<StudyRecord[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRecords = async () => {
      const data = await fetchStudyRecords()
      setRecords(data)
      setLoading(false)
    }
    loadRecords()
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            학습 기록
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            CoMit 멤버들의 다양한 학습 활동을 기록합니다
          </p>
        </div>

        {/* 필터 섹션 */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
            전체
          </button>
          <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
            스터디
          </button>
          <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
            프로젝트
          </button>
          <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
            멘토링
          </button>
        </div>

        {/* 학습 기록 그리드 */}
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {records.map((record) => (
              <motion.div
                key={record.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative overflow-hidden rounded-xl bg-white/5 p-6 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={record.leader.image}
                    alt={record.leader.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-white">{record.title}</h3>
                    <p className="text-sm text-gray-400">{record.leader.name}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-300">{record.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {record.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    {record.startDate} ~ {record.endDate}
                  </span>
                  <span className={`rounded-full px-2 py-1 text-xs ${
                    record.status === 'ongoing' 
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {record.status === 'ongoing' ? '진행중' : '완료'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 