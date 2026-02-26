import { SITE_CONFIG } from '@/lib/constants';

export default function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-900/30 to-blue-900/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 text-green-400 text-sm font-medium mb-6">
          🟢 พร้อมให้บริการตลอด 24 ชั่วโมง
        </div>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
          พร้อมเริ่มต้นแล้วหรือยัง?
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            ซื้อบัญชีโฆษณาวันนี้
          </span>
        </h2>

        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          ติดต่อทีมงานเพื่อสั่งซื้อบัญชีโฆษณา Google Agency ได้ทันที
          เริ่มต้นเพียง <strong className="text-white">$20 USD</strong> เท่านั้น
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://line.me/R/ti/p/${SITE_CONFIG.contact.line}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl text-lg transition-all duration-200 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.022.134-.033.199-.033.211 0 .391.09.51.25l2.444 3.317V8.108c0-.345.282-.63.631-.63.345 0 .627.285.627.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            สั่งซื้อผ่าน LINE
          </a>

          <a
            href={`https://t.me/${SITE_CONFIG.contact.telegram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-lg transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            สั่งซื้อผ่าน Telegram
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          📧 หรืออีเมล{' '}
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="text-gray-400 hover:text-blue-400 underline transition-colors"
          >
            {SITE_CONFIG.contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}
