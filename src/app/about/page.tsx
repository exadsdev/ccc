import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา — AdsAccount Pro ผู้จำหน่ายบัญชีโฆษณา Google Agency',
  description:
    'AdsAccount Pro คือผู้นำในการจำหน่ายบัญชีโฆษณา Google Agency รองรับทั้งธุรกิจทั่วไปและสายเทา มีประสบการณ์กว่า 5 ปี ให้บริการลูกค้ามากกว่า 500 ราย',
  keywords:
    'AdsAccount Pro, เกี่ยวกับเรา, ผู้จำหน่ายบัญชีโฆษณา Google, บริการโฆษณา Agency',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: 'เกี่ยวกับเรา | AdsAccount Pro',
    description: 'ผู้นำในการจำหน่ายบัญชีโฆษณา Google Agency มีประสบการณ์กว่า 5 ปี',
    url: `${SITE_CONFIG.url}/about`,
    type: 'website',
  },
};

const milestones = [
  {
    year: '2019',
    title: 'ก่อตั้งบริษัท',
    desc: 'เริ่มต้นธุรกิจจำหน่ายบัญชีโฆษณา Google Agency ด้วยทีมงานผู้เชี่ยวชาญด้านดิจิทัลมาร์เก็ตติ้ง',
  },
  {
    year: '2020',
    title: 'ขยายบริการสู่ Meta Ads',
    desc: 'เพิ่มบริการจำหน่ายบัญชีโฆษณา Facebook และ Instagram Agency เพื่อตอบสนองความต้องการลูกค้า',
  },
  {
    year: '2021',
    title: '500+ ลูกค้า',
    desc: 'บรรลุเป้าหมายลูกค้า 500 รายแรก ด้วยคุณภาพและบริการที่เหนือกว่าคู่แข่ง',
  },
  {
    year: '2022',
    title: 'เพิ่มบริการ DV360',
    desc: 'เปิดตัวบริการบัญชี Display & Video 360 (DV360) สำหรับองค์กรขนาดใหญ่',
  },
  {
    year: '2023',
    title: '1,000+ บัญชีที่จำหน่าย',
    desc: 'จำหน่ายบัญชีโฆษณาไปแล้วกว่า 1,000 บัญชี ครอบคลุมกว่า 20 ประเทศทั่วโลก',
  },
  {
    year: '2024–2025',
    title: 'ขยายสู่ Notification Ads',
    desc: 'เพิ่มบริการ Notification Ads Agency Account รองรับโฆษณา Push Notification สำหรับแอปพลิเคชัน',
  },
];

const teamMembers = [
  {
    name: 'ทีมงานฝ่ายขาย',
    role: 'Sales & Account Management',
    desc: 'ทีมงานผู้เชี่ยวชาญด้านการขายและการจัดการบัญชีโฆษณา พร้อมให้คำปรึกษาตลอด 24 ชั่วโมง',
    emoji: '👨‍💼',
  },
  {
    name: 'ทีมงานฝ่ายเทคนิค',
    role: 'Technical Support',
    desc: 'นักเทคนิคผู้เชี่ยวชาญด้านการตั้งค่าและแก้ไขปัญหาบัญชีโฆษณาทุกประเภท',
    emoji: '👨‍💻',
  },
  {
    name: 'ทีมงานฝ่ายการตลาด',
    role: 'Digital Marketing',
    desc: 'ผู้เชี่ยวชาญด้านดิจิทัลมาร์เก็ตติ้งที่คอยให้คำแนะนำเกี่ยวกับกลยุทธ์โฆษณา',
    emoji: '📊',
  },
];

