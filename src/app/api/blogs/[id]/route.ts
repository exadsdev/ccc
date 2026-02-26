import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { deleteBlog, getBlogById, updateBlog } from '@/lib/jsonDb';

export const runtime = 'nodejs';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const blog = await getBlogById(params.id);
    if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(blog);
  } catch {
    return NextResponse.json({ error: 'Storage error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const updated = await updateBlog(params.id, {
      title: body.title,
      content: body.content,
      excerpt: body.excerpt,
      featuredImage: body.featuredImage,
      tags: body.tags,
      category: body.category,
      seoTitle: body.seoTitle,
      seoDesc: body.seoDesc,
      published: body.published,
    });

    if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const res = await deleteBlog(params.id);
    return NextResponse.json(res);
  } catch {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
