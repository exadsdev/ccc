import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';

export type Role = 'ADMIN' | 'EDITOR';

export type UserRecord = {
  id: string;
  email: string;
  name?: string | null;
  role: Role;
  createdAt: string;
  updatedAt: string;
};

export type BlogRecord = {
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
  authorId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type VideoRecord = {
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
  authorId?: string | null;
  createdAt: string;
  updatedAt: string;
};

type CollectionName = 'blogs' | 'videos' | 'users';

const DATA_DIR = path.join(process.cwd(), 'data');

function filePath(name: CollectionName) {
  return path.join(DATA_DIR, `${name}.json`);
}

async function ensureDataFiles() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const files: CollectionName[] = ['blogs', 'videos', 'users'];
  await Promise.all(
    files.map(async (f) => {
      const fp = filePath(f);
      try {
        await fs.access(fp);
      } catch {
        await fs.writeFile(fp, '[]', 'utf-8');
      }
    })
  );
}

async function readJson<T>(name: CollectionName): Promise<T[]> {
  await ensureDataFiles();
  const raw = await fs.readFile(filePath(name), 'utf-8');
  try {
    const data = JSON.parse(raw);
    return Array.isArray(data) ? (data as T[]) : [];
  } catch {
    return [];
  }
}

async function writeJson<T>(name: CollectionName, data: T[]) {
  await ensureDataFiles();
  const fp = filePath(name);
  const tmp = `${fp}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(data, null, 2), 'utf-8');
  await fs.rename(tmp, fp);
}

export function newId() {
  return crypto.randomUUID ? crypto.randomUUID() : crypto.randomBytes(16).toString('hex');
}

export function nowIso() {
  return new Date().toISOString();
}

// ---------------- Users ----------------
export async function getUserByEmail(email: string): Promise<UserRecord | null> {
  const users = await readJson<UserRecord>('users');
  return users.find((u) => u.email === email) || null;
}

export async function upsertAdminUser(email: string): Promise<UserRecord> {
  const users = await readJson<UserRecord>('users');
  const existing = users.find((u) => u.email === email);
  const t = nowIso();

  if (existing) {
    const updated: UserRecord = { ...existing, role: 'ADMIN', updatedAt: t };
    const next = users.map((u) => (u.id === existing.id ? updated : u));
    await writeJson('users', next);
    return updated;
  }

  const created: UserRecord = {
    id: newId(),
    email,
    name: 'Admin',
    role: 'ADMIN',
    createdAt: t,
    updatedAt: t,
  };
  await writeJson('users', [created, ...users]);
  return created;
}

// ---------------- Blogs ----------------
export async function listBlogs(opts?: { publishedOnly?: boolean }) {
  const blogs = await readJson<BlogRecord>('blogs');
  const filtered = opts?.publishedOnly ? blogs.filter((b) => b.published) : blogs;
  return filtered.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function getBlogById(id: string) {
  const blogs = await readJson<BlogRecord>('blogs');
  return blogs.find((b) => b.id === id) || null;
}

export async function getBlogBySlug(slug: string) {
  const blogs = await readJson<BlogRecord>('blogs');
  return blogs.find((b) => b.slug === slug) || null;
}

export async function createBlog(input: Partial<BlogRecord> & { title: string; slug: string; content: string; }) {
  const blogs = await readJson<BlogRecord>('blogs');
  const t = nowIso();
  const created: BlogRecord = {
    id: newId(),
    title: input.title,
    slug: input.slug,
    content: input.content,
    excerpt: input.excerpt ?? null,
    featuredImage: input.featuredImage ?? null,
    tags: Array.isArray(input.tags) ? input.tags : [],
    category: input.category ?? null,
    seoTitle: input.seoTitle ?? null,
    seoDesc: input.seoDesc ?? null,
    published: !!input.published,
    viewCount: Number.isFinite(input.viewCount as any) ? (input.viewCount as number) : 0,
    authorId: input.authorId ?? null,
    createdAt: t,
    updatedAt: t,
  };
  await writeJson('blogs', [created, ...blogs]);
  return created;
}

export async function updateBlog(id: string, patch: Partial<BlogRecord>) {
  const blogs = await readJson<BlogRecord>('blogs');
  const found = blogs.find((b) => b.id === id);
  if (!found) return null;

  const updated: BlogRecord = {
    ...found,
    ...patch,
    tags: Array.isArray(patch.tags) ? patch.tags : found.tags,
    viewCount: typeof patch.viewCount === 'number' ? patch.viewCount : found.viewCount,
    updatedAt: nowIso(),
  };

  await writeJson('blogs', blogs.map((b) => (b.id === id ? updated : b)));
  return updated;
}

export async function deleteBlog(id: string) {
  const blogs = await readJson<BlogRecord>('blogs');
  const next = blogs.filter((b) => b.id !== id);
  await writeJson('blogs', next);
  return { success: next.length !== blogs.length };
}

// ---------------- Videos ----------------
export async function listVideos(opts?: { publishedOnly?: boolean }) {
  const videos = await readJson<VideoRecord>('videos');
  const filtered = opts?.publishedOnly ? videos.filter((v) => v.published) : videos;
  return filtered.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function getVideoById(id: string) {
  const videos = await readJson<VideoRecord>('videos');
  return videos.find((v) => v.id === id) || null;
}

export async function getVideoBySlug(slug: string) {
  const videos = await readJson<VideoRecord>('videos');
  return videos.find((v) => v.slug === slug) || null;
}

export async function createVideo(input: Partial<VideoRecord> & { title: string; slug: string; embedUrl: string; }) {
  const videos = await readJson<VideoRecord>('videos');
  const t = nowIso();
  const created: VideoRecord = {
    id: newId(),
    title: input.title,
    slug: input.slug,
    embedUrl: input.embedUrl,
    description: input.description ?? null,
    transcript: input.transcript ?? null,
    thumbnail: input.thumbnail ?? null,
    tags: Array.isArray(input.tags) ? input.tags : [],
    category: input.category ?? null,
    seoTitle: input.seoTitle ?? null,
    seoDesc: input.seoDesc ?? null,
    published: !!input.published,
    viewCount: Number.isFinite(input.viewCount as any) ? (input.viewCount as number) : 0,
    authorId: input.authorId ?? null,
    createdAt: t,
    updatedAt: t,
  };
  await writeJson('videos', [created, ...videos]);
  return created;
}

export async function updateVideo(id: string, patch: Partial<VideoRecord>) {
  const videos = await readJson<VideoRecord>('videos');
  const found = videos.find((v) => v.id === id);
  if (!found) return null;

  const updated: VideoRecord = {
    ...found,
    ...patch,
    tags: Array.isArray(patch.tags) ? patch.tags : found.tags,
    viewCount: typeof patch.viewCount === 'number' ? patch.viewCount : found.viewCount,
    updatedAt: nowIso(),
  };

  await writeJson('videos', videos.map((v) => (v.id === id ? updated : v)));
  return updated;
}

export async function deleteVideo(id: string) {
  const videos = await readJson<VideoRecord>('videos');
  const next = videos.filter((v) => v.id !== id);
  await writeJson('videos', next);
  return { success: next.length !== videos.length };
}

// ---------------- Stats ----------------
export async function getStats() {
  const [blogs, videos] = await Promise.all([readJson<BlogRecord>('blogs'), readJson<VideoRecord>('videos')]);
  const blogCount = blogs.length;
  const videoCount = videos.length;
  const publishedBlogs = blogs.filter((b) => b.published).length;
  const publishedVideos = videos.filter((v) => v.published).length;
  return { blogCount, videoCount, publishedBlogs, publishedVideos };
}
