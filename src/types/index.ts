export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  featuredImage?: string | null;
  tags: string[];
  category?: string | null;
  seoTitle?: string | null;
  seoDesc?: string | null;
  published: boolean;
  viewCount: number;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface VideoPost {
  id: string;
  title: string;
  slug: string;
  embedUrl: string;
  description?: string | null;
  transcript?: string | null;
  thumbnail?: string | null;
  tags: string[];
  category?: string | null;
  seoTitle?: string | null;
  seoDesc?: string | null;
  published: boolean;
  viewCount: number;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PricingPackage {
  id: string;
  budgetUSD: number;
  managementFee: number;
  label: string;
  color: string;
  popular: boolean;
  description: string;
}
