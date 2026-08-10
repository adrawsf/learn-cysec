import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    status: z.enum(['planned', 'learning', 'completed']),
    date: z.date(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  })
});

export const collections = { notes };
