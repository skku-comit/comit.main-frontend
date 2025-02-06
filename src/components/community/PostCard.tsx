import Image from 'next/image';
import { BlogPost } from '@/app/types';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* 썸네일 이미지 */}
      {post.thumbnailImage && (
        <div className="relative h-48">
          <Image
            src={post.thumbnailImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* 콘텐츠 */}
      <div className="p-6">
        {/* 카테고리 뱃지 */}
        <div className="mb-2">
          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full
            ${getCategoryColor(post.category)}`}>
            {getCategoryLabel(post.category)}
          </span>
        </div>

        {/* 제목 */}
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          {post.title}
        </h3>

        {/* 요약 */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.summary}
        </p>

        {/* 메타 정보 */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Image
              src={post.author.profileImage}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>{post.author.name}</span>
          </div>
          <span>{formatDate(post.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}

// 카테고리별 색상 및 라벨
function getCategoryColor(category: string) {
  switch (category) {
    case 'recall':
      return 'bg-blue-100 text-blue-800';
    case 'study':
      return 'bg-green-100 text-green-800';
    case 'tech':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function getCategoryLabel(category: string) {
  switch (category) {
    case 'recall':
      return '동아리 회고';
    case 'study':
      return '스터디 기록';
    case 'tech':
      return '기술 아티클';
    default:
      return category;
  }
} 