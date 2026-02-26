import { listVideos } from '@/lib/jsonDb';
import Link from 'next/link';

async function getVideos() {
  try {
    const videos = await listVideos();
    return videos.map((v) => ({
      id: v.id,
      title: v.title,
      slug: v.slug,
      published: v.published,
      category: v.category,
      viewCount: v.viewCount,
      createdAt: v.createdAt,
    }));
  } catch {
    return [];
  }
}

export default async function AdminVideosPage() {
  const videos = await getVideos();

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">จัดการวิดีโอ</h1>
          <p className="text-gray-400 text-sm mt-1">รวมวิดีโอทั้งหมด {videos.length} รายการ</p>
        </div>
        <Link href="/admin/videos/new" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors text-sm">
          + เพิ่มวิดีโอ
        </Link>
      </div>

      {videos.length === 0 ? (
        <div className="text-center py-20 bg-gray-900/50 border border-white/10 rounded-xl">
          <div className="text-4xl mb-3">🎬</div>
          <p className="text-gray-400">ยังไม่มีวิดีโอ</p>
          <Link href="/admin/videos/new" className="text-blue-400 hover:underline text-sm mt-2 inline-block">เพิ่มวิดีโอแรก</Link>
        </div>
      ) : (
        <div className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 text-left text-sm text-gray-400 font-medium">หัวข้อ</th>
                <th className="px-4 py-3 text-left text-sm text-gray-400 font-medium hidden md:table-cell">หมวดหมู่</th>
                <th className="px-4 py-3 text-center text-sm text-gray-400 font-medium">สถานะ</th>
                <th className="px-4 py-3 text-right text-sm text-gray-400 font-medium">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {videos.map((video) => (
                <tr key={video.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3">
                    <p className="text-white text-sm font-medium line-clamp-1">{video.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{new Date(video.createdAt).toLocaleDateString('th-TH')}</p>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className="text-gray-400 text-xs">{video.category || '—'}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs px-2 py-1 rounded-full ${video.published ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'}`}>
                      {video.published ? 'เผยแพร่' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/videos/${video.id}/edit`} className="text-xs text-blue-400 hover:text-blue-300 transition-colors">แก้ไข</Link>
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
