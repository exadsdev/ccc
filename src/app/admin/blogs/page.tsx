import { listBlogs } from '@/lib/jsonDb';
import Link from 'next/link';
import AdminBlogActions from './AdminBlogActions';

async function getBlogs() {
  try {
    const blogs = await listBlogs();
    return blogs.map((b) => ({
      id: b.id,
      title: b.title,
      slug: b.slug,
      published: b.published,
      category: b.category,
      tags: b.tags,
      viewCount: b.viewCount,
      createdAt: b.createdAt,
    }));
  } catch {
    return [];
  }
}

export default async function AdminBlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">จัดการบทความ</h1>
          <p className="text-gray-400 text-sm mt-1">รวมบทความทั้งหมด {blogs.length} บทความ</p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors text-sm"
        >
          + เพิ่มบทความ
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center py-20 bg-gray-900/50 border border-white/10 rounded-xl">
          <div className="text-4xl mb-3">📝</div>
          <p className="text-gray-400">ยังไม่มีบทความ</p>
          <Link href="/admin/blogs/new" className="text-blue-400 hover:underline text-sm mt-2 inline-block">
            เพิ่มบทความแรก
          </Link>
        </div>
      ) : (
        <div className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 text-left text-sm text-gray-400 font-medium">หัวข้อ</th>
                <th className="px-4 py-3 text-left text-sm text-gray-400 font-medium hidden md:table-cell">หมวดหมู่</th>
                <th className="px-4 py-3 text-center text-sm text-gray-400 font-medium">สถานะ</th>
                <th className="px-4 py-3 text-right text-sm text-gray-400 font-medium hidden sm:table-cell">Views</th>
                <th className="px-4 py-3 text-right text-sm text-gray-400 font-medium">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3">
                    <p className="text-white text-sm font-medium line-clamp-1">{blog.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">/{blog.slug}</p>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className="text-gray-400 text-xs">{blog.category || '—'}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        blog.published
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-amber-500/20 text-amber-400'
                      }`}
                    >
                      {blog.published ? 'เผยแพร่' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right hidden sm:table-cell">
                    <span className="text-gray-400 text-xs">{blog.viewCount.toLocaleString()}</span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        className="text-xs text-gray-400 hover:text-white transition-colors"
                      >
                        ดู
                      </Link>
                      <Link
                        href={`/admin/blogs/${blog.id}/edit`}
                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        แก้ไข
                      </Link>
                      <AdminBlogActions blogId={blog.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
