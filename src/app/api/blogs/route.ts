import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import slugify from 'slugify';
import { createBlog, getBlogBySlug, listBlogs } from '@/lib/jsonDb';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const published = searchParams.get('published');

  try {
    const blogs = await listBlogs({ publishedOnly: published === 'true' });
    return NextResponse.json(blogs);
  } catch {
    return NextResponse.json({ error: 'Storage error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const { title, content, excerpt, featuredImage, tags, category, seoTitle, seoDesc, published } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    let slug = slugify(title, { lower: true, strict: true, locale: 'th' }) || `blog-${Date.now()}`;
    const existing = await getBlogBySlug(slug);
    if (existing) slug = `${slug}-${Date.now()}`;

    const blog = await createBlog({
      title,
      slug,
      content,
      excerpt: excerpt || null,
      featuredImage: featuredImage || null,
      tags: Array.isArray(tags) ? tags : [],
      category: category || null,
      seoTitle: seoTitle || null,
      seoDesc: seoDesc || null,
      published: !!published,
      authorId: (session.user as any).id || null,
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error('Blog POST error:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