const values = [
  {
    title: 'ความโปร่งใส',
    desc: 'เราบอกราคาและเงื่อนไขชัดเจนทุกอย่าง ไม่มีค่าใช้จ่ายซ่อนเร้น',
    icon: '🔍',
  },
  {
    title: 'คุณภาพสูงสุด',
    desc: 'ทุกบัญชีผ่านการตรวจสอบคุณภาพก่อนส่งมอบ รับประกันความพร้อมใช้งาน',
    icon: '⭐',
  },
  {
    title: 'บริการรวดเร็ว',
    desc: 'ส่งมอบบัญชีภายใน 24 ชั่วโมง หลังยืนยันการชำระเงิน',
    icon: '⚡',
  },
  {
    title: 'ซัพพอร์ตตลอดเวลา',
    desc: 'ทีมงานพร้อมช่วยเหลือตลอด 24 ชั่วโมง ผ่าน LINE และ Telegram',
    icon: '🕐',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">หน้าหลัก</Link>
            <span>/</span>
            <span className="text-gray-300">เกี่ยวกับเรา</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            เกี่ยวกับ{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              AdsAccount Pro
            </span>
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
            เราคือผู้นำในการจำหน่ายบัญชีโฆษณา Google Agency รองรับทั้งธุรกิจทั่วไปและสายเทา
            ด้วยประสบการณ์กว่า 5 ปีในวงการดิจิทัลมาร์เก็ตติ้ง
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                ใครคือ AdsAccount Pro?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                AdsAccount Pro ก่อตั้งขึ้นในปี 2019 โดยทีมงานผู้เชี่ยวชาญด้านดิจิทัลมาร์เก็ตติ้ง
                ที่มีประสบการณ์ตรงในการบริหารบัญชีโฆษณา Google Agency มายาวนาน
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                เราเริ่มต้นจากการเป็นเอเจนซี่โฆษณาเอง และได้เห็นปัญหาที่นักการตลาดหลายคนเผชิญ
                คือการถูก Suspend บัญชีโฆษณาโดยไม่มีเหตุผลชัดเจน
                ทำให้เราตัดสินใจพัฒนาและจำหน่ายบัญชีโฆษณา Agency Account คุณภาพสูง
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                ปัจจุบัน เราให้บริการลูกค้ามากกว่า 500 ราย ใน 20+ ประเทศทั่วโลก
                และจำหน่ายบัญชีโฆษณาไปแล้วกว่า 1,000 บัญชี โดยมีอัตราความพึงพอใจของลูกค้าสูงถึง 98.5%
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors text-sm"
                >
                  บริการของเรา
                </Link>
                <Link
                  href="/blog"
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors text-sm border border-white/20"
                >
                  บทความและข้อมูล
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-gray-900/50 border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-colors"
                >
                  <div className="text-2xl mb-3">{value.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              ประวัติและเส้นทางของเรา
            </h2>
            <p className="text-gray-400">
              เส้นทางการเติบโตของ AdsAccount Pro จากปี 2019 จนถึงปัจจุบัน
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={milestone.year} className="sm:pl-20 relative">
                  {/* Year Dot */}
                  <div className="hidden sm:flex absolute left-0 top-0 w-16 h-16 items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/20" />
                  </div>

                  <div className="bg-gray-900/50 border border-white/10 rounded-xl p-5 hover:border-blue-500/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-bold rounded-lg px-3 py-1">
                          {milestone.year}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{milestone.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{milestone.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">ทีมงานของเรา</h2>
            <p className="text-gray-400">ทีมผู้เชี่ยวชาญพร้อมให้บริการตลอด 24 ชั่วโมง</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-colors"
              >
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            ทำไมต้องเลือก AdsAccount Pro?
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'ประสบการณ์และความเชี่ยวชาญ',
                a: 'เรามีประสบการณ์ตรงในการใช้งานและบริหารบัญชีโฆษณา Agency Account มากกว่า 5 ปี เข้าใจปัญหาและความต้องการของนักการตลาดเป็นอย่างดี',
              },
              {
                q: 'บัญชีคุณภาพสูง ผ่านการตรวจสอบ',
                a: 'ทุกบัญชีที่เราจำหน่ายผ่านกระบวนการตรวจสอบคุณภาพอย่างละเอียด เพื่อให้มั่นใจว่าลูกค้าจะได้รับบัญชีที่พร้อมใช้งานและมีความเสถียร',
              },
              {
                q: 'ราคาโปร่งใส ไม่มีค่าใช้จ่ายซ่อนเร้น',
                a: 'เราระบุราคาและเงื่อนไขทั้งหมดอย่างชัดเจน $20 USD ต่อบัญชี มีค่าธรรมเนียมการเติมเงินตามแพ็คเกจที่เลือก บวกภาษี 16% และค่าบัญชี $10',
              },
              {
                q: 'ซัพพอร์ตหลังการขายตลอด 24/7',
                a: 'ทีมงานพร้อมช่วยเหลือและตอบคำถามตลอด 24 ชั่วโมง 7 วันต่อสัปดาห์ ผ่าน LINE OA และ Telegram',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 bg-gray-900/50 border border-white/10 rounded-xl p-5"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-400 mb-4">
              มีคำถามเพิ่มเติม? ดูหน้า{' '}
              <Link href="/services" className="text-blue-400 hover:underline">
                บริการ
              </Link>{' '}
              หรือ{' '}
              <Link href="/blog" className="text-blue-400 hover:underline">
                บทความ
              </Link>{' '}
              ของเรา
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
