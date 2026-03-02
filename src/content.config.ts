import { defineCollection, z } from 'astro:content';

// Shared schemas — reused for both English and Polish collections

const devlogSchema = z.object({
  title: z.string(),
  date: z.string(), // ISO date string e.g. "2026-03-02"
  version: z.string().optional(), // game version this entry covers, e.g. "v0.040"
  summary: z.string(), // 1-2 sentence summary for previews
  image: z.string().optional(),
});

const newsSchema = z.object({
  title: z.string(),
  date: z.string(),
  summary: z.string(),
  published: z.boolean().default(true),
  heroImage: z.string().optional(),
});

// English collections
const devlog = defineCollection({ type: 'content', schema: devlogSchema });
const news = defineCollection({ type: 'content', schema: newsSchema });

// Polish translations — same schemas, different content directory
const devlogPl = defineCollection({ type: 'content', schema: devlogSchema });
const newsPl = defineCollection({ type: 'content', schema: newsSchema });

export const collections = {
  devlog,
  news,
  'devlog-pl': devlogPl,
  'news-pl': newsPl,
};
