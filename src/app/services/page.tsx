import type { Metadata } from 'next';
import Link from 'next/link';
import PricingTable from '@/components/PricingTable';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_CONFIG, ACCOUNT_BENEFITS, FAQ_ITEMS, TERMS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'บริการจำหน่ายบัญชีโฆษณา Google Agency | ราคาและแพ็คเกจ',
  description:
    'บริการจำหน่ายบัญชีโฆษณา Google Agency, Meta Ads Agency, DV360 รองรับสายเทา ราคา $20 USD ต่อบัญชี ค่าธรรมเนียมเติมเงินตั้งแต่ 8-15% ดูแพ็คเกจทั้งหมดได้ที่นี่',
  keywords:
    'บริการโฆษณา Google Agency, ราคาบัญชีโฆษณา, แพ็คเกจโฆษณา, Meta Agency Account, DV360 Account, ค่าธรรมเนียมเติมเงิน',
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
  openGraph: {
    title: 'บริการจำหน่ายบัญชีโฆษณา Google Agency | ราคาและแพ็คเกจ',
    description:
      'บริการจำหน่ายบัญชีโฆษณา Agency รองรับสายเทา ราคา $20 USD ต่อบัญชี',
    url: `${SITE_CONFIG.url}/services`,
    type: 'website',
  },
};

const services = [
  {
    id: 'google-ads',
    title: 'บัญชีโฆษณา Google Ads Agency',
    icon: '🔍',
    color: 'blue',
    features: [
      'Google Search Ads — ลงโฆษณาในผลการค้นหา Google',
      'Google Display Ads — โฆษณา Banner ทั่วทั้ง Google Display Network',
      'Google Shopping Ads — สินค้า e-commerce บน Google',
      'YouTube Ads — วิดีโอโฆษณาบน YouTube',
      'Performance Max — แคมเปญอัตโนมัติข้ามทุกช่องทาง',
      'รองรับสินค้าสายเทา เช่น เสริมอาหาร, คลินิกความงาม, Crypto',
    ],
    price: '$20 USD / บัญชี',
    desc: 'บัญชีโฆษณา Google Ads ประเภท Agency สำหรับการลงโฆษณาบนแพลตฟอร์ม Google ทุกรูปแบบ เหมาะสำหรับธุรกิจที่ต้องการเข้าถึงกลุ่มเป้าหมายบน Google Search, Display Network, YouTube และ Google Shopping',
  },
  {
    id: 'meta-ads',
    title: 'บัญชีโฆษณา Meta Ads Agency',
    icon: '📘',
    color: 'indigo',
    features: [
      'Facebook Ads — โฆษณาบน Facebook ทุกรูปแบบ',
      'Instagram Ads — โฆษณา Story, Reels, Feed บน Instagram',
      'Messenger Ads — โฆษณาบน Facebook Messenger',
      'Audience Network — โฆษณาบน App และ Website ในเครือ Meta',
      'รองรับ Pixel Tracking และ Conversion API',
      'รองรับสินค้าสายเทาบางประเภท',
    ],
    price: '$20 USD / บัญชี',
    desc: 'บัญชีโฆษณา Meta (Facebook/Instagram) ประเภท Agency ให้คุณเข้าถึงกลุ่มเป้าหมายบน Facebook, Instagram, Messenger และ Audience Network ด้วยการเจาะกลุ่มเป้าหมายที่แม่นยำที่สุดในโลก',
  },
  {
    id: 'dv360',
    title: 'บัญชี DV360 (Display & Video 360)',
    icon: '🎯',
    color: 'violet',
    features: [
      'Display Advertising ในระดับองค์กร',
      'Video Advertising บน YouTube และ Partner Sites',
      'Programmatic Buying — ซื้อสื่อแบบ Real-time Bidding',
      'Cross-platform Campaign Management',
      'Advanced Audience Targeting',
      'Measurement & Attribution แบบครบวงจร',
    ],
    price: '$20 USD / บัญชี',
    desc: 'Display & Video 360 (DV360) คือแพลตฟอร์มโฆษณาระดับองค์กรจาก Google ที่เปิดโอกาสให้คุณซื้อสื่อโฆษณาแบบ Programmatic เหมาะสำหรับแบรนด์และเอเจนซี่ขนาดใหญ่ที่ต้องการ Reach กว้างและ Scale สูง',
  },
  {
    id: 'notification',
    title: 'บัญชี Notification Ads Agency',
    icon: '🔔',
    color: 'amber',
    features: [
      'Push Notification Ads — โฆษณา Push บนมือถือและ Desktop',
      'In-page Push Ads — โฆษณาในเว็บไซต์ที่ติดตั้ง Push',
      'Native Ads — โฆษณาที่กลมกลืนกับเนื้อหาเว็บไซต์',
      'Pop-under Ads — โฆษณา Pop ใต้หน้าต่างหลัก',
      'High CTR — อัตราคลิกสูงจากผู้ใช้ที่ opt-in จริง',
      'เหมาะสำหรับสายเทาและ Direct Response',
    ],
    price: '$20 USD / บัญชี',
    desc: 'Notification Ads เป็นช่องทางโฆษณาที่กำลังได้รับความนิยมอย่างมาก โดยเฉพาะในกลุ่มสายเทา เนื้อหาโฆษณาถูกส่งตรงถึงผู้ที่ subscribe ไว้ มี Engagement Rate สูง และ CPL ต่ำกว่าแพลตฟอร์มอื่น',
  },
];

