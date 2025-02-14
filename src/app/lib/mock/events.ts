import { Event } from '../../types'
import { members } from './members'

export const events: Event[] = [
  {
    id: '1',
    title: '2024-1 개강총회',
    description: '2024년 1학기 개강총회입니다.',
    startDate: '2024-03-02T14:00:00',
    endDate: '2024-03-02T16:00:00',
    type: 'general',
    location: '학생회관 500호',
    organizer: members[0],
    isPublic: true
  },
  {
    id: '2',
    title: 'React 스터디 - Custom Hooks',
    description: 'React Custom Hooks에 대해 학습하는 시간입니다.',
    startDate: '2024-03-15T18:00:00',
    endDate: '2024-03-15T20:00:00',
    type: 'study',
    location: '동아리방',
    organizer: members[2],
    participants: [members[2], members[4], members[1]],
    isPublic: true
  },
  {
    id: '3',
    title: '2024 상반기 해커톤',
    description: '24시간 동안 진행되는 미니 프로젝트 해커톤',
    startDate: '2024-05-20T09:00:00',
    endDate: '2024-05-21T09:00:00',
    type: 'project',
    location: '성균관대학교 새천년홀',
    organizer: members[1],
    participants: [...members],
    isPublic: true
  },
  {
    id: '4',
    title: '디자인 학회 연합 세미나',
    description: 'UI/UX 디자인 트렌드 세미나',
    startDate: '2024-04-10T15:00:00',
    endDate: '2024-04-10T17:00:00',
    type: 'seminar',
    location: '온라인',
    organizer: members[3],
    isPublic: true
  }
]
