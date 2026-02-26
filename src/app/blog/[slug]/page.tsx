import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogBySlug, updateBlog } from '@/lib/jsonDb';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';

interface PageProps {
  params: { slug: string };
}

async function getPost(slug: string) {
  try {
    const post = await getBlogBySlug(slug);
    if (!post || !post.published) return null;

    // Increment view count (best-effort)
    await updateBlog(post.id, { viewCount: (post.viewCount || 0) + 1 });

    return post;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return { title: 'ไม่พบบทความ' };
  }

  const tags = Array.isArray(post.tags) ? (post.tags as string[]) : [];

  return {
    title: post.seoTitle || post.title,
    description: post.seoDesc || post.excerpt || undefined,
    keywords: tags.join(', '),
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDesc || post.excerpt || undefined,
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      images: post.featuredImage
        ? [{ url: post.featuredImage, width: 1200, height: 630, alt: post.title }]
        : [{ url: `${SITE_CONFIG.url}/images/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDesc || post.excerpt || undefined,
      images: post.featuredImage ? [post.featuredImage] : [`${SITE_CONFIG.url}/images/og-image.jpg`],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const tags = Array.isArray(post.tags) ? (post.tags as string[]) : [];

  return (
    <>
      <SchemaMarkup
        type="article"
        data={{
          title: post.title,
          description: post.excerpt || undefined,
          image: post.featuredImage || undefined,
          datePublished: post.createdAt.toISOString(),
          dateModified: post.updatedAt.toISOString(),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-300 transition-colors">หน้าหลัก</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gray-300 transition-colors">บทความ</Link>
          <span>/</span>
          <span className="text-gray-300 truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Category & Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.category && (
            <Link
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              className="text-sm bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full px-3 py-1 hover:bg-blue-500/30 transition-colors"
            >
              {post.category}
            </Link>
          )}
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="text-sm bg-white/5 text-gray-400 rounded-full px-3 py-1 hover:bg-white/10 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-white/10">
          <time dateTime={post.createdAt.toISOString()}>{formattedDate}</time>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {post.viewCount.toLocaleString()} ครั้ง
          </span>
          <span>โดย {SITE_CONFIG.name}</span>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags Footer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="text-sm bg-white/5 text-gray-400 rounded-full px-3 py-1.5 hover:bg-white/10 transition-colors border border-white/10"
              >
                #{tag}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              กลับไปหน้าบทความ
            </Link>

            <Link
              href="/services"
              className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
            >
              ดูบริการของเรา →
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
