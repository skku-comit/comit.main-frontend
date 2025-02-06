import { posts } from '@/app/lib/mock/posts';
import PostCard from '@/components/community/PostCard';
import PostFilter from '@/components/community/PostFilter';
import { BlogPost } from '@/app/types';

export default function CommunityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 필터 섹션 */}
      <div className="mb-8">
        <PostFilter />
      </div>

      {/* 게시물 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: BlogPost) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
} 