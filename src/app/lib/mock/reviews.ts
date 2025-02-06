import { ClubReview } from '../../types';
import { members } from './members';

export const reviews: ClubReview[] = [
  {
    id: '1',
    content: '선후배와 함께 성장할 수 있는 최고의 동아리입니다!',
    author: members[2],
    rating: 5,
    generation: 9,
    createdAt: '2024-03-15',
    isAnonymous: false,
  },
  {
    id: '2',
    content: '실무에서 사용하는 기술들을 미리 경험해볼 수 있어서 좋았습니다.',
    author: members[3],
    rating: 5,
    generation: 8,
    createdAt: '2024-03-14',
    isAnonymous: false,
  },
  {
    id: '3',
    content: '체계적인 스터디 시스템이 정말 마음에 들었습니다.',
    author: members[4],
    rating: 4,
    generation: 9,
    createdAt: '2024-03-10',
    isAnonymous: true,
  }
]; 