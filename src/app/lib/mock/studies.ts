import { Study } from '../../types'
import { members } from './members'

export const studies: Study[] = [
  {
    id: '1',
    title: 'React 심화 스터디',
    description: 'React의 고급 기능을 학습합니다.',
    category: 'frontend',
    semester: '2024-1',
    leader: members[1],
    participants: [members[1], members[3], members[4]],
    schedule: '매주 화요일 18:00',
    materials: ['React 공식문서', 'Kent C. Dodds 블로그'],
    githubRepo: 'https://github.com/commit/react-advanced',
    status: 'ongoing'
  },
  {
    id: '2',
    title: '알고리즘 스터디',
    description: '코딩 테스트 대비 알고리즘 문제 풀이',
    category: 'algorithm',
    semester: '2024-1',
    leader: members[2],
    participants: [members[2], members[0], members[4]],
    schedule: '매주 목요일 19:00',
    materials: ['백준 온라인 저지', 'LeetCode'],
    githubRepo: 'https://github.com/commit/algorithm-study',
    status: 'ongoing'
  },
  {
    id: '3',
    title: 'Spring Boot 기초 스터디',
    description: 'Spring Boot를 활용한 웹 서버 개발 기초',
    category: 'backend',
    semester: '2024-1',
    leader: members[1],
    participants: [members[1], members[2], members[3]],
    schedule: '매주 수요일 17:00',
    materials: ['Spring 공식문서', '인프런 강의'],
    githubRepo: 'https://github.com/commit/spring-basic',
    status: 'upcoming'
  }
]
