import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import slugify from 'slugify';
import { createVideo, getVideoBySlug, listVideos } from '@/lib/jsonDb';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const published = searchParams.get('published');

  try {
    const videos = await listVideos({ publishedOnly: published === 'true' });
    return NextResponse.json(videos);
  } catch {
    return NextResponse.json({ error: 'Storage error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const { title, embedUrl, description, transcript, thumbnail, tags, category, seoTitle, seoDesc, published } = body;

    if (!title || !embedUrl) {
      return NextResponse.json({ error: 'Title and embedUrl are required' }, { status: 400 });
    }

    let slug = slugify(title, { lower: true, strict: true, locale: 'th' }) || `video-${Date.now()}`;
    const existing = await getVideoBySlug(slug);
    if (existing) slug = `${slug}-${Date.now()}`;

    const video = await createVideo({
      title,
      slug,
      embedUrl,
      description: description || null,
      transcript: transcript || null,
      thumbnail: thumbnail || null,
      tags: Array.isArray(tags) ? tags : [],
      category: category || null,
      seoTitle: seoTitle || null,
      seoDesc: seoDesc || null,
      published: !!published,
      authorId: (session.user as any).id || null,
    });

    return NextResponse.json(video, { status: 201 });
  } catch (error) {
    console.error('Video POST error:', error);
    return NextResponse.json({ error: 'Failed to create video' }, { status: 500 });
  }
}
