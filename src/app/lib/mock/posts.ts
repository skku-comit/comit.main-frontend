import { BlogPost } from '@/app/types'
import { members } from './members'

export const posts: BlogPost[] = [
  // 동아리 회고
  {
    id: '1',
    title: '2024-1 COMMIT 활동 회고',
    content: '이번 학기 코밋에서는 React 스터디와 알고리즘 스터디를 중심으로 다양한 프로젝트를 진행했습니다...',
    summary: '2024년 1학기 동아리 활동을 돌아보며',
    author: members[0],
    category: 'recall',
    tags: ['회고', '2024-1', 'React', '알고리즘'],
    thumbnailImage: '/images/lib/post-1.jpg',
    createdAt: '2024-06-20',
    views: 128,
    likes: 45,
    categorySpecificData: {
      semester: '2024-1',
      activities: ['React 스터디', '알고리즘 스터디', '해커톤', '종강총회']
    }
  },

  // 스터디 기록
  {
    id: '2',
    title: 'React Query로 서버 상태 관리하기',
    content: 'React Query는 서버 상태 관리를 위한 강력한 도구입니다...',
    summary: 'React Query의 기본 개념과 실제 활용 사례',
    author: members[1],
    category: 'tech',
    tags: ['React', 'React Query', 'Frontend'],
    thumbnailImage: '/images/lib/post-2.jpg',
    createdAt: '2024-05-15',
    views: 256,
    likes: 72,
    categorySpecificData: {
      difficulty: 'intermediate',
      prerequisites: ['React 기초', 'HTTP 통신 이해'],
      references: ['React Query 공식문서', 'TkDodo의 블로그']
    }
  },

  // 기술 아티클
  {
    id: '3',
    title: 'Next.js 스터디 2주차 - App Router',
    content: '이번 주차에서는 Next.js 13의 핵심 기능인 App Router에 대해 학습했습니다...',
    summary: 'Next.js App Router 실전 활용기',
    author: members[2],
    category: 'study',
    tags: ['Next.js', 'React', 'App Router'],
    thumbnailImage: '/images/posts/nextjs-study.jpg',
    createdAt: '2024-04-10',
    views: 189,
    likes: 34,
    categorySpecificData: {
      studyName: 'Next.js 심화 스터디',
      weekNumber: 2,
      learningPoints: ['App Router vs Pages Router', 'Server Components', 'Data Fetching']
    }
  },
  {
    id: '4',
    title: '알고리즘 스터디 - 그래프 탐색 알고리즘',
    content: 'DFS와 BFS의 개념과 실제 코딩테스트 문제 풀이...',
    summary: '그래프 탐색 알고리즘 마스터하기',
    author: members[3],
    category: 'study',
    tags: ['알고리즘', 'DFS', 'BFS', '코딩테스트'],
    thumbnailImage: '/images/posts/algorithm-study.jpg',
    createdAt: '2024-04-05',
    views: 145,
    likes: 28,
    categorySpecificData: {
      studyName: '알고리즘 스터디',
      weekNumber: 4,
      learningPoints: ['DFS 구현 방법', 'BFS 구현 방법', '실전 문제 풀이']
    }
  },
  {
    id: '5',
    title: 'TypeScript 제네릭 완벽 가이드',
    content: 'TypeScript의 제네릭은 재사용 가능한 타입 안전한 코드를 작성하는 데 필수적입니다...',
    summary: 'TypeScript 제네릭 심화 학습',
    author: members[1],
    category: 'tech',
    tags: ['TypeScript', '제네릭', '타입시스템'],
    thumbnailImage: '/images/posts/typescript-generic.jpg',
    createdAt: '2024-03-20',
    views: 312,
    likes: 89,
    categorySpecificData: {
      difficulty: 'advanced',
      prerequisites: ['TypeScript 기초', '타입 시스템 이해'],
      references: ['TypeScript 공식문서', 'Type Challenge']
    }
  }
]