const colorMap: Record<string, string> = {
  blue: 'border-blue-500/30 hover:border-blue-500/50',
  indigo: 'border-indigo-500/30 hover:border-indigo-500/50',
  violet: 'border-violet-500/30 hover:border-violet-500/50',
  amber: 'border-amber-500/30 hover:border-amber-500/50',
};

const badgeColorMap: Record<string, string> = {
  blue: 'bg-blue-500/20 text-blue-300',
  indigo: 'bg-indigo-500/20 text-indigo-300',
  violet: 'bg-violet-500/20 text-violet-300',
  amber: 'bg-amber-500/20 text-amber-300',
};

export default function ServicesPage() {
  return (
    <>
      <SchemaMarkup type="product" />
      <SchemaMarkup type="faq" />

      {/* Hero */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">หน้าหลัก</Link>
            <span>/</span>
            <span className="text-gray-300">บริการ</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            บริการจำหน่าย{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              บัญชีโฆษณา Agency
            </span>
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            รองรับทุกแพลตฟอร์มโฆษณา — Google, Meta, DV360, Notification Ads
            ทั้งธุรกิจทั่วไปและสายเทา ราคาเริ่มต้นเพียง <strong className="text-white">$20 USD</strong>
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#google-ads" className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-lg text-sm hover:bg-blue-500/20 transition-colors">🔍 Google Ads</a>
            <a href="#meta-ads" className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-lg text-sm hover:bg-indigo-500/20 transition-colors">📘 Meta Ads</a>
            <a href="#dv360" className="px-4 py-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 rounded-lg text-sm hover:bg-violet-500/20 transition-colors">🎯 DV360</a>
            <a href="#notification" className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-lg text-sm hover:bg-amber-500/20 transition-colors">🔔 Notification Ads</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-10 items-start scroll-mt-20 ${
                i % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-2xl">{service.icon}</span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeColorMap[service.color]}`}>
                    {service.price}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">{service.desc}</p>

                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-gray-300 text-sm">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://line.me/R/ti/p/${SITE_CONFIG.contact.line}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-colors"
                >
                  💬 สอบถามและสั่งซื้อ
                </a>
              </div>

              <div className={`${i % 2 === 1 ? 'lg:col-start-1' : ''} bg-gray-900/50 border ${colorMap[service.color]} rounded-2xl p-6 transition-colors`}>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-3">{service.icon}</div>
                  <h3 className="text-white font-bold text-xl">{service.title}</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-400 text-sm">ราคาบัญชี</span>
                    <span className="text-green-400 font-bold">$20 USD</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-400 text-sm">ขั้นต่ำการใช้จ่าย</span>
                    <span className="text-white font-semibold">${TERMS.minimumSpend} USD</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-400 text-sm">ใช้ได้ถึง</span>
                    <span className="text-white font-semibold">{TERMS.validUntil}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-400 text-sm">ภาษี</span>
                    <span className="text-white font-semibold">{TERMS.tax}%</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400 text-sm">ค่าบัญชี</span>
                    <span className="text-white font-semibold">${TERMS.accountFeeUSD} USD</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-xs text-center">⚠️ ไม่มีการคืนเงินทุกกรณี</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              ข้อดีของการใช้บัญชี Agency Account
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              บัญชีโฆษณาประเภท Agency มีข้อได้เปรียบมากมายเมื่อเทียบกับบัญชีทั่วไป
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACCOUNT_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-colors"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="bg-gray-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable />
        </div>
      </section>

      {/* How to Order */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              วิธีสั่งซื้อบัญชีโฆษณา Google Agency
            </h2>
            <p className="text-gray-400">ขั้นตอนง่ายๆ เพียง 4 ขั้นตอน</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                step: 1,
                title: 'ติดต่อทีมงาน',
                desc: 'ติดต่อผ่าน LINE OA หรือ Telegram เพื่อสอบถามรายละเอียดและยืนยันความต้องการ',
                icon: '💬',
              },
              {
                step: 2,
                title: 'ยืนยันการสั่งซื้อ',
                desc: 'ระบุจำนวนบัญชีที่ต้องการ แพลตฟอร์ม และประเภทธุรกิจ ทีมงานจะแจ้งราคาทั้งหมด',
                icon: '✅',
              },
              {
                step: 3,
                title: 'ชำระเงิน',
                desc: 'ชำระค่าบัญชี $20 USD ต่อบัญชี ผ่านช่องทางที่ทีมงานแจ้ง (ชำระ 100% ก่อนได้รับบัญชี)',
                icon: '💳',
              },
              {
                step: 4,
                title: 'รับบัญชีและเริ่มใช้งาน',
                desc: 'รับข้อมูลบัญชีโฆษณาภายใน 24 ชั่วโมง พร้อมคำแนะนำการใช้งานและเติมเงิน',
                icon: '🚀',
              },
            ].map((step) => (
              <div
                key={step.step}
                className="flex gap-4 bg-gray-900/50 border border-white/10 rounded-xl p-5"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-blue-400 font-medium">ขั้นตอนที่ {step.step}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-10">
            คำถามที่พบบ่อย
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-white/5 transition-colors">
                    <h3 className="text-white font-medium pr-4">{item.question}</h3>
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
