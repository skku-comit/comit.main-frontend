import { MediaPost } from '../types/media'

export const mediaPosts: MediaPost[] = [
  {
    id: '1',
    title: '선배와의 만남',
    description: '지난 11월 28일, 학생회관 303호에서 선배와의 만남이 진행되었습니다! 성균관대학교를 졸업하시고 카카오 엔터...',
    date: '2024.12.02',
    type: 'event',
    thumbnail: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1000',
    views: 128,
    category: '세미나'
  },
  {
    id: '2',
    title: '24-2 제 2회 CoMit 해커톤: 코밋톤',
    description: '2024년 11월 1일-2일 성균관대학교 산학관에서 코밋톤이 개최되었습니다. 코밋톤이란, 1박 2일동안 제시된 주제에 맞...',
    date: '2024.11.06',
    type: 'activity',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000',
    views: 256,
    category: '행사'
  },
  {
    id: '3',
    title: 'CoMit 24-2 MT',
    description: '가평 깊은 펜션에서 24학년도 2학기 CoMit MT가 이루어졌습니다! 맛있는 고기를 먹으며 부원들과의 전쟁 ㅎㅎ...',
    date: '2024.09.25',
    type: 'event',
    thumbnail: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=1000',
    views: 312,
    category: '친목'
  }
]

export async function fetchMediaPosts(): Promise<MediaPost[]> {
  // 실제 API 호출을 시뮬레이션하기 위한 지연
  await new Promise(resolve => setTimeout(resolve, 1000))
  return mediaPosts
} 