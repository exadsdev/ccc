'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE_CONFIG } from '@/lib/constants';

const navLinks = [
  { href: '/', label: 'หน้าหลัก' },
  { href: '/services', label: 'บริการ' },
  { href: '/blog', label: 'บทความ' },
  { href: '/videos', label: 'วิดีโอ' },
  { href: '/about', label: 'เกี่ยวกับเรา' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
              A
            </div>
            <span className="font-display font-bold text-white text-lg hidden sm:block">
              AdsAccount<span className="text-blue-400">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://line.me/R/ti/p/${SITE_CONFIG.contact.line}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.022.134-.033.199-.033.211 0 .391.09.51.25l2.444 3.317V8.108c0-.345.282-.63.631-.63.345 0 .627.285.627.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINE สอบถาม
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://line.me/R/ti/p/${SITE_CONFIG.contact.line}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-2 px-4 py-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition-colors text-center"
            >
              📱 ติดต่อทาง LINE
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
