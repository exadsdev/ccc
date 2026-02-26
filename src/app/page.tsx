import type { Metadata } from 'next';
import Link from 'next/link';
import PricingTable from '@/components/PricingTable';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_CONFIG, ACCOUNT_BENEFITS, FAQ_ITEMS, TOP_UP_PACKAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'จำหน่ายบัญชีโฆษณา Google Agency | ขายบัญชีโฆษณา Google สายเทา ราคา $20',
  description:
    'จำหน่ายบัญชีโฆษณา Google Agency คุณภาพสูง รองรับทั้งธุรกิจทั่วไปและสายเทา ราคาเพียง $20 USD ต่อบัญชี ไม่มีขั้นต่ำในการเติมเงิน บริการ 24/7 ผ่าน LINE และ Telegram',
  keywords:
    'จำหน่ายบัญชีโฆษณา, ขายบัญชีโฆษณา Google สายเทา, บัญชีโฆษณา Google Agency, ซื้อบัญชีโฆษณา Google, Google Ads Agency Account, บัญชีโฆษณาสายเทา',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: 'จำหน่ายบัญชีโฆษณา Google Agency | ขายบัญชีโฆษณา Google สายเทา',
    description:
      'จำหน่ายบัญชีโฆษณา Google Agency คุณภาพสูง รองรับธุรกิจทั่วไปและสายเทา ราคา $20 USD',
    url: SITE_CONFIG.url,
    type: 'website',
  },
};

const stats = [
  { label: 'บัญชีที่จำหน่ายแล้ว', value: '1,000+', icon: '📊' },
  { label: 'ลูกค้าที่พึงพอใจ', value: '500+', icon: '😊' },
  { label: 'ปีที่ให้บริการ', value: '5+', icon: '🏆' },
  { label: 'พร้อมให้บริการ', value: '24/7', icon: '⚡' },
];

