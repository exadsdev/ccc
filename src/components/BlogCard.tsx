import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    featuredImage?: string | null;
    tags: string[];
    category?: string | null;
    createdAt: Date;
    viewCount: number;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="group bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
      {/* Featured Image */}
      <Link href={`/blog/${post.slug}`} className="block aspect-video overflow-hidden bg-gray-800">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={640}
            height={360}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-indigo-900/40">
            <span className="text-4xl">📰</span>
          </div>
        )}
      </Link>

      <div className="p-5">
        {/* Category & Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.category && (
            <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full px-2.5 py-0.5">
              {post.category}
            </span>
          )}
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs bg-white/5 text-gray-400 rounded-full px-2.5 py-0.5">
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold leading-snug mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
            {post.excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <time dateTime={new Date(post.createdAt).toISOString()}>{formattedDate}</time>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {post.viewCount.toLocaleString()}
          </span>
        </div>
      </div>
    </article>
  );
}
