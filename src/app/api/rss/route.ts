import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/lib/constants';
import { listBlogs } from '@/lib/jsonDb';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const posts = await listBlogs({ publishedOnly: true });

    const rssItems = posts
      .map((post) => {
        const url = `${SITE_CONFIG.siteUrl}/blog/${post.slug}`;
        const pubDate = new Date(post.createdAt).toUTCString();
        const description = (post.excerpt || '').replace(/<[^>]*>?/gm, '');
        return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${pubDate}</pubDate>
          <description><![CDATA[${description}]]></description>
        </item>`;
      })
      .join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title><![CDATA[${SITE_CONFIG.siteName}]]></title>
        <link>${SITE_CONFIG.siteUrl}</link>
        <description><![CDATA[${SITE_CONFIG.siteDescription}]]></description>
        <language>th</language>
        ${rssItems}
      </channel>
    </rss>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=600',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Failed to generate RSS' }, { status: 500 });
  }
}
