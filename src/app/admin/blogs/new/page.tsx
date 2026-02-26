'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    title: '',
    content: '',
    excerpt: '',
    featuredImage: '',
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
      const res = await fetch('/api/blogs', {
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
        router.push('/admin/blogs');
        router.refresh();
      }
    } catch {
      setError('เกิดข้อผิดพลาด กรุณาลองใหม่');
    } finally {
      setLoading(false);
    }
  };

  const categories = ['Google Ads', 'Meta Ads', 'DV360', 'Notification Ads', 'สายเทา', 'ราคาและค่าใช้จ่าย', 'เทคนิค', 'การเปรียบเทียบ', 'ข่าวสาร'];
  const inputCls = 'w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 text-sm';

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-bold text-white">เพิ่มบทความใหม่</h1>
        <p className="text-gray-400 text-sm mt-1">กรอกข้อมูลบทความพร้อม SEO</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-white font-medium">ข้อมูลหลัก</h2>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">หัวข้อบทความ *</label>
            <input name="title" value={form.title} onChange={handleChange} required className={inputCls} placeholder="หัวข้อบทความที่ดึงดูดและมี Keyword" />
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
            <input name="tags" value={form.tags} onChange={handleChange} className={inputCls} placeholder="Google Ads, สายเทา, Agency Account" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">URL รูปภาพหลัก</label>
            <input name="featuredImage" value={form.featuredImage} onChange={handleChange} className={inputCls} placeholder="https://example.com/image.jpg" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">บทย่อ (Excerpt)</label>
            <textarea name="excerpt" value={form.excerpt} onChange={handleChange} rows={3} className={`${inputCls} resize-none`} placeholder="สรุปสั้นๆ ว่าบทความนี้เกี่ยวกับอะไร" />
          </div>
        </div>

        <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-white font-medium">เนื้อหาบทความ (HTML)</h2>
          <textarea name="content" value={form.content} onChange={handleChange} required rows={20} className={`${inputCls} font-mono resize-y`} placeholder="<h2>หัวข้อ</h2><p>เนื้อหา...</p>" />
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
              <p className="text-white font-medium">เผยแพร่บทความทันที</p>
              <p className="text-gray-400 text-xs">ถ้าไม่เลือก จะบันทึกเป็น Draft</p>
            </div>
          </label>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 text-red-400 text-sm">{error}</div>}

        <div className="flex gap-3">
          <button type="submit" disabled={loading} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium rounded-lg transition-colors text-sm">
            {loading ? 'กำลังบันทึก...' : form.published ? 'เผยแพร่บทความ' : 'บันทึก Draft'}
          </button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors text-sm border border-white/10">
            ยกเลิก
          </button>
        </div>
      </form>
    </div>
  );
}
