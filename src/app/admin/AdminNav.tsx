'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

interface AdminNavProps {
  user?: { name?: string | null; email?: string | null };
}

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '📊', exact: true },
  { href: '/admin/blogs', label: 'บทความ', icon: '📝' },
  { href: '/admin/blogs/new', label: 'เพิ่มบทความ', icon: '➕' },
  { href: '/admin/videos', label: 'วิดีโอ', icon: '🎬' },
  { href: '/admin/videos/new', label: 'เพิ่มวิดีโอ', icon: '➕' },
];

export default function AdminNav({ user }: AdminNavProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href) && href !== '/admin';
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-white/10 flex items-center justify-between px-4 h-16">
        <span className="font-display font-bold text-white">Admin Panel</span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-gray-400 hover:text-white rounded-lg"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-gray-900 border-r border-white/10 z-40 transform transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 h-16 border-b border-white/10">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="font-display font-bold text-white">Admin Panel</span>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive(item.href, item.exact) || (item.exact && pathname === item.href)
                    ? 'bg-blue-600 text-white font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10 mt-4">
              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>🌐</span>
                ดูหน้าเว็บ
              </Link>
            </div>
          </nav>

          {/* User */}
          <div className="px-3 pb-4 border-t border-white/10 pt-4">
            <div className="flex items-center gap-3 px-3 py-2.5 mb-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                {user?.name?.[0] || user?.email?.[0] || 'A'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{user?.name || 'Admin'}</p>
                <p className="text-gray-500 text-xs truncate">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
            >
              <span>🚪</span>
              ออกจากระบบ
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
