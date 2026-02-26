import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { listVideos } from '@/lib/jsonDb';
import SchemaMarkup from '@/components/SchemaMarkup';
import CTASection from '@/components/CTASection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'วิดีโอสอนใช้บัญชีโฆษณา Google Agency | AdsAccount Pro',
  description:
    'รวมวิดีโอสอนการใช้งานบัญชีโฆษณา Google Agency, Meta Ads, DV360 สำหรับมือใหม่และมืออาชีพ ครอบคลุมทั้งธุรกิจทั่วไปและสายเทา',
  keywords:
    'วิดีโอสอน Google Ads, สอน Meta Ads, วิธีใช้บัญชีโฆษณา Agency, สอนโฆษณาสายเทา, DV360 tutorial',
  alternates: {
    canonical: `${SITE_CONFIG.url}/videos`,
  },
  openGraph: {
    title: 'วิดีโอสอนใช้บัญชีโฆษณา Google Agency',
    description: 'รวมวิดีโอสอนการใช้งานบัญชีโฆษณา Agency ทุกแพลตฟอร์ม',
    url: `${SITE_CONFIG.url}/videos`,
    type: 'website',
  },
};

async function getVideos() {
  try {
    const videos = await listVideos({ publishedOnly: true });

    // Keep same shape as before
    return videos.map((v) => ({
      id: v.id,
      title: v.title,
      slug: v.slug,
      embedUrl: v.embedUrl,
      description: v.description,
      thumbnail: v.thumbnail,
      tags: v.tags,
      category: v.category,
      createdAt: v.createdAt,
    }));
  } catch {
    return [];
  }
}

const sampleVideos = [
  {
    id: '1',
    title: 'วิธีเริ่มต้นใช้งานบัญชีโฆษณา Google Agency สำหรับมือใหม่',
    slug: 'วิธีเริ่มต้น-google-agency-มือใหม่',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'วิดีโอนี้จะแนะนำวิธีการเริ่มต้นใช้งานบัญชีโฆษณา Google Agency ตั้งแต่การเข้าสู่ระบบ การตั้งค่า Campaign แรก ไปจนถึงการเติมเงินและเริ่มลงโฆษณา เหมาะสำหรับผู้เริ่มต้นที่ไม่มีประสบการณ์มาก่อน',
    thumbnail: null,
    tags: ['Google Ads', 'มือใหม่', 'Agency', 'เริ่มต้น'],
    category: 'Google Ads',
    createdAt: new Date('2025-01-15'),
    viewCount: 3421,
  },
  {
    id: '2',
    title: 'เทคนิคลงโฆษณาสายเทาบน Google ให้รอด ไม่โดน Suspend',
    slug: 'เทคนิค-สายเทา-google-ไม่โดน-suspend',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'เทคนิคและกลยุทธ์ที่นักการตลาดสายเทาใช้ในการลงโฆษณาบน Google โดยไม่ถูก Suspend รวมถึงวิธีสร้าง Landing Page ที่ผ่านนโยบาย Google และการตั้ง Cloaking',
    thumbnail: null,
    tags: ['สายเทา', 'เทคนิค', 'Google Ads', 'Suspend'],
    category: 'สายเทา',
    createdAt: new Date('2025-01-08'),
    viewCount: 5678,
  },
  {
    id: '3',
    title: 'สอนใช้ Meta Ads Agency Account ลงโฆษณา Facebook Instagram',
    slug: 'สอนใช้-meta-ads-agency-account',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'คู่มือสมบูรณ์สำหรับการใช้งาน Meta Ads Agency Account บน Facebook และ Instagram ครอบคลุมการตั้งค่า Pixel, Custom Audience, Lookalike Audience และการเพิ่มประสิทธิภาพ Campaign',
    thumbnail: null,
    tags: ['Meta Ads', 'Facebook', 'Instagram', 'Agency'],
    category: 'Meta Ads',
    createdAt: new Date('2024-12-30'),
    viewCount: 2134,
  },
  {
    id: '4',
    title: 'DV360 คืออะไร? ทำความรู้จัก Display & Video 360',
    slug: 'dv360-คืออะไร-tutorial',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'วิดีโออธิบายว่า DV360 (Display & Video 360) คืออะไร แตกต่างจาก Google Ads อย่างไร เหมาะกับธุรกิจประเภทไหน และวิธีใช้งานเบื้องต้นสำหรับองค์กรขนาดกลางและใหญ่',
    thumbnail: null,
    tags: ['DV360', 'Programmatic', 'Google', 'Enterprise'],
    category: 'DV360',
    createdAt: new Date('2024-12-22'),
    viewCount: 1456,
  },
  {
    id: '5',
    title: 'Notification Ads สร้างรายได้อย่างไร? คู่มือเบื้องต้น',
    slug: 'notification-ads-สร้างรายได้',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'วิดีโอสอนวิธีทำเงินจาก Notification Ads หรือโฆษณา Push Notification ตั้งแต่การสร้างบัญชี การตั้งค่า Campaign ไปจนถึงการ Optimize เพื่อให้ได้ ROI สูงสุด',
    thumbnail: null,
    tags: ['Notification Ads', 'Push Ads', 'สายเทา', 'ROI'],
    category: 'Notification Ads',
    createdAt: new Date('2024-12-15'),
    viewCount: 1098,
  },
  {
    id: '6',
    title: 'วิธีคำนวณงบโฆษณาและค่าธรรมเนียมให้คุ้มค่าที่สุด',
    slug: 'คำนวณงบโฆษณา-ค่าธรรมเนียม',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'วิดีโอสอนวิธีคำนวณงบโฆษณา ค่าธรรมเนียมการเติมเงิน ภาษี และค่าบัญชีให้ถูกต้อง เพื่อให้คุณวางแผนงบประมาณได้อย่างแม่นยำและคุ้มค่าที่สุด',
    thumbnail: null,
    tags: ['งบโฆษณา', 'ค่าธรรมเนียม', 'การเงิน', 'วางแผน'],
    category: 'การเงิน',
    createdAt: new Date('2024-12-10'),
    viewCount: 876,
  },
];

