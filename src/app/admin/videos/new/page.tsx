'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewVideoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    title: '',
    embedUrl: '',
    description: '',
    transcript: '',
    thumbnail: '',
    tags: '',
    category: '',
    seoTitle: '',
    seoDesc: '',
    published: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'เกิดข้อผิดพลาด');
      } else {
        router.push('/admin/videos');
        router.refresh();
      }
    } catch {
      setError('เกิดข้อผิดพลาด กรุณาลองใหม่');
    } finally {
      setLoading(false);
    }
  };

  const categories = ['Google Ads', 'Meta Ads', 'DV360', 'Notification Ads', 'สายเทา', 'เทคนิค', 'การเงิน'];
  const inputCls = 'w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 text-sm';

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-bold text-white">เพิ่มวิดีโอใหม่</h1>
        <p className="text-gray-400 text-sm mt-1">กรอกข้อมูลวิดีโอพร้อม SEO</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-white font-medium">ข้อมูลวิดีโอ</h2>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">หัวข้อวิดีโอ *</label>
            <input name="title" value={form.title} onChange={handleChange} required className={inputCls} placeholder="หัวข้อวิดีโอที่ดึงดูดและมี Keyword" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Embed URL (YouTube, Vimeo) *</label>
            <input name="embedUrl" value={form.embedUrl} onChange={handleChange} required className={inputCls} placeholder="https://www.youtube.com/embed/VIDEO_ID" />
            <p className="text-gray-500 text-xs mt-1">ใช้ embed URL เช่น https://www.youtube.com/embed/dQw4w9WgXcQ</p>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">URL Thumbnail (ถ้าไม่ใส่จะใช้จาก YouTube)</label>
            <input name="thumbnail" value={form.thumbnail} onChange={handleChange} className={inputCls} placeholder="https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">หมวดหมู่</label>
            <select name="category" value={form.category} onChange={handleChange} className={inputCls}>
              <option value="">-- เลือกหมวดหมู่ --</option>
              {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">แท็ก (คั่นด้วยจุลภาค)</label>
            <input name="tags" value={form.tags} onChange={handleChange} className={inputCls} placeholder="Google Ads, สายเทา, Tutorial" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">คำอธิบายวิดีโอ</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={4} className={`${inputCls} resize-none`} placeholder="อธิบายว่าวิดีโอนี้เกี่ยวกับอะไร" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Script/Transcript (เพื่อ SEO)</label>
            <textarea name="transcript" value={form.transcript} onChange={handleChange} rows={8} className={`${inputCls} resize-y`} placeholder="คัดลอกเนื้อหาที่พูดในวิดีโอ (ช่วย SEO อย่างมาก)" />
          </div>
        </div>

        <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-white font-medium">SEO Settings</h2>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">SEO Title</label>
            <input name="seoTitle" value={form.seoTitle} onChange={handleChange} className={inputCls} placeholder="SEO Title | AdsAccount Pro" />
            <p className="text-gray-500 text-xs mt-1">{form.seoTitle.length}/60 ตัวอักษร</p>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">SEO Description</label>
            <textarea name="seoDesc" value={form.seoDesc} onChange={handleChange} rows={3} className={`${inputCls} resize-none`} placeholder="คำอธิบาย 150-160 ตัวอักษร" />
            <p className="text-gray-500 text-xs mt-1">{form.seoDesc.length}/160 ตัวอักษร</p>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" name="published" checked={form.published} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded" />
            <div>
              <p className="text-white font-medium">เผยแพร่วิดีโอทันที</p>
              <p className="text-gray-400 text-xs">ถ้าไม่เลือก จะบันทึกเป็น Draft</p>
            </div>
          </label>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 text-red-400 text-sm">{error}</div>}

        <div className="flex gap-3">
          <button type="submit" disabled={loading} className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium rounded-lg transition-colors text-sm">
            {loading ? 'กำลังบันทึก...' : form.published ? 'เผยแพร่วิดีโอ' : 'บันทึก Draft'}
          </button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors text-sm border border-white/10">
            ยกเลิก
          </button>
        </div>
      </form>
    </div>
  );
}
