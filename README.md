# AdsAccount Pro — Next.js Website

เว็บไซต์ขายบัญชีโฆษณา Google Agency รองรับธุรกิจทั่วไปและสายเทา
พร้อม Admin Panel สำหรับจัดการบทความและวิดีโอ

---

## 🚀 คุณสมบัติหลัก

- **SEO ขั้นสูง**: Meta tags, Open Graph, Twitter Cards, Schema.org (Product, FAQ, HowTo, Article, VideoObject)
- **Sitemap.xml & Robots.txt** แบบ dynamic สร้างอัตโนมัติ
- **RSS Feed** สำหรับบทความ
- **Admin Panel** สำหรับจัดการบทความและวิดีโอ (Protected with NextAuth)
- **Database**: PostgreSQL + Prisma ORM
- **Mobile Responsive**: Tailwind CSS
- **SSR/SSG**: Next.js App Router

---

## 📋 ความต้องการของระบบ

- Node.js 18+ 
- PostgreSQL (หรือเปลี่ยน provider ใน `prisma/schema.prisma` เป็น `mongodb`)
- npm หรือ yarn

---

## ⚙️ การติดตั้ง

### ขั้นตอนที่ 1: Clone และ Install dependencies

```bash
# ติดตั้ง dependencies
npm install
```

### ขั้นตอนที่ 2: ตั้งค่า Environment Variables

```bash
# คัดลอกไฟล์ตัวอย่าง
cp .env.local.example .env.local

# แก้ไขค่าใน .env.local ให้ตรงกับของคุณ
```

**ค่าที่ต้องแก้ไข:**

```env
# Database URL ของ PostgreSQL คุณ
DATABASE_URL="postgresql://username:password@localhost:5432/ads_accounts_db"

# สำหรับ MongoDB (ถ้าใช้):
# DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/ads_accounts_db"

# NextAuth Secret (สุ่มได้ที่ https://generate-secret.vercel.app/32)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-random-string-at-least-32-chars"

# Email และ Password สำหรับ Admin Login (เปลี่ยนก่อนใช้ production!)
ADMIN_EMAIL="admin@yourdomain.com"
ADMIN_PASSWORD="your-secure-admin-password-min-12-chars"

# URL เว็บไซต์ของคุณ
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"

# ข้อมูลติดต่อ
NEXT_PUBLIC_LINE_ID="@yourlineid"
NEXT_PUBLIC_TELEGRAM="@yourtelegram"
NEXT_PUBLIC_EMAIL="contact@yourdomain.com"
```

### ขั้นตอนที่ 3: ตั้งค่า Database

```bash
# สร้าง Database schema
npm run db:push

# หรือใช้ migrate สำหรับ production
npm run db:migrate
```

**สำหรับ MongoDB**: เปลี่ยน `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```
แล้วรัน `npm run db:generate && npm run db:push`

### ขั้นตอนที่ 4: เพิ่มรูปภาพ

วางรูปภาพที่ `public/images/`:
- `og-image.jpg` — รูปสำหรับ Open Graph (1200×630px)
- `logo.png` — โลโก้ (200×200px)

### ขั้นตอนที่ 5: รัน Development Server

```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ `http://localhost:3000`

---

## 🔐 การเข้าใช้งาน Admin Panel

1. เปิด `http://localhost:3000/admin`
2. Login ด้วย email/password ที่ตั้งใน `.env.local`
3. จัดการบทความ: `/admin/blogs`
4. จัดการวิดีโอ: `/admin/videos`

---

## 📦 Build สำหรับ Production

```bash
npm run build
npm run start
```

---

## 🌐 Deploy บน Vercel (แนะนำ)

1. Push code ขึ้น GitHub
2. Import project ที่ vercel.com
3. เพิ่ม Environment Variables ใน Vercel Dashboard
4. Deploy!

```bash
# หรือใช้ Vercel CLI
npx vercel --prod
```

---

## 📂 โครงสร้างไฟล์

```
ads-accounts-project/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/
│   ├── images/                # รูปภาพ (ต้องเพิ่มเอง)
│   └── manifest.json          # PWA manifest
├── src/
│   ├── app/
│   │   ├── page.tsx           # หน้าแรก (Home)
│   │   ├── about/page.tsx     # หน้าเกี่ยวกับเรา
│   │   ├── services/page.tsx  # หน้าบริการ + Pricing
│   │   ├── blog/
│   │   │   ├── page.tsx       # รายการบทความ
│   │   │   └── [slug]/page.tsx # บทความเดี่ยว
│   │   ├── videos/page.tsx    # หน้าวิดีโอ
│   │   ├── admin/             # Admin Panel (protected)
│   │   │   ├── page.tsx       # Dashboard
│   │   │   ├── blogs/         # จัดการบทความ
│   │   │   └── videos/        # จัดการวิดีโอ
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/route.ts
│   │   │   ├── blogs/route.ts
│   │   │   ├── blogs/[id]/route.ts
│   │   │   ├── videos/route.ts
│   │   │   ├── videos/[id]/route.ts
│   │   │   └── rss/route.ts   # RSS Feed
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   ├── robots.ts          # Robots.txt
│   │   └── layout.tsx         # Root layout + metadata
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PricingTable.tsx   # ตาราง Pricing
│   │   ├── CTASection.tsx
│   │   ├── BlogCard.tsx
│   │   └── SchemaMarkup.tsx   # JSON-LD Schema
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client
│   │   ├── auth.ts            # NextAuth config
│   │   └── constants.ts       # ข้อมูลราคา, เงื่อนไข, FAQ
│   └── types/index.ts
├── .env.local.example         # Template env file
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 การปรับแต่งเนื้อหา

### แก้ไขราคาและเงื่อนไข

แก้ไขที่ `src/lib/constants.ts`:

```typescript
export const ACCOUNT_PRICE_USD = 20; // ราคาต่อบัญชี

export const TOP_UP_PACKAGES = [
  { id: 'CNY01', budgetUSD: 4888, managementFee: 15, ... },
  // ...
];

export const TERMS = {
  minimumSpend: 200,
  validUntil: 'March 1, 2026',
  // ...
};
```

### แก้ไขข้อมูลติดต่อ

แก้ไขใน `.env.local`:
```env
NEXT_PUBLIC_LINE_ID="@yourlineid"
NEXT_PUBLIC_TELEGRAM="@yourtelegram"
NEXT_PUBLIC_EMAIL="contact@yourdomain.com"
```

---

## 🔍 SEO Features

- ✅ Meta tags (title, description, keywords) ทุกหน้า
- ✅ Open Graph + Twitter Cards
- ✅ Schema.org JSON-LD (Product, FAQ, HowTo, Article, VideoObject, WebSite)
- ✅ Sitemap.xml (dynamic)
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ RSS Feed
- ✅ Image alt texts
- ✅ SSR (Server-Side Rendering) สำหรับ SEO
- ✅ Fast loading (Next.js Image optimization)
- ✅ Mobile responsive

---

## 📞 ต้องการความช่วยเหลือ?

ติดต่อทีมพัฒนาหรือดูเอกสาร Next.js ที่ https://nextjs.org/docs
