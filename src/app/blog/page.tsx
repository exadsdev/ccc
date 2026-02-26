import type { Metadata } from 'next';
import Link from 'next/link';
import { listBlogs } from '@/lib/jsonDb';
import BlogCard from '@/components/BlogCard';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'บทความและความรู้ด้านโฆษณา Google Agency | AdsAccount Pro',
  description:
    'รวบรวมบทความ เทคนิค และความรู้เกี่ยวกับการใช้บัญชีโฆษณา Google Agency, Meta Ads, DV360 สำหรับธุรกิจทั่วไปและสายเทา อัปเดตทุกสัปดาห์',
  keywords:
    'บทความโฆษณา Google, เทคนิค Google Ads, บัญชีโฆษณาสายเทา, Meta Ads วิธีใช้, DV360 คืออะไร',
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
    types: {
      'application/rss+xml': `${SITE_CONFIG.url}/api/rss`,
    },
  },
  openGraph: {
    title: 'บทความและความรู้ด้านโฆษณา | AdsAccount Pro',
    description: 'รวมบทความเทคนิคและความรู้เกี่ยวกับบัญชีโฆษณา Google Agency',
    url: `${SITE_CONFIG.url}/blog`,
    type: 'website',
  },
};

const POSTS_PER_PAGE = 9;

interface PageProps {
  searchParams: { page?: string; category?: string; tag?: string };
}

async function getBlogs(page: number, category?: string, tag?: string) {
  const skip = (page - 1) * POSTS_PER_PAGE;

  try {
    let posts = await listBlogs({ publishedOnly: true });

    if (category) posts = posts.filter((p) => p.category === category);
    if (tag) posts = posts.filter((p) => Array.isArray(p.tags) && p.tags.includes(tag));

    const total = posts.length;

    const paged = posts.slice(skip, skip + POSTS_PER_PAGE).map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      featuredImage: p.featuredImage,
      tags: p.tags,
      category: p.category,
      createdAt: p.createdAt,
    }));

    return { posts: paged, total };
  } catch {
    return { posts: [], total: 0 };
  }
}