// Extract YouTube video ID for thumbnail
function getYouTubeThumbnail(embedUrl: string): string {
  const match = embedUrl.match(/embed\/([^?]+)/);
  if (match) {
    return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
  }
  return '/images/og-image.jpg';
}

export default async function VideosPage() {
  const dbVideos = await getVideos();
  const videos = dbVideos.length > 0 ? dbVideos : sampleVideos;

  const categories = [...new Set(videos.map((v) => v.category).filter(Boolean))];

  return (
    <>
      {/* Video Schema for each video */}
      {videos.map((video) => (
        <SchemaMarkup
          key={video.id}
          type="video"
          data={{
            title: video.title,
            description: video.description || undefined,
            videoUrl: video.embedUrl,
            thumbnailUrl: video.thumbnail || getYouTubeThumbnail(video.embedUrl),
            datePublished: new Date(video.createdAt).toISOString(),
          }}
        />
      ))}

      {/* Hero */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">หน้าหลัก</Link>
            <span>/</span>
            <span className="text-gray-300">วิดีโอ</span>
          </nav>

          <div className="max-w-2xl mb-10">
            <h1 className="text-4xl font-display font-bold text-white mb-4">
              วิดีโอสอนการใช้งาน
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                บัญชีโฆษณา Agency
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              วิดีโอสอนและแนะนำการใช้งานบัญชีโฆษณาทุกแพลตฟอร์ม
              ทั้ง Google Ads, Meta Ads, DV360 และ Notification Ads
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <Link
              href="/videos"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
            >
              ทั้งหมด
            </Link>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-white/5 text-gray-400 rounded-lg text-sm border border-white/10"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => {
              const thumbnail = video.thumbnail || getYouTubeThumbnail(video.embedUrl);
              const formattedDate = new Date(video.createdAt).toLocaleDateString('th-TH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });

              return (
                <article
                  key={video.id}
                  className="group bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gray-800 overflow-hidden">
                    <div className="w-full h-full relative">
                      <img
                        src={thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                      <div className="w-14 h-14 bg-red-600/90 hover:bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-600/30 transition-all group-hover:scale-110">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Category badge */}
                    {video.category && (
                      <div className="absolute top-3 left-3">
                        <span className="text-xs bg-blue-600/90 text-white rounded-md px-2 py-1">
                          {video.category}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {video.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-white font-semibold leading-snug mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                      {video.title}
                    </h2>

                    {/* Description */}
                    {video.description && (
                      <p className="text-gray-400 text-sm line-clamp-2 mb-3 leading-relaxed">
                        {video.description}
                      </p>
                    )}

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <time dateTime={new Date(video.createdAt).toISOString()}>
                        {formattedDate}
                      </time>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {video.viewCount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
