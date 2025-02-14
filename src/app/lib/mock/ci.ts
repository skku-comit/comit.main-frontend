import { ClubIdentity } from '@/app/types'

export const clubIdentityData: ClubIdentity[] = [
  {
    id: '1',
    type: 'logo',
    title: 'COMMIT 메인 로고',
    description: '성균관대학교 코딩 동아리 COMMIT의 공식 로고입니다.',
    imageUrl: '/images/ci/main-logo.png',
    downloadUrl: '/downloads/commit-logo.zip'
  },
  {
    id: '2',
    type: 'mascot',
    title: 'COMMIT 마스코트',
    description: '코밋이의 귀여운 모습을 담은 마스코트입니다.',
    imageUrl: '/images/ci/mascot.png',
    downloadUrl: '/downloads/commit-mascot.zip'
  },
  {
    id: '3',
    type: 'template',
    title: '발표자료 템플릿',
    description: '세미나와 스터디에서 사용할 수 있는 PPT 템플릿입니다.',
    imageUrl: '/images/ci/template.png',
    downloadUrl: '/downloads/commit-template.zip'
  }
]
