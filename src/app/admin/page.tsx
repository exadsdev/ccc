import { getStats as getJsonStats, listBlogs, listVideos } from '@/lib/jsonDb';
import Link from 'next/link';

async function getStats() {
  try {
    return await getJsonStats();
  } catch {
    return { blogCount: 0, videoCount: 0, publishedBlogs: 0, publishedVideos: 0 };
  }
}

async function getRecentBlogs() {
  try {
    const blogs = await listBlogs();
    return blogs.slice(0, 5).map((b) => ({
      id: b.id,
      title: b.title,
      published: b.published,
      createdAt: b.createdAt,
      viewCount: b.viewCount,
    }));
  } catch {
    return [];
  }
}

export default async function AdminDashboard() {
  const stats = await getStats();
  const recentBlogs = await getRecentBlogs();

  const statCards = [
    { label: 'บทความทั้งหมด', value: stats.blogCount, sub: `${stats.publishedBlogs} เผยแพร่แล้ว`, icon: '📝', color: 'blue' },
    { label: 'วิดีโอทั้งหมด', value: stats.videoCount, sub: `${stats.publishedVideos} เผยแพร่แล้ว`, icon: '🎬', color: 'indigo' },
    { label: 'บทความรอเผยแพร่', value: stats.blogCount - stats.publishedBlogs, sub: 'Draft', icon: '✏️', color: 'amber' },
    { label: 'วิดีโอรอเผยแพร่', value: stats.videoCount - stats.publishedVideos, sub: 'Draft', icon: '🎞️', color: 'violet' },
  ];

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">ภาพรวมของระบบจัดการเนื้อหา</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => (
          <div key={card.label} className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
            <div className="text-2xl mb-2">{card.icon}</div>
            <div className="text-3xl font-display font-bold text-white">{card.value}</div>
            <div className="text-white text-sm font-medium">{card.label}</div>
            <div className="text-gray-500 text-xs">{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link
          href="/admin/blogs/new"
          className="flex items-center gap-4 bg-blue-600/10 border border-blue-600/30 hover:border-blue-600/50 rounded-xl p-5 transition-colors group"
        >
          <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center text-2xl">
            📝
          </div>
          <div>
            <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">เพิ่มบทความใหม่</p>
            <p className="text-gray-400 text-sm">สร้างบทความพร้อม SEO</p>
          </div>
        </Link>

        <Link
          href="/admin/videos/new"
          className="flex items-center gap-4 bg-indigo-600/10 border border-indigo-600/30 hover:border-indigo-600/50 rounded-xl p-5 transition-colors group"
        >
          <div className="w-12 h-12 bg-indigo-600/20 text-indigo-400 rounded-xl flex items-center justify-center text-2xl">
            🎬
          </div>
          <div>
            <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors">เพิ่มวิดีโอใหม่</p>
            <p className="text-gray-400 text-sm">เพิ่มลิงก์วิดีโอและข้อมูล SEO</p>
          </div>
        </Link>
      </div>

      {/* Recent Blogs */}
      <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold">บทความล่าสุด</h2>
          <Link href="/admin/blogs" className="text-blue-400 text-sm hover:underline">
            ดูทั้งหมด
          </Link>
        </div>

        {recentBlogs.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-8">ยังไม่มีบทความ</p>
        ) : (
          <div className="space-y-3">
            {recentBlogs.map((blog) => (
              <div key={blog.id} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                <div className="flex-1 min-w-0 mr-4">
                  <p className="text-white text-sm font-medium truncate">{blog.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {new Date(blog.createdAt).toLocaleDateString('th-TH')} · {blog.viewCount} views
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      blog.published
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-amber-500/20 text-amber-400'
                    }`}
                  >
                    {blog.published ? 'เผยแพร่' : 'Draft'}
                  </span>
                  <Link
                    href={`/admin/blogs/${blog.id}/edit`}
                    className="text-xs text-blue-400 hover:underline"
                  >
                    แก้ไข
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
