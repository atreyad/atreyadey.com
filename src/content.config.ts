import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Research papers and projects.
 * Add a paper by creating a new .md file in src/content/research/.
 * The file name (without .md) becomes the URL: /research/<file-name>/
 */
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: ({ image }) =>
    z.object({
    title: z.string(),
    authors: z.array(
      z.object({
        name: z.string(),
        url: z.string().optional(),
        affiliation: z.string().optional(),
      })
    ),
    // e.g. "Working paper", "Work in progress", "Published", "Forthcoming"
    status: z.string(),
    // Free-text version note shown next to the status, e.g. "Draft: July 2026"
    version: z.string().optional(),
    // Featured paper appears in the large homepage block
    featured: z.boolean().default(false),
    // Lower numbers appear first within their section
    order: z.number().default(99),
    // Set false to hide from the homepage "Selected research" list
    selected: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    // Two–three sentence non-technical summary (shown by default)
    summary: z.string(),
    // Full academic abstract (shown behind a toggle)
    abstract: z.string().optional(),
    links: z
      .object({
        paper: z.string().optional(),
        ssrn: z.string().optional(),
        slides: z.string().optional(),
        appendix: z.string().optional(),
        code: z.string().optional(),
        data: z.string().optional(),
      })
      .default({}),
    awards: z.array(z.string()).default([]),
    presentations: z.array(z.string()).default([]),
    media: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
      // Path (relative to the content file) to a figure image, plus alt/caption
      image: image().optional(),
      imageAlt: z.string().optional(),
      imageCaption: z.string().optional(),
      bibtex: z.string().optional(),
    }),
});

/**
 * News items. Add one by creating a new .md file in src/content/news/.
 * The latest items automatically appear on the homepage.
 */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    date: z.coerce.date(),
    // Set true when only the month/season is known; the day is then not shown
    approximate: z.boolean().default(false),
    title: z.string(),
    category: z
      .enum([
        'Award',
        'Paper',
        'Presentation',
        'Media',
        'Appointment',
        'Milestone',
        'Other',
      ])
      .default('Other'),
    link: z.string().optional(),
    linkLabel: z.string().optional(),
  }),
});

export const collections = { research, news };