const platforms = [
  { name: 'Google Ads', icon: '🔍', desc: 'Search, Display, Shopping, YouTube' },
  { name: 'Meta Ads', icon: '📘', desc: 'Facebook, Instagram, Messenger' },
  { name: 'DV360', icon: '🎯', desc: 'Display & Video 360 by Google' },
  { name: 'Notification Ads', icon: '🔔', desc: 'Push Notification Advertising' },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup type="home" />
      <SchemaMarkup type="faq" />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gray-950">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/3 rounded-full blur-3xl" />
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 text-blue-400 text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              พร้อมจำหน่ายทันที — บริการ 24/7
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 animate-slide-up">
              <span className="block">จำหน่ายบัญชีโฆษณา</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                Google Agency
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-300 mt-2">
                รองรับ <span className="text-amber-400">สายเทา</span> และธุรกิจทั่วไป
              </span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              ขายบัญชีโฆษณา Google สายเทา และบัญชีโฆษณา Agency คุณภาพสูง
              ราคาเพียง{' '}
              <strong className="text-white font-bold text-2xl">$20 USD</strong> ต่อบัญชี
              ไม่มีขั้นต่ำในการเติมเงิน รองรับ Google, Meta, DV360 และ Notification Ads
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a
                href={`https://line.me/R/ti/p/${SITE_CONFIG.contact.line}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl text-lg transition-all shadow-lg shadow-green-500/30 hover:-translate-y-0.5 hover:shadow-green-500/50"
              >
                <span>🛒</span>
                ซื้อบัญชีโฆษณาตอนนี้
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg transition-all border border-white/20 hover:-translate-y-0.5"
              >
                <span>💰</span>
                ดูราคา
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {[
                { icon: '✅', text: 'บัญชีแท้ คุณภาพสูง' },
                { icon: '⚡', text: 'ส่งมอบภายใน 24 ชม.' },
                { icon: '🔒', text: 'ปลอดภัย 100%' },
                { icon: '📞', text: 'ซัพพอร์ตตลอด 24/7' },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-1.5 text-sm text-gray-400">
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Price Card */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 animate-float">
            <div className="bg-gray-900/80 backdrop-blur border border-white/20 rounded-2xl p-6 shadow-2xl w-64">
              <div className="text-center mb-4">
                <div className="text-5xl font-display font-bold text-white">$20</div>
                <div className="text-gray-400 text-sm">USD / บัญชี</div>
              </div>
              <div className="space-y-2 mb-4">
                {['Google Ads Agency', 'Meta Ads Agency', 'DV360 Access', 'Notification Ads'].map(
                  (feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  )
                )}
              </div>
              <a
                href={`https://line.me/R/ti/p/${SITE_CONFIG.contact.line}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all"
              >
                สั่งซื้อเลย
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Agency Account */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-indigo-400 text-sm font-medium mb-4">
                🏢 บัญชีประเภท Agency
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                บัญชีโฆษณา Google Agency คืออะไร?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                บัญชีโฆษณา Google Agency (Google Ads Agency Account) เป็นบัญชีโฆษณาประเภทพิเศษที่
                สร้างขึ้นภายใต้ Partner Agency Account ของ Google มีสถานะความน่าเชื่อถือสูงกว่าบัญชีปกติ
                ทำให้สามารถลงโฆษณาในหมวดหมู่ที่บัญชีทั่วไปอาจถูก Google ปฏิเสธได้
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                บัญชีประเภทนี้เป็นที่นิยมอย่างมากในกลุ่มนักการตลาดสายเทา (Grey Hat Marketers)
                เนื่องจากมีโอกาสถูก Suspend น้อยกว่า และสามารถโปรโมทสินค้า/บริการที่อยู่ในโซนสีเทาได้
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors"
              >
                ดูรายละเอียดบริการ
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {ACCOUNT_BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-gray-900/50 border border-white/10 rounded-xl p-4 hover:border-blue-500/30 transition-colors"
                >
                  <div className="text-2xl mb-2">{benefit.icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grey Area Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/30 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 text-amber-400 text-sm font-medium mb-4">
              ⚡ บัญชีโฆษณา Google สายเทา
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              รองรับโฆษณาสายเทา (Grey Area Advertising)
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              บัญชีของเรารองรับสินค้าและบริการที่อยู่ในโซนสีเทา ซึ่งปกติแล้วบัญชีโฆษณาทั่วไปอาจถูกปฏิเสธ
              หรือถูก Suspend ได้ง่าย
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { category: 'เสริมอาหาร & สุขภาพ', icon: '💊', examples: 'วิตามิน, โปรตีน, อาหารเสริม' },
              { category: 'คลินิกความงาม', icon: '💆', examples: 'เสริมจมูก, ฟิลเลอร์, โบทอกซ์' },
              { category: 'สินค้าผู้ใหญ่', icon: '🔞', examples: 'ผลิตภัณฑ์เพื่อสุขภาพทางเพศ' },
              { category: 'การเงิน & Crypto', icon: '₿', examples: 'Cryptocurrency, Forex, CFD' },
              { category: 'การพนัน (บางประเทศ)', icon: '🎰', examples: 'คาสิโนออนไลน์ที่ถูกกฎหมาย' },
              { category: 'ยาและเวชภัณฑ์', icon: '💉', examples: 'ยาตามใบสั่งแพทย์บางประเภท' },
              { category: 'บุหรี่ไฟฟ้า', icon: '💨', examples: 'E-cigarette, Pod, Vape' },
              { category: 'สายสุขภาพอื่นๆ', icon: '🌿', examples: 'CBD, กัญชาทางการแพทย์' },
            ].map((item) => (
              <div
                key={item.category}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-4 hover:border-amber-500/30 transition-colors group"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-amber-300 transition-colors">
                  {item.category}
                </h3>
                <p className="text-gray-500 text-xs">{item.examples}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm text-center mt-8">
            * หมายเหตุ: สินค้าต้องไม่ผิดกฎหมายในประเทศที่โฆษณา โปรดตรวจสอบกฎหมายท้องถิ่นก่อนลงโฆษณา
          </p>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-white text-center mb-8">
            แพลตฟอร์มที่รองรับ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-colors"
              >
                <div className="text-3xl mb-3">{platform.icon}</div>
                <h3 className="text-white font-semibold mb-1">{platform.name}</h3>
                <p className="text-gray-400 text-xs">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              คำถามที่พบบ่อย (FAQ)
            </h2>
            <p className="text-gray-400">
              คำถามที่ลูกค้าถามเข้ามาบ่อยที่สุดเกี่ยวกับการซื้อบัญชีโฆษณา Google Agency
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-white/5 transition-colors">
                    <h3 className="text-white font-medium pr-4">{item.question}</h3>
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-white">บทความล่าสุด</h2>
            <Link
              href="/blog"
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 transition-colors"
            >
              ดูทั้งหมด
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Static preview cards */}
            {[
              {
                title: 'วิธีใช้บัญชีโฆษณา Google Agency ให้ได้ประสิทธิภาพสูงสุด',
                excerpt: 'เทคนิคและกลยุทธ์การใช้บัญชีโฆษณา Google Agency สำหรับนักการตลาดมืออาชีพ รวมถึงการตั้งค่า Campaign และการเพิ่มประสิทธิภาพ ROI',
                category: 'Google Ads',
                date: '15 ม.ค. 2568',
                emoji: '🎯',
              },
              {
                title: 'ทำไมนักการตลาดสายเทาต้องใช้ Agency Account?',
                excerpt: 'อธิบายความแตกต่างระหว่างบัญชีโฆษณาทั่วไปและ Agency Account และเหตุผลที่นักการตลาดสายเทาเลือกใช้บัญชีประเภทนี้',
                category: 'สายเทา',
                date: '10 ม.ค. 2568',
                emoji: '⚡',
              },
              {
                title: 'เปรียบเทียบแพลตฟอร์มโฆษณา: Google vs Meta vs DV360',
                excerpt: 'วิเคราะห์ข้อดีข้อเสียของแต่ละแพลตฟอร์มโฆษณา เพื่อช่วยให้คุณเลือกแพลตฟอร์มที่เหมาะสมกับธุรกิจของคุณ',
                category: 'การเปรียบเทียบ',
                date: '5 ม.ค. 2568',
                emoji: '📊',
              },
            ].map((post) => (
              <div
                key={post.title}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg mb-4 flex items-center justify-center text-4xl">
                  {post.emoji}
                </div>
                <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full px-2.5 py-0.5">
                  {post.category}
                </span>
                <h3 className="text-white font-semibold mt-3 mb-2 leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                <p className="text-gray-500 text-xs">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
