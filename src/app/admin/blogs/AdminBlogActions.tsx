'use client';

import { useRouter } from 'next/navigation';

export default function AdminBlogActions({ blogId }: { blogId: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm('คุณแน่ใจหรือไม่ที่จะลบบทความนี้?')) return;

    try {
      const res = await fetch(`/api/blogs/${blogId}`, { method: 'DELETE' });
      if (res.ok) {
        router.refresh();
      } else {
        alert('เกิดข้อผิดพลาดในการลบ');
      }
    } catch {
      alert('เกิดข้อผิดพลาดในการลบ');
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-xs text-red-400 hover:text-red-300 transition-colors"
    >
      ลบ
    </button>
  );
}
