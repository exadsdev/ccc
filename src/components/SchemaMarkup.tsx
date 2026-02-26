import { SITE_CONFIG, TOP_UP_PACKAGES, FAQ_ITEMS, ACCOUNT_PRICE_USD } from '@/lib/constants';

interface SchemaMarkupProps {
  type: 'home' | 'product' | 'article' | 'video' | 'faq';
  data?: {
    title?: string;
    description?: string;
    image?: string;
    datePublished?: string;
    dateModified?: string;
    author?: string;
    videoUrl?: string;
    thumbnailUrl?: string;
    duration?: string;
  };
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const siteUrl = SITE_CONFIG.url;

  const organizationSchema = {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: SITE_CONFIG.name,
    url: siteUrl,
    description: SITE_CONFIG.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Thai', 'English'],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: { '@id': `${siteUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/blog?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'บัญชีโฆษณา Google Agency',
    description:
      'บัญชีโฆษณา Google ประเภท Agency คุณภาพสูง รองรับธุรกิจทั่วไปและสายเทา ไม่มีขั้นต่ำในการเติมเงิน',
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    offers: {
      '@type': 'Offer',
      price: ACCOUNT_PRICE_USD,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: siteUrl,
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const articleSchema = data
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image || `${siteUrl}/images/og-image.jpg`,
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        author: {
          '@type': 'Organization',
          name: data.author || SITE_CONFIG.name,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/images/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${siteUrl}/blog`,
        },
      }
    : null;

  const videoSchema = data?.videoUrl
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: data.title,
        description: data.description,
        thumbnailUrl: data.thumbnailUrl || `${siteUrl}/images/og-image.jpg`,
        uploadDate: data.datePublished,
        duration: data.duration || 'PT5M',
        embedUrl: data.videoUrl,
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
        },
      }
    : null;

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'วิธีซื้อและใช้งานบัญชีโฆษณา Google Agency',
    description:
      'ขั้นตอนง่ายๆ ในการซื้อบัญชีโฆษณา Google Agency และเริ่มต้นลงโฆษณาสำหรับธุรกิจของคุณ',
    totalTime: 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: ACCOUNT_PRICE_USD,
    },
    step: [
      {
        '@type': 'HowToStep',
        name: 'ติดต่อทีมงาน',
        text: 'ติดต่อทีมงานผ่าน LINE หรือ Telegram เพื่อสอบถามข้อมูลและยืนยันการสั่งซื้อ',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'ชำระเงิน',
        text: 'ชำระค่าบัญชี $20 USD ผ่านช่องทางที่ทีมงานแจ้ง (100% payment)',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'รับข้อมูลบัญชี',
        text: 'รับข้อมูลการเข้าถึงบัญชีโฆษณา Google Agency ภายใน 24 ชั่วโมง',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'เติมเงินและลงโฆษณา',
        text: 'เติมเงินตามแพ็คเกจที่ต้องการและเริ่มลงโฆษณาได้ทันที',
        position: 4,
      },
    ],
  };

  const schemas: Record<string, object | null> = {
    home: { schemas: [websiteSchema, organizationSchema, productSchema, howToSchema] },
    product: productSchema,
    article: articleSchema,
    video: videoSchema,
    faq: faqSchema,
  };

  const schemaData = schemas[type];
  if (!schemaData) return null;

  // For home, output multiple schemas
  if (type === 'home') {
    const homeData = schemaData as { schemas: object[] };
    return (
      <>
        {homeData.schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </>
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
