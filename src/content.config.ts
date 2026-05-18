import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  categories: z.array(z.string()).default([]),
  description: z.string().default(''),
});

const tunedTheology = defineCollection({
  type: 'content',
  schema: postSchema,
});

const startupStarters = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = {
  'tuned-theology': tunedTheology,
  'startup-starters': startupStarters,
};
