import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className="font-display font-bold text-white text-lg">
                AdsAccount<span className="text-blue-400">Pro</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              ผู้จำหน่ายบัญชีโฆษณา Google Agency คุณภาพสูง รองรับธุรกิจทั่วไปและสายเทา
              ราคาย่อมเยา บริการ 24 ชั่วโมง
            </p>
            <div className="flex gap-3">
              <a
                href={`https://line.me/R/ti/p/${SITE_CONFIG.contact.line}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-green-500 hover:bg-green-400 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LINE"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.022.134-.033.199-.033.211 0 .391.09.51.25l2.444 3.317V8.108c0-.345.282-.63.631-.63.345 0 .627.285.627.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
              <a
                href={`https://t.me/${SITE_CONFIG.contact.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-500 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="w-9 h-9 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'หน้าหลัก' },
                { href: '/services', label: 'บริการของเรา' },
                { href: '/about', label: 'เกี่ยวกับเรา' },
                { href: '/blog', label: 'บทความ' },
                { href: '/videos', label: 'วิดีโอ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">บริการ</h3>
            <ul className="space-y-2">
              {[
                { href: '/services#google-ads', label: 'บัญชี Google Ads Agency' },
                { href: '/services#meta-ads', label: 'บัญชี Meta Ads Agency' },
                { href: '/services#dv360', label: 'บัญชี DV360' },
                { href: '/services#grey', label: 'บัญชีโฆษณาสายเทา' },
                { href: '/services#pricing', label: 'ราคาและแพ็คเกจ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">📱</span>
                <div>
                  <p className="text-gray-400 text-sm">LINE</p>
                  <a
                    href={`https://line.me/R/ti/p/${SITE_CONFIG.contact.line}`}
                    className="text-white text-sm font-medium hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SITE_CONFIG.contact.line}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✈️</span>
                <div>
                  <p className="text-gray-400 text-sm">Telegram</p>
                  <a
                    href={`https://t.me/${SITE_CONFIG.contact.telegram.replace('@', '')}`}
                    className="text-white text-sm font-medium hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SITE_CONFIG.contact.telegram}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">📧</span>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-white text-sm font-medium hover:text-blue-400 transition-colors"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} {SITE_CONFIG.name}. สงวนลิขสิทธิ์ทุกประการ
          </p>
          <div className="flex gap-4">
            <Link href="/sitemap.xml" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
              Sitemap
            </Link>
            <Link href="/robots.txt" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
              Robots
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
