import { StudyRecord } from '../types/study'

export const studyRecords: StudyRecord[] = [
  {
    id: '1',
    title: 'React 심화 스터디',
    description: 'React의 고급 기능과 최적화 기법을 학습하는 스터디입니다.',
    startDate: '2024-03-01',
    endDate: '2024-06-30',
    participants: 8,
    category: 'study',
    tags: ['React', 'JavaScript', 'Web'],
    status: 'ongoing',
    leader: {
      name: '김민수',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250'
    }
  },
  {
    id: '2',
    title: '알고리즘 마스터 클래스',
    description: '코딩테스트 대비 알고리즘 문제 풀이 스터디',
    startDate: '2024-03-15',
    endDate: '2024-07-15',
    participants: 6,
    category: 'study',
    tags: ['Algorithm', 'Python', 'PS'],
    status: 'ongoing',
    leader: {
      name: '이지원',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250'
    }
  },
  // ... 더 많은 목업 데이터 추가
]

export async function fetchStudyRecords(): Promise<StudyRecord[]> {
  // 실제 API 호출을 시뮬레이션하기 위한 지연
  await new Promise(resolve => setTimeout(resolve, 1000))
  return studyRecords
} 