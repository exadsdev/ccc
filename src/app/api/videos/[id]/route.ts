import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { deleteVideo, getVideoById, updateVideo } from '@/lib/jsonDb';

export const runtime = 'nodejs';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const video = await getVideoById(params.id);
    if (!video) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(video);
  } catch {
    return NextResponse.json({ error: 'Storage error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const updated = await updateVideo(params.id, {
      title: body.title,
      embedUrl: body.embedUrl,
      description: body.description,
      transcript: body.transcript,
      thumbnail: body.thumbnail,
      tags: body.tags,
      category: body.category,
      seoTitle: body.seoTitle,
      seoDesc: body.seoDesc,
      published: body.published,
    });

    if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update video' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const res = await deleteVideo(params.id);
    return NextResponse.json(res);
  } catch {
    return NextResponse.json({ error: 'Failed to delete video' }, { status: 500 });
  }
}
