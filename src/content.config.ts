import { defineCollection, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { COLLECTIONS, LANES } from './lib/lanes';

const schema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    date: z.coerce.date(),
    lane: z.enum(LANES),
    medium: z.string().optional(),
    summary: z.string().optional(),
    cover: z.union([z.url(), image()]).optional(),
    venue: z.string().optional(),
    location: z.string().optional(),
    authors: z.string().optional(),
    note: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    slug: z.string().optional(),
  });

// Ids are the URL segment: the `slug` field if set, otherwise the file name as written
// (the default loader would lowercase `Audiobia`).
const collection = (name: string) =>
  defineCollection({
    loader: glob({
      pattern: '*.md',
      base: `./src/content/${name}`,
      generateId: ({ entry, data }) => (data.slug as string | undefined) ?? entry.replace(/\.md$/, ''),
    }),
    schema,
  });

export const collections = Object.fromEntries(COLLECTIONS.map((name) => [name, collection(name)]));
