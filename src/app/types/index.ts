// 멤버 (현재 부원 / 졸업생)
export interface Member {
  id: string;
  name: string;
  role: string;
  generation: number;
  profileImage: string;
  description: string;
  skills?: string[];
  github?: string;
  blog?: string;
  linkedIn?: string;
  isActive: boolean;
}

// 게시글 기본 타입
interface BasePost {
  id: string;
  title: string;
  content: string;
  summary: string;
  author: Member;
  thumbnailImage?: string;
  createdAt: string;
  updatedAt?: string;
  views: number;
  likes: number;
  tags: string[];
}

// 동아리 리뷰 (2-3줄 짧은 리뷰)
export interface ClubReview {
  id: string;
  content: string;
  author: Member;
  rating: number;
  generation: number;
  createdAt: string;
  isAnonymous: boolean;
}

// 블로그 포스트 타입
export type PostCategory = 'recall' | 'study' | 'tech';

export interface BlogPost extends BasePost {
  category: PostCategory;
  // 카테고리별 추가 필드
  categorySpecificData?: {
    // 동아리 회고 (recall)
    semester?: string;
    activities?: string[];
    
    // 스터디 기록 (study)
    studyName?: string;
    weekNumber?: number;
    learningPoints?: string[];
    
    // 기술 아티클 (tech)
    difficulty?: 'basic' | 'intermediate' | 'advanced';
    prerequisites?: string[];
    references?: string[];
  };
}

// 동아리 일정
export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  type: 'study' | 'seminar' | 'social' | 'general' | 'project';
  location?: string;
  organizer: Member;
  participants?: Member[];
  isPublic: boolean;
}

// 스터디/세션
export interface Study {
  id: string;
  title: string;
  description: string;
  category: string;
  semester: string;
  leader: Member;
  participants: Member[];
  schedule: string;
  materials?: string[];
  githubRepo?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

// 프로젝트
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnailImage: string;
  startDate: string;
  endDate?: string;
  team: Member[];
  technologies: string[];
  githubRepo?: string;
  demoLink?: string;
  blogPost?: BlogPost;
}

// 도서
export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  category: string;
  description: string;
  status: 'available' | 'borrowed';
  currentBorrower?: Member;
  borrowHistory: {
    borrower: Member;
    borrowDate: string;
    returnDate?: string;
  }[];
}

// 회칙
export interface Rule {
  id: string;
  chapter: number;
  title: string;
  content: string;
  lastUpdated: string;
}

// 파트너/후원사
export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  partnershipType: 'sponsor' | 'academic' | 'technical';
  startDate: string;
  benefits: string[];
}

// 기존 타입들에 추가
export interface CI {
  id: string;
  type: 'logo' | 'mascot' | 'template';
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'application';
}

export interface MediaPost {
  id: string;
  title: string;
  content: string;
  images: string[];
  author: Member;
  createdAt: string;
  category: 'event' | 'activity' | 'announcement';
  tags: string[];
}

export interface TechStack {
  name: string;
  icon: string;
} 