import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { listBlogs, listVideos } from '@/lib/jsonDb';

export const runtime = 'nodejs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE_CONFIG.siteUrl.replace(/\/+$/, '');

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/service`, lastModified: new Date() },
    { url: `${base}/portfolio`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/videos`, lastModified: new Date() },
    { url: `${base}/contact-us`, lastModified: new Date() },
  ];

  const [blogs, videos] = await Promise.all([listBlogs({ publishedOnly: true }), listVideos({ publishedOnly: true })]);

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: new Date(b.updatedAt || b.createdAt),
  }));

  const videoRoutes: MetadataRoute.Sitemap = videos.map((v) => ({
    url: `${base}/videos/${v.slug}`,
    lastModified: new Date(v.updatedAt || v.createdAt),
  }));

  return [...staticRoutes, ...blogRoutes, ...videoRoutes];
}