const samplePosts = [
  {
    id: '1',
    title: 'บัญชีโฆษณา Google Agency คืออะไร? และทำไมต้องใช้?',
    slug: 'google-agency-account-คืออะไร',
    excerpt:
      'อธิบายความหมายและข้อดีของบัญชีโฆษณา Google Agency เมื่อเทียบกับบัญชีปกติ พร้อมกรณีศึกษาที่นักการตลาดควรรู้',
    featuredImage: null,
    tags: ['Google Ads', 'Agency Account', 'เริ่มต้น'],
    category: 'Google Ads',
    createdAt: new Date('2025-01-15'),
    viewCount: 1243,
  },
  {
    id: '2',
    title: 'วิธีลงโฆษณาสายเทาบน Google โดยไม่ถูก Suspend',
    slug: 'ลงโฆษณาสายเทา-google-ไม่ถูก-suspend',
    excerpt:
      'เทคนิคและกลยุทธ์การลงโฆษณาสินค้าสายเทาบน Google อย่างปลอดภัย ลดความเสี่ยงการถูก Suspend และเพิ่ม ROI ให้สูงสุด',
    featuredImage: null,
    tags: ['สายเทา', 'Google Ads', 'เทคนิค'],
    category: 'สายเทา',
    createdAt: new Date('2025-01-10'),
    viewCount: 2891,
  },
  {
    id: '3',
    title: 'เปรียบเทียบ Google Ads vs Meta Ads: อันไหนดีกว่าสำหรับสายเทา?',
    slug: 'เปรียบเทียบ-google-ads-vs-meta-ads-สายเทา',
    excerpt:
      'วิเคราะห์เชิงลึกว่าระหว่าง Google Ads และ Meta Ads อันไหนเหมาะสมกว่าสำหรับสินค้าสายเทา ดูข้อดีข้อเสียแต่ละแพลตฟอร์ม',
    featuredImage: null,
    tags: ['เปรียบเทียบ', 'Google Ads', 'Meta Ads'],
    category: 'การเปรียบเทียบ',
    createdAt: new Date('2025-01-05'),
    viewCount: 1567,
  },
  {
    id: '4',
    title: 'ค่าธรรมเนียมการเติมเงินโฆษณา: ทุกอย่างที่คุณต้องรู้',
    slug: 'ค่าธรรมเนียม-เติมเงิน-โฆษณา',
    excerpt:
      'อธิบายโครงสร้างค่าธรรมเนียมการเติมเงินบัญชีโฆษณา Google Agency แบบละเอียด CNY01-CNY05 และวิธีคำนวณต้นทุนที่แท้จริง',
    featuredImage: null,
    tags: ['ราคา', 'ค่าธรรมเนียม', 'เติมเงิน'],
    category: 'ราคาและค่าใช้จ่าย',
    createdAt: new Date('2024-12-28'),
    viewCount: 987,
  },
  {
    id: '5',
    title: 'DV360 คืออะไร? ทำไมบริษัทใหญ่ถึงเลือกใช้?',
    slug: 'dv360-คืออะไร-display-video-360',
    excerpt:
      'ทำความรู้จัก Display & Video 360 (DV360) แพลตฟอร์มโฆษณาระดับองค์กรจาก Google ที่เปิดโอกาสให้ซื้อสื่อแบบ Programmatic',
    featuredImage: null,
    tags: ['DV360', 'Programmatic', 'Google'],
    category: 'DV360',
    createdAt: new Date('2024-12-20'),
    viewCount: 743,
  },
  {
    id: '6',
    title: 'Notification Ads คืออะไร และเหมาะกับธุรกิจประเภทไหน?',
    slug: 'notification-ads-คืออะไร',
    excerpt:
      'คู่มือเริ่มต้นสำหรับ Notification Ads หรือโฆษณา Push Notification ที่กำลังได้รับความนิยมในกลุ่มนักการตลาดสายเทา',
    featuredImage: null,
    tags: ['Notification Ads', 'Push Ads', 'สายเทา'],
    category: 'Notification Ads',
    createdAt: new Date('2024-12-15'),
    viewCount: 612,
  },
];

export default async function BlogPage({ searchParams }: PageProps) {
  const page = parseInt(searchParams.page || '1');
  const { posts: dbPosts, total, totalPages } = await getBlogs(
    page,
    searchParams.category,
    searchParams.tag
  );

  const displayPosts = dbPosts.length > 0 ? dbPosts : samplePosts;

  const categories = [
    'ทั้งหมด',
    'Google Ads',
    'Meta Ads',
    'DV360',
    'Notification Ads',
    'สายเทา',
    'ราคาและค่าใช้จ่าย',
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">หน้าหลัก</Link>
            <span>/</span>
            <span className="text-gray-300">บทความ</span>
          </nav>

          <div className="max-w-2xl mb-10">
            <h1 className="text-4xl font-display font-bold text-white mb-4">
              บทความและความรู้
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                ด้านโฆษณา Agency
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              รวมบทความเทคนิค กลยุทธ์ และความรู้เกี่ยวกับบัญชีโฆษณา Agency
              สำหรับธุรกิจทั่วไปและสายเทา
            </p>
          </div>

          {/* RSS Link */}
          <a
            href="/api/rss"
            className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors mb-8"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
            </svg>
            RSS Feed
          </a>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === 'ทั้งหมด' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  (cat === 'ทั้งหมด' && !searchParams.category) ||
                  searchParams.category === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Blog Grid */}
          {displayPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPosts.map((post) => (
                <BlogCard key={post.id} post={post as Parameters<typeof BlogCard>[0]['post']} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📝</div>
              <p className="text-gray-400 text-lg">ยังไม่มีบทความในหมวดหมู่นี้</p>
              <Link href="/blog" className="text-blue-400 hover:underline mt-2 inline-block">
                ดูบทความทั้งหมด
              </Link>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={`/blog?page=${p}${searchParams.category ? `&category=${searchParams.category}` : ''}`}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm transition-colors ${
                    p === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {p}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
