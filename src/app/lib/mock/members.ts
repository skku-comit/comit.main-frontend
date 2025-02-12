import { Member } from '@/app/types';

export const executives: Member[] = [
  {
    id: '1',
    name: '김성현',
    role: '회장',
    generation: 10,
    profileImage: '/images/lib/profile-1.jpg',
    description: '10기 회장을 맡고 있습니다. 웹 개발과 AI에 관심이 많습니다.',
    skills: ['React', 'TypeScript', 'Node.js', 'Python'],
    github: 'https://github.com/president',
    blog: 'https://velog.io/@president',
    isActive: true,
  },
  {
    id: '2',
    name: '이지원',
    role: '부회장',
    generation: 10,
    profileImage: '/images/lib/profile-2.jpg',
    description: '10기 부회장입니다. 백엔드 개발을 주로 담당하고 있습니다.',
    skills: ['Java', 'Spring', 'MySQL', 'AWS'],
    github: 'https://github.com/vice-president',
    blog: 'https://velog.io/@vice-president',
    isActive: true,
  },
  {
    id: '3',
    name: '박민수',
    role: '학술부장',
    generation: 10,
    profileImage: '/images/members/academic-head.jpg',
    description: '스터디와 세미나를 기획하고 운영합니다.',
    skills: ['React', 'Vue.js', 'JavaScript'],
    github: 'https://github.com/academic',
    linkedIn: 'https://linkedin.com/in/academic',
    isActive: true,
  },
  {
    id: '4',
    name: '최유진',
    role: '홍보부장',
    generation: 10,
    profileImage: '/images/members/pr-head.jpg',
    description: '동아리 SNS 관리와 컨텐츠 제작을 담당합니다.',
    skills: ['Figma', 'Adobe XD', 'React'],
    blog: 'https://blog.naver.com/pr-head',
    isActive: true,
  }
];

export const members: Member[] = [
  ...executives,
  {
    id: '5',
    name: '정다은',
    role: '부원',
    generation: 10,
    profileImage: '/images/members/member1.jpg',
    description: '프론트엔드 개발에 관심이 많은 10기 부원입니다.',
    skills: ['React', 'JavaScript'],
    github: 'https://github.com/member1',
    isActive: true,
  },
  // ... 더 많은 일반 부원 데이터
]; 