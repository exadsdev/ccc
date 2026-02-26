export const SITE_CONFIG = {
  name: 'AdsAccount Pro',
  fullName: 'AdsAccount Pro - จำหน่ายบัญชีโฆษณา Google Agency',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://adsaccountpro.com',
  description:
    'จำหน่ายบัญชีโฆษณา Google Agency คุณภาพสูง รองรับทั้งธุรกิจทั่วไปและสายเทา ราคา $20 USD ต่อบัญชี ไม่มีขั้นต่ำในการเติมเงิน เปิดตลอด 24 ชั่วโมง',
  keywords:
    'จำหน่ายบัญชีโฆษณา, ขายบัญชีโฆษณา Google สายเทา, บัญชีโฆษณา Google Agency, ซื้อบัญชีโฆษณา, Google Ads Account, Agency Account, สายเทา',
  ogImage: '/images/og-image.jpg',
  contact: {
    line: process.env.NEXT_PUBLIC_LINE_ID || '@adsaccountpro',
    telegram: process.env.NEXT_PUBLIC_TELEGRAM || '@adsaccountpro',
    email: process.env.NEXT_PUBLIC_EMAIL || 'contact@adsaccountpro.com',
  },
};

export const ACCOUNT_PRICE_USD = 20;

export const TOP_UP_PACKAGES = [
  {
    id: 'CNY01',
    budgetUSD: 4888,
    managementFee: 15,
    label: 'Starter',
    color: 'blue',
    popular: false,
    description: 'เหมาะสำหรับผู้เริ่มต้นและธุรกิจขนาดเล็ก',
  },
  {
    id: 'CNY02',
    budgetUSD: 18888,
    managementFee: 12,
    label: 'Business',
    color: 'indigo',
    popular: true,
    description: 'ยอดนิยมสำหรับธุรกิจขนาดกลาง ค่าธรรมเนียมดีที่สุด',
  },
  {
    id: 'CNY03',
    budgetUSD: 58888,
    managementFee: 10,
    label: 'Professional',
    color: 'violet',
    popular: false,
    description: 'สำหรับธุรกิจขนาดใหญ่ที่ต้องการงบโฆษณาสูง',
  },
  {
    id: 'CNY05',
    budgetUSD: 888888,
    managementFee: 8,
    label: 'Enterprise',
    color: 'gold',
    popular: false,
    description: 'สำหรับองค์กรขนาดใหญ่ที่ต้องการค่าธรรมเนียมต่ำที่สุด',
  },
];

export const TERMS = {
  minimumSpend: 200,
  validUntil: 'March 1, 2026',
  paymentCondition: '100% payment only',
  platforms: ['Google', 'Meta', 'DV360', 'Notification Ads'],
  noRefund: true,
  tax: 16,
  accountFeeUSD: 10,
};

export const ACCOUNT_BENEFITS = [
  {
    title: 'บัญชี Agency ระดับสูง',
    description:
      'บัญชีโฆษณา Google ประเภท Agency ที่ผ่านการตรวจสอบและมีความน่าเชื่อถือสูง ไม่ถูก Suspend ง่าย',
    icon: '🏢',
  },
  {
    title: 'รองรับสายเทา',
    description:
      'รองรับสินค้าและบริการที่อยู่ในโซนสีเทา เช่น เสริมอาหาร, คาสิโนออนไลน์, สินค้าทางเพศ, คลินิกความงาม',
    icon: '⚡',
  },
  {
    title: 'ไม่มีขั้นต่ำเติมเงิน',
    description: 'ไม่มีขั้นต่ำในการเติมเงินต่อครั้ง เติมเท่าไหร่ก็ได้ตามความต้องการ',
    icon: '💰',
  },
  {
    title: 'รองรับหลายแพลตฟอร์ม',
    description: 'รองรับ Google Ads, Meta (Facebook/Instagram), DV360, และ Notification Ads',
    icon: '🌐',
  },
  {
    title: 'บริการ 24/7',
    description: 'ทีมงานพร้อมให้บริการตลอด 24 ชั่วโมง 7 วันต่อสัปดาห์ ผ่าน LINE และ Telegram',
    icon: '🕐',
  },
  {
    title: 'ราคาถูก ตรงไปตรงมา',
    description: 'ราคาบัญชีละ $20 USD เท่านั้น ไม่มีค่าธรรมเนียมซ่อนเร้น',
    icon: '✅',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'บัญชีโฆษณา Google Agency คืออะไร?',
    answer:
      'บัญชีโฆษณา Google Agency เป็นบัญชีประเภทพิเศษที่สร้างภายใต้ Agency Account ของ Google มีความน่าเชื่อถือสูงกว่าบัญชีทั่วไป สามารถลงโฆษณาสินค้าและบริการที่บัญชีปกติอาจถูกปฏิเสธ',
  },
  {
    question: 'สายเทาคืออะไร ลงโฆษณาอะไรได้บ้าง?',
    answer:
      'สายเทา (Grey Area) หมายถึงสินค้า/บริการที่ไม่ผิดกฎหมายโดยตรง แต่อาจขัดกับนโยบายโฆษณาของ Google เช่น เสริมอาหาร, ผลิตภัณฑ์เพื่อสุขภาพบางประเภท, คลินิกความงาม, การพนันในบางประเทศ, สินค้าผู้ใหญ่บางประเภท',
  },
  {
    question: 'ราคาบัญชีโฆษณา Google Agency เท่าไหร่?',
    answer:
      'ราคาบัญชีละ $20 USD เท่านั้น ไม่มีค่าธรรมเนียมแรกเข้า มีค่าบัญชี $10 และภาษี 16% เพิ่มเติมในขั้นตอนการเติมเงิน',
  },
  {
    question: 'เติมเงินขั้นต่ำเท่าไหร่?',
    answer:
      'ไม่มีขั้นต่ำในการเติมเงินต่อครั้ง แต่แนะนำให้เติมอย่างน้อย $200 USD เพื่อให้โฆษณาทำงานได้อย่างต่อเนื่อง',
  },
  {
    question: 'รองรับแพลตฟอร์มโฆษณาอะไรบ้าง?',
    answer:
      'รองรับ Google Ads, Meta Ads (Facebook และ Instagram), DV360 (Display & Video 360), และ Notification Ads',
  },
  {
    question: 'มีการคืนเงินหรือไม่?',
    answer:
      'ไม่มีการคืนเงินทุกกรณี กรุณาศึกษาเงื่อนไขให้ครบถ้วนก่อนตัดสินใจซื้อ สามารถสอบถามรายละเอียดเพิ่มเติมได้ก่อนการซื้อ',
  },
  {
    question: 'ค่าธรรมเนียมการเติมเงินคำนวณอย่างไร?',
    answer:
      'ค่าธรรมเนียมขึ้นอยู่กับแพ็คเกจที่เลือก: CNY01 ($4,888) ค่าธรรมเนียม 15%, CNY02 ($18,888) ค่าธรรมเนียม 12%, CNY03 ($58,888) ค่าธรรมเนียม 10%, CNY05 ($888,888) ค่าธรรมเนียม 8% นอกจากนี้ยังมีภาษี 16% และค่าบัญชี $10 USD',
  },
  {
    question: 'ซื้อบัญชีได้ที่ไหน ติดต่ออย่างไร?',
    answer:
      'ติดต่อได้ผ่าน LINE @adsaccountpro หรือ Telegram @adsaccountpro ทีมงานพร้อมให้บริการตลอด 24 ชั่วโมง',
  },
];
